import { FC } from "react"
// компонент, который отображает валюту и её курс
export const CurrencyListItem: FC<ICurrencyListItem>  = ({ currency, rate }) => {
  return (
    <li className="currency-list-item">
        <a href="#">{currency}: </a>
        <span>{rate}</span>
    </li>
  )
}

export default CurrencyListItem