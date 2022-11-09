export const getCookie = (cookieName: string) => {
	const strCookie = document.cookie
	const cookieList = strCookie.split(';')

	for (let i = 0; i < cookieList.length; i++) {
		const arr = cookieList[i].split('=')
		if (cookieName === arr[0]) {
			return arr[1]
		}
	}

	return ''
}