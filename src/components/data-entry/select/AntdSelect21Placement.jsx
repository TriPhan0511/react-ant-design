import { Select, Radio } from 'antd'
import { useState } from 'react'

const AntdSelect21Placement = () => {
  const [placement, setPlacement] = useState('topLeft')

  const onChange = ({ target: { value } }) => {
    setPlacement(value)
  }

  return (
    <div style={{ margin: 100 }}>
      <Radio.Group onChange={onChange} defaultValue='topLeft'>
        <Radio.Button value='topLeft'>topLeft</Radio.Button>
        <Radio.Button value='topRight'>topRight</Radio.Button>
        <Radio.Button value='bottomLeft'>bottomLeft</Radio.Button>
        <Radio.Button value='bottomRight'>bottomRight</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <br />
      <Select
        placement={placement}
        style={{ width: 150 }}
        defaultValue='Mary'
        options={[
          {
            value: 'Tom',
            label: 'Tom',
          },
          {
            value: 'Mary',
            label: 'Mary',
          },
          {
            value: 'Peter',
            label: 'Peter',
          },
        ]}
      />
    </div>
  )
}

export default AntdSelect21Placement
