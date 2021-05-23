import React, { Component } from 'react';
import NavBar from './components/navBar';
import './app.css';
import VideoList from './components/videoList/videoList';
import DetailVideo from './components/detailVideo/detailVideo';
import SideBar from './components/sideBar';

class App extends Component {
  state ={
    nextPageToken : "",
    etag : "",
    videoList : [],
    detailViewOnOff : false,  //  false -> off
    selectedVideoId : "",
  }
  
  componentDidMount = () =>{
    this.getInitData();
  }

  searchVideo = (keword) =>{
    console.log(`in the search func! : ${keword}`);
    this.props.youtubeAPI
      .searchList(keword)
      .then(this.setData);
  }

  getInitData = () =>{
    this.props.youtubeAPI
      .mostPopularList()
      .then(this.setData);
  }

  setData = (result) => {
    this.setState({
      videoList: result.items, 
      nextPageToken : result.nextPageToken, 
      etag : result.etag,
      detailViewOnOff : false,
    });
    document.documentElement.scrollTop = 0;
    
    let listContent = document.querySelector('.list-content');
    listContent.style.width = "100%";
  }
  
  toggleFunc = (videoId) =>{
      var video = null;
      for(var item of this.state.videoList){
        if(item.id === videoId){
          video = item;
          break;
        }
      }
      const preState = this.state.detailViewOnOff;
      this.setState({detailViewOnOff : preState === false ? true:true, selectedVideo : video});

      let listContent = document.querySelector('.list-content');
      listContent.style.width = "330px";

      document.documentElement.scrollTop = 0;
  }

  render() {
    return (
      <>
        <NavBar
          searchVideo={this.searchVideo}
        />
        <section className="contents-section">
            {/* <section className="list-container"> */}
              <SideBar 
                goHome={this.getInitData}
              />

              <DetailVideo
                video={this.state.detailViewOnOff === true ? this.state.selectedVideo:null}
                status={this.state.detailViewOnOff}
                />

              <VideoList 
                key={this.state.etag}
                videoList={this.state.videoList}
                toggleFunc={this.toggleFunc}
                />
            {/* </section> */}
        </section>
      </>
    );
  }
}

export default App;