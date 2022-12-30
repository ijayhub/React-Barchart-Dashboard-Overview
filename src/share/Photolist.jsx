import React from 'react'

const Photolist = ({photos, title}) => {
	return (
		<section className="max-width ">
			<div>
				<h1 className="asset-title">{title}</h1>
			</div>
			<div className='asset-container'>
			{photos.map((photo) => (
				<div key={photo.id} className='asset-subcontainer'>
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
						<h2 className='asset-user'>{photo.user.name}</h2>
                    </div>
                    
				</div>
			))}
		</div>
	</section>
	);
}

export default Photolist
