import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Inter } from 'next/font/google';
import { useRef } from 'react';
import { BlackWhiteArrow } from '../../../public/assets/img/icons/black-white-arrow';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { GrayOrangeArrow } from '../../../public/assets/img/icons/gray-orange-arrow';
import { OrangeWhiteArrow } from '../../../public/assets/img/icons/orange-white-arrow';

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
				<div className='flex px-12'>
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

				<div className='pt-24 pb-12 flex flex-col gap-12 px-12'>
					<h2 className='text-4xl font-bold'>Služby</h2>

					<div className='grid grid-cols-3 gap-12'>
						<div className='bg-[#eb9b6a] rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<BlackWhiteArrow />

								<div className='text-4xl font-medium'>Výkup nemovitostí</div>

								<div>
									Koupíme vaši nemovitost přímo, bez zprostředkování realitní
									kanceláře
								</div>

								<div>
									Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení
									kupce a dohoda o ceně a dalších podmínkách může trvat až rok.
									V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme
									přímo byty i domy, nepůsobíme jako realitní agentury, ale jako
									přímí kupci.
								</div>

								<div>
									Úspěšně řešíme i zdánlivě neřešitelné situace k plné
									spokojenosti našich klientů. Nabízíme výkup nemovitostí s
									právními problémy, jako jsou:
								</div>

								<div>
									<ul className='list-disc list-inside'>
										<li>Věcná břemena</li>

										<li>Zástavy</li>

										<li>Exekuční rozkazy</li>

										<li>Nedostatečně identifikovaní vlastníci</li>

										<li>Spoluvlastníci bydlící v zahraničí</li>

										<li>Komplikované dědické spory</li>

										<li>Spory mezi spoluvlastníky</li>

										<li>
											Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých
											osob
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='bg-[#E0E0DF] lg:mb-12 rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<OrangeWhiteArrow />

								<div className='text-4xl font-medium'>Výkup podílů</div>

								<div>
									Koupíme vaši nemovitost přímo, bez zprostředkování realitní
									kanceláře
								</div>

								<div>
									Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení
									kupce a dohoda o ceně a dalších podmínkách může trvat až rok.
									V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme
									přímo byty i domy, nepůsobíme jako realitní agentury, ale jako
									přímí kupci.
								</div>

								<div>
									Úspěšně řešíme i zdánlivě neřešitelné situace k plné
									spokojenosti našich klientů. Nabízíme výkup nemovitostí s
									právními problémy, jako jsou:
								</div>

								<div>
									<ul className='list-disc list-inside'>
										<li>Věcná břemena</li>

										<li>Zástavy</li>

										<li>Exekuční rozkazy</li>

										<li>Nedostatečně identifikovaní vlastníci</li>

										<li>Spoluvlastníci bydlící v zahraničí</li>

										<li>Komplikované dědické spory</li>

										<li>Spory mezi spoluvlastníky</li>

										<li>
											Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých
											osob
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className='bg-[#101E28] text-white lg:mb-12 rounded-lg'>
							<div className='flex flex-col gap-12 p-12'>
								<GrayOrangeArrow />

								<div className='text-4xl font-medium'>Výkup pozemků</div>

								<div>
									Koupíme vaši nemovitost přímo, bez zprostředkování realitní
									kanceláře
								</div>

								<div>
									Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení
									kupce a dohoda o ceně a dalších podmínkách může trvat až rok.
									V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme
									přímo byty i domy, nepůsobíme jako realitní agentury, ale jako
									přímí kupci.
								</div>

								<div>
									Úspěšně řešíme i zdánlivě neřešitelné situace k plné
									spokojenosti našich klientů. Nabízíme výkup nemovitostí s
									právními problémy, jako jsou:
								</div>

								<div>
									<ul className='list-disc list-inside'>
										<li>Věcná břemena</li>

										<li>Zástavy</li>

										<li>Exekuční rozkazy</li>

										<li>Nedostatečně identifikovaní vlastníci</li>

										<li>Spoluvlastníci bydlící v zahraničí</li>

										<li>Komplikované dědické spory</li>

										<li>Spory mezi spoluvlastníky</li>

										<li>
											Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých
											osob
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
								<a href='tel:+420773007171'>
									<Button>Kontaktujte nás</Button>
								</a>
							</div>
						</div>
						<img src='/assets/img/pics/house.jpg' alt='house' />
					</div>
				</div>
				<div className='bg-gray-100 pb-12'>
					<div className='gap-12 flex flex-col px-12'>
						<div className='flex flex-col gap-6 text-center'>
							<div className='text-4xl font-bold pt-12'>
								Sjednejte si schůzku
							</div>

							<div className=''>
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
									Jiří Krupička, zakladatel společnosti APSN, se pohybuje v
									realitách skoro deset let. Zkušenosti získal v komerčním
									oddělení mezinárodní společnosti Engel@Voelkers, kde se
									věnoval naceňování a prodeji činžovních domů. Na základě
									těchto zkušeností založil APSN, zaměřenou na vyhledávání
									investičních nemovitostí. Mezi jeho hobby patří analýza
									českého realitního trhu a šachy. Sílu nabírá v sauně a s
									rodinou na horách.
								</div>

								<div className='flex justify-between'>
									<div className='flex gap-6'>
										{/* TODO - change img */}
										{/*
										<img
											src='/assets/img/pics/jirka.jpg'
											alt='jednatel Jirka'
											className='rounded-full'
										/>
										*/}

										<div className='flex flex-col justify-center'>
											<div className='font-bold'>Jiří Krupička</div>

											<div>jednatel, obchodní ředitel</div>
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
									Poslední tři roky jsem se aktivně věnoval nákupu a renovaci
									nemovitostí s cílem prodeje nebo pronájmu. Součástí mé práce
									je také správa nemovitostí pro klienty, což považuji za
									nedílnou součást mého profesního přístupu.
								</div>

								<div className='flex justify-between'>
									<div className='flex gap-6'>
										<img
											src='/assets/img/pics/gabin.jpeg'
											alt='jednatel Gabriel'
											className='rounded-full w-24'
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

				<div className='container mx-auto px-12'>
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
