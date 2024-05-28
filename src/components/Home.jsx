import React, { useState } from 'react'

const Home = () => {

    const [name1, setName1] = useState("");
    const [name2, setName2] = useState("");

    const newname1 = function (e) {
        setName1(e.target.value);
    }

    const newname2 = function (e) {
        setName2(e.target.value);
    }


  return (
    <div>
      <form>
        <div>
            <label>Enter Names</label>
            <input type="text" onChange ={ (e) => {newname1(e)}}/>
            <input type="text" onChange ={ (e) => {newname2(e)}}/>
            <input type="submit" value="Submit"/>
        </div>
      </form>
    </div>
  )
}

export default Home
