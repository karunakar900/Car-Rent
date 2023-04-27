import React, { useState } from 'react'

const Form1 = () => {

  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');


  const handleFirstname = (event) => {
    setfirstname(event.target.value);
  }


  const handlelastname = (event) => {
    setlastname(event.target.value);
  }

  return (
    <form>
      <label>
        Firstname
        <input tytpe="text" value={firstname} onChange={handleFirstname} />
      </label>
      <br></br>
      <label>
        lastname
        <input type="text" value={lastname} onChange={handlelastname} />
      </label>
      <br></br>
      <button>Next</button>
    </form>
  )
}

export default Form1;