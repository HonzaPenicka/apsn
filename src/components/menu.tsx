import { FunctionComponent, useCallback, useState } from 'react';

import { MenuServices } from './menuServices';

export const Menu: FunctionComponent = () => {
	const [openMenuServices, setOpenMenuServices] = useState(false);

	const toggleMenuServices = useCallback(() => {
		setOpenMenuServices((state) => !state);
	}, []);

	return (
		<>
			<nav className='flex gap-6 text-lg'>
				<a href='/' className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
					Domů
				</a>

				<a href='o-nas' className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
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

				<div>
					<button
						onClick={toggleMenuServices}
						className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'
					>
						Výkup
					</button>
					<div className='relative'>{openMenuServices && <MenuServices />}</div>
				</div>
			</nav>
		</>
	);
};
