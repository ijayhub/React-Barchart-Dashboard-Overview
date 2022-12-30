import React, { useState } from 'react'
import Appslist from '../share/Appslist'
import { IoBusinessOutline } from 'react-icons/io5';
import { FaHotjar } from 'react-icons/fa';
import { SiNamecheap } from 'react-icons/si';
import { AiOutlineSlack } from 'react-icons/ai';



const App = () => {
  const [apps] = useState([
		{
			id: 1,
			icon: <IoBusinessOutline className='text-red-800' />,
			title: 'Business Analytics',
			paragraph: 'All in one company analytics',
			link: 'https://analytics.google.com/analytics/web/provision/#/provision',
		},
		{
			id: 2,
			icon: <FaHotjar className='text-red-800' />,
			title: 'Hot Jar',
			paragraph: 'The visual way to understand your users',
			link: 'https://www.hotjar.com/',
		},
		{
			id: 3,
			icon: <SiNamecheap className='text-red-800' />,
			title: 'NameCheap',
			paragraph: 'Domain mangement and hoisting',
			link: 'https://www.namecheap.com/',
		},
		{
			id: 4,
			icon: <AiOutlineSlack className='text-red-800' />,
			title: 'Chat',
			paragraph: 'Custom support using modern messaging',
			link: 'https://slack.com/',
		},
	]);
	return (
		<div className='max-width'> 
			<Appslist apps={apps} title='Apps' />
			<div className='lg:w-2/4'>
				<Appslist apps={apps.filter((app) => app.id === 4)} title='General' />
			</div>
		</div>
	);
}

export default App
