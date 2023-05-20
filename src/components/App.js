import React from 'react'
import Busca from './Busca'
import env from 'react-dotenv'
import { createClient } from 'pexels'
import ListaImagens from './ListaImagens'
import PexelsLogo from './PexelsLogo'
import pexelsClient from '../utils/pexelsClient'
//useState é um hook (a partir da versão 16.8)
class App extends React.Component {
  
  state = {pics: []}  
  
  componentDidMount(){
    this.client = createClient(env.PEXELS_KEY)
  }
  
  // client = null
  // onBuscaRealizada = async (termo) => {
  //   const result = await this.client.photos.search({
  //     query: termo,
  //     per_page: 50
  //   })
  //   this.setState({pics: result.photos})
  // }
  onBuscaRealizada = (termo) => {
    pexelsClient.get('/search', {
      params: {query: termo, per_page: 50}
    })
    .then(result => {
      // console.log(result.data)
      this.setState({pics: result.data.photos})
    })
  }
  render(){
    return (
      <div 
        className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
          <div className="col-12">
            <PexelsLogo />
          </div>
          <div className="col-12">
            <h1>Exibir uma lista de...</h1>
          </div>
          <div className="col-12">
            <Busca onBuscaRealizada={this.onBuscaRealizada}/>
          </div>
          <div className="col-12">
            <div className="grid">
              <ListaImagens 
                pics={this.state.pics}
                imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}/>
            </div>
          </div>
      </div>
    )
  }
}

export default App
{/* {
  this.state.pics.map((pic, indice) => {
    return (
      <div  key={indice}>
        <img src={pic.src.small} alt={pic.alt} />
      </div>
    )
  })
}   */}