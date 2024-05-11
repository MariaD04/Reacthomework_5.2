import { FC } from "react"
// компонент, который отображает виджет "Карта Германии"
export const GermanyMapWidget: FC<IGermanyMap> = ({ text }) => {
  return (
    <div className='widget-germany-map'>
        <span>{text}</span>
    </div>
  )
}

export default GermanyMapWidget
