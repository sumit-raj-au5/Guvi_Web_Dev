import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Bookmark, History } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import ReactQuill from 'react-quill';
import "react-quill/dist/quill.snow.css" //quill's css very important to import for using react quill
import './index.css'

function MainQuestion() {
    //for hiding and showing add comment box
    const[show, setShow] = useState(false)
  return (
    <div className='main'>
        <div className="main-container">
            <div className="main-top">
                <h2 className='main-question'>This is Question Title?</h2> 
                    <Link to={'/add-question'}>
                        <button> Ask Question </button>
                    </Link>
            </div>
            <div className="main-desc">
                <div className="info">
                    <p>Timestamp</p>
                    <p>Active<span>Today</span></p>
                    <p>Viewed <span>43</span></p>
                </div>
            </div>

            <div className="all-questions">
                <div className="all-questions-container">
                <div className="all-questions-left">
                <div className="all-options">
                    <p className='arrow'> <ArrowDropUpIcon /> </p>
                    <p className='arrow'>0</p>
                    <p className='arrow'> <ArrowDropDownIcon/> </p>
                    <Bookmark />
                    <History />
                </div>
                </div>
                <div className="question-answer">
                    <p>This is test question body</p>
                    <div className="author">
                        <small>asked "Timestamp"</small>
                        <div className="auth-details">
                            <Avatar/>
                            <p>Author Name</p>
                        </div>
                    </div>
                    <div className="comments">
                        <div className="comment">
                             <p>This is comment <span>User name</span> <small>Timestamp</small> </p>
                        </div>
                        <p onClick={()=>setShow(!show)}>Add a comment</p>
                        {
                            show && (<div className='title'>
                                <textarea name="add-comment" id="add-comment" cols="30" rows="10" placeholder='Add your comment...'></textarea>
                                <button className='button'>Add comment</button>
                            </div>)
                        }
                    </div>
                </div>
                </div>
            </div>
            {/* this classname can be all-answers */}
            <div className="all-questions">
                <p className='all-question-no-of-answer'>No. of answer</p>
                <div className="all-questions-container">
                <div className="all-questions-left">
                <div className="all-options">
                    <p className='arrow'> <ArrowDropUpIcon /> </p>
                    <p className='arrow'>0</p>
                    <p className='arrow'> <ArrowDropDownIcon/> </p>
                    <Bookmark />
                    <History />
                </div>
                </div>
                <div className="question-answer">
                    <p>This is test answer body</p>
                    <div className="author">
                        <small>asked "Timestamp"</small>
                        <div className="auth-details">
                            <Avatar/>
                            <p>Author Name</p>
                        </div>
                    </div>
                    
                </div>
                </div>
            </div>
        </div>
        <div className="main-answer">
            <h3>Your Answer</h3>
            <ReactQuill className='react-quill' theme='snow' style={{height:"150px"}}/>
        </div>
        <button className='button' style={{ marginTop:"75px" }}>Post Your Answer</button>
    </div>
  )
}

export default MainQuestion