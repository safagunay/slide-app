import React, { Component } from 'react';
import SlideShow from '../../components/SlideShow/SlideShow';

//props -> mediaWidthPercent, mediaHeightWidthRatio, imageMedia, mediaSrc, videoMedia, mediaTitle,
    // mediaMimeType, htmlValue, textBackgroundColor
class App extends Component {
  
  constructor(props) {
    super(props);
    this.htmlValue = "<h1><strong style='color: rgb(230, 0, 0);'>Hellooooooooooo World!</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>Hellooooooooooo World!</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>PrimeReact Editor Rocks</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>Hello World!</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>PrimeReact Editor Rocks</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>Hello World!</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>PrimeReact Editor Rocks</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>Hello World!</strong></h1><h1><strong style='color: rgb(230, 0, 0);'>PrimeReact Editor Rocks</strong></h1>"
    this.imgSrc1 = "images/1080deneme.jpg";
    this.imgSrc2 = "images/img_girl.jpg";
    this.videoSrc1 = "http://www.youtube.com/embed/bDOYN-6gdRE?autoplay=1&controls=0";
    this.videoSrc2 = "videos/mov_bbb.mp4";
    this.slides = [
      { id : 1, durationInSeconds : 20, htmlValue : this.htmlValue, textBackgroundColor : "orange", mediaSrc : this.imgSrc1, imageMedia : true,  
        mediaTitle : "Example Image1", mediaWidthPercent : 0.0, mediaHeightWidthRatio : 0.5625 },
      { id : 2, durationInSeconds : 10, htmlValue : this.htmlValue, textBackgroundColor : "purple", mediaSrc : this.imgSrc2, imageMedia : true,  
      mediaTitle : "Example Image2", mediaWidthPercent : 0.7, mediaHeightWidthRatio : 864/1218 },
      { id : 3, durationInSeconds : 30, htmlValue : this.htmlValue, textBackgroundColor : "brown", mediaSrc : this.videoSrc1, videoMedia : true,  
      mediaTitle : "Example Video1", mediaWidthPercent : 0.7, mediaHeightWidthRatio : 344/425 },
      { id : 4, durationInSeconds : 30, htmlValue : this.htmlValue, textBackgroundColor : "green", mediaSrc : this.videoSrc2, videoMedia : true,  
      mediaTitle : "Example Video2", mediaWidthPercent : 0.7, mediaHeightWidthRatio : 176/320 } //mime type eklemedim bakim nolcak
    
    ]
  }
  render() {
    return (
      <SlideShow slides={this.slides} />
    )
  }
}

export default App;
