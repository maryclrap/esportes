import React from "react";
import "./style.css";

const Produtos = () => {
    return (
        <section id="produtos"> 
            <div className="secao-produtos center">
                <h2 className="titulos">NOSSOS PRODUTOS</h2>
                <p>
                    Trabalhamos com bolas, tênis, 
                    roupas esportivas, visando seu conforto.
                </p>
                <p>
                    Todos os nossos preços são acessíveis e contam com a melhor qualidade do mercado.
                </p>

                <div className="bolas-imgs">
                    <div className="card-bolas">
                        <h3>Bola de Vôlei</h3>
                        <img src='./assets/volei.jpg' alt="Bola de vôlei" />
                        <p>R$ 699,99</p>
                    </div>
                    <div className="card-bolas">
                        <h3>Bola de Basquete</h3>
                        <img src="./assets/basquete.jfif" alt="Bola de basquete" />
                        <p>R$ 249,90</p>
                    </div>
                    <div className="card-bolas">
                        <h3>Bola de Futebol</h3>
                        <img src="./assets/fut.jpg" alt="Bola de futebol" />
                        <p>R$ 499,99</p>
                    </div>
                    <div className="card-bolas">
                        <h3>Bola de Handebol</h3>
                        <img src="./assets/hand.jpg" alt="Bola de handebol" />
                        <p>R$ 149,90</p>
                    </div>
                </div>
            </div>

            <div className="lista-produtos center">
                <p>Todos os nossos produtos incluem:</p>
                <ul>
                    <li>Garantia de 1 ano</li>
                    <li>Manutenção preventiva</li>
                    <li>Descontos especiais na compra da segunda unidade</li>
                    <li>Flexibilidade de pagamentos</li>
                </ul>
            </div>
        </section>
    );
}

export default Produtos;
