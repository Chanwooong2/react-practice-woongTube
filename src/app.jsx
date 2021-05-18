import React, { Component } from 'react';
import NavBar from './components/navBar';
import './app.css';
import VideoList from './components/videoList';
import DetailVideo from './components/detailVideo';

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

    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=24&q="+ keword +"&key=AIzaSyAGspOfM9ON-bAaxl_wztnGF_CmLkMcllI", requestOptions)
      .then(response => response.text())
      .then(result =>  this.setData(result))
      .catch(error => console.log('error', error));
  }

  getInitData = () =>{
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos/?part=snippet&chart=mostPopular&maxResults=24&regionCode=kr&key=AIzaSyAGspOfM9ON-bAaxl_wztnGF_CmLkMcllI", requestOptions)
      .then(response => response.text())
      .then(result => this.setData(result))
      .catch(error => console.log('error', error));

  }

  setData = (result) => {
    const obj = JSON.parse(result);
    this.setState({
      videoList: obj.items, 
      nextPageToken : obj.nextPageToken, 
      etag : obj.etag,
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