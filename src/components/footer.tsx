import { FunctionComponent } from 'react';

import { BigLogo } from '../../public/assets/img/icons/big-logo';
import { Facebook } from '../../public/assets/img/icons/facebook';
import { Instagram } from '../../public/assets/img/icons/instagram';
import { LinkedIn } from '../../public/assets/img/icons/linked-In';
import { Mail } from '../../public/assets/img/icons/mail';
import { Phone } from '../../public/assets/img/icons/phone';
import { Youtube } from '../../public/assets/img/icons/youtube';
import { Button } from './button';

export const Footer: FunctionComponent = () => {
	return (
		<>
			<div className='bg-gray-100 py-6 px-3 lg:px-12'>
				<div className='lg:grid lg:grid-cols-2 gap-6 lg:gap-12'>
					<form action='https://formspree.io/f/myyrogad' method='POST'>
						<div className='text-4xl font-bold pb-6'>Napište nám</div>

						<div className='grid gap-6 py-3 lg:py-0'>
							<div className='py-6 lg:py-12 px-6 lg:px-12 border-2 rounded-lg bg-white'>
								<div className='flex flex-col gap-6 lg:gap-12'>
									<input
										type='name'
										name='Jméno a přijmení'
										id='form-name'
										placeholder='Jméno a příjmení'
										className='py-3 pl-3 rounded-lg border-2'
										required
										maxLength={50}
									/>

									<input
										type='email'
										name='E-mail'
										id='form-email'
										placeholder='Email'
										className='py-3 pl-3 rounded-lg border-2'
										required
										maxLength={80}
									/>

									<input
										type='phone'
										name='Mobil'
										id='form-phone'
										placeholder='Telefonní číslo'
										className='py-3 pl-3 rounded-lg border-2'
										required
										maxLength={20}
									/>

									<textarea
										name='Zpráva'
										id='message'
										placeholder='Zpráva...'
										className='py-3 pl-3 rounded-lg border-2'
										required
										rows={5}
									/>

									<Button type='submit'>Odeslat</Button>
								</div>
							</div>
						</div>
					</form>

					<div className='pb-6'>
						<div className='text-4xl font-bold pb-6 pt-6 lg:pt-0'>Kontakt</div>

						<div className='grid'>
							<div className='flex flex-col gap-3 font-bold'>
								<div className='flex flex-col lg:flex-row justify-between text-xl'>
									<div className='flex gap-3'>
										<Mail />

										<a href='mailto:info@apsn.cz'>info@apsn.cz</a>
									</div>

									<div className='flex gap-3'>
										<Phone />

										<a href='tel:+420773007171'>+420 773 007 171</a>
									</div>
								</div>

								<div className='flex justify-between py-3'>
									<div className='flex flex-col gap-0.5'>
										<div className='font-bold'>Jiří Krupička</div>

										<div className='font-normal'>
											<a href='tel:+420773007171'>+420 773 007 171</a>
										</div>

										<div className='font-normal'>
											<a href='mailto:krupicka.jiri@aspn.cz'>
												krupicka.jiri@aspn.cz
											</a>
										</div>
									</div>

									<div className='flex flex-col gap-0.5'>
										<div className='font-bold'>Gabriel Radovský</div>

										<div className='font-normal'>
											<a href='tel:+420725890879'>+420 725 890 879</a>
										</div>

										<div className='font-normal'>
											<a href='mailto:radovsky.gabriel@aspn.cz'>
												radovsky.gabriel@aspn.cz
											</a>
										</div>
									</div>
								</div>

								<div className='relative pb-3 rounded-lg z-0'>
									<iframe
										className='w-full h-72 lg:h-96 ring-0 rounded-lg'
										src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.7803854782765!2d14.457184876739312!3d50.071674414563994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b937bee2498e9%3A0xf9c14829f5456a67!2sBulharsk%C3%A1%20996%2F20%2C%20101%2000%20Praha%2010-Vr%C5%A1ovice!5e0!3m2!1scs!2scz!4v1713052106847!5m2!1scs!2scz'
										loading='lazy'
									></iframe>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row justify-between gap-12 py-6 px-3 lg:px-12 items-center'>
				<div className='justify-center items-center'>
					<BigLogo className='w-full' />
				</div>

				<div className='flex px-3 gap-12 lg:gap-24 items-center justify-center'>
					<LinkedIn />

					<Facebook />
					<div className='pt-3'>
						<Youtube className='' />
					</div>

					<div>
						<Instagram />
					</div>
				</div>
			</div>
			<div className='text-[#ACACAC] text-center py-6 lg:py-6'>
				©Všechna práva vyhrazena. ASPN, s.r.o.
			</div>
		</>
	);
};
