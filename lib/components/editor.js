import Ribbon from './ribbon';
import { useRouter } from 'next/router';
import supabase from '../services/supabase';
import React, { useEffect, useState } from 'react';

const Editor = ({entry}) => {
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [excerpt, setExcerpt] = useState('');
    const [content, setContent] = useState('');

    useEffect(() => {
        setId(entry?.id);
        setTitle(entry?.title);
        setExcerpt(entry?.excerpt);
        setContent(entry?.content);
    }, []);

    const router = useRouter();

    const handleEntryStorage = async (event) => {
        event.preventDefault();
        // console.log({id, title, excerpt, content});

        //TODO: handle error - student assignment
        const { data, error } = await supabase
            .from('posts')
            .update([{title, excerpt, content}])
            .eq('id', id);

        if (data?.id) router.reload();
    };

    return <div className="card border-0">
            <div className="card-body">
                <div className="px-5 py-3">
                    <Ribbon id={entry?.id}/>
                </div>

                <form onSubmit={handleEntryStorage}>
                    <input defaultValue={id} style={{display: 'none'}} />

                    <header className="px-5 py-3">
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input 
                                id="title" 
                                type="text" 
                                name="title" 
                                value={title}
                                className="form-control" 
                                placeholder="A captivating title"
                                onChange={(event) => setTitle(event.target.value)}/>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="excerpt" className="form-label">Excerpt</label>
                            <input 
                                type="text" 
                                id="excerpt" 
                                name="excerpt" 
                                value={excerpt}
                                className="form-control" 
                                placeholder="A memorable description.. "
                                onChange={(event) => setExcerpt(event.target.value)}/>
                        </div>
                    </header>

                    <main className="px-5 py-3">
                        <div className="mb-3">
                            <label htmlFor="content" className="form-label">Content</label>
                            <textarea 
                                rows="3" 
                                id="content" 
                                name="content" 
                                value={content}
                                className="form-control"
                                onChange={(event) => setContent(event.target.value)}/>
                        </div>

                        <button type="submit" className="btn btn-primary my-3">UPDATE JOURNAL ENTRY</button>
                    </main>
                </form>
            </div>
        </div>;
}

export default Editor;