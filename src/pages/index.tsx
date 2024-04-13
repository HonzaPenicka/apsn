import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<main>
			<div></div>
			<Header />
			<MobileHeader />
			<div>
				<div className='bg-[#101E28]'></div>
			</div>
		</main>
	);
}
