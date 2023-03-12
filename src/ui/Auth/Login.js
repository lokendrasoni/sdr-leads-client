import React, { useContext, useState } from 'react';
import Title from '../../shared/Title';
import Input from '../../components/Input';
import Card from '../../components/Card';
import { login, status } from '../../api/auth';
import AppDataStore from "../../contexts/AppDataStore";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { setUser } = useContext(AppDataStore);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const token = await login(username, password);
      localStorage.setItem("token", token.data);

      const user = await status();
      setUser(user.data);

      navigate('/', { replace: true });
    }
    catch (err) { }
  }

  return (
    <>
      <Title title={"Login"} />
      <div className='grid'>
        <Card className={"justify-self-center text-center"} style={{ marginTop: "15%" }}>
          <h1 className='text-3xl font-bold mb-2'>Login</h1>
          <form onSubmit={loginUser}>
            <Input type={"text"} placeholder={"Enter Username"} value={username} onChange={(e) => { setUsername(e.target.value) }} />
            <Input type={"password"} placeholder={"Enter Password"} value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <button className='btn-primary block mb-4' type='submit'>Login</button>
          </form>

          {/* DEMO CREDENTIALS */}
          <div className='text-start'>
            Demo credentials:<br />
            Username: user<br />
            Password: password<br />
          </div>
        </Card>
      </div>
    </>
  )
}
