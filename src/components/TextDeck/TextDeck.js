import React, {Component} from 'react';

class TextDeck extends Component {

    render() {
        const divStyle = {
            width : this.props.width,
            height : '100%',
            backgroundColor : this.props.backgroundColor,
            display : 'inline-block',
            overflow : 'hidden'
        }
        return (
            <div style={divStyle} dangerouslySetInnerHTML={{__html : this.props.htmlValue}}>
            </div>
        );
    }

}

export default TextDeck;