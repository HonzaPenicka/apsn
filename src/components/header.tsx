import { FunctionComponent } from 'react';

import { Phone } from '../../public/assets/img/icons/phone';
import { Menu } from './menu';
import { APSNDesktop } from '../../public/assets/img/icons/apsnDesktop';

export const Header: FunctionComponent = () => {
	return (
		<div className='hidden lg:grid grid-cols-3 p-16 items-center place-items-center'>
			<APSNDesktop />
			<Menu />
			<div className='flex gap-3'>
				<Phone />
				<a className='' href='tel:+420111222333'>
					+420 111 222 333
				</a>
			</div>
		</div>
	);
};
