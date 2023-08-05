"use client"
import { NavLink } from './NavLink';
import { Button } from '../Buttons/Button';
import { FC, useEffect, useRef, useState } from 'react';
import { NavItem } from './NavItem';
import { Toggler } from './Toggler';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import { scrollIntoView } from '@/helpers/ScrollIntoView';

interface Props {
}

const Navbar: FC<Props> = () => {
	const navRef = useRef<HTMLElement>(null);
	const [showMenu, setShowMenu] = useState(false);
	useEffect(() => {
		const scrollHandler = () => {
			if (!navRef.current) {
				return;
			}
			// const navHeight = navRef.current.offsetHeight;
			// if (window.pageYOffset > navHeight) {
			// 	navRef.current.classList.add('bg-white', 'shadow-sm');
			// } else {
			// 	navRef.current.classList.remove('bg-white', 'shadow-sm');
			// }
		};
		scrollHandler();
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	return (
		<header ref={navRef} className="fixed top-0 left-0 z-10 w-full h-22 transition py-3 bg-white shadow-sm">
			<motion.div
				className="container flex items-center justify-between"
				initial={{
					y: -40,
					opacity: 0,
				}}
				animate={{
					y: 0,
					opacity: 1,
				}}
				transition={{
					duration: 0.5,
					ease: 'easeOut',
				}}
			>
				{/* <Logo /> */}
                <img
                    src="/logo.png"
                    alt="Logo"
                    className=" ml-5 w-12 h-12 object-contain"
                />
				<ul
					className={clsx(
						'absolute left-0 flex flex-col items-center w-full text-black  top-16 h-nav bg-body-bg',
						'lg:static lg:flex-row lg:w-auto lg:h-auto',
						{
							'bg-transparent pointer-events-none lg:pointer-events-auto': !showMenu,
						},
                        
						{
							'bg-white': showMenu,
						},
					)}
				>
					<NavItem showMenu={showMenu}>
						<NavLink to="about">About</NavLink>
					</NavItem>
					<NavItem showMenu={showMenu} className="delay-150">
						<NavLink to="skills">Skills</NavLink>
					</NavItem>
					<NavItem showMenu={showMenu} className="delay-75">
						<NavLink to="projects">Projects</NavLink>
					</NavItem>
					<NavItem showMenu={showMenu} className="delay-200">
						<Button onClick={() => scrollIntoView('contact')}>Contact me</Button>
					</NavItem>
				</ul>
				<Toggler showMenu={showMenu} setShowMenu={() => setShowMenu(!showMenu)} />
			</motion.div>
		</header>
	);
};

export default Navbar;
