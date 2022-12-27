import React, { useState } from 'react'
import Appslist from '../share/Appslist'
import { IoAnalyticsOutline } from 'react-icons/io5';
import { FaHotjar } from 'react-icons/fa';
import { SiNamecheap } from 'react-icons/si';
import { BsChatLeftText } from "react-icons/bs";



const App = () => {
  const [apps] = useState([
		{
			id: 1,
			icon: <IoAnalyticsOutline className='text-red-800' />,
			title: 'Google Analytics',
			paragraph: 'All in one site analytics',
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
			icon: <BsChatLeftText className='text-red-800' />,
			title: 'Chat',
			paragraph: 'Custom support using modern messaging',
			link: 'https://twitter.com/',
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
