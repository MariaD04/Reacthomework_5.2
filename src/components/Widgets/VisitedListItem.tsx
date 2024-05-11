import {FC} from 'react'
// компонент, который нужен для виджета "Посещаемое"
export const VisitedListItem: FC<IVisitedListItem> = ({term, description}) => {
  return (
    <li className='visited-list-item'>
        <div>{term} - {description}</div>
    </li>
  )
}

export default VisitedListItem 