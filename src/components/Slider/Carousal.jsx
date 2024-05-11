import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import img1 from '../../assets/images/carousel1.jpg'
import img2 from '../../assets/images/carousel2.jpg'
import img3 from '../../assets/images/carousel3.jpg'
const Carousal = () => {
    return (
        <div className='px-6'>
             <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Slide image={img1} text="Get Your Web Development Projects Done in minutes"></Slide></SwiperSlide>
        <SwiperSlide><Slide image={img2} text="Get Your Graphic Design Projects Done in minutes"></Slide ></SwiperSlide>
        <SwiperSlide><Slide image={img3} text="Start Your Digital Marketing Campaigns up and running"></Slide></SwiperSlide>
        
       
      </Swiper>
        </div>
    );
};

export default Carousal;