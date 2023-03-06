import { Select } from 'antd'

// Select with tags, transform input to tag (scroll the menu)

const AntdSelect07Tags = () => {
  const options = []
  for (let i = 10; i < 36; i++) {
    options.push({
      value: i.toString(36) + i,
      label: i.toString(36) + i,
    })
  }

  const onChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Select
        style={{ width: '100%' }}
        placeholder='Tags Mode'
        options={options}
        mode='tags'
        onChange={onChange}
      />
    </>
  )
}

export default AntdSelect07Tags
