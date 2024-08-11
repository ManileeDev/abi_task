import React from 'react'
import arrow from "../utils/arrow.svg"
import uparrow from "../utils/uparrow.svg"
import uparrowwt from "../utils/uparrowwhite.svg"
import hamburger from "../utils/hamburger.svg"

const Header = () => {
  return (
    <div className='header'>
        <div className='head-1'>
        <div className='logo-container'>
            <img src='https://s3-alpha-sig.figma.com/img/1cb7/653c/873f9d269c5385fce72c207e13930f28?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DPl56FD~ij7BX6Utu~YVCNYBnseRLGPzCqnZ8TMEZxroX8sg1U4JWazoDX7SoUCMB0yezTnXdVdecVWP4plFgy1sUIhWDdI~mf1GSIYI~eeOpvsnidmiR-Iu8uEF9RZJHcwVbd7eSfUMUYvDjlQWj9mKzZfR~pUdiAGm3sl52cCYdnRJ8Jj616hncR7uhtAIQb9h~NTY1U2AivX7j5U5dGq6f4pmVMJJEm-ssBGrTHIz6xw4j4r8mw5dri0H73Ywhl0Dr90yfqQt8GuwCVzZBxGBOo3jbBKjQtZ8C7kEL-i5EZxy531Amv1rso6OXMwp2O8QeJpa-mC0QafyVStztA__' alt="logo" width={"38px"} />
            <h2 className='logo'>Qoruz</h2>
        </div>
        <div className='sidebar'>
        <img src={hamburger} alt="hamburger" />
       </div>
        <nav>
            <ul >
                <li>Solutions <img src={arrow} alt="arrow"></img></li>
                <li>Resources <img src={arrow} alt="arrow"></img></li>
                <li>Features <img src={arrow} alt="arrow"></img></li>
                <li>Pricing <img src={arrow} alt="arrow"></img></li>
            </ul>
        </nav>
        <div className='header-btns'>
            <button className='login-btn'>Login<img src={uparrow} alt="arrow" width={"18px"} height={"18px"}></img></button>
            <button className='getstarted-btn'>Get Started <img src={uparrowwt} alt="uparrow" width={"18px"} height={"18px"} ></img></button>
        </div>
        </div>
        
       
       
    </div>
  )
}

export default Header