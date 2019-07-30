import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      currentVideo : {id: {videoId: '4ZAEBxGipoA'}, snippet: {thumbnails: {default: {url: 'https://i.ytimg.com/vi/4ZAEBxGipoA/default.jpg'}}, description: 'My website - https://www.thenewboston.com/videos.php Have questions about the tutorial or React? Ask them here ...', title: 'XReact JS Tutorial for Beginners - 1 - Introduction'}}
    };
    this.setVideo = this.setVideo.bind(this);
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
            <VideoList click={this.setVideo} videos={(this.props.videos ? this.props.videos : [])}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

{/* <div className="col-md-7">
            <VideoPlayer video={(this.props.video ? this.props.video : {id: {videoId: 'BLANK'}, snippet: {thumbnails: {default: {url: 'BLANK'}}, description: 'BLANK', title: 'BLANK'}})}/> */}

// var App = (props) => (
// <div>
//   {console.log(props)}
//   <nav className="navbar">
//     <div className="col-md-6 offset-md-3">
//       <Search />
//     </div>
//   </nav>
//   <div className="row">
//     <div className="col-md-7">
//       <VideoPlayer video={props.video}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={(props.videos ? props.videos : [])}/>
//     </div>
//   </div>
// </div>
// );