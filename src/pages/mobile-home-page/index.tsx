import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Button } from '@/components/button';
import { DoubleArrow } from '../../../public/assets/img/icons/doubleArrow';

const inter = Inter({ subsets: ['latin'] });

export default function MobileHomePage() {
	return (
		<main>
			<Header />

			<MobileHeader />

			<div className='px-3 py-6'>
				<div className='text-4xl font-bold'>Investujte chytře s APSN</div>
			</div>

			<div className='px-3 pb-3 text-lg font-bold'>
				APSN zjednodušuje prodej a pronájem, a nabízí výhodný výkup a prodej
				podílů nemovitostí.
			</div>

			<div className='px-3 py-6'>
				<Button>Sjednat schůzku</Button>
			</div>

			<div className='h-px bg-[#E0E0DF]'></div>

			<div className='text-4xl font-bold py-6 text-center'>Služby</div>

			<div className='px-3 flex flex-col gap-6 pb-6'>
				<div className='flex justify-between bg-[#EB9B6A] p-3'>
					<div className='text-base font-bold'>Správa nemovitostí</div>

					<DoubleArrow />
				</div>

				<div className='flex justify-between bg-[#D9D9D9] p-3'>
					<div className='text-base font-bold'>Finanční správa</div>

					<DoubleArrow />
				</div>

				<div className='flex justify-between bg-black text-white p-3'>
					<div className='text-base font-bold'>Poradenství</div>

					<DoubleArrow className='fill-white' />
				</div>
			</div>

			<div className='h-px bg-[#E0E0DF]'></div>

			<div className='px-3 py-6 flex flex-col gap-3'>
				<img src='/assets/img/pics/villa.jpg' className='w-full' alt='villa' />

				<div className='text-2xl font-medium'>Rodinný dům na předměstí</div>

				<div className='text-2xl font-medium text-[#EB9B6A]'>
					CZK 12.000.000
				</div>

				<div>
					<div className='font-light'>Lokace: Brno, Bystrc 40 000 Kč/měsíc</div>

					<div className='font-light'>
						Velikost: 5+1, 150 m², zahrada 800 m²
					</div>
				</div>

				<div className='pt-3'>
					<Button>Najít více nemovitostí</Button>
				</div>
			</div>

			<div>
				<div className='bg-[#101E28]'></div>
			</div>
		</main>
	);
}
