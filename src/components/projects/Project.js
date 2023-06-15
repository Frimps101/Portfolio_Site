import React from 'react'
import { Card, Space } from 'antd';
import "./project.css";

const Project = () => {
    return (
        <div className='section'>
            <h3 className='text-3xl font-bold underline'>Project</h3>
            <Space direction="horizontal" size={16} className='section' wrap="true">
                <Card
                    title="Default size card"
                    extra={
                        <div>
                            <a href="#">More</a>
                            <a href="#">More</a>
                        </div>
                    }
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card
                    title="Default size card"
                    extra={<a href="#">More</a>}
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card
                    title="Default size card"
                    extra={<a href="#">More</a>}
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                <Card
                    title="Default size card"
                    extra={<a href="#">More</a>}
                    style={{
                        width: 300,
                    }}
                >
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>

                
            </Space>
        </div>
    )
}

export default Project