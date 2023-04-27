import React, { useEffect, useState } from "react";
import axios from "axios";
const Form2 = () => {

    const [vehicleType, setVehicleType] = useState('');
    const [VehiclesubType, setVehiclesubType] = useState([]);

    useEffect(() => {
        if (vehicleType) {
            axios.get("/vehicle")
                .then(response => { setVehiclesubType(response.data) })
                .catch(error => { console.log(error) })
        }
        else {
            setVehicleType([]);
        }
    }, [vehicleType])


    const handlevehicletypechange = (e) => {
        setVehicleType(e.target.value)
    }


    return (
        <form>
            <h2>Number Of Wheels</h2>
            <label>
                <input
                    type="radio"
                    name="options"
                    value="option1"
                    checked={vehicleType === 'option1'}
                    onChange={handlevehicletypechange}
                />
                2-Wheeler
            </label>
            <br></br>
            <label>
                <input
                    type="radio"
                    name="options"
                    value="option2"
                    checked={vehicleType === 'option2'}
                    onChange={handlevehicletypechange}
                />
                4-Wheeler
            </label>
            <br></br>
            <p>Vehicle-Sub-Types</p>
            <ul>
                {VehiclesubType.map(subtype => (
                    <li key={subtype}>{subtype}</li>
                ))}
            </ul>
        </form>
    )
}

export default Form2;