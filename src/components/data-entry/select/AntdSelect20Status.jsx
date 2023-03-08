import { Select, Space } from 'antd'

const AntdSelect20Status = () => {
  return (
    <Space direction='vertical' style={{ width: '100%' }}>
      <Select status='error' style={{ width: '100%' }} />
      <Select status='warning' style={{ width: '100%' }} />
    </Space>
  )
}

export default AntdSelect20Status
