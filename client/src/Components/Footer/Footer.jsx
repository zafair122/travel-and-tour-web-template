import React, { useEffect } from 'react'
import './footer.css'
import video2 from '../../Assets/video1.mp4'
import { FiChevronRight, FiSend } from 'react-icons/fi'
import { MdOutlineTravelExplore } from 'react-icons/md'
import { FaTripadvisor } from 'react-icons/fa'
import { AiOutlineTwitter, AiFillYoutube, AiFillInstagram } from 'react-icons/ai'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {
    // A react hook to add scroll animation
    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video2} muted autoPlay loop type="video/mp4"></video>
            </div>
            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KKEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>
                    <div className="inputDiv flex">
                        <input data-aos="fade-up" type="text" placeholder='Enter email here' />
                        <button data-aos="fade-up" className="btn flex" type='submit'> SEND
                            <FiSend className='icon' />
                        </button>
                    </div>
                </div>
                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                                <MdOutlineTravelExplore className='icon' /> Travel.
                            </a>
                        </div>
                        <div data-aos="fade-up" className="footerPara">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo assumenda earum provident tempore optio voluptatum, perferendis accusamus temporibus dolores sed reprehenderit, accusantium cupiditate nostrum, nesciunt porro culpa debitis veniam animi.
                        </div>
                        <div data-aos="fade-up" className="footerSocials">
                            <AiOutlineTwitter className="icon" />
                            <AiFillYoutube className="icon" />
                            <AiFillInstagram className="icon" />
                            <FaTripadvisor className="icon" />
                        </div>
                    </div>
                    <div className="footerLinks grid">
                        {/* Group One */}
                        <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
                            <span className="groupTitle">OUR AGENCY</span>
                            <li className="footerList flex"><FiChevronRight className="icon" />Services</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Insurance</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Agency</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Toursim</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Payment</li>
                        </div>
                        {/* Group Two */}
                        <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
                            <span className="groupTitle">PARTNERS</span>
                            <li className="footerList flex"><FiChevronRight className="icon" />Booking</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Rentcars</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Hostelworld</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Trivago</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />TripAdvisor</li>
                        </div>
                        {/* Group Three */}
                        <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
                            <span className="groupTitle">LAST MINUT</span>
                            <li className="footerList flex"><FiChevronRight className="icon" />Sydney</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />London</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Perth</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Manchestor</li>
                            <li className="footerList flex"><FiChevronRight className="icon" />Brisbane</li>
                        </div>
                    </div>
                    <div className="footerDiv flex">
                        <small>BEST TRAVEL GUIDERS</small>
                        <small>COPYRIGHTS RESERVED  - CPENTAGON TRAVELS 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer