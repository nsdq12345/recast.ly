import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';

class App extends React.Component {
  constructor (props) {
    super (props);
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
            <VideoPlayer video={(this.props.video ? this.props.video : {id: {videoId: 'BLANK'}, snippet: {thumbnails: {default: {url: "BLANK"}}, description: "BLANK", title: "BLANK"}})}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.props.videos}/>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

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