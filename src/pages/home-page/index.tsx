import { Inter } from 'next/font/google';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<main className='hidden lg:grid'>
			<Header />

			<div></div>
		</main>
	);
}
