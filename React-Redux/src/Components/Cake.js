import React, {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {BuyCake, AddCake} from "../redux/ActionCreators";

export default function Cake(){
    const numCakes = useSelector(state => state.numOfCakes);
    const dispatch = useDispatch();
    const [countCakes, setCountCakes] = useState(0);
    return(
      <div className="container">
          <span className="header"> Number of Cakes: {numCakes}</span>
          <input type="number"
                 value={countCakes}
                 min={0}
                 /*max={(numCakes === 0) ? 99 : numCakes}*/
                 onChange={
                     event => {
                        let {value} = event.target;
                        if(!value || value === '') value = 0;
                        if(value>numCakes) 
                            if(numCakes != 0)
                                value = numCakes;
                        value = parseInt(value);
                        setCountCakes(value);
                    }
                } />
          <button onClick={() => {
                if(numCakes >= countCakes)
                    dispatch(BuyCake(countCakes));
                setCountCakes(0);
              }} >
              Buy Cake
          </button>

          <button onClick={() => {
                dispatch(AddCake(countCakes));
                setCountCakes(0);
                }}>
              Add Cake
          </button>
      </div>
    );
}