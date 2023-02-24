import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import { Table } from 'antd'

// Mock server:
// json-server -w src/samples/tables/data/AntdTable03Selection.json -p 3500

const AntdTable03Selection = () => {
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

	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age',
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address',
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
			{data && !data.length && <h2 style={{ color: 'purple' }}>No students</h2>}
			{data && data.length > 0 && <Table dataSource={data} columns={columns} />}
		</>
	)
	// return <div>AntdTable03Selection</div>
}

export default AntdTable03Selection
