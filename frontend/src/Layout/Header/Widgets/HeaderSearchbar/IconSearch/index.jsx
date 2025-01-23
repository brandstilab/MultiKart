import React, { useState } from 'react'
import { RiSearchLine } from 'react-icons/ri'
import IconSearchModal from './IconSearchModal'

const IconSearch = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <RiSearchLine onClick={() => setIsOpen(true)} />
      <IconSearchModal setIsOpen={setIsOpen} isOpen={isOpen} />
    </>
  )
}

export default IconSearch