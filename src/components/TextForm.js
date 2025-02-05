
import PropTypes from 'prop-types'
import React, {useState} from 'react';




export default function TForm(props) {

  const handleClick = ()=>{
    // console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleChange = (event)=>{
    // console.log("on change trigerred");
    setText(event.target.value);
  }
  const [text, setText] = useState('Enter your text'); //Array destructuring syntax
  return (
    <div>
        <h1>{props.heading}</h1>
        <form>
  <div className="form-group">
    <label for="exampleInputEmail1">{props.title}</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputPassword1">Password</label>
    <textarea className="form-control" value={text} onChange={handleChange} id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
</form>
<button className="btn btn-primary"  onClick={handleClick} >uppercase</button>
<p>{text}</p>
    </div>
  )
};


TForm.propTypes = {
  title: PropTypes.number.isRequired,
  heading: PropTypes.number.isRequired
};
