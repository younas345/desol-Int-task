import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { submitCar } from '../toolkit/Slice/car/carThunk';
import { useForm } from 'antd/es/form/Form';

const CarForm = () => {
    const [loading, setLoading] = useState(false);
    const [fileList, setFileList] = useState([]);
    const [form] = useForm()
    const dispatch = useDispatch();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            const formData = new FormData();
            formData.append('model', values.model);
            formData.append('price', values.price);
            formData.append('phoneNumber', values.phoneNumber);
            formData.append('city', values.city);
            fileList.forEach(file => {
                formData.append('images', file.originFileObj);
            });

            await dispatch(submitCar(formData));
            form.resetFields(); // Reset the form fields
            setFileList([]); // Clear the uploaded files
        } catch (error) {
            message.error('Submission failed. Please try again.');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = ({ fileList }) => {
        setFileList(fileList);
    };

    const formStyle = {
        width: '50%',
        maxWidth: '500px',
        padding: '20px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        backgroundColor: 'white',
        margin: '0 auto',
    };

    const containerStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100vh',
        backgroundColor: '#f0f2f5',
        padding: '10px',
        width:"97.5vw"
    };

    return (
        <div style={containerStyle}>
            <Form layout="vertical" onFinish={onFinish} form={form} style={formStyle}>
                <Form.Item
                    name="model"
                    label="Car Model"
                    rules={[{ required: true, message: 'Please input the car model!' }]}
                >
                    <Input placeholder="Enter car model" />
                </Form.Item>

                <Form.Item
                    name="price"
                    label="Price"
                    rules={[{ required: true, message: 'Please input the price!' }]}
                >
                    <InputNumber placeholder="Enter price" style={{ width: '100%' }} />
                </Form.Item>

                <Form.Item
                    name="phoneNumber"
                    label="Phone Number"
                    rules={[
                        { required: true, message: 'Please input your phone number!' },
                        // { pattern: /^\d{11}$/, message: 'Phone number must be 11 digits!' }
                    ]}
                >
                    <Input placeholder="Enter phone number" />
                </Form.Item>

                <Form.Item
                    name="city"
                    label="City"
                    rules={[{ required: true, message: 'Please input the city!' }]}
                >
                    <Input placeholder="Enter city" />
                </Form.Item>

                <Form.Item
                    name="images"
                    label="Upload Images"
                    valuePropName="fileList"
                    getValueFromEvent={handleChange}
                >
                    <Upload
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                        beforeUpload={() => false} 
                        multiple
                    >
                        {fileList.length > 10 ? null : (
                            <div>
                                <UploadOutlined />
                                <div style={{ marginTop: 8 }}>Upload</div>
                            </div>
                        )}
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CarForm;
