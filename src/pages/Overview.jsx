import React from 'react'
import {
	AiOutlineCreditCard,
	AiOutlineArrowUp,
	AiOutlineCalendar,
} from 'react-icons/ai';
import Chart from '../components/Chart';

const Overview = () => {
	return (
		<section className='max-width py-10'>
			<h1 className='mx-2 lg:mx-0'>Welcome Back, Beauty</h1>
			<div className='overview-card'>
				<article className='bg-white rounded-xl shadow-lg  p-4'>
					<button className='bg-emerald-100 rounded-full p-2'>
						<AiOutlineCreditCard className='text-emerald-400' />
					</button>
					<h2 className='lg:text-3xl mt-6 mb-4'>$50,000</h2>
					<p>Starting Budget</p>
				</article>
				<article className='bg-white rounded-xl shadow-lg  p-4'>
					<button className='bg-pink-100 rounded-full p-2'>
						<AiOutlineArrowUp className='text-pink-400' />
					</button>
					<h2 className='lg:text-3xl mt-6 mb-4'>$30,000</h2>
					<p>Total spend</p>
				</article>
				<article className='bg-white rounded-xl shadow-lg  p-4'>
					<button className='bg-blue-100 rounded-full p-2'>
						<AiOutlineCalendar className='text-blue-400' />
					</button>
					<h2 className='lg:text-3xl mt-6 mb-4'>22nd Dec 2022</h2>
					<p>Book Launch</p>
				</article>
			</div>
			<div className='mt-20 p-6 shadow-2xl bg-white rounded  mx-3 lg:mx-0'>
				<Chart />
			</div>
		</section>
	);
}

export default Overview
