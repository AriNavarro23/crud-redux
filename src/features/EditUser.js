import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams, Link } from "react-router-dom"
import Button from "../components/Button"
import TextField from "../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const users = useSelector(store => store.users);
    const navigate = useNavigate();
    const existingUser = users.filter(user => user.id === params.id);
    const { name, email } = existingUser.length > 0 ? existingUser[0] : { name: '', email: '' };

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
            <div className="flex justify-between">
                <Button onClick={handleEditUser}>Edit</Button>
                <Link to='/'><button className="bg-indigo-600 text-white py-2 px-6 my-10 rounded hover:bg-indigo-700">Go back</button></Link>
            </div>
        </div>
    )
}

export default EditUser