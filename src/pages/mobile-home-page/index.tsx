import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Button } from '@/components/button';
import { DoubleArrow } from '../../../public/assets/img/icons/doubleArrow';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { Phone } from '../../../public/assets/img/icons/phone';
import { Mail } from '../../../public/assets/img/icons/mail';

const inter = Inter({ subsets: ['latin'] });

export default function MobileHomePage() {
	return (
		<main className='lg:hidden'>
			<Header />
			<MobileHeader />
			<div className='px-3 py-6'>
				<div className='text-4xl font-bold'>Investujte chytře s APSN</div>
			</div>

			<div className='px-3 pb-3 text-lg font-bold'>
				APSN zjednodušuje prodej a pronájem, a nabízí výhodný výkup a prodej
				podílů nemovitostí.
			</div>

			<div className='px-3 py-6'>
				<Button>Sjednat schůzku</Button>
			</div>

			<div className='h-px bg-[#E0E0DF]'></div>

			<div className='text-4xl font-bold py-6 text-center'>Služby</div>

			<div className='px-3 flex flex-col gap-6 pb-6'>
				<div className='flex justify-between bg-[#EB9B6A] p-3 rounded-lg'>
					<div className='text-base font-bold'>Správa nemovitostí</div>

					<DoubleArrow />
				</div>

				<div className='flex justify-between bg-[#D9D9D9] p-3 rounded-lg'>
					<div className='text-base font-bold'>Finanční správa</div>

					<DoubleArrow />
				</div>

				<div className='flex justify-between bg-black text-white p-3 rounded-lg'>
					<div className='text-base font-bold'>Poradenství</div>

					<DoubleArrow className='fill-white' />
				</div>
			</div>

			<div className='h-px bg-[#E0E0DF]'></div>

			<div className='px-3 py-6 flex flex-col gap-3'>
				<img src='/assets/img/pics/villa.jpg' className='w-full' alt='villa' />

				<div className='text-2xl font-medium'>Rodinný dům na předměstí</div>

				<div className='text-2xl font-medium text-[#EB9B6A]'>
					CZK 12.000.000
				</div>

				<div>
					<div className='font-light'>Lokace: Brno, Bystrc 40 000 Kč/měsíc</div>

					<div className='font-light'>
						Velikost: 5+1, 150 m², zahrada 800 m²
					</div>
				</div>

				<div className='pt-3'>
					<Button>Najít více nemovitostí</Button>
				</div>
			</div>

			<div className='px-3 bg-gradient-to-b from-white to-gray-100 pb-6'>
				<div className='pb-6'>
					<div className='bg-[#E0E0DF] h-px'></div>
				</div>

				<div className='pb-3'>
					<CrystalLogo />
				</div>

				<div className='pb-6 text-base'>
					<div>
						S více než 6 lety zkušeností v oblasti nemovitostí, Jan je vizionář,
						který ASPN vedl k výšinám úspěchu. Jeho hluboké porozumění trhu a
						vášeň pro kvalitu služeb jsou základem naší agentury.
					</div>
				</div>
				<div className='flex gap-6'>
					<img src='/assets/img/pics/jirka.jpg' alt='jednatel' />

					<div className='gap-1 flex flex-col'>
						<div className='font-bold'>Jan Krupička</div>

						<div>jednatel</div>

						<Button>Sjednat schůzku</Button>
					</div>
				</div>
			</div>

			<div className='px-3 bg-gradient-to-b from-white to-gray-100 pb-6'>
				<div className='pb-3 pt-6'>
					<CrystalLogo />
				</div>

				<div className='pb-6 text-base'>
					<div>
						S více než 6 lety zkušeností v oblasti nemovitostí, Jan je vizionář,
						který ASPN vedl k výšinám úspěchu. Jeho hluboké porozumění trhu a
						vášeň pro kvalitu služeb jsou základem naší agentury.
					</div>
				</div>
				<div className='flex gap-6'>
					<img src='/assets/img/pics/jirka.jpg' alt='jednatel' />

					<div className='gap-1 flex flex-col'>
						<div className='font-bold'>Gabriel Radovský</div>

						<div>jednatel</div>

						<Button>Sjednat schůzku</Button>
					</div>
				</div>
			</div>

			<div>
				<div className='py-6'>
					<div className='text-4xl font-bold text-center'>
						Pomůžeme
						<br className='lg:inline' />
						Vám ještě
						<br className='lg:inline' />
						dnes
					</div>
				</div>

				<div className='px-3'>
					<div className='text-center'>
						Ať už jste majitel nemovitosti, který hledá komplexní služby správy,
						nebo nájemník hledající nový domov, jsme tu, abychom vám pomohli.
						Kontaktujte nás ještě dnes a dovolte nám ukázat vám, jak můžeme
						zajistit bezproblémovou cestu vaší nemovitosti.
					</div>

					<div className='py-6'>
						<div className='bg-[#E0E0DF] h-px'></div>
					</div>
				</div>
			</div>

			<div className='px-3 bg-gray-100 py-6 flex flex-col gap-6 lg:grid lg:grid-cols-2'>
				<form>
					<div className='text-4xl font-bold pb-6'>Napiště nám</div>

					<div className='grid grid-cols-2 gap-3'>
						<div className='flex flex-col gap-3'>
							<input
								type='text'
								name='fullname'
								id=''
								placeholder='Jméno a příjmení'
								className='bg-gray-300 py-3 pl-3 rounded-lg'
							/>

							<input
								type='text'
								name='message'
								id=''
								placeholder='Zpráva...'
								className='bg-gray-300 h-full pl-3 rounded-lg'
							/>
						</div>

						<div className='flex flex-col gap-3'>
							<input
								type='email'
								name=''
								id=''
								placeholder='Email'
								className='bg-gray-300 py-3 pl-3 rounded-lg'
							/>

							<input
								type='tel'
								name=''
								id=''
								placeholder='Telefonní číslo'
								className='bg-gray-300 py-3 pl-3 rounded-lg'
							/>

							<Button>Odeslat</Button>
						</div>
					</div>
				</form>

				<div className='pb-6'>
					<div className='text-4xl font-bold pb-6'>Kontakt</div>

					<div className='grid'>
						<div className='flex flex-col gap-3 font-bold'>
							<div className='flex gap-3'>
								<Phone />

								<a href='tel:+420111222333'>+420 111 222 333</a>
							</div>

							<div className='flex gap-3'>
								<Mail />

								<a href='mailto:info@apsn.cz'>info@apsn.cz</a>
							</div>

							<div className='flex justify-between py-3'>
								<div className='flex flex-col gap-0.5'>
									<div className='font-bold'>Jiří Krupička</div>

									<div className='font-normal'>+420 773 007 171</div>

									<div className='font-normal'>krupicka.jiri@aspn.cz</div>
								</div>

								<div className='flex flex-col gap-0.5'>
									<div className='font-bold'>Gabriel Radovský</div>

									<div className='font-normal'>+420 773 007 171</div>

									<div className='font-normal'>krupicka.jiri@aspn.cz</div>
								</div>
							</div>

							<div className='relative pb-3'>
								<iframe
									className='w-full h-72'
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7803854782765!2d14.457184876739312!3d50.071674414563994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937bee2498e9%3A0xf9c14829f5456a67!2sBulharsk%C3%A1%20996%2F20%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1scs!2scz!4v1713052106847!5m2!1scs!2scz'
									loading='lazy'
								></iframe>
							</div>

							<div className='font-normal'>
								<div>Bulharská 996/20</div>
								<div>101 00 Praha - Vršovice</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
