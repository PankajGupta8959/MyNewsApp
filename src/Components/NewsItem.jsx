// API key = 92ecd7b4dc284fedb9895a2e5a0e7915
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export class NewsItem extends Component {
    
    render() {
        let {title , description , imageUrl, newsUrl, publishedAt} = this.props;
        return (
            <div className="container mt-2">
                <div className="" style= {{ width: "18rem" }}>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                        <div className="card-body"> 
                            <h5 className="card-title mb-1">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
                            <p className="card-title my-3">{publishedAt}</p>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
