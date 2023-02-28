import { Table } from 'antd'

// Datasource
const dataSource = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: ' No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'John Brown',
		age: 42,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jom Red',
		age: 32,
		address: 'London No. 1 Lake Park',
	},
]

// Columns
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		width: '30%',
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Category 1',
				value: 'Category 1',
			},
			{
				text: 'Category 2',
				value: 'Category 2',
			},
		],
		filterMode: 'tree',
		filterSearch: true,
		onFilter: (value, record) =>
			record.name.toLowerCase().includes(value.toLowerCase()),
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age,
	},
	{
		title: 'Address',
		dataIndex: 'address',
		width: '40%',
		filters: [
			{
				text: 'London',
				value: 'London',
			},
			{
				text: 'New York',
				value: 'New York',
			},
		],
		onFilter: (value, record) =>
			record.address.toLowerCase().includes(value.toLowerCase()),
		filterSearch: true,
	},
]

const AntdTable08FilterSearch = () => {
	return <Table dataSource={dataSource} columns={columns} />
}

export default AntdTable08FilterSearch
