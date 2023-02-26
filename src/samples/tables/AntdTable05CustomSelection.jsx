import { Table } from 'antd'
import { useState } from 'react'
import { toTitleCase } from '../../utilities/StringOperations'

// Custom selection
// Use rowSelection.selections to custom selections

// Datasource
const createDataSource = (length) =>
  new Array(length).fill(0).map((e, i) => ({
    key: `${i + 1}`,
    name: `Edward King ${i + 1}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  }))

// Columns
const createColumns = (...args) =>
  args.map((e) => ({
    title: toTitleCase(e),
    dataIndex: e,
    key: e,
  }))

const AntdTable05CustomSelection = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const rowSelection = {
    selectedRowKeys,
    onChange: (keys) => setSelectedRowKeys(keys),
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: 'Select odd rows',
        onSelect: (keys) => setSelectedRowKeys(keys.filter((_, i) => i % 2 === 0)),
      },
      {
        key: 'even',
        text: 'Select even rows',
        onSelect: (keys) => setSelectedRowKeys(keys.filter((_, i) => i % 2 !== 0)),
      },
    ],
  }

  return (
    <>
      <Table
        dataSource={createDataSource(46)}
        columns={createColumns('name', 'age', 'address')}
        rowSelection={rowSelection}
      />
    </>
  )
}

export default AntdTable05CustomSelection
