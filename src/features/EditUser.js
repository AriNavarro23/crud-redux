import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser[0];
    const [values, setValues] = useState({
        name,
        email
    });

    const handleEditUser = () => {
        setValues({ name: '', email: '' });
        dispatch(editUser({
            id: params.id,
            name: values.name,
            email: values.email
        }));
        navigate('/');
    }

    return (
        <div className="mt-10 max-w-xl mx-auto border border-indigo-2xl dark:border-gray-400 darken-6 p-4 rounded-md">
            <TextField
                label="Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                inputProps={{ type: 'text', placeholder: 'Edit your name ... ' }}
            />
            <br />
            <TextField
                label="Email"
                value={values.email}
                onChange={(e) => setValues({ ...values, email: e.target.value })}
                inputProps={{ type: 'email', placeholder: 'xxx@mail.com' }}
            />
            <Button onClick={handleEditUser}>Edit</Button>
        </div>
    )
}

export default EditUser