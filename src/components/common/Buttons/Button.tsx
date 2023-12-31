import { ButtonHTMLAttributes, FC } from 'react';
import { ButtonStyle, ButtonStyleProps } from './ButtonStyle';

export type ButtonProps = ButtonStyleProps & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, isLoading, disabled, ...buttonProps }) => {
	return (
		<button {...buttonProps} disabled={disabled || isLoading}>
			<ButtonStyle isLoading={isLoading}>{children} </ButtonStyle>
		</button>
	);
};


export { Button };
