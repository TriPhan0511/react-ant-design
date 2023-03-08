import { Select } from 'antd'

const AntdSelect12AutomaticTokenization = () => {
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
        tokenSeparators={[', ']}
        mode='tags'
        style={{ width: 500 }}
        options={options}
        onChange={onChange}
      />
    </>
  )
}

export default AntdSelect12AutomaticTokenization
