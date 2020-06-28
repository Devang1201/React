import React,{usestate, useState} from "react";
import {useSelector,useDispatch} from "react-redux";
import {BuyIceCream, AddIceCream} from "../redux/ActionCreators";

export default function IceCream(){
    const numIceCreams = useSelector(state => state.numOfIceCreams);
    const dispatch = useDispatch();
    const [countIceCreams, setIceCreams] = useState(0);

    return(
        <div className = "container">
            <span className = "header"> Number Of Ice-Creams: {numIceCreams}</span>
            <input type = "number"
                   value = {countIceCreams}
                   min = {0}
                   /*max = {(numIceCreams === 0) ? 99 : numIceCreams}*/
                   onChange = {
                       event => {
                            let {value} = event.target;
                            if(!value || value ==='') 
                                value = 0;
                            if(value>numIceCreams)
                                if(numIceCreams !=0) 
                                    value = numIceCreams;
                            value = parseInt(value);
                            setIceCreams(value);
                       }
                   }
            />

            <button onClick = {
                () => {
                    if(numIceCreams >= countIceCreams)
                        dispatch(BuyIceCream(countIceCreams));
                    setIceCreams(0);
                }
            }>
                Buy Ice-Cream(s)
            </button>

            <button onClick = {
                () => {
                    dispatch(AddIceCream(countIceCreams));
                    setIceCreams(0);
                }
            }>
                Add Ice-Cream(s)
            </button>

        </div>
    );
}