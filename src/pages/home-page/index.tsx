import { Inter } from 'next/font/google';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<main className='hidden lg:grid'>
			<Header />

			<div className='container mx-auto w-full h-auto flex'>
				<div className='bg-[#101E28] h-96 w-9/12 p-36 z-0'></div>

				<div>
					<img
						src='/assets/img/pics/balcony.jpg'
						alt='semi-house'
						className='translate-y-20 z-20'
					/>
				</div>
			</div>
		</main>
	);
}
