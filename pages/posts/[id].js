import Head from "next/head";
import Layout from "../../components/layout";
import Title from "../../components/title";

export default function post( {posts} ){
    
    return(
        <Layout>
            <Head>
                <title>Post #{posts.id}</title>
                <meta name='description' content='En este curso aprenderás sobre NextJS'/>
            </Head>
            <Title>Post Details</Title>
            <div className="card">
                <h2>{posts.title}</h2>
            </div>
            <p>{posts.body}</p>
            <style jsx>
            {`
                .card {
                margin: 1rem;
                flex-basis: 45%;
                padding: 1.5rem;
                text-align: left;
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

export async function getServerSideProps( {params} ){
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const posts = await response.json();
    return{
        props: {
            posts
        }
    };
}