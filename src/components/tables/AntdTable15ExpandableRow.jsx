import { Table } from 'antd'

const AntdTable15ExpandableRow = () => {
	// Datascource
	const dataSource = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			address: 'New York No. 1 Lake Park',
			description:
				'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			address: 'London No. 1 Lake Park',
			description:
				'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
		},
		{
			key: '3',
			name: 'Not Expandable',
			age: 29,
			address: 'Tokyo No. 1 Lake Park',
			description: 'This not expandable',
		},
		{
			key: '4',
			name: 'Joe Black',
			age: 32,
			address: 'Sidney No. 1 Lake Park',
			description:
				'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
		},
	]

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
		},
		{
			title: 'Age',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
		},
		{
			title: 'Action',
			dataIndex: '',
			render: () => <a>Delete</a>,
		},
	]

	return (
		<Table
			dataSource={dataSource}
			columns={columns}
			expandable={{
				expandedRowRender: (record) => (
					<p style={{ margin: 0 }}>{record.description}</p>
				),
				rowExpandable: (record) => record.name !== 'Not Expandable',
			}}
		/>
	)
}

export default AntdTable15ExpandableRow
