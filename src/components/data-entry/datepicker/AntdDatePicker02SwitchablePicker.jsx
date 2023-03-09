import { DatePicker, TimePicker, Space, Select } from 'antd'
import { useState } from 'react'

const AntdDatePicker02SwitchablePicker = () => {
	const [type, setType] = useState('time')

	const options = [
		{
			value: 'time',
			label: 'Time',
		},
		{
			value: 'date',
			label: 'Date',
		},
		{
			value: 'week',
			label: 'Week',
		},
		{
			value: 'month',
			label: 'Month',
		},
		{
			value: 'quarter',
			label: 'Quarter',
		},
		{
			value: 'year',
			label: 'Year',
		},
	]

	const onChange = (value, str) => {
		console.log('🚀 ~ value:', value)
		console.log('🚀 ~ str:', str)
	}

	return (
		<Space>
			<Select
				style={{ width: 100 }}
				options={options}
				value={type}
				onChange={(value) => setType(value)}
			/>
			{type === 'time' ? (
				<TimePicker onChange={onChange} />
			) : (
				<DatePicker picker={type} onChange={onChange} />
			)}
		</Space>
	)
}

export default AntdDatePicker02SwitchablePicker
