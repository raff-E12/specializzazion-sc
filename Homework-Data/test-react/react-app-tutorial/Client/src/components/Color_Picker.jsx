import React, {useState} from "react";

function PickerColor() {
    const [color, setColor] = useState("");
    //Oggetto scritto in hook con l'useState.
    const [car, setCar] = useState({year: 2024,make: "Ford", model:"Mustang"});
    //Questo è come caricare o cambiare valore di un array partendo da un hook in stato
    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
    
    function handleColorPicker(e){
        setColor(e.target.value);
    }

    function handleAddFood(e) {
        const newFood = document.getElementById("food-input").value;
        // document.getElementById("food-input").value = "";
        //creazione di un nuovo array con lo spread operator
        setFoods([...foods, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
        <>
        <div className="box-select-color">
            <h1>Color Picker</h1>
            <div className="box-color" style={{backgroundColor: color}}>
                <p>Color Select: {color}</p>
            </div>
            <h2>Select a Color:</h2>
            <input type="color" value={color} onChange={handleColorPicker}/>
            {/* <p>What is your car? {car.year}, {car.make}, {car.model}.</p> */}
        </div>
        {/* <div>
            <div>
                <ul>
                    {foods.map((element, index)=><li key={index} onClick={() => handleRemoveFood(index)} style={{cursor:"pointer"}}>{element}</li>)}
                </ul>
                <input type="text" id="food-input" placeholder="Enter..."/>
                <button onClick={handleAddFood}>Submit</button>
            </div>
        </div> */}
        </>
    )
}

export default PickerColor