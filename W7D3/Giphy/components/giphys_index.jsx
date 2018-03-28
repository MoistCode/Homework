import React from 'react';

import GiphysIndexItem from './giphys_index_item';

class GiphysIndex extends React.Component {

  render() {
    return(
      <ul>
        {this.props.giphys.map((giphy) => <GiphysIndexItem giphy={giphy}/>)}
      </ul>
    )
  }

}

export default GiphysIndex;
