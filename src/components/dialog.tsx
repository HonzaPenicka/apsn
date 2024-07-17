import { FC } from 'react';
import { Button } from '@/components/button';

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  onContact: () => void;
}

const Dialog: FC<DialogProps> = ({ isOpen, onClose, onContact }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
        <div className="text-center mb-4">
        <h2 className="text-2xl mb-4"><b>Vítejte na webové stránce společnosti APSN!</b></h2>
        <p className="mb-8"><b>Získejte nemovitosti za 60-70% tržní hodnoty!</b><br /><br /> Pokud Vás tato příležitost zajímá, klikněte na tlačítko "mám zájem" a vyplňte náš kontaktní formulář.</p>
        </div>
        <div className="flex justify-around gap-4">
          <Button onClick={onClose} className="bg-red-500 text-white">Zavřít</Button>
          <ButtonOther onClick={onContact} className="bg-blue-500 text-white">Mám zájem</ButtonOther>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
