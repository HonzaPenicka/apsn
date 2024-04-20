import { Inter } from 'next/font/google';
import MobileHomePage from './mobile-home-page';
import HomePage from './home-page';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<MobileHomePage />

			<HomePage />

			<SpeedInsights />
		</main>
	);
}
