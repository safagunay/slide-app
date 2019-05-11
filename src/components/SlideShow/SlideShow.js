import React, { Component } from 'react';
import SlideDeck from '../SlideDeck/SlideDeck';

class SlideShow extends Component {
    //props -> mediaWidthPercent, mediaHeightWidthRatio, imageMedia, mediaSrc, videoMedia, mediaTitle,
    // mediaMimeType, htmlValue, textBackgroundColor
    constructor(props) {
        super(props);
        this.slideCount = this.props.slides.length;
        this.state = {
            currentSlideOrder : 0
        }
    }

    nextSlide = () => {
        this.setState( prevState => {
            return {
                currentSlideOrder : (prevState.currentSlideOrder + 1) % this.slideCount
            }
        })
    }

    slides = this.props.slides.map( slide => {
        return (
            <SlideDeck
            durationInSeconds={slide.durationInSeconds}
            ended={this.nextSlide}
            textBackgroundColor={slide.textBackgroundColor} htmlValue={slide.htmlValue} 
            mediaSrc={slide.mediaSrc} videoMedia={slide.videoMedia} mediaMimeType={slide.mediaMimeType}
            mediaHeightWidthRatio={slide.mediaHeightWidthRatio} mediaWidthPercent={slide.mediaWidthPercent} 
            mediaTitle={slide.mediaTitle} imageMedia={slide.imageMedia}
            key={slide.id}/> //eksik olursa react virtual dom ile real dom arasındaki fakı anlayabiliyor ama hook methodlarını çağırmıyor
        );
    })

    

    render() {
        return (
            this.slides[this.state.currentSlideOrder]
        );
    }
}

export default SlideShow;