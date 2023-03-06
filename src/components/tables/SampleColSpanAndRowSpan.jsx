import { Table } from 'antd'

const SampleColSpanAndRowSpan = () => {
	// Datasource
	const dataSource = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			phone1: '0571-22098909',
			phone2: '18889898989',
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			phone1: '0571-22098333',
			phone2: '18889898888',
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			phone1: '0575-22098909',
			phone2: '18900010002',
			address: 'Sidney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 18,
			phone1: '0575-22098909',
			phone2: '18900010003',
			address: 'Hamburg No. 1 Lake Park',
		},
		{
			key: '5',
			name: 'Jake White',
			age: 99,
			phone1: '111111111',
			phone2: '222222222',
			address: 'Tokyo No. 1 Lake Park',
		},
	]

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			render: (text) => <a>{text}</a>,
			onCell: (_, index) => {
				return { colSpan: index === 4 ? 5 : 1 }
			},
		},
		{
			title: 'Age',
			dataIndex: 'age',
			onCell: hideTheFifthCell,
		},
		{
			title: 'Phones',
			dataIndex: 'phone1',
			colSpan: 2,
			onCell: (_, index) => {
				switch (index) {
					case 2:
						return { rowSpan: 2 }
					case 3:
						return { rowSpan: 0 }
					case 4:
						return { colSpan: 0 }
					default:
						return {}
				}
			},
		},
		{
			title: 'Phone2',
			dataIndex: 'phone2',
			colSpan: 0,
			onCell: hideTheFifthCell,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			onCell: hideTheFifthCell,
		},
	]

	function hideTheFifthCell(_, index) {
		return index === 4 ? { colSpan: 0 } : {}
	}

	return <Table dataSource={dataSource} columns={columns} bordered />
}

export default SampleColSpanAndRowSpan
