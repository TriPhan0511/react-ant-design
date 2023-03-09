import moment from 'moment'

const MomentJsBasic = () => {
	// *** PARSE ***

	// // Now
	// // To get current date and time, just call moment() with no parameters
	// const now = moment()
	// console.log('🚀 ~ now.date():', now.date()) // 9
	// console.log('🚀 ~ now.month():', now.month()) // 2
	// console.log('🚀 ~ now.year():', now.year()) // 2023

	// // String
	// const day = moment('1995-12-25')

	// console.log('🚀 ~ day.year():', day.year()) // 1995
	// console.log('🚀 ~ day.month():', day.month()) // 11
	// console.log('🚀 ~ day.date():', day.date()) // 25

	// const months = new Map()
	// months.set(0, 'January')
	// months.set(1, 'February')
	// months.set(2, 'March')
	// months.set(3, 'April')
	// months.set(4, 'May')
	// months.set(5, 'June')
	// months.set(6, 'July')
	// months.set(7, 'August')
	// months.set(8, 'September')
	// months.set(9, 'October')
	// months.set(10, 'November')
	// months.set(11, 'December')
	// console.log('🚀 ~ Month:', months.get(day.month())) // December

	// // String + Format
	// // moment(String, String)
	// // moment(String, String, String)
	// // moment(String, String, String[])
	// // moment(String, String, Boolean)
	// // moment(String, String, String, Boolean)

	// // If you know the format of an input string, you can use that to parse a moment
	// // const d = moment('11-05-1984', 'MM-DD-YYYY')
	// const d = moment('11-05-1984', 'MM/DD/YYYY')
	// // const d = moment('11/05/1984', 'MM-DD-YYYY')
	// // const d = moment('11.05.84', 'MM-DD-YYYY')
	// // const d = moment('11051984', 'MM-DD-YYYY')
	// // const d = moment('110584', 'MM-DD-YYYY')
	// console.log('🚀 ~ d.year():', d.year()) // 1984
	// console.log('🚀 ~ d.month():', d.month()) // 10
	// console.log('🚀 ~ d.date():', d.date()) // 5

	// Object
	// moment({unit: value, ...})

	// const d = moment({ y: 2010, M: 3, d: 5, h: 15, m: 10, s: 3, ms: 123 })
	// console.log('🚀 ~ d.year():', d.year()) // 2010
	// console.log('🚀 ~ d.month():', d.month()) // 3
	// console.log('🚀 ~ d.date():', d.date()) // 5
	// console.log('🚀 ~ d.hour():', d.hour()) // 15
	// console.log('🚀 ~ d.minute():', d.minute()) // 10
	// console.log('🚀 ~ d.second():', d.second()) // 3
	// console.log('🚀 ~ d.millisecond():', d.millisecond()) // 123

	// const d = moment({
	// 	year: 2010,
	// 	month: 3,
	// 	day: 5,
	// 	hour: 15,
	// 	minute: 10,
	// 	second: 3,
	// 	millisecond: 123,
	// })
	// console.log('🚀 ~ d.year():', d.year()) // 2010
	// console.log('🚀 ~ d.month():', d.month()) // 3
	// console.log('🚀 ~ d.date():', d.date()) // 5
	// console.log('🚀 ~ d.hour():', d.hour()) // 15
	// console.log('🚀 ~ d.minute():', d.minute()) // 10
	// console.log('🚀 ~ d.second():', d.second()) // 3
	// console.log('🚀 ~ d.millisecond():', d.millisecond()) // 123

	// const d = moment({
	// 	year: '2010',
	// 	month: '3',
	// 	day: '5',
	// 	hour: '15',
	// 	minute: '10',
	// 	second: '3',
	// 	millisecond: '123',
	// })
	// console.log('🚀 ~ d.year():', d.year()) // 2010
	// console.log('🚀 ~ d.month():', d.month()) // 3
	// console.log('🚀 ~ d.date():', d.date()) // 5
	// console.log('🚀 ~ d.hour():', d.hour()) // 15
	// console.log('🚀 ~ d.minute():', d.minute()) // 10
	// console.log('🚀 ~ d.second():', d.second()) // 3
	// console.log('🚀 ~ d.millisecond():', d.millisecond()) // 123

	// Unix Timestamp (milliseconds)
	// moment(Number)

	// const d = moment(1318781876406)
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 23:17:56 GMT+0700 (Indochina Time)
	// console.log('🚀 ~ d.year():', d.year()) // 2011

	// Unix Timestamp (seconds)
	// moment.unix(Number)

	// const d = moment.unix(1318781876)
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 23:17:56 GMT+0700 (Indochina Time)

	// Date
	// moment(Date)
	// You can create a Moment with a pre-existing native Javascript Date object

	// const d = moment(new Date(2011, 9, 16))
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 00:00:00 GMT+0700 (Indochina Time)

	// Array
	// moment(Number[])
	// You can create a moment with an array of numbers that
	// mirror the parameters passed to new Date()
	// moment([year, month, day, hour, minute, second, millisecond])

	// -------------------------------------------------------------------------------------
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

	// // Maximum: Example
	// const friends = [
	// 	{
	// 		name: 'Dan',
	// 		birthday: '11.12.1977',
	// 	},
	// 	{
	// 		name: 'Mary',
	// 		birthday: '11.12.1986',
	// 	},
	// 	{
	// 		name: 'Stephan',
	// 		birthday: '11.01.1993',
	// 	},
	// ]

	// const birthdays = friends.map((e) => moment(e.birthday, 'DD.MM.YYYY'))
	// console.log(moment.max(birthdays))
	// console.log(moment.max(birthdays).year()) // 1993

	return <></>
}

export default MomentJsBasic
