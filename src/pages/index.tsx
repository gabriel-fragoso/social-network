import Head from '../../node_modules/next/head';

import { FaGithub, FaGoogle, FaPhone } from 'react-icons/fa'

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Entrar | ExpressPosts
        </title>
      </Head>
      <div className={styles.Content}>
        <div className={styles.Container}>
          <img src='/images/hero.svg' alt="" />
          <h1>Inscreva-se no
            <span> Express
            </span>
            <span>Posts</span>
          </h1>
          <div className={styles.ButtonArea}>
            <button>
              <FaGoogle size={32} color='#222' />
            </button>
            <button>
              <FaGithub size={32} color='#222' />
            </button>
            <button>
              <FaPhone size={30} color='#222' />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}