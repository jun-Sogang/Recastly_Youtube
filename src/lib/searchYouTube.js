var searchYouTube = (options, callback) => {
  let URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&key=`;

  if(options.key !== undefined) URL += `${options.key}&`;
  if(options.query) URL += `q=${options.query}&`;
  if(options.max) URL += `maxResults=${options.max}`;
  console.log('URL?',URL);
  $.ajax({
		url: URL,
		type: 'GET',
    success: function(data) {
      console.log("success");
      console.log("data.items",data.items);
      callback(data.items);
      return true;
    },
    error: function(error) {
      console.log(error);
    }
  })
};

window.searchYouTube = searchYouTube;
