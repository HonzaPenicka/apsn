import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';

const inter = Inter({ subsets: ['latin'] });

export default function EstimateOfMarketValue() {
	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3'>
				<div className='container mx-auto flex flex-col gap-6 lg:gap-12'>
					<div className='text-4xl font-bold text-center'>
						Odhad ceny nemovitosti nebo spoluvlastnického podílu
					</div>

					<div className='text-center'>
						Odhad ceny nemovitosti nebo spoluvlastnického podílu online zdarma.
						Připravíme pro vás nezávaznou nabídku, stačí vyplnit formulář a my
						se vám ozveme. Můžete nás také kontaktovat na tel. čísle{' '}
						<b className='text-[#eb9b6a]'>732 717 314</b> nebo e-mailu{' '}
						<b className='text-[#eb9b6a]'>info@miestate.cz</b>. Obchody úspěšně
						realizujeme ke spokojenosti našich klientů. Rádi i pro vás najdeme
						to nejlepší možné řešení.
					</div>
				</div>
				<div className='pt-6 lg:pt-12 justify-center text-center'>
					<Button>Vyplňte formulář</Button>
				</div>
			</div>

			<main className='container mx-auto px-3 flex flex-col lg:grid lg:grid-cols-2 text-center gap-6 lg:gap-12'>
				<div className='flex flex-col gap-6 pt-3 lg:pt-6'>
					<div className='text-4xl font-bold lg:pt-6'>
						Odhad ceny nemovitosti nebo spoluvlastnického podílu online
					</div>

					<div>
						Odhad ceny nemovitosti nebo spoluvlastnického podílu je přibližné
						určení jejich ceny. Pomocí takového odhadu zjistíte, zda kupovaná
						nemovitost není předražená. Při prodeji nemovitosti je zase dobré
						vědět, v jaké cenové hladině se vaše nemovitost pohybuje, abyste ji
						neprodávali pod cenou. Hodnotu nemovitosti budete potřebovat také ve
						chvíli, kdy si chcete vzít hypotéku, dělíte majetek nebo jste naopak
						něco zdědili.
					</div>

					<div>
						Tento formulář je online. Abychom vám odhad nemovitosti spočítali co
						nejpřesněji, neváhejte uvést co nejvíce informací. U fotografií je
						klíčová jejich kvalita. Všechny místnosti vyfoťte na šířku,
						zachytíte tak větší prostor. Foťte se světlem v zádech a nezapomeňte
						na chodby, společné prostory domu i okolí.
					</div>
				</div>

				<div className=' py-6 lg:py-12'>
					<div className='flex flex-col gap-6 text-left border-4 rounded-lg p-3 bg-[#F2F2F2]'>
						<div className='grid grid-cols-2 gap-6 lg:gap-12'>
							<div className='text-xl flex items-center'>Typ nemovitosti</div>

							<input
								type='text'
								name=''
								id=''
								placeholder='Byt, Dům, Pozemek,...'
								className='h-12 p-3 rounded-lg bg-gray-300 '
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>
								Adresa nemovitosti
							</div>

							<input
								type='text'
								name=''
								id=''
								placeholder='Adresa nemovitosti'
								className='bg-gray-300 h-12 p-3 rounded-lg'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>Popis nemovitosti</div>

							<input
								type='text'
								name=''
								id=''
								placeholder='Vyplňte prosím informace, jako je plocha, počet místností, pater, příslušenství, i údaje o vlastnictví, jako osobní, družstevní, omezení vlastnictví v podobě zástavy, břemena, apod.'
								className='bg-gray-300 h-36 p-3 rounded-lg'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>
								Připojit fotografie nemovitosti a jiné soubory
							</div>

							<input
								type='file'
								name=''
								id=''
								className='bg-gray-300 h-12 p-3 rounded-lg'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>Jméno a příjmení</div>

							<input
								type='text'
								name=''
								id=''
								placeholder='Jméno a příjmení'
								className='bg-gray-300 h-12 p-3 rounded-lg'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>E-mail</div>

							<input
								type='email'
								name=''
								id=''
								placeholder='E-mailová adresa'
								className='bg-gray-300 h-12 p-3 rounded-lg'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6 lg:gap-12 justify-between'>
							<div className='text-xl flex items-center'>Telefon</div>

							<input
								type='tel'
								name=''
								id=''
								placeholder='Telefonní číslo'
								className='bg-gray-300 h-12 p-3 rounded-lg'
							/>
						</div>

						<div className='items-right flex justify-end'>
							<Button>Odeslat formulář</Button>
						</div>
					</div>
				</div>
			</main>

			<Footer />
		</>
	);
}
