import { Router, useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function user( {user} ){
    const router = useRouter();

    if(router.isFallback){
        return <div>Cargando...</div>
    }
    return(
        <Layout>
            <Head>
                <title>User #{user.id}</title>
                <meta name='description' content='En este curso aprenderás sobre NextJS'/>
            </Head>
            <Title>User ID {user.id}</Title>
            <div className="card">
                <Image src={`/images/${user.id}.jpg`} width={400} height={300}  objectFit="cover"/>
                <h3>User</h3>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
            </div>
                <style jsx>
            {`
            .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
                color: inherit;
                text-decoration: none;
                border: 1px solid #eaeaea;
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

export async function getStaticPaths(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const users = await response.json();
    const paths = users.map((value)=>{
        return{
            params:{id: `${value.id}`}
        };
    });
    return{
        paths,
        fallback: true
    };
}

export async function getStaticProps( {params} ){
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();
    return{
        props:{
            user
        }
    };
}