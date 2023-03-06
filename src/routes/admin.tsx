import React, { useState } from 'react';
import { Upload, Modal, Input, Button, Table, Form, List, Avatar, Select } from 'antd';
import { TableOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { Item } from '../types';

export default function Admin() {
    const [productList, setProductList] = useState<Item[]>([]);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [viewType, setViewType] = useState<'table' | 'list'>('table');

    const [form] = Form.useForm();

    const categories = [
        {
            "id": 1,
            "name": "Category A"
        },
        {
            "id": 2,
            "name": "Category B"
        },
        {
            "id": 3,
            "name": "Category C"
        }
    ];

    const handleOk = () => {
        form
            .validateFields()
            .then((values) => {
                console.log(values);
                const item: Item = {
                    id: Math.random(),
                    name: values.name,
                    description: values.description,
                    price: values.price,
                    categoryId: values.categoryId
                };
                setProductList([...productList, item]);
                form.resetFields();
                setModalOpen(false);
            });
    };

    const handleCancel = () => {
        form.resetFields();
        setModalOpen(false);
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price'
        },
        {
            title: 'Category Id',
            dataIndex: 'categoryId',
            key: 'categoryId'
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: () => (
                <img src="https://picsum.photos/200" alt="product" style={{ width: '50px' }}/>
            ),
        },
    ];

    return (
        <div style={{ marginTop: '1rem' }}>
            <div style={{ marginBottom: '1rem' }}>
                <Button onClick={() => setModalOpen(true)}>Create Product</Button>
                <Button
                    type={viewType === 'table' ? 'primary' : 'default'}
                    onClick={() => setViewType('table')}
                    icon={<TableOutlined/>}
                />
                <Button
                    type={viewType === 'list' ? 'primary' : 'default'}
                    onClick={() => setViewType('list')}
                    icon={<UnorderedListOutlined/>}
                />
            </div>
            {viewType === 'table' ? (
                <Table dataSource={productList} rowKey="id" columns={columns}/>
            ) : (
                <List
                    itemLayout="horizontal"
                    dataSource={productList}
                    rowKey="id"
                    renderItem={(item) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://picsum.photos/200"/>}
                                title={item.name}
                                description={item.description}
                            />
                        </List.Item>
                    )}
                />
            )}
            <Modal
                title="Create Product"
                open={modalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form} layout="vertical">
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[{ required: true, message: 'Please input the product name!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Description"
                        name="description"
                        rules={[{ required: true, message: 'Please input the product description!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Price"
                        name="price"
                        rules={[{ required: true, min: 0.1, message: 'Please input the product Price!' }]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item
                        label="Category"
                        name="categoryId"
                        rules={[{ required: true, message: 'Please select the product category!' }]}
                    >
                        <Select placeholder="Select a category">
                            {categories.map(c => <Select.Option key={c.id} value={c.id}>{c.name}</Select.Option>)}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Image"
                        name="imageUrl"
                        rules={[{ required: true, message: 'Please upload the product image!' }]}
                    >
                        <Upload
                            name="image"
                            action="https://httpbin.org/post"
                            listType="picture"
                        >
                            <Button>Upload Image</Button>
                        </Upload>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
}