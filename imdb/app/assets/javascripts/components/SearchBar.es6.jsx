class SearchBar extends React.Component {

  submitHandler(event) {
    event.preventDefault()
    this.props.searchFunction(this.refs.searchContent.value)
  }

  render() {
    return (
      <header id="top-nav">
        <div id="brand">IMDB SEARCH THING</div>
        <form onSubmit={this.submitHandler.bind(this)} id="search-form">
          <input ref="searchContent" id="search" type="text" name="query"/>
        </form>
        <i className="fa fa-search"></i>
      </header>
    )
  }
}
