import {FC} from 'react'
import ProgramListItem from './ProgramListItem'
// компонент, который отображает виджет "Эфир"
export const EtherWidget: FC<IProgram> = ({ items }) => {
  return (
    <div className='widget-ether'>
        <ul className='widget-list'>
            { items.map((item) => (<ProgramListItem key={item.name} {...item}/>)) }
        </ul>
    </div>
  )
}

export default EtherWidget
