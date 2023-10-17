module.exports = {
	poweredByHeader: false, // Не будет видно, что сайт сделать на Next.js
	optimizeFonts: false,
	env: {
		APP_URL: process.env.REACT_APP_URL,
		APP_ENV: process.env.REACT_APP_ENV,
		APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
	},
	images: {
		domains: ['res.cloudinary.com'],
		unoptimized: true,
	},
	async rewrites() {
		return [
			{
				source: '/api/:path*',
				destination: process.env.REACT_APP_SERVER_URL + '/api/:path*',
			},
			{
				source: '/public/uploads/:path*',
				destination:
					process.env.REACT_APP_SERVER_URL + '/public/uploads/:path*',
			},
		]
	},
	async headers() {
		return [
			{
				// matching all API routes
				source: '/api/:path*',
				headers: [
					{ key: 'Access-Control-Allow-Credentials', value: 'true' },
					{ key: 'Access-Control-Allow-Origin', value: '*' },
					{
						key: 'Access-Control-Allow-Methods',
						value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
					},
					{
						key: 'Access-Control-Allow-Headers',
						value:
							'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
					},
				],
			},
		]
	},
}
