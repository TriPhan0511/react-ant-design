import { Button, Modal } from 'antd'
import { useState } from 'react'

const AntdModal05AsynchronousClose = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isConfirmLoading, setIsConfirmLoading] = useState(false)
	const [modalText, setModalText] = useState('Content of the modal')

	const onOk = () => {
		setModalText('The modal will be closed after two seconds')
		setIsConfirmLoading(true)
		setTimeout(() => {
			setIsOpen(false)
			setIsConfirmLoading(false)
		}, 2000)
	}
	const onCancel = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Button type='primary' onClick={() => setIsOpen(true)}>
				Open Modal with async logic
			</Button>
			<Modal
				title='Title'
				open={isOpen}
				onOk={onOk}
				onCancel={onCancel}
				confirmLoading={isConfirmLoading}
			>
				<p>{modalText}</p>
			</Modal>
		</>
	)
}

export default AntdModal05AsynchronousClose
