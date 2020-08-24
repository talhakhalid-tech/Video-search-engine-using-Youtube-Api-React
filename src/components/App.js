import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import axios from 'axios'

const KEY = 'AIzaSyBanGg5fk0A8OCgw1gtUBGa4xHrdxkfU_c'

class App extends React.Component{

    state = {videos: [],selectedVideo: null};

    componentDidMount(){
        this.onSearchSubmit('guns');
    }

    onSearchSubmit = async (text) =>{
        const  Response = await axios.get( 'https://www.googleapis.com/youtube/v3/search',{
            params:{
                part: 'snippet',
                q: text,
                maxResults: 25,
                key: KEY
            }
        }
        )

        this.setState({selectedVideo: Response.data.items[0]  ,videos: Response.data.items});
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video})
    }

    render(){
        return(
                <div className='ui container'>
                    <SearchBar whenSubmit={this.onSearchSubmit}/>
                    <div className='ui grid'>
                        <div className='ui row'>
                            <div className='eleven wide column'>
                                <VideoDetail Video={this.state.selectedVideo}/>
                            </div>
                            <div className='five wide column'>
                                <VideoList whenSelect={this.onVideoSelect} videos={this.state.videos}/>
                            </div>
                        </div>
                    </div>
                </div>
        );
    };
    
}


export default App;