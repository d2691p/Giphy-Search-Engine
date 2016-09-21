import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import GifDetail from './components/gif_detail';
import NavBar from './components/navbar';
import VoteButtons from './components/vote_buttons';
import request from 'superagent';

const API_KEY = "&api_key=dc6zaTOxFJmzC";
const ROOT_URL = "http://api.giphy.com/v1/gifs/search?q=";

//Create a component to produce some HTML
// Class based component is used when we need a concept of STATE
// Functional based component when we have a simple component that takes values and returns JSX
class App extends Component {
	//Initiates state
	constructor(props){
		super(props);

		//Start as an empty array of gifs
		this.state = { 
			gifs: [], 
			currentGif: null
		};

		//Tell App gifSearch this is bound to App, not onSearchTermChange
		this.gifSearch = this.gifSearch.bind(this);
	}


	gifSearch(searchTerm) {
		//searchTerm cannot have spaces - requires '+'
		const term = searchTerm.replace(/\s/g, '+');
		
		const url = `${ROOT_URL}${term}${API_KEY}`;

		request.get(url, (err, res) => {
	      	this.setState({ gifs: res.body.data , currentGif: res.body.data[0]});
	    });
	}

	//Passing prop videos to GifList
	render() {

		//onSearchTermChange will now be available as this.props
		return (
			<div>
				<div>
					<NavBar />
				</div>
				<div className="container">
					<div className="row">
						<SearchBar onSearchTermChange={searchTerm => this.gifSearch(searchTerm)} />
						<GifDetail liveGif={this.state.currentGif}/>
						<VoteButtons />
						<GifList 
							gifs={this.state.gifs} 
							onGifSelect={currentGif => this.setState({currentGif})} />
					</div>
				</div>
			</div>
		);
	}
}

//Put generated HTML onto page
ReactDOM.render(<App />, document.querySelector('#app'));
