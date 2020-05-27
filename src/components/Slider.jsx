import React from 'react'

function Slider() {
    return (
        <main className="ms-container home-slider">
        {/* Swiper Slider */}
        <div className="swiper-container">
          <div className="swiper-wrapper">
            {/* Slide */}
            <div className="swiper-slide">
              <div className="slide-inner" data-swiper-parallax="45%">
                <div className="overlay" />
                <div className="slide-inner--image" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/JP%203.jpg?alt=media&token=1505d160-0867-44a3-9176-42c727207328'}} />
                <div className="slide-inner--info">
                  <h1>The Drive<br />of your life</h1>
                  <a href="gallery" data-type="page-transition" className="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="swiper-slide">
              <div className="slide-inner" data-swiper-parallax="45%">
                <div className="overlay" />
                <div className="slide-inner--image" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/IMG_1435.JPG?alt=media&token=be6db54b-3bac-4ff5-9e70-5c4cd63c2b17")'}}>
                </div>
                <div className="slide-inner--info">
                  <h1>The Power<br />of Dreams</h1>
                  <a href="gallery" data-type="page-transition" className="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="swiper-slide">
              <div className="slide-inner" data-swiper-parallax="45%">
                <div className="overlay" />
                <div className="slide-inner--image" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/JP%2019.jpg?alt=media&token=ee577e74-221b-4c3c-9f67-b5c6ee071a6e")'}}>
                </div>
                <div className="slide-inner--info">
                  <h1>romantic<br />chipping</h1>
                  <a href="gallery" data-type="page-transition" className="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
            {/* Slide */}
            <div className="swiper-slide">
              <div className="slide-inner" data-swiper-parallax="45%">
                <div className="overlay" />
                <div className="slide-inner--image" style={{backgroundImage: 'url("https://firebasestorage.googleapis.com/v0/b/my-project-1482573108901.appspot.com/o/JP%2018.jpg?alt=media&token=aa9ee2ba-633b-422a-8571-9f1932ed2cdc")'}}>
                </div>
                <div className="slide-inner--info">
                  <h1>What<br />the Fog?</h1>
                  <a href="gallery" data-type="page-transition" className="ms-btn--slider">take a look</a>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-nav-btn">
            <div className="swiper-button-prev swiper-button-white">prev</div>
            <div className="swiper-button-next swiper-button-white">next</div>
          </div>
          {/* Pagination */}
          <div className="expanded-timeline">
            <div className="expanded-timeline__counter"><span /><span /></div>
            <div className="swiper-pagination" />
            <div className="scroll-message">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.5 15.98" className="scroll-svg"><title>Asset 1</title><g>
                  <g data-name="Layer 1"><polygon fill="#fff" points="0 4.64 0.71 5.34 3.85 2.2 3.85 15.98 4.85 15.98 4.85 2.2 8 5.34 8.71 4.64 4.35 0.29 0 4.64" /><polygon fill="#fff" points="11.65 0 11.65 13.79 8.5 10.64 7.79 11.35 12.15 15.7 16.5 11.35 15.79 10.64 12.65 13.79 12.65 0 11.65 0" /></g></g></svg>Scroll
            </div>
          </div>
        </div>
      </main>
    )
}

export default Slider
