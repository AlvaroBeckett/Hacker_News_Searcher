import React from 'react'

class NewsRow extends React.Component {
  viewNews() {
    const url = "http://hn.algolia.com/api/v1/" + this.props.post.id
    window.location.href = url
  }

  render() {
    return <table key={this.props.post.id}>
    <tbody>
      <tr>
        <td>
          <h3>{this.props.post.title}</h3>
          <p>{this.props.post.overview}</p>
          <input type="button" onClick={this.viewpost.bind(this)} value="View"/>
        </td>
      </tr>
    </tbody>
  </table>
  }
}

export default NewsRow