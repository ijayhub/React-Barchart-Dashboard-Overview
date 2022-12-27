import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
const data = [
	{
		id: 1,
		title: 'Define',
		link: '/progress',
	},
	{
		id: 2,
		title: 'Research',
		link: '/research',
	},
	{
		id: 3,
		title: 'Ideation',
		link: '/ideation',
	},
	{
		id: 4,
		title: 'Prototyping',
		link: '/prototyping',
	},
	{
		id: 5,
		title: 'Testing',
		link: '/testing',
	},
];


const Progresslist = () => {
	const [progressNavs] = useState(data);
	return (
		<div>
			<ul className='ul'>
				{progressNavs.map((progressNav,index) => (
					<li key={progressNav.id} className='li'>
						<NavLink to={progressNav.link}
							className='flex items-center gap-2 '
							>
							<div className='shadow-2xl'>{progressNav.title}</div>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Progresslist
