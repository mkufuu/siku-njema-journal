import Link from 'next/link';
import Header from '../../lib/components/header';
import supabase from '../../lib/services/supabase';

export async function getStaticProps(context) {
    const { data, error} = await supabase.from('posts').select('*');

    let posts;
    if (error) {
        posts = [];
        console.log(error);
    }

    posts = data;

    if (!Array.isArray(posts)) {
        return {
            redirect: {permanent: false, destination: "/"},
            props:{},
        };
    }

    return {
        props: {
            posts,
        },
    }
}

export default function Blogs({ posts }) {
    return <div className="py-4">
        <Header/>

        <main className="mt-3 px-4 py-2">
            <div className="container">
                <div className="row">
                    {
                        posts.map((post) => {
                            return <div key={post?.id} className="col-12 col-lg-4">
                                <div className="card border-0 shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{post?.title}</h5>

                                        <span className="my-2 badge bg-info text-dark">
                                            {post?.created_at}
                                        </span>

                                        <h6 className="card-subtitle mb-2 text-muted">{post?.preview}</h6>

                                        <button type="button" style={{width: 100}} className="btn btn-primary btn-sm text-light">
                                            <Link href={`/posts/${encodeURIComponent(post?.id)}`}>
                                                <div className="d-flex text-light align-items-center justify-content-between">
                                                    <span>
                                                        R E A D
                                                    </span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                                    </svg>
                                                </div>
                                            </Link>
                                        </button>

                                    </div>
                                </div>
                            </div>;
                        })
                    }
                </div>
            </div>
        </main>
    </div>;
}
