import Container from "@components/Container";
import CardPost from "@components/CardPost";
import Layout from "@components/Layout";
import mockPosts from '../utils/posts.json';
import { useState } from "react";
import SectionHeader from "@components/SectionHeader";
import Head from "next/head";

export default function Posts() {
    const [posts, setPosts] = useState(mockPosts);

    return (
        <Layout>
            <Head>
                <title>
                    Posts &mdash; Delta Epictetus
                </title>
            </Head>
            <Container>
                <SectionHeader>UI Designer</SectionHeader>
                {posts.length ? (
                    <div className="text-center py-20">
                        <h2 className="text-7xl">No Result</h2>
                        <p className="text-2xl text-white/60 md:w-6/12 w-full  mx-auto mt-3">We couldn't find any posts the keyword 'hahahayuk'. Please try another keyword</p>
                    </div>
                ) : (
                    <div className="flex -mx-4 flex-wrap mt-6">
                        {posts.map(post => (
                            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
                                <CardPost {...post} />
                            </div>
                        ))}
                    </div>
                )}
            </Container>
        </Layout >
    );
}