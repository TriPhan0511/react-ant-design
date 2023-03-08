import { Select } from 'antd'
import { useState } from 'react'

const AntdSelect15HideAlreadySelected = () => {
  const [items, setItems] = useState([])
  const options = ['Apples', 'Nails', 'Bananas', 'Helicopters']
  const filteredOptions = options.filter((e) => !items.includes(e))

  const onChange = (value) => {
    setItems(value)
  }

  return (
    <>
      <Select
        onChange={onChange}
        mode='multiple'
        style={{ width: '100%' }}
        placeholder='Inserted are removed'
        options={filteredOptions.map((e) => ({
          value: e,
          label: e,
        }))}
      />
    </>
  )
}

export default AntdSelect15HideAlreadySelected
