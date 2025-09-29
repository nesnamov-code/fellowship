import './UserCard.css'

// через деструктуризацию разделяем передаваемый из родительского компоненьа объект props с данными на переменные с таким же названием, как и ключи объекта props
//значения по умолчанию для пропсов можно задать прямо в деструктуризации
function UserCard({ name='John Doe', age='404', hobby }) {

    return (
        <div className="user-card">
            <h4>Name: {name}</h4>
            <h4>Age: {age}</h4>
            <p>{hobby ? "Hobby: " + 
            hobby : 'No hobby 🙅‍♂️'}</p>
        </div>
    );
}

export default UserCard;