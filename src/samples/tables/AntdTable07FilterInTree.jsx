import { Table } from 'antd'

// Datascource
const dataSource = [
	{
		key: '1',
		name: 'John Brown',
		age: 32,
		address: 'New York No. 1 Lake Park',
	},
	{
		key: '2',
		name: 'Jim Green',
		age: 42,
		address: 'London No. 1 Lake Park',
	},
	{
		key: '3',
		name: 'Joe Black',
		age: 32,
		address: 'Sidney No. 1 Lake Park',
	},
	{
		key: '4',
		name: 'Jim Red',
		age: 32,
		address: 'No. 2 Lake Park, London',
	},
]

// Columns
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Category 1',
				value: 'Category 1',
				children: [
					{
						text: 'Yellow',
						value: 'Yellow',
					},
					{
						text: 'Pink',
						value: 'Pink',
					},
				],
			},
			{
				text: 'Category 2',
				value: 'Category 2',
				children: [
					{
						text: 'Green',
						value: 'Green',
					},
					{
						text: 'Black',
						value: 'Black',
					},
				],
			},
		],
		onFilter: (value, record) =>
			record.name.toLowerCase().includes(value.toLowerCase()),
		filterMode: 'tree',
		filterSearch: true,
		width: '30%',
	},
	{
		title: 'Age',
		dataIndex: 'age',
		sorter: (a, b) => a.age - b.age,
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
		],
		onFilter: (value, record) =>
			record.address.toLowerCase().includes(value.toLowerCase()),
		filterSearch: true,
		width: '40%',
	},
]

const AntdTable07FilterInTree = () => {
	return <Table dataSource={dataSource} columns={columns} />
}

export default AntdTable07FilterInTree

// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// -------------------------------------------------------------------
// import { Table } from 'antd'

// // Datascource
// const dataSource = [
// 	{
// 		key: '1',
// 		name: 'John Brown',
// 		age: 32,
// 		address: 'New York No. 1 Lake Park',
// 	},
// 	{
// 		key: '2',
// 		name: 'Jim Green',
// 		age: 42,
// 		address: 'London No. 1 Lake Park',
// 	},
// 	{
// 		key: '3',
// 		name: 'Joe Black',
// 		age: 32,
// 		address: 'Sidney No. 1 Lake Park',
// 	},
// 	{
// 		key: '4',
// 		name: 'Jim Red',
// 		age: 32,
// 		address: 'No. 1 Lake Park, London',
// 	},
// ]

// // Coulmns
// const columns = [
// 	{
// 		title: 'Name',
// 		dataIndex: 'name',
// 		filters: [
// 			{
// 				text: 'Joe',
// 				value: 'Joe',
// 			},
// 			{
// 				text: 'Category 1',
// 				value: 'Category 1',
// 				children: [
// 					{
// 						text: 'Yellow',
// 						value: 'Yellow',
// 					},
// 					{
// 						text: 'Pink',
// 						value: 'Pink',
// 					},
// 				],
// 			},
// 			{
// 				text: 'Category 2',
// 				value: 'Category 2',
// 				children: [
// 					{
// 						text: 'Green',
// 						value: 'Green',
// 					},
// 					{
// 						text: 'Black',
// 						value: 'Black',
// 					},
// 				],
// 			},
// 		],
// 		filterMode: 'tree',
// 		filterSearch: true,
// 		onFilter: (value, record) =>
// 			record.name.toLowerCase().includes(value.toLowerCase()),
// 		width: '30%',
// 	},
// 	{
// 		title: 'Age',
// 		dataIndex: 'age',
// 		sorter: (a, b) => a.age - b.age,
// 	},
// 	{
// 		title: 'Address',
// 		dataIndex: 'address',
// 		filters: [
// 			{ text: 'London', value: 'London' },
// 			{ text: 'New York', value: 'New York' },
// 		],
// 		onFilter: (value, record) =>
// 			record.address.toLowerCase().includes(value.toLowerCase()),
// 		filterSearch: true,
// 		width: '40%',
// 	},
// ]

// const AntdTable07FilterInTree = () => {
// 	return <Table dataSource={dataSource} columns={columns} />
// }

// export default AntdTable07FilterInTree
