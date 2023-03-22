import {Button} from '@nextui-org/react'
import  { NextPage } from 'next'
import {Layout} from '../components/layouts'

const HomePage: NextPage = () => {
  return (
    <Layout title='Listado de pokemons'>
    
    <h2>Hello putita</h2>
    <Button color={'gradient'}>Click me</Button>
    </Layout>
   
  )
}

export default HomePage;
