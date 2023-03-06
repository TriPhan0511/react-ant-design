import { Select } from 'antd'

// Search the options with sorting

const AntdSelect06SearchWithSort = () => {
  const onChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Select
        style={{ width: 170 }}
        placeholder='Search to Select'
        onChange={onChange}
        showSearch
        optionFilterProp='children'
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input?.toLowerCase())
        }
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        options={[
          {
            value: '1',
            label: 'Cancelled',
          },
          {
            value: '2',
            label: 'Closed',
          },
          {
            value: '3',
            label: 'Communicated',
          },
          {
            value: '4',
            label: 'Identified',
          },
          {
            value: 'Not 5',
            label: 'Not identified',
          },
          {
            value: '6',
            label: 'Resolved',
          },
        ]}
      />
    </>
  )
}

export default AntdSelect06SearchWithSort
