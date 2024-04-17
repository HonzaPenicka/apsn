import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function BuildingsToBuy() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12'>
					<div className='text-4xl font-bold text-center'>
						Výkup nemovitostí: Vykoupíme byt, dům i pozemek
					</div>

					<div className='text-center'>
						V APSN jsme odhodláni poskytovat vám služby odborné správy
						nemovitostí, které maximalizují hodnotu vaší investice do
						nemovitosti. S osobním přístupem, který klade důraz na integritu,
						vynikající zákaznický servis a inovativní technologie, se postaráme
						o vše, od inkasa nájemného po údržbu a leasing. Můžete se
						spolehnout, že spravujeme vaši nemovitost efektivně a transparentně
						a zajistíme, že vaše investice bude v dobrých rukou.
					</div>
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

					<ul className='list-disc list-inside flex flex-col gap-1 lg:gap-3'>
						<div className='text-xl font-bold'>
							Vykoupíme od vás nemovitosti zatížené právními vadami, jako jsou:
						</div>
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
						Jak funguje přímý výkup nemovitosti s APSN?
					</div>

					<div>Začínáte vy. Vyplňte formulář na této stránce.</div>

					<div>
						Míč je na naší straně. Náš MI ESTATE specialista se vám ozve a
						společně se domluvíte, jak budete dále postupovat.
					</div>

					<div>
						Připravíme pro vás návrh řešení a cenovou nabídku. Vy si promyslete,
						jak s penězi naložíte.
					</div>

					<div>
						Nudnou, ale nezbytnou administrativu nechte na nás, postaráme se o
						to.
					</div>

					<div>
						Podepisujeme! S podpisem smlouvy dostanete zálohu / část kupní ceny
						/ kupní cenu bez zbytečných prodlení.
					</div>

					<div>Máte prodáno a my vám vyplatíme zbytek dohodnuté ceny.</div>
				</div>

				<div className='flex flex-col gap-6'>
					<div className='text-4xl font-bold'>
						Vaši nemovitost odkoupíme napřímo, nejsme realitní kancelář
					</div>

					<div>
						Prodej nemovitosti je běh na dlouhou trať. Než seženete kupce,
						domluvíte se na ceně a dalších podmínkách, uběhne i rok.
						<b className='text-[#eb9b6a]'>
							V APSN odkoupíme vaši nemovitost za 24 hodin.{' '}
						</b>
						Vykoupíme váš byt nebo dům napřímo. Nejsme zprostředkovatelé jako
						realitní kanceláře, jsme přímí kupci.
					</div>
				</div>

				<div className='pb-6 lg:pb-12'>
					<div className='flex flex-col gap-6'>
						<div className='text-4xl font-bold text-center'>
							Vše vám zdarma vysvětlíme
						</div>

						<div>
							Popište nám nezávazně situaci s vaší nemovitostí a my vám obratem
							zašleme návrh řešení a cenovou nabídku. Představíme vám, jak výkup
							bytu nebo domu probíhá, abyste měli přesnou představu o tom, co se
							bude dít. Jednoduše a přehledně. Stačí si přečíst recenze
							spokojených zákazníků.
						</div>

						<div>
							Čekáme na vaši nezávaznou zprávu v{' '}
							<b className='text-[#eb9b6a]'>kontaktním formuláři.</b>
						</div>

						<div className=' font-bold text-[#eb9b6a]'>
							SMLOUVA NA NEMOVITOST - VZOR
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
