import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from './../lib/searchYouTube.js';
import YOUTUBE_API_KEY from './../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      currentVideo : {id: {videoId: '4ZAEBxGipoA'}, snippet: {thumbnails: {default: {url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg'}}, description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...', title: 'XReact JS Tutorial for Beginners - 1 - Introduction'}},
      currentVideoList : [{id: {videoId: ''}, snippet: {thumbnails: {default: {url: ''}}, description: '', title: ''}}]
    };

    this.setVideo = this.setVideo.bind(this);
    this.setInitialVideoList = this.setInitialVideoList.bind(this);
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'react tutorial', key: YOUTUBE_API_KEY, max: 5}, this.setInitialVideoList);
  }

  setInitialVideoList(searchResults) {
    this.setState({
      currentVideo : searchResults[0],
      currentVideoList : searchResults
    });
  }

  setVideo(e) {
    this.setState({
      currentVideo : e
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            {/* <VideoPlayer video={this.state.currentVideo}/> */}
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList click={this.setVideo} videos={this.state.currentVideoList}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

