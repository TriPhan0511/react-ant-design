import { DatePicker, Space } from 'antd'

const AntdDatePicker02RangePicker = () => {
	const { RangePicker } = DatePicker

	const onChange = (dates, dateStrings) => {
		console.log('🚀 ~ dates:', dates)
		console.log('🚀 ~ dateStrings:', dateStrings)

		// console.log(dates[0].isBefore(dates[1]) ? 'yes' : 'no')

		// console.log(dates[0].week())
		// console.log(dates[1].week())
		// console.log(dates[0].week() - dates[1].week())

		// console.log(dates[0].month())
		// console.log(dates[1].month())
		// console.log(dates[0].month() - dates[1].month())

		// console.log(dates[0].year())
		// console.log(dates[1].year())
		// console.log(dates[0].year() - dates[1].year())
	}

	return (
		<Space direction='vertical'>
			<RangePicker onChange={onChange} />
			<RangePicker onChange={onChange} showTime />
			<RangePicker onChange={onChange} picker='week' />
			<RangePicker onChange={onChange} picker='month' />
			<RangePicker onChange={onChange} picker='quarter' />
			<RangePicker onChange={onChange} picker='year' />
		</Space>
	)
}

export default AntdDatePicker02RangePicker
