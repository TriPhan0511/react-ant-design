import { DatePicker, Space } from 'antd'
import moment from 'moment'

const AntdDatePicker06DisabledDateAndTime = () => {
	const onChange = (date, dateString) => {
		console.log('🚀 ~ date:', date)
		console.log('🚀 ~ dateString:', dateString)

		console.log('🚀 ~ date.hour():', date.hour())
		console.log('🚀 ~ date.minute():', date.minute())
		console.log('🚀 ~ date.second():', date.second())
	}

	return (
		<Space direction='vertical'>
			<DatePicker
				onChange={onChange}
				format='YYYY-MM-DD HH:mm:ss'
				showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
			/>
		</Space>
	)
}

export default AntdDatePicker06DisabledDateAndTime
