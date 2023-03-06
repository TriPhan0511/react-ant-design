import { useState } from 'react'
import { Select, Radio } from 'antd'

// Default Height: 32px, large: 40px, small: 24px

const AntdSelect04Size = () => {
	const [size, setSize] = useState('middle')

	const options = []
	for (let i = 10; i < 36; i++) {
		options.push({
			value: i.toString(36) + i,
			label: i.toString(36) + i,
		})
	}

	const handleSelectionChange = (value) => {
		console.log(value)
	}

	return (
		<>
			<Radio.Group
				value={size}
				onChange={({ target: { value } }) => setSize(value)}
			>
				<Radio.Button value='large'>Large</Radio.Button>
				<Radio.Button value='default'>Default</Radio.Button>
				<Radio.Button value='small'>Small</Radio.Button>
			</Radio.Group>
			<br />
			<br />
			<Select
				style={{ width: 120 }}
				placeholder='Please select'
				options={options}
				defaultValue='a10'
				size={size}
				onChange={handleSelectionChange}
			/>
			<br />
			<br />
			<Select
				style={{ width: '100%' }}
				placeholder='Please select'
				options={options}
				defaultValue={['a10', 'b11']}
				mode='multiple'
				size={size}
				onChange={handleSelectionChange}
			/>
			<br />
			<br />
			<Select
				style={{ width: '100%' }}
				placeholder='Please select'
				options={options}
				defaultValue={['a10', 'b11']}
				mode='tags'
				size={size}
				onChange={handleSelectionChange}
			/>
		</>
	)
}

export default AntdSelect04Size
