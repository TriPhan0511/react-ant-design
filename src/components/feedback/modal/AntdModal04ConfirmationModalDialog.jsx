import { Space, Button, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { confirm } = Modal

const AntdModal04ConfirmationModalDialog = () => {
	const showConfirm = () => {
		confirm({
			title: 'Do you want to delete this item?',
			icon: <ExclamationCircleOutlined />,
			content: 'Some descriptions...',
			okText: 'Yes',
			cancelText: 'No',
			onOk() {
				console.log('Deleted')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}

	const showPromiseConfirm = () => {
		confirm({
			icon: <ExclamationCircleOutlined />,
			title: 'Do you want to delete these items?',
			content:
				'When the OK button is clicked, this dialog will be closed after 1 second.',
			onOk() {
				return new Promise((resolve, reject) => {
					setTimeout(() => {
						Math.random() > 0.5 ? resolve : reject
					}, 1000)
				}).catch(() => console.log('Oops errors!'))
			},
			// onOk() {},
			onCancel() {
				console.log('Cancel')
			},
		})
	}

	const showDeleteConfirm = () => {
		confirm({
			icon: <ExclamationCircleOutlined />,
			title: 'Are you sure delete this task?',
			content: 'Some description',
			okText: 'Yes',
			cancelText: 'No',
			okType: 'danger',
			onOk() {
				console.log('OK')
			},
			onCancel() {
				console.log('Cancel')
			},
		})
	}

	const showPropsConfirm = () => {
		confirm({
			icon: <ExclamationCircleOutlined />,
			title: 'Are you sure delete this task?',
			content: 'Some descriptions',
			cancelText: 'No',
			okText: 'Yes',
			okType: 'danger',
			okButtonProps: { disabled: true },
		})
	}

	return (
		<Space wrap>
			<Button onClick={showConfirm}>Confirm</Button>
			<Button onClick={showPromiseConfirm}>With promise</Button>
			<Button onClick={showDeleteConfirm}>Delete</Button>
			<Button onClick={showPropsConfirm}>With extra props</Button>
		</Space>
	)
}

export default AntdModal04ConfirmationModalDialog
