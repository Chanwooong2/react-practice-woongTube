import React, { PureComponent } from 'react';
import Video from '../video/video';

class VideoList extends PureComponent {
    goVideoDetail = (videoId) => {
        // 요놈 정보가지고 디테일 페이지 
        this.props.toggleFunc(videoId);
        console.log(`goVideoDetail ${videoId}`)

        // let videos = document.querySelectorAll(".video");
        // videos.forEach(item => item.style.display = "flex");
        // let targetVideo = document.getElementById(videoId);
        // targetVideo.style.display = "none";
    }

    render() {
        console.log(`render videoList~!`);
        return (
            <div className="list-content">
                
                {this.props.videoList.map((item) => {
                    var id = "";
                    if(typeof item.id !== "object"){
                        id = item.id;
                    }else{
                        id = item.id.videoId;
                    }
                    return (

                    <Video 
                        key={id}
                        video={item}
                        onGoVideoDetail={this.goVideoDetail}
                    />
                    );
                    } 
                )}

            </div>
        );
    }
}

export default VideoList;