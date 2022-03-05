import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import supabase from '../services/supabase';

const Header = () => {
    const router = useRouter();

    const handleSignOutRequest = async (event) => {
        event.preventDefault();
        const {error} = await supabase.auth.signOut();

        if (error) console.log(error);

        router.push({pathname: '/'});
    };

    return <header className="vw100 px-3 d-flex flex-column border-bottom">
        <div className="d-flex d-flex align-items-center justify-content-between">
            <Link href="/posts">
                <p role="button" className="h5 text-primary text-uppercase">
                    Siku Njema
                </p>
            </Link>

            <div className="d-flex">
                <button type="button" className="mx-3 rounded btn btn-info d-flex align-items-center justify-content-center">
                    <Link href={`/posts/entry`}>
                        <div className="d-flex text-light align-items-center justify-content-between">
                            <span className='me-3'>C R E A T E</span>

                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg text-white" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/>
                            </svg>
                        </div>
                    </Link>
                </button>

                <button type="button" className="p-0 m-0 rounded-circle btn btn-warning d-flex align-items-center justify-content-center" onClick={handleSignOutRequest} style={{width: 32, height: 32}}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                </button>
            </div>
        </div>

        <small className="my-2 lead">
            Siku njema huonekana asubuhi
        </small>
    </header>;
}

export default Header;