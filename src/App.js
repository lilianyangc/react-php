import { useState } from 'react';
import $ from 'jquery'; //npm install jquery
import './App.css';

/**
 * Renders a form that allows the user to input a name and submit it to a PHP server.
 * The server responds with a result, which is displayed on the page.
 *
 * @return {JSX.Element} The rendered form component.
 */

function App() {

  const [name, setName] = useState('');
  const [result, setResult] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = $(event.target);
    $.ajax({
      type: "POST",
      url: form.attr("action"),
      data: form.serialize(),
      success(data) {
        console.log(data);
        setResult(data);
      }
    });
  }

  return (
    <div className="App">
      <form action="http://localhost:8000/server.php" method="POST" onSubmit={(event)=>handleSubmit(event)}>

        <input type="text" id="name" name="name" value={name} onChange={(event)=>handleChange(event)}/>
        <button type="submit" >Submit</button>

      </form>

      <p>{result}</p>
    </div>
  );
}

export default App;
