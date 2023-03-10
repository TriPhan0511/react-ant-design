import moment from 'moment'

const MomentJs04Display = () => {
	// *** Format ***
	// moment().format()
	// moment().format(String) // It takes a string of tokens and replace them with their corresponding values.

	// console.log(moment().format()) // "2023-03-10T11:33:21+07:00" (ISO 8601, no fraction seconds)
	// console.log(moment().format('dddd, MMMM Do YYYY, h:mm:ss a')) // "Friday, March 10th 2023, 11:40:59 am"
	// console.log(moment().format('ddd, hA')) // "Fri, 11AM"
	// console.log(moment().format('[Today is] dddd')) // "Today is Friday"
	// console.log(moment('gibberish').format('YYYY MM DD')) // "Invalid date"

	// console.log(moment().format('LT'))
	// console.log(moment().format('L'))
	// console.log(moment().format('l'))
	// ---------------------------------------------------------------------------------

	// *** Time from now ***
	// moment().fromNow()
	// moment().fromNow(Boolean)

	console.log(moment([1984, 5, 11]).fromNow()) // 39 years ago
	console.log(moment([1984, 5, 11]).fromNow(true)) // 39 years (without the suffix)

	return <div>MomentJs04Display</div>
}

export default MomentJs04Display
