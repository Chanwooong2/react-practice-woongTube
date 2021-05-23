import React, { PureComponent } from 'react';
import styles from './video.module.css'

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
        const snippet = this.props.video.snippet;

        const imgSrc = snippet.thumbnails.medium.url;
        const videoTitle = snippet.title;
        const videoDescription = snippet.description;
        const showDetail = this.state.isHovered ? styles.showOff:styles.showOn;
        
        return (
            <div className={styles.video} 
                onClick={this.goVideoDetail} 
                onMouseEnter={this.handleHoverFunc} 
                onMouseLeave={this.handleHoverFunc}>

                <img src={imgSrc} alt={videoTitle} className={styles.img}/>
                <div className={showDetail}>
                    <div className={styles.detail}></div>
                    <label className={styles.header}>{videoTitle}</label>
                    <label className={styles.contents}>{videoDescription}</label>
                </div>
            </div>
        );
    }
}

export default Video;



