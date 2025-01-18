import { AnchorHTMLAttributes, FC } from "react";
import clsx from "clsx";

const SocialLink: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <a
      className={clsx(
        "hover:text-primary text-gray-600 transition-all duration-300 ease-in-out",
        className
      )}
      {...rest}
    >
      {children}
    </a>
  );
};

export { SocialLink };
