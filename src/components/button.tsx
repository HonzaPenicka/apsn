import { FunctionComponent, ReactNode, ButtonHTMLAttributes } from 'react';

interface Props {
	children?: ReactNode | string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export const Button: FunctionComponent<Props> = ({
	children,
	onClick,
	type,
}) => {
	return (
		<button
			className='bg-[#EB9B6A] text-white rounded-lg px-3 py-3 font-bold'
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
