import { Popconfirm, Button, Switch, message } from 'antd'
import { useState } from 'react'

const AntdPopconfirm03ConditionalTrigger = () => {
	const [open, setOpen] = useState(false)
	const [condition, setCondition] = useState(true)

	const changeCondition = (checked) => {
		setCondition(checked)
	}

	const onConfirm = () => {
		setOpen(false)
		message.success('Next step.')
	}

	const onCancel = () => {
		setOpen(false)
		message.error('Click on Cancel.')
	}

	const onOpenChange = (newOpen) => {
		console.log('🚀 ~ newOpen:', newOpen)
	}

	return (
		<>
			<Popconfirm
				title='Are you sure delete this task?'
				okText='Yes'
				cancelText='No'
				onConfirm={onConfirm}
				onCancel={onCancel}
				onOpenChange={onOpenChange}
			>
				<Button type='link'>Delete a task</Button>
			</Popconfirm>
			<div>
				<span>Whether directly execute: </span>
				<Switch defaultChecked onChange={changeCondition} />
			</div>
		</>
	)
}

export default AntdPopconfirm03ConditionalTrigger
