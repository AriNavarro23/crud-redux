import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
import Button from "../components/Button"
import TextField from "../components/TextField"
import { addUser } from "./userSlice"


const AddUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [values, setValues] = useState({
        name: '',
        email: ''
    });


    const [isEmailValid, setIsEmailValid] = useState(false);


    //Si el email es invalido, doy un alert. Si es valido, reseteo los valores y agrego el usuario
    const handleAddUser = () => {
        if (!isEmailValid) {
            alert('Please enter a valid email address.');
            return;
        }
        setValues({ name: '', email: '' });
        setIsEmailValid(false);
        dispatch(addUser({
            id: uuidv4(),
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }


    //valido email mediante un regex
    const isValidEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }


    //Confirmo si el email es valido
    const handleEmailChange = (e) => {
        setIsEmailValid(isValidEmail(e.target.value));
        setValues({ ...values, email: e.target.value });
    }


    return (
        <div className="mt-10 max-w-xl mx-auto border border-indigo-2xl darken-6 p-4 rounded-md">
            <h1 className="text-center font-bold text-2xl text-gray-700">Add User</h1>
            <TextField
                label="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Enter your name ...' }}
            />
            <br />
            <TextField
                label="Email"
                value={values.email}
                onChange={handleEmailChange}
                onBlur={(e) => setIsEmailValid(isValidEmail(e.target.value))}
                isEmailValid={isEmailValid}
                inputProps={{ type: 'email', placeholder: 'xxx@mail.com' }}
            />
            <Button onClick={handleAddUser}>Submit</Button>
        </div>
    )
}

export default AddUser
