import { Popconfirm, Button, message, Space } from 'antd'

const AntdPopconfirm02Placement = () => {
	const title = 'Are you sure to delete this task?'
	const okText = 'Yes'
	const cancelText = 'No'

	const onConfirm = () => {
		message.success('Clicked on Yes.')
	}

	const ButtonAndPopconfirm = ({ text, placement }) => (
		<Popconfirm
			title={title}
			okText={okText}
			cancelText={cancelText}
			onConfirm={onConfirm}
			placement={placement}
			okButtonProps={{ style: { background: '#1677ff' } }}
		>
			<Button className='w-20'>{text}</Button>
		</Popconfirm>
	)

	return (
		<>
			<div className='w-fit mx-auto mt-40 flex'>
				<div className='flex flex-col space-y-2 items-start my-10'>
					<ButtonAndPopconfirm text='LT' placement='leftTop' />
					<ButtonAndPopconfirm text='Left' placement='left' />
					<ButtonAndPopconfirm text='LB' placement='leftBottom' />
				</div>

				<div className='flex flex-col justify-between'>
					<div className='flex space-x-2'>
						<ButtonAndPopconfirm text='TL' placement='topLeft' />
						<ButtonAndPopconfirm text='Top' placement='top' />
						<ButtonAndPopconfirm text='TR' placement='topRight' />
					</div>
					<div className='flex space-x-2'>
						<ButtonAndPopconfirm text='BL' placement='bottomLeft' />
						<ButtonAndPopconfirm text='Bottom' placement='bottom' />
						<ButtonAndPopconfirm text='BR' placement='bottomRight' />
					</div>
				</div>

				<div className='flex flex-col space-y-2 items-start my-10'>
					<ButtonAndPopconfirm text='RT' placement='rightTop' />
					<ButtonAndPopconfirm text='Right' placement='right' />
					<ButtonAndPopconfirm text='RB' placement='rightBottom' />
				</div>
			</div>
		</>
	)
}

export default AntdPopconfirm02Placement
