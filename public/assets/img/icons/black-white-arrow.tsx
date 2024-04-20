import { FunctionComponent } from 'react';

export const BlackWhiteArrow: FunctionComponent<any> = (props) => (
	<svg
		width='50'
		height='50'
		viewBox='0 0 70 70'
		fill='none'
		version='1.1'
		id='svg1'
		xmlns='http://www.w3.org/2000/svg'
		{...props}
	>
		<defs id='defs1' />
		<circle cx='35' cy='35' r='35' fill='#101e28' id='circle1' />
		<path
			d='M 29.7484,22 24,27.0153 33.5806,35.3742 24,43.7331 29.7484,48.7485 45.0773,35.3742 Z'
			fill='#ffffff'
			id='path1'
		/>
	</svg>
);
