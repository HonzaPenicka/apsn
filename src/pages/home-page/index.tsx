import { Inter } from 'next/font/google';
import { Header } from '@/components/header';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<main className='hidden lg:grid'>
			<Header />

			{/*<div className='container mx-auto w-full h-auto flex'>
				<div className='bg-[#101E28] h-96 w-9/12 p-36 z-0'></div>

				<div>
					<img
						src='/assets/img/pics/balcony.jpg'
						alt='semi-house'
						className='translate-y-20 z-20'
					/>
                </div>
            </div>
            */}

			<div>
				<div className='text-4xl font-bold py-6'>Služby</div>
				<div className='grid grid-cols-3 gap-6 h-44'>
					<div className='bg-[#eb9b6a]'></div>
					<div className='bg-[#E0E0DF]'></div>
					<div className='bg-[#101E28]'></div>
				</div>
			</div>
		</main>
	);
}
