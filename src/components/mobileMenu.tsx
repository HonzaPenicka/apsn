import { FunctionComponent, useCallback, useState } from 'react';

import { MobileMenuServices } from './mobileMenuServices';

export const MobileMenu: FunctionComponent = () => {
	const [openMobileServices, setOpenMobileServices] = useState(false);

	const toggleMobileServices = useCallback(() => {
		setOpenMobileServices((state) => !state);
	}, []);
	return (
		<nav>
			<div className='fixed flex flex-col gap-1 pt-3 pb-6 text-2xl font-bold text-center px-30 bg-white w-full'>
				<a href='/' className='hover:text-[#eb9b6a] active:text-[#eb9b6a] pt-1'>
					Domů
				</a>

				<a href='/o-nas' className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
					O nás
				</a>

				<a
					href='/kontakt'
					className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				>
					Kontakt
				</a>

				<a
					href='/odhad-trzni-hodnoty'
					className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				>
					Odhad tržní hodnoty
				</a>

				<button
					onClick={toggleMobileServices}
					className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				>
					Výkup
				</button>
				{openMobileServices && <MobileMenuServices />}
			</div>
		</nav>
	);
};
