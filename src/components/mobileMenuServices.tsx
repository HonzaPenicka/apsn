import { FunctionComponent } from 'react';

export const MobileMenuServices: FunctionComponent = () => {
	return (
		<div className='flex flex-col gap-1 pb-1 text-2xl font-normal text-center px-30'>
			<a href='/odhad-trzni-hodnoty'>Odhad tržní hodnoty</a>

			<a href='/vykup-nemovitosti'>Výkup nemovitostí</a>

			<a href='/vykup-podilu'>Výkup podílů</a>

			<a href='/vykup-pozemku'>Výkup pozemků</a>
		</div>
	);
};
