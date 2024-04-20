import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function LandToBuy() {
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
				<div className='container mx-auto'>
					<div className='flex flex-col gap-6 lg:gap-12 lg:px-24 text-left lg:text-center'>
						<div className='text-4xl font-bold'>Výkup pozemků</div>

						<div>
							Koupíme Váš pozemek nemovitost přímo, bez zprostředkování realitní
							kanceláře Proces prodeje pozemku může být dlouhý a složitý.
							Nalezení kupce a dohoda o ceně a dalších podmínkách může trvat až
							rok. <b>V APSN vám nabízíme odkup nemovitosti během 24 hodin.</b>
							Kupujeme přímo byty i domy, nepůsobíme jako realitní agentury, ale
							jako přímí kupci.
						</div>
					</div>
				</div>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<Button onClick={handleButtonClick}>Vyplňte formulář</Button>
				</div>
			</div>

			<main className='container mx-auto px-3'>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<div className='lg:px-12'>
						<div className='text-3xl font-bold'>
							„Zaručujeme rychlý a transparentní proces, který dokážeme
							zvládnout do jednoho dne.“
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 text-left gap-6 lg:gap-12 lg:py-12'>
							<div className='pt-6 lg:pt-0'>
								Jsme odborníci na rychlý odkup různých typů pozemků a zvládneme
								i ty nejsložitější případy.
							</div>

							<div>
								Specializujeme se na nemovitosti s komplikovanou právní situací
								a nebojíme se výzev. Máte obavy, že kvůli právním nebo
								technickým problémům pozemek neprodáte? Kontaktujte nás a my vám
								pomůžeme.
							</div>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti
							našich klientů. Nabízíme výkup pozemků s právními problémy, jako
							jsou:
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24 lg:py-12'>
							<ul className='list-disc list-inside flex flex-col lg:gap-1 pt-6 lg:pt-0'>
								<li className='text-left'>Věcná břemena</li>

								<li className='text-left'>Zástavní práva</li>

								<li className='text-left'>Exekuční příkazy</li>

								<li className='text-left'>
									Nedostatečně identifikovatelní vlastníci
								</li>
							</ul>

							<ul className='list-disc list-inside flex flex-col lg:gap-1'>
								<li className='lg:text-left'>
									Spoluvlastníci žijící mimo Českou republiku
								</li>

								<li className='text-left'>Prodloužené dědické spory</li>

								<li className='text-left'>Spory mezi spoluvlastníky</li>

								<li className='text-left'>
									Nemovitosti v majetku nesvéprávných nebo nezletilých
								</li>
							</ul>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Jak probíhá výkup spoluvlastnického podílu s APSN?
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24 lg:py-12'>
							<ul className='list-disc list-inside flex flex-col lg:gap-1 pt-6 lg:pt-0'>
								<li className='text-left'>
									Začnete vy tím, že vyplníte{' '}
									<b className='text-[#eb9b6a]'>formulář</b> na našem webu
								</li>

								<li className='text-left'>
									Následně vás kontaktuje náš specialista a domluvíte se na
									dalším postupu
								</li>

								<li className='text-left'>
									Připravíme pro vás individuální řešení a cenovou nabídku
								</li>
							</ul>

							<ul className='list-disc list-inside flex flex-col lg:gap-1'>
								<li className='lg:text-left font-bold'>
									Rozmyslete si, jak s penězi naložíte
								</li>

								<li className='text-left'>
									Zbytek administrativy nechte na nás, my se o vše postaráme
								</li>

								<li className='text-left font-bold'>
									Po podepsání smlouvy vám okamžitě vyplatíme zálohu nebo kupní
									cenu
								</li>

								<li className='text-left'>
									Nemovitost je prodána a my vám vyplatíme zbytek dohodnuté sumy
								</li>
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
								Čekáme na Vaši nezávaznou zprávu v{' '}
								<b className='text-[#eb9b6a]'>kontaktním formuláři</b>.
							</div>

							<div>
								<b className='text-[#eb9b6a]'>SMOUVA NA NEMOVIST - VZOR</b>
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
