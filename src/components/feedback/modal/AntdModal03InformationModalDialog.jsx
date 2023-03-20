import { Button, Modal, Space } from 'antd'
import { useState } from 'react'

const AntdModal03InformationModalDialog = () => {
	const [isOpen, setIsOpen] = useState(false)

	const info = () => {
		Modal.info({
			title: 'This is a notification message',
			content: (
				<div>
					<p>Some messages...</p>
					<p>Some messages...</p>
				</div>
			),
			onOk() {},
		})
	}
	const success = () => {
		Modal.success({
			content: <p>Some messages...</p>,
		})
	}
	const error = () => {
		Modal.error({
			title: 'This is an error message',
			content: 'Some messages...',
		})
	}
	const warning = () => {
		Modal.warning({
			title: 'This is a warning message',
			content: 'Some messages...',
		})
	}

	return (
		<Space wrap>
			<Button onClick={info}>Info</Button>
			<Button onClick={success}>Success</Button>
			<Button onClick={error}>Error</Button>
			<Button onClick={warning}>Warning</Button>
		</Space>
	)
}

export default AntdModal03InformationModalDialog
