import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { Grid, Loader } from 'semantic-ui-react'
import Post from '../../src/components/Post'
import axios from 'axios';

export default function Ios() {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState<Boolean>(false);
    const preLoad = async () => {
        console.log(process.env.baseURL)
        await axios.get(`http://122.34.166.121:5010/crawl/category/B`)
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch(e => {
                console.log(e);
            })
            .finally(() => {
                setIsLoading(false);
            })
    }

    useEffect(() => {
        setIsLoading(true);
        preLoad();
    }, [])

    return (
        <div style={{ marginTop: 40 }}>
            <Head>
                <title>NEON | Backend</title>
            </Head>
            {isLoading && (
                <div style={{ padding: "300px 0" }}>
                    <Loader inline="centered" active>
                        Loading
                    </Loader>
                </div>
            )}
            {!isLoading && (
                <Grid columns={2} divided>
                    <Grid.Row>
                        {posts.map(post => (
                            console.log(post),
                            <Grid.Column key={post.id} style={{ marginBottom: 20 }}>
                                <Post
                                    key={post.id}
                                    name={post.name}
                                    description={post.description}
                                    html_url={post.html_url}
                                    language={post.language}
                                />
                            </Grid.Column>
                        ))}
                    </Grid.Row>
                </Grid>
            )}
        </div>
    )
}