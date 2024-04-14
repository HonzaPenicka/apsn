import { Inter } from 'next/font/google';
import MobileHomePage from './mobile-home-page';
import HomePage from './home-page';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main className='container mx-auto'>
			<MobileHomePage />
			<HomePage />
		</main>
	);
}
