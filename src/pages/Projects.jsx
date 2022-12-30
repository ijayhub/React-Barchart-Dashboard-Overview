import React from 'react'
import overview from '../image/overview.png'

const Projects = () => {
	return (
		<div className='max-width pt-10 '>
			<h2 className='project-title'>
				Project Overview
			</h2>
			<div className='project-container'>
				<div className='p-6 bg-white leading-loose mx-5 lg:mx-0'>
					<h4 className='mb-10 lg:text-lg'>Hi, Beauty</h4>
					<p>
						Welcome beauty to the right you will see a preview of your
						dashboard, kindly take some time to study it. submit your thought
						via the chat.
					</p>
					<p className='mt-5'>
						You are always welcome to check in for updates.
					</p>
				</div>
				<div className=' bg-white rounded-lg shadow-md p-8 lg:col-span-2 mx-5 lg:mx-0'>
					<a href='/'>
						<img class='rounded-t-lg' src={overview} alt='overview' />
					</a>
				</div>
			</div>
		</div>
	);
}

export default Projects
