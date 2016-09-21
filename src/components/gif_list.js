import React from 'react'
import GifItem from './gif_list_item';

//Props passed as videos from parent (index.js)
//Loop through all of the returned gifs and display them in a UL
//Stateless functional component
const GifList = (props) => {
	const gifItems = props.gifs.map(function(image){
		return (
			<GifItem key={image.id}	gif={image}	onGifSelect={props.onGifSelect}/>
		);
	});

	return (
		<div id="gif-list" className="col-lg-4">
			{gifItems}
		</div>
	);
};

export default GifList;