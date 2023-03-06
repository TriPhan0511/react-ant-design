import { Select } from 'antd'

const AntdSelect08OptionGroup = () => {
  const onChange = (value) => {
    console.log(value)
  }

  return (
    <>
      <Select
        style={{ width: 150 }}
        onChange={onChange}
        defaultValue='lucy'
        options={[
          {
            label: 'Manager',
            options: [
              {
                value: 'jack',
                label: 'Jack',
              },
              {
                value: 'lucy',
                label: 'Lucy',
              },
            ],
          },
          {
            label: 'Engineer',
            options: [
              {
                value: 'tom',
                label: 'Tom',
              },
            ],
          },
        ]}
        // options={[
        //   {
        //     value: 'jack',
        //     label: 'Jack',
        //   },
        //   {
        //     value: 'lucy',
        //     label: 'Lucy',
        //   },
        //   {
        //     value: 'tom',
        //     label: 'Tom',
        //   },
        // ]}
      />
    </>
  )
}

export default AntdSelect08OptionGroup
