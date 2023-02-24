import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Table, Tag, Space } from 'antd'

// Mock server:
// json-server -w src/samples/tables/data/AntdTable02JsxStyleAPI.json -p 3500

const AntdTable02JsxStyleAPI = () => {
	const { Column, ColumnGroup } = Table
	const { isLoading, isError, error, data } = useQuery(
		['students'],
		fetchStudents
	)
	const api = axios.create({
		baseURL: 'http://localhost:3500/',
	})

	async function fetchStudents() {
		try {
			const response = await api.get('students')
			return response.data
		} catch (error) {
			throw new Error(error.message)
		}
	}

	// columns
	const columns = [
		{
			title: 'First Name',
			key: '1',
			dataIndex: 'firstName',
		},
		{
			title: 'Last Name',
			key: '2',
			dataIndex: 'lastName',
		},
		{
			title: 'Age',
			key: '3',
			dataIndex: 'age',
		},
		{
			title: 'Address',
			key: '4',
			dataIndex: 'address',
		},
		{
			title: 'Tags',
			key: '5',
			dataIndex: 'tags',
			render: (_, { tags }) =>
				tags.map((tag) => <Tag color='orange'>{tag}</Tag>),
		},
	]

	return (
		<>
			{isLoading && <h2>Loading data...</h2>}
			{isError && (
				<h2 style={{ color: 'red' }}>
					{error.message ? error.message : error}
				</h2>
			)}
			{!isLoading && !isError && data && !data.length && (
				<h2 style={{ color: 'purple' }}>No students</h2>
			)}
			{data && data.length > 0 && (
				<Table dataSource={data}>
					<ColumnGroup title='Name'>
						<Column title='First Name' dataIndex='firstName' key='firstName' />
						<Column title='Last Name' dataIndex='lastName' key='lastName' />
					</ColumnGroup>
					<Column title='Age' dataIndex='age' key='age' />
					<Column title='Address' dataIndex='address' key='address' />
					<Column
						title='Tags'
						dataIndex='tags'
						key='tags'
						render={(tags) => tags.map((tag) => <Tag color='blue'>{tag}</Tag>)}
					/>
					<Column
						title='Action'
						key='action'
						render={(_, record) => (
							<Space size='middle'>
								<a>Invite {record.lastName}</a>
								<a>Delete</a>
							</Space>
						)}
					/>
				</Table>
			)}
		</>
	)
}

export default AntdTable02JsxStyleAPI
