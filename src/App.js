import React, { Component } from 'react';
import './App.css';
import NewsRow from './NewsRow.js'
import $ from 'jquery'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}

    this.performSearch("Steve Jobs")
  }

  performSearch(searchTerm) {
    console.log("Perform search using Hacker News")
    const urlString = "http://hn.algolia.com/api/v1/search?query=" + searchTerm
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        // console.log(searchResults)
        const results = searchResults.results
        // console.log(results[0])

        var newsRows = []

        results.forEach((post) => {
          const newsRow = <NewsRow key={post.id} post={post}/>
          newsRows.push(newsRow)
        })

        this.setState({rows: newsRows})
      },
      error: (xhr, status, err) => {
        console.error("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    boundObject.performSearch(searchTerm)
  }

  render() {
    return (
      <div>
        
        <table className="titleBar">
          <tbody>
            <tr>
              <td width="8"/>
              <td>
                <h1>Hacker News Search</h1>
              </td>
            </tr>
          </tbody>
        </table>

        <input className='searchBar' onChange={this.searchChangeHandler.bind(this)} placeholder="Enter search term"/>

        {this.state.rows}

      </div>
    );
  }
}

export default App;
