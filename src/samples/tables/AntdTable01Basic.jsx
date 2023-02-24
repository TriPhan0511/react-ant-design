import { Table, Tag, Space } from 'antd'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

// json-server -w src/samples/tables/data/AntdTable01Basic.json -p 3500
const AntdTable01Basic = () => {
	const { isLoading, isError, error, data } = useQuery(
		['students'],
		fetchStudents
	)

	// Use axios to fetch data
	const api = axios.create({ baseURL: 'http://localhost:3500/' })
	async function fetchStudents() {
		try {
			const response = await api.get('students')
			return response.data
		} catch (error) {
			throw new Error(error.message)
		}
	}

	const toTitleCase = (str) =>
		str
			.toLowerCase()
			.split(' ')
			.map((e) => e[0].toUpperCase() + e.slice(1))
			.join(' ')

	const createColumns = (data) =>
		Object.keys(data[0]).map((e) => {
			let out = {
				title: toTitleCase(e),
				dataIndex: e,
				key: e,
			}
			switch (e) {
				case 'name':
					out = { ...out, render: (text) => <a>{text}</a> }
					break
				case 'tags':
					out = {
						...out,
						render: (_, { tags }) => (
							<>
								{tags.map((tag) => {
									let color = tag.length > 5 ? 'geekblue' : 'green'
									if (tag === 'loser') {
										color = 'volcano'
									}
									return (
										<Tag color={color} key={tag}>
											{tag}
										</Tag>
									)
								})}
							</>
						),
					}
					break

				default:
					break
			}

			return out
		})

	// Columns2
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
		{
			title: 'Tags',
			dataIndex: 'tags',
			key: 'tags',
			render: (_, { tags }) => (
				<>
					{tags.map((tag) => {
						let color = tag.length > 5 ? 'geekblue' : 'green'
						if (tag === 'loser') {
							color = 'volcano'
						}
						return (
							<Tag color={color} key={tag}>
								{tag.toUpperCase()}
							</Tag>
						)
					})}
				</>
			),
		},
		{
			title: 'Action',
			key: 'action',
			render: (_, record) => (
				<Space size='middle'>
					<a>Invite {record.name}</a>
					<a>Delete</a>
				</Space>
			),
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
				<h2 style={{ color: 'purple' }}>You have no students</h2>
			)}
			{data && data.length > 0 && (
				<Table dataSource={data} columns={columns} />
				// <Table dataSource={data} columns={createColumns(data)} />
			)}
		</>
	)
}

export default AntdTable01Basic
