import { Table } from 'antd'

const AntdTable13Size = () => {
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
  ]

  // Columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
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
      <h4>Default size table</h4>
      <Table dataSource={dataSource} columns={columns} />
      <h4>Middle size table</h4>
      <Table dataSource={dataSource} columns={columns} size='middle' />
      <h4>Small size table</h4>
      <Table dataSource={dataSource} columns={columns} size='small' />
    </>
  )
}

export default AntdTable13Size
