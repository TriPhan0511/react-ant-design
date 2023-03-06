import { Table } from 'antd'

const AntdTable21FixedColumnsAndHeaders = () => {
	// Datascource
	const createDataSource = (length) =>
		Array(length)
			.fill(0)
			.map((_, i) => ({
				fullName: `Edward ${i}`,
				age: 32,
				address: `London Park no. ${i}`,
			}))

	// Columns
	const createColumns = (number) => {
		const arr = Array(number)
			.fill(0)
			.map((_, i) => ({
				title: `Column ${i + 1}`,
				dataIndex: 'address',
				width: 150,
			}))
		return [
			{
				title: 'Full Name',
				dataIndex: 'fullName',
				width: 100,
				fixed: 'left',
			},
			{
				title: 'Age',
				dataIndex: 'age',
				width: 100,
				fixed: 'left',
			},
			...arr,
			{
				title: 'Action',
				dataIndex: '',
				render: () => <a>action</a>,
				width: 100,
				fixed: 'right',
			},
		]
	}

	return (
		<div style={{ maxWidth: '1000px', margin: '50px auto' }}>
			<Table
				dataSource={createDataSource(100)}
				columns={createColumns(8)}
				pagination={{ current: 10 }}
				scroll={{ x: 1500, y: 300 }}
			/>
		</div>
	)
}

export default AntdTable21FixedColumnsAndHeaders
