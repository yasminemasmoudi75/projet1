import { useState, useEffect } from "react";
import axios from "axios";
import ElementArticle from "./elementArticle";  

function ListArticle() {
    const [articles, setArticles] = useState([]);

    const fetchArticle = () => {
        axios.get("http://localhost:3001/produits")
            .then((response) => setArticles(response.data))
            
    };

    useEffect(() => {
        
    
        fetchArticle()
    }, []);

    const deleteProd = async (id) => {
        if (!window.confirm("Are you sure you want to delete")) {
        return;
        }
        axios.delete('http://localhost:3001/produits/' + id)
        .then(() => {
        console.log('successfully deleted!')
        setArticles(prevArticles => prevArticles.filter((article) =>
            article.id !== id));
        }).catch((error) => {
        console.log(error)
        })
        }

    return (
        <>
           <h2>list des article</h2>
           <ElementArticle articles={articles} deleteProd={deleteProd}/>
        </>
    );
}

export default ListArticle;
