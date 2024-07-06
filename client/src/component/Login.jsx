import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { submitLogin } from '../toolkit/Slice/user/userThunk';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onFinish = async (values) => {
        setLoading(true);
        try {
            dispatch(submitLogin(values)).then((res) => {
                // console.log("res", res)
                if (res.payload.success) {
                    navigate('/car')
                }
            })
        } catch (error) {
            message.error('Login failed. Please check your credentials.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const formStyle = {
        width: '500px',
        margin: '100px auto',
        padding: '40px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        height: "300px",
    };

    const mainStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5',
        width: "100vw"
    }

    return (
        <div style={mainStyle}>
            <Form
                name="login"
                onFinish={onFinish}
                style={formStyle}
                layout='vertical'
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Email" autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password prefix={<LockOutlined />} placeholder="Password" autoComplete="off" />
                </Form.Item>

                <Form.Item >
                    <Button
                        style={{ marginTop: "20px" }}
                        type="primary"
                        htmlType="submit"
                        loading={loading}
                        block
                    >
                        Log in
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
