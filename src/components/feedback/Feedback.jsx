import MyButton from'../myButton/MyButton'
import { useState } from "react";

function Feedback() {

    const [like, setLike] = useState(0);
    const [disLike, setDislike] = useState(0);

    const handleLike = () => {
        setLike(prev => prev + 1);
    }

    const handleDislike = () => {
        setDislike(prev => prev - 1);
    }

    const handleReset = () => {
        setLike(0);
        setDislike(0);
    }    

    return(
        <div>
            <h1>Feedback 😊</h1>
            <span>{like}</span>
            <MyButton text="👍" func={handleLike} />            
            <MyButton text="👎" func={handleDislike} />
            <span>{disLike}</span>
            <div>
            <MyButton text="Reset" func={handleReset} />
            </div>
        </div>
    );
}

export default Feedback;