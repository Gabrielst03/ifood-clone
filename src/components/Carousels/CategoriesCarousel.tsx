import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import categories from '../../utils/categories.json'
import { CategoryCard } from '../CategoryCard';


// Estilos personalizados para o carrossel
const sliderSettings = {
    infinite: false,
    speed: 500,
    slidesToShow: 12, // Número de itens a serem exibidos por vez
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 768, // Quando a largura da tela for menor que 768px
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
        {
            breakpoint: 480, // Quando a largura da tela for menor que 480px
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
            },
        },
    ],
};

const CategoryCarousel: React.FC = () => {
    return (
        <div className='block items-center justify-center'>
            <Slider className='py-4' {...sliderSettings}>
                {categories.map((item) => (
                    <CategoryCard title={item.title} image_url={item.image} />
                ))}
            </Slider>
        </div>
    );
};

export default CategoryCarousel;
