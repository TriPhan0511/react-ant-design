import { Form, Input, Select, Button, Space } from 'antd'

// Call form method with Form.useForm

const AntdForm02FormMethods = () => {
	const layout = {
		labelCol: {
			span: 8,
		},
		wrapperCol: {
			span: 16,
		},
	}

	const buttonsLayout = {
		wrapperCol: {
			offset: 8,
			span: 16,
		},
	}

	const dropdownOptions = [
		{
			value: 'male',
			label: 'male',
		},
		{
			value: 'female',
			label: 'female',
		},
		{
			value: 'other',
			label: 'other',
		},
	]

	const Item = Form.Item
	const [form] = Form.useForm()

	const onFinish = (values) => {
		console.log(values)
	}

	const resetAllFields = () => {
		form.resetFields() // Pay attentiton
	}

	const handleGenderChange = (v) => {
		const keys = dropdownOptions.map((e) => e.value)
		const arr = keys.map((e) => {
			return e === 'male'
				? { [e]: 'Hi, man' }
				: e === 'female'
				? { [e]: 'Hi, lady!' }
				: { [e]: 'Hi there!' }
		})
		const messages = Object.assign({}, ...arr)
		form.setFieldsValue({
			note: messages[v] || 'Hi!',
		}) // Pay attentiton
	}

	const fillForm = () => {
		form.setFieldsValue({ note: 'Hi every body!', gender: dropdownOptions[2] }) // Pay attentiton
	}

	return (
		<div
			style={{
				maxWidth: 600,
				margin: '100px auto',
				border: '1px solid #ccc',
				padding: 20,
			}}
		>
			<Form name='form-hook' {...layout} form={form} onFinish={onFinish}>
				<Item name='note' label='Note' rules={[{ required: true }]}>
					<Input />
				</Item>
				<Item name='gender' label='Gender' rules={[{ required: true }]}>
					<Select
						placeholder='Select an option and change input text above'
						options={dropdownOptions}
						onChange={handleGenderChange}
					/>
				</Item>

				{/* Buttons */}
				<Item {...buttonsLayout}>
					<Space>
						<Button type='primary' htmlType='submit'>
							Submit
						</Button>
						<Button htmlType='button' onClick={resetAllFields}>
							Reset
						</Button>
						<Button type='link' htmlType='button' onClick={fillForm}>
							Fill form
						</Button>
					</Space>
				</Item>
			</Form>
		</div>
	)
}

export default AntdForm02FormMethods

// ----------------------------------------------------------------------------
// import { Form, Input, Select, Button, Space } from 'antd'

// // Call form method with Form.useForm

// const AntdForm02FormMethods = () => {
// 	const layout = {
// 		labelCol: {
// 			span: 8,
// 		},
// 		wrapperCol: {
// 			span: 16,
// 		},
// 	}

// 	const tailLayout = {
// 		wrapperCol: {
// 			offset: 8,
// 			span: 16,
// 		},
// 	}

// 	const [form] = Form.useForm()
// 	const Item = Form.Item

// 	const onGenderChange = (value) => {
// 		const messages = {
// 			male: 'Hi, man!',
// 			female: 'Hi, lady!',
// 		}
// 		form.setFieldsValue({
// 			note: messages[value] || 'Hi there!',
// 		})
// 	}

// 	const onReset = () => {
// 		form.resetFields()
// 	}

// 	const fillForm = () => {
// 		form.setFieldsValue({
// 			note: 'Hello world!',
// 			gender: 'male',
// 		})
// 	}

// 	const onFinish = (values) => {
// 		console.log(values)
// 	}

// 	return (
// 		<div
// 			style={{
// 				maxWidth: 600,
// 				margin: '100px auto',
// 				border: '1px solid #ccc',
// 				padding: 20,
// 			}}
// 		>
// 			<Form name='control-hooks' {...layout} form={form} onFinish={onFinish}>
// 				<Item
// 					name='note'
// 					label='Note'
// 					rules={[
// 						{
// 							required: true,
// 						},
// 					]}
// 				>
// 					<Input />
// 				</Item>

// 				<Item name='gender' label='Gender' rules={[{ required: true }]}>
// 					<Select
// 						placeholder='Select an option and change input text above'
// 						allowClear
// 						onChange={onGenderChange}
// 						options={[
// 							{
// 								value: 'male',
// 								label: 'male',
// 							},
// 							{
// 								value: 'female',
// 								label: 'female',
// 							},
// 							{
// 								value: 'other',
// 								label: 'other',
// 							},
// 						]}
// 					/>
// 				</Item>

// 				{/* Buttons */}
// 				<Item {...tailLayout}>
// 					<Space>
// 						<Button type='primary' htmlType='submit'>
// 							Submit
// 						</Button>
// 						<Button htmlType='button' onClick={onReset}>
// 							Reset
// 						</Button>
// 						<Button type='link' htmlType='button' onClick={fillForm}>
// 							Fill form
// 						</Button>
// 					</Space>
// 				</Item>
// 			</Form>
// 		</div>
// 	)
// }

// export default AntdForm02FormMethods

// // ----------------------------------------------------------------------------
// import { Form, Input, Select, Button, Space } from 'antd'

// // Call form method with Form.useForm

// const AntdForm02FormMethods = () => {
// 	const Item = Form.Item

// 	const onFinish = (values) => {
// 		console.log(values)
// 	}

// 	const onFinishFailed = ({ values, errorFields, outOfDate }) => {
// 		console.log('🚀 ~ values:', values)
// 		console.log('🚀 ~ errorFields:', errorFields)
// 		console.log('🚀 ~ outOfDate:', outOfDate)
// 	}

// 	return (
// 		<div
// 			style={{
// 				maxWidth: 600,
// 				margin: '100px auto',
// 				border: '1px solid #ccc',
// 				padding: 20,
// 			}}
// 		>
// 			<Form
// 				name='myForm'
// 				labelCol={{ span: 8 }}
// 				wrapperCol={{ span: 16 }}
// 				onFinish={onFinish}
// 				onFinishFailed={onFinishFailed}
// 			>
// 				<Item
// 					name='note'
// 					label='Note'
// 					rules={[
// 						{
// 							required: true,
// 							message: `'note' is required`,
// 						},
// 					]}
// 				>
// 					<Input />
// 				</Item>

// 				<Item
// 					name='gender'
// 					label='Gender'
// 					rules={[
// 						{
// 							required: true,
// 							message: `'Gender' is required`,
// 						},
// 					]}
// 				>
// 					<Select
// 						placeholder='Select an option and change input text above'
// 						options={[
// 							{
// 								value: 'male',
// 								label: 'male',
// 							},
// 							{
// 								value: 'female',
// 								label: 'female',
// 							},
// 							{
// 								value: 'other',
// 								label: 'other',
// 							},
// 						]}
// 					/>
// 				</Item>

// 				{/* Buttons */}
// 				<Space style={{ marginLeft: 200, width: '100%' }}>
// 					<Item name='submit'>
// 						<Button type='primary' htmlType='submit'>
// 							Submit
// 						</Button>
// 					</Item>
// 					<Item name='reset'>
// 						<Button htmlType='reset'>Reset</Button>
// 					</Item>
// 				</Space>
// 			</Form>
// 		</div>
// 	)
// }

// export default AntdForm02FormMethods
