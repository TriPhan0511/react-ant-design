import { Form, Input, Checkbox, Button } from 'antd'

const AntdForm01BasicUsage = () => {
	const onFinish = (values) => {
		console.log('🚀 ~ values:', values)
	}

	const onFinishFailed = (error) => {
		console.log('🚀 ~ error:', error)
	}

	return (
		<div
			style={{
				maxWidth: 650,
				margin: '50px auto',
				padding: 20,
				border: '1px solid orange',
			}}
		>
			<Form
				name='basic'
				initialValues={{ rememberMe: true }}
				labelCol={{ span: 8 }}
				wrapperCol={{ span: 16 }}
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
				autoComplete='off'
			>
				<Form.Item
					name='username'
					label='Username'
					htmlFor='username'
					rules={[
						{
							required: true,
							message: 'Please input your username!',
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='password'
					label='Password'
					htmlFor='password'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Form.Item
					name='rememberMe'
					valuePropName='checked'
					wrapperCol={{ offset: 8, span: 16 }}
				>
					<Checkbox>Remember me</Checkbox>
				</Form.Item>

				<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AntdForm01BasicUsage
