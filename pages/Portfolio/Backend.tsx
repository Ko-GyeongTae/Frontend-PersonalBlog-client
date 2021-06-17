import React from 'react'
import Head from 'next/head'
import { Grid, Image } from 'semantic-ui-react'
import Post from '../../src/components/Post'

export default function Ios() {
    return (
        <div style={{ marginTop: 40 }}>
            <Head>
                <title>NEON | Backend</title>
            </Head>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                    <Grid.Column style={{ marginBottom: 20 }}>
                        <Post />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}