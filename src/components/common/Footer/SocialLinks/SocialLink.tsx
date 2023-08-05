import { AnchorHTMLAttributes, FC } from 'react';
import clsx from 'clsx';

const SocialLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({ children, className, ...rest }) => {
	return (
		<a
			className={clsx(
				'hover:text-primary transition-all duration-[0.5s] ease-[ease-in-out] delay-[0s] ',
				className,
			)}
			{...rest}
		>
			{children}
		</a>
	);
};

export { SocialLink };
