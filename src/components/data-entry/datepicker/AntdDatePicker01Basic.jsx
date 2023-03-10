import { DatePicker, Space } from 'antd'

const AntdDatePicker01Basic = () => {
	const onChange = (date, dateString) => {
		// console.log('🚀 ~ date.month():', date.month())
		// console.log('🚀 ~ date.date():', date.date())
		console.log('🚀 ~ date:', date)
		console.log('🚀 ~ date.week():', date.week())
		console.log('🚀 ~ dateString:', dateString)
	}

	return (
		<Space direction='vertical'>
			<DatePicker onChange={onChange} />
			<DatePicker onChange={onChange} picker='week' />
			<DatePicker onChange={onChange} picker='month' />
			<DatePicker onChange={onChange} picker='quarter' />
			<DatePicker onChange={onChange} picker='year' />
		</Space>
	)
}

export default AntdDatePicker01Basic
