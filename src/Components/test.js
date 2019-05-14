import React, { Component } from 'react';
import {post} from 'axios';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {value: '', fileobj:{}, response: {}};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    handleChange(event) {
    this.setState({value: event.target.value});
    }

    handleClick(event) {
    const value = event.target.files[0];
    this.setState({fileobj: event.target.files[0]});
    console.log(value);
    }

    handleSubmit(e) {
        e.preventDefault();
        let data = this.state.fileobj;
        console.log(data);

        let reader = new FileReader();
        reader.readAsDataURL(data);

      reader.onload = (e) => {
        const url = 'http://localhost:4000/fileUpload';
        const formData = {file: e.target.result}
        return post(url, formData)
                .then(response => console.warn("result", response));
      }
        
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
        <label>
          Name:
          <input type="text" onChange={this.handleChange} />
        </label>
        Select File<input type="file" name="myFile" onChange={this.handleClick}/><br/><br/>
        <input type="submit" value="Submit"/>
        {this.state.res}
      </form>
    )
  }
}

export default Test;
