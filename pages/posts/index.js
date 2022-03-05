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
                            return <div key={post?.id} className="my-3 col-12 col-lg-4">
                                <div className="card border-0 shadow">
                                    <div className="card-body">
                                        <h5 className="card-title">{post?.title}</h5>

                                        <span className="my-2 badge bg-info text-dark">
                                            {new Date(post?.created_at).toDateString()}
                                        </span>

                                        <h6 className="card-subtitle mb-2 text-muted">{post?.excerpt}</h6>

                                        <div className="d-flex align-items-center justify-content-between">
                                            <button type="button" className="btn btn-warning btn-sm text-light">
                                                <Link href={`/posts/entry/${encodeURIComponent(post?.id)}`}>
                                                    <div className="d-flex text-light align-items-center justify-content-between">
                                                        <span className='me-3'>UP D A T E</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-vector-pen" viewBox="0 0 16 16">
                                                            <path fillRule="evenodd" d="M10.646.646a.5.5 0 0 1 .708 0l4 4a.5.5 0 0 1 0 .708l-1.902 1.902-.829 3.313a1.5 1.5 0 0 1-1.024 1.073L1.254 14.746 4.358 4.4A1.5 1.5 0 0 1 5.43 3.377l3.313-.828L10.646.646zm-1.8 2.908-3.173.793a.5.5 0 0 0-.358.342l-2.57 8.565 8.567-2.57a.5.5 0 0 0 .34-.357l.794-3.174-3.6-3.6z"/>
                                                            <path fillRule="evenodd" d="M2.832 13.228 8 9a1 1 0 1 0-1-1l-4.228 5.168-.026.086.086-.026z"/>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </button>

                                            <button type="button" className="btn btn-primary btn-sm text-light">
                                                <Link href={`/posts/entry/${encodeURIComponent(post?.id)}?reader=true`}>
                                                    <div className="d-flex text-light align-items-center justify-content-between">
                                                        <span className='me-3'>R E A D</span>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eyeglasses" viewBox="0 0 16 16">
                                                            <path d="M4 6a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm2.625.547a3 3 0 0 0-5.584.953H.5a.5.5 0 0 0 0 1h.541A3 3 0 0 0 7 8a1 1 0 0 1 2 0 3 3 0 0 0 5.959.5h.541a.5.5 0 0 0 0-1h-.541a3 3 0 0 0-5.584-.953A1.993 1.993 0 0 0 8 6c-.532 0-1.016.208-1.375.547zM14 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0z"/>
                                                        </svg>
                                                    </div>
                                                </Link>
                                            </button>
                                        </div>
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
