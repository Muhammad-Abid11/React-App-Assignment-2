import FbImageLibrary from 'react-fb-image-grid'
import avatar from '../../assests/avatar.png'
import globe from '../../assests/globe.png'
import like from '../../assests/like.png'
import likeBlue from '../../assests/like-blue.png'
import Comment from '../../assests/comment.png'
import share from '../../assests/share.png'
import './fb.css'
import { useState } from 'react'
function FbPost({ images, title, description }) {

    const [likee, setLikee] = useState(true)
    return (
        <div>
            <div className='container-body'>

                <div className='contant'>
                    <div className='contant-title'>
                        <img src={avatar} alt="logo" width={100} />
                        <div className='contant-text'>
                            <h1>{title}</h1>
                            <p>Suggested for you <img src={globe} alt="globe" width={10} />
                            </p>

                        </div>
                    </div>
                    <h4>{description}</h4>
                </div>

                <div className='contain-image'>
                    <FbImageLibrary images={images} />
                </div>
                <div className='contain-footer'>
                    <div>
                        <input type="image" src={likee ? like : likeBlue} alt="like-logo" width={30} onClick={() => setLikee(!likee)} />
                        <h4>Like</h4>
                    </div>
                    <div>
                        <img src={Comment} alt='comment-logo' width={30} />
                        <h4>Comment</h4>
                    </div>
                    <div>
                        <img src={share} alt='share-logo' width={30} />
                        <h4>Share</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FbPost