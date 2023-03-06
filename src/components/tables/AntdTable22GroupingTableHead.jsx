import { Table } from 'antd'

const AntdTable22GroupingTableHead = () => {
	// Datasource
	const createDataSource = (length) =>
		Array(length)
			.fill(0)
			.map((_, i) => ({
				key: `${i + 1}`,
				name: `John Brown`,
				age: i + 1,
				street: 'Lake Park',
				building: 'C',
				doorNo: '2035',
				companyAddress: 'Lake Street 42',
				companyName: 'SoftLake Co',
				gender: 'M',
			}))

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: 120,
			fixed: 'left',
			filters: [
				{
					text: 'Jim',
					value: 'Jim',
				},
				{
					text: 'John',
					value: 'John',
				},
			],
			onFilter: (value, record) =>
				record.name.toUpperCase().includes(value.toUpperCase()),
		},
		{
			title: 'Other',
			children: [
				{
					title: 'Age',
					dataIndex: 'age',
					key: 'age',
					width: 150,
					sorter: (a, b) => a.age - b.age,
				},
				{
					title: 'Address',
					children: [
						{
							title: 'Street',
							dataIndex: 'street',
							key: 'street',
							width: 150,
						},
						{
							title: 'Block',
							children: [
								{
									title: 'Building',
									dataIndex: 'building',
									key: 'building',
									width: 100,
								},
								{
									title: 'Door No',
									dataIndex: 'doorNo',
									key: 'doorNo',
									width: 100,
								},
							],
						},
					],
				},
			],
		},
		{
			title: 'Company',
			children: [
				{
					title: 'Company Address',
					dataIndex: 'companyAddress',
					key: 'companyAddress',
					width: 200,
				},
				{
					title: 'Company Name',
					dataIndex: 'companyName',
					key: 'companyName',
				},
			],
		},
		{
			title: 'Gender',
			dataIndex: 'gender',
			key: 'gender',
			width: 80,
			fixed: 'right',
		},
	]

	return (
		<div style={{ maxWidth: 1200, margin: '50px auto' }}>
			<Table
				dataSource={createDataSource(100)}
				columns={columns}
				bordered
				scroll={{ x: 'calc(700px + 50%)', y: 240 }}
			/>
		</div>
	)
}

export default AntdTable22GroupingTableHead
