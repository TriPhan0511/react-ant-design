import { Button, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'

import mockApi from './mockApi'

const onChange = ({ file, fileList }) => {
	if (file.status !== 'uploading') {
		console.log('🚀 ~ file:', file)
		console.log('🚀 ~ fileList:', fileList)
	}
}

const defaultFileList = [
	{
		uid: '1',
		name: 'xxx.png',
		status: 'done',
		response: 'Server Error 500',
		url: 'http://www.baidu.com/xxx.png',
	},
	{
		uid: '2',
		name: 'yyy.png',
		status: 'done',
		url: 'http://www.baidu.com/yyy.png',
	},
	{
		uid: '3',
		name: 'zzz.png',
		status: 'error',
		response: 'Server Error 500',
		url: 'http://www.baidu.com/zzz.png',
	},
]

const fileProps = {
	...mockApi,
	onChange,
	defaultFileList,
}

const AntdUpload03DefaultFiles = () => {
	return (
		<div style={{ maxWidth: 200 }}>
			<Upload {...fileProps}>
				<Button icon={<UploadOutlined />}>Upload</Button>
			</Upload>
		</div>
	)
}

export default AntdUpload03DefaultFiles
