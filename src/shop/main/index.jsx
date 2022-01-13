import React from 'react';
import Product from '../products';
import { Box } from '@chakra-ui/react';
import ScreenDetection from '../../helpers/ScreenDetection';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {
    Keyboard,
    Mousewheel,
    Autoplay,
    Navigation,
    EffectFade,
} from 'swiper';
import 'swiper/swiper-bundle.css';
import '../style.scss';
import Row from 'react-bootstrap/Row';

export default function Main(props) {
    SwiperCore.use([Keyboard, Mousewheel, Autoplay, Navigation, EffectFade]);
    const { products, onAdd, setSelectedData, setShowSelectedData } = props;
    const size = ScreenDetection();

    const handleScroll = () => {
        setTimeout(() => {
            document.getElementById('hidden').click();
        }, 1000);
    };

    return (
        <>
            {size.width > 550 && (
                <div className="container">
                    {products.map((product) => {
                        return (
                            <>
                                {/* <a
                                    id="hidden"
                                    href="#folded"
                                    style={{ display: 'none' }}
                                ></a> */}
                                <Box
                                    className="box"
                                    onMouseEnter={() => {
                                        setSelectedData(product);
                                        setShowSelectedData(true);
                                        // handleScroll();
                                    }}
                                >
                                    <Product
                                        key={product.id}
                                        product={product}
                                        onAdd={onAdd}
                                    ></Product>
                                </Box>
                            </>
                        );
                    })}
                </div>
            )}
            {size.width < 550 && (
                <div
                    className="container"
                    id="products"
                    style={{ minHeight: 'unset' }}
                >
                    <Swiper
                        className="swiper-container"
                        spaceBetween={5}
                        slidesPerView={1.5}
                        mousewheel={true}
                        keyboard={true}
                        effectFade={true}
                        autoplay={false}
                        fade
                    >
                        {products.map((product) => {
                            return (
                                <SwiperSlide
                                    className="text-center"
                                    style={{
                                        height: '70vh',
                                        position: 'relative',
                                    }}
                                    onClick={() => {
                                        setSelectedData(product);
                                        setShowSelectedData(true);
                                        // setPrice(item.price);
                                    }}
                                >
                                    <img
                                        src={product.image}
                                        alt="company-logo"
                                        style={{
                                            height: 'calc(100% - 1vh)',
                                            objectFit: 'cover',
                                        }}
                                    />{' '}
                                    <div id="overlay"></div>
                                    <div class="mobile-package-title">
                                        <Row>
                                            <p
                                                className="mobile-package-price"
                                                style={{
                                                    fontSize: '12px',
                                                    position: 'relative',
                                                    left: '26px',
                                                }}
                                            >
                                                {product.name} Package -{' '}
                                                {product.price} DKK
                                            </p>
                                        </Row>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            )}
        </>
    );
}
