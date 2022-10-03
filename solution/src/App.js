import {useState} from "react"
import star from "./images/icon-star.svg"
import thanks from "./images/illustration-thank-you.svg"

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [items, setItems] = useState("")

  return (
    <>
      {/* <h1>Interactive rating component</h1> */}
      { !isSubmitted && <Card setItems = {setItems} setIsSubmitted = {setIsSubmitted}/> }
      {isSubmitted && <ThankYou items = {items} setIsSubmitted = {setIsSubmitted}/>}
    </>
  );
}

const Button = ({ setItems, number }) => {
  return <button onClick={() => setItems(number)} className ="btn-number bg-gray-700 h-12 w-12 rounded-full pt-1 text-gray-200 focus:bg-gray-400 transition-all duration-300">{number}</button>
}

const Card = ({ setItems, setIsSubmitted}) => {
  return (
    <div className="wrapper">
    <img className="bg-gray-700 p-2 rounded-full" src={star} alt=""></img>
    <h2 className="text-gray-100 text-3xl my-6">
      How did we do?
    </h2>
    <p className="text-gray-400 mb-10">
      Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!
    </p>
    <ul className="grid grid-cols-5 gap-3 mb-10">
      <li>
        <Button setItems={setItems} number={1}/>
      </li>
      <li>
        <Button setItems={setItems} number={2}/>
      </li>
      <li>
        <Button setItems={setItems} number={3}/>
      </li>
      <li>
        <Button setItems={setItems} number={4}/>
      </li>
      <li>
        <Button setItems={setItems} number={5}/>
      </li>
    </ul>
    <div className="text-center">
      <button onClick={() => setIsSubmitted(true)} className="btn-rating text-center w-full text-white uppercase tracking-wide pt-2 pb-2 rounded-full">
        Submit
      </button>
    </div>
  </div>
  )
}

const ThankYou = ({ items, setIsSubmitted }) =>{
  return (
    <div className="wrapper text-center">
      <img src = {thanks} alt="" className="block mx-auto mb-5"/>
      <p className = "p-rating bg-gray-700 rounded-full inline-block text-sm px-2 pt-1">
        You selected {items} out of 5
      </p>
      <h2 className = "text-gray-100 text-3xl my-5">Thank you</h2>
      <p className = "text-gray-400 text-center mb-5"> We appreciate you taking the time to give a rating. If you ever need more support, 
don’t hesitate to get in touch!</p>
    <div className="text-center">
          <button onClick={() => setIsSubmitted(false)} className="btn-rating text-center w-full text-white uppercase tracking-wide pt-2 pb-2 rounded-full">
            Rate Again
          </button>
        </div>
    </div>
  )
}
 
export default App;
