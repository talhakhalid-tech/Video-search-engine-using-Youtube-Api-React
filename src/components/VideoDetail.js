import React from 'react';

class VideoDetail extends React.Component{

    render(){

        if(!this.props.Video){
            return<div></div>
        }

        const videoSRC = `https://www.youtube.com/embed/${this.props.Video.id.videoId}`
        return(
            <div>
                <div className='ui embed'>
                    <iframe 
                        title='Video Player'
                        width="560" 
                        height="315" 
                        src={videoSRC}
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                        />
                </div>
                <div className='ui segment'>
                    <h4 className="header">
                        {this.props.Video.snippet.title}
                    </h4>
                    <p>
                        {this.props.Video.snippet.description}
                    </p>
                </div>
            </div>
        );
    }

}

export default VideoDetail;