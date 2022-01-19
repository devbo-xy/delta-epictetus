import { useState } from 'react';
import FeaturedPost from '@components/FeaturedPost';
import CardPost from '@components/CardPost';
import Container from '@components/Container';
import Layout from '@components/Layout';
import mockPosts from '../utils/posts.json';
import Head from 'next/head';

export async function getServerSideProps() {
  const req = await fetch(process.env.APIURL + '/api/posts');

  const res = await req.json();

  console.log(res.data);

  return {
    props: {}
  }
}

export default function Home() {
  const [posts, setPosts] = useState(mockPosts);

  return (
    <Layout>
      <Head>
        <title>
          Home &mdash; Delta Epictetus
        </title>
      </Head>
      <Container>
        <FeaturedPost />
        <div className="flex -mx-4 flex-wrap mt-6">
          {posts.map(post => (
            <div key={post.id} className="md:w-4/12 w-full px-4 py-6">
              <CardPost {...post} />
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  )
}
