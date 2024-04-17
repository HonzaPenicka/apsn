import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function AboutUs() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12'>
					<div className='text-4xl font-bold text-center'>O nás</div>

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
				<div className='flex flex-col gap-6 lg:gap-6 pt-6 lg:pt-12'>
					<div className='text-4xl font-bold'>
						Jsme váš spolehlivý partner pro prodej a výkup nemovitostí a
						spoluvlastnických podílů
					</div>

					<div>S námi nesháníte kupce a neřešíte zdlouhavý prodej.</div>

					<div>
						Zabýváme se
						<b className='text-[#eb9b6a]'> investicemi do nemovitostí</b> a
						spoluvlastnických podílů po celé České republice. Naší prioritou je
						individuální přístup, kvalitní zákaznický servis a garance férové
						ceny.
					</div>

					<div>
						Jsme zkušení profesionálové a celý proces odkupu je s námi vždy
						maximálně transparentní a diskrétní. Provedeme vás všemi možnostmi,
						které se nabízí, a ujistíme se, že si navzájem rozumíme.{' '}
					</div>
				</div>

				<div className='flex flex-col gap-6 pt-3 lg:pt-6'>
					<div className='text-4xl font-bold lg:pt-6'>
						Pokud spěcháte, prodej dokážeme zvládnout i do 24 hodin
					</div>

					<div>
						Na trhu s nemovitostmi vám už čtyři roky pomáháme získat za své
						nemovitosti vždy férové peníze.
					</div>

					<ul className='list-disc list-inside flex flex-col gap-1 lg:gap-3'>
						<div className='text-xl font-bold'>
							Nezastavíme se ani před nemovitostmi s právními vadami, jako jsou:
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

				<div className='flex flex-col gap-6'>
					<div className='text-4xl font-bold'>Konzultace s námi je zdarma</div>

					<div>
						Veškeré informace od nás dostanete přehledně předem, vše vám
						vysvětlíme a navrhneme ty nejvhodnější varianty řešení.
					</div>

					<div>
						Náš tým profesionálů je připraven vám plně asistovat a srozumitelně
						vás provést celým prodejem a odkoupením. Nejraději pracujeme v
						příjemné přátelské atmosféře, rychle a spolehlivě.
					</div>
				</div>

				<div className='pb-6 lg:pb-12 px-3'>
					<div className='flex flex-col gap-6 lg:gap-12'>
						<div className='text-4xl font-bold text-center'>
							Potřebujete co nejdřív a bezstarostně prodat nemovitost?
						</div>

						<div className='items-center justify-center text-center'>
							<Button>Napsat nezávazně</Button>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
