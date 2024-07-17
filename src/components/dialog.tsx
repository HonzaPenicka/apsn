import { useState } from 'react';
import { Button } from '@/components/button';
import Link from 'next/link';
import { ButtonOther } from './button-other';

const Dialog: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
      <h2 className="text-2xl mb-4"><b>Vítejte na webové stránce společnosti APSN!</b></h2>
      <p className="mb-8"><b>Získejte nemovitosti za 60-70% tržní hodnoty!</b><br /><br /> Pokud Vás tato příležitost zajímá, klikněte na tlačítko "<b>mám zájem</b>" a vyplňte náš kontaktní formulář.</p>
        <div className="flex justify-center gap-4">
          <Button onClick={handleClose}>Zavřít</Button>
          <Link href="/kontakt">
            <ButtonOther>Mám zájem</ButtonOther>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
