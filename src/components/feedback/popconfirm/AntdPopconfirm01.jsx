import { Popconfirm, message, Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

const AntdPopconfirm01 = () => {
	const onConfirm = (e) => {
		message.success('Click on Yes')
		// console.log(e)
	}
	const onCancel = (e) => {
		message.error('Click on No')
		// console.log(e)
	}

	return (
		<Popconfirm
			title='Are you sure to delete this task?'
			okText='Yes'
			cancelText='No'
			onConfirm={onConfirm}
			onCancel={onCancel}
		>
			<Button icon={<DeleteOutlined />}></Button>
			{/* <a href='#'>Delete</a> */}
		</Popconfirm>
	)
}

export default AntdPopconfirm01
