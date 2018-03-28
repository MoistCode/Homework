import React from 'react';
import GiphysIndex from './giphys_index';

class GiphysSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.state = { searchTerm: e.target.value }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input onChange={(e) => this.handleChange(e)} type='text'></input>
          <button>Search</button>
        </form>
        <GiphysIndex giphys={this.props.giphys}/>
      </div>
    )
  }

}

export default GiphysSearch;
