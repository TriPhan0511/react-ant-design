import { Radio } from 'antd'

// SOLID RADIO BUTTON STYLE
const RadioSample = () => {
  const options = [
    {
      label: 'Los Angeles',
      value: 'a',
    },
    {
      label: 'New York',
      value: 'b',
    },
    {
      label: 'Seatle',
      value: 'c',
    },
    {
      label: 'Chicago',
      value: 'd',
    },
  ]

  const createOptionsWithDisabled = (options, disabledOptions) =>
    disabledOptions && disabledOptions.length > 0
      ? options.map((e) => {
          for (const o of disabledOptions) {
            if (e.value === o) {
              e = { ...e, disabled: true }
              break
            }
          }
          return e
        })
      : options

  return (
    <>
      <Radio.Group options={options} defaultValue='a' optionType='button' buttonStyle='solid' />
      <br />
      <br />
      <Radio.Group
        options={createOptionsWithDisabled(options, ['b'])}
        defaultValue='c'
        optionType='button'
        buttonStyle='solid'
      />
    </>
  )
}

export default RadioSample

// -----------------------------------------------------------------
// import { Radio } from 'antd'
// import { useState } from 'react'

// // SIZE: The size of radio button style (large, middle, small)
// const RadioSample = () => {
//   const options = [
//     {
//       label: 'Los Angeles',
//       value: 'a',
//     },
//     {
//       label: 'New York',
//       value: 'b',
//     },
//     {
//       label: 'Seatle',
//       value: 'c',
//     },
//     {
//       label: 'Chicago',
//       value: 'd',
//     },
//   ]

//   return (
//     <>
//       <Radio.Group options={options} defaultValue='a' optionType='button' size='large' />
//       <br />
//       <br />
//       <Radio.Group options={options} defaultValue='a' optionType='button' size='middle' />
//       <br />
//       <br />
//       <Radio.Group options={options} defaultValue='a' optionType='button' size='small' />
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Radio } from 'antd'
// import { useState } from 'react'

// // RADIO.GROUP WITH NAME
// const RadioSample = () => {
//   const [value, setValue] = useState('A')

//   const onChange = ({ target: { value } }) => {
//     console.log(`Selected value: ${value}`)
//     setValue(value)
//   }

//   const options = ['A', 'B', 'C', 'D']

//   return (
//     <>
//       <Radio.Group options={options} defaultValue={value} onChange={onChange} name='myInput' />
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Radio } from 'antd'
// import { useState } from 'react'

// // RADIO STYLE (THE COMBINATION OF RADIO BUTTON STYLE)
// const RadioSample = () => {
//   const [value1, setValue1] = useState('a')
//   const [value2, setValue2] = useState('d')

//   const onChange = ({ target: { value } }) => {
//     console.log(`Selected value of group: ${value}`)
//     setValue1(value)
//   }

//   const options = [
//     {
//       label: 'Los Angeles',
//       value: 'a',
//     },
//     {
//       label: 'New York',
//       value: 'b',
//     },
//     {
//       label: 'Seatle',
//       value: 'c',
//     },
//     {
//       label: 'Chicago',
//       value: 'd',
//     },
//   ]
//   const optionsWithDisabled = [
//     {
//       label: 'Los Angeles',
//       value: 'a',
//     },
//     {
//       label: 'New York',
//       value: 'b',
//       disabled: true,
//     },
//     {
//       label: 'Seatle',
//       value: 'c',
//     },
//     {
//       label: 'Chicago',
//       value: 'd',
//     },
//   ]

//   return (
//     <>
//       <Radio.Group
//         options={options}
//         defaultValue={value1}
//         onChange={onChange}
//         optionType='button'
//       />
//       <br />
//       <br />
//       <Radio.Group
//         options={optionsWithDisabled}
//         defaultValue={value2}
//         onChange={onChange}
//         optionType='button'
//       />
//       <br />
//       <br />
//       <Radio.Group
//         disabled
//         options={options}
//         defaultValue={value1}
//         onChange={onChange}
//         optionType='button'
//       />
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Radio } from 'antd'
// import { useState } from 'react'

// // RADIO.GROUP OPTIONS PROP
// const RadioSample = () => {
//   const [value1, setValue1] = useState('Apple')
//   const [value2, setValue2] = useState('Apple')
//   const [value3, setValue3] = useState('Pear')
//   const [value4, setValue4] = useState('Pear')

//   const onChange1 = (e) => {
//     console.log(`Selected value of group 1: ${e.target.value}`)
//     setValue1(e.target.value)
//   }

//   const onChange2 = ({ target: { value } }) => {
//     console.log(`Selected value of group 2: ${value}`)
//     setValue2(value)
//   }

//   const onChange3 = ({ target: { value } }) => {
//     console.log(`Selected value of group 3: ${value}`)
//     setValue3(value)
//   }

//   const onChange4 = ({ target: { value } }) => {
//     console.log(`Selected value of group 4: ${value}`)
//     setValue4(value)
//   }

//   const plainOptions = ['Apple', 'Pear', 'Orange']

//   const options = [
//     {
//       label: 'Apple',
//       value: 'Apple',
//     },
//     {
//       label: 'Pear',
//       value: 'Pear',
//     },
//     {
//       label: 'Orange',
//       value: 'Orange',
//     },
//   ]

//   const optionsWithDisabled = [
//     {
//       label: 'Apple',
//       value: 'Apple',
//     },
//     {
//       label: 'Pear',
//       value: 'Pear',
//     },
//     {
//       label: 'Orange',
//       value: 'Orange',
//       disabled: true,
//     },
//   ]

//   return (
//     <>
//       <Radio.Group options={plainOptions} value={value1} onChange={onChange1} />
//       <br />
//       <br />
//       <Radio.Group options={optionsWithDisabled} value={value2} onChange={onChange2} />
//       <br />
//       <br />
//       <Radio.Group options={options} value={value3} onChange={onChange3} optionType='button' />
//       <br />
//       <br />
//       <Radio.Group
//         options={optionsWithDisabled}
//         value={value4}
//         onChange={onChange4}
//         optionType='button'
//         buttonStyle='solid'
//       />
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Radio, Space, Input } from 'antd'
// import { useState } from 'react'

// // VERTICAL RADIO.GROUP
// const RadioSample = () => {
//   const [value, setValue] = useState(1)

//   const onChange = (e) => {
//     console.log(e.target.value)
//     setValue(e.target.value)
//   }

//   return (
//     <Radio.Group value={value} onChange={onChange}>
//       <Space direction='vertical'>
//         <Radio value={1}>Option A</Radio>
//         <Radio value={2}>Option B</Radio>
//         <Radio value={3}>Option C</Radio>
//         <Radio value={4}>
//           More...{value === 4 && <Input style={{ width: '100px', marginLeft: '10px' }} />}
//         </Radio>
//       </Space>
//     </Radio.Group>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Button, Radio } from 'antd'
// import { useState } from 'react'

// // RADIO GROUP
// const RadioSample = () => {
//   const [value, setValue] = useState(1)

//   const onChange = (e) => {
//     console.log(`radio checked ${e.target.value}`)
//     setValue(e.target.value)
//   }

//   return (
//     <>
//       <Radio.Group value={value} onChange={onChange}>
//         <Radio value={1}>A</Radio>
//         <Radio value={2}>B</Radio>
//         <Radio value={3}>C</Radio>
//         <Radio value={4}>D</Radio>
//       </Radio.Group>
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Button, Radio } from 'antd'
// import { useState } from 'react'

// // DISABLED
// const RadioSample = () => {
//   const [disabled, setDisabled] = useState(true)

//   const toggleDisabled = () => {
//     setDisabled(!disabled)
//   }

//   return (
//     <>
//       <Radio disabled={disabled}>Disabled</Radio>
//       <Radio defaultChecked disabled={disabled}>
//         Disabled
//       </Radio>
//       <br />
//       <br />
//       <Button type='primary' size='small' onClick={toggleDisabled}>
//         Toggle disabled
//       </Button>
//     </>
//   )
// }

// export default RadioSample

// // -----------------------------------------------------------------
// import { Radio } from 'antd'

// // BASIC
// const RadioSample = () => {
//   return <Radio>Radio</Radio>
// }

// export default RadioSample
