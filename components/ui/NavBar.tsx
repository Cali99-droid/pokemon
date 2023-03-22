import {useTheme,Text,Spacer,Image} from '@nextui-org/react'

const NavBar = () => {

    const {theme} = useTheme();
  return (
    <div style={{
        display:'flex',
        width: '100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent: 'start',
        padding:'0px 20px',
        backgroundColor:theme?.colors.gray100.value
        
    }}>
        <Image
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/132.png'
        alt='icono pokemon aplicacion'
        width={70}
        height={70}
        
        />
      <Text color='white' h2>P</Text>
      <Text color='white'h3>okemon</Text>

      <Spacer css={{flex:1}}/>
      <Text color='white'h3>Favoritos</Text>
      
    </div>
  )
}

export default NavBar
