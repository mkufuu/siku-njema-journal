import React from 'react';
import Ribbon from './ribbon';
import { Fragment } from 'react/cjs/react.production.min';

const Reader = ({entry}) => {
    return <Fragment>
        <div className="px-5 py-3">
            <Ribbon id={entry?.id}/>
        </div>

        <header className="px-5 py-3">
            <p className="h2">
                {entry?.title}
            </p>

            <p className="lead">
                {entry?.excerpt}
            </p>
        </header>

        <main className="px-5 py-3">
            <div className="card border-0 shadow-sm">
                <div className="card-body">
                    <div className="d-flex">
                        <span className="badge bg-info text-dark">
                            {new Date(entry?.created_at).toDateString()}
                        </span>

                        <small className="px-3 text-muted">
                            {new Date(entry?.created_at).toTimeString()}
                        </small>
                    </div>

                    <p className="mt-4 card-text">{entry?.content}</p>
                </div>
            </div>
        </main>
    </Fragment>;
}

export default Reader;