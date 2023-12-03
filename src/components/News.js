import React, { useState } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import InfiniteScroll from "react-infinite-scroll-component";
import { useEffect } from 'react';

const News =(props)=> {
  const [results, setResults]= useState([]) 
  const [page, setPage]= useState(1) 
  const [loading, setLoading]= useState(true)

  const updateNews=async()=> {
    props.handleProgress(0);
    const url = `https://api.nytimes.com/svc/topstories/v2/${props.category}.json?api-key=xb0TCOwNmAJdGckuw9gA4XvpgC40tjG3`
    setLoading(true);
    props.handleProgress(30)
    let data = await fetch(url);
    props.handleProgress(50)
    let parsedData = await data.json();
    props.handleProgress(100)
    console.log(parsedData);
    setResults(parsedData.results)
    setLoading(false)
  }
  const captlizeFirst=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  useEffect (()=>{
    document.title = `${captlizeFirst(props.category)} - NewsMonkey`;
    updateNews();
  },[])
  
  // const fetchMoreData = async() => {
  //  const url = `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=xb0TCOwNmAJdGckuw9gA4XvpgC40tjG3`
  //  setPage(page+1)
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   console.log(parsedData);
  //   setResults(results.concat(parsedData.results))
  //   setLoading(false);
  // };

    return (
      <>
        
          <h1 className='text-center 'style={{ color:props.mode==='dark'?'white':'black',marginTop:'20px'}} >NewsMonkey - Latest {props.headline} Headlines</h1>
          {/* {this.state.loading&&<Loading/>} */}
            {/* <InfiniteScroll
              dataLength={results.length}
              next={fetchMoreData}
              hasMore={results.length < totalResults}
              loader={<Loading/>}
            > */}
              <div className='container' >
              <div className='row' >
              {results.map((element,index) => {
                return <div key={index} className='col-md-4'>
                  <NewsItem mode={props.mode}  source={element.source} author={element.byline} date={element.updated} title={element.title ? element.title.slice(0, 45) : ""} description={element.abstract ? element.abstract.slice(0, 88) : ""} imageUrl={element.multimedia[0].url ? element.multimedia[0].url : "https://cdn.ndtv.com/common/images/ogndtv.png"} newsUrl={element.url}/>
                </div>
              })}
              </div>
              </div>
            {/* </InfiniteScroll> */}
            
      </>
    )
  }


News.defaultProps = {
  country: 'in',
  category: 'general',
  headline: '',
  apikey:'' 
}

export default News
