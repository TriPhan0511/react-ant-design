import { Table } from 'antd'

const AntdTable17ColSpanAndRowSpan = () => {
	// Datasource
	const dataSource = [
		{
			key: '1',
			name: 'John Brown',
			age: 32,
			workPhoneNumber: '0571-22098909',
			cellphoneNumber: '18889898989',
			address: 'New York No. 1 Lake Park',
		},
		{
			key: '2',
			name: 'Jim Green',
			age: 42,
			workPhoneNumber: '0571-22098333',
			cellphoneNumber: '18889898888',
			address: 'London No. 1 Lake Park',
		},
		{
			key: '3',
			name: 'Joe Black',
			age: 32,
			workPhoneNumber: '0575-22098909',
			cellphoneNumber: '18900010002',
			address: 'Sydney No. 1 Lake Park',
		},
		{
			key: '4',
			name: 'Jim Red',
			age: 18,
			workPhoneNumber: '0575-22098909',
			cellphoneNumber: '18900010002',
			address: 'Tokyo No. 1 Lake Park',
		},
		{
			key: '5',
			name: 'Jack White',
			age: 18,
			workPhoneNumber: '1111111111',
			cellphoneNumber: '2222222222222222',
			address: 'Dublin No. 1 Lake Park',
		},
	]

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			onCell: (_, index) => ({ colSpan: index === 4 ? 5 : 1 }),
		},
		{
			title: 'Age',
			dataIndex: 'age',
			onCell: handleCell,
		},
		{
			title: 'Phones',
			dataIndex: 'workPhoneNumber',
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
			title: 'Cellphone',
			dataIndex: 'cellphoneNumber',
			colSpan: 0,
			onCell: handleCell,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			onCell: handleCell,
		},
	]

	function handleCell(_, index) {
		return index === 4 ? { colSpan: 0 } : {}
	}

	return <Table dataSource={dataSource} columns={columns} bordered />
}

export default AntdTable17ColSpanAndRowSpan
