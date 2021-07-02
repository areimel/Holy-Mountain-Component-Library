import styles from './DefaultSlider.module.scss'
import styled from "styled-components";

//import BlogListing from '@components/BlogListing/BlogListing'


// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay]);


export default function DefaultSlider({ 
  //page vars
}) {
  return (
	<Swiper
		spaceBetween={100}
		slidesPerView={1}
		loop={true}
		speed={500}
		
		navigation
		pagination={{ clickable: true }}

		onSwiper={(swiper) => console.log(swiper)}
		onSlideChange={() => console.log('slide change')}
	>
		<SwiperSlide>
			<div className={styles.SlideInner}>
				SLIDE 1
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div className={styles.SlideInner}>
				SLIDE 2
			</div>
		</SwiperSlide>

		<SwiperSlide>
			<div className={styles.SlideInner}>
				SLIDE 3
			</div>
		</SwiperSlide>
	</Swiper>
  	
  )
}
