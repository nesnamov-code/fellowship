import './myButton.css'

function MyButton({ text = 'Click me!', typ = 'button', func = () => console.log('click!') }) {
  
  return <button onClick={func} typ={typ} className="my-button">{text}</button>
}

export default MyButton;