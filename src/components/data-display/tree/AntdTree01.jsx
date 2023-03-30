import { Tree } from 'antd'

const treeData = [
	{
		title: 'parent 1',
		key: '0-0',
		children: [
			{
				title: 'parent 1-0',
				key: '0-0-0',
				disabled: true,
				children: [
					{
						title: 'leaf',
						key: '0-0-0-0',
						disableCheckbox: true,
					},
					{
						title: 'leaf',
						key: '0-0-0-1',
					},
				],
			},
			{
				title: 'parent 1-1',
				key: '0-0-1',
				children: [
					{
						title: <span style={{ color: '#1890ff' }}>sss</span>,
						key: '0-0-1-0',
					},
				],
			},
		],
	},
]

const AntdTree01 = () => {
	const onSelect = (selectedKeys, info) => {
		console.log('🚀 ~ selectedKeys:', selectedKeys)
		console.log('🚀 ~ info:', info)
	}

	const onCheck = (checkedKeys, info) => {
		console.log('🚀 ~ checkedKeys:', checkedKeys)
		console.log('🚀 ~ info:', info)
	}
	return (
		<Tree
			checkable
			defaultExpandedKeys={['0-0-0', '0-0-1']}
			// defaultSelectedKeys={['0-0-0', '0-0-1']}
			// defaultCheckedKeys={['0-0-0', '0-0-1']}
			onSelect={onSelect}
			onCheck={onCheck}
			treeData={treeData}
		/>
	)
}

export default AntdTree01
