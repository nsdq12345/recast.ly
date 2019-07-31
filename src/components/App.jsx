import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import searchYouTube from './../lib/searchYouTube.js';
import YOUTUBE_API_KEY from './../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      currentVideo: {id: {videoId: ''}, snippet: {thumbnails: {default: {url: ''}}, description: '', title: ''}},
      currentVideoList: [{id: {videoId: ''}, snippet: {thumbnails: {default: {url: ''}}, description: '', title: ''}}],
      searchInput: ''
    };

    this.setVideo = this.setVideo.bind(this);
    this.setVideoList = this.setVideoList.bind(this);
    this.setSearchInput = this.setSearchInput.bind(this);
    this.setSearchUpdate = this.setSearchUpdate.bind(this);
    this.setSearchUpdate2 = this.setSearchUpdate2.bind(this);
    this.searchYT = this.props.searchYouTube.bind(this);
  }

  debounce(func, wait, immediate) {
    var timeout;
    console.log('func0', this);
    var newFunc = function() {
      console.log('func:', func);
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        console.log('hit?', this);
        if (!immediate) {func.apply(context, args);}
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) {
        console.log('hit');
        func.apply(context, args);
      }
    };
    console.log('func1', this);
    return newFunc.call(this);
  }

  componentDidMount() {
    this.props.searchYouTube({query: 'react tutorial', key: YOUTUBE_API_KEY, max: 5}, this.setVideoList);
  }

  setVideoList(searchResults) {
    this.setState({
      currentVideo: searchResults[0],
      currentVideoList: searchResults
    });
  }

  setSearchUpdate() {
    this.props.searchYouTube({query: this.state.searchInput, key: YOUTUBE_API_KEY, max: 5}, this.setSearchUpdate2);
  }

  setSearchUpdate2(searchResults) {
    this.setState({
      currentVideoList: searchResults
    });
  }

  setSearchInput(e) {
    this.setState({
      searchInput: e.target.value
    });
    var currentFunction = function() {this.props.searchYouTube.bind(this);}.bind(this);
    this.debounce(currentFunction, 5000);

  }

  setVideo(e) {
    this.setState({
      currentVideo: e
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search click={this.setSearchUpdate} inputListen={this.setSearchInput}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
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

