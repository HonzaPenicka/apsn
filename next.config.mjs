/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	/*async rewrites() {
		return [
			{
				source: '/:path*',
				destination: '/maintenance.html',
			},
		];
	},*/
};

export default nextConfig;
