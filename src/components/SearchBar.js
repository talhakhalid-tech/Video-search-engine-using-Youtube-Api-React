import React from 'react';

class SearchBar extends React.Component{

    state={text: ''}

    onInputChange = (event) => {
        this.setState({text : event.target.value});
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.whenSubmit(this.state.text);
    };

    render(){
        return(
            <div className='searchBar ui segment'>
                <form onSubmit ={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <input 
                            type='text' 
                            placeholder='Video Search' 
                            value={this.state.text}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }


}

export default SearchBar;