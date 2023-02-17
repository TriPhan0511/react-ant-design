import { Form, Button, Input, Checkbox, Row, Col } from 'antd'

const wrapperStyle = {
	maxWidth: '600px',
	border: '1px solid #ccc',
	margin: ' 50px auto 0',
	padding: '25px 35px',
}

const onFinish = (values) => {
	const { username, password, remember, rememberUs } = values
	console.log('🚀 ~ username', username)
	console.log('🚀 ~ password', password)
	console.log('🚀 ~ remember', remember)
	console.log('🚀 ~ rememberUs', rememberUs)
  
}

const onFinishFailed = (errorInfo) => {
	console.log('🚀 ~ Fail:', errorInfo)
}

const InputSample = () => {
	return (
		<div style={wrapperStyle}>
			<Form
				name='basic'
				labelCol={{
					span: 8,
				}}
				wrapperCol={{
					span: 16,
				}}
				style={{
					maxWidth: 600,
				}}
				initialValues={{
					remember: true,
					rememberUs: true,
				}}
				autoComplete='off'
				onFinish={onFinish}
				onFinishFailed={onFinishFailed}
			>
				<Form.Item
					label='Username'
					name='username'
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
					label='Password'
					name='password'
					rules={[
						{
							required: true,
							message: 'Please input your password!',
						},
					]}
				>
					<Input.Password />
				</Form.Item>

				<Row>
					<Col span={8} offset={8}>
						<Form.Item name='remember' valuePropName='checked'>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>
					</Col>
					<Col span={8}>
						<Form.Item name='rememberUs' valuePropName='checked'>
							<Checkbox>Remember us</Checkbox>
						</Form.Item>
					</Col>
				</Row>

				<Form.Item
					wrapperCol={{
						offset: 8,
						span: 16,
					}}
				>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default InputSample

// -----------------------------------------------------------------------------------
// import { Form, Button, Input, Checkbox } from 'antd'

// const wrapperStyle = {
// 	maxWidth: '600px',
// 	border: '1px solid #ccc',
// 	margin: ' 50px auto 0',
// 	padding: '25px 35px',
// }

// const onFinish = (values) => {
// 	const { username, password, remember } = values
// 	console.log('🚀 ~ username', username)
// 	console.log('🚀 ~ password', password)
// 	console.log('🚀 ~ remember', remember)
// }

// const onFinishFailed = (errorInfo) => {
// 	console.log('🚀 ~ Fail:', errorInfo)
// }

// const InputSample = () => {
// 	return (
// 		<div style={wrapperStyle}>
// 			<Form
// 				name='basic'
// 				labelCol={{
// 					span: 8,
// 				}}
// 				wrapperCol={{
// 					span: 16,
// 				}}
// 				style={{
// 					maxWidth: 600,
// 				}}
// 				initialValues={{
// 					// remember: false ,
// 					remember: true,
// 				}}
// 				autoComplete='off'
// 				onFinish={onFinish}
// 				onFinishFailed={onFinishFailed}
// 			>
// 				<Form.Item
// 					label='Username'
// 					name='username'
// 					rules={[
// 						{
// 							required: true,
// 							message: 'Please input your username!',
// 						},
// 					]}
// 				>
// 					<Input />
// 				</Form.Item>

// 				<Form.Item
// 					label='Password'
// 					name='password'
// 					rules={[
// 						{
// 							required: true,
// 							message: 'Please input your password!',
// 						},
// 					]}
// 				>
// 					<Input.Password />
// 				</Form.Item>

// 				<Form.Item
// 					name='remember'
// 					valuePropName='checked'
// 					wrapperCol={{
// 						offset: 8,
// 						span: 16,
// 					}}
// 				>
// 					<Checkbox>Remember me</Checkbox>
// 				</Form.Item>

// 				<Form.Item
// 					wrapperCol={{
// 						offset: 8,
// 						span: 16,
// 					}}
// 				>
// 					<Button type='primary' htmlType='submit'>
// 						Submit
// 					</Button>
// 				</Form.Item>
// 			</Form>
// 		</div>
// 	)
// }

// export default InputSample

// // -----------------------------------------------------------------------------------
// import { Button, Input } from 'antd'
// import { useState } from 'react'

// const wrapperStyle = {
// 	maxWidth: '25vw',
// 	border: '1px solid #ccc',
// 	margin: 'auto',
// 	padding: '25px 35px',
// }

// const InputSample = () => {
// 	const [value, setValue] = useState('')

// 	const handleSubmit = (e) => {
// 		e.preventDefault()
// 		console.log(value)
// 	}

// 	return (
// 		<div style={wrapperStyle}>
// 			<form onSubmit={handleSubmit}>
// 				<div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
// 					<label htmlFor='name'>Name</label>
// 					<Input
// 						placeholder='Basic Usage'
// 						id='name'
// 						value={value}
// 						onChange={(e) => setValue(e.target.value)}
// 					/>
// 				</div>
// 				<Button type='primary' htmlType='submit'>
// 					Submit
// 				</Button>
// 			</form>
// 		</div>
// 	)
// }

// export default InputSample
// // -----------------------------------------------------------------------------------
