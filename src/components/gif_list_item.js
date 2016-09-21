import React from 'react';

//GifListItem is passed props from GifList
const GifListItem = (props) => {
	const gif = props.gif;
	const gifUrl = props.gif.images.downsized.url;
	const onGifSelect = props.onGifSelect;
	
	return (
		 	 <a className="single-gif">
		 	 	<img onClick={() => onGifSelect(gif)} src={gifUrl} />
			</a>
	);
};

export default GifListItem;