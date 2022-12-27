import React from 'react'
import Progresslist from '../share/Progresslist';
import Title from '../components/Title';
import Define from '../pages/Define';


const Ideationlist = () => {
    return (
		<div>
			<Progresslist />
			<div className='mt-10'>
				<Title title='Ideation' date='Launch date: 17th July' />
				<Define />
			</div>
		</div>
	);
}

export default Ideationlist
