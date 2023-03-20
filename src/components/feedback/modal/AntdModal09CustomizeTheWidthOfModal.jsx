import { Button, Modal } from 'antd'
import { useState } from 'react'

const AntdModal09CustomizeTheWidthOfModal = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<>
			<Button type='primary' onClick={() => setIsOpen(true)}>
				Open a Modal of 1000px width
			</Button>
			<Modal
				title='Modal of 1000px width'
				open={isOpen}
				onOk={() => setIsOpen(false)}
				onCancel={() => setIsOpen(false)}
				width={1000}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>
					Some contents...Some contents...Some contents...Some contents...Some
					contents...Some contents...Some contents...
				</p>
			</Modal>
		</>
	)
}

export default AntdModal09CustomizeTheWidthOfModal
