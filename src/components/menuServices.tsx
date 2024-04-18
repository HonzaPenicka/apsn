import { FunctionComponent } from 'react';

export const MenuServices: FunctionComponent = () => {
	return (
		<div className='absolute flex flex-col w-48 gap-3 py-3 text-lg text-left px-3 bg-white z-10 rounded-b-lg'>
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
