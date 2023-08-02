"use client"
import React from 'react';

import Envelope from '@/assets/icons/envelope.svg';
import Github from '@/assets/icons/social-media/Github.svg';
import LinkedIn from '@/assets/icons/social-media/Linkedin.svg';
export interface SocialLink {
	destination: string;
	title: string;
	icon: React.ReactNode;
}

export const socialLinks: SocialLink[] = [
	{
		destination: 'https://github.com/Youness-JABAR',
		title: 'Github',
		icon: <Github className='w-10 h-10  sm:w-8 sm:h-8'/>,
	},
	{
		destination: 'mailto:youness.jabar.pro@gmail.com',
		title: 'Mail',
		icon: <Envelope className='w-10 h-10  sm:w-8 sm:h-8' />,
	},
	{
		destination: 'https://www.linkedin.com/in/youness-jabar-b224841a3/',
		title: 'LinkedIn',
		icon: <LinkedIn className='w-10 h-10  sm:w-8 sm:h-8' />,
	},
];
