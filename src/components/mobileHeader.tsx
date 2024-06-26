import { FunctionComponent, useCallback, useState } from 'react';

import { APSNMobile } from '../../public/assets/img/icons/apsnMobile';
import { BurgerMenu } from '../../public/assets/img/icons/burger-menu';
import { Mail } from '../../public/assets/img/icons/mail';
import { Phone } from '../../public/assets/img/icons/phone';
import { MobileMenu } from './mobileMenu';

export const MobileHeader: FunctionComponent = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);

	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);
	return (
		<div className='lg:hidden grid fixed top-0 w-full z-10'>
			<div className='flex justify-between py-3 bg-white'>
				<div className='flex gap-3 px-3'>
					<Mail />

					<a href='mailto:info@apsn.cz'>info@apsn.cz</a>
				</div>

				<div className='flex gap-3 px-3'>
					<Phone />

					<a href='tel:+420773007171'>tel:+420 773 007 171</a>
				</div>
			</div>

			<div className='bg-black px-3'>
				<div className='container mx-auto flex justify-between items-center py-3'>
					<a href='/'>
						<APSNMobile className='h-9 items-center justify-center pl-1' />
					</a>

					<button onClick={toggleMobileMenu}>
						<BurgerMenu />
					</button>
				</div>
			</div>
			{openMobileMenu && <MobileMenu />}
		</div>
	);
};
