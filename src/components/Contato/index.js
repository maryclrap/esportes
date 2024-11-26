import React from "react";
import './style.css'

const SecaoContato = () => {
    return(
    <section id="contato">
      <h2>Entre em Contato</h2>
      <p>Preencha o formulário abaixo e responderemos o mais breve possível.</p>
      <form action="#" method="post">
        <label htmlFor="nome">Nome:</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Seu email" required />
        
        <label htmlFor="mensagem">Mensagem:</label>
        <textarea id="mensagem" name="mensagem" placeholder="Escreva sua mensagem" rows="5" required></textarea>
        
        <button type="submit">Enviar</button>
      </form>
    </section>
    )
}

export default SecaoContato;
