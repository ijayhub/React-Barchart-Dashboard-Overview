import React, { useState, useEffect} from 'react'
import Photolist from '../share/Photolist';

const Assets = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(
			`https://api.unsplash.com/photos?client_id=${import.meta.env.VITE_API_KEY}`
		)
			.then((res) => {
				return res.json();
			})
			.then((data) => {
				setPhotos(data)
			});

  },[])
  return (
    <div>
      <Photolist photos={photos} title="Assets" />
    </div>
  )
}

export default Assets
