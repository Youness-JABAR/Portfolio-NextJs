import { scrollIntoView } from '@/helpers/ScrollIntoView';
import clsx from 'clsx';
// import { scrollIntoView } from 'helpers/scrollToView';
import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick'> {
	to: string;
}

const NavLink: FC<Props> = ({ children, to, className, ...rest }) => {
	return (
		<button
			type="button"
			onClick={() => scrollIntoView(to)}
			className={clsx('w-full h-full text-md font-medium transition lg:pr-6 hover:text-primary', className)}
			data-to={to}
			{...rest}
		>
			{children}
		</button>
	);
};

export { NavLink };
