import React, { useState }from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
const Busca = (props) => {
  const [termoDeBusca, setTermoDeBusca] = useState('')
  return (
    <div className="flex flex-column">
      {/* span.p-input-icon-left>i.pi.pi-search */}
      <span className="p-input-icon-left w-full">
        <i className="pi pi-search"></i>
        <InputText 
          className='w-full'
          placeholder={props.dica}
        />
      </span>
      <Button 
        label='OK'
        className='p-button-outlined mt-2'
      />
    </div>
  )
}

Busca.defaultProps = {
  dica: 'Digite algo que deseja ver...'
}

export default Busca