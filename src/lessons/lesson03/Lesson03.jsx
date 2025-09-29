import MyButton from "../../components/myButton/MyButton";
import UserCard from "../../components/userCard/UserCard";


function Lesson03() {
    const friends = [
        {name: "Peter", age: 40, hobby: "coding"},
        {name: "Rosa", age: 35, hobby: "hiking"},
        {name: "Anton", age: 20, hobby: "painting"},
    ];


    const go = () => console.log('go!');
    return (
        <div>
            <h1>Lesson 3: React props 👨‍👩‍👧‍👦</h1>
            
            {/* передача данного компонента происходит в момент вызова - данные передаются по ключам, которые похожи на отрибуты HTML тегов и по этим же ключам мы встречаем данные внутри компонента */}
            <UserCard name={friends[0].name} 
            age={friends[0].age}
            hobby={friends[0].hobby}/>
            {/* тепрерь получается, что один и тот же компонент с переданными данными будет выглядеть и работать иначе */}
            <UserCard name="Rosa" age={35}/>
            <UserCard name="Anton" age={20} hobby="painting"/>
            {/* если не передать пропс, то в компоненте будет значение по умолчанию */}
            <UserCard />
            <MyButton func={() => console.log('push!')} text="нажми меня"/>
            <MyButton text="Go" func={go}/>
            <MyButton/>
        </div>
    );
}

export default Lesson03;