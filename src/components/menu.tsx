import { FunctionComponent, useCallback, useState } from 'react';

import { MenuServices } from './menuServices';

export const Menu: FunctionComponent = () => {
	const [openMenuServices, setOpenMenuServices] = useState(false);

	const toggleMenuServices = useCallback(() => {
		setOpenMenuServices((state) => !state);
	}, []);

	return (
		<>
			<div className='flex gap-6 text-lg'>
				<button
					onClick={toggleMenuServices}
					className='inline-flex hover:text-[#eb9b6a] active:text-[#eb9b6a]'
				>
					Služby
				</button>
				{openMenuServices && <MenuServices />}

				<div className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>O nás</div>

				<div className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
					Kontakty
				</div>

				<div className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
					Klienti
				</div>

				<div className='hover:text-[#eb9b6a] active:text-[#eb9b6a]'>
					Investoři
				</div>
			</div>
		</>
	);
};
