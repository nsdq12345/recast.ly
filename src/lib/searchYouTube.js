var searchYouTube = (options, callback) => {
  // TODO
  $.get( "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + options.max + "&q=" + options.query + "&type=video&videoEmbeddable=true&key=" + options.key, function( data ) {
    callback(data.items);
  });
};


export default searchYouTube;
