import React from 'react';
import {componentToDOMCard} from '../src';

const Image = React.createClass({
  render() {
    const {env, payload, isEditing} = this.props;
    if (isEditing) {
      return (
        <div>
          <input type="text" ref="src" defaultValue={payload.src} /><br />
          <input type="text" ref="caption" defaultValue={payload.caption} /><br/>
          <button onClick={() => env.save({ src: this.refs.src.value, caption: this.refs.caption.value })}>Save</button>
        </div>
      );
    } else {
      return (
        <div>
          <img src={payload.src} /><br/>
          <small>{payload.caption}</small><br/>
          {env.isInEditor && <button onClick={env.edit}>Edit</button>}
        </div>
      );
    }
  }
});

const ImageCard = componentToDOMCard('ImageCard', Image);

export default ImageCard;
