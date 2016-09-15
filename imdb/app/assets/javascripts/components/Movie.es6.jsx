class Movie extends React.Component{
    render(){
      let data = this.props.data
      return (
        <li className="movie">
          {data.Poster !== 'N/A' ?

          <img className="poster" src={data.Poster}/>
          :null
          }
          <div className="movie-content">
            <p>
              <span className="Title">{data.Title}</span>
              <span className="Year">({data.Year})</span>
            </p>
          </div>
        </li>
      )
    }
}
