import { faBath, faBed, faCar, faDog } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import numeral from "numeral"

export const ProductProperties = ({price, description}) => {
  return <div className="max-w-lg my-10 bg-white text-black mb-10 p-5 text-center">
    <div>

    <div>
      ${numeral(price).format("0,0")}
    </div>
    <div>
      {description}
    </div>

    </div>
  </div>
}