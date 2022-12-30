import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoPersonOutline } from 'react-icons/io5'
import { BsHeart } from 'react-icons/bs';
import { AiOutlineFile } from 'react-icons/ai';
import { CiFlag1 } from 'react-icons/ci';
import { HiOutlinePhoto } from 'react-icons/hi2';
import { GoGraph } from 'react-icons/go';
import { GrClose } from 'react-icons/gr';
import { FaBars } from 'react-icons/fa';
import profile  from '../image/profile.jpg'

const data = [
	{
		title: 'Overview',
    link: '/',
    icon:<IoPersonOutline/>
	},
	{
		title: 'Projects',
    link: '/projects',
    icon:<BsHeart/>
	},
	{
		title: 'Documents',
    link: '/documents',
    icon:<AiOutlineFile/>
	},
	{
		title: 'Progress',
    link: '/progress',
    icon:<CiFlag1/>
	},
	{
		title: 'Assets',
    link: '/assets',
    icon:<HiOutlinePhoto/>
	},
	{
		title: 'Apps',
    link: '/apps',
    icon:<GoGraph/>
	},
];

const Header = () => {
	const [navs] = useState(data)
	const [isOpen, setIsOpen] = useState(false)

	return (
		<>
			<header className='bg-none lg:bg-white shadow-lg '>
				<button
					onClick={() => setIsOpen(!isOpen)}
					className='fixed z-50 top-5 left-5 text-2xl lg:hidden'>
					{isOpen ? <GrClose /> : <FaBars />}
				</button>
				<nav className={`navbar ${isOpen && 'open'}`}>
					<div className='flex items-center justify-between p-3'>
						<h2 className='invisible lg:visible' >Client Dashboard</h2>
						<img
							src={profile}
							alt=' profile'
							className='rounded-full h-14 w-14 invisible lg:visible'
						/>
					</div>
					<hr />
					<ul className='flex flex-col lg:flex-row items-center justify-center gap-8 p-2'>
						{navs.map((nav, index) => (
							<li key={index} className='active:text-emerald-600 hover:font-bold'>
								<NavLink className='flex items-center gap-2 ' to={nav.link} onClick={()=>setIsOpen(false)}>
									{nav.icon} {nav.title}
								</NavLink>
							</li>
						))}
						<div></div>
					</ul>
				</nav>
			</header>
		</>
	);
}

export default Header
