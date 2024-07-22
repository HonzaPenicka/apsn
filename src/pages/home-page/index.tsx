import { useState, useRef, FC } from 'react';
import { Button } from '@/components/button';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Inter } from 'next/font/google';
import { BlackWhiteArrow } from '../../../public/assets/img/icons/black-white-arrow';
import { GrayOrangeArrow } from '../../../public/assets/img/icons/gray-orange-arrow';
import { OrangeWhiteArrow } from '../../../public/assets/img/icons/orange-white-arrow';
import { Dialog } from '@/components/dialog';

const inter = Inter({ subsets: ['latin'] });

const HomePage: FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(true);  // State to manage dialog open/close

  const handleButtonClick = () => {
    if (footerRef.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeDialog = () => {
    setIsDialogOpen(false);  // Function to close the dialog
  };

  return (
    <>
    	{/*
      <Dialog 
        isOpen={isDialogOpen} 
        onClose={closeDialog}
      />
      */}

      <Header />
      <main className="hidden lg:grid pt-36">
        <div className="flex px-12">
          <div className="bg-[#101E28] bg-fixed py-24 text-white flex flex-col gap-12 px-12">
            <h1 className="text-6xl">Profesionální správa vaší nemovitosti</h1>
            <div className="text-lg pr-36">
              Jsme renomovaná firma specializující se na výkup a správu nemovitostí, pozemků a podílů na nemovitostech. Naší prioritou je poskytovat našim klientům komplexní a profesionální služby, které usnadňují investice do realit a zajišťují jejich bezproblémové řízení. Díky našemu týmu odborníků a rozsáhlé znalosti trhu jsme schopni nabídnout řešení šitá na míru potřebám každého klienta. Naše úsilí je vždy zaměřeno na dosažení nejlepších výsledků a maximálního zhodnocení Vašich investic.
            </div>
            <div className="pt-6">
              <Button onClick={handleButtonClick}>Sjednat schůzku</Button>
            </div>
          </div>
          <img src="/assets/img/pics/balcony.jpg" alt="semi-house" className="relative z-10 translate-y-24" />
        </div>
        <div className="pt-24 pb-12 flex flex-col gap-12 px-12">
          <h2 className="text-4xl font-bold">Služby</h2>
          <div className="grid grid-cols-3 gap-12">
            <div className="bg-[#eb9b6a] rounded-lg">
              <div className="flex flex-col gap-12 p-12">
                <BlackWhiteArrow />
                <div className="text-4xl font-medium">Výkup nemovitostí</div>
                <div>Koupíme vaši nemovitost přímo, bez zprostředkování realitní kanceláře</div>
                <div>Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení kupce a dohoda o ceně a dalších podmínkách může trvat až rok. V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme přímo byty i domy, nepůsobíme jako realitní agentury, ale jako přímí kupci.</div>
                <div>Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti našich klientů. Nabízíme výkup nemovitostí s právními problémy, jako jsou:</div>
                <div>
                  <ul className="list-disc list-inside">
                    <li>Věcná břemena</li>
                    <li>Zástavy</li>
                    <li>Exekuční rozkazy</li>
                    <li>Nedostatečně identifikovaní vlastníci</li>
                    <li>Spoluvlastníci bydlící v zahraničí</li>
                    <li>Komplikované dědické spory</li>
                    <li>Spory mezi spoluvlastníky</li>
                    <li>Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých osob</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#E0E0DF] lg:mb-12 rounded-lg">
              <div className="flex flex-col gap-12 p-12">
                <OrangeWhiteArrow />
                <div className="text-4xl font-medium">Výkup podílů</div>
                <div>Koupíme vaši nemovitost přímo, bez zprostředkování realitní kanceláře</div>
                <div>Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení kupce a dohoda o ceně a dalších podmínkách může trvat až rok. V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme přímo byty i domy, nepůsobíme jako realitní agentury, ale jako přímí kupci.</div>
                <div>Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti našich klientů. Nabízíme výkup nemovitostí s právními problémy, jako jsou:</div>
                <div>
                  <ul className="list-disc list-inside">
                    <li>Věcná břemena</li>
                    <li>Zástavy</li>
                    <li>Exekuční rozkazy</li>
                    <li>Nedostatečně identifikovaní vlastníci</li>
                    <li>Spoluvlastníci bydlící v zahraničí</li>
                    <li>Komplikované dědické spory</li>
                    <li>Spory mezi spoluvlastníky</li>
                    <li>Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých osob</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#101E28] text-white lg:mb-12 rounded-lg">
              <div className="flex flex-col gap-12 p-12">
                <GrayOrangeArrow />
                <div className="text-4xl font-medium">Výkup pozemků</div>
                <div>Koupíme vaši nemovitost přímo, bez zprostředkování realitní kanceláře</div>
                <div>Proces prodeje nemovitosti může být dlouhý a složitý. Nalezení kupce a dohoda o ceně a dalších podmínkách může trvat až rok. V APSN vám nabízíme odkup nemovitosti během 24 hodin. Kupujeme přímo byty i domy, nepůsobíme jako realitní agentury, ale jako přímí kupci.</div>
                <div>Úspěšně řešíme i zdánlivě neřešitelné situace k plné spokojenosti našich klientů. Nabízíme výkup nemovitostí s právními problémy, jako jsou:</div>
                <div>
                  <ul className="list-disc list-inside">
                    <li>Věcná břemena</li>
                    <li>Zástavy</li>
                    <li>Exekuční rozkazy</li>
                    <li>Nedostatečně identifikovaní vlastníci</li>
                    <li>Spoluvlastníci bydlící v zahraničí</li>
                    <li>Komplikované dědické spory</li>
                    <li>Spory mezi spoluvlastníky</li>
                    <li>Nemovitosti ve vlastnictví nesvéprávných nebo nezletilých osob</li>
                  </ul>
                </div>
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
}

export default HomePage;
