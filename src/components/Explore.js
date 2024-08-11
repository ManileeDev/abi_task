import React from 'react'
import uparrow from "../utils/uparrow.svg"
import sidearrow from "../utils/sidearrow.svg"

const Explore = () => {
    return (
        <div className="explore-container">
            <div className='explore-nav'>
                <ul>
                    <li>Agency Partnership<img src={sidearrow} alt="arrow"></img></li>
                    <li>Public Relations Agencies<img src={sidearrow} alt="arrow"></img></li>
                    <li>Top 100 Public Relations Agencies in India (2024)</li>
                </ul>
            </div>
            <div className='explore-body'>
                <div className='explore-head'>
                    <h6>Leverage influencer tools

                    </h6>
                    <h2>Explore More Top Public Relations Agencies</h2>
                    <pre>Discover more top PR agencies for effective communication that elevates your brand. Explore </pre> <pre>innovation and influence in every strategy.</pre>
                    <p>Discover more top PR agencies for effective communication that elevates your brand. Explore innovation and influence in every strategy.</p>
                </div>
                <div className="explore-cards">
                    <div className='explore-card'>
                        <div className='explore-image'>
                            <img src="https://s3-alpha-sig.figma.com/img/576b/5d8c/c767dcf2bb0a8f7af8a914cee8c5f52a?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hPPC9VvqvG6Kpj5x1hCTrLSOvOQLROq6Dw9fBJaxPSlUIFHHHzjLRJenKO8~-cWss-5RRfF2iF2iyYMQewQ10au5Trwj5VpNK-mK4LAGjX~VHNNbnzlWCcH7r8BPKcBY7QbxTwCRG8CN~qPWcTTFyA9erxYie-Xv5Nihb6Qmm~2COZRyoiczjtX8lZQQmBDKXphz~9~AF7dacfbxbRuT9G2JDPgLHslh9k-hCmosTkN1HblVkm0BnSw8JCt4errVK~zLK2z7gtmkKoN~CQ9xH5LZQkE~mCP0DUzke~veRHAiVHTjjdxg2-qi065qNURNhu2rMuYT0v7r5s1MmUvNRA__" alt="explore img" />
                        </div>
                        <div className='explore-card-details'>
                            <h4>Top 100 Public Relations Agencies in India (2024) Explore</h4>
                            <button>Explore <img src={uparrow} alt="arrow" width={"18px"} height={"18px"}/></button>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='explore-image'>
                            <img src="https://s3-alpha-sig.figma.com/img/59de/b849/f1efa01c38e47cd9f6ca21aca4ae93d9?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N5t6apAe~99moFQK-TKQxK9BHo8Xy5mG2hjFd7HcQ50ug06n1G8tvd1QFKOMAQeTehA7wYdk2u5rzIhLJaUq2A2mCb2kapj9S~UcT9svLsg5MkHyTG92sCKn7rJgFRMQs2MvYrLXcicLX8eUXtgytDvg-vcO~mmbN8UlJ~ued6XNGdmuMAiokYsmDyosLu6qYBzRCHrlvaxVO~J6cL1C6UDdct6uy9jklG6D-Le4DY~yTVJBi6OQ8kxZVrcqi2z5q~WaRd7a1OI7Vapd-3Dqv9Znt5i0By0cIbH~cRP9ay89HEbxCCjGb8FaCqwPbn1HEtyqXT4cBOU8A0jPOS7IEQ__" alt="explore img" />
                        </div>
                        <div className='explore-card-details'>
                            <h4>Top 100 Public Relations Agencies in India (2024) Explore</h4>
                            <button>Explore <img src={uparrow} alt="arrow" width={"18px"} height={"18px"}/></button>
                        </div>
                    </div>
                    <div className='explore-card'>
                        <div className='explore-image'>
                            <img src="https://s3-alpha-sig.figma.com/img/56eb/c3f5/0ff594182adc614594e1929a6afbd857?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G0jnwRihUEOvhqVEtopffV8m2zInxLTD7L2b~NiW1qqzwLY18UqTn5Y3RxHdcgXaNif2si6J4XR5T9VuLhYE86Z-W8GwU5TBkYFIZ3QpmjB3yoIsURrgNUfQoOzZokB57jEEE52lUsRkhqc-39SHxqkYDGIQfAvCv8D40IqwHsxI4BN8GaiyoH0MUhD6dceudVNMbWST23II~vtNaOMvXZcNN9y4q~lMVpEijLIIsYVDS4CeLXXJLu2tTtUYQ6sDr6jD93hRpTetJkeeDzcQjQ6kfaLPLsLj~If1ohUWk2tlG8p6WYppuYDfY5q6p1pbh3QgxKN7t0lxLhsR9YmUFg__" alt="explore img" />
                        </div>
                        <div className='explore-card-details' >
                            <h4>Top 100 Public Relations Agencies in India (2024) Explore</h4>
                            <button>Explore <img src={uparrow} alt="arrow" width={"18px"} height={"18px"}/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore