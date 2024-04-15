import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { BlackWhiteArrow } from '../../../public/assets/img/icons/black-white-arrow';
import { OrangeWhiteArrow } from '../../../public/assets/img/icons/orange-white-arrow';
import { Button } from '@/components/button';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<>
			<Header />

			<main className='hidden lg:grid container mx-auto'>
				<div className='w-full flex py-6 h-96'>
					<div className='bg-[#101E28] h-96 p-12 w-10/12 text-white'>
						<div className='flex flex-col gap-6 w-2/3'>
							<h1 className='text-5xl'>Profesionální správa</h1>
							<h1 className='text-5xl'>vaší nemovitosti</h1>
							<div>
								Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								vulputate libero et velit interdum, ac aliquet odio mattis.
								Class aptent taciti sociosqu ad litora torquent per conubia
								nostra, per inceptos himenaeos.
							</div>
						</div>
						<div className='pt-6'>
							<Button>Sjednat schůzku</Button>
						</div>
					</div>

					<div className='overflow-visible absolute right-48'>
						<img
							src='/assets/img/pics/balcony.jpg'
							alt='semi-house'
							className='translate-y-20'
						/>
					</div>
				</div>
				<div className='h-96'></div>

				<div className='pt-24'>
					<div className='text-4xl font-bold pt-6 pb-12'>Služby</div>
					<div className='grid grid-cols-3 gap-6'>
						<div className='bg-[#eb9b6a]'>
							<div className='flex flex-col gap-9 p-12'>
								<BlackWhiteArrow />
								<div className='text-4xl font-medium'>Správa nemovitostí</div>
								<div className='text-lg'>
									<ul>
										<li>
											Zajištění všech aspektů správy vaší nemovitosti, včetně
											marketingu pro pronájem, výběru nájemníků, uzavírání
											nájemních smluv, pravidelných kontrol a správy stížností.
										</li>
										<br className='lg:inline' />
										<li>
											Naše personalizovaná služba a inovativní technologie
											zajišťují, že vaše nemovitost dosahuje maximálního výnosu
											s minimálním úsilím z vaší strany.
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='bg-[#E0E0DF]'>
							<div className='flex flex-col gap-9 p-12'>
								<OrangeWhiteArrow />
								<div className='text-4xl font-medium'>Finanční správa</div>
								<div className='text-lg'>
									<ul>
										<li>
											Komplexní finanční služby včetně vybírání nájemného,
											správy vkladů, účetnictví a pravidelného reportování
											majitelům.
										</li>
										<br className='lg:inline' />
										<li>
											Nabízíme transparentní přehled o finančním výkonu vaší
											nemovitosti, což vám umožňuje učinit informovaná
											rozhodnutí
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='bg-[#101E28] text-white'>
							<div className='flex flex-col gap-9 p-12'>
								<OrangeWhiteArrow />
								<div className='text-4xl font-medium'>Finanční správa</div>
								<div className='text-lg'>
									<ul>
										<li>
											Komplexní finanční služby včetně vybírání nájemného,
											správy vkladů, účetnictví a pravidelného reportování
											majitelům.
										</li>
										<br className='lg:inline' />
										<li>
											Nabízíme transparentní přehled o finančním výkonu vaší
											nemovitosti, což vám umožňuje učinit informovaná
											rozhodnutí
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
