import { FunctionComponent } from 'react';
import { Button } from './button';
import { Phone } from '../../public/assets/img/icons/phone';
import { Mail } from '../../public/assets/img/icons/mail';
import { BigLogo } from '../../public/assets/img/icons/big-logo';
import { LinkedIn } from '../../public/assets/img/icons/linked-In';
import { Facebook } from '../../public/assets/img/icons/facebook';
import { Youtube } from '../../public/assets/img/icons/youtube';

export const Footer: FunctionComponent = () => {
	return (
		<>
			<div className='bg-gray-100 py-6 px-3'>
				<div className='container mx-auto lg:grid lg:grid-cols-2 gap-6 lg:gap-12'>
					<form>
						<div className='text-4xl font-bold pb-6'>Napiště nám</div>

						<div className='grid grid-cols-2 gap-3'>
							<div className='flex flex-col gap-3'>
								<input
									type='text'
									name='fullname'
									id=''
									placeholder='Jméno a příjmení'
									className='bg-gray-300 py-3 lg:py-12 pl-3 rounded-lg'
								/>

								<input
									type='text'
									name='message'
									id=''
									placeholder='Zpráva...'
									className='bg-gray-300 h-full lg:h-96 pl-3 rounded-lg'
								/>
							</div>

							<div className='flex flex-col gap-3'>
								<input
									type='email'
									name=''
									id=''
									placeholder='Email'
									className='bg-gray-300 py-3 lg:py-12 pl-3 rounded-lg'
								/>

								<input
									type='tel'
									name=''
									id=''
									placeholder='Telefonní číslo'
									className='bg-gray-300 py-3 lg:py-12 pl-3 rounded-lg'
								/>

								<Button>Odeslat</Button>
							</div>
						</div>
					</form>

					<div className='pb-6'>
						<div className='text-4xl font-bold pb-6 pt-6 lg:pt-0'>Kontakt</div>

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
										className='w-full h-72 lg:h-80'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7803854782765!2d14.457184876739312!3d50.071674414563994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937bee2498e9%3A0xf9c14829f5456a67!2sBulharsk%C3%A1%20996%2F20%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1scs!2scz!4v1713052106847!5m2!1scs!2scz'
										loading='lazy'
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row justify-between gap-12 py-6 px-3 container mx-auto items-center'>
				<div className='justify-center items-center'>
					<BigLogo className='w-full' />
				</div>

				<div className='flex gap-24 items-center justify-center'>
					<LinkedIn />

					<Facebook />
					<div className='pt-3'>
						<Youtube className='' />
					</div>
				</div>
			</div>
			<div className='text-[#ACACAC] text-center py-6 lg:py-12'>
				©Všechna práva vyhrazena. ASPN, s.r.o.
			</div>
		</>
	);
};
