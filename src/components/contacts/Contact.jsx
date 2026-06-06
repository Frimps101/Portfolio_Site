import React, { useContext, useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import { ThemeContext } from "../../context";

const EMAILJS_PUBLIC_KEY =
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "user_uN8bq0ZKKSPbC1eQZUySN";
const EMAILJS_SERVICE_ID =
  process.env.REACT_APP_EMAILJS_SERVICE_ID || "portfolio_contact_form";
const EMAILJS_TEMPLATE_ID =
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "contact_form";

const CONTACT_EMAIL = "josephinefkwakye001@gmail.com";

const getSubmitErrorMessage = (err) => {
  const apiMessage =
    typeof err === "string" ? err : err?.text || err?.message || "";

  if (/invalid grant|gmail_api|reconnect your gmail/i.test(apiMessage)) {
    return `Gmail is still disconnected on EmailJS service "${EMAILJS_SERVICE_ID}". In EmailJS → Email Services, open that exact service and click Reconnect. If you reconnected a different service, copy its Service ID into a .env file as REACT_APP_EMAILJS_SERVICE_ID.`;
  }

  if (/service id not found/i.test(apiMessage)) {
    return `EmailJS service "${EMAILJS_SERVICE_ID}" was not found. Copy the correct Service ID from your EmailJS dashboard into REACT_APP_EMAILJS_SERVICE_ID in a .env file.`;
  }

  if (/template id not found/i.test(apiMessage)) {
    return `EmailJS template "${EMAILJS_TEMPLATE_ID}" was not found. Copy the correct Template ID into REACT_APP_EMAILJS_TEMPLATE_ID in a .env file.`;
  }

  if (/public key is invalid/i.test(apiMessage)) {
    return "Your EmailJS Public Key is invalid. Copy the current Public Key from EmailJS → Account into REACT_APP_EMAILJS_PUBLIC_KEY in a .env file.";
  }

  if (apiMessage) {
    return `EmailJS error: ${apiMessage}`;
  }

  return "Could not send your message right now.";
};

const buildMailtoLink = (form) => {
  if (!form) return `mailto:${CONTACT_EMAIL}`;

  const data = new FormData(form);
  const subject = data.get("user_subject") || "Portfolio contact";
  const body = [
    `Name: ${data.get("user_name") || ""}`,
    `Email: ${data.get("user_email") || ""}`,
    "",
    data.get("message") || "",
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
};

const Contact = () => {
  const formRef = useRef(null);
  const [done, setDone] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [mailtoLink, setMailtoLink] = useState("");
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formRef.current) return;

    setSending(true);
    setDone(false);
    setError("");
    setMailtoLink("");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setDone(true);
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", {
        status: err?.status,
        text: err?.text,
        serviceId: EMAILJS_SERVICE_ID,
        templateId: EMAILJS_TEMPLATE_ID,
      });
      setError(getSubmitErrorMessage(err));
      setMailtoLink(buildMailtoLink(formRef.current));
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="c">
      <div className="c-bg" aria-hidden="true" />
      <div className="c-wrapper content-container">
        <div className="c-left">
          <h1 className="c-title">Let's discuss your project</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              +233 556 402727
            </div>
            <div className="c-info-item">
              <img src={Email} alt="" className="c-icon" />
              josephinefkwakye001@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>What's your story? Get in touch.</b> Always freelancing if the
            right project comes along me.
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            method="post"
            action="#contact"
          >
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="text"
              placeholder="Subject"
              name="user_subject"
              required
            />
            <input
              style={{ backgroundColor: darkMode && "#333" }}
              type="email"
              placeholder="Email"
              name="user_email"
              required
            />
            <textarea
              style={{ backgroundColor: darkMode && "#333" }}
              name="message"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button type="submit" disabled={sending}>
              {sending ? "Sending..." : "Submit"}
            </button>
            <p className="c-thanks">{done && "Thank you. Your message was sent."}</p>
            {error ? (
              <div className="c-error-wrap">
                <p className="c-error">{error}</p>
                {mailtoLink ? (
                  <a className="c-mailto-fallback" href={mailtoLink}>
                    Email {CONTACT_EMAIL} instead
                  </a>
                ) : null}
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
