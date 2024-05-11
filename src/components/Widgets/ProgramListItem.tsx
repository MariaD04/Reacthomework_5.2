import {FC} from 'react'
// компонент, который нужен для виджетов "ТВ-Программа" и "Эфир"
export const ProgramListItem: FC<IProgramListItem> = ({time, name, channel}) => {
  return (
    <li className='program-list-item'>
        <span className='program-list-item-time'>{time? `${time}` : ''}</span>
        <span className='program-list-item-name'>{name}</span>
        <span className='program-list-item-channel'>{channel}</span>
    </li>
  )
}

export default ProgramListItem