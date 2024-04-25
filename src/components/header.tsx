import { FunctionComponent, useCallback, useState } from 'react';

import { Phone } from '../../public/assets/img/icons/phone';
import { Menu } from './menu';
import { APSNDesktop } from '../../public/assets/img/icons/apsnDesktop';

export const Header: FunctionComponent = () => {
	return (
		<div className='hidden lg:grid py-12 items-center fixed bg-white w-full top-0 z-20'>
			<div className='bg-white flex justify-between w-full container mx-auto'>
				<a href='/'>
					<APSNDesktop className='h-12' />
				</a>

				<Menu />

				<div className='flex gap-3'>
					<Phone />

					<a className='' href='tel:+420773007171'>
						+420 773 007 171
					</a>
				</div>
			</div>
		</div>
	);
};
