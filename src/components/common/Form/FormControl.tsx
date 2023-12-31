import { FC, HTMLAttributes } from 'react';
import clsx from 'clsx';
import { FormControlError } from './FormControlError';

export interface FormControlProps {
	error?: string;
}

const FormControl: FC<FormControlProps & HTMLAttributes<HTMLDivElement>> = ({
	children,
	error,
	className,
	...rest
}) => {
	return (
		<>
			<div
				className={clsx('relative transition bg-gray-100 border-2', {
					className,
					'border-error': error,
					'border-transparent': !error,
				})}
				{...rest}
			>
				{children}
			</div>
			{error && <FormControlError>{error}</FormControlError>}
		</>
	);
};

export { FormControl };
