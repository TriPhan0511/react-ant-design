import { DatePicker, Space } from 'antd'
import moment from 'moment'

const { RangePicker } = DatePicker
const dateFormat = 'YYYY/MM/DD'
const weekFormat = 'MM/DD'
const monthFormat = 'YYYY/MM'
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']

const customFormat = (value) => `custom format: ${value.format(dateFormat)}`

const customWeekStartEndFormat = (value) =>
	`${moment(value).startOf('week').format(weekFormat)} ~ ${moment(value)
		.endOf('week')
		.format(weekFormat)}`

const AntdDatePicker03DateFormat = () => {
	return (
		<Space direction='vertical' size={12}>
			<DatePicker
				defaultValue={moment('2015/01/01', dateFormat)}
				format={dateFormat}
			/>
		</Space>
	)
}

export default AntdDatePicker03DateFormat
