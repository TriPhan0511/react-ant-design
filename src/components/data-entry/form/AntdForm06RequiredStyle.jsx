import { Form, Radio } from 'antd'

const AntdForm06RequiredStyle = () => {
	return (
		<>
			<Radio.Group
				options={[
					{
						label: 'Optional',
						value: 'optional',
					},
					{
						label: 'Required',
						value: 'required',
					},
					{
						label: 'Hidden',
						value: 'hidden',
					},
				]}
				optionType='button'
				value='optional'
			/>
		</>
	)
}

export default AntdForm06RequiredStyle
