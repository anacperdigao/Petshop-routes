import React, { useEffect, useState } from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'
import { busca } from '../api/api'

import '../assets/css/blog.css'
import ListaCategorias from '../components/ListaCategorias'
import ListaPost from '../components/ListaPost'
import SubCategoria from './SubCategoria'


const Categoria = () => {

    const {id} = useParams()
    const {url, path} = useRouteMatch() // O useRouteMatch vai ser responsável por me mostrar o path, se eu estou em “bem-estar” ou “comportamento”. Seria tipo isso no path: '/categoria/bem-estar'
    const [subCategorias, setSubCategorias] = useState([])

    useEffect(() => {
        busca(`/categorias/${id}`, (categoria) => {setSubCategorias(categoria.subcategorias)})
    }, [id])

    return(
        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListaCategorias />
            <ul className="lista-categorias container flex">
            {subCategorias.map(subcategoria => (
                <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}  key={subcategoria}>
                    <Link to={`${url}/${subcategoria}`}>
                        {subcategoria}
                    </Link>
                </li>
            ))
            }
            </ul>

            <Switch>
                <Route exact path={`${path}/`}>
                    <ListaPost url={`/posts?categoria=${id}`} />
                </Route>

                <Route path={`${path}/:subcategoria`}>
                    <SubCategoria />
                </Route>
            </Switch>
        </>
    )
}

export default Categoria