import React from 'react';
import LinkedIn from '../assets/icons/325015-128.png';
import GitHub from '../assets/icons/iconfinder_github-square-social-media_764894.png';
import Outlook from '../assets/icons/312651-128.png'

const Contact = () => {
    return (
        <div className="text-light contact-wrapper">
            <div className="small-contact-wrapper">
                <h1 className="contact-title">Contact Nick</h1>
                <p className="text-center">I would love to hear from you.</p>

                <div className="mt-5 d-md-flex flex-wrap justify-content-between">
                    <div>
                        <div className="text-center contact-icon">
                            <img src={Outlook} alt="outlook" />
                            <span className="d-block contact-type" >Email</span>
                            <span className="d-block mt-3"><a href="mailto:nick.sandoval@outlook.com">nick.sandoval@outlook.com</a></span>
                        </div>
                    </div>
                    <div>
                        <div className="text-center contact-icon">
                            <img src={LinkedIn} alt="linked in"/>
                            <span className="d-block contact-type">LinkedIn</span>
                            <span className="d-block mt-3"><a href="https://www.linkedin.com/in/nick16s/" target="_blank">linkedin.com/in/nick16s/</a></span>
                        </div>
                    </div>



                    <div>
                        <div className="text-center contact-icon">
                            <img src={GitHub} alt="github"/>
                            <span className="d-block contact-type" >GitHub</span>
                            <span className="d-block mt-3"><a href="https://github.com/nsando84" target="_blank">github.com/nsando84</a></span>
                        </div>
                </div>
            </div>
        </div>


        </div>
    )
}

export default Contact