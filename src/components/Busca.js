import React, { useState }from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
const Busca = (props) => {
  const [termoDeBusca, setTermoDeBusca] = useState('')
  const onTermoAlterado = (event) => {
    setTermoDeBusca(event.target.value)
  }
  const onFormSubmit = (event) => {
    event.preventDefault()

  }
  return (
    <form onFormSubmit={onFormSubmit}>
      <div className="flex flex-column">
        {/* span.p-input-icon-left>i.pi.pi-search */}
        <span className="p-input-icon-left w-full">
          <i className="pi pi-search"></i>
          <InputText 
            className='w-full'
            placeholder={props.dica}
            onChange={onTermoAlterado}
            value={termoDeBusca}
          />
        </span>
        <Button 
          label='OK'
          className='p-button-outlined mt-2'
        />
      </div>
    </form>
  )
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}

export default Busca