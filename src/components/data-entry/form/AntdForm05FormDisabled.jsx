// import { LockOutlined, UserOutlined } from '@ant-design/icons'
// import { Button, Checkbox, Form, Input } from 'antd'
// import React from 'react'
// const App = () => {
// 	const onFinish = (values) => {
// 		console.log('Received values of form: ', values)
// 	}
// 	return (
// 		<Form
// 			name='normal_login'
// 			className='login-form'
// 			initialValues={{
// 				remember: true,
// 			}}
// 			onFinish={onFinish}
// 		>
// 			<Form.Item
// 				name='username'
// 				rules={[
// 					{
// 						required: true,
// 						message: 'Please input your Username!',
// 					},
// 				]}
// 			>
// 				<Input
// 					prefix={<UserOutlined className='site-form-item-icon' />}
// 					placeholder='Username'
// 				/>
// 			</Form.Item>
// 			<Form.Item
// 				name='password'
// 				rules={[
// 					{
// 						required: true,
// 						message: 'Please input your Password!',
// 					},
// 				]}
// 			>
// 				<Input
// 					prefix={<LockOutlined className='site-form-item-icon' />}
// 					type='password'
// 					placeholder='Password'
// 				/>
// 			</Form.Item>
// 			<Form.Item>
// 				{/* <Form.Item name='remember' noStyle> */}
// 				<Form.Item name='remember' valuePropName='checked' noStyle>
// 					<Checkbox>Remember me</Checkbox>
// 				</Form.Item>

// 				<a className='login-form-forgot' href=''>
// 					Forgot password
// 				</a>
// 			</Form.Item>

// 			<Form.Item>
// 				<Button type='primary' htmlType='submit' className='login-form-button'>
// 					Log in
// 				</Button>
// 				Or <a href=''>register now!</a>
// 			</Form.Item>
// 		</Form>
// 	)
// }
// export default App

// ----------------------------------------------------------
import {
	Form,
	Checkbox,
	Radio,
	Button,
	Input,
	Select,
	TreeSelect,
	Cascader,
	DatePicker,
	InputNumber,
	Switch,
	Upload,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

const AntdForm05FormDisabled = () => {
	const [isDisabled, setIsDisabled] = useState(false)

	const [form] = Form.useForm()
	const { Item } = Form
	const { RangePicker } = DatePicker
	const { TextArea } = Input

	const onValuesChange = ({ myDisabled }) => {
		setIsDisabled(myDisabled)
	}

	const onFinish = (values) => {
		console.log(values)
	}

	return (
		<>
			<Checkbox
				checked={isDisabled}
				onChange={(e) => setIsDisabled(e.target.checked)}
			>
				Form Disabled
			</Checkbox>
			<Form
				onFinish={onFinish}
				labelCol={{ span: 4 }}
				wrapperCol={{ span: 14 }}
				layout='horizontal'
				onValuesChange={onValuesChange}
				disabled={isDisabled}
			>
				<Item name='myDisabled' label='Checkbox' valuePropName='checked'>
					<Checkbox>Checkbox</Checkbox>
				</Item>
				<Item label='Radio' name='myRadio'>
					<Radio.Group>
						<Radio value='apple'>Apple</Radio>
						<Radio value='pear'>Pear</Radio>
					</Radio.Group>
				</Item>
				<Item label='Input' name='myInput'>
					<Input />
				</Item>
				<Item label='Select' name='mySelect'>
					<Select>
						<Select.Option value='demo'>Demo</Select.Option>
					</Select>
				</Item>
				<Item label='TreeSelect' name='myTreeSelect'>
					<TreeSelect
						treeData={[
							{
								title: 'Light',
								value: 'light',
								children: [
									{
										title: 'Bamboo',
										value: 'bamboo',
									},
								],
							},
						]}
					/>
				</Item>
				<Item label='Cascader' name='myCascader'>
					<Cascader
						options={[
							{
								value: 'vietnam',
								label: 'Vietnam',
								children: [
									{
										value: 'hcm',
										label: 'Ho Chi Minh',
									},
									{
										value: 'danang',
										label: 'Da Nang',
									},
								],
							},
						]}
					/>
				</Item>
				<Item label='DatePicker' name='myDatePicker'>
					<DatePicker />
				</Item>
				<Item label='RangePicker' name='myRangePicker'>
					<RangePicker />
				</Item>
				<Item label='InputNumber' name='myInputNumber'>
					<InputNumber />
				</Item>
				<Item label='TextArea' name='myTextArea'>
					<TextArea rows={4} />
				</Item>
				<Item label='Switch' valuePropName='checked' name='mySwitch'>
					<Switch />
				</Item>
				<Item label='Upload' name='myUpload'>
					<Upload action='upload.do' listType='picture-card'>
						<div>
							<PlusOutlined />
							<div style={{ marginTop: 8 }}>Upload</div>
						</div>
					</Upload>
				</Item>
				<Item label='Button'>
					<Button htmlType='submit'>Submit</Button>
				</Item>
			</Form>
		</>
	)
}

export default AntdForm05FormDisabled
