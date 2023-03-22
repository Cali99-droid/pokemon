import  Head  from "next/head"
import { FC } from "react"
import NavBar from '../ui/NavBar';
import { useRouter } from 'next/router';


interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[];
  }
  const origin = (typeof window ==='undefined')?'':window.location.origin;
  export const Layout: FC<Props> = ({children,title}) => {


  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Orellano"/>
        <meta name="descripcion" content={`Informacion sobre pokemon xx ${title}`}/>
        <meta name="keywords" content="XXX POKEDEX pokemon xx"/>

        <meta property="og:title" content={`info pokemon ${title}`}/>
        <meta property="og:description" content={`un pokedex de pokemones ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner.png`} />

    </Head>
    <NavBar/>
    <main style={{
        padding:'0px 20px'
    }}>
        {children}
    </main>

    </>
  )
}


