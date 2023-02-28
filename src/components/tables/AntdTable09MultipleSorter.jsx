import { Table } from 'antd'

// Datasource
const dataSource = [
	{
		key: '1',
		name: 'John Brown',
		chineseScore: 98,
		mathScore: 60,
		englishScore: 70,
	},
	{
		key: '2',
		name: 'Jom Green',
		chineseScore: 98,
		mathScore: 66,
		englishScore: 89,
	},
	{
		key: '3',
		name: 'Joe Black',
		chineseScore: 98,
		mathScore: 90,
		englishScore: 70,
	},
	{
		key: '4',
		name: 'Jim Red',
		chineseScore: 88,
		mathScore: 99,
		englishScore: 89,
	},
]

// Columns
const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
	},
	{
		title: 'Chinese Score',
		dataIndex: 'chineseScore',
		sorter: {
			compare: (a, b) => a.chineseScore - b.chineseScore,
			multiple: 3,
		},
	},
	{
		title: 'Math Score',
		dataIndex: 'mathScore',
		sorter: {
			compare: (a, b) => a.mathScore - b.mathScore,
			multiple: 2,
		},
	},
	{
		title: 'English Score',
		dataIndex: 'englishScore',
		sorter: {
			compare: (a, b) => a.englishScore - b.englishScore,
			multiple: 1,
		},
	},
]

const AntdTable09MultipleSorter = () => {
	return <Table dataSource={dataSource} columns={columns} />
}

export default AntdTable09MultipleSorter
