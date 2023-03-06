import { FC, useState } from 'react';
import { Modal, Form, Input, Button, Spin } from 'antd';

type AuthorizationWindowProps = {
    open: boolean;
    onClose: (success: boolean) => void;
    onAuthorize: (values: { username: string; password: string }) => Promise<void>;
};

const AuthModal: FC<AuthorizationWindowProps> = ({ open, onClose, onAuthorize }) => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);

    const handleAuthorize = async (values: { username: string; password: string }) => {
        setLoading(true);
        await onAuthorize(values);
        setLoading(false);
        form.resetFields();
        onClose(true);
    };

    return (
        <Modal
            open={open}
            title="Authorization"
            onCancel={() => onClose(false)}
            footer={null}
        >
            <Form
                form={form}
                onFinish={handleAuthorize}
            >
                <Form.Item
                    name="username"
                    label="Username"
                    rules={[{ required: true, message: 'Please enter your username' }]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Password"
                    rules={[{ required: true, message: 'Please enter your password' }]}
                >
                    <Input.Password/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        {loading ? <Spin/> : 'Authorize'}
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};
export default AuthModal;