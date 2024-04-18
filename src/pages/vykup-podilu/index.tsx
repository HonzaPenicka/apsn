import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function PercentToBuy() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12'>
					<div className='text-4xl font-bold text-center'>
						Vykoupíme váš spoluvlastnický podíl na nemovitosti
					</div>

					<div className='text-center'>
						Specializujeme se na odkup spoluvlastnických podílů na
						nemovitostech. Ty jsou velmi často výsledkem dědického řízení.
						Zděděná nemovitost se rozdělí na ideální podíly, které připadnou
						každému dědici. A protože{' '}
						<b className='text-[#eb9b6a]'>
							§ 1117 Občanského zákoníku č. 89/2012
						</b>
						říká, že má každý spoluvlastník právo k celé věci, je jasné, že je
						<b>podílové spoluvlastnictví velmi často problémové.</b>
					</div>
				</div>
				<div className='pt-6 lg:pt-12 justify-center text-center'>
					<Button>Vyplňte formulář</Button>
				</div>
			</div>

			<main className='container mx-auto px-3 flex flex-col lg:grid lg:grid-cols-2 text-center gap-6 lg:gap-12 lg:pb-12'>
				<div className='flex flex-col gap-6 pt-6 lg:pt-12'>
					<div className='text-4xl font-bold'>
						Prodejte nám váš spoluvlastnický podíl
					</div>

					<div>O vše se postaráme. Ušetříme váš čas i starosti.</div>

					<div>
						Máme zkušenosti se složitými případy, dbáme na zájmy dalších
						spoluvlastníků. Víme totiž, že je důležité najít společnou řeč a
						vzájemně se domluvit.
					</div>

					<div>
						Pokud vlastníte minoritní podíl a přemýšlíte o jeho prodeji, rádi
						pro vás připravíme nezávaznou cenovou nabídku.
					</div>
				</div>

				<div>
					<div className='text-4xl font-bold pt-6 lg:pt-12'>
						Nemáte zrovna ideální spoluvlastnický podíl? Poradíme si i se
						složitými případy
					</div>

					<div className='text-xl font-bold pt-3 lg:pt-6'>
						Bez problému odkoupíme také spoluvlastnický podíl na nemovitosti
						zatížené právními vadami, jako jsou:
					</div>

					<ul className='list-disc list-inside flex flex-col gap-1'>
						<li className='lg:text-left'>věcná břemena</li>
						<li className='lg:text-left'>nemovitosti zatížené insolvencí</li>
						<li className='lg:text-left'>zástavním práva</li>
						<li className='lg:text-left'>exekuční příkazy</li>
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

					<div className='pt-3 lg:pt-6'>
						Celý proces prodeje podílů se zjednodušil díky zmiňované novele
						občanského zákoníku, která omezuje předkupní právo pro
						spoluvlastníky při převodu podílu na nemovitosti. Prodat
						spoluvlastnický podíl je tak mnohem jednodušší než v minulosti.
					</div>
				</div>

				<div className='flex flex-col gap-6 pt-6 lg:pt-12'>
					<div className='text-4xl font-bold'>
						Jak funguje výkup spoluvlastnického podílu s APSN?
					</div>

					<div>Začínáte vy. Vyplňte formulář na této stránce.</div>

					<div>
						Následně vás kontaktuje APSN specialista, který se s vámi domluví na
						dalším postupu.
					</div>

					<div>
						Zatímco my připravujeme nabídku, vy přemýšlejte nad tím, co s nově
						nabytými financemi uděláte.
					</div>

					<div>
						My ještě oběháme úřady, dohodneme se s exekutorem, bankou a dalšími
						spoluvlastníky. Vyřešíme důležitou, ale nudnou administrativu za
						vás.
					</div>

					<div>
						Podepisujeme! Při podpisu kupní smlouvy vám vyplatíme zálohu /část
						kupní ceny / kupní cenu hned bez zbytečných průtahů.
					</div>

					<div>Hotovo, máme prodáno a vám doplatíme zbytek dohodnuté ceny.</div>
				</div>

				<div className='py-6 lg:py-12'>
					<div className='flex flex-col gap-6'>
						<div className='text-4xl font-bold text-center'>
							Konzultace s námi je zdarma
						</div>

						<div>
							Všechno vám vysvětlíme, navrhneme nejlepší varianty řešení, aniž
							byste museli něco podepsat. Představíme vám, jak celý výkup
							spoluvlastnického podílu probíhá, a provedeme vás jednotlivými
							kroky. To vše v přátelské atmosféře. Nevěříte? Přečtěte si{' '}
							<b className='text-[#eb9b6a]'>
								recenze našich spokojených zákazníků.
							</b>
						</div>

						<div>
							A pak nám nezávazně napište pomocí{' '}
							<b className='text-[#eb9b6a]'>kontaktního formuláře.</b>
						</div>

						<div className='font-bold text-[#eb9b6a]'>
							PRODEJ SPOLUVLASTNICKÉHO PODÍLU VZOR KUPNÍ SMLOUVY
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
