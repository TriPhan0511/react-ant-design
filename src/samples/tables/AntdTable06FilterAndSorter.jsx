import { Table } from 'antd'

// Datasource
const dataSource = [
	{
		key: '1',
		name: 'John Brown',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 50,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 55,
		address: 'London No. 2 Lake Park',
	},
	{
		key: '5',
		name: 'Jim Red Junior',
		age: 55,
		address: 'No. 2 Lake Park, London ',
	},
	{
		key: '6',
		name: 'Under 30',
		age: 22,
		address: 'No. 3 Lake Park, London ',
	},
]

// Columns
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: (a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0), // Alphabetical sorting
		// filters: [
		// 	{
		// 		text: 'Joe',
		// 		value: 'Joe',
		// 	},
		// 	{
		// 		text: 'Jim',
		// 		value: 'Jim',
		// 	},
		// ],
		// onFilter: (value, record) =>
		// 	record.name.toLowerCase().includes(value.toLowerCase()), // Alphabetical filtering
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age, // Numerical sorting
		filters: [
			{
				text: 'Between 30 and 40',
				value: [30, 40],
			},
			{
				text: 'Between 41 and 50',
				value: [41, 50],
			},
			{
				text: 'Between 51 and 60',
				value: [51, 60],
			},
			{
				text: 'Under 30',
				value: [0, 29],
			},
			{
				text: 'Under 45',
				value: [0, 44],
			},
		],
		onFilter: (value, record) =>
			record.age >= value[0] && record.age <= value[1], // Numerical filtering
	},

	{
		title: 'Address',
		dataIndex: 'address',
		filters: [
			{
				text: 'London',
				value: 'London',
			},
			{
				text: 'New York',
				value: 'New York',
			},
			{
				text: 'Sidney',
				value: 'sidney',
			},
		],
		onFilter: (value, record) =>
			record.address.toLowerCase().includes(value.toLowerCase()), // Alphabetical sorting
	},
	// 	onFilter: (value, record) =>
	// 		record.address.toLowerCase().indexOf(value.toLowerCase()) === 0,
	// },
]

const onChange = (pagination, filters, sorter, extra) => {
	console.log('params', pagination, filters, sorter, extra)
}

const Antd06FilterAndSorter = () => {
	return (
		<>
			<Table dataSource={dataSource} columns={columns} onChange={onChange} />
			{/* <Table
				dataSource={dataSource}
				columns={columns}
				onChange={onChange}
				pagination={{ pageSize: 2 }}
			/> */}
		</>
	)
}

export default Antd06FilterAndSorter

// ------------------------------------------------------------------
// import { Table } from 'antd'

// // Datasource
// const dataSource = [
// 	{
// 		key: '1',
// 		name: 'Jim Green',
// 		age: 42,
// 		address: 'London No. 1 Lake Park',
// 	},
// 	{
// 		key: '2',
// 		name: 'John Brown',
// 		age: 32,
// 		address: 'New York No. 1 Lake Park',
// 	},
// 	{
// 		key: '3',
// 		name: 'Joe Black',
// 		age: 37,
// 		address: 'Sydney No. 1 Lake Park',
// 	},
// 	{
// 		key: '4',
// 		name: 'Jom Red',
// 		age: 55,
// 		address: 'London No. 1 Lake Park',
// 	},
// ]

// // Columns
// const columns = [
// 	{
// 		title: 'Name',
// 		dataIndex: 'name',
// 	},
// 	{
// 		title: 'Age',
// 		dataIndex: 'age',
// 		// defaultSortOrder: 'descend',
// 		sorter: (a, b) => a.age - b.age,
// 	},
// 	{
// 		title: 'Address',
// 		dataIndex: 'address',
// 	},
// ]

// const Antd06FilterAndSorter = () => {
// 	return (
// 		<>
// 			<Table dataSource={dataSource} columns={columns} />
// 		</>
// 	)
// }

// export default Antd06FilterAndSorter
