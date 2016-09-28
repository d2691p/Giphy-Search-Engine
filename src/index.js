import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import GifList from './components/gif_list';
import GifDetail from './components/gif_detail';
import VoteButtons from './components/vote_buttons';
import request from 'superagent';

const API_KEY = "dc6zaTOxFJmzC";
const ROOT_URL = "http://api.giphy.com/v1/gifs/search?q=";
const RANDOM_URL = "http://api.giphy.com/v1/gifs/random?";
const TRENDING_URL = "http://api.giphy.com/v1/gifs/trending?";

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
		this.randomGif = this.randomGif.bind(this);
		this.trendingGif = this.trendingGif.bind(this);
	}


	gifSearch(searchTerm) {
		//searchTerm cannot have spaces - requires '+'
		const term = searchTerm.replace(/\s/g, '+');
		
		const url = `${ROOT_URL}${term}&api_key=${API_KEY}`;

		request.get(url, (err, res) => {
	      	this.setState({ gifs: res.body.data , currentGif: res.body.data[0].images.downsized.url});
	    });
	}

	randomGif(){
		const url = `${RANDOM_URL}api_key=${API_KEY}`;
		request.get(url, (err, res) => {
	      	this.setState({gifs: [], currentGif: res.body.data.image_url});
	    });

	}

	trendingGif(){
		const url = `${TRENDING_URL}api_key=${API_KEY}`;
		request.get(url, (err, res) => {
	      	this.setState({gifs: res.body.data});
	    });
	}

	//Passing prop videos to GifList
	render() {
		return (
			
			<div className="container">
				<div className="row">
					<div class="btn-group">
						<button type="button" className="btn btn-primary" onClick={this.randomGif}>Random</button>
						<button type="button" className="btn btn-primary" onClick={this.trendingGif}>Trending</button>
					</div>

					<SearchBar onSearchTermChange={searchTerm => this.gifSearch(searchTerm)} />

					<GifDetail liveGif={this.state.currentGif}/>
					
					<GifList 
						gifs={this.state.gifs} 
						onGifSelect={currentGif => this.setState({currentGif})} />
				</div>
			</div>
			
		);
	}
}

//Put generated HTML onto page
ReactDOM.render(<App />, document.querySelector('#app'));
