class App extends React.Component {
  constructor(){
     super()
     this.state = {
       movies: []
     }

   }
    searchFor(title) {
       $.ajax({
          url: 'http://www.omdbapi.com?s='.concat(title),
          method: 'get'
        })
        .done(function (response) {
          debugger;
          this.setState( {movies: response.Response == "True" ? response.Search : []} )
      }.bind(this))
     }

   componentDidMount(){

     // $.ajax({
     //   url: 'http://www.omdbapi.com/?s=Love' ,
     //   method: 'get'
     // })
     // .done(function (response) {
     //  this.setState( {movies: response.Search})

     // }.bind(this))
   }


  render() {
    return(
      <div className = "site-container">
        <section className = "nav-bar">
          <SearchBar searchFunction = {this.searchFor.bind(this)} />
        </section>
        <section className = "movies-container">
          <MovieList movies = {this.state.movies}/>
        </section>
      </div>
    )
  }
}
