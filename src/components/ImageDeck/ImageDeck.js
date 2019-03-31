import React, {Component} from 'react';

class ImageDeck extends Component
{
    render() {

        let imgStyle = {
            width : this.props.width,
            display : 'inline-block',
            height : this.props.height,
            float : 'left'
        }
        
        return (
            <img src={this.props.src} style={imgStyle} alt={this.props.src} />
        );
    }

}

export default ImageDeck;