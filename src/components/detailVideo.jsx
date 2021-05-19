import React, { Component } from 'react';

class DetailVideo extends Component {
	render() {
		if(this.props.status){
			const video = this.props.video;
			let tags;
			if(video.snippet.tags !== undefined)
				tags = video.snippet.tags.map(item=> <span key={item}>{"#" + item}</span>);
			else
				tags = "";

			let videoId;
			if(video.kind === "youtube#video"){
				videoId = video.id;
			}else{
				videoId = video.id.videoId;
			}
			let videoSrc = "https://www.youtube.com/embed/" + videoId + "?enablejsapi=1"

			return (
				<div className="video-viewer">
					<div className="video-view">
						<iframe id="player" type="text/html" width="960" height="540"
							src={videoSrc} frameBorder="0" title="woongTubePlayer"></iframe>
					</div>
					<div className="video-description">
						<div className="video-description-tag" >{tags}</div>
						<div className="video-description-title">{video.snippet.title}</div>
						<div className="video-description-content">{video.snippet.description}</div>
					</div>
				</div>
			);
		}else{
			return (<></>);
		}
	}
}

export default DetailVideo;