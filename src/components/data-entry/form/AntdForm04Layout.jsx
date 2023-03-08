import { Form, Input, Button, Radio, Space } from 'antd'
import { useState } from 'react'

const AntdForm04Layout = () => {
	const [layout, setLayout] = useState('horizontal')
	const [form] = Form.useForm()

	const Item = Form.Item

	const formItemLayout =
		layout === 'horizontal'
			? {
					labelCol: {
						span: 4,
					},
					wrapperCol: {
						span: 14,
					},
			  }
			: null

	const buttonItemLayout =
		layout === 'horizontal'
			? {
					wrapperCol: {
						offset: 4,
						span: 14,
					},
			  }
			: null

	const onValuesChange = ({ radios }) => {
		setLayout(radios)
	}

	return (
		<div
			style={{
				maxWidth: 1200,
				margin: '100px auto',
				padding: 20,
				border: '1px solid #ccc',
			}}
		>
			<Form
				{...formItemLayout}
				layout={layout}
				form={form}
				initialValues={{ radios: layout }}
				onValuesChange={onValuesChange}
			>
				<Item name='radios' label='Form layout'>
					<Radio.Group value={layout}>
						<Radio.Button value='horizontal'>Horizontal</Radio.Button>
						<Radio.Button value='vertical'>Vertical</Radio.Button>
						<Radio.Button value='inline'>Inline</Radio.Button>
					</Radio.Group>
				</Item>

				<Item name='fieldA' label='Field A'>
					<Input placeholder='input placeholder' />
				</Item>
				<Item label='Field B'>
					<Input placeholder='input placeholder' />
				</Item>

				<Item name='submitButton' {...buttonItemLayout}>
					<Button type='primary'>Submit</Button>
				</Item>
			</Form>
		</div>
	)
}

export default AntdForm04Layout

// // ----------------------------------------------------------------------
// import { Form, Input, Button, Radio, Space } from 'antd'
// import { useState } from 'react'

// const AntdForm04Layout = () => {
// 	const [form] = Form.useForm()
// 	const [formLayout, setFormLayout] = useState('horizontal')
// 	// const [formLayout, setFormLayout] = useState('vertical')
// 	// const [formLayout, setFormLayout] = useState('inline')

// 	const formItemLayout =
// 		formLayout === 'horizontal'
// 			? {
// 					labelCol: {
// 						span: 4,
// 					},
// 					wrapperCol: {
// 						span: 14,
// 					},
// 			  }
// 			: null

// 	const buttonItemLayout =
// 		formLayout === 'horizontal'
// 			? {
// 					wrapperCol: {
// 						offset: 4,
// 						span: 14,
// 					},
// 			  }
// 			: null

// 	const onFormLayoutChange = ({ layout }) => {
// 		setFormLayout(layout)
// 	}

// 	return (
// 		<div
// 			style={{
// 				maxWidth: 1200,
// 				margin: '100px auto',
// 				padding: 20,
// 				border: '1px solid #ccc',
// 			}}
// 		>
// 			<Form
// 				{...formItemLayout}
// 				layout={formLayout}
// 				form={form}
// 				initialValues={{
// 					layout: formLayout,
// 				}}
// 				onValuesChange={onFormLayoutChange}
// 			>
// 				<Form.Item name='layout' label='Form layout'>
// 					<Radio.Group value={formLayout}>
// 						<Radio.Button value='horizontal'>Horizontal</Radio.Button>
// 						<Radio.Button value='vertical'>Vertical</Radio.Button>
// 						<Radio.Button value='inline'>Inline</Radio.Button>
// 					</Radio.Group>
// 				</Form.Item>

// 				<Form.Item label='Field A'>
// 					<Input placeholder='input placeholder' />
// 				</Form.Item>
// 				<Form.Item label='Field B'>
// 					<Input placeholder='input placeholder' />
// 				</Form.Item>

// 				<Form.Item {...buttonItemLayout}>
// 					<Button type='primary'>Submit</Button>
// 				</Form.Item>
// 			</Form>
// 		</div>
// 	)
// }

// export default AntdForm04Layout
