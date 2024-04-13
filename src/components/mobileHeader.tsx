import { FunctionComponent } from 'react';

import { Phone } from '../../public/assets/img/icons/phone';
import { Mail } from '../../public/assets/img/icons/mail';
import { BurgerMenu } from '../../public/assets/img/icons/burger-menu';
import { APSNMobile } from '../../public/assets/img/icons/apsnMobile';
import { Button } from './button';
import { DoubleArrow } from '../../public/assets/img/icons/doubleArrow';

export const MobileHeader: FunctionComponent = () => {
	return (
		<div className='lg:hidden grid'>
			<div className='flex justify-between py-3'>
				<div className='flex gap-3 px-3'>
					<Mail />

					<a href='mailto:info@apsn.cz'>info@apsn.cz</a>
				</div>

				<div className='flex gap-3 px-3'>
					<Phone />

					<a href='tel:+420111222333'>+420 111 222 333</a>
				</div>
			</div>

			<div className='bg-black flex justify-between items-center py-0.5'>
				<APSNMobile className='h-9 items-center justify-center pl-1' />

				<BurgerMenu />
			</div>

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
		</div>
	);
};
