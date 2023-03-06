import { Select, Space } from 'antd'

// Multiple selection, selecting from existing items.

const options = []
for (let i = 10; i < 36; i++) {
	options.push({
		value: i.toString(36) + i,
		label: i.toString(36) + i,
	})
}

const AntdSelect03MultipleSelection = () => {
	const handleChange = (value) => {
		console.log('🚀 ~ value:', value)
	}

	return (
		<Space direction='vertical' style={{ width: '100%' }}>
			<Select
				style={{ width: '100%' }}
				options={options}
				onChange={handleChange}
				allowClear
				placeholder='Please select'
				defaultValue={['a10', 'b11']}
				mode='multiple'
			/>

			<Select
				style={{ width: '100%' }}
				options={options}
				defaultValue={['a10', 'b11']}
				mode='multiple'
				disabled
			/>
		</Space>
	)
}

export default AntdSelect03MultipleSelection
