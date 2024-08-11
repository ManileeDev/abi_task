import React from 'react'
import aparntment from "../utils/aparntment.svg"
import map from "../utils/map.svg"
import year from "../utils/year.svg"
import factory from "../utils/factory.svg"
import arrow from "../utils/uparrow.svg"
import whitearrow from "../utils/uparrowwhite.svg"

const Posts = () => {
    const posts = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className='posts-container'>
            {
                posts && posts.map((post,index)=>(<div key={index} className='post-card'> 
                <div className='post-start'>
                    <div className='post-img-container'>
                        <img src="https://s3-alpha-sig.figma.com/img/7fdf/c73e/433dfcae0d520ecbf127f1427bd89901?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=exOr42~ogvHKe5SkLBy2kt3KmYAMtgF-tDXYxfDF-9uMQtk3f0Y7P3jlHThOG6Q7iSYIEyJ4sEjC-xWeUEYnd9F9OZ~40f4t8DpJ6uChY3lAow9~yGzewvIsDfAIphNFfrhqvuYIUvjPG5QNmBEw0os9jC8tPQNs5jO7cBnhe0bUbPMacHogLuClmU05InCZmI6Eea0vjH5~s74zI4wvNndGYIuDwzUt-CcSYPNDYiqcmSo6we6RNR0qM2BqekOSnCp9i8dY8j6aKG4KsN00Jn6cykygmWbZMB8R49xT9KwMFl4Iv5O6ik9LscwTw0BRsLoJ3RVanZfhGWYTW0~LOw__" alt="posts" width={"50px"} />
                    </div>
                    <div className="post-info">
                        <h4>MSL (Global)</h4>
                        <div><span className='post-span'>Brand development</span> <span className='post-span'>Community Management</span></div>
                        <p>The Mavericks: Transforming brands through strategic reputation management and consumer engagement
                        </p>
                        <ul>
                            <li><img src={aparntment} alt='aparntment'></img> 1,001-5,000 employees</li>
                             
                            <li><img src={map} alt=""></img> Paris</li>
                            <li><img src={year} alt=""></img> 2009</li>
                            <li><img src={factory} alt=""></img> PR Agency
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='post-end'>
                    <button>Post brief</button>
                </div>
            </div>))
            }
           
        </div>
    )
}

export default Posts