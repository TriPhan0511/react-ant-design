import { Table } from 'antd'

const AntdTable20FixedColumns = () => {
	// Data
	const data = {
		fullNames: ['John Brown', 'Jim Green'],
		ages: [32, 40],
		addresses: ['New Yor Park', 'London Park'],
	}

	// Datasource
	const createDataSource = ({ fullNames, ages, addresses }) =>
		Array(2)
			.fill(0)
			.map((_, i) => ({
				key: `${i + 1}`,
				fullName: fullNames[i],
				age: ages[i],
				address: addresses[i],
			}))

	// Columns
	const createColumns = (length) => {
		const arr = Array(length)
			.fill(0)
			.map((_, i) => ({
				title: `Column ${i + 1}`,
				dataIndex: 'address',
			}))

		return [
			{
				title: 'Full Name',
				dataIndex: 'fullName',
				fixed: 'left',
			},
			{
				title: 'Age',
				dataIndex: 'age',
				fixed: 'left',
			},
			...arr,
			{
				title: 'Action',
				dataIndex: '',
				render: () => <a>action</a>,
				fixed: 'right',
			},
		]
	}

	return (
		<div style={{ maxWidth: '1000px', margin: '50px auto' }}>
			<Table
				dataSource={createDataSource(data)}
				columns={createColumns(8)}
				scroll={{
					x: 1300,
				}}
			/>
		</div>
	)
}

export default AntdTable20FixedColumns
