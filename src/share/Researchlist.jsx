import React from 'react'
import Progresslist from '../share/Progresslist';
import Title from '../components/Title';
import Define from '../pages/Define';

const Researchlist = () => {
	return (
		<div className='mx-2 lg:mx-0'>
			<Progresslist />
			<div className='mt-10'>
				<Title title='Research' date='Launch date: 17th July' />
				<Define />
			</div>
		</div>
	);
}

export default Researchlist
