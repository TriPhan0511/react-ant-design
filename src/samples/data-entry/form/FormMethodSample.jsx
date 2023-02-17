import { Form, Input, Button, Select } from 'antd'

const formStyle = {
	maxWidth: '600px',
	border: '1px solid #ccc',
	margin: 'auto',
	marginTop: '50px',
	padding: '20px',
}

const { Option } = Select

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
}

const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
}

const FormMethodSample = () => {
	const [form] = Form.useForm()

	const onGenderChange = (value) => {
		switch (value) {
			case 'male':
				form.setFieldsValue({
					note: 'Hi, man!',
				})
				break
			case 'female':
				form.setFieldsValue({
					note: 'Hi, lady!',
				})
				break
			case 'other':
				form.setFieldsValue({
					note: 'Hi there!',
				})
				break
			default:
				break
		}
	}

	const onFinish = (values) => {
		console.log('🚀 ~ values', values)
	}

	return (
		<Form
			{...layout}
			form={form}
			name='control-hooks'
			style={formStyle}
			onFinish={onFinish}
		>
			<Form.Item name='note' label='Note' rules={[{ required: true }]}>
				<Input />
			</Form.Item>
			<Form.Item name='gender' label='Gender' rules={[{ required: true }]}>
				<Select
					placeholder='Select an option and change input text above'
					onChange={onGenderChange}
					allowClear
				>
					<Option value='male'>male</Option>
					<Option value='female'>female</Option>
					<Option value='other'>other</Option>
				</Select>
			</Form.Item>
			<Form.Item noStyle ></Form.Item>
		</Form>
	)
}

export default FormMethodSample

// ----------------------------------------------------------------------
// import { Form, Input, Button, Select, Row, Col } from 'antd'

// const FormMethodSample = () => {
// 	const formStyle = {
// 		maxWidth: '600px',
// 		border: '1px solid #ccc',
// 		margin: 'auto',
// 		marginTop: '50px',
// 		padding: '20px',
// 	}

// 	return (
// 		<Form
// 			name='basic'
// 			style={formStyle}
// 			labelCol={{
// 				span: 6,
// 			}}
// 			wrapperCol={{
// 				span: 18,
// 			}}
// 		>
// 			<Form.Item
// 				name='note'
// 				label='Note'
// 				rules={[
// 					{
// 						required: true,
// 					},
// 				]}
// 			>
// 				<Input />
// 			</Form.Item>
// 			<Form.Item
// 				name='gender'
// 				label='Gender'
// 				rules={[
// 					{
// 						required: true,
// 						message: '',
// 					},
// 				]}
// 			>
// 				<Select
// 					placeholder='Select a option and change input text above'
// 					options={[
// 						{
// 							value: 'male',
// 							label: 'male',
// 						},
// 						{
// 							value: 'female',
// 							label: 'female',
// 						},
// 						{
// 							value: 'other',
// 							label: 'other',
// 						},
// 					]}
// 				/>
// 			</Form.Item>
// 			<Row>
// 				<Col offset={6}>
// 					<Form.Item>
// 						<Button type='primary' htmlType='submit'>
// 							Submit
// 						</Button>
// 					</Form.Item>
// 				</Col>
// 				<Col style={{ marginLeft: '10px' }}>
// 					<Form.Item>
// 						<Button htmlType='reset'>Reset</Button>
// 					</Form.Item>
// 				</Col>
// 				<Col>
// 					<Form.Item>
// 						<Button type='link'>Fill form</Button>
// 					</Form.Item>
// 				</Col>
// 			</Row>
// 		</Form>
// 	)
// }

// export default FormMethodSample
