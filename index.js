import React from "react";
import {render} from "react-dom";
//CSS
import './style/css/bootstrap.min.css'; 
import './index.css';
//JS
import {sampleText} from './sampleText';
//Marked
import marked from 'marked';

class App extends React.Component{

  state = {
    text : sampleText
  };


  componentWillUpdate(nextProps , nextState){
    localStorage.setItem('text' , nextState.text );
  }

  componentWillMount(){
    const localStorageText = localStorage.getItem('text'); 

      if(localStorageText){
        this.setState( { text : localStorageText } );
      }
  }

  editText = (event) => {
    const text = event.target.value
    this.setState({ text })
  };

  renderText = (text) => {
    const renderText = marked(text, {Sanitize : true})
    return{__html : renderText}
  }

  render(){
    
    return(
      
      <div className="container">

        <div className="row">

          <div className="col-sm-6">

            <textarea value={this.state.text}
              rows="35"
              className="form-control"
              onChange = { (e) => this.editText(e) }
            >
            </textarea>

          </div>

          <div className="col-sm-6">

            <div dangerouslySetInnerHTML={this.renderText(this.state.text)}/>

          </div>

        </div>

      </div>

    )
  }
} 

render(
  <App />,
  document.getElementById('root')
);














