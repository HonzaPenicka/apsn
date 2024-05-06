import { ButtonOther } from '@/components/button-other';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Inter } from 'next/font/google';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function PercentToBuy() {
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
						<div className='text-4xl font-bold'>Výkup podílů</div>

						<div>
							Specializujeme se na nákup spoluvlastnických podílů na
							nemovitostech, často výsledkem dědických řízení. Po rozdělení
							nemovitosti mezi dědice každý obdrží ideální podíl.{' '}
							<b>Podle § 1117 Občanského zákoníku č. 89/2012</b> má každý
							spoluvlastník právo na celou věc, což činí spoluvlastnictví často
							problematické.
						</div>
					</div>
				</div>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<ButtonOther onClick={handleButtonClick}>
						Vyplňte formulář
					</ButtonOther>
				</div>
			</div>
			<main className='container mx-auto px-3'>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<div className='lg:px-12'>
						<div className='text-3xl font-bold'>
							„Prodejte nám Váš spoluvlastnický podíl a vyřešíme vše za vás,
							ušetříme Váš čas i námahu.“
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 text-left gap-6 lg:gap-12 lg:py-12'>
							<div className='pt-6 lg:pt-0'>
								Máme zkušenosti s komplexními situacemi a dbáme na zájmy
								ostatních spoluvlastníků, protože je důležité dosáhnout vzájemné
								dohody.
							</div>

							<div>
								Pokud jste majitelem minoritního podílu a uvažujete o jeho
								prodeji, rádi vám připravíme nezávaznou cenovou nabídku.
							</div>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti
							našich klientů. Nabízíme výkup nemovitostí s právními problémy,
							jako jsou:
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

						<div className='pt-6 lg:pt-0'>
							Novela občanského zákoníku zjednodušila proces prodeje podílů tím,
							že omezuje předkupní právo spoluvlastníků při prodeji podílu, což
							usnadňuje prodej spoluvlastnických podílů oproti minulosti.
						</div>

						<div className='pt-6 lg:pt-12 text-3xl font-bold'>
							Jak probíhá výkup spoluvlastnického podílu s APSN?
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-24 lg:py-12'>
							<ul className='list-disc list-inside flex flex-col lg:gap-1 pt-6 lg:pt-0'>
								<li className='text-left'>
									Začnete vy tím, že vyplníte{' '}
									<b className='text-[#eb9b6a]'>formulář</b> na našem webu
								</li>

								<li className='text-left'>
									Náš APSN specialista vás následně kontaktuje a domluvíte se na
									dalším postupu
								</li>

								<li className='text-left'>
									My připravujeme nabídku, zatímco Vy zvažujete využití
									finančních prostředků
								</li>

								<li className='text-left'>
									Zajistíme jednání s úřady, exekutory, bankami a dalšími
									spoluvlastníky
								</li>
							</ul>

							<ul className='list-disc list-inside flex flex-col lg:gap-1'>
								<li className='lg:text-left font-bold'>
									Odebereme Vám starosti s administrativou
								</li>

								<li className='text-left'>
									Při podpisu kupní smlouvy vám okamžitě vyplatíme zálohu nebo
									část kupní ceny
								</li>

								<li className='text-left'>
									A je to, prodej je dokončen a vyplatíme vám zbytek dohodnuté
									částky
								</li>

								<li className='text-left'>Konzultace s námi jsou zdarma</li>

								<li className='text-left'>
									Vše vám důkladně vysvětlíme, navrhneme optimální řešení a
									provedeme vás celým procesem
								</li>
							</ul>
						</div>

						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Vše Vám zdarma vysvětlíme
						</div>

						<div className='flex flex-col lg:grid gap-6 lg:gap-12 lg:py-12 py-6'>
							<div>
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
