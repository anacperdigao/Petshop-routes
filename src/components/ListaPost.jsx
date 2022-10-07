import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { busca } from "../api/api";


const ListaPost = ({url}) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        busca(url, setPosts) //setDados é setPosts
    }, [])
    

    return(
        <section className="posts container">
            { posts.map((post)=> (
                <Link className={`cartao-post cartao-post--${post.categoria}`}>
                    <article key={post.id}>
                        <h3 className="cartao-post__titulo">{post.title}</h3>
                        <p className="cartao-post__meta">{post.metadescription}</p>
                    </article>
                </Link>
            ))}
        </section>
    )
}

export default ListaPost