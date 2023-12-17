import React, { useEffect, useState } from "react";

import Loading from "./Loading";
import NewsItem from "./NewsItem";

const News = (props) => {
  const { category, pageSize } = props;
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(null);

  const getNews = () => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9a4b3e90607e478eb0108869ff285734&page=1&pageSize=${pageSize}`
    ).then((result) => {
      result.json().then((res) => {
        setLoading(false);
        setArticles(res.articles);
        setTotalResults(res.totalResults);
        console.log(res);
      });
    });
  };

  useEffect(() => {
    getNews();
  }, []);

  const onPrevious = () => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9a4b3e90607e478eb0108869ff285734&page=${
        page - 1
      }&pageSize=${pageSize}`
    ).then((result) => {
      result.json().then((res) => {
        setLoading(false);
        setArticles(res.articles);
      });
    });
    setPage(page - 1);
  };

  const onNext = () => {
    setLoading(true);
    fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9a4b3e90607e478eb0108869ff285734&page=${
        page + 1
      }&pageSize=${pageSize}`
    ).then((result) => {
      result.json().then((res) => {
        setArticles(res.articles);
        setLoading(false);
      });
    });
    setPage(page + 1);
  };
  return (
    <div>
      <h1>News Component</h1>
      <div className="container">
        <div className="row">
          {articles.map((ele) => {
            return (
              <>
                {loading ? (
                  <Loading />
                ) : (
                  <div className="col-md-4" key={ele.url}>
                    <NewsItem
                      title={ele.title ? ele.title.slice(0, 45) : ""}
                      description={
                        ele.description ? ele.description.slice(0, 80) : ""
                      }
                      imgUrl={
                        ele.urlToImage
                          ? ele.urlToImage
                          : "https://static1.anpoimages.com/wordpress/wp-content/uploads/2023/05/google-pixel-fold-hands-on-14.jpg"
                      }
                      newsUrl={ele.url ? ele.url : ""}
                      publishDate={ele.publishedAt ? ele.publishedAt : ""}
                    />
                  </div>
                )}
              </>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-around">
        <button
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={onPrevious}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / pageSize)}
          className="btn btn-dark px-4"
          onClick={onNext}
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
};

export default News;
