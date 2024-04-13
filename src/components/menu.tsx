import { FunctionComponent } from 'react';

export const Menu: FunctionComponent = () => {
	return (
		<div className='flex gap-6'>
			<div>Odhad tržní hodnoty</div>
			<div>Výkup nemovitostí</div>
			<div>Výkup podílů</div>
			<div>Výkup pozemků</div>
			<div>O nás</div>
			<div>Kontakty</div>
			<div>Klienti</div>
			<div>Investoři</div>
		</div>
	);
};
