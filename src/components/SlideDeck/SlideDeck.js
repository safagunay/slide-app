import React, { Component } from 'react';
import ImageDeck from '../ImageDeck/ImageDeck';
import TextDeck from '../TextDeck/TextDeck';

//this.props.durationEnded()
class SlideDeck extends Component {
    //props -> mediaWidthPercent, mediaHeightWidthRatio, imageMedia, mediaSrc, videoMedia, mediaTitle,
    // mediaMimeType, htmlValue, textBackgroundColor

    componentDidMount() {
        this.timerID = setInterval(
            () => this.props.ended(),
            this.props.durationInSeconds * 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let mediaWidthPercent = this.props.mediaWidthPercent;
        let mediaHeightWidthRatio = this.props.mediaHeightWidthRatio;
        let media = null;
        let marginLeft = 0;
        let mediaWidth = window.innerWidth * mediaWidthPercent;
        let textWidth = window.innerWidth - mediaWidth - 5;
        let mediaHeight =  mediaWidth * mediaHeightWidthRatio; 
        if(mediaHeight > window.innerHeight) {
            mediaHeight = window.innerHeight;
            mediaWidth = mediaHeight * (1/mediaHeightWidthRatio);
            textWidth = window.innerWidth - mediaWidth - 5;
            if(mediaWidthPercent !== 1.0) {
                mediaWidthPercent = mediaWidth / window.innerWidth;
                mediaWidthPercent = parseFloat(mediaWidthPercent.toFixed(2));
            }
            else 
                marginLeft = (window.innerWidth - mediaWidth) / 2;
        }
                
        if(mediaWidthPercent !== 0)
        {
            if(this.props.imageMedia)
                media = (
                    <ImageDeck src={this.props.mediaSrc} width={mediaWidth} height={mediaHeight}/>
                )
            else if (this.props.videoMedia) {
                if(this.props.mediaSrc.includes("youtube")) {
                    let videoStyle = {
                        display : 'inline-block',
                        float : 'left'
                    }
                    media = (
                        <iframe style={videoStyle} width={mediaWidth} height={mediaHeight} src={this.props.mediaSrc} title={this.props.mediaTitle}/>
                    )
                }
                else {
                    media = (
                        <video width={mediaWidth} height={mediaHeight} autoPlay>
                            <source src={this.props.mediaSrc} type={this.props.mediaMimeType}/>
                        </video>
                    )
                }
            }
        }
        else
            mediaHeight = window.innerHeight; // cover all screen when only text to be shown

        let text = null;
        if(mediaWidthPercent!==1.0)
            text = (
                <TextDeck  width={textWidth} htmlValue={this.props.htmlValue} backgroundColor={this.props.textBackgroundColor} />
            )

        
        const marginTop = (window.innerHeight - mediaHeight)/2;
        const divStyle = {
            width: window.innerWidth,
            height: mediaHeight,
            paddingTop : marginTop,
            paddingLeft : marginLeft
        }
        return (
        <div style={divStyle}>
            {media}
            {text}
        </div>
        );
    }
}

export default SlideDeck;