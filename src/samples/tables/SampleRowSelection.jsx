// import React from 'react'

// const SampleRowSelection = () => {
//   return <div>SampleRowSelection</div>
// }

// export default SampleRowSelection

import { Table, Divider, Radio } from 'antd'
import { useState } from 'react'

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jom Green',
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
    name: 'Disabled User',
    age: 99,
    address: 'Tokyo No. 1 Lake Park',
  },
]

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
    render: (age) => (age || age === 0 ? age : 'No data.'),
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
]

const selectionTypeOptions = ['checkbox', 'radio']

const SampleRowSelection = () => {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [detailTableDataSource, setDetailTableDataSource] = useState([])

  const rowSelection = {
    onChange: (_, selectedRows) => {
      setDetailTableDataSource(selectedRows)
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === 'Disabled User',
      name: record.name,
    }),
  }

  const createDetailColumns = (columns) => {
    const out = [...columns]
    out.pop()
    return out
  }

  return (
    <>
      <Radio.Group
        options={selectionTypeOptions}
        defaultValue={selectionType}
        onChange={({ target: { value } }) => setSelectionType(value)}
      />
      <Divider />
      <Table
        dataSource={dataSource}
        columns={columns}
        rowSelection={{ type: selectionType, ...rowSelection }}
      />

      {/* Detail table */}
      {detailTableDataSource && detailTableDataSource.length > 0 && (
        <>
          <Divider />
          <h2>Selected Student(s)</h2>
          <Table dataSource={detailTableDataSource} columns={createDetailColumns(columns)} />
        </>
      )}
    </>
  )
}

export default SampleRowSelection
