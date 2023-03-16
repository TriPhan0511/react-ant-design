import { Upload, message } from 'antd'
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons'

import mockApi from './mockApi'
import { useState } from 'react'

const AntdUpload09JpgOrPngFileOnly = () => {
	const [isLoading, setIsLoading] = useState(false)
	const [imageUrl, setImageUrl] = useState()

	const uploadButton = (
		<div>
			{isLoading ? <LoadingOutlined /> : <PlusOutlined />}
			<div style={{ marginTop: 8 }}>Upload</div>
		</div>
	)

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

	const imageUploadingProps = {
		...mockApi,
		name: 'avatar',
		listType: 'picture-card',
		className: 'avatar-uploader',
		showUploadList: false,
		beforeUpload,
		onChange,
	}

	return (
		<>
			<Upload {...imageUploadingProps}>
				{imageUrl ? (
					<img src={imageUrl} alt='avatar' style={{ width: '100%' }} />
				) : (
					uploadButton
				)}
			</Upload>
			{/* {imageUrl && (
				<img src={imageUrl} alt='' style={{ width: 300, height: 250 }} />
			)} */}
		</>
	)
}

export default AntdUpload09JpgOrPngFileOnly
