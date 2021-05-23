import React, { Component } from 'react';
import styles from './detailVideo.module.css'

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
				<div className={styles.viewer}>
					<div className={styles.view}>
						<iframe id={styles.player} type="text/html" width="960" height="540"
							src={videoSrc} frameBorder="0" title="woongTubePlayer"></iframe>
					</div>
					<div className={styles.description}>
						<div className={styles.tag}>{tags}</div>
						<div className={styles.title}>{video.snippet.title}</div>
						<div className={styles.content}>{video.snippet.description}</div>
					</div>
				</div>
			);
		}else{
			return (<></>);
		}
	}
}

export default DetailVideo;