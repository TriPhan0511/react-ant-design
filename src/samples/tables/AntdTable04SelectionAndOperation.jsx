import { Table, Space, Button } from 'antd'
import { useState } from 'react'
import { toTitleCase } from '../../utilities/StringOperations'

// Selection and operation
// To perform operations and clear selections after selecting some rows,
// use rowSelection.selectedRowkeys to control selected rows.

// Datasource
const createDataSource = (length) =>
  new Array(length).fill(0).map((_, i) => ({
    key: `${i + 1}`,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no.${i}`,
  }))

// Columns
const createColumns = (...args) =>
  (args = args.map((e) => ({
    title: toTitleCase(e),
    dataIndex: e.toLowerCase(),
    key: e.toLowerCase(),
  })))

const AntdTable04SelectionAndOperation = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const rowSelection = {
    selectedRowKeys, // Pay attention
    onChange: (keys) => setSelectedRowKeys(keys),
  }

  const reload = () => {
    setIsLoading(true)
    setTimeout(() => {
      setSelectedRowKeys([])
      setIsLoading(false)
    }, 1000)
  }

  return (
    <>
      <Space style={{ marginBottom: '10px' }}>
        <Button
          type='primary'
          onClick={reload}
          disabled={selectedRowKeys.length === 0}
          loading={isLoading}
        >
          Clear All
        </Button>
        {selectedRowKeys.length > 0 && (
          <span>{`Selected ${selectedRowKeys.length} ${
            selectedRowKeys.length === 1 ? 'item' : 'items'
          }`}</span>
        )}
      </Space>
      <Table
        dataSource={createDataSource(46)}
        columns={createColumns('name', 'age', 'address')}
        rowSelection={rowSelection}
      />
    </>
  )
}

export default AntdTable04SelectionAndOperation
