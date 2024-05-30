import React, { useState } from 'react'

const Home = () => {

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [show, setShow] = useState(false);
  const [meter, setMeter] = useState("0");

  const newname1 = function (e) {
    setName1(e.target.value);
  }

  const newname2 = function (e) {
    setName2(e.target.value);
  }

  const subFunc = (e) => {
    e.preventDefault();
    setShow(true);
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

    const a4v1 = Object.entries(letterCounts).map(([letter, count]) => `${count}`);
    const a4 = a4v1.map(str => Number(str));

    let firstAndLastSum = [];

    for (let i = 0; i < Math.ceil(a4.length / 2); i++) {
      if (i === a4.length - 1 - i) {
        // Push the middle element directly if there's only one element left
        firstAndLastSum.push(a4[i]);
      } else {
        // Sum the first and last elements and push the result
        const sum = a4[i] + a4[a4.length - 1 - i];
        firstAndLastSum.push(sum);
      }
    }

    while (firstAndLastSum.length > 2) {
      const newSumArray = [];
      for (let i = 0; i < Math.ceil(firstAndLastSum.length / 2); i++) {
        if (i === firstAndLastSum.length - 1 - i) {
          newSumArray.push(firstAndLastSum[i]);
        } else {
          const sum = firstAndLastSum[i] + firstAndLastSum[firstAndLastSum.length - 1 - i];
          newSumArray.push(sum);
        }
      }
      firstAndLastSum = newSumArray;
    }

    console.log("firstAndLastSum", firstAndLastSum)

    setMeter(firstAndLastSum);

    setName1("");
    setName2("");

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
      {show===true && (
        <div>{meter}</div>
      )}
    </div>
  )
}

export default Home
