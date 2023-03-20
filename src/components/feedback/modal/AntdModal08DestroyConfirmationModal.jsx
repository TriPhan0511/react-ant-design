import { Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
const { confirm } = Modal

const AntdModal08DestroyConfirmationModal = () => {
	const handleClick = () => {
		for (let i = 0; i < 3; i++) {
			setTimeout(() => {
				confirm({
					icon: <ExclamationCircleOutlined />,
					content: (
						<Button onClick={() => Modal.destroyAll()}>
							Click to destroy all
						</Button>
					),
				})
			}, i * 500)
		}
	}

	return <Button onClick={handleClick}>Confirm</Button>
}

export default AntdModal08DestroyConfirmationModal
