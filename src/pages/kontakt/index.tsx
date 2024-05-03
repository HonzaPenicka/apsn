import { Button } from '@/components/button';
import { ButtonOther } from '@/components/button-other';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Inter } from 'next/font/google';
import { useRef } from 'react';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
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

			<div className='py-6 lg:pb-12 bg-[#F2F2F2] px-3 mt-36'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-6 lg:gap-12 lg:px-24 text-left lg:text-center'>
						<div className='text-4xl font-bold'>Seznamte se s našim týmem</div>

						<div>
							Vítejte v APSN, moderní, dynamické a na zákazníka zaměřené
							agentuře správy nemovitostí. Specializujeme se na komplexní správu
							nemovitostí, údržbu, leasing a finanční služby, jejichž cílem je
							zbavit vlastníky nemovitostí všech starostí a zároveň
							maximalizovat hodnotu jejich investic. Náš přístup je založen na
							transparentnosti, poctivosti a solidní komunikaci, což nám
							umožňuje budovat dlouhodobé vztahy s našimi klienty. Naše
							inovativní využití nejnovějších technologií v oblasti správy
							nemovitostí nás řadí na přední místo v oboru. Náš tým zkušených a
							znalých profesionálů se věnuje poskytování personalizované a
							odborné pomoci, šité na míru tak, aby vyhovovala jedinečným
							potřebám každého klienta.
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
				<div className='pt-6 lg:pt-12 text-left'>
					<div className='flex flex-col lg:grid lg:grid-cols-2 gap-12'>
						<div className='gap-6 flex flex-col py-6 px-12 border-2 rounded-lg'>
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
									<div className='flex flex-col text-left'>
										<div className='font-bold'>Jiří Krupička</div>

										<div>jednatel</div>
									</div>
								</div>
							</div>
							<a href='mailto:krupicka.jiri@aspn.cz'>
								<Button>Sjednat schůzku</Button>
							</a>
						</div>

						<div className='gap-6 flex flex-col py-6 px-12 border-2 rounded-lg'>
							<CrystalLogo />

							<div>
								Poslední tři roky jsem se aktivně věnoval nákupu a renovaci
								nemovitostí s cílem prodeje nebo pronájmu. Součástí mé práce je
								také správa nemovitostí pro klienty, což považuji za nedílnou
								součást mého profesního přístupu.
							</div>

							<div className='flex justify-between'>
								<div className='flex gap-6'>
									<img
										src='/assets/img/pics/gabin.jpeg'
										alt='jednatel Jirka'
										className='rounded-full w-24'
									/>

									<div className='flex flex-col text-left'>
										<div className='font-bold'>Gabriel Radovský</div>

										<div>jednatel</div>
									</div>
								</div>
							</div>
							<a href='mailto:radovsky.gabriel@aspn.cz'>
								<Button>Sjednat schůzku</Button>
							</a>
						</div>
					</div>
				</div>
			</main>
			<div className='container mx-auto px-3'>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<div className='lg:px-12'>
						<div className='pt-6 lg:pt-0 text-3xl font-bold'>
							Pomůžeme Vám ještě dnes
						</div>

						<div className='py-6 lg:py-12'>
							Popište nám nezávazně situaci s Vaší nemovitostí a my Vám obratem
							zašleme návrh řešení a cenovou nabídku. Představíme Vám, ja výkup
							bytu nebo domu probíhá, abyste měli přesnou představu o tom, co se
							bude dít. Jednoduše a přehledně. Stačí si přečíst recenze
							spokojených zákazníků.
						</div>
					</div>
				</div>
			</div>

			<div ref={footerRef}>
				<Footer />
			</div>
		</>
	);
}
