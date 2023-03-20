import { Modal, Button } from 'antd'
import { useState } from 'react'

const AntdModal01 = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)

	return (
		<>
			<Button type='primary' onClick={() => setIsModalOpen(true)}>
				Open Modal
			</Button>
			<Modal
				title='Basic Modal'
				open={isModalOpen}
				onOk={() => setIsModalOpen(false)}
				onCancel={() => setIsModalOpen(false)}
			>
				<p>Some content...</p>
				<p>Some content...</p>
				<p>Some content...</p>
			</Modal>
		</>
	)
}

export default AntdModal01
