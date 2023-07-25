import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const Products = () => {
    const dispatch = useDispatch()
    const {list} = useSelector((state) => state.productReducer)

    useEffect(() => {
      getData();
    }, [])

    const getData = () => {
      axios
      .get(`https://api-car-rental.binaracademy.org/customer/v2/car`)
      .then((res) => {
        console.log(res);
        dispatch({
          type: "GET_DATA_SUCCED",
          payload : res.data.cars
        })
      }
      )
      .catch((err) => {
        dispatch({
          type: "GET_DATA_FAILED",
          payload : err.massage
        })
      })
    }

    return(
        <div>
        {list.map((item) =>{
          return (
            <div>
            <p>nama mobil :{item.name}</p></div>
            
          )
        } )}
      </div>
    )
}

export default Products