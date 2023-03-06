import { Form, Input, Button } from 'antd'

// Call form method with Form.useForm

const AntdForm02FormMethods = () => {
	return (
		<div
			style={{
				maxWidth: 600,
				margin: '100px auto',
				padding: 20,
				border: '1px solid orange',
			}}
		>
			<Form name='formMethods' labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
				<Form.Item
					name='note'
					label='Note'
					htmlFor='note'
					rules={[
						{
							required: true,
							message: `'note' is required`,
						},
					]}
				>
					<Input />
				</Form.Item>

				<Form.Item
					name='gender'
					label='Gender'
					labelCol={{ span: 8 }}
					wrapperCol={{ span: 16 }}
					rules={[
						{
							required: true,
							message: `'gender' is required`,
						},
					]}
				></Form.Item>

				<Form.Item name='submit'>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
				<Form.Item name='reset'>
					<Button htmlType='reset'>Reset</Button>
				</Form.Item>
			</Form>
		</div>
	)
}

export default AntdForm02FormMethods
