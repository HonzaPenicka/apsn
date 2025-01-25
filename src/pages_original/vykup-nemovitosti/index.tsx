import { ButtonOther } from '@/components/button-other';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Inter } from 'next/font/google';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function BuildingsToBuy() {
	const footerRef = useRef<HTMLDivElement>(null!);

	const handleButtonClick = () => {
		if (footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3 mt-36'>
				<div className='px-3 lg:px-12'>
					<div className='flex flex-col gap-6 lg:gap-12 lg:px-24 text-left lg:text-center'>
						<div className='text-4xl font-bold'>Výkup nemovitostí</div>

						<div>
							V APSN jsme odhodláni poskytovat vám služby odborné správy
							nemovitostí, které maximalizují hodnotu vaší investice do
							nemovitosti. S osobním přístupem, který klade důraz na integritu,
							vynikající zákaznický servis a inovativní technologie, se
							postaráme o vše, od inkasa nájemného po údržbu a leasing. Můžete
							se spolehnout, že spravujeme vaši nemovitost efektivně a
							transparentně a zajistíme, že vaše investice bude v dobrých rukou.
						</div>
					</div>
				</div>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<ButtonOther onClick={handleButtonClick}>
						Vyplňte formulář
					</ButtonOther>
				</div>
			</div>

			<main className='lg:px-12 px-3'>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<div className='lg:px-12'>
						<div className='text-3xl font-bold'>
							„Zaručujeme rychlý a transparentní proces, který dokážeme
							zvládnout do jednoho dne.“
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 text-left gap-6 lg:gap-12 lg:py-12'>
							<div className='pt-6 lg:pt-0'>
								Jsme odborníci na rychlý odkup různých typů nemovitostí a
								zvládneme i ty nejsložitější případy.
							</div>

							<div>
								Specializujeme se na nemovitosti s komplikovanou právní situací
								a nebojíme se výzev. Máte obavy, že kvůli právním nebo
								technickým problémům nemovitost neprodáte? Kontaktujte nás a my
								vám pomůžeme.
							</div>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti
							našich klientů. Nabízíme výkup nemovitostí s právními problémy,
							jako jsou:
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24 lg:py-12'>
							<ul className='list-disc list-inside flex flex-col lg:gap-1 pt-6 lg:pt-0'>
								<p className='text-left'>Věcná břemena</p>

								<p className='text-left'>Zástavní práva</p>

								<p className='text-left'>Exekuční příkazy</p>

								<p className='text-left'>
									Nedostatečně identifikovatelní vlastníci
								</p>
							</ul>

							<ul className='list-disc list-inside flex flex-col lg:gap-1'>
								<p className='lg:text-left'>
									Spoluvlastníci žijící mimo Českou republiku
								</p>

								<p className='text-left'>Prodloužené dědické spory</p>

								<p className='text-left'>Spory mezi spoluvlastníky</p>

								<p className='text-left'>
									Nemovitosti v majetku nesvéprávných nebo nezletilých
								</p>
							</ul>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Jak probíhá přímý odkup s APSN?
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24 lg:py-12'>
							<ul className='list-disc list-inside flex flex-col lg:gap-1 pt-6 lg:pt-0'>
								<p className='text-left'>
									Začnete vy tím, že vyplníte{' '}
									<button
										className='text-[#eb9b6a]'
										onClick={handleButtonClick}
									>
										<b>formulář</b>
									</button>{' '}
									na našem webu
								</p>

								<p className='text-left'>
									Následně vás kontaktuje náš specialista a domluvíte se na
									dalším postupu
								</p>

								<p className='text-left'>
									Připravíme pro vás individuální řešení a cenovou nabídku
								</p>
							</ul>

							<ul className='list-disc list-inside flex flex-col lg:gap-1'>
								<p className='lg:text-left'>
									Rozmyslete si, jak s penězi naložíte
								</p>

								<p className='text-left'>
									Zbytek administrativy nechte na nás, my se o vše postaráme
								</p>

								<p className='text-left font-bold'>
									Po podepsání smlouvy vám okamžitě vyplatíme zálohu nebo kupní
									cenu
								</p>

								<p className='text-left'>
									Nemovitost je prodána a my vám vyplatíme zbytek dohodnuté sumy
								</p>
							</ul>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Vše Vám zdarma vysvětlíme
						</div>

						<div className='flex flex-col lg:grid gap-6 lg:gap-12 lg:py-12 pb-6'>
							<div className='pt-6 lg:pt-0'>
								Popište nám nezávazně situaci s Vaší nemovitostí a my Vám
								obratem zašleme návrh řešení a cenovou nabídku. Představíme Vám,
								ja výkup bytu nebo domu probíhá, abyste měli přesnou představu o
								tom, co se bude dít. Jednoduše a přehledně. Stačí si přečíst
								recenze spokojených zákazníků.
							</div>

							<div>
								Čekáme na Vaši nezávaznou zprávu v kontaktním formuláři.
							</div>
						</div>
					</div>
				</div>
			</main>

			<div ref={footerRef}>
				<Footer />
			</div>
		</>
	);
}
