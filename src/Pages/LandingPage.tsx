import { logDOM } from '@testing-library/react'
import React from 'react'
import Logo from '../images/Logo.png'
import JobIcon from '../images/job-icon.png'
import BlogPng from '../images/blog.png'
import JoinPng from '../images/join.png'
import MembersDirectoryPng from '../images/members-directory.png'
import PieChartPng from '../images/pichart.svg'
import ResourcePng from '../images/resources.png'
import UsersIconPng from '../images/users-icon.png'
import '../Styles/LandingPage.css'

const LandingPage: React.FC<{}> = () => {

    return (
        <>


            <nav className="navbar">

                <ul className="ul">



                    <li className="li">
                        <a href="#about" className="dot" data-scroll="about">

                        </a>
                    </li>

                    <li className="li">
                        <a href="#service" className="dot" data-scroll="service">

                        </a>
                    </li>

                    <li className="li">
                        <a href="#project" className="dot" data-scroll="project">

                        </a>
                    </li>

                    <li className="li">
                        <a href="#contact" className="dot" data-scroll="contact">

                        </a>
                    </li>
                    <li className="li">
                        <a href="#footer" className="dot" data-scroll="footer">

                        </a>
                    </li>

                </ul>

            </nav>


            <section className=" sec " id="about">
                <div className="logo " >
                    <div className="container "  style={{ "paddingTop": "100px" }}>
                        <div className="card-row">


                            <div className="text-center div-align-left fix-1-margin ">
                                <div className="card-body " >
                                    <img className="card-image " style={{ marginLeft: '20px' }} src={Logo} height='200' />
                                    <div>

                                        <h5 className="card-text text" data-aos='slide-up' data-aos-duration='1000'>
                                            <b className=' text-hello'>Hello.</b>
                                            <span className='text-span'>You've reached AIML Community</span>
                                        </h5 >
                                    </div>




                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>


            <section className=" sec " id="service">
                <div className="logo " >
                    <div className="container " data-aos='fade-top' data-aos-duration='1000' style={{ "paddingTop": "100px" }}>
                        <div className="card-row">


                            <div className="text-center " >
                                <div className="card-body div-align-left fix-2-margin"  >
                                    <div className="text-aiml_community">
                                        <b>AIML Community</b>
                                    </div>
                                    <p className="aiml-community" data-aos="fade-left" data-aos-duration="1000">"A community led by Artificial Intelligence, Machine Learning and data Science
                                        professionals in
                                        UAE"</p>




                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </section>




       


            <section className=" sec " id="project">
   
        
                <div className="logo " >
                    <div className="container " data-aos='fade-top' data-aos-duration='1000' style={{ "paddingTop": "100px" }}>
                        <div className="card-row">


                            <div className="text-center " >
                                
                                <div className="card-body div-align-left fix-3-margin"  >

                                    <div className="text-aiml_community">
                                        <b>Community Philosophy</b>
                                    </div>
                                    <p className="community-philosophy" data-aos="fade-right" data-aos-duration="1000">
                                        <strong>Collaboration, openness, and sharing</strong> made us different as species. Our goal is to share
                                        knowledge of <b className="artificial-intelligence">Artificial
                                            Intelligence</b>,<b className="machine-learning"> Machine Learning</b> & <b className="data-science">Data Science</b>
                                        as much as possible in an open, free, and easy-to-use way. We also
                                        want to contribute to the region's goal to be a leader in technological advancements.

                                    </p>
                        </div>
                        <div className='relative'>
    <div className='absolute'>
        <img src={PieChartPng}  className='pi-chart'></img>
    </div>
</div>
                            </div>

                        </div>

                    </div>


                </div>


            </section>


        

        





















            <section className=" sec " id="contact">
                <div className="logo">

                    <img src={Logo} />

                    <h1>
                        <b className="text-hello">Hello. </b>
                        <span className="text-span">
                            You've reached micro.company</span>
                    </h1>
                </div>
            </section>



            <section className=" sec " id="footer">
                <div className='div-align fix-4-margin'>


                    <div className="aiml-portfolio text-center">
                        <b>AIML Portfolio</b>
                    </div>

                    <div className="container" data-aos='zoom-in' data-aos-duration='1000' style={{ "paddingTop": "100px" }}>
                        <div className="card-columns ">




                            <div className="text-center">
                                <div className="card-body ">
                                    <img className="card-image" src={UsersIconPng} />
                                    <a href='https://www.notion.so/aimluae/AIML-UAE-51ff2ec1802842b1957282f28fdfdafb' target={'_blank'}>
                                        <h5 className="card-title">AIML UAE
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>
                                    </a>


                                </div>
                            </div>


                            <div className="text-center">
                                <div className="card-body">
                                    <img className="card-image" src={JobIcon} />
                                    <a href='https://www.notion.so/Jobs-in-AIML-f1188ceba0b445c1be1b898404c0e5d3' target={'_blank'}>
                                        <h5 className="card-title">Jobs in AIML
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>


                                    </a>

                                </div>
                            </div>


                            <div className="text-center">
                                <div className="card-body">
                                    <img className="card-image" src={ResourcePng} />
                                    <a href='https://aimluae.notion.site/Resources-in-AIML-5e3277377fc047268b476def1dfe6648' target={'_blank'}>

                                        <h5 className="card-title">Resources in AIML
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>
                                    </a>




                                </div>
                            </div>


                            <div className="text-center">
                                <div className="card-body">
                                    <img className="card-image" src={BlogPng} />
                                    <a href='https://medium.com/aimluae' target={'_blank'}>
                                        <h5 className="card-title">Blog
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>
                                    </a>


                                </div>
                            </div>


                            <div className="text-center">
                                <div className="card-body">
                                    <img className="card-image" src={MembersDirectoryPng} />
                                    <a href='https://www.notion.so/d1ec199147bd49c5a23855d1fb78e380' target={'_blank'}>
                                        <h5 className="card-title">Member's Directory
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>

                                    </a>

                                </div>
                            </div>
                            <div className="text-center">
                                <div className="card-body">
                                    <img className="card-image" src={JoinPng} />
                                    <a href='https://www.notion.so/Join-AIML-UAE-1176b27fdab34927866392f88739c2e1' target={'_blank'}>
                                        <h5 className="card-title">Join AIML UAE
                                            <i className="bi  launch-icon bi-box-arrow-up-right"></i>

                                        </h5>
                                    </a>


                                </div>
                            </div>




                        </div>

                    </div>

                </div>


            </section>


        </>
    )
}

export default LandingPage

