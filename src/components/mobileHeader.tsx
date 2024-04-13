import { FunctionComponent, useCallback, useState } from 'react';

import { Phone } from '../../public/assets/img/icons/phone';
import { Mail } from '../../public/assets/img/icons/mail';
import { BurgerMenu } from '../../public/assets/img/icons/burger-menu';
import { APSNMobile } from '../../public/assets/img/icons/apsnMobile';
import { MobileMenu } from './mobileMenu';

export const MobileHeader: FunctionComponent = () => {
	const [openMobileMenu, setOpenMobileMenu] = useState(false);
	const toggleMobileMenu = useCallback(() => {
		setOpenMobileMenu((state) => !state);
	}, []);
	return (
		<div className='lg:hidden grid'>
			<div className='flex justify-between py-3'>
				<div className='flex gap-3 px-3'>
					<Mail />

					<a href='mailto:info@apsn.cz'>info@apsn.cz</a>
				</div>

				<div className='flex gap-3 px-3'>
					<Phone />

					<a href='tel:+420111222333'>+420 111 222 333</a>
				</div>
			</div>

			<div className='bg-black flex justify-between items-center py-0.5'>
				<APSNMobile className='h-9 items-center justify-center pl-1' />

				<button onClick={toggleMobileMenu}>
					<BurgerMenu />
				</button>
			</div>
			{openMobileMenu && <MobileMenu />}
		</div>
	);
};
