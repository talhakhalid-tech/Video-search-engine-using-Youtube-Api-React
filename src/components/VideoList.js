import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component{

    render(){
        const Videos = this.props.videos.map(video => <VideoItem key={video.id.videoId} whenSelect={this.props.whenSelect} Video={video}/>)
        return(
            <div className="ui relaxed divided list">
                {Videos}
            </div>
        );
    }


}

export default VideoList;