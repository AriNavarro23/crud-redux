import { Route, Routes } from "react-router-dom";
import AddUser from "./features/AddUser";
import EditUser from "./features/EditUser";
import UserList from "./features/UserList";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  return (
    <div className="container h-screen w-full mx-auto px-2  pt-10  dark:bg-gray-200">
      <DarkModeButton />
      <h1 className="text-center font-bold text-2xl text-gray-700">App CRUD</h1>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
