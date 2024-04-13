import { FunctionComponent, ReactNode } from 'react';

interface Props {
	children?: ReactNode | string;
}

export const Button: FunctionComponent<Props> = ({ children }) => {
	return (
		<button className='bg-[#EB9B6A] text-white rounded-lg px-3 py-2 font-bold'>
			{children}
		</button>
	);
};
