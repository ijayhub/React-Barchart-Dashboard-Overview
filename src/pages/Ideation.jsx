import React from 'react'
import Ideationlist from '../share/Ideationlist';

const Ideation = () => {
  return (
		<div>
			<div className='max-width py-16'>
				<h1 className='mb-5 mx-2 lg:mx-0 lg:text-3xl'>
					Ideation
				</h1>
				<Ideationlist />
			</div>
		</div>
	);
}

export default Ideation
