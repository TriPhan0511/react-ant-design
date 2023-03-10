import { DatePicker, Space } from 'antd'
import moment from 'moment'

const AntdDatePicker05Disabled = () => {
	const { RangePicker } = DatePicker
	const dateFormat = 'YYYY-MM-DD'
	return (
		<Space direction='vertical'>
			<DatePicker defaultValue={moment('2015-12-24', dateFormat)} disabled />
			<DatePicker
				defaultValue={moment('2015-12-24', 'YYYY-MM')}
				picker='month'
				disabled
			/>
			<RangePicker disabled />
			<RangePicker disabled={[false, true]} />
		</Space>
	)
}

export default AntdDatePicker05Disabled
