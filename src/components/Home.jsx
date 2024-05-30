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

  const subFunc = (e) => {
    e.preventDefault();
    const a1 = ["LOVES"];
    const a2 = [];
    a2.push(name1);
    const a3 = [];
    a3.push(name2);

    const countLetters = (arrays) => {
      const letterCount = {};

      arrays.forEach(arr => {
        arr.forEach(element => {
          for (let char of element) {
            char = char.toUpperCase();
            if (letterCount[char]) {
              letterCount[char]++;
            } else {
              letterCount[char] = 1;
            }
          }
        });
      });

      return letterCount;
    }

    const letterCounts = countLetters([a1, a2, a3]);

    console.log("Letter Counts:", letterCounts);

    // const a4 = [];
    // a4.push(letterCounts);

    // console.log("Array4:", a4);

    const a4 = Object.entries(letterCounts).map(([letter, count]) => `${count}`);

    console.log("Array4:", a4);

    setName1("");
    setName2("");

    // console.log("Array1:", a1);
    // console.log("Array2:", a2);
    // console.log("Array3:", a3);
    // console.log("Name 1:", name1);
    // console.log("Name 2:", name2);
  }

  return (
    <div>
      <form onSubmit={(e) => { subFunc(e) }}>
        <div>
          <label>Enter Names</label>
          <input type="text" onChange={(e) => { newname1(e) }} />
          <input type="text" onChange={(e) => { newname2(e) }} />
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default Home
