import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../../components/layout";
import Title from "../../components/title";
import Head from 'next/head';

export default function Posts( {posts} ){
    //Client side rendering
    /*const [posts, setPosts] = useState([]);
    
    useEffect(()=>{
        const fetchPost = async ()=>{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const newPosts = await response.json();
            setPosts(newPosts);
        };
        fetchPost();
    },[])*/

    return(
        <Layout>
            <Head>
                <title>Aprendamos NextJS</title>
                <meta name='description' content='En este curso aprenderás sobre NextJS'/>
            </Head>
            <Title>Posts Page</Title>
            <div className="grid">
                {posts.map((value)=>{
                    return(
                        <Link href= {'/posts/[id]'} as={`/posts/${value.id}`} key={value.id}>
                            <a className="card">
                                <h3>{value.title}</h3>
                                <p>{value.body}</p>
                            </a> 
                        </Link>
                    );
                })}
            </div>
            <style jsx>
            {`
            .grid {
                display: flex;
                flex-wrap: wrap;
                max-width: 800px;
                margin-top: 2rem;
            }
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                color: black;
                text-decoration: none;
                border: 2px solid #eaeaea;
                border-radius: 10px;
                transition: color 0.15s ease, border-color 0.15s ease;
            }
            .card:hover,
            .card:focus,
            .card:active {
                color: #0070f3;
                border-color: #0070f3;
            }
            .card h3 {
                margin: 0 0 1rem 0;
                font-size: 1.5rem;
            }
            .card p {
                margin: 0;
                font-size: 1.25rem;
                line-height: 1.5;
            }
            `}
        </style>
        </Layout>
    );
}

export async function getServerSideProps(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return{
        props: {
            posts: posts
        }
    };
}