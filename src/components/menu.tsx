import { FunctionComponent } from 'react';

export const Menu: FunctionComponent = () => {
	return (
		<div className='flex gap-6'>
			<div>Služby</div>
			<div>O nás</div>
			<div>Kontakty</div>
			<div>Klienti</div>
			<div>Investoři</div>
		</div>
	);
};
