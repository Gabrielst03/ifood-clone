import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import ads from '../../utils/ads.json'
import { CategoryCard } from '../CategoryCard';
import { AdsBanner } from '../AdsBanner';


// Estilos personalizados para o carrossel
const sliderSettings = {
    infinite: false,
    speed: 1500,
    slidesToShow: 4, // Número de itens a serem exibidos por vez
    slidesToScroll: 1,
    arrows: true,
    margin: 10,
    responsive: [
        {
            breakpoint: 768, // Quando a largura da tela for menor que 768px
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480, // Quando a largura da tela for menor que 480px
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

const AdsCarousel: React.FC = () => {
    return (
        <div className='mt-12'>
            <Slider {...sliderSettings}>
                {ads.map((item) => (
                    <AdsBanner image_url={item.banner} />
                ))}
            </Slider>
        </div>
    );
};

export default AdsCarousel;
