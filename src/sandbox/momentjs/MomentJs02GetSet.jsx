import moment from 'moment'

const MomentJs02GetSet = () => {
	// *** GET + SET ***
	// console.log('millisecond', moment().millisecond())
	// console.log('second', moment().second())
	// console.log('minute', moment().minute())
	// console.log('hour', moment().hour())

	// console.log('date', moment().date()) // Date of Month -> 9

	// console.log('day', moment().day()) // Day of Week (Sunday as 0 and Saturday as 6.) -> 4 (Thursday)
	// console.log('day', moment().day()) // Day of Week -> 4 (Thursday)
	// console.log('weekday', moment().weekday()) // Day of Week (Locale Aware)
	// console.log('isoWeekday', moment().isoWeekday())
	// console.log('dayOfYear', moment().dayOfYear()) // 68

	// console.log('week', moment().week()) // Week of year 10
	// console.log('isoWeek', moment().isoWeek()) // Week of year (ISO) 10

	// console.log('month', moment().month()) // Months are zero indexed, so January is month 0. -> 2

	// console.log('quarter', moment().quarter()) // 1 to 4 -> 1

	// console.log('year', moment().year()) // 2023
	// console.log('weekYear', moment().weekYear()) // Gets or sets the week-year according to the locale. -> 2023
	// console.log('isoWeekYear', moment().isoWeekYear()) // Gets or sets ISO week-year. -> 2023
	// console.log('weeksInYear', moment().weeksInYear()) // 52
	// console.log('isoWeeksInYear', moment().isoWeeksInYear()) // ISO weeks -> 52

	// // Get
	// console.log('year', moment().get('year')) // 2023
	// console.log('month', moment().get('month')) // 2 (0 to 11)
	// console.log('week', moment().get('week')) // 10
	// console.log('date', moment().get('date')) // 9
	// console.log('day', moment().get('day')) // 4
	// console.log('hour', moment().get('hour')) // 11
	// console.log('minute', moment().get('minute')) // 59
	// console.log('second', moment().get('second')) // 46
	// console.log('millisecond', moment().get('millisecond')) // 684

	// // Set
	// const x = moment().set('year', 3000)
	// console.log('🚀 ~ x:', x)
	// console.log(x.year()) // 3000
	// console.log(x.date()) // 9

	// const y = moment().set({ year: 3000, month: 3 })
	// console.log('🚀 ~ y:', y)

	// // Maximum: Returns the maximum (most distant future) of the given moment instances
	// const a = moment().subtract(1, 'day')
	// const b = moment().add(1, 'day')
	// console.log(moment.max(a, b)) // b

	// Maximum: Example
	const friends = [
		{
			name: 'Dan',
			birthday: '11.12.1977',
		},
		{
			name: 'Mary',
			birthday: '11.12.1986',
		},
		{
			name: 'Stephan',
			birthday: '11.01.1993',
		},
	]
	const birthdays = friends.map((e) => moment(e.birthday, 'DD.MM.YYYY'))
	console.log(moment.max(birthdays))
	console.log(moment.max(birthdays).year()) // 1993

	return <div>MomentJs02GetSet</div>
}

export default MomentJs02GetSet
