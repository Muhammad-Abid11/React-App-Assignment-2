import React, { useEffect, useState } from 'react'
import FbPost from './components/FbPost'
import './fb_parent.css'
import loader from './assests/loader.gif'
import FbNav from './components/fbNav'

export default function TaskApp6Fb() {

    const [postData, setPostData] = useState([])
    useEffect(() => {
        fetchPost()
    }, [])

    const fetchPost = async () => {
        const res = await fetch("https://dummyjson.com/products")
        const data = await res.json()
        setPostData(data.products)
        // console.log("hellooo", data.products)

    }
    if (postData.length === 0) {
        return (
            <div>
                {/* <img src={loader} alt="loader" srcset="" /> */}
                <FbNav />

            </div>
        )
    }

    return (
        <div className='fbBody'>
            {/* <h1>TaskApp6Fb</h1> */}
            <FbNav />

            {/*             <FbPost
                images={postData[0].images}
                title={postData[0].title}
                description={postData[0].description}
            />
 */}
            {postData.map((post, index) => {
                return (<FbPost
                    images={post.images}
                    title={post.title}
                    description={post.description}
                />)
            })}

            {/*{postData.map((post, index) => ( 
                here we use round bracket means direct return work
                while upper we use { } bracket so we use return()
                <FbPost 
                title={post.title}
                />
            ))} */}
        </div>
    )
}
