import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';
import { Inter } from 'next/font/google';
import { FC, useRef, useState } from 'react';
import { CrystalLogo } from '../../../public/assets/img/icons/crystalLogo';
import { DoubleArrow } from '../../../public/assets/img/icons/double-arrow-black';
import { DoubleArrowWhite } from '../../../public/assets/img/icons/double-arrow-white';

const inter = Inter({ subsets: ['latin'] });

const MobileHomePage: FC = () => {
	const footerRef = useRef<HTMLDivElement>(null);
	const [isDialogOpen, setIsDialogOpen] = useState(true);

	const handleButtonClick = () => {
		if (footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const closeDialog = () => {
		setIsDialogOpen(false);
	};

	return (
		<>
			<MobileHeader />

			{/*
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={closeDialog}
      />
      */}

			<main className='lg:hidden'>
				<div className='container mx-auto px-3 pt-28'>
					<div className='py-6 flex flex-col gap-4'>
						<h1 className='text-4xl'>Agentura pro správu nemovitostí s.r.o.</h1>

						<div className='text-2xl font-bold'>
							Profesionální správa vaší nemovitosti
						</div>
					</div>

					<div className='pb-3 text-lg font-bold'>
						APSN zjednodušuje prodej a pronájem, a nabízí výhodný výkup a prodej
						podílů nemovitostí.
					</div>

					<div className='py-6'>
						<Button onClick={handleButtonClick}>Sjednat schůzku</Button>
					</div>

					<div className='h-px bg-[#E0E0DF]'></div>

					<div className='text-4xl font-bold py-6 text-left'>Služby</div>

					<div className=' flex flex-col gap-6 pb-6'>
						<a href='vykup-nemovitosti'>
							<div className='flex justify-between bg-[#EB9B6A] p-3 rounded-lg'>
								<div className='text-base font-bold'>Výkup nemovitostí</div>
								<DoubleArrow />
							</div>
						</a>

						<a href='vykup-podilu'>
							<div className='flex justify-between bg-[#D9D9D9] p-3 rounded-lg'>
								<div className='text-base font-bold'>Výkup podílů</div>
								<DoubleArrow />
							</div>
						</a>

						<a href='/vykup-pozemku'>
							<div className='flex justify-between bg-[#101E28] text-white p-3 rounded-lg'>
								<div className='text-base font-bold'>Výkup pozemků</div>
								<DoubleArrowWhite />
							</div>
						</a>
					</div>

					<div className='bg-gradient-to-b from-white to-gray-100 pb-6 p-3 rounded-xl'>
						<div className='pb-6'>
							<div className='bg-[#E0E0DF] h-px'></div>
						</div>

						<div className='pb-3'>
							<CrystalLogo />
						</div>

						<div className='pb-6 text-base'>
							<div>
								Jiří Krupička, zakladatel společnosti APSN, se pohybuje v
								realitách skoro deset let. Zkušenosti získal v komerčním
								oddělení mezinárodní společnosti, kde se věnoval naceňování a
								prodeji činžovních domů. Na základě těchto zkušeností založil
								APSN, zaměřenou na vyhledávání investičních nemovitostí. Mezi
								jeho hobby patří analýza českého realitního trhu a šachy. Sílu
								nabírá v sauně a s rodinou na horách.
							</div>
						</div>
						<div className='flex gap-6'>
							{/* TODO - change img */}
							{/*
                <img
                  src='/assets/img/pics/jirka.jpg'
                  alt='jednatel Jirka'
                  className='rounded-full'
                />
              */}

							<div className='gap-1 flex flex-col'>
								<div className='font-bold'>Jiří Krupička</div>
								<div>jednatel, obchodní ředitel</div>
								<a href='mailto:krupicka.jiri@aspn.cz'>
									<Button>Sjednat schůzku</Button>
								</a>
							</div>
						</div>
					</div>

					<div className=' bg-gradient-to-b from-white to-gray-100 pb-6 p-3 rounded-xl'>
						<div className='pb-3 pt-6'>
							<CrystalLogo />
						</div>

						<div className='pb-6 text-base'>
							<div>
								Poslední tři roky jsem se aktivně věnoval nákupu a renovaci
								nemovitostí s cílem prodeje nebo pronájmu. Součástí mé práce je
								také správa nemovitostí pro klienty, což považuji za nedílnou
								součást mého profesního přístupu.
							</div>
						</div>
						<div className='flex gap-6'>
							{/* TODO - change img */}
							{/*
              <img
                src='/assets/img/pics/gabin.jpeg'
                alt='jednatel Gabriel'
                className='rounded-full w-24'
              />
              */}

							<div className='gap-1 flex flex-col'>
								<div className='font-bold'>Gabriel Radovský</div>
								<div>jednatel</div>
								<a href='mailto:radovsky.gabriel@aspn.cz'>
									<Button>Sjednat schůzku</Button>
								</a>
							</div>
						</div>
					</div>

					<div className=''>
						<div className='py-6'>
							<div className='text-4xl font-bold text-left'>
								Pomůžeme
								<br className='lg:inline' />
								Vám ještě
								<br className='lg:inline' />
								dnes
							</div>
						</div>

						<div>
							<div className='text-left lg:text-center'>
								Ať už jste majitel nemovitosti, který hledá komplexní služby
								správy, nebo nájemník hledající nový domov, jsme tu, abychom vám
								pomohli. Kontaktujte nás ještě dnes a dovolte nám ukázat vám,
								jak můžeme zajistit bezproblémovou cestu vaší nemovitosti.
							</div>

							<div className='py-6'>
								<div className='bg-[#E0E0DF] h-px'></div>
							</div>
						</div>
					</div>
				</div>
				<div ref={footerRef}>
					<Footer />
				</div>
			</main>
		</>
	);
};

export default MobileHomePage;
