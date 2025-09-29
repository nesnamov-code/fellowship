import MyButton from "../../components/myButton/MyButton";
import "./Lesson02.css";

function Lesson02() {
  const text = "это строка из переменной text..";

  const react = {
    library: "React",
    developer: "Meta",
    logo: "https://www.inexture.com/wp-content/uploads/2023/08/Top-10-React-Libraries.png",
  };

  const angular = {
    library: "Angular",
    developer: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Angular_Logo_SVG.svg/2560px-Angular_Logo_SVG.svg.png",
  };

  function showDeveloper(obj) {
    if (obj.developer && obj.library) {
      return `Developer of ${obj.library} is ${obj.developer}`;
    }
    return "Not valid data 😵";
  }

  const isLoggetIn = true;

  return (
    <div>
      <h1>Lesson 2: JSX components 💁‍♂️</h1>
      <p>в JSX мы можем пользоваться динамическими данными, которые приходят к нам из тела функции компонента или других файлов</p>
      <p>Здесь будет строка: {text}</p>
      <p>Это вычисление случилось в JSX: {40 * 42} !</p>
      {/* <p>{react.library} создан компанией {react.developer}</p> */}
      <h3>{showDeveloper(angular)}</h3>
      <img src={angular.logo} className="imgAngular" alt="" />
      <h2>{showDeveloper(react)}</h2>
      {isLoggetIn ? <img src={react.logo} className="imgReact" alt="" /> : <h4>To see image you need to authorize!</h4>}
      <h3>{showDeveloper(text)}</h3>
      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default Lesson02;
