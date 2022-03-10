import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import "./AllQuestion.css";

function AllQuestion() {
  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>Votes</span>
            </div>

            <div className="all-option">
              <p>0</p>
              <span>Answers</span>
            </div>

            <div className="all-option">
              <small>0 Views</small>
            </div>
          </div>
        </div>

        <div className="question-answer">
          <Link to={'/question'}>
            This is question title. This is question title. This is question
            title. This is question title. This is question title?
          </Link>
          <div style={{ width: "90%" }}>
            <div>
              This is answer. This is answer. This is answer.This is answer.This
              is answer.This is answer.This is answer.This is answer.This is
              answer.This is answer.This is answer.
            </div>
          </div>

          <div
            style={{
              display: "flex",
            }}
          >
            <span className="question-tags">react</span>
            <span className="question-tags">ant</span>
            <span className="question-tags">frontend</span>
          </div>
        
        <div className="author">
          <small>TimeStamp</small>
          <div className="author-details">
            <Avatar />
            <p>User Name</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestion;
