import React from 'react';

const GifDetail = (props) => {
	
	if(!props.liveGif){
		return <div></div>;
	}

	const gifUrl = props.liveGif.images.downsized.url;
	
	return(
		<div className="col-lg-12">
			<img id="current-gif" src={gifUrl} />
		</div>
	)
}

export default GifDetail;