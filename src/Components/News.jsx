import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
    
    
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page : 1
        }
    }
    capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      };
    async updateArticle(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8cd85f741b14330af3c2077619d4ce7&page=${this.state.page - 1}&pageSize= ${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({ articles: parsedata.articles,
            loading : false
         })
    }

    async componentDidMount() {
        console.log("componentDid");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8cd85f741b14330af3c2077619d4ce7&page=${this.state.page - 1}&pageSize= ${this.props.pageSize}`;
        this.setState({loading : true});
        let data = await fetch(url);
        let parsedata = await data.json()
        console.log(parsedata)
        this.setState({ articles: parsedata.articles,
            loading : false
         })
    }
    
    prevPage = async () => {
        // console.log("prevPage");
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92ecd7b4dc284fedb9895a2e5a0e7915&page= ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        // let data = await fetch(url);
        // let parsedata = await data.json()
        // console.log(parsedata)
        // this.setState({ 
        //     page : this.state.page - 1,
        //     articles: parsedata.articles,
        //     totalResults : parsedata.totalResults
        //  })
        this.setState({page:this.state - 1}
            )
            this.updateArticle()
    }

    nextPage = async () => {
    //     console.log("nextPage");
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize))) {

    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=92ecd7b4dc284fedb9895a2e5a0e7915&page= ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //     this.setState({loading : true});
    //     let data = await fetch(url);
    //     let parsedata = await data.json()
    //     console.log(parsedata)
    //     this.setState({ 
    //         page : this.state.page + 1,
    //         articles: parsedata.articles,
    //         totalResults : parsedata.totalResults,
    //         loading : false
    //      })
    // }
    this.setState({page:this.state + 1}
        )
        this.updateArticle()
}
    render() {
        console.log("render")
        return (
            <div className="news">
                <div className="container">
                    <div className="row">
                        <div className="col-2 col-sm-2 col-md-2 col-lg-4"></div>
                        <div className="col-10 col-sm-8 col-md-6 col-lg-5 mt-2">
                            <div className="h1 text-center ">{this.capitalizeFirst (this.props.category) } : Top News in India </div>
                            
                        </div>
                        <div className="col-2 col-sm-2 col-md-4 col-lg-4"></div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        {!this.state.loading && this.state.articles.map((element) => {
                            return (<div className="col col-sm col-md-5 col-lg-4 col-xl-3 " key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description: ""} imageUrl={element.urlToImage ? element.urlToImage : "https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000"} newsUrl={element.url} publishedAt={element.publishedAt} /></div>
                            )
                        })}
                    </div>
                </div>
                <div className="container-fluid d-flex justify-content-between">
                
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-primary m-4 " onClick={this.prevPage}>&larr; Previous</button>
                        
                        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-success m-4 " onClick={this.nextPage}>Next &rarr;</button>

                </div>
                <div className="text-center">{this.state.loading && <Spinner />}</div>
            </div>
        );
    }
}

export default News;
