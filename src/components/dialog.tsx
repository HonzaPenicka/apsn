import { useState, FC } from 'react';
import { Button } from '@/components/button';
import Link from 'next/link';
import { ButtonOther } from './button-other';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Dialog: FC<DialogProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full text-center">
        <h2 className="text-2xl mb-4"><strong>Vítejte na webové stránce společnosti APSN!</strong></h2>
        <p className="mb-8"><strong>Získejte nemovitosti za 60-70% tržní hodnoty!</strong><br /><br /> Pokud Vás tato příležitost zajímá, klikněte na tlačítko "<strong>mám zájem</strong>" a vyplňte náš kontaktní formulář.</p>
        <div className="flex justify-center gap-4">
            <Button onClick={onClose}>Zavřít</Button>

            <Link href="/kontakt" passHref>
                <ButtonOther>Mám zájem</ButtonOther>
            </Link>

        </div>
      </div>
    </div>
  );
};
