import { Select } from 'antd'

// Note: labelInValue

const AntdSelect11GetValueOfSelectedItem = () => {
  const onChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Select
        labelInValue
        style={{ width: 120 }}
        onChange={onChange}
        defaultValue={{
          value: 'lucy',
          label: 'Lucy (102)',
        }}
        options={[
          {
            value: 'jack',
            label: 'Jack (101)',
          },
          {
            value: 'lucy',
            label: 'Lucy (102)',
          },
        ]}
      />
    </>
  )
}

export default AntdSelect11GetValueOfSelectedItem
