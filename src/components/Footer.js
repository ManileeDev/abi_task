import React from 'react'
import fbicon from "../utils/fbicon.svg"
import instaicon from "../utils/instaicon.svg"
import twittericon from "../utils/twittericon.svg"
import linkedlnicon from "../utils/linkedlnicon.svg"


const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='footer-body'>
                <div className='footer-left'>
                        <div className='footer-logo-container'>
                            <img src='https://s3-alpha-sig.figma.com/img/1cb7/653c/873f9d269c5385fce72c207e13930f28?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPl56FD~ij7BX6Utu~YVCNYBnseRLGPzCqnZ8TMEZxroX8sg1U4JWazoDX7SoUCMB0yezTnXdVdecVWP4plFgy1sUIhWDdI~mf1GSIYI~eeOpvsnidmiR-Iu8uEF9RZJHcwVbd7eSfUMUYvDjlQWj9mKzZfR~pUdiAGm3sl52cCYdnRJ8Jj616hncR7uhtAIQb9h~NTY1U2AivX7j5U5dGq6f4pmVMJJEm-ssBGrTHIz6xw4j4r8mw5dri0H73Ywhl0Dr90yfqQt8GuwCVzZBxGBOo3jbBKjQtZ8C7kEL-i5EZxy531Amv1rso6OXMwp2O8QeJpa-mC0QafyVStztA__' alt="logo" width={"38px"} />
                            <h3 className='logo-text'>Qoruz</h3>
                        </div>
                        <div>
                            <pre>Qoruz is an influencer marketing and   </pre>
                            <pre>intelligence platform, that enables</pre>
                            <pre>superior influencer discovery, quick and</pre>
                            <pre>easy influencer outreach.
                                Qoruz India Pvt. Ltd.</pre>
                        </div>
                        <div className='footer-logos'>
                            <img src={fbicon} alt="fbicon" />
                            <img src={instaicon} alt="fbicon" />
                            <img src={twittericon} alt="fbicon" />
                            <img src={linkedlnicon} alt="fbicon" />
                        </div>
                        <div>
                            <span>Qoruz India Pvt. Ltd.</span>
                        </div>
                    </div>



                <div className='footer-right' >
                    <div className='footer_company'>
                        <h3>Company</h3>
                        <p>
                            Privacy Policy</p>
                        <p>
                            About us</p>
                        <p>
                            Pricing</p>
                        <p>
                            Book a demo</p>
                        <p>
                            Terms of use</p>
                    </div>
                    <div className='footer_whyqoruz'>
                        <h3>Why Qoruz</h3>
                        <p>
                            For Brands</p>
                        <p>
                            For Agencies</p>
                    </div>
                    <div className='footer_resources'>
                        <h3>Resources</h3>
                        <p>Find Creators</p>
                        <p>Case Study</p>
                        <p>Reports</p>
                        <p>Blogs</p>
                        <p>Playbooks</p>
                        <p>Compare</p>
                        <p>Marketing Tools</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer