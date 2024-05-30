import React, { useState } from 'react';
import './home.css';

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

    console.log("A4: ", a4)

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

    console.log("firstAndLastSum: ", firstAndLastSum)

    // i have doubt with length, should i keep 2 or 1
    while (firstAndLastSum.length > 1) {
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

    console.log("firstAndLastSum Updated", firstAndLastSum)

    setMeter(firstAndLastSum);

    setName1("");
    setName2("");

  }

  return (
    <div className='container'>
      <form onSubmit={(e) => { subFunc(e) }}>
        <div className='inputs'>
          <label>Enter Names</label>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" onChange={(e) => { newname1(e) }} required />
            <label className="form__label">Person 1</label>
          </div>
          <div className="form__group field">
            <input type="text" className="form__field" placeholder="Name" onChange={(e) => { newname2(e) }} required />
            <label className="form__label">Person 2</label>
          </div>
          {/* <input type="text" onChange={(e) => { newname1(e) }} /> */}
          {/* <input type="text" onChange={(e) => { newname2(e) }} /> */}
          {/* <input type="submit" value="Submit" /> */}
          <div>
            <button className="btn-class-name">
              <span className="back"></span>
              <span className="front"></span>
            </button>
          </div>
        </div>
      </form>
      {show === true && (
        <>
          <div className="loader">
          <div className='output'>{meter}%</div>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
