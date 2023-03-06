import { Select } from 'antd'

const AntdSelect02SelectWithSearchField = () => {
	const onChange = (value) => {
		console.log(`Select ${value}`)
	}

	const onSearch = (value) => {
		console.log(`Search: ${value}`)
	}

	return (
		<>
			<Select
				style={{ width: 150 }}
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
						value: 'tom',
						label: 'Tom',
					},
				]}
				placeholder='Select a person'
				onChange={onChange}
				showSearch
				onSearch={onSearch}
				optionFilterProp='children'
				filterOption={(input, option) =>
					(option?.label ?? '').toLowerCase().includes(input.toLowerCase())
				}
			/>
		</>
	)
}

export default AntdSelect02SelectWithSearchField
