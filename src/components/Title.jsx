import React, { useState } from 'react'
let title = ""
let date = ""
const Title = ({title, date}) => {
    return (
		<div>
			<div className='mb-5 bg-white shadow-lg w-2/4 p-4 rounded-lg'>
				<h2>{title}</h2>
				<p>{date}</p>
			</div>
		</div>
	);
}

export default Title
