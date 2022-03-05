import React from 'react';
import { useRouter } from 'next/router';
import supabase from '../services/supabase';

const Writer = () => {
    const router = useRouter();
    const handleEntryStorage = async (event) => {
        event.preventDefault();

        const title = event.target.title.value;
        const excerpt = event.target.excerpt.value;
        const content = event.target.content.value;
        // console.log({title, excerpt, content});

        //TODO: handle error - student assignment
        const { data, error } = await supabase
            .from('posts')
            .insert([{title, excerpt, content}])
            .single();

        if (data?.id) router.push({pathname: `/posts/entry/${data?.id}`});
    };

    return <div className="card border-0">
        <div className="card-body">
            <form onSubmit={handleEntryStorage}>
                <header className="px-5 py-3">
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input 
                            id="title" 
                            type="text" 
                            name="title" 
                            className="form-control" 
                            placeholder="A captivating title"/>
                    </div>

                    <div className="mb-3">
                        <label htmlFor="excerpt" className="form-label">Excerpt</label>
                        <input 
                            type="text" 
                            id="excerpt" 
                            name="excerpt" 
                            className="form-control" 
                            placeholder="A memorable description.. "/>
                    </div>
                </header>

                <main className="px-5 py-3">
                    <div className="mb-3">
                        <label htmlFor="excerpt" className="form-label">Excerpt</label>
                        <textarea rows="3" id="content" name="content" className="form-control"/>
                    </div>

                    <button type="submit" className="btn btn-primary my-3">CREATE JOURNAL ENTRY</button>
                </main>
            </form>
        </div>
    </div>
}

export default Writer;