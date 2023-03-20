import { Button, Modal } from 'antd'
import { useState } from 'react'

const AntdModal02CustomizedFooter = () => {
	const [isOpen, setIsOpen] = useState(false)
	const [isLoading, setIsLoading] = useState(false)

	const handleOk = () => {
		setIsLoading(true)
		setTimeout(() => {
			setIsLoading(false)
			setIsOpen(false)
		}, 3000)
	}

	const handleCancel = () => {
		setIsOpen(false)
	}

	return (
		<>
			<Button type='primary' onClick={() => setIsOpen(true)}>
				Open Modal with customized footer
			</Button>
			<Modal
				title='Title'
				open={isOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key='back' onClick={() => setIsOpen(false)}>
						Return
					</Button>,
					<Button
						key='submit'
						type='primary'
						loading={isLoading}
						onClick={handleOk}
					>
						Submit
					</Button>,
					<Button
						key='search'
						type='primary'
						href='https://www.google.com/'
						loading={isLoading}
						onClick={handleOk}
					>
						Search on Google
					</Button>,
				]}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</>
	)
}

export default AntdModal02CustomizedFooter
