

import {Layout} from '../../components/layouts'
import { NoFavorites } from '../../components/ui/NoFavorites';
import { useState, useEffect } from 'react';
import { localFavorites } from '../../utils';
import { FavoritePokemons } from '../../components/pokemon';
const FavoritesPage = () => {
  const [favorites, setfavorites] = useState<number[]>([])
  useEffect(() => {
    setfavorites(localFavorites.pokemons) 
  }, [])
  
  return (
    <Layout title='Favoritpos'>
       {
        favorites.length === 0
        ?( <NoFavorites/>)
        :(
          <FavoritePokemons pokemons={favorites}/>
        )
       }
      
      
      
    </Layout>
  )
}

export default FavoritesPage
