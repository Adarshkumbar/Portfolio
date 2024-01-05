import React, { useState } from 'react'

const More = () => {
    const [isOpen, setIsOpen] = useState(false);

    //Handles the opening and closing of our nav
    const handleClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div>More</div>
  )
}

export default More