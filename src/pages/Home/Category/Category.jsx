import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'

const Category = () => {
    return (
        <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper my-20"
      >
        <SwiperSlide>
            <img src={slide1} alt="" />
            <h1 className='text-4xl text-center -mt-20 uppercase text-white'>salads</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide2} alt="" />
            <h1 className='text-4xl text-center -mt-20 uppercase text-white'>pizza</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide3} alt="" />
            <h1 className='text-4xl text-center -mt-20 uppercase text-white'>coffee</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide4} alt="" />
            <h1 className='text-4xl text-center -mt-20 uppercase text-white'>desserts</h1>
        </SwiperSlide>
        <SwiperSlide>
            <img src={slide5} alt="" />
            <h1 className='text-4xl text-center -mt-20 uppercase text-white'>salads</h1>
        </SwiperSlide>
       
      </Swiper>
    );
};

export default Category;