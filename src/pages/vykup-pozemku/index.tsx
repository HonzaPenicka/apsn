import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function LandToBuy() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12'>
					<div className='text-4xl font-bold text-center'>
						Vykoupíme váš pozemek
					</div>

					<div className='text-center'>
						Koupíme Váš pozemek nemovitost přímo, bez zprostředkování realitní
						kanceláře Proces prodeje pozemku může být dlouhý a složitý. Nalezení
						kupce a dohoda o ceně a dalších podmínkách může trvat až rok. V APSN
						vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme přímo byty i
						domy, nepůsobíme jako realitní agentury, ale jako přímí kupci.
					</div>
				</div>
				<div className='pt-6 lg:pt-12 justify-center text-center'>
					<Button>Vyplňte formulář</Button>
				</div>
			</div>

			<main className='container mx-auto px-3 flex flex-col lg:grid lg:grid-cols-2 text-center gap-6 lg:gap-12'>
				<div className='flex flex-col gap-6 pt-3 lg:pt-6'>
					<div className='text-4xl font-bold lg:pt-6'>
						Proč prodat nemovitost APSN?
					</div>

					<div>
						Specializujeme se na odkup nemovitostí všeho druhu, poradíme si i se
						složitými případy. Máme přes 14000 spokojených klientů a vlastníme
						přes 9000 nemovitostí.
					</div>

					<div>
						Vždy vám předložíme přehlednou a nezávaznou nabídku a celý obchod
						dokážeme uskutečnit v rámci 1 dne.
					</div>

					<div>
						<b className='text-[#eb9b6a]'>
							Zabýváme se také výkupem nemovitostí se složitou právní situací a
							nezalekneme se žádné komplikace.
						</b>{' '}
						Myslíte si, že svou nemovitost kvůli věcnému břemenu anebo špatném
						technickém stavu neprodáte? Zahoďte starosti a napište nám.
					</div>

					<div className='text-xl'>
						Zdánlivě neřešitelné obchody úspěšně realizujeme ke spokojenosti
						našich klientů.
					</div>

					<div className='text-xl font-bold'>
						Vykoupíme od vás nemovitosti zatížené právními vadami, jako jsou:
					</div>

					<ul className='list-disc list-inside flex flex-col gap-1'>
						<li className='lg:text-left'>věcná břemena</li>
						<li className='lg:text-left'>nemovitosti zatížené insolvencí</li>
						<li className='lg:text-left'>zástavním právem</li>
						<li className='lg:text-left'>exekučními příkazy</li>
						<li className='lg:text-left'>
							nemovitosti s nedostatečně identifikovatelnými vlastníky či
							spoluvlastníky trvale žijícími mimo ČR
						</li>
						<li className='lg:text-left'>
							nemovitosti zatížené zdlouhavými dědickými spory
						</li>
						<li className='lg:text-left'>
							nemovitosti ve vlastnictví nesvéprávných či nezletilých osob
							(opatrovnický soud)
						</li>
					</ul>
				</div>

				<div className='flex flex-col gap-6 pt-6 lg:pt-12'>
					<div className='text-4xl font-bold'>
						Jak probíhá přímý odkup s APSN?
					</div>

					<div>Začnete vy tím, že vyplníte formulář na našem webu.</div>

					<div>
						Následně vás kontaktuje náš specialista a domluvíte se na dalším
						postupu.
					</div>

					<div>
						Připravíme pro vás návrh řešení a cenovou nabídku. Vy si promyslete,
						jak s penězi naložíte.
					</div>

					<div>
						Připravíme pro vás individuální řešení a cenovou nabídku. Rozmyslete
						si, jak s penězi naložíte.
					</div>

					<div>Zbytek administrativy nechte na nás, my se o vše postaráme.</div>

					<div>
						Po podepsání smlouvy vám okamžitě vyplatíme zálohu nebo kupní cenu.
					</div>

					<div>
						Nemovitost je prodána a my vám vyplatíme zbytek dohodnuté sumy.
					</div>
				</div>

				<div className='flex flex-col gap-6 pb-6 lg:pb-12'>
					<div className='text-4xl font-bold'>
						Vše vám podrobně a bezplatně vysvětlíme
					</div>

					<div>
						Dejte nám vědět o vaší situaci s nemovitostí pomocí našeho
						kontaktního formuláře, a my vám obratem zašleme nabídku a
						vysvětlíme, jak bude proces výkupu probíhat.
					</div>

					<div>
						Čekáme na vaši nezávaznou zprávu v{' '}
						<b className='text-[#eb9b6a]'>kontaktním formuláři</b>.
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
