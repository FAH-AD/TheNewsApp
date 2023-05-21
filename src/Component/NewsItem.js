import React, { Component } from 'react'
import photo from './no-photo.png'
export class NewsItem extends Component {
  render() {
    let {title,description,imgUrl,url,author,time,source}=this.props;
    let d=this.props.time
    
    return (
      <div>
        <div className="card" style={{width: "18rem"}} >
      

  <img src={this.props.imgUrl?this.props.imgUrl:photo} className="card-img-top" alt=''/>
  <div className="card-body">
    <div
    style={{display:'flex',
    justifyContent:'flex-end',
    position:'absolute',
    right:'0',
    top:'0%'
  }}>
    <span className="  badge rounded-pill bg-primary"  > {source} </span>
 
    </div>

    <h5 className="card-title">{this.props.title}  </h5>
   
    <p className="card-text">{this.props.description}</p>
    <p className="card-text"><small className="text-muted">By {this.props.author?this.props.author:"Unkown"} on {new Date(this.props.time).toUTCString()}</small></p>
    <a href={this.props.url} target='_blank' className="btn btn-primary">Read More</a>
  </div>
</div> 
      </div>
    )
  }
}

export default NewsItem
