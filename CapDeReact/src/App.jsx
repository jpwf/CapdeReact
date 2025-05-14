import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import api from '../api'
import {useNavigate} from 'react-router-dom'

function App() {
    const [username, setName] = useState('')
    const [password, setPass] = useState('')
    const navigate = useNavigate()

    const handleChange = (event, setText) => {
      setText(event.target.value);
    };
    async function handleSubmit(event){
      event.preventDefault();
      const userData = {username: username, password: password}
      console.log(userData)
      let res = await api.post("/login", userData)
      
      let auth = res.data
      if(auth == 200){
        toast.success(`Login realizado com sucesso`, {
        position: "top-center",
        className: "Msg",
        });
        localStorage.setItem("token", '123123 ')
        setTimeout(() => {
            //window.location.href = 'https://www.cs-cefetrj.com.br/';
            navigate("/inside")
        }, 3000);
      }
      else if(auth == 403){
        toast.error(`Usuário não encontrado!`, {
        position: "top-center",
        className: "Msg",
      });
      }
    
    }

  return (
    <>
      <h1>Acesso WolfByte</h1>

      <form onSubmit={handleSubmit}>
              <div className='inputs'>
                <div className='userName'>
                  <h3>Usuário</h3>
                  <input onChange={(event) => handleChange(event, setName)}type='text' name="usr" id="usr" placeholder='Nome de usuário'/>
                </div>
                
                <div className='passWord'>
                  <h3>Senha</h3>
                  <input onChange={(event) => handleChange(event, setPass)}name="pwd" id="pwd" type='password' placeholder='Digite sua senha'/>
                </div>
                
              </div>
              
              <button>Entrar</button>
              
            </form>
            <ToastContainer autoClose={2000} limit={1}  closeButton={false} style={{width: "fit-content"}}/>
    </>
  )
}

export default App
