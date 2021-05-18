import React, { PureComponent } from 'react';
import Video from './video';

class VideoList extends PureComponent {
    goVideoDetail = (videoId) => {
        // 요놈 정보가지고 디테일 페이지 
        this.props.toggleFunc(videoId);
    }

    render() {
        return (
            
            <div className="list-content">
                
                {this.props.videoList.map((item) => {
                    var id = "";
                    if(typeof item.id !== "object"){
                        id = item.id;
                    }else{
                        if(item.id.hasOwnProperty("chennelId")){
                            id = item.id.chennelId;
                        }else if(item.id.hasOwnProperty("videoId")){
                            id = item.id.videoId;
                        }
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