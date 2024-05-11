import {FC} from 'react'
//компонент, который отображает рекламу
export const Advertising: FC<IAdvertising> = ({ src, alt, text}) => {
  return (
    <div className='advertising-container'>
        <img src={src} alt={alt} />
        <h5>{text}</h5>
    </div>
  )
}

export default Advertising
