import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";

function LoginForm() {
    return (
        <>
            <MyInput name="login" type="text" placeholder="Enter login" label="Username" />
            <MyInput name="email" type="email" placeholder="Enter email" label="Email" />
            <MyInput name="password" type="password" placeholder="Enter password" label="Password" />
            {/* <button type="submit">Login</button> */}
            <MyButton typ="submit"/>
        </>
    );
}

export default LoginForm;