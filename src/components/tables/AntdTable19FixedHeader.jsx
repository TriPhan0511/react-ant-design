import { Table } from 'antd'

const AntdTable19FixedHeader = () => {
	// Datasource
	const createDataSource = () =>
		Array(100)
			.fill(0)
			.map((_, i) => ({
				key: `${i}`,
				name: `Edward King ${i}`,
				age: 32,
				address: `London, Park Lane no. ${i}`,
			}))

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			width: 150,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			width: 150,
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
	]

	return (
		<Table
			dataSource={createDataSource()}
			columns={columns}
			// pagination={{
			// 	pageSize: 50,
			// }}
			scroll={{
				y: 240,
			}}
		/>
	)
}

export default AntdTable19FixedHeader
