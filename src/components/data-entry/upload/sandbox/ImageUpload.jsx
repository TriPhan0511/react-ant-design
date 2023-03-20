import { useState } from 'react'
import { Upload, message, Form, Button, Input, Row, Col } from 'antd'
import {
	LoadingOutlined,
	PlusOutlined,
	UploadOutlined,
} from '@ant-design/icons'

import mockApi from '../mockApi'

const ImageUpload = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState()

	const uploadButton = (
		<div>
			{isLoading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)

	// Utility function
	const getBase64 = (img, callback) => {
		const reader = new FileReader()
		reader.addEventListener('load', () => callback(reader.result))
		reader.readAsDataURL(img)
	}

	const onChange = (info) => {
		if (info.file.status === 'uploading') {
			setIsLoading(true)
			return
		}
		if (info.file.status === 'done') {
			// Get this url from response in the real world
			getBase64(info.file.originFileObj, (url) => {
				setIsLoading(false)
				setImageUrl(url)
			})
		}
	}

	// Validate format and size of image
	const beforeUpload = (file) => {
		const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
		if (!isJpgOrPng) {
			message.error('You can only upload JPG/PNG file!')
		}

		const isLessThan2M = file.size / 1024 / 1024 < 2
		if (!isLessThan2M) {
			message.error('Image must smaller than 2MB!')
		}

		// return isJpgOrPng && isLessThan2M
		return (isJpgOrPng && isLessThan2M) || Upload.LIST_IGNORE
	}

	const onRemove = (_) => {
		setImageUrl('')
	}

	const imageUploadingProps = {
		...mockApi,
		name: 'avatar',
		// listType: 'picture-card',
		className: 'avatar-uploader',
		showUploadList: false,
		beforeUpload,
		onChange,
		onRemove,
	}

	// Handle form submit
	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<div
			style={{
				border: '1px solid #ccc',
				borderRadius: 10,
				maxWidth: 500,
				margin: 'auto',
				marginTop: 100,
				padding: 32,
			}}
		>
			<Form onFinish={onFinish}>
				{/* <Form.Item label='Hình ảnh'>
					<Upload {...imageUploadingProps}>
						{imageUrl ? (
							<img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
						) : (
							uploadButton
						)}
					</Upload>
				</Form.Item> */}

				<Upload {...imageUploadingProps}>
					<Button icon={<UploadOutlined />}>Upload hình ảnh</Button>
				</Upload>

				<Form.Item name='imageLink' label='Image Link'>
					<Input />
				</Form.Item>

				<div>Upload Hình Ảnh</div>
				<Row>
					<Col span={12}>
						<Upload {...imageUploadingProps}>
							<Button icon={<UploadOutlined />}>Upload hình ảnh</Button>
						</Upload>
					</Col>
					<Col span={12}>
						<Form.Item name='imageLink'>
							<Input placeholder='Nhập link của hình ảnh' />
						</Form.Item>
					</Col>
				</Row>

				<Form.Item wrapperCol={{ offset: 21 }}>
					<Button htmlType='submit'>Save</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default ImageUpload
