import { DatePicker, Space } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker

// const dateFormat = 'YYYY/MM/DD'
const dateFormat = 'YYYY-MM-DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
const customFormat = (value) => `custom format: ${value.format(dateFormat)}`
const customWeekStartEndFormat = (value) =>
	`${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
		.endOf('week')
		.format(weekFormat)}`

const AntdDatePicker04DateFormat = () => {
	const onChange = (date, dateString) => {
		console.log('🚀 ~ date:', date)
		console.log('🚀 ~ dateStrings:', dateString)
	}

	return (
		<Space direction='vertical' size={12}>
			<DatePicker
				defaultValue={moment('2015/01/01', dateFormat)}
				format={dateFormat}
				onChange={onChange}
			/>
			<DatePicker
				defaultValue={moment('01/01/2015', dateFormatList[0])}
				format={dateFormatList}
				onChange={onChange}
			/>
			<DatePicker
				defaultValue={moment('2015/01', monthFormat)}
				format={monthFormat}
				picker='month'
				onChange={onChange}
			/>
			<DatePicker
				defaultValue={moment('01/01', weekFormat)}
				format={weekFormat}
				picker='week'
				onChange={onChange}
			/>
			<DatePicker
				defaultValue={moment('2015/01/01', dateFormat)}
				format={customFormat}
				onChange={onChange}
			/>
			<RangePicker onChange={onChange} />
		</Space>
	)
}

export default AntdDatePicker04DateFormat
