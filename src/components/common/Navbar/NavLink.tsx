import { scrollIntoView } from "@/helpers/ScrollIntoView";
import clsx from "clsx";
import { ButtonHTMLAttributes, FC, useEffect, useState } from "react";

interface Props
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "type" | "onClick"> {
  to: string; // Section ID to scroll to
  activeClassName?: string; // Class applied when the link is active
}

const NavLink: FC<Props> = ({
  children,
  to,
  className,
  activeClassName,
  ...rest
}) => {
  const [isActive, setIsActive] = useState(false);

  // Update `isActive` when scrolling
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(to);
      if (section) {
        const { top, bottom } = section.getBoundingClientRect();
        // Check if the section is in the viewport
        const isInView =
          top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2;
        setIsActive(isInView);
      }
    };

    handleScroll(); // Run on component mount
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [to]);

  return (
    <button
      type="button"
      onClick={() => scrollIntoView(to)}
      className={clsx(
        "w-full h-full text-md font-medium transition lg:pr-6 hover:text-primary",
        className,
        { [activeClassName || "text-primary font-bold"]: isActive }
      )}
      aria-label={`Scroll to ${to}`}
      data-to={to}
      {...rest}
    >
      {children}
    </button>
  );
};

export { NavLink };
