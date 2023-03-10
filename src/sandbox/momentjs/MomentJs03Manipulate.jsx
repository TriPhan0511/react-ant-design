import moment from 'moment'

const MomentJs03Manipulate = () => {
	// *** Add ***
	// moment().add(Number, String)
	// moment().add(Duration)
	// moment().add(Object)

	// Mutate the original moment by adding time.
	// To add time, pass the key of what time you want to add,
	// and the amount you want to add.
	// console.log(moment())
	// console.log(moment().add(7, 'days'))

	// Shorthand:
	// console.log(moment().add(1, 'y')) // years
	// console.log(moment().add(1, 'Q')) // quarters
	// console.log(moment().add(1, 'M')) // months
	// console.log(moment().add(1, 'w')) // weeks
	// console.log(moment().add(7, 'd')) // days
	// console.log(moment().add(2, 'h')) // hours
	// console.log(moment().add(20, 'm')) // minutes
	// console.log(moment().add(50, 's')) // seconds
	// console.log(moment().add(300, 'ms')) // milliseconds

	// // If you want to add multiple different keys at the same time,
	// // you can pass them in as an object literal
	// console.log(moment().add(7, 'days').add(1, 'months')) // with chaining
	// console.log(moment().add({ days: 7, months: 1 })) // with object literal

	// // Alternatively, you can use durations to add to moments
	// const duration = moment.duration({ days: 1 })
	// console.log(moment([2012, 0, 31]).add(duration)) // Feb 1
	// ------------------------------------------------------------------------------

	// *** Subtract ***
	// moment().subtract(Number, String)
	// moment().subtract(Duration)
	// moment().subtract(Object)

	// console.log(moment())
	// console.log(moment().subtract(7, 'days'))
	// ------------------------------------------------------------------------------

	// *** Star of Time ***
	// moment().startOf(String)
	// Mutates the original moment by setting it to the start of a unit of time.

	// console.log(moment().startOf('year')) // set to January 1st, 12:00 am this year
	// console.log(moment().startOf('month')) // set to first of this month, 12am
	// console.log(moment().startOf('quarter')) // set to the beginning of the current quarter, 1st day of months, 12am
	// console.log(moment().startOf('week')) // set to the first day of this week, 12am
	// console.log(moment().startOf('isoWeek')) // set to the first day of this week according ro ISO 8601, 12am
	// console.log(moment().startOf('day')) // set to 12 am today
	// console.log(moment().startOf('date')) // set to 12 am to day
	// console.log(moment().startOf('hour')) // set to now, but with 0 mins , 0 seconds, and 0 milliseconds
	// console.log(moment().startOf('minute')) // set to now, but with 0 seconds, and 0 milliseconds
	// console.log(moment().startOf('second')) // same as moment().milliseconds(0)
	// ------------------------------------------------------------------------------

	// *** End of Time ***
	// moment().endOf(String)
	// Mutates the original moment by setting it to the end of a unit of time
	// console.log(moment().endOf('year')) // set the moment to 12-31 23:59:59.999 this year
	// ------------------------------------------------------------------------------

	// *** Local ***

	const a = moment.utc([2011, 0, 1, 8])
	console.log(a.hours()) // 8
	a.local()
	console.log(a.hours()) // 8

	return <div>MomentJs03Manipulate</div>
}

export default MomentJs03Manipulate
