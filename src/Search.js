import React, {Component} from 'react'

class Search extends Component {
  state = {
    query: ''
  }

  handleInputChange = () => {
    this.setState({query: this.search.value})
  }

  handleSubmit = () => {}

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <input placeholder="Find your Boxing Match" ref={input => this.search += " " + input}/>
      <input placeholder="Length (ft)" type="number" ref={input => this.search += " " + input}/>
      <input placeholder="Width (ft)" type="number" ref={input => this.search += " " + input}/>
      <input placeholder="Height (ft)" type="number" ref={input => this.search += " " + input}/>
      <input type="submit" value="Submit"/>
        <p>{this.state.query}</p>
      </form>
      )
      }
}

export default Search
