import React, {Component} from 'react';
import classes from './TextDeck.module.css';

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
            <div className={classes.divClass} style={divStyle} dangerouslySetInnerHTML={{__html : this.props.htmlValue}}>
            </div>
        );
    }

}

export default TextDeck;