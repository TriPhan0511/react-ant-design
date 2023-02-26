import { Table } from 'antd'

// Datasource
const dataSource = [
  {
    key: '1',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 37,
    address: 'Sydney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jom Red',
    age: 55,
    address: 'London No. 1 Lake Park',
  },
]

// Columns
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    // defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
]

const Antd06FilterAndSort = () => {
  return (
    <>
      <Table dataSource={dataSource} columns={columns} />
    </>
  )
}

export default Antd06FilterAndSort
