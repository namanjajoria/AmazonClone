import Products from "./Products"
import Slider from "./Slider"

// eslint-disable-next-line react/prop-types
const Home = ({searchTerm}) => {
  return (
    <div>
      <Slider/>
      <div id="productsSection">
        <Products searchTerm={searchTerm} />
      </div>
    </div>
  )
}

export default Home
