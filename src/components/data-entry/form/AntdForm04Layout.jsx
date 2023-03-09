import { Form, Input, Button, Radio } from 'antd'
import { useState } from 'react'

const AntdForm04Layout = () => {
	const [formLayout, setFormLayout] = useState('horizontal')

	const formItemLayout =
		formLayout === 'horizontal'
			? {
					labelCol: {
						span: 4,
					},
					wrapperCol: {
						span: 14,
					},
			  }
			: null

	const formButtonLayout =
		formLayout === 'horizontal'
			? {
					wrapperCol: {
						offset: 4,
					},
			  }
			: null

	const onValuesChange = ({ layout }) => {
		setFormLayout(layout)
	}

	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<>
			<Form
				name='form-layout'
				{...formItemLayout}
				initialValues={{ layout: 'horizontal' }}
				onValuesChange={onValuesChange}
				onFinish={onFinish}
				layout={formLayout}
			>
				<Form.Item name='layout' label='Form layout'>
					<Radio.Group>
						<Radio.Button value='horizontal'>Horizontal</Radio.Button>
						<Radio.Button value='vertical'>Vertical</Radio.Button>
						<Radio.Button value='inline'>Inline</Radio.Button>
					</Radio.Group>
				</Form.Item>

				{/* <Form.Item name='fieldA' label='Field A'> */}
				<Form.Item label='Field A'>
					<Input placeholder='input placeholder' />
				</Form.Item>
				{/* <Form.Item name='fieldB' label='Field B'> */}
				<Form.Item label='Field B'>
					<Input placeholder='input placeholder' />
				</Form.Item>

				<Form.Item {...formButtonLayout}>
					<Button type='primary' htmlType='submit'>
						Submit
					</Button>
				</Form.Item>
			</Form>
		</>
	)
}

export default AntdForm04Layout
