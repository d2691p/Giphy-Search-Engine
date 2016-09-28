import React, {Component} from 'react';

//Class based componeont MUST have a render function that returns some JSX
//Functional based component - less functionality than a class
class SearchBar extends Component {
	constructor(props){
		//References parent method with super
		super(props);

		//Initialises state, with properties we want to record
		//State is a plain javascript object on a component
		this.state = { searchTerm: '' };
	}

	onInputChange(searchTerm){
		this.setState({searchTerm});		//Update state with search term
		this.props.onSearchTermChange(searchTerm);
	}

	render() {
		return (
			//Setting the state based on an event (text input), re-renders every new input
			//<input onChange={event => this.setState({searchTerm: event.target.value})}/>
			//{this.state.searchTerm} //Get value of the state
		
			<div className="search-bar col-lg-12">
				<input 
					value={this.state.searchTerm}
					onChange={event => this.onInputChange(event.target.value)} 
					placeholder="Search"
				/>	
			</div>
		);
	}
}

export default SearchBar;