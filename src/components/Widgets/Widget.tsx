import {FC} from 'react'
// компонент, который отображает виджет
export const Widget: FC<IWidget> = ({title, children}) => {
  return (
    <div className='widget-container'>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export default Widget