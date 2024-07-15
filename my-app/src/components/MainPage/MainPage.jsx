import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";

// import Administrador from "../Login_Contexto/ContextoLogin";
import { AdminProvider } from '../Login_Contexto/ContextoLogin';
import { AcessProvider } from '../Login_Contexto/ContextoLogin copy';

import ChamarHome from "../Home/ChamarHome";
import ChamarPaginaPublicacao from "../Trabalhos Publicados/ChamarPaginaPublicacao";
import ChamarLogin from "../Login/ChamarLogin";
import ChamarNovaPublicacao from "../CriarPublicacao/ChamarNovaPublicacao";
import ChamarPesquisas from "../Pesquisas/ChamarPesquisas";
import ChamarCadastro from "../Cadastro/ChamarCadastro";
import ChamarTrabalho from "../Trabalhos Publicados/chamarTrabalho";

import { useEffect } from "react";
import axios from "axios";



const MainPage = () => {

    return (
    <AcessProvider>
        <AdminProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/PaginaPublicacao' element={<ChamarPaginaPublicacao />} />
                    <Route path='/' element={<ChamarHome />} />
                    <Route path='/Login' element={<ChamarLogin />} />
                    <Route path='/novaPublicacao' element={<ChamarNovaPublicacao />} />
                    <Route path='/pesquisas' element={<ChamarPesquisas />} />
                    <Route path='/cadastro' element={<ChamarCadastro />} />
                    <Route path='/trabalho/:linkPdf/:titulo/:descricao' element={<ChamarTrabalho />} />

                </Routes>
            </BrowserRouter> 
        </AdminProvider>
    </AcessProvider>
    )
}
export default MainPage
