import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { BlackWhiteArrow } from '../../../public/assets/img/icons/black-white-arrow';
import { OrangeWhiteArrow } from '../../../public/assets/img/icons/orange-white-arrow';
import { Button } from '@/components/button';
import { GrayOrangeArrow } from '../../../public/assets/img/icons/gray-orange-arrow';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { Footer } from '@/components/footer';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	const footerRef = useRef<HTMLDivElement>(null!);

	const handleButtonClick = () => {
		if (footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<Header />

			<main className='hidden lg:grid pt-36'>
				<div className='container mx-auto flex'>
					<div className='bg-[#101E28] bg-fixed py-24 text-white flex flex-col gap-12 px-12'>
						<h1 className='text-6xl'>Profesionální správa vaší nemovitosti</h1>

						<div className='text-lg pr-36'>
							Jsme renomovaná firma specializující se na výkup a správu
							nemovitostí, pozemků a podílů na nemovitostech. Naší prioritou je
							poskytovat našim klientům komplexní a profesionální služby, které
							usnadňují investice do realit a zajišťují jejich bezproblémové
							řízení. Díky našemu týmu odborníků a rozsáhlé znalosti trhu jsme
							schopni nabídnout řešení šitá na míru potřebám každého klienta.
							Naše úsilí je vždy zaměřeno na dosažení nejlepších výsledků a
							maximálního zhodnocení Vašich investic.
						</div>

						<div className='pt-6'>
							<Button onClick={handleButtonClick}>Sjednat schůzku</Button>
						</div>
					</div>
					<img
						src='/assets/img/pics/balcony.jpg'
						alt='semi-house'
						className='relative z-10 translate-y-24'
					/>
				</div>

				<div className='pt-24 pb-12 container mx-auto flex flex-col gap-12'>
					<h2 className='text-4xl font-bold'>Služby</h2>

					<div className='grid grid-cols-3 gap-12'>
						<div className='bg-[#eb9b6a] rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<BlackWhiteArrow />

								<div className='text-4xl font-medium'>Výkup nemovitostí</div>

								<div>
									<ul className='list-disc list-inside'>
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
						<div className='bg-[#E0E0DF] lg:mb-12 rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<OrangeWhiteArrow />

								<div className='text-4xl font-medium'>Výkup pozemků</div>

								<div>
									<ul className='list-disc list-inside'>
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
						<div className='bg-[#101E28] text-white lg:mb-12 rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<GrayOrangeArrow />

								<div className='text-4xl font-medium'>Výkup</div>

								<div>
									<ul className='list-disc list-inside'>
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

					<div className='flex justify-between'>
						<div className='flex flex-col gap-6'>
							<h2 className='text-4xl font-bold'>
								Maximalizace hodnoty <br /> vaší investice
							</h2>

							<div className='text-[#4D4D4D] w-3/5'>
								Jako vlastník nemovitosti chcete zajistit, aby vaše investice
								byla nejen dobře udržovaná, ale také zisková. V APSN to chápeme
								a neúnavně pracujeme na správě vašeho majetku a zároveň
								maximalizaci jeho hodnoty. Nechte své starosti na nás a užívejte
								si návratnosti své investice.
							</div>

							<div className='pt-6'>
								<a href='tel:+420111222333'>
									<Button>Kontaktujte nás</Button>
								</a>
							</div>
						</div>
						<img src='/assets/img/pics/house.jpg' alt='house' />
					</div>
				</div>
				<div className='bg-gray-100 pb-12'>
					<div className='container mx-auto gap-12 flex flex-col'>
						<div className='flex flex-col gap-6'>
							<div className='text-4xl font-bold pt-12'>
								Sjednejte si schůzku
							</div>

							<div className='w-4/12'>
								Nabízíme pečlivě vybraný výběr nemovitostí, které představují
								vrchol rezidenčních a komerčních nemovitostí. Každá nabídka je
								vybírána s ohledem na nejvyšší standardy kvality, umístění a
								designu, aby vyhovovala potřebám našich klientů.
							</div>
						</div>

						<div className='grid grid-cols-2 gap-12'>
							<div className='gap-6 flex flex-col py-6 px-12 bg-white rounded-lg'>
								<CrystalLogo />

								<div>
									S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
									vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
									porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
									agentury.
								</div>

								<div className='flex justify-between'>
									<div className='flex gap-6'>
										<img
											src='/assets/img/pics/jirka.jpg'
											alt='jednatel Jirka'
											className='rounded-full'
										/>

										<div className='flex flex-col justify-center'>
											<div className='font-bold'>Jiří Krupička</div>

											<div>jednatel</div>
										</div>
									</div>

									<div className='justify-center flex flex-col'>
										<a href='mailto:krupicka.jiri@aspn.cz'>
											<Button>Sjednat schůzku</Button>
										</a>
									</div>
								</div>
							</div>

							<div className='gap-6 flex flex-col py-6 px-12 bg-[#101E28] text-white rounded-lg'>
								<CrystalLogo />

								<div>
									S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
									vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
									porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
									agentury.
								</div>

								<div className='flex justify-between'>
									<div className='flex gap-6'>
										<img
											src='/assets/img/pics/jirka.jpg'
											alt='jednatel Jirka'
											className='rounded-full'
										/>

										<div className='flex flex-col justify-center'>
											<div className='font-bold'>Gabriel Radovský</div>

											<div>jednatel</div>
										</div>
									</div>

									<div className='justify-center flex flex-col'>
										<a href='mailto:radovsky.gabriel@aspn.cz'>
											<Button>Sjednat schůzku</Button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='container mx-auto px-3'>
					<div className='pt-6 lg:pt-12 text-left lg:text-center'>
						<div className='lg:px-12'>
							<div className='pt-6 lg:pt-0 text-3xl font-bold'>
								Pomůžeme Vám ještě dnes
							</div>

							<div className='py-6 lg:py-12'>
								Popište nám nezávazně situaci s Vaší nemovitostí a my Vám
								obratem zašleme návrh řešení a cenovou nabídku. Představíme Vám,
								ja výkup bytu nebo domu probíhá, abyste měli přesnou představu o
								tom, co se bude dít. Jednoduše a přehledně. Stačí si přečíst
								recenze spokojených zákazníků.
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
