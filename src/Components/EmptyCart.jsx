import { Link } from 'react-router-dom';
import image from '../Images/emptyCart.png'
import Button from "@mui/material/Button";

const EmptyCart = () => {
  return (
    <div className="cartdiv2 d-flex flex-column align-items-center pt-5">
      <h1 className='mb-5'>Your Cart is Empty</h1>
      <div>
      <img src={image} width={'200px'} height={'200px'}></img>
      </div>
      <Link to={'/'}>
      <Button
              variant="contained"
              className="mt-5 button"
              
              href='/'
            >
              Continue Shopping
            </Button>
        </Link>
    </div>
  )
}

export default EmptyCart
