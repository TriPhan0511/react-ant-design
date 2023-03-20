import { Button, Modal, Space } from 'antd'
import { useState } from 'react'

const AntdModal07CustomizeThePositionOfModal = () => {
	const [isFirstModalOpen, setIsFirstModalOpen] = useState(false)
	const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

	return (
		<Space>
			<Button type='primary' onClick={() => setIsFirstModalOpen(true)}>
				Display a modal dialog at 20px to top
			</Button>
			<Modal
				title='20px to top'
				open={isFirstModalOpen}
				onOk={() => setIsFirstModalOpen(false)}
				onCancel={() => setIsFirstModalOpen(false)}
				style={{ top: 20 }}
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>

			<Button type='primary' onClick={() => setIsSecondModalOpen(true)}>
				Vertically centered modal dialog
			</Button>
			<Modal
				title='20px to top'
				open={isSecondModalOpen}
				onOk={() => setIsSecondModalOpen(false)}
				onCancel={() => setIsSecondModalOpen(false)}
				centered
			>
				<p>Some contents...</p>
				<p>Some contents...</p>
				<p>Some contents...</p>
			</Modal>
		</Space>
	)
}

export default AntdModal07CustomizeThePositionOfModal
