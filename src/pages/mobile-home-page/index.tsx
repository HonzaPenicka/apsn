import { Inter } from 'next/font/google';
import { MobileHeader } from '@/components/mobileHeader';
import { Button } from '@/components/button';
import { DoubleArrow } from '../../../public/assets/img/icons/double-arrow-black';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { Footer } from '@/components/footer';
import { DoubleArrowWhite } from '../../../public/assets/img/icons/double-arrow-white';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function MobileHomePage() {
	const footerRef = useRef<HTMLDivElement>(null!);

	const handleButtonClick = () => {
		if (footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<>
			<MobileHeader />

			<main className='lg:hidden'>
				<div className='container mx-auto px-3 pt-28'>
					<div className='py-6'>
						<div className='text-4xl font-bold'>Investujte chytře s APSN</div>
					</div>

					<div className='pb-3 text-lg font-bold'>
						APSN zjednodušuje prodej a pronájem, a nabízí výhodný výkup a prodej
						podílů nemovitostí.
					</div>

					<div className='py-6'>
						<Button onClick={handleButtonClick}>Sjednat schůzku</Button>
					</div>

					<div className='h-px bg-[#E0E0DF]'></div>

					<div className='text-4xl font-bold py-6 text-left'>Služby</div>

					<div className=' flex flex-col gap-6 pb-6'>
						<div className='flex justify-between bg-[#EB9B6A] p-3 rounded-lg'>
							<div className='text-base font-bold'>Správa nemovitostí</div>

							<DoubleArrow />
						</div>

						<div className='flex justify-between bg-[#D9D9D9] p-3 rounded-lg'>
							<div className='text-base font-bold'>Finanční správa</div>

							<DoubleArrow />
						</div>

						<div className='flex justify-between bg-[#101E28] text-white p-3 rounded-lg'>
							<div className='text-base font-bold'>Poradenství</div>

							<DoubleArrowWhite />
						</div>
					</div>

					<div className=' bg-gradient-to-b from-white to-gray-100 pb-6'>
						<div className='pb-6'>
							<div className='bg-[#E0E0DF] h-px'></div>
						</div>

						<div className='pb-3'>
							<CrystalLogo />
						</div>

						<div className='pb-6 text-base'>
							<div>
								S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
								vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
								porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
								agentury.
							</div>
						</div>
						<div className='flex gap-6'>
							<img
								src='/assets/img/pics/jirka.jpg'
								alt='jednatel'
								className='rounded-full'
							/>

							<div className='gap-1 flex flex-col'>
								<div className='font-bold'>Jan Krupička</div>

								<div>jednatel</div>

								<a href='mailto:krupicka.jiri@aspn.cz'>
									<Button>Sjednat schůzku</Button>
								</a>
							</div>
						</div>
					</div>

					<div className=' bg-gradient-to-b from-white to-gray-100 pb-6'>
						<div className='pb-3 pt-6'>
							<CrystalLogo />
						</div>

						<div className='pb-6 text-base'>
							<div>
								S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
								vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
								porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
								agentury.
							</div>
						</div>
						<div className='flex gap-6'>
							<img
								src='/assets/img/pics/jirka.jpg'
								alt='jednatel'
								className='rounded-full'
							/>

							<div className='gap-1 flex flex-col'>
								<div className='font-bold'>Gabriel Radovský</div>

								<div>jednatel</div>

								<a href='mailto:radovsky.gabriel@aspn.cz'>
									<Button>Sjednat schůzku</Button>
								</a>
							</div>
						</div>
					</div>

					<div className=''>
						<div className='py-6'>
							<div className='text-4xl font-bold text-left'>
								Pomůžeme
								<br className='lg:inline' />
								Vám ještě
								<br className='lg:inline' />
								dnes
							</div>
						</div>

						<div>
							<div className='text-left lg:text-center'>
								Ať už jste majitel nemovitosti, který hledá komplexní služby
								správy, nebo nájemník hledající nový domov, jsme tu, abychom vám
								pomohli. Kontaktujte nás ještě dnes a dovolte nám ukázat vám,
								jak můžeme zajistit bezproblémovou cestu vaší nemovitosti.
							</div>

							<div className='py-6'>
								<div className='bg-[#E0E0DF] h-px'></div>
							</div>
						</div>
					</div>
				</div>
				<div ref={footerRef}>
					<Footer />
				</div>
			</main>
		</>
	);
}
