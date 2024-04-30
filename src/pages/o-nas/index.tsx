import { ButtonOther } from '@/components/button-other';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { MobileHeader } from '@/components/mobileHeader';
import { Inter } from 'next/font/google';
import { useRef } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function AboutUs() {
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

			<div className='py-6 lg:py-12 bg-[#F2F2F2] px-3 mt-36'>
				<div className='container mx-auto'>
					<div className='flex flex-col gap-6 lg:gap-12 lg:px-24 text-left lg:text-center'>
						<div className='text-4xl font-bold'>O nás</div>

						<div>
							V APSN jsme odhodláni poskytovat vám služby odborné správy
							nemovitostí, které maximalizují hodnotu vaší investice do
							nemovitosti. S osobním přístupem, který klade důraz na integritu,
							vynikající zákaznický servis a inovativní technologie, se
							postaráme o vše, od inkasa nájemného po údržbu a leasing. Můžete
							se spolehnout, že spravujeme vaši nemovitost efektivně a
							transparentně a zajistíme, že vaše investice bude v dobrých rukou.
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
				<div className='pt-6 lg:pt-12 text-left lg:text-center'>
					<div className='lg:px-12'>
						<div className='text-3xl font-bold'>
							APSN: Váš důvěryhodný partner ve správě majetku
						</div>

						<div className='flex flex-col lg:grid lg:grid-cols-2 text-left gap-6 lg:gap-12 lg:py-12'>
							<div className='pt-6 lg:pt-0'>
								Jsme renomovaná firma specializující se na výkup a správu
								nemovitostí, pozemků a podílů na nemovitostech. Naší prioritou
								je poskytovat našim klientům komplexní a profesionální služby,
								které usnadňují investice do realit a zajišťují jejich
								bezproblémové řízení. Díky našemu týmu odborníků a rozsáhlé
								znalosti trhu jsme schopni nabídnout řešení šitá na míru
								potřebám každého klienta. Naše úsilí je vždy zaměřeno na
								dosažení nejlepších výsledků a maximálního zhodnocení Vašich
								investic.
							</div>
							<img src='/assets/img/pics/team.jpg' alt='team' />
						</div>

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
			</main>

			<div ref={footerRef}>
				<Footer />
			</div>
		</>
	);
}
