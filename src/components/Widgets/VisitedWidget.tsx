import {FC} from 'react'
import VisitedListItem from './VisitedListItem'
// компонент, который отображает виджет "Посещаемое"
export const VisitedWidget: FC<IVisited> = ({ items }) => {
  return (
    <div className='widget-visited'>
        <ul className='widget-list'>
            { items.map((item) => (<VisitedListItem key={item.term} {...item}/>)) }
        </ul>
    </div>
  )
}

export default VisitedWidget