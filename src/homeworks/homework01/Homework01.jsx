import photo02 from './../../assets/photo02.jpg'
import './homwork01.css'

function Homework01() {
    return (
        <div className="react-container">
         <img src="photo.jpg" alt="Pavel Nesnamov" />
         <img src={photo02} alt="Pavel Nesnamov" />
            <h1>Pavel Nesnamov</h1>
            <h2>Junior Frontend & Backend Developer</h2>
        </div>
    )
}
export default Homework01;