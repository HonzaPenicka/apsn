import { FunctionComponent } from 'react';

export const MenuServices: FunctionComponent = () => {
	return (
		<div className='absolute flex flex-col mt-8 w-44 gap-1 pb-1 text-lg text-left px-3'>
			<a
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				href='/odhad-trzni-hodnoty'
			>
				Odhad tržní hodnoty
			</a>

			<a
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				href='/vykup-nemovitosti'
			>
				Výkup nemovitostí
			</a>

			<a
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				href='/vykup-podilu'
			>
				Výkup podílů
			</a>

			<a
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				href='/vykup-pozemku'
			>
				Výkup pozemků
			</a>
		</div>
	);
};
