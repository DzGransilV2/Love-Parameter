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

  const reload = () => {
    window.location.reload();
  }

  return (
    <div className='container'>
      <div>
      <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 256 256" viewBox="0 0 256 256" width="256" height="256"><circle cx="128" cy="128" r="124" fill="#576fa5" class="color576fa5 svgShape"></circle><path fill="#395288" d="M128,4c-1.171,0-2.337,0.02-3.5,0.052C191.364,5.905,245,60.688,245,128			c0,67.312-53.636,122.094-120.5,123.948c1.163,0.032,2.329,0.052,3.5,0.052c68.483,0,124-55.517,124-124S196.483,4,128,4z" class="color395288 svgShape"></path><path fill="#758ec3" d="M128,252c1.171,0,2.337-0.02,3.5-0.052C64.635,250.094,11,195.312,11,128
			C11,60.688,64.635,5.905,131.5,4.052C130.337,4.02,129.171,4,128,4C59.517,4,4,59.517,4,128S59.517,252,128,252z" class="color758ec3 svgShape"></path><circle cx="128" cy="128" r="109.097" fill="#f4efed" class="colorf4efed svgShape"></circle><path fill="#ff4397" d="M205.024,50.741l-13.792,13.792c16.282,16.222,26.36,38.667,26.36,63.467
			c0,24.74-10.028,47.138-26.241,63.351l13.792,13.792c19.743-19.743,31.954-47.017,31.954-77.143
			C237.097,97.814,224.836,70.493,205.024,50.741z" class="colorff4397 svgShape"></path><path fill="#690589" d="M205.144,207.143c-0.53,0-1.039-0.211-1.414-0.586l-13.792-13.792c-0.781-0.781-0.781-2.047,0-2.828
			c16.543-16.543,25.654-38.54,25.654-61.937c0-23.457-9.152-45.493-25.771-62.05c-0.377-0.375-0.588-0.884-0.589-1.415
			c0-0.531,0.21-1.041,0.586-1.416l13.792-13.792c0.78-0.781,2.044-0.781,2.826-0.002c21.062,20.998,32.66,48.939,32.66,78.676
			c0,29.675-11.556,57.574-32.539,78.557C206.183,206.932,205.674,207.143,205.144,207.143z M194.165,191.336l10.966,10.966
			c19.341-20.058,29.966-46.362,29.966-74.302c0-28-10.668-54.348-30.083-74.42l-10.965,10.965
			c16.487,17.142,25.543,39.596,25.543,63.455C219.592,151.798,210.578,174.209,194.165,191.336z" class="color690589 svgShape"></path><path fill="#690589" d="M128,239.097c-61.259,0-111.097-49.838-111.097-111.097S66.741,16.903,128,16.903
			c61.259,0,111.097,49.838,111.097,111.097S189.259,239.097,128,239.097z M128,20.903C68.946,20.903,20.903,68.946,20.903,128
			S68.946,235.097,128,235.097S235.097,187.054,235.097,128S187.054,20.903,128,20.903z" class="color690589 svgShape"></path><path fill="#690589" d="M32.881,97.749c-0.216,0-0.436-0.035-0.652-0.11c-1.044-0.36-1.599-1.498-1.239-2.542
			c1.429-4.146,3.118-8.255,5.02-12.214c0.478-0.996,1.674-1.416,2.669-0.937c0.996,0.479,1.415,1.673,0.937,2.669
			C37.78,88.435,36.15,92.4,34.771,96.4C34.486,97.228,33.71,97.749,32.881,97.749z" class="color690589 svgShape"></path><path fill="#690589" d="M128,254C58.523,254,2,197.477,2,128S58.523,2,128,2s126,56.523,126,126S197.477,254,128,254z M128,6
			C60.729,6,6,60.729,6,128s54.729,122,122,122c67.271,0,122-54.729,122-122S195.271,6,128,6z" class="color690589 svgShape"></path><path fill="#690589" d="M128 32.702c-1.104 0-2-.896-2-2V18.903c0-1.104.896-2 2-2s2 .896 2 2v11.799C130 31.806 129.104 32.702 128 32.702zM237.097 130h-11.798c-1.104 0-2-.896-2-2s.896-2 2-2h11.798c1.104 0 2 .896 2 2S238.201 130 237.097 130zM30.702 130H18.903c-1.104 0-2-.896-2-2s.896-2 2-2h11.799c1.104 0 2 .896 2 2S31.806 130 30.702 130zM59.2 61.2c-.512 0-1.023-.195-1.414-.586l-8.343-8.343c-.781-.781-.781-2.047 0-2.828.78-.781 2.047-.781 2.828 0l8.343 8.343c.781.781.781 2.047 0 2.828C60.224 61.004 59.711 61.2 59.2 61.2zM50.856 207.143c-.512 0-1.024-.195-1.414-.586-.781-.781-.781-2.047 0-2.828l8.343-8.343c.78-.781 2.048-.781 2.828 0 .781.781.781 2.047 0 2.828l-8.343 8.343C51.88 206.948 51.368 207.143 50.856 207.143z" class="color690589 svgShape"></path><path fill="#7bac51" d="M114.27,141.495L114.27,141.495c-8.545-8.545-6.83-22.836,3.495-29.116l22.566-13.726l42.842-26.06
			l-26.06,42.842L143.386,138C137.106,148.324,122.815,150.04,114.27,141.495L114.27,141.495z" class="color7bac51 svgShape"></path><circle cx="128" cy="128" r="8.701" fill="#fcc24c" class="colorfcc24c svgShape"></circle><path fill="#690589" d="M128,138.701c-5.901,0-10.702-4.8-10.702-10.701s4.801-10.701,10.702-10.701c5.9,0,10.701,4.8,10.701,10.701
			S133.9,138.701,128,138.701z M128,121.299c-3.695,0-6.702,3.006-6.702,6.701s3.006,6.701,6.702,6.701s6.701-3.006,6.701-6.701
			S131.695,121.299,128,121.299z" class="color690589 svgShape"></path><path fill="#690589" d="M127.414,148.959c-5.445,0-10.645-2.137-14.558-6.05c-4.51-4.509-6.66-10.727-5.9-17.059
			c0.76-6.332,4.321-11.865,9.77-15.179l65.408-39.787c0.788-0.479,1.802-0.356,2.453,0.294c0.652,0.652,0.774,1.666,0.295,2.454
			l-39.787,65.407c-3.314,5.448-8.847,9.009-15.179,9.77C129.079,148.91,128.243,148.959,127.414,148.959z M177.196,78.569
			l-58.392,35.519c-4.393,2.672-7.264,7.133-7.877,12.238s1.121,10.119,4.757,13.754l0,0c3.636,3.636,8.647,5.368,13.755,4.757
			c5.105-0.613,9.565-3.484,12.237-7.876L177.196,78.569z" class="color690589 svgShape"></path><path fill="#ff4397" d="M98.973,166.105L98.973,166.105c-6.745,6.745-6.745,17.681,0,24.426l25.491,25.491
				c1.953,1.953,5.118,1.953,7.071,0l25.491-25.491c6.745-6.745,6.745-17.681,0-24.426h0c-6.745-6.745-17.681-6.745-24.426,0
				L128,170.706l-4.601-4.601C116.654,159.36,105.718,159.36,98.973,166.105z" class="colorff4397 svgShape"></path><path fill="#690589" d="M128,219.486c-1.87,0-3.628-0.728-4.95-2.05l-25.491-25.491c-3.64-3.64-5.645-8.479-5.645-13.627
				c0-5.147,2.005-9.987,5.645-13.627c7.515-7.515,19.742-7.514,27.254,0l3.187,3.186l3.187-3.186c7.514-7.515,19.74-7.515,27.254,0
				c3.641,3.64,5.645,8.479,5.645,13.627c0,5.148-2.005,9.987-5.645,13.627l-25.491,25.491
				C131.628,218.758,129.87,219.486,128,219.486z M111.186,163.053c-3.911,0-7.821,1.489-10.799,4.466
				c-2.884,2.885-4.473,6.72-4.473,10.799c0,4.08,1.589,7.915,4.473,10.799l25.491,25.491c1.134,1.133,3.11,1.133,4.243,0
				l25.491-25.491c2.885-2.884,4.473-6.719,4.473-10.799c0-4.079-1.588-7.914-4.473-10.799c-5.955-5.954-15.643-5.954-21.598,0
				l-4.601,4.601c-0.781,0.781-2.048,0.781-2.828,0l-4.601-4.601C119.008,164.542,115.097,163.053,111.186,163.053z" class="color690589 svgShape"></path></svg>
      </div>
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
          <div className='resetBtn'>
            <button className='resBtn' onClick={reload}>Reset</button>
          </div>
        </>
      )}
    </div>
  )
}

export default Home
