import React, {Component} from 'react';

class VoteButtons extends Component{
	render(){
		return (
			<div className="row">
				<div className="col-lg-6">
					<a href="#" className="btn btn-block btn-lg btn-success pull-right">Like</a>			
				</div>
				<div className="col-lg-6">
					<a href="#" className="btn btn-block btn-lg btn-danger pull-left">Dislike</a>			
				</div>
			</div>
		);
	}
}

export default VoteButtons;