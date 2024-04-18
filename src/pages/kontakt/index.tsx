import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function Contact() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12 '>
					<div className='text-4xl font-bold text-center'>
						Seznamte se s našim týmem
					</div>

					<div className='text-center'>
						Vítejte v APSN, moderní, dynamické a na zákazníka zaměřené agentuře
						správy nemovitostí. Specializujeme se na komplexní správu
						nemovitostí, údržbu, leasing a finanční služby, jejichž cílem je
						zbavit vlastníky nemovitostí všech starostí a zároveň maximalizovat
						hodnotu jejich investic. Náš přístup je založen na transparentnosti,
						poctivosti a solidní komunikaci, což nám umožňuje budovat dlouhodobé
						vztahy s našimi klienty. Naše inovativní využití nejnovějších
						technologií v oblasti správy nemovitostí nás řadí na přední místo v
						oboru. Náš tým zkušených a znalých profesionálů se věnuje
						poskytování personalizované a odborné pomoci, šité na míru tak, aby
						vyhovovala jedinečným potřebám každého klienta.
					</div>
				</div>
				<div className='pt-6 lg:pt-12 justify-center text-center'>
					<Button>Vyplňte formulář</Button>
				</div>
			</div>

			<main className='container mx-auto px-3 flex flex-col gap-6 lg:gap-12'>
				<div className='flex flex-col lg:grid lg:grid-cols-2 gap-12 py-6 lg:py-12'>
					<div className='gap-6 flex flex-col py-6 px-12 border-2'>
						<CrystalLogo />

						<div>
							S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
							vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
							porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
							agentury.
						</div>

						<div className='flex justify-between'>
							<div className='flex gap-6'>
								<img src='/assets/img/pics/jirka.jpg' alt='jednatel Jirka' />

								<div className='flex flex-col justify-center'>
									<div className='font-bold'>Jirka Krupička</div>

									<div>jednatel</div>
								</div>
							</div>
						</div>
						<Button>Sjednat schůzku</Button>
					</div>

					<div className='gap-6 flex flex-col py-6 px-12 border-2'>
						<CrystalLogo />

						<div>
							S více než 6 lety zkušeností v oblasti nemovitostí, Jan je
							vizionář, který ASPN vedl k výšinám úspěchu. Jeho hluboké
							porozumění trhu a vášeň pro kvalitu služeb jsou základem naší
							agentury.
						</div>

						<div className='flex justify-between'>
							<div className='flex gap-6'>
								<img src='/assets/img/pics/jirka.jpg' alt='jednatel Jirka' />

								<div className='flex flex-col justify-center'>
									<div className='font-bold'>Gabriel Radovský</div>

									<div>jednatel</div>
								</div>
							</div>
						</div>
						<Button>Sjednat schůzku</Button>
					</div>
				</div>

				<div className='flex flex-col gap-6 lg-gap-12 text-center pb-6 lg:pb-12'>
					<div className='text-4xl font-bold'>Pomůžeme Vám ještě dnes</div>
					<div>
						Ať už jste majitel nemovitosti, který hledá komplexní služby správy,
						nebo nájemník hledající nový domov, jsme tu, abychom vám pomohli.
						Kontaktujte nás ještě dnes a dovolte nám ukázat vám, jak můžeme
						zajistit bezproblémovou cestu vaší nemovitosti.
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
}
