import { Select, Space } from 'antd'

const AntdSelect16BorderedLess = () => {
  const options = [
    {
      value: 'Lucy',
      label: 'Lucy',
    },
    {
      value: 'Tom',
      label: 'Tom',
    },
    {
      value: 'Jack',
      label: 'Jack',
    },
  ]

  return (
    <Space>
      <Select bordered={false} style={{ width: 120 }} options={options} defaultValue='Lucy' />
      <Select
        bordered={false}
        disabled
        style={{ width: 120 }}
        options={options}
        defaultValue='Lucy'
      />
    </Space>
  )
}

export default AntdSelect16BorderedLess
