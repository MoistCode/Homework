import React from 'react';

class GiphysIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.img_url = this.props.giphy.images.downsized.url;
  }

  render() {
    return (
      <li>
        <img src={this.img_url} />
      </li>
    )
  }

}

export default GiphysIndexItem;
