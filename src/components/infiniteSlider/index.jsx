import React from 'react';
import Slider from 'infinite-react-carousel';

const InfiniteSlider = () => {
    return (
        <>
            <Slider dots autoplay={true} slidesToShow={5} slidesPerRow={5}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>
        </>
    );
};

export default InfiniteSlider;
