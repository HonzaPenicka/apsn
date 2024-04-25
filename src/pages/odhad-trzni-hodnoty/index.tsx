import { Inter } from 'next/font/google';
import { Header } from '@/components/header';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { MobileHeader } from '@/components/mobileHeader';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function EstimateOfMarketValue() {
	const footerRef = useRef<HTMLDivElement>(null!);

	const handleButtonClick = () => {
		if (footerRef.current) {
			footerRef.current.scrollIntoView({ behavior: 'smooth' });
		}
	};

	{
		/*async function handleSubmit(event: Event) {
		event.preventDefault();

		const formData = new FormData(event.target);

		const form = event.target as HTMLFormElement | null;
		if (!form) {
			// Zpracování, pokud není k dispozici formulář
			return;
		}

		const formData = new FormData(form);

		const response = await fetch('/api/odhad-trzni-hodnoty', {
			method: 'post',
			body: formData,
		});
	}*/
	}

	return (
		<>
			<Header />

			<MobileHeader />

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3 mt-36'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-6 lg:gap-12 lg:px-24 text-left lg:text-center'>
						<div className='text-4xl font-bold'>
							Odhad ceny nemovitosti nebo spoluvlastnického podílu
						</div>

						<div>
							Odhad ceny nemovitosti nebo spoluvlastnického podílu online
							zdarma. Připravíme pro vás nezávaznou nabídku, stačí vyplnit
							formulář a my se vám ozveme. Můžete nás také kontaktovat na tel.
							čísle <b className='text-[#eb9b6a]'>+420 773 007 171</b> nebo
							e-mailu <b className='text-[#eb9b6a]'>info@apsn.cz</b>. Obchody
							úspěšně realizujeme ke spokojenosti našich klientů. Rádi i pro vás
							najdeme to nejlepší možné řešení.
						</div>
					</div>
				</div>
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<Button onClick={handleButtonClick} type='button'>
						Vyplňte formulář
					</Button>
				</div>
			</div>

			<main className='container mx-auto px-3 flex flex-col text-left lg:text-center gap-6 lg:gap-12'>
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

				<div className='py-6 lg:py-0'>
					<div className='pb-6 lg:pb-12 text-4xl font-bold '>
						Formulář odhadu tržní hodnoty
					</div>

					<div className='flex flex-col gap-6 text-left border-2 rounded-lg p-3 lg:p-6 bg-white lg:mx-24'>
						<div className='flex flex-col lg:grid lg:grid-cols-2 gap-6 lg:gap-12 py-3 lg:py-6'>
							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>Typ nemovitosti</div>

								<input
									type='text'
									name=''
									id=''
									placeholder='Byt, Dům, Pozemek,...'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>
									Adresa nemovitosti
								</div>

								<input
									type='text'
									name=''
									id=''
									placeholder='Adresa nemovitosti'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>
									Popis nemovitosti
								</div>

								<input
									type='text'
									name=''
									id=''
									placeholder='Vyplňte prosím informace, jako je plocha, počet místností, pater, příslušenství, i údaje o vlastnictví, jako osobní, družstevní, omezení vlastnictví v podobě zástavy, břemena, apod.'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>
									Připojit fotografie nemovitosti a jiné soubory
								</div>

								<input
									type='file'
									name=''
									id=''
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>
									Jméno a příjmení
								</div>

								<input
									type='text'
									name=''
									id=''
									placeholder='Jméno a příjmení'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>E-mail</div>

								<input
									type='email'
									name=''
									id=''
									placeholder='E-mailová adresa'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>

							<div className='flex flex-col gap-1'>
								<div className='text-xl flex items-center'>Telefon</div>

								<input
									type='tel'
									name=''
									id=''
									placeholder='Telefonní číslo'
									className='h-12 p-3 rounded-lg border-2'
								/>
							</div>
						</div>

						<div className='text-center py-3'>
							<Button type='submit'>Odeslat formulář</Button>
						</div>
					</div>
				</div>

				<div className='pt-6 lg:pt-0 text-3xl font-bold'>
					Vše Vám zdarma vysvětlíme
				</div>

				<div className='flex flex-col lg:grid gap-6 lg:gap-12 pb-6 lg:pb-12'>
					<div className='pt-6 lg:pt-0'>
						Popište nám nezávazně situaci s Vaší nemovitostí a my Vám obratem
						zašleme návrh řešení a cenovou nabídku. Představíme Vám, ja výkup
						bytu nebo domu probíhá, abyste měli přesnou představu o tom, co se
						bude dít. Jednoduše a přehledně. Stačí si přečíst recenze
						spokojených zákazníků.
					</div>

					<div>
						Čekáme na Vaši nezávaznou zprávu v{' '}
						<b className='text-[#eb9b6a]'>kontaktním formuláři</b>.
					</div>

					<div>
						<b className='text-[#eb9b6a]'>SMOUVA NA NEMOVIST - VZOR</b>
					</div>
				</div>
			</main>

			<div ref={footerRef}>
				<Footer />
			</div>
		</>
	);
}
