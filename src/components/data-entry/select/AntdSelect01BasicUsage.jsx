import { Select, Space } from 'antd'

const AntdSelect01BasicUsage = () => {
	const handleChange = (value) => {
		console.log(`Selected ${value}`)
	}

	return (
		<Space>
			<Select
				style={{ width: 120 }}
				defaultValue='lucy'
				onChange={handleChange}
				options={[
					{
						value: 'jack',
						label: 'Jack',
					},
					{
						value: 'lucy',
						label: 'Lucy',
					},
					{
						value: 'disabled',
						label: 'Disabled',
						disabled: true,
					},
					{
						value: 'mary',
						label: 'Mary',
					},
				]}
			/>

			<Select
				style={{ width: 120 }}
				defaultValue='lucy'
				options={[
					{
						value: 'lucy',
						label: 'Lucy',
					},
				]}
				disabled={true}
			/>

			<Select
				style={{ width: 120 }}
				defaultValue='lucy'
				options={[
					{
						value: 'lucy',
						label: 'Lucy',
					},
				]}
				loading
			/>

			<Select
				style={{ width: 120 }}
				defaultValue='lucy'
				options={[
					{
						value: 'lucy',
						label: 'Lucy',
					},
					{
						value: 'peter',
						label: 'Peter',
					},
				]}
				allowClear
			/>
		</Space>
	)
}

export default AntdSelect01BasicUsage
