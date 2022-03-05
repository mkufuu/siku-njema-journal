import React from 'react';
import { useRouter } from 'next/router';
import Reader from '../../../lib/components/reader';
import Header from '../../../lib/components/header';
import Writer from '../../../lib/components/writer';
import Editor from '../../../lib/components/editor';
import supabase from '../../../lib/services/supabase';

export async function getServerSideProps({ params }) {
    const { data, error} = await supabase
        .from('posts')
        .select('*').eq('id', params?.id).single();

    return {
        props: {
            post: data ?? {},
        },
    }
}

const Post = ({ post }) => {
    const router = useRouter();

    const exists = post?.id;
    const reader = router.query?.reader || false;

    return <div className="py-4">
        <Header/>

        {
            exists
                ? reader
                    ? <Reader entry={post}/>
                    : <Editor entry={post}/>
                : <Writer/>
        }
    </div>;
}

export default Post;
