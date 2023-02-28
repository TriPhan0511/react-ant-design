import { Button, Table } from 'antd'
import { useEffect, useState } from 'react'

// Datasource
const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    money: 30000,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    money: 1256000,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    money: 120000,
    address: 'Sidney No. 1 Lake Park',
  },
]

const AntdTable14BorderTitleAndFooter = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(dataSource)
  }, [])

  // Columns
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Cash Assets',
      dataIndex: 'money',
      render: (number) =>
        new Intl.NumberFormat('ja-JP', {
          style: 'currency',
          currency: 'JPY',
        }).format(number),
      align: 'right',
      className: 'myClass',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
    {
      title: 'Delete',
      render: (_, record) => (
        <Button type='primary' danger onClick={() => deleteRecord(record)}>
          Delete
        </Button>
      ),
    },
  ]

  function deleteRecord(record) {
    setData(data.filter((item) => item.key !== record.key))
  }

  return (
    <Table
      dataSource={data}
      // dataSource={dataSource}
      columns={columns}
      bordered
      title={() => 'Header'}
      footer={() => 'Footer'}
    />
  )
}

export default AntdTable14BorderTitleAndFooter
// import { Table } from 'antd'

// const AntdTable14BorderTitleAndFooter = () => {
//   // Datasource
//   const dataSource = [
//     {
//       key: '1',
//       name: 'John Brown',
//       money: 30000,
//       address: 'New York No. 1 Lake Park',
//     },
//     {
//       key: '2',
//       name: 'Jim Green',
//       money: 1256000,
//       address: 'London No. 1 Lake Park',
//     },
//     {
//       key: '3',
//       name: 'Joe Black',
//       money: 120000,
//       address: 'Sidney No. 1 Lake Park',
//     },
//   ]

//   // Columns
//   const columns = [
//     {
//       title: 'Name',
//       dataIndex: 'name',
//       render: (text) => <a>{text}</a>,
//     },
//     {
//       title: 'Cash Assets',
//       dataIndex: 'money',
//       render: (number) =>
//         new Intl.NumberFormat('ja-JP', {
//           style: 'currency',
//           currency: 'JPY',
//         }).format(number),
//       align: 'right',
//       className: 'myClass',
//     },
//     {
//       title: 'Address',
//       dataIndex: 'address',
//     },
//   ]

//   return (
//     <Table
//       dataSource={dataSource}
//       columns={columns}
//       bordered
//       title={() => 'Header'}
//       footer={() => 'Footer'}
//     />
//   )
// }

// export default AntdTable14BorderTitleAndFooter
