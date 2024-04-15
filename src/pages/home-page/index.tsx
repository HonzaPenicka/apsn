import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { BlackWhiteArrow } from '../../../public/assets/img/icons/black-white-arrow';
import { OrangeWhiteArrow } from '../../../public/assets/img/icons/orange-white-arrow';
import { Button } from '@/components/button';
import { GrayOrangeArrow } from '../../../public/assets/img/icons/gray-orange-arrow';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';

const inter = Inter({ subsets: ['latin'] });

export default function HomePage() {
	return (
		<>
			<Header />

			<main className='hidden lg:grid'>
				<div className='flex z-0'>
					<div className='bg-[#101E28] p-48 text-white relative z-0'>
						<div className='flex flex-col gap-6 w-3/5'>
							<h1 className='text-6xl'>Profesionální správa</h1>

							<h1 className='text-6xl'>vaší nemovitosti</h1>

							<div className='text-lg'>
								Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
								vulputate libero et velit interdum, ac aliquet odio mattis.
								Class aptent taciti sociosqu ad litora torquent per conubia
								nostra, per inceptos himenaeos.
							</div>

							<div className='pt-6'>
								<Button>Sjednat schůzku</Button>
							</div>
						</div>
					</div>

					<img
						src='/assets/img/pics/balcony.jpg'
						alt='semi-house'
						className='relative z-10 -translate-x-48 translate-y-24 mx-auto right-auto'
					/>
				</div>

				<div className='py-24 container mx-auto flex flex-col gap-12'>
					<h2 className='text-5xl font-bold'>Služby</h2>

					<div className='grid grid-cols-3 gap-12'>
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
								<GrayOrangeArrow />

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

					<div className='flex py-12 container mx-auto justify-between'>
						<div className='flex flex-col gap-6'>
							<h2 className='text-5xl font-bold'>Maximalizace hodnoty</h2>

							<h2 className='text-5xl font-bold'>vaší investice</h2>

							<div className='text-[#4D4D4D] w-3/5'>
								Jako vlastník nemovitosti chcete zajistit, aby vaše investice
								byla nejen dobře udržovaná, ale také zisková. V APSN to chápeme
								a neúnavně pracujeme na správě vašeho majetku a zároveň
								maximalizaci jeho hodnoty. Nechte své starosti na nás a užívejte
								si návratnosti své investice.
							</div>

							<div className='pt-6'>
								<Button>Kontaktujte nás</Button>
							</div>
						</div>
						<img src='/assets/img/pics/house.jpg' alt='house' />
					</div>

					<div className='flex flex-col gap-6'>
						<h2 className='text-5xl font-bold'>Nabídka nemovitostí</h2>

						<div className='w-2/6 text-[#4D4D4D]'>
							Jako vlastník nemovitosti chcete zajistit, aby vaše investice byla
							nejen dobře udržovaná, ale také zisková. V APSN to chápeme a
							neúnavně pracujeme na správě vašeho majetku a zároveň maximalizaci
							jeho hodnoty. Nechte své starosti na nás a užívejte si návratnosti
							své investice.
						</div>
					</div>

					<div className='grid grid-cols-3 gap-12'>
						<div className='flex flex-col gap-6'>
							<img
								src='/assets/img/pics/ranch.jpg'
								alt='house'
								className='w-full'
							/>

							<div className='text-3xl'>Rodinný dům na předměstí</div>

							<div className='text-3xl text-[#eb9b6a]'>CZK 12,000,000</div>

							<div className='flex flex-col gap-3 w-5/6'>
								<div className='flex justify-between font-light'>
									<div>Lokace: Brno, Bystrc</div>

									{'  |  '}

									<div>Cena: 40 000 Kč/měsíc</div>
								</div>

								<div className='font-light'>
									Velikost: 5+1, 150 m², zahrada 800 m²
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-6'>
							<img
								src='/assets/img/pics/villasea.jpg'
								alt='house'
								className='w-full'
							/>

							<div className='text-3xl'>Rodinný dům na předměstí</div>

							<div className='text-3xl text-[#eb9b6a]'>CZK 12,000,000</div>

							<div className='flex flex-col gap-3 w-5/6'>
								<div className='flex justify-between font-light'>
									<div>Lokace: Brno, Bystrc</div>

									{'  |  '}

									<div>Cena: 40 000 Kč/měsíc</div>
								</div>

								<div className='font-light'>
									Velikost: 5+1, 150 m², zahrada 800 m²
								</div>
							</div>
						</div>

						<div className='flex flex-col gap-6'>
							<img
								src='/assets/img/pics/uncompletehouse.jpg'
								alt='house'
								className='w-full'
							/>

							<div className='text-3xl'>Rodinný dům na předměstí</div>

							<div className='text-3xl text-[#eb9b6a]'>CZK 12,000,000</div>

							<div className='flex flex-col gap-3 w-5/6'>
								<div className='flex justify-between font-light'>
									<div>Lokace: Brno, Bystrc</div>

									{'  |  '}

									<div>Cena: 40 000 Kč/měsíc</div>
								</div>

								<div className='font-light'>
									Velikost: 5+1, 150 m², zahrada 800 m²
								</div>
							</div>
						</div>
					</div>

					<div className='text-center pt-12'>
						<Button>Najít více nemovitostí</Button>
					</div>
				</div>
				<div className='bg-gray-100 pb-12'>
					<div className='container mx-auto gap-12 flex flex-col'>
						<div className='flex flex-col gap-6'>
							<div className='text-5xl font-bold pt-12'>
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
							<div className='gap-6 flex flex-col py-6 px-12 bg-white'>
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
										/>

										<div className='flex flex-col justify-center'>
											<div className='font-bold'>Jirka Krupička</div>

											<div>jednatel</div>
										</div>
									</div>

									<div className='justify-center flex flex-col'>
										<Button>Sjednat schůzku</Button>
									</div>
								</div>
							</div>

							<div className='gap-6 flex flex-col py-6 px-12 bg-[#101E28] text-white'>
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
										/>

										<div className='flex flex-col justify-center'>
											<div className='font-bold'>Gabriel Radovský</div>

											<div>jednatel</div>
										</div>
									</div>

									<div className='justify-center flex flex-col'>
										<Button>Sjednat schůzku</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container mx-auto flex flex-col gap-6 py-12 text-center w-2/6'>
					<div className='text-5xl font bold'>Pomůžeme Vám ještě dnes</div>
					<div className=''>
						Ať už jste majitel nemovitosti, který hledá komplexní služby správy,
						nebo nájemník hledající nový domov, jsme tu, abychom vám pomohli.
						Kontaktujte nás ještě dnes a dovolte nám ukázat vám, jak můžeme
						zajistit bezproblémovou cestu vaší nemovitosti.
					</div>
				</div>
			</main>
		</>
	);
}
