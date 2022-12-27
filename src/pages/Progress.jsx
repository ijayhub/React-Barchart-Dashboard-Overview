import React from 'react';
import Title from '../components/Title';
import Progresslist from '../share/Progresslist';
import Define from './Define';


const Progress = () => {
	
	
	return (
		<div className='max-width py-16 '>
			<h2 className='mb-5'>Progess</h2>
			<Progresslist/>
			<div className='mt-10'>
				<Title title='Define' date='Launch date: 17th July' />
				<Define />
			</div>
		</div>
	);
};

export default Progress;
