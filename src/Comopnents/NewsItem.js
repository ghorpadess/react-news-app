import React from "react";

const NewsItem = (props) => {
  const { title, description, imgUrl, newsUrl, publishDate } = props;

  return (
    <div className="my-4">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={imgUrl}
          style={{ height: "14rem" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title}...</h5>
          <p className="card-text">{description}...</p>
          <a href={newsUrl} target="blank" className="btn bt-sm btn-primary">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
