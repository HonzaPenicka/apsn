import { FunctionComponent, ReactNode } from 'react';

interface Props {
	children?: ReactNode | string;
	onClick?: () => void;
	type?: 'button' | 'submit' | 'reset';
}

export const ButtonOther: FunctionComponent<Props> = ({
	children,
	onClick,
	type,
}) => {
	return (
		<button
			className='bg-[#6aeb9b] text-white rounded-lg px-3 py-3 font-bold'
			onClick={onClick}
			type={type}
		>
			{children}
		</button>
	);
};
