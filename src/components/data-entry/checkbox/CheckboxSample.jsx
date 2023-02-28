import { Checkbox, Row, Col } from 'antd'

// USE WITH GRID
const CheckboxSample = () => {
  const onChange = (checkedValues) => {
    console.log(`checked = ${checkedValues}`)
  }

  return (
    <>
      <Checkbox.Group
        style={{ display: 'block', width: '50%' }}
        onChange={onChange}
        value={['A', 'E']}
      >
        <Row>
          <Col span={8}>
            <Checkbox value='A'>1</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='B'>B</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='C'>C</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='D'>D</Checkbox>
          </Col>
          <Col span={8}>
            <Checkbox value='E'>E</Checkbox>
          </Col>
        </Row>
      </Checkbox.Group>
    </>
  )
}

export default CheckboxSample

// --------------------------------------------------------------
// import { Checkbox, Divider } from 'antd'
// import { useState } from 'react'

// // CHECK ALL
// const CheckboxSample = () => {
//   const CheckboxGroup = Checkbox.Group
//   const plainOptions = ['Apple', 'Pear', 'Orange']
//   const defaultCheckedList = ['Apple', 'Orange']

//   const [checkedList, setCheckedList] = useState(defaultCheckedList)
//   const [indeterminate, setIndeterminate] = useState(true)
//   const [checkAll, setCheckAll] = useState(false)

//   const onChange = (list) => {
//     setCheckedList(list)
//     setIndeterminate(!!list.length && list.length < plainOptions.length)
//     setCheckAll(list.length === plainOptions.length)
//   }

//   const onCheckAllChange = (e) => {
//     setCheckedList(e.target.checked ? plainOptions : [])
//     setIndeterminate(false)
//     setCheckAll(e.target.checked)
//   }

//   return (
//     <>
//       <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
//         all
//       </Checkbox>
//       <Divider />
//       <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange} />
//     </>
//   )
// }

// export default CheckboxSample

// // --------------------------------------------------------------
// import { Checkbox, Button } from 'antd'
// import { useState } from 'react'

// // CHECKBOX GROUP
// const CheckboxSample = () => {
//   const onChange = (checkedValues) => {
//     console.log(`checked = ${checkedValues}`)
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
//       disabled: false,
//     },
//   ]

//   return (
//     <>
//       <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
//       <br />
//       <br />
//       <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
//       <br />
//       <br />
//       <Checkbox.Group
//         options={optionsWithDisabled}
//         defaultValue={['Apple']}
//         disabled
//         onChange={onChange}
//       />
//     </>
//   )
// }

// export default CheckboxSample

// // --------------------------------------------------------------
// import { Checkbox, Button } from 'antd'
// import { useState } from 'react'

// // CONTROLLED CHECKBOX
// const CheckboxSample = () => {
//   const [checked, setChecked] = useState(true)
//   const [disabled, setDisabled] = useState(false)
//   const label = `${checked ? 'Checked' : 'Unchecked'} - ${disabled ? 'Disabled' : 'Unabled'}`

//   const onChange = (e) => {
//     console.log(`checked = ${e.target.checked}`)
//     setChecked(e.target.checked)
//   }

//   const toggleChecked = () => {
//     setChecked(!checked)
//   }

//   const toggleDisabled = () => {
//     setDisabled(!disabled)
//   }

//   return (
//     <>
//       <p style={{ marginBottom: '20px' }}>
//         <Checkbox checked={checked} disabled={disabled} onChange={onChange}>
//           {label}
//         </Checkbox>
//       </p>
//       <p>
//         <Button type='primary' size='small' onClick={toggleChecked}>
//           {checked ? 'Uncheck' : 'Check'}
//         </Button>
//         <Button type='primary' size='small' onClick={toggleDisabled} style={{ marginLeft: '10px' }}>
//           {disabled ? 'Enable' : 'Disable'}
//         </Button>
//       </p>
//     </>
//   )
// }

// export default CheckboxSample

// // --------------------------------------------------------------
// import { Checkbox } from 'antd'
// import { useState } from 'react'

// // DISABLED
// const CheckboxSample = () => {
//   return (
//     <>
//       <Checkbox disabled />
//       <br />
//       <Checkbox defaultChecked disabled />
//     </>
//   )
// }

// export default CheckboxSample

// // --------------------------------------------------------------
// import { Checkbox } from 'antd'
// import { useState } from 'react'

// // BASIC
// const CheckboxSample = () => {
//   const onChange = (e) => {
//     console.log(`checked = ${e.target.checked}`)
//   }

//   return <Checkbox onChange={onChange}>Checkbox</Checkbox>
// }

// export default CheckboxSample

// // --------------------------------------------------------------

// import { Checkbox } from 'antd'
// import { useState } from 'react'

// // Example: Use e.target.checked
// const CheckboxSample = () => {
//   const [isNewsLetter, setIsNewsLetter] = useState(true)

//   const onChange = (e) => {
//     setIsNewsLetter(e.target.checked)
//   }

//   return (
//     <>
//       <Checkbox onChange={onChange}>Newsletter</Checkbox>
//       {isNewsLetter ? <p>Receive newsletter</p> : <p>DO NOT receive newsletter</p>}
//     </>
//   )
// }

// export default CheckboxSample
