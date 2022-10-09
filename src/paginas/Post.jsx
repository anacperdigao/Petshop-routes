import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { busca } from "../api/api";
import '../assets/css/post.css'


const Post = () => {

    // O useHistory vai dar acesso ao histórico de navegação, 
    // e vamos fazer uma transformação nesse histórico de navegação.
    let history = useHistory() 

    const {id} = useParams()

    const [post, setPost] = useState({})

    //de novo vou usar useEffect pra consumir a API
    useEffect(() => { 
        busca(`/posts/${id}`, setPost)
        .catch(() => { //Aqui eu vou tratar caso o id seja invalido, se a pessoa tentar acessar uma rota /posts/qualquercoisa
            history.push('/404') //Com o push, colocamos na frente do “/post/88” alguma coisa, essa alguma coisa vai ser a rota /404
        }) 
    }, [id]) //vou renderizar toda vez que eu alterar o ID


    return(
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{post.title}</h2>
                <p className="cartao__texto">{post.body}</p>
            </article>
        </main>
    )
}

export default Post