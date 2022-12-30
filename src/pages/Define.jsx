import React, { useState } from 'react'
import { data } from '../progress'


const Define = () => {
    const [defines]=useState(data)
  return (
		<div>
		
			{defines.map((define) => (
				<div key={define.id} className='flex flex-col rounded-xl mx-1 lg:mx-0'>
					<div className='bg-white p-5 shadow-xl mb-1 '>
						<h2 className='font-bold pb-2'>{define.questionA}</h2>
						<p className=''>{define.answerA}</p>
						<h2 className='font-bold pb-2'>{define.questionB}</h2>
						<p className=''>{define.answerB}</p>
						<h2 className='font-bold pb-2'>{define.questionC}</h2>
                        <p className=''>{define.answerC}</p>
                        
						<div className='bg-white'>
							<h2 className='font-bold pb-2'>{define.questionD}</h2>
							<p>{define.answerD}</p>
							
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default Define
