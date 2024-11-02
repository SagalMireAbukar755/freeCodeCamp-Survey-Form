import React from 'react'
import './App.css'
function App() {
  
  return (
    <>

    <div className='bg'>
      <h2>freeCodeCamp Survey Form</h2>
      <p>Thank you for taking the time to help us improve th platform</p>
    <div className='forms'>
    <form>
      <div className="users">
      <p>Name</p><br />
      <input type="text" placeholder='Enter your Name' /><br />
      <p>Email</p><br />
      <input type="text" placeholder='Enter your Email' /><br />
     <p>Age(Optional)</p><br />
      <input type="text" placeholder='Enter your Age' /><br />
      
      </div>
     

      <p>which option best describes your current role?</p><br />
      <select>
        <option>select current role</option>
        <option>1</option>
        <option>1</option>
        <option >1</option>
      </select><br />
     <p>would you recommend freecodeCamp to a friend?</p><br />
     <input type="radio" />Definitely <br />
     <input type="radio" />Maybe<br />
     <input type="radio" />Not sure<br />
     <p>what is your favorite of freecodeCamp</p><br />
      <select>
        <option>select option</option>
        <option>1</option>
        <option>1</option>
        <option >1</option>
      </select><br />
      <p>what would you like to see improved? (check of that apply)</p><br />
      <input type="checkbox" /> Front-End projects <br />
      <input type="checkbox" /> Back-End projects <br />
      <input type="checkbox" /> Data virsualization <br />
      <input type="checkbox" /> Challenges <br />
      <input type="checkbox" /> Open source community <br />
      <input type="checkbox" /> Gitter help rooms <br />
      <input type="checkbox" /> Videos <br />
      <input type="checkbox" /> city Meetups <br />
      <input type="checkbox" /> wilki <br />
      <input type="checkbox" /> Forum <br />
      <input type="checkbox" /> Additional Courses <br />
      <p>Any comments or suggestions</p><br />
      <textarea  cols="30" rows="5"></textarea>
      <button>Submit</button>
    </form>
    </div>
    </div>
    
    </>
  )
}

export default App