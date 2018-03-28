import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      giphys: this.props.giphys
    }
  }


  render() {
    return(
      <ul>
        {this.state.giphys.map((giphy) => <GiphysIndexItem giphy={giphy}/>)}
      </ul>
    )
  }

}

export default GiphysIndex;
