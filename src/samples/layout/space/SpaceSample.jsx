import { Space, Tooltip, Button, Dropdown, Menu } from 'antd'
import {
	LikeOutlined,
	CommentOutlined,
	StarOutlined,
	HeartOutlined,
	ShareAltOutlined,
	DownloadOutlined,
	EllipsisOutlined,
	WarningOutlined,
	MailOutlined,
	MobileOutlined,
} from '@ant-design/icons'

// VERTICAL COMPACT
const SpaceSample = () => {
	const wrapperStyle = {
		width: '50vw',
		border: '1px solid #ccc',
		margin: 'auto',
		padding: '35px 25px',
	}

	return (
		<div style={wrapperStyle}>
			<Space>
				<Space.Compact direction='vertical'>
					<Button>Button 1</Button>
					<Button>Button 2</Button>
					<Button>Button 3</Button>
				</Space.Compact>
				<Space.Compact direction='vertical'>
					<Button type='dashed'>Button 1</Button>
					<Button type='dashed'>Button 2</Button>
					<Button type='dashed'>Button 3</Button>
				</Space.Compact>
				<Space.Compact direction='vertical'>
					<Button type='primary'>Button 1</Button>
					<Button type='primary'>Button 2</Button>
					<Button type='primary'>Button 3</Button>
				</Space.Compact>
			</Space>
		</div>
	)
}

export default SpaceSample

// ------------------------------------------------------------------------------
// import { Space, Tooltip, Button, Dropdown, Menu } from 'antd'
// import {
// 	LikeOutlined,
// 	CommentOutlined,
// 	StarOutlined,
// 	HeartOutlined,
// 	ShareAltOutlined,
// 	DownloadOutlined,
// 	EllipsisOutlined,
// 	WarningOutlined,
// 	MailOutlined,
// 	MobileOutlined,
// } from '@ant-design/icons'

// // BUTTON COMPACT
// const SpaceSample = () => {
// 	const wrapperStyle = {
// 		width: '50vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	const items = [
// 		{
// 			key: '1',
// 			label: 'Report',
// 			icon: <WarningOutlined />,
// 		},
// 		{
// 			key: '2',
// 			label: 'Mail',
// 			icon: <MailOutlined />,
// 		},
// 		{
// 			key: '3',
// 			label: 'Mobile',
// 			icon: <MobileOutlined />,
// 		},
// 	]

// 	return (
// 		<div style={wrapperStyle}>
// 			<Space.Compact block>
// 				<Tooltip title='Like'>
// 					<Button icon={<LikeOutlined />} />
// 				</Tooltip>
// 				<Tooltip title='Comment'>
// 					<Button icon={<CommentOutlined />} />
// 				</Tooltip>
// 				<Tooltip title='Star'>
// 					<Button icon={<StarOutlined />} />
// 				</Tooltip>
// 				<Tooltip title='Heart'>
// 					<Button icon={<HeartOutlined />} />
// 				</Tooltip>
// 				<Tooltip title='Share'>
// 					<Button icon={<ShareAltOutlined />} />
// 				</Tooltip>
// 				<Tooltip title='Download'>
// 					<Button icon={<DownloadOutlined />} />
// 				</Tooltip>
// 				<Dropdown placement='bottomRight' menu={{ items }} trigger={['click']}>
// 					<Button icon={<EllipsisOutlined />} />
// 				</Dropdown>
// 			</Space.Compact>
// 			<br />
// 			<Space.Compact block>
// 				<Button type='primary'>Button 1</Button>
// 				<Button type='primary'>Button 2</Button>
// 				<Button type='primary'>Button 3</Button>
// 				<Button type='primary'>Button 4</Button>
// 				<Tooltip title='Tooltip'>
// 					<Button icon={<DownloadOutlined />} disabled />
// 				</Tooltip>
// 				<Tooltip title='Tooltip'>
// 					<Button type='primary' icon={<DownloadOutlined />} />
// 				</Tooltip>
// 			</Space.Compact>
// 			<br />
// 			<Space.Compact block>
// 				<Button>Button 1</Button>
// 				<Button>Button 2</Button>
// 				<Button>Button 3</Button>
// 				<Tooltip title='Tooltip'>
// 					<Button icon={<DownloadOutlined />} disabled />
// 				</Tooltip>
// 				<Tooltip title='Tooltip'>
// 					<Button icon={<DownloadOutlined />} />
// 				</Tooltip>
// 				<Button type='primary'>Button 4</Button>
// 				<Dropdown
// 					placement='bottomRight'
// 					menu={{
// 						items: [
// 							{
// 								key: '1',
// 								label: '1st item',
// 							},
// 							{
// 								key: '2',
// 								label: '2nd item',
// 							},
// 							{
// 								key: '3',
// 								label: '3rd item',
// 							},
// 						],
// 					}}
// 					trigger={['click']}
// 				>
// 					<Button icon={<EllipsisOutlined />} />
// 				</Dropdown>
// 			</Space.Compact>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Divider, Space, Typography } from 'antd'

// // SPLIT
// const SpaceSample = () => {
// 	const wrapperStyle = {
// 		width: '50vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	const { Link } = Typography

// 	return (
// 		<div style={wrapperStyle}>
// 			<Space split={<Divider type='vertical' />}>
// 				<Link>Link</Link>
// 				<Link>Link</Link>
// 				<Link href='https://vnexpress.net/' target='_blank'>
// 					Link
// 				</Link>
// 			</Space>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Space, Button } from 'antd'
// import { useState } from 'react'

// // WRAP
// const SpaceSample = () => {
// 	const wrapperStyle = {
// 		width: '50vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	return (
// 		<div style={wrapperStyle}>
// 			<Space size={[8, 16]} wrap>
// 				{new Array(20).fill(null).map((_, index) => (
// 					<Button key={index}>Button</Button>
// 				))}
// 			</Space>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Space, Button } from 'antd'
// import { useState } from 'react'

// // CUSTOMIZE SIZE
// const SpaceSample = () => {
// 	const [size, setSize] = useState(8)

// 	const wrapperStyle = {
// 		width: '75vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	return (
// 		<div style={wrapperStyle}>
// 			<Slider value={size} onChange={(value) => setSize(value)} />
// 			<Space size={size}>
// 				<Button type='primary'>Primary</Button>
// 				<Button>Default</Button>
// 				<Button type='dashed'>Dashed</Button>
// 				<Button type='link'>Link</Button>
// 			</Space>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Space, Button, Radio } from 'antd'

// // ALIGN
// const SpaceSample = () => {

// 	const spaceAlignContainer = {
// 		display: 'flex',
// 		flexWrap: 'wrap',
// 		alignItems: 'flex-start',
// 	}

// 	const spaceAlignBlock = {
// 		flex: 'none',
// 		margin: '8px 4px',
// 		padding: '4px',
// 		border: '1px solid #40a9ff',
// 	}

// 	const mockBlock = {
// 		display: 'inline-block',
// 		padding: '32px 8px 16px',
// 		background: 'rgba(150,150,150,0.2)',
// 	}

// 	return (
// 		<div style={spaceAlignContainer}>
// 			<div style={spaceAlignBlock}>
// 				<Space align='center'>
// 					center
// 					<Button type='primary'>Primary</Button>
// 					<span style={mockBlock}>Block</span>
// 				</Space>
// 			</div>
// 			<div style={spaceAlignBlock}>
// 				<Space align='start'>
// 					start
// 					<Button type='primary'>Primary</Button>
// 					<span style={mockBlock}>Block</span>
// 				</Space>
// 			</div>
// 			<div style={spaceAlignBlock}>
// 				<Space align='end'>
// 					end
// 					<Button type='primary'>Primary</Button>
// 					<span style={mockBlock}>Block</span>
// 				</Space>
// 			</div>
// 			<div style={spaceAlignBlock}>
// 				<Space align='baseline'>
// 					baseline
// 					<Button type='primary'>Primary</Button>
// 					<span style={mockBlock}>Block</span>
// 				</Space>
// 			</div>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Space, Button, Radio } from 'antd'
// import { useState } from 'react'

// // SPACE SIZE
// const SpaceSample = () => {
// 	const [size, setSize] = useState('small')

// 	const wrapperStyle = {
// 		width: '75vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	return (
// 		<div style={wrapperStyle}>
// 			<Radio.Group onChange={(e) => setSize(e.target.value)} value={size}>
// 				<Radio value='small'>Small</Radio>
// 				<Radio value='middle'>Middle</Radio>
// 				<Radio value='large'>Large</Radio>
// 			</Radio.Group>
// 			<br />
// 			<br />
// 			<Space size={size}>
// 				<Button type='primary'>Primary</Button>
// 				<Button>Default</Button>
// 				<Button type='dashed'>Dashed</Button>
// 				<Button type='link'>Link</Button>
// 			</Space>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { Space, Card } from 'antd'

// // VERTICAL SPACE
// const SpaceSample = () => {
// 	const wrapperStyle = {
// 		width: '75vw',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		padding: '35px 25px',
// 	}

// 	return (
// 		<div style={wrapperStyle}>
// 			<Space direction='vertical' size='middle' style={{ display: 'flex' }}>
// 				<Card title='Card' size='small'>
// 					<p>Card Content</p>
// 					<p>Card Content</p>
// 				</Card>
// 				<Card title='Card' size='small'>
// 					<p>Card Content</p>
// 					<p>Card Content</p>
// 				</Card>
// 				<Card title='Card' size='small'>
// 					<p>Card Content</p>
// 					<p>Card Content</p>
// 				</Card>
// 			</Space>
// 		</div>
// 	)
// }

// export default SpaceSample

// // ------------------------------------------------------------------------------
// import { UploadOutlined } from '@ant-design/icons'
// import { Button, Popconfirm, Space, Upload } from 'antd'

// // BASIC USAGE (HORIZONTAL SPACE)
// const SpaceSample = () => {
// 	return (
// 		<Space>
// 			Space
// 			<Button type='primary'>Button</Button>
// 			<Upload>
// 				<Button>
// 					<UploadOutlined /> Click to Upload
// 				</Button>
// 			</Upload>
// 			<Popconfirm
// 				title='Are you sure delete this task?'
// 				okText='Yes'
// 				cancelText='No'
// 			>
// 				<Button>Confirm</Button>
// 			</Popconfirm>
// 		</Space>
// 	)
// }

// export default SpaceSample
// // ------------------------------------------------------------------------------
