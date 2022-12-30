import React from 'react';
import Title from '../components/Title';
import Progresslist from '../share/Progresslist';
import Define from './Define';


const Progress = () => {
	
	
	return (
		<div className='max-width py-16 '>
			<h1 className='mb-5 lg:text-3xl my-10 mx-3 lg:mx-0'>Progress</h1>
			<Progresslist />
			<div className='mt-10  mx-5 lg:mx-0'>
				<Title title='Define' date='Launch date: 17th July' />
				<Define />
			</div>
		</div>
	);
};

export default Progress;
