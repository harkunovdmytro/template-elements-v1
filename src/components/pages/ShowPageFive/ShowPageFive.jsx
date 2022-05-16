import { ShowPageFiveData } from "../../../AppData"
import { AiOutlineArrowRight } from 'react-icons/ai'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { FaMountain } from 'react-icons/fa'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import Button from './Button';
import './ShowPageFive.scss'
import { useState } from "react";


const ShowPageFive = () => {
    const { header, text, statistic, slides } = ShowPageFiveData
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => currentSlide < (slides.length - 1) ? setCurrentSlide(currentSlide + 1) : setCurrentSlide(0)
    const prevSlide = () => currentSlide > (0) ? setCurrentSlide(currentSlide - 1) : setCurrentSlide(slides.length - 1)

    const getNumWithZero = (num) => num > 9 ? num.toString() : ('0' + num)

    const getCurrentSlidePic = (item, index) => {
        if (index > currentSlide) {
            return (
                <div className="slide next">
                    <img src={item.link} alt={item.link} />
                </div>)
        } else if (index < currentSlide) {
            return (<div className="slide prev"><img src={item.link} alt="" />prev {item.link}</div>)
        } else {
            return (<div className="slide"><img src={item.link} alt="" />current {item.link}</div>)
        }
    }
    const getCurrentSlideNum = (item, index) => {
        if (index > currentSlide) {
            return (<div className="current-slide-num next">{getNumWithZero(item.id + 1)}</div>)
        } else if (index < currentSlide) {
            return (<div className="current-slide-num prev">{getNumWithZero(item.id + 1)}</div>)
        } else {
            return (<div className="current-slide-num">{getNumWithZero(item.id + 1)}</div>)
        }
    }
    const getCurrentSlideName = (item, index) => {
        if (index > currentSlide) {
            return (<div className="name next">{(item.name)}</div>)
        } else if (index < currentSlide) {
            return (<div className="name prev">{(item.name)}</div>)
        } else {
            return (<div className="name">{(item.name)}</div>)
        }
    }
    const getCurrentSlideLocation = (item, index) => {

        if (index > currentSlide) {
            return (<div className="location next"><FaMapMarkerAlt /> {(item.location)}</div>)
        } else if (index < currentSlide) {
            return (<div className="location prev"><FaMapMarkerAlt /> {(item.location)}</div>)
        } else {
            return (<div className="location"><FaMapMarkerAlt /> {(item.location)}</div>)
        }
    }

    return (
        <section className="show-page-five-container" >
            <section className="show-page-five container">
                {/* <div className="inspiration">
                    Inspired by <a href="https://www.elegantthemes.com/layouts/business/job-recruiter-landing-page" target='_blank' rel="noreferrer">this</a>.
                </div> */}
                <section className='five-text'>
                    <header>
                        <Link to='/five' className='five-logo'>
                            <FaMountain />
                            Logo
                        </Link>
                        <div className='five-menu-container'>
                            <ul className='five-menu'>
                                <li><Link to='/five'>home</Link></li>
                                <li><Link to='/five'>services</Link></li>
                                <li><Link to='/five'>project</Link></li>
                                <li><Link to='/five'>about</Link></li>
                            </ul>
                        </div>
                    </header>
                    <section className='five-description'>
                        <h1 className='header'>
                            {header}
                        </h1>
                        <p className='text'>
                            {text}
                        </p>
                        <div className='btn-group'>
                            <div className='btn-container'>
                                <Button
                                    isDark={true}
                                >Contact Us</Button>
                            </div>
                            <div className='btn-container'>
                                <Button

                                >View Projects</Button>
                            </div>
                        </div>
                    </section>
                    <section className='five-statistics'>
                        {statistic.map((item, index) =>
                            <>
                                {index === 0 ? '' : <div className='stats-line' key={'line' + index}></div>}
                                <div key={index}>
                                    <div className='stats-num'>{item.num}</div>
                                    <div className='stats-desc'>{item.desc}</div>
                                </div>
                            </>
                        )}
                    </section>
                </section>
                <section className='five-slider-container'>
                    <div className="five-slider">
                        <div className="five-slider-wrapper">
                            <div className="five-slider-wrapper-wrapper">
                                {slides.map((item, index) => getCurrentSlidePic(item, index))}
                            </div>
                        </div>
                    </div>
                    <div className="slider-controls">
                        <button
                            onClick={() => prevSlide()}
                            className='slider-btn'><AiOutlineArrowLeft /></button>
                        <button
                            onClick={() => nextSlide()}
                            className='slider-btn'><AiOutlineArrowRight /></button>
                    </div>
                    <div className="slider-nums">
                        <div className="slider-nums-wrapper">
                            {slides.map((item, index) => getCurrentSlideNum(item, index))}
                            <div className='slides-quantity'>{getNumWithZero(slides.length)}</div>
                        </div>
                    </div>
                    <div className="slider-desc">
                        <div className="slider-desc-wrapper">
                            <div className='name-wrapper'>
                                {slides.map((item, index) => getCurrentSlideName(item, index))}
                            </div>
                            <div className='location-wrapper'>
                                {slides.map((item, index) => getCurrentSlideLocation(item, index))}
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default ShowPageFive
