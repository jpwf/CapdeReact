import { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import './App.css'
import api from './api'

function App() {
    const [username, setName] = useState('')
    const [password, setPass] = useState('')


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
        setTimeout(() => {
            
            // Redireciona o usuário para outro site
            window.location.href = 'https://www.cs-cefetrj.com.br/'; // Substitua pelo URL desejado
            // Se você quiser redirecionar para outra página do seu site, use um caminho relativo:
            // window.location.href = '/nova_pagina';
        }, 3000);
      }
      else if(auth == 403){
        toast.error(`Usuário não encontrado!`, {
        position: "top-center",
        className: "Msg",
      });
      }
    
    }
   
    /*
    if(auth.credentials == 'verified'){
      localStorage.setItem("token", auth.token)
      localStorage.setItem("user", auth.user)
      
      localStorage.setItem("tokenDirectory", auth.Directory)
      console.log(location.pathname)
      toast.success(`Login realizado com sucesso, ${auth.user}`, {
        position: "top-center",
        className: "Msg",
      });
      setTimeout(() => {
        navigate('/home')
      }, 3000);
    }
    else if(auth.credentials == 'unverified'){
      toast.error(`Usuário não encontrado!`, {
        position: "top-center",
        className: "Msg",
      });
    }
    else if(auth.msg == 'Senha incorreta.'){
      toast.error(`Senha incorreta, verique suas credenciais!`, {
        position: "top-center",
        className: "Msg",
      });
    }
  */
 
  

  return (
    <>
      <form onSubmit={handleSubmit}>
          
              <h1>Acesso Telecall</h1>
              <div className='inputs'>
                <div className='userName'>
                  <h3>Usuário</h3>
                  <input onChange={(event) => handleChange(event, setName)}type='text' name="usr" id="usr" placeholder='Seu acesso da engenharia'/>
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
