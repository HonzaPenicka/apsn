import { FunctionComponent } from 'react';

export const MobileMenuServices: FunctionComponent = () => {
	return (
		<div className='flex flex-col gap-1 pb-1 text-2xl font-normal text-center px-30 bg-white'>
			<a
				href='/vykup-nemovitosti'
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
			>
				Výkup nemovitostí
			</a>

			<a
				href='/vykup-podilu'
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
			>
				Výkup podílů
			</a>

			<a
				href='/vykup-pozemku'
				className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
			>
				Výkup pozemků
			</a>
		</div>
	);
};
