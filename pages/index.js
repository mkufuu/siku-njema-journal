import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import supabase from '../lib/services/supabase';

export default function Home() {
  const [invite, setInvite] = useState('default');

  const handleSignInRequest = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const {error} = await supabase.auth.signIn({email});

        if (error) setInvite('danger');

        setInvite('success');
  }

  return <div className="py-4">
      <Head>
        <title>Siku Njema</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-5 min-vh-100 d-flex flex-column align-items-center justify-content-center">
        <h1 className="mb-5 strong display-4">
          Welcome to <span className="text-primary">Siku Njema</span>
        </h1>

        <p className="d-flex flex-wrap text-center align-items-center">
          <span>Get started with a &nbsp;</span>
          <code className={styles.code}>magic link email</code>
        </p>

        <div className="d-flex flex-wrap flex-column align-items-center justify-content-center">
          <div className="card">
              <div className="card-body">
                <h5 className="card-title">Email address</h5>
                <p className={`lead card-text text-${invite}`}>Check your email inbox for the magic link sent</p>
                <form onSubmit={handleSignInRequest}>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
                  </div>

                  <button type="submit" className="btn btn-block btn-primary">
                    SEND INVITE
                  </button>
                </form>
              </div>
          </div>
        </div>
      </main>
    </div>;
}