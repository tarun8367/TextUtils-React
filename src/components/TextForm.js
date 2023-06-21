import React, {useState} from "react";
import PropTypes from "prop-types" ;



export default function TextForm(props) {

  //   const totalWords = () =>{
  //     if(text.length() === 0) return 0;
  //     else if(text.charAt(text.length - 1 === ' ')) return text.length-1;
  //     return text.length;
  //   }
  //   const countWords = (text) => {
  //     let arr = text.split(" ");
  //     let newArr = arr.filter((word) => {
  //         return word!== String("");
  //     });
  //     return newArr.length;
  // }

    const handleChange = (event) =>{
        // console.log("ON Change");
        setText(event.target.value);
    }

    const handleUpClick = () => {
        // console.log("Uppercase was clicked " );
        let updatedText = text.toUpperCase();
        setText(updatedText);
        props.showAlert("Converted to UpperCase","success");
      }
      
      const handleLoClick = () => {
        // console.log("Uppercase was clicked " );
        let updatedText = text.toLowerCase();
        setText(updatedText);
        props.showAlert("Converted to LowerCase" ,"success");
      }
      const handleCapClick = () => {
        // console.log("Uppercase was clicked " );
        const arr = text.split(" ");
        
        //loop through each element of the array and capitalize the first letter.
        
        
        for (var i = 0; i < arr.length; i++) {
          arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
          
        }
        let updatedText = arr.join(" ");
        setText(updatedText);
        props.showAlert("Text has been capitalized","success");
      }

    const[text , setText] = useState("");
  return (
    <>
    <div className="container" style={{color : props.mode === 'light' ? '#1a1a33' : 'white'}}>
    <h1 >{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor :props.mode === 'light' ? 'white' : 'grey' , color : props.mode === 'light' ? 'grey' : 'white' , border : props.mode === 'light' ? '2px solid black' : '2px solid white' }} onChange={handleChange} id="myText" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-3" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLoClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleCapClick}>Convert to Capitalize</button>
    </div>
    <div className="container my-3" style={{color : props.mode === 'light' ? '#1a1a33' : 'white'}}>
        <h1>Your text summary</h1>
        <p>{text.trim() === '' ? 0 : text.match(/\S+/g).length} words and {text.length} characters</p>
        <h2>Preview</h2>
        <p>{text.length === 0 ? "Please enter some text to preview" : text }</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading : PropTypes.string
}
