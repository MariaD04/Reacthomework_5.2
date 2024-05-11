import { FC } from 'react'
// компонент, который отображает новость
export const NewsListItem: FC<INewsListItem> = ({ src, text }) => {
  return (
    <li className='news-main-list-item'>
      <img src={src} alt='' />
      <div className='news-text'>{text}</div>
    </li>
  )
}

export default NewsListItem