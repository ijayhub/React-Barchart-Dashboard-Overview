import React from 'react'

const Photolist = ({photos, title}) => {
	return (
		<section className="max-width ">
			<div>
				<h2 className="lg:text-3xl hover:text-emerald-400 lg:my-10 marginTop md:mb-10 text-lg mx-3">{title}</h2>
			</div>
			<div className='grid gap-10 max-width grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
			{photos.map((photo) => (
				<div key={photo.id} className='bg-white rounded-xl shadow-2xl mx-2'>
					<img
						src={photo.urls.full}
						alt={photo.alt_description}
						lazy='loading'
						className='h-52 w-full object-cover'
					/>
					<div className='flex mt-6 items-center p-3 '>
						<img
							src={photo.user.profile_image.large}
							alt='{photo.alt_description}'
							lazy='loading'
							className='w-20 rounded-full'
						/>
						<h2 className='font-bold ml-6 lg:text-2xl text-emerald-800'>{photo.user.name}</h2>
                    </div>
                    
				</div>
			))}
		</div>
	</section>
	);
}

export default Photolist
