export const alphabeticalSort = (str1, str2) => {
	const str1UpperCase = str1.toUpperCase() // ignore upper and lowercase
	const str2UpperCase = str2.toUpperCase() // ignore upper and lowercase
	return str1UpperCase < str2UpperCase
		? -1
		: str1UpperCase > str2UpperCase
		? 1
		: 0
}
