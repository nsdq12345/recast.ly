// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from './data/exampleVideoData.js';
import searchYouTube from './lib/searchYouTube.js';
import YOUTUBE_API_KEY from './config/youtube.js';

// searchYouTube({query: 'react tutorial', key: YOUTUBE_API_KEY, max: 2}, function(searchResults) {ReactDOM.render(<App searchYouTube={searchResults} video={searchResults[0]}/>, document.getElementById('app'));});

ReactDOM.render(<App searchYouTube={searchYouTube}/>, document.getElementById('app'));