import { Table, Divider, Radio } from 'antd'
import { useState } from 'react'

// json-server -w src/samples/tables/data/AntdTable03Selection.json -p 3500

// Datasource
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No.1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No.1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No.1 Lake Park',
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No.1 Lake Park',
  },
]

// Columns
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

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log('selectedRowKeys: ', selectedRowKeys)
    console.log('selectedRows: ', selectedRows)
  },
  getCheckboxProps: (record) => ({
    disabled: record.name === 'Disabled User',
    name: record.name,
  }),
}

const AntdTable03Selection = () => {
  const [selectionType, setSelectionType] = useState('checkbox')
  return (
    <>
      <Radio.Group
        onChange={({ target: { value } }) => setSelectionType(value)}
        defaultValue={selectionType}
      >
        <Radio value='checkbox'>checkbox type</Radio>
        <Radio value='radio'>radio type</Radio>
      </Radio.Group>
      <Divider />
      <Table
        dataSource={data}
        columns={columns}
        rowSelection={{ type: selectionType, ...rowSelection }}
      />
    </>
  )
}

export default AntdTable03Selection

// // -----------------------------------------------------------------
// import axios from 'axios'
// import { useQuery } from '@tanstack/react-query'
// import { Table } from 'antd'

// // Mock server:
// // json-server -w src/samples/tables/data/AntdTable03Selection.json -p 3500

// const AntdTable03Selection = () => {
//   const { isLoading, isError, error, data } = useQuery(['students'], fetchStudents)
//   const api = axios.create({
//     baseURL: 'http://localhost:3500/',
//   })

//   async function fetchStudents() {
//     try {
//       const response = await api.get('students')
//       return response.data
//     } catch (error) {
//       throw new Error(error.message)
//     }
//   }

//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       key: 'name',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Age',
//       dataIndex: 'age',
//       key: 'age',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//       key: 'address',
//     },
//   ]

//   return (
//     <>
//       {isLoading && <h2>Loading data...</h2>}
//       {isError && <h2 style={{ color: 'red' }}>{error.message ? error.message : error}</h2>}
//       {data && !data.length && <h2 style={{ color: 'purple' }}>No students</h2>}
//       {data && data.length > 0 && <Table dataSource={data} columns={columns} />}
//     </>
//   )
// }

// export default AntdTable03Selection
