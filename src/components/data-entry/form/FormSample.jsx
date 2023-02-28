import { Form, Input, Checkbox, Button } from 'antd'

const FormSample = () => {
	const formStyle = {
		maxWidth: '600px',
		border: '1px solid #ccc',
		padding: '20px 10px',
		margin: 'auto',
		marginTop: '50px',
	}

	const onFinish = (values) => {
		const { username, password, remember } = values
		console.log('🚀 ~ username', username)
		console.log('🚀 ~ password', password)
		console.log('🚀 ~ remember', remember)
	}

	const onFinishFailed = (errorInfo) => {
		console.log('🚀 ~ errorInfo', errorInfo)
	}

	return (
		<Form
			name='basic'
			style={formStyle}
			labelCol={{
				span: 4,
			}}
			wrapperCol={{
				offset: 1,
				span: 19,
			}}
			initialValues={{
				remember: true,
			}}
			autoComplete='off'
			onFinish={onFinish}
			onFinishFailed={onFinishFailed}
		>
			<Form.Item
				name='username'
				label='Username'
				rules={[
					{
						required: true,
						message: 'Please input username!',
					},
				]}
			>
				<Input placeholder='Jane Doe' />
			</Form.Item>
			<Form.Item
				name='password'
				label='Password'
				rules={[
					{
						required: true,
						message: 'Please input password!',
					},
				]}
			>
				<Input.Password placeholder='Password' />
			</Form.Item>
			<Form.Item
				name='remember'
				valuePropName='checked'
				wrapperCol={{ offset: 5 }}
			>
				<Checkbox>Remember me</Checkbox>
			</Form.Item>
			<Form.Item wrapperCol={{ offset: 5 }}>
				<Button type='primary' htmlType='submit'>
					Submit
				</Button>
			</Form.Item>
		</Form>
	)
}

export default FormSample
