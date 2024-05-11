import {FC} from 'react'
// компонент, который отображает виджет "Погода"
export const WeaterWidget: FC<IWidgetWeather> = ({averageTemperature, morningTemperature, dayTemperature}) => {
  return (
    <div className='widget-weather'>
        <span className='widget-weather-average'>{averageTemperature}</span>
        <div className='widget-weather-details'>
            <span className='widget-weather-morning'>Утром {morningTemperature}</span>
            <span className='widget-weather-day'>Днём {dayTemperature}</span>
        </div>
    </div>
  )
}

export default WeaterWidget
