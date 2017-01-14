class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentVideo: exampleVideoData[0],
      currentVideos: exampleVideoData,
      isStart: false,
    };
    this.selectVideo = this.selectVideo.bind(this);
    this.searchVideo = this.searchVideo.bind(this);
  }

  selectVideo(selectedVideo) {
    this.setState({
      currentVideo: selectedVideo,
    });
  }

  searchVideo(query){
    let videos = {};
    const options = {
      query: query,
      key: window.YOUTUBE_API_KEY,
      max: 5,
    }
    console.log('options?',options);
    searchYouTube(options,(data) =>
      this.setState({
          currentVideos: data,
          currentVideo: data[0],
          isStart: true,
        })
    );
  };
//   검색하기.
//   componentWillMount(){
//     if(!this.state.isStart){
//       this.searchVideo('')
//     }
// }
  render() {
    return (
    <div>
      <Nav newData={this.searchVideo}/>
      <div className="box">
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo}/>
        </div>
        <div className="col-md-5" >
          <VideoList videos={this.state.currentVideos} onClickTitle={this.selectVideo}  />
        </div>
      </div>
    </div>
    )
  }
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
