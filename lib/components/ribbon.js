import React from 'react';
import { useRouter } from 'next/router';
import supabase from '../services/supabase';

const Ribbon = ({id}) => {
    const router = useRouter();

    const handleReturnRequest = () => {
        router.back();
    }

    const handleDeleteRequest = async () => {
        const {data} = await supabase.from('posts')
            .delete(true, 1)
            .eq('id', id);

        if (data) router.push({pathname: '/posts'});
    }

    return <section className="vw100 py-2 d-flex justify-content-between">
        <button type="button" className="me-3 rounded btn btn-secondary d-flex align-items-center justify-content-center" onClick={handleReturnRequest}>
            <div className="d-flex text-light align-items-center justify-content-between">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                </svg>

                <span className='ms-3'>B A C K</span>
            </div>
        </button>

        <button type="button" className="ms-3 rounded btn btn-danger d-flex align-items-center justify-content-center" onClick={handleDeleteRequest}>
            <span className='me-3'>D I S C A R D</span>

            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
            </svg>
        </button>
    </section>;
}

export default Ribbon;