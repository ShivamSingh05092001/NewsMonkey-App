
import React from 'react';

const NewsItem = ({ title, description, imageUrl, newsUrl, author, date, source }) => {
    return (
        <div className="my-3">
            <div className="card" style={{ width: "18rem" }}>
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zIndex: '1' }}>
                    {source}
                </span>
                <img src={!imageUrl ? "https://s.hdnux.com/photos/01/40/43/75/25313089/6/rawImage.jpg" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-muted">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a rel="noopener noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}

export default NewsItem;

