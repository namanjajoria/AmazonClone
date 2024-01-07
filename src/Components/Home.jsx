import Products from "./Products"
import Slider from "./Slider"

// eslint-disable-next-line react/prop-types
const Home = ({searchTerm}) => {
  return (
    <div>
      <Slider/>
      <Products searchTerm={searchTerm}/>
    </div>
  )
}

export default Home
