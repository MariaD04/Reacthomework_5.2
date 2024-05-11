import {FC} from 'react'
import ProgramListItem from './ProgramListItem'
// компонент, который отображает виджет "ТВ-Программа"
export const TVProgramWidget: FC<IProgram> = ({ items }) => {
  return (
    <div className='widget-TV'>
        <ul className='widget-list'>
            { items.map((item) => (<ProgramListItem key={item.name} {...item}/>)) }
        </ul>
    </div>
  )
}

export default TVProgramWidget