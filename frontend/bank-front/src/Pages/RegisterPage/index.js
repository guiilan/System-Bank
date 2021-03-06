import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { postClient , validate } from '../../Services/api';
import * as S from './styles'



export default function RegisterPage() {
   
    const[email, setEmail] = useState('');
    const[login, setLogin] = useState('');
    const[password, setPassword] = useState('');
    const[cPassword, setCPassword] = useState('');
    const[name, setName] = useState('');
    const[tell,setTell] = useState('');
    const[cpf, setCpf] = useState('');
    const[rg, setRg] = useState('');
    const[client, setClient] = useState();

    useEffect(()=>{
        if(client === undefined)
           return;
        else
            postClient(client).then(res=>{
                if(res.data === ""){
                    alert("Erro ao cadastrar Campos ja existentes");
                }
            });
            alert('Cadastro Finalizado');
    },[client])
    
    return(
        <S.Container>
        <form>
            <fieldset >
                <legend>CADASTRO BANK</legend>
                <label>Login</label>
                <input value = {login} onChange={login => setLogin(login.target.value)} type="text" placeholder="Login Desejado" />
                <label>Email</label>
                <input type="text" value = {email} placeholder="email" onChange={email => setEmail(email.target.value)}/>
                <label>Senha</label>
                <input value={password} onChange={password => setPassword(password.target.value)} type="password" placeholder="Senha" />
                <label>Confirme a Senha</label>
                <input value={cPassword} onChange={cPassword => setCPassword(cPassword.target.value)} type="password" placeholder="confirme sua senha" />
                <label>Nome</label>
                <input type="text" value={name} placeholder="Nome" onChange={name => setName(name.target.value)}/>
                <label>Tell:</label>
                <input type="text" value={tell} placeholder="telefone" onChange={tell => setTell(tell.target.value)} />
                <label>CPF</label>
                <input value={cpf} onChange={cpf => setCpf(cpf.target.value)} type="text" placeholder="Digite seu CPF" />
                <label>RG</label>
                <input value={rg} onChange={rg => setRg(rg.target.value)} type="text" placeholder="Digite seu RG" />
                <button type="button" onClick={()=>{
                    if(validate(login,password,cPassword,cpf,rg, tell, email)){
                        setClient({name,tell,login,email,rg,cpf,password,accounts:[]})
                        
                    }
                    else{
                        console.log("Dados invalidos");
                    }
                }} ><span>CADASTRAR</span></button>
                <S.Links><Link to="/"><span>VOLTAR</span></Link></S.Links>
               
            </fieldset>
        </form>
        </S.Container>
    );
}

