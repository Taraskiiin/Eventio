import React from 'react'

import styles from './round-button.module.scss'

interface RoundButtonProps {
  placeholder: string
  onClick: () => void
}

const RoundButton: React.FC<RoundButtonProps> = ({ onClick, placeholder }) => {
  return (
    <button type='button' className={styles['round-button']} onClick={onClick}>
      {placeholder}
    </button>
  )
}

export default RoundButton
