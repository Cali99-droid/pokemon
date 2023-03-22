import  Head  from "next/head"
import { FC } from "react"
import NavBar from '../ui/NavBar';


interface Props {
    title?: string;
    children?: JSX.Element | JSX.Element[];
  }
  export const Layout: FC<Props> = ({children,title}) => {
  return (
    <>
    <Head>
        <title>{title || 'Pokemon App'}</title>
        <meta name="author" content="Carlos Orellano"/>
        <meta name="descripcion" content={`Informacion sobre pokemon xx ${title}`}/>
        <meta name="keywords" content="XXX POKEDEX pokemon xx"/>

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


