import { Button, message, Upload, Row, Col, Form, Input } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'

import mockApi from './mockApi'

const AntdUpload01 = () => {
	const [imageFileUrl, setImageFileUrl] = useState('')

	const fileProps = {
		...mockApi,
		name: 'files', // Note: Only named "files"?
		onChange(info) {
			if (info.file.status === 'done') {
				const downloadUrl = info.file.response?.files?.[0]?.downloadUrl
				setImageFileUrl(downloadUrl)
				message.success(`${info.file.name} file uploaded successfully`, 1)
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`)
			}
		},

		onRemove(file) {
			setImageFileUrl('')
		},
	}

	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<Form onFinish={onFinish}>
			<Form.Item label='Hình ảnh'>
				<Upload {...fileProps}>
					<Button block type='dashed' icon={<UploadOutlined />}>
						Image Upload
					</Button>
				</Upload>
			</Form.Item>

			{imageFileUrl && (
				<img src={imageFileUrl} style={{ width: 300, height: 200 }} />
			)}

			<Form.Item>
				<Button htmlType='submit'>Save</Button>
			</Form.Item>
		</Form>
	)
}

export default AntdUpload01
