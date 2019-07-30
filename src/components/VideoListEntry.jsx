var VideoListEntry = (props) => {

  var videoSelect = () => {
    $('.embed-responsive-item').attr('src', ('https://www.youtube.com/embed/' + props.videoEntry.id.videoId));
  };

  return (
    <div className="video-list-entry media">
      <div className="media-left media-middle">
        <img className="media-object" src={props.videoEntry.snippet.thumbnails.default.url} alt="" onClick={videoSelect}/>
      </div>
      <div className="media-body">
        <div className="video-list-entry-title" onClick={videoSelect}>{props.videoEntry.snippet.title}</div>
        <div className="video-list-entry-detail">{props.videoEntry.snippet.description}</div>
      </div>
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
