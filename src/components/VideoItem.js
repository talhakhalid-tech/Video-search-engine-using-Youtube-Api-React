import React from 'react';
import './VideoItem.css'


class VideoItem extends React.Component{

    render(){
        return(
            <div onClick={()  => this.props.whenSelect(this.props.Video)} className="VideoItem item">
                <img className='ui image' alt={this.props.Video.snippet.title} src={this.props.Video.snippet.thumbnails.medium.url}/>
                <div className='content'>
                    <div className='header'>{this.props.Video.snippet.title}</div>
                </div>
            </div>
        );
    }


}
export default VideoItem;