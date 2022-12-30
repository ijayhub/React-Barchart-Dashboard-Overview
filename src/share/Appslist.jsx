import React from 'react';


const Appslist = ({ apps, title }) => {
	return (
		<div className='max-width pt-10'>
			<h2 className='app-title'>{title}</h2>
			<div className='apps'>
				{apps.map((app) => (
					<a href={app.link} target='_self' key={app.id}>
						<div className='flex items-center p-5'>
							<div className='border-red-600 gap-3'>{app.icon}</div>
							<div className='ml-6 '>
								<h2>{app.title}</h2>
								<p>{app.paragraph}</p>
							</div>
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Appslist;
