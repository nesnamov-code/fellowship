//не забывайте импортировать useState
import { useState } from "react";
import MyButton from "../../components/myButton/MyButton";
function Lesson04() {

    //! Код сработал бы в JS, но в React так не работает

    // let count = 0;

    //! Код с useState

    // вызываем функцию useState и деструктурируем массив на две переменные
    //let result = useState(0);
    //const count = result[0];// переменная состояния
    //let setCount = result[1];// функция для изменения переменной состояния
    const [count, setCount] = useState(0);// то же самое, что и выше, но в сокращенном виде через деструктуризацию мвассива

    const handlePlus = () => {
    setCount(prev => prev + 1);
    }
    const hangleMinus = () => {
    setCount(prev => prev - 1);
    }
    
    const handleMinusTen = () => {
        setCount(prev => prev - 10);
    }

    //! Функция для кнопки +10 написана прямо в пропсах компонента MyButton

  return (
    <div>
      <h1>Lesson 4: useState hoock 🪝</h1>
      <MyButton text="+10" func={() => setCount(prev => prev + 10) }/>
      <button onClick={handlePlus}>+1</button>
      <span>{count}</span> 
      <button onClick={hangleMinus}>-1</button>
      <MyButton text="-10" func={handleMinusTen }/>
    </div>
  );
}

export default Lesson04;