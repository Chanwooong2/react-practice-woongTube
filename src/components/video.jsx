import React, { PureComponent } from 'react';

class Video extends PureComponent {
    state = {
        isHovered : false.valueOf,
    }

    handleHoverFunc = () =>{
        const temp = this.state.isHovered;
        this.setState({isHovered : temp? false:true})
    }

    goVideoDetail = () =>{
        this.props.onGoVideoDetail(this.props.video.id);
    }

    render() {
        // const id = this.props.video.id;
        var item = this.props.video;
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

        const imgSrc = this.props.video.snippet.thumbnails.medium.url;
        const videoTitle = this.props.video.snippet.title;
        const videoDescription = this.props.video.snippet.description;
        const showDetail = this.state.isHovered ? "show-off":"show-on";
        return (
            <div id={id} className="video" onClick={this.goVideoDetail} onMouseEnter={this.handleHoverFunc} onMouseLeave={this.handleHoverFunc}>
                <img src={imgSrc} alt={videoTitle} className="video-img"/>

                <div className={showDetail}>
                    <div className="video-detail"></div>
                    <label className="video-label-header">{videoTitle}</label>
                    <label className="video-label-detail">{videoDescription}</label>
                </div>

            </div>
        );
    }
}

export default Video;