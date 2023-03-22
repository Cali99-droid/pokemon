import {useTheme,Text,Spacer,Image,Link} from '@nextui-org/react'
import  NextLink from 'next/link'
const NavBar = () => {

    const {theme} = useTheme();
  return (
    <div style={{
        display:'flex',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'start',
        padding:'0px 50px',
        backgroundColor:theme?.colors.gray100.value
        
    }}>
        <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png'
        alt='icono pokemon aplicacion'
        width={70}
        height={70}
        
        />

        <NextLink href={'/'} passHref legacyBehavior>
          <Link >
             <Text color='white' h2>P</Text>
             <Text color='white'h3>okemon</Text>
          </Link>

        </NextLink>
      

      <Spacer css={{flex:1}}/>

      <NextLink href={'/favorites'} passHref legacyBehavior>
        <Link> 
        <Text color='white'h3>Favoritos</Text>
        </Link>

      </NextLink>
     
      
    </div>
  )
}

export default NavBar
