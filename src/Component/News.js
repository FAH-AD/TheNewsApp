import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";

import Loader from "./Loader";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import backgroundImage from "./vecteezy_world-map-illustration-vector_.jpg";

const News = (props) => {
  const [article, setarticle] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  const letterCaps = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const getData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fef9e08e5e2f4c3f9a6f8e1c7d96f7ff&page=${page}&category=${props.category}&pageSize=${props.pageSize}`;
    props.setprogress(10);
    let data = await fetch(url);
    props.setprogress(30);
    let parsedData = await data.json();
    props.setprogress(50);
    setarticle(parsedData.articles);
    settotalResults(parsedData.totalResults);
    setloading(false);

    props.setprogress(100);
  };
  useEffect(() => {
    getData();
    document.title = `TheNews-${letterCaps(props.category)}`;
    setpage(page + 1);
  }, []);

  const fetchMoreData = async () => {
 
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=fef9e08e5e2f4c3f9a6f8e1c7d96f7ff&page=${page+1}&category=${props.category}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    setloading(true);
    let data = await fetch(url);
    let parsedData = await data.json();
    setarticle(article.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);
    setloading(false);
  };

  return (
    <div>
      <h1 className="text-center" style={{marginTop:'90px'}}>
        Top {letterCaps(props.category)} Headlines
      </h1>
      {loading?<Loader />:""}
      <InfiniteScroll
        dataLength={article.length}
        next={fetchMoreData}
        hasMore={article.length !== totalResults}
        loader={loading?<Loader />:""}
      >
        <div className="container" style={{ backgroundImage: backgroundImage }}>
          <div className="row my-4">
            {article.map((element) => {
              return (
                <div className="col-md-4 my-2" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    url={element.url}
                    author={element.author}
                    time={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
};

News.defaultProps = {
  country: "us",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.string,
  category: PropTypes.string,
};
export default News;
