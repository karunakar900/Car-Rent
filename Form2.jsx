import React, { useState } from "react";
const Form2 = () => {

    const [vehicleType, setVehicleType] = useState('');
    const [VehiclesubType, setVehiclesubType] = useState([]);


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
        </form>
    )
}

export default Form2;