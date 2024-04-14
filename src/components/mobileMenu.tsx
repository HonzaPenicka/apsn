import { FunctionComponent, useCallback, useState } from 'react';

import { MobileMenuServices } from './mobileMenuServices';

export const MobileMenu: FunctionComponent = () => {
	const [openMobileServices, setOpenMobileServices] = useState(false);

	const toggleMobileServices = useCallback(() => {
		setOpenMobileServices((state) => !state);
	}, []);
	return (
		<nav>
			<div className='fixed flex flex-col gap-1 pb-3 text-2xl font-bold text-center px-30 bg-white w-full'>
				<a href='/' className='pt-1'>
					Domů
				</a>

				<button onClick={toggleMobileServices}>Služby</button>
				{openMobileServices && <MobileMenuServices />}

				<a href='/about'>O nás</a>

				<a href='/contact'>Kontakt</a>

				<a href='/client'>Klient</a>

				<a href='/investor'>Investor</a>
			</div>
		</nav>
	);
};
