import { FunctionComponent, useCallback, useState } from 'react';

import { Phone } from '../../public/assets/img/icons/phone';
import { Menu } from './menu';
import { APSNDesktop } from '../../public/assets/img/icons/apsnDesktop';

export const Header: FunctionComponent = () => {
	return (
		<div className='hidden lg:flex justify-between py-12 items-center container mx-auto'>
			<APSNDesktop className='h-12' />
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
