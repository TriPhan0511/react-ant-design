import { Button, message, Upload, Row, Col, Form, Input } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'

// Mock server and data
const sachsoServerUrl = 'https://server.sachso.edu.vn'
const ApplicationName = 'QUIZCITY_DEV'
const moduleId = '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34'

const action = `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`
const headers = {
	Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
	ApplicationName,
}
const data = {
	entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
	subModuleName: 'RESOURCES',
	entityName: 'Questions',
	moduleName: 'SACHSO',
	moduleId,
}

const AntdUpload01 = () => {
	const [imageFileUrl, setImageFileUrl] = useState('')

	const props = {
		name: 'files', // Note: Only named "files"?
		action,
		headers,
		data,
		onChange(info) {
			if (info.file.status === 'done') {
				const downloadUrl = info.file.response?.files?.[0]?.downloadUrl
				// console.log('🚀 ~ info:', info)
				// console.log('🚀 ~ downloadUrl:', downloadUrl)
				setImageFileUrl(downloadUrl)
				message.success(`${info.file.name} file uploaded successfully`, 1)
			} else if (info.file.status === 'error') {
				message.error(`${info.file.name} file upload failed.`)
			}
		},

		onRemove(file) {
			// console.log('🚀 ~ file:', file)
			setImageFileUrl('')
		},
	}

	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<Form onFinish={onFinish}>
			<Form.Item label='Hình ảnh'>
				<Upload {...props}>
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

// -----------------------------------------------------------------------
// import { Button, message, Upload, Row, Col, Form, Input } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'
// import { useState } from 'react'

// const AntdUpload01 = () => {
// 	const [urlFileImage, setUrlFileImage] = useState('')

// 	const [form] = Form.useForm()
// 	let getFieldValues = form.getFieldsValue()

// 	const sachsoServerUrl = 'https://server.sachso.edu.vn' // Note

// 	const props = {
// 		name: 'files',
// 		action: `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`,
// 		headers: {
// 			Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
// 			ApplicationName: 'QUIZCITY_DEV', // Note
// 			// ApplicationName: settings.APPLICATION_NAME,
// 		},
// 		data: {
// 			entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
// 			subModuleName: 'RESOURCES',
// 			entityName: 'Questions',
// 			moduleName: 'SACHSO',
// 			moduleId: '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34', // Note
// 			// moduleId: settings.MODULE_ID,
// 		},

// 		onChange(info) {
// 			if (info.file.status !== 'uploading') {
// 				console.log(info.file, info.fileList)
// 			}
// 			if (info.file.status === 'done') {
// 				setUrlFileImage(info.file.response?.files?.[0]?.downloadUrl)
// 				form.setFieldsValue({
// 					imageUrl: info.file.response?.files?.[0]?.downloadUrl,
// 				})
// 				// message.success(`${info.file.name} file uploaded successfully`)
// 			} else if (info.file.status === 'error') {
// 				message.error(`${info.file.name} file upload failed.`)
// 			}
// 		},
// 	}

// 	const onFinish = (values) => {
// 		console.log(values)
// 	}

// 	return (
// 		<Form form={form} onFinish={onFinish}>
// 			<Form.Item
// 				rules={[
// 					{
// 						required: false,
// 					},
// 				]}
// 				style={{ width: '100%' }}
// 				name={'imageUrl'}
// 				label={`Image Url`}
// 			>
// 				<Input placeholder='https://' />
// 			</Form.Item>
// 			<Form.Item label={` `}>
// 				<Upload {...props}>
// 					<Button block type='dashed' icon={<UploadOutlined />}>
// 						Image Upload
// 					</Button>
// 				</Upload>
// 			</Form.Item>
// 			{(urlFileImage || getFieldValues?.imageUrl) && (
// 				<img
// 					src={urlFileImage || getFieldValues?.imageUrl}
// 					style={{ width: 300, height: 200 }}
// 				/>
// 			)}
// 			<Form.Item>
// 				<Button htmlType='submit'>Save</Button>
// 			</Form.Item>
// 		</Form>
// 	)
// }

// export default AntdUpload01

// ---------------------------------------------------------------------------
// import { Button, message, Upload, Row, Col, Form, Input } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'
// import { useState } from 'react'

// const sachsoServerUrl = 'https://server.sachso.edu.vn'

// const props2 = {
// 	name: 'files',
// 	action: `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`,
// 	headers: {
// 		Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
// 		ApplicationName: 'QUIZCITY_DEV',
// 		// ApplicationName: settings.APPLICATION_NAME,
// 	},
// 	data: {
// 		entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
// 		subModuleName: 'RESOURCES',
// 		entityName: 'Questions',
// 		moduleName: 'SACHSO',
// 		moduleId: '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34',
// 		// moduleId: settings.MODULE_ID,
// 	},

// 	onChange(info) {
// 		if (info.file.status !== 'uploading') {
// 			console.log(info.file, info.fileList)
// 		}
// 		if (info.file.status === 'done') {
// 			console.log('DONE')
// 			message.success(`${info.file.name} file uploaded successfully`)
// 		} else if (info.file.status === 'error') {
// 			message.error(`${info.file.name} file upload failed.`)
// 		}
// 	},

// 	// onChange(info) {
// 	// 	if (info?.file?.status === 'uploading') {
// 	// 	}
// 	// 	if (info.file.status === 'done') {
// 	// 		setFileList(info?.fileList)
// 	// 		const typeFile = info?.file.type?.split('/')?.[0]
// 	// 		if (typeFile === 'image') {
// 	// 			setUrlFileImage(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				imageUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		} else if (typeFile === 'audio') {
// 	// 			setUrlFileAudio(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				audioUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		} else {
// 	// 			setUrlFileVideo(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				videoUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		}
// 	// 		message.success(`Tải ${info.file.name} thư mục thành công`)
// 	// 	} else if (info.file.status === 'error') {
// 	// 		message.error(`Tải ${info.file.name} thư mục thất bại.`)
// 	// 	}
// 	// },

// 	// fileList,
// 	// maxCount: 1,
// 	// beforeUpload: (file) => {
// 	// 	const isPNG = file.type?.split('/')?.[0] === typeUpload
// 	// 	if (!isPNG) {
// 	// 		message.error(`${file.name} không đúng định dạng`)
// 	// 	}
// 	// 	return isPNG || Upload.LIST_IGNORE
// 	// },
// }

// const AntdUpload01 = () => {
// 	const [urlFileImage, setUrlFileImage] = useState('')
// 	console.log('🚀 ~ urlFileImage:', urlFileImage)

// 	const [form] = Form.useForm()
// 	let getFieldValues = form.getFieldsValue()

// 	const props = {
// 		name: 'files',
// 		action: `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`,
// 		headers: {
// 			Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
// 			ApplicationName: 'QUIZCITY_DEV',
// 			// ApplicationName: settings.APPLICATION_NAME,
// 		},
// 		data: {
// 			entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
// 			subModuleName: 'RESOURCES',
// 			entityName: 'Questions',
// 			moduleName: 'SACHSO',
// 			moduleId: '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34',
// 			// moduleId: settings.MODULE_ID,
// 		},

// 		onChange(info) {
// 			if (info.file.status !== 'uploading') {
// 				console.log(info.file, info.fileList)
// 			}
// 			if (info.file.status === 'done') {
// 				setUrlFileImage(info.file.response?.files?.[0]?.downloadUrl)
// 				form.setFieldsValue({
// 					imageUrl: info.file.response?.files?.[0]?.downloadUrl,
// 				})
// 				// message.success(`${info.file.name} file uploaded successfully`)
// 			} else if (info.file.status === 'error') {
// 				message.error(`${info.file.name} file upload failed.`)
// 			}
// 		},
// 	}

// 	const onFinish = (values) => {
// 		console.log(values)
// 	}

// 	return (
// 		<Form form={form} onFinish={onFinish}>
// 			<Row gutter={[12, 12]}>
// 				<Col lg={20} xs={24}>
// 					<Form.Item
// 						rules={[
// 							{
// 								required: false,
// 							},
// 						]}
// 						style={{ width: '100%' }}
// 						name={'imageUrl'}
// 						label={`Image Url`}
// 					>
// 						<Input placeholder='https://' />
// 					</Form.Item>
// 				</Col>
// 				<Col lg={4}>
// 					<Form.Item label={` `}>
// 						<Upload {...props}>
// 							<Button block type='dashed' icon={<UploadOutlined />}>
// 								Image Upload
// 							</Button>
// 						</Upload>
// 					</Form.Item>
// 				</Col>
// 				{(urlFileImage || getFieldValues?.imageUrl) && (
// 					<img
// 						src={urlFileImage || getFieldValues?.imageUrl}
// 						style={{ width: 300, height: 200 }}
// 					/>
// 				)}
// 			</Row>
// 		</Form>
// 	)
// }

// export default AntdUpload01

// ----------------------------------------------------------------------------------
// import { Button, message, Upload } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'
// import { useState } from 'react'

// const props1 = {
// 	name: 'file',
// 	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
// 	headers: {
// 		authorization: 'authorization-text',
// 	},
// 	onChange(info) {
// 		if (info.file.status !== 'uploading') {
// 			console.log(info.file, info.fileList)
// 		}
// 		if (info.file.status === 'done') {
// 			message.success(`${info.file.name} file uploaded successfully`)
// 		} else if (info.file.status === 'error') {
// 			message.error(`${info.file.name} file upload failed.`)
// 		}
// 	},
// }

// const sachsoServerUrl = 'https://server.sachso.edu.vn'

// const props2 = {
// 	name: 'files',
// 	action: `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`,
// 	headers: {
// 		Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
// 		ApplicationName: 'QUIZCITY_DEV',
// 		// ApplicationName: settings.APPLICATION_NAME,
// 	},
// 	data: {
// 		entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
// 		subModuleName: 'RESOURCES',
// 		entityName: 'Questions',
// 		moduleName: 'SACHSO',
// 		moduleId: '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34',
// 		// moduleId: settings.MODULE_ID,
// 	},

// 	onChange(info) {
// 		if (info.file.status !== 'uploading') {
// 			console.log(info.file, info.fileList)
// 		}
// 		if (info.file.status === 'done') {
// 			console.log('DONE')
// 			message.success(`${info.file.name} file uploaded successfully`)
// 		} else if (info.file.status === 'error') {
// 			message.error(`${info.file.name} file upload failed.`)
// 		}
// 	},

// 	// onChange(info) {
// 	// 	if (info?.file?.status === 'uploading') {
// 	// 	}
// 	// 	if (info.file.status === 'done') {
// 	// 		setFileList(info?.fileList)
// 	// 		const typeFile = info?.file.type?.split('/')?.[0]
// 	// 		if (typeFile === 'image') {
// 	// 			setUrlFileImage(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				imageUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		} else if (typeFile === 'audio') {
// 	// 			setUrlFileAudio(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				audioUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		} else {
// 	// 			setUrlFileVideo(info.file.response?.files?.[0]?.downloadUrl)
// 	// 			form.setFieldsValue({
// 	// 				videoUrl: info.file.response?.files?.[0]?.downloadUrl,
// 	// 			})
// 	// 		}
// 	// 		message.success(`Tải ${info.file.name} thư mục thành công`)
// 	// 	} else if (info.file.status === 'error') {
// 	// 		message.error(`Tải ${info.file.name} thư mục thất bại.`)
// 	// 	}
// 	// },

// 	// fileList,
// 	// maxCount: 1,
// 	// beforeUpload: (file) => {
// 	// 	const isPNG = file.type?.split('/')?.[0] === typeUpload
// 	// 	if (!isPNG) {
// 	// 		message.error(`${file.name} không đúng định dạng`)
// 	// 	}
// 	// 	return isPNG || Upload.LIST_IGNORE
// 	// },
// }

// const AntdUpload01 = () => {
// 	const [urlFileImage, setUrlFileImage] = useState('')
// 	console.log('🚀 ~ urlFileImage:', urlFileImage)

// 	const props = {
// 		name: 'files',
// 		action: `${sachsoServerUrl}/api/v1.0/dynamic/upload-files`,
// 		headers: {
// 			Authorization: 'Basic 12C1F7EF9AC8E288FBC2177B7F54D',
// 			ApplicationName: 'QUIZCITY_DEV',
// 			// ApplicationName: settings.APPLICATION_NAME,
// 		},
// 		data: {
// 			entityId: '46d30c13-3555-4395-8b83-4b9b2f7402ae',
// 			subModuleName: 'RESOURCES',
// 			entityName: 'Questions',
// 			moduleName: 'SACHSO',
// 			moduleId: '0CDD3C5D-0BCE-49F2-91EF-DDE9AD0CEF34',
// 			// moduleId: settings.MODULE_ID,
// 		},

// 		onChange(info) {
// 			if (info.file.status !== 'uploading') {
// 				console.log(info.file, info.fileList)
// 			}
// 			if (info.file.status === 'done') {
// 				setUrlFileImage(info.file.response?.files?.[0]?.downloadUrl)
// 				message.success(`${info.file.name} file uploaded successfully`)
// 			} else if (info.file.status === 'error') {
// 				message.error(`${info.file.name} file upload failed.`)
// 			}
// 		},
// 	}

// 	return (
// 		<Upload {...props}>
// 			<Button icon={<UploadOutlined />}>Click to Upload</Button>
// 		</Upload>
// 	)
// }

// export default AntdUpload01

// ----------------------------------------------------------------------
// import { Button, message, Upload } from 'antd'
// import { UploadOutlined } from '@ant-design/icons'

// const props = {
// 	name: 'file',
// 	action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
// 	headers: {
// 		authorization: 'authorization-text',
// 	},
// 	onChange(info) {
// 		if (info.file.status !== 'uploading') {
// 			console.log(info.file, info.fileList)
// 		}
// 		if (info.file.status === 'done') {
// 			message.success(`${info.file.name} file uploaded successfully`)
// 		} else if (info.file.status === 'error') {
// 			message.error(`${info.file.name} file upload failed.`)
// 		}
// 	},
// }

// const AntdUpload01 = () => {
// 	return (
// 		<Upload {...props}>
// 			<Button icon={<UploadOutlined />}>Click to Upload</Button>
// 		</Upload>
// 	)
// }

// export default AntdUpload01
