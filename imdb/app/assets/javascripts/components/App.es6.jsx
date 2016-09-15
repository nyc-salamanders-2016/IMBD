class App extends React.Component {
  constructor(){
     super()
     this.state = {
       movies: []
     }
     this.searchFor = this.searchFor.bind(this)
   }
    searchFor(title) {
       $.ajax({
          url: 'http://www.omdbapi.com?s='.concat(title),
          method: 'get'
        })
        .done(function (response) {
          this.setState( {movies: response.Response == "True" ? response.Search : []} )
      }.bind(this))
     }

   componentDidMount(){
   }

   submitHandler(event) {
      event.preventDefault()
      this.searchFor(this.refs.searchContent.value)
    }

  render() {
    return(
      <div className = "site-container">
        <section className = "nav-bar">
          <header id="top-nav">
             <div id="brand">IMDB SEARCH THING</div>
             <form onSubmit={this.submitHandler.bind(this)} id="search-form">
               <input ref="searchContent" id="search" type="text" name="query"/>
             </form>
             <i className="fa fa-search"></i>
           </header>
        </section>
        <section className = "movies-container">
          <MovieList movies = {this.state.movies}/>
        </section>
      </div>
    )
  }
}
