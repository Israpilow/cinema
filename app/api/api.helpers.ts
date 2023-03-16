export const getContentType = () => ({
	'Content-Type': 'application/json',
})

export const errorCatch = (error: any): string =>
	error.response && error.response.data
		? typeof error.response.data.message === 'object'
			? error.response.data.response[0]
			: error.response.data.message
		: error.message
