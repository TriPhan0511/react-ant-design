import moment from 'moment'

const MomentJs01Parse = () => {
	// // *** Now
	// // To get current date and time, just call moment() with no parameters
	// const now = moment()
	// console.log('🚀 ~ now.date():', now.date()) // 9
	// console.log('🚀 ~ now.month():', now.month()) // 2
	// console.log('🚀 ~ now.year():', now.year()) // 2023

	// // *** String
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

	// // *** String + Format
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

	// *** Object
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

	// *** Unix Timestamp (milliseconds)
	// moment(Number)

	// const d = moment(1318781876406)
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 23:17:56 GMT+0700 (Indochina Time)
	// console.log('🚀 ~ d.year():', d.year()) // 2011

	// *** Unix Timestamp (seconds)
	// moment.unix(Number)

	// const d = moment.unix(1318781876)
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 23:17:56 GMT+0700 (Indochina Time)

	// *** Date (Javascript Date object)
	// moment(Date)
	// You can create a Moment with a pre-existing native Javascript Date object

	// const d = moment(new Date(2011, 9, 16))
	// console.log('🚀 ~ d:', d) // Sun Oct 16 2011 00:00:00 GMT+0700 (Indochina Time)

	// *** Array
	// moment(Number[])
	// You can create a moment with an array of numbers that
	// mirror the parameters passed to new Date()
	// moment([year, month, day, hour, minute, second, millisecond])
	// console.log(moment([2010, 1, 14, 15, 25, 50, 125])) // Sun Feb 14 2010 15:25:50 GMT+0700 (Indochina Time)

	// // Any value past the year is optional, and will default to the lowest possible number
	// console.log(moment([2010])) // Jan 1st
	// console.log(moment([2010, 6])) // Jul 1st
	// console.log(moment([2010, 6, 10])) // July 10th

	// Construction with an array will create a date in the current time zone.
	// To create a date from an array at UTC, use moment.utc(Number[])
	// console.log(moment.utc([2010, 1, 14, 15, 25, 50, 125]))

	// *** Moment Clone
	// All moments are mutable. If you want a clone of a moment,
	// you can do so implicitly or explicitly

	// // 1. Calling moment() on a moment will clone it
	// const a = moment([2012])
	// const b = moment(a)
	// a.year(2000)
	// console.log(a.year()) // 2000
	// console.log(b.year()) // 2012

	// // 2. Additionally, you can call moment#clone to clone a moment
	// const a = moment([2012])
	// const b = a.clone(a)
	// a.year(2000)
	// console.log(a.year()) // 2000
	// console.log(b.year()) // 2012

	// // *** Create Data
	// const d = moment('1984-11-05', 'YYYY-MM-DD').creationData()
	// console.log('🚀 ~ d:', d)
	// console.log('🚀 ~ d.input:', d.input)

	// *** Defaults
	// You can create a moment object specifying only some of the units,
	// and the rest will be defaulted to the current day, month or year,
	// or 0 for hours, minutes, seconds and milliseconds.

	// // Defaulting to now, when nothing is passed
	// const now = moment() // current date and time
	// console.log('🚀 ~ now:', now)
	// console.log('🚀 ~ now.hour():', now.hour())

	// Defaulting to today, when only hours, minutes, seconds and milliseconds are passed:
	// const d = moment(5, 'HH') // today 5:00:00.000
	// const d = moment({ hour: 5 }) // today 5:00:00.000
	// const d = moment({ hour: 5, minute: 15 }) // today, 5:15:00.000
	// const d = moment({ hour: 5, minute: 10, second: 20 }) // today, 5:10:20.000
	// const d = moment({ hour: 5, minute: 10, second: 20, millisecond: 300 }) // today, 5:10:20.300
	// console.log('🚀 ~ d:', d)

	// Defaulting to this month and year, when only days and smaller units are passed:
	// const d = moment(5, 'DD') // this month, 5th day-of-month
	// const d = moment('4 05:06:07', 'DD hh:mm:ss') // this month, 4th day-of-month, 05:06:07.000
	// console.log('🚀 ~ d:', d)

	// Defaulting to this year, if year is not specified:
	// const d = moment(3, 'MM') // this year, 3rd month (March)
	const d = moment('Apr 4 05:06:07', 'MMM DD hh:mm:ss')
	console.log('🚀 ~ d:', d) // this year, 4th April, 05:06:07

	return <div>MomentJs01Parse</div>
}

export default MomentJs01Parse
