import { Table, Space, Button } from 'antd'
import { useState } from 'react'
import { alphabeticalSort } from '../../utilities/Sorting'

const AntdTable10ResetFilterAndSorter = () => {
	const [sortedInfo, setSortedInfo] = useState({})
	const [filteredInfo, setFilteredInfo] = useState({})

	// Datasource
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
			address: 'London No. 1 Lake Park',
		},
	]

	// Columns
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			sorter: (a, b) => alphabeticalSort(a.name, b.name),
			sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
			filters: [
				{
					text: 'Jim',
					value: 'Jim',
				},
				{
					text: 'Joe',
					value: 'Joe',
				},
			],
			onFilter: (value, record) =>
				record.name.toUpperCase().includes(value.toUpperCase()),
			filteredValue: filteredInfo.name || null,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
			sorter: (a, b) => a.age - b.age,
			sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
			sorter: (a, b) => alphabeticalSort(a.address, b.address),
			sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
			filters: [
				{
					text: 'New York',
					value: 'New York',
				},
				{
					text: 'London',
					value: 'London',
				},
			],
			onFilter: (value, record) =>
				record.address.toUpperCase().includes(value.toUpperCase()),
			filteredValue: filteredInfo.address || null,
		},
	]

	const handleChange = (pagination, filter, sorter) => {
		console.log('🚀 ~ sorter:', sorter)
		console.log('🚀 ~ filter:', filter)
		setSortedInfo(sorter)
		setFilteredInfo(filter)
	}

	const sortAgeDescending = () => {
		setSortedInfo({
			columnKey: 'age',
			order: 'descend',
		})
	}

	const clearFilters = () => {
		setFilteredInfo({})
	}

	const clearFiltersAndSorters = () => {
		setSortedInfo({})
		setFilteredInfo({})
	}

	return (
		<>
			<Space style={{ marginBottom: '15px' }}>
				<Button onClick={sortAgeDescending}>Sort age descending</Button>
				<Button onClick={clearFilters}>Clear filters</Button>
				<Button onClick={clearFiltersAndSorters}>
					Clear filters and sorters
				</Button>
			</Space>
			<Table
				dataSource={dataSource}
				columns={columns}
				onChange={handleChange}
			/>
		</>
	)
}

export default AntdTable10ResetFilterAndSorter
