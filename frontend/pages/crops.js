import React, { useState } from 'react';
import { FaFileUpload } from 'react-icons/fa';
import { RxCross2 } from "react-icons/rx";
import { HiOutlinePlusSm } from "react-icons/hi";

const farmer = {
    Name: 'farmer1',
    Phone: '123456789',
    Age: 30,
    District: 'Karnal',
    State: 'Haryana',
    Area: 10, 
    crops: ['rice', 'wheat', 'maize']
}

let dropdownItems = ['rice', 'wheat', 'maize', 'Cotton', 'Tea', 'Coffee'];

export default function App(){

    const [image, setImage] = useState(null);


    const handleFileChange = (event) => {
        // Get the selected file
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        // Setting the state variable
        setImage(imageUrl);
      };

    const [items, setItems] = useState(farmer['crops']);
    const [selectedItem, setSelectedItem] = useState('');

    const handleRemove = (itemToRemove) => {
      // Create a new array that doesn't include the item to remove
      const newItems = items.filter(item => item !== itemToRemove);
      // Set the items state to the new array
      setItems(newItems);
      // Update the predefined array
      farmer['crops'] = newItems;

    };

    const handleAdd = () => {
        if (selectedItem && !items.some(item => item === selectedItem) ) {
          setItems(prevItems => [...prevItems, selectedItem]);
          // Update the predefined array
          farmer['crops'] = [...farmer['crops'], selectedItem];
          setSelectedItem('');
        }
        console.log(farmer);
      };

      const handleSelectChange = (e) => {
        setSelectedItem(e.target.value);
        handleAdd(e.target.value);
      };
      return (
        <main className="overflow-y-auto">
          <div className="flex flex-col items-center justify-center w-full h-full gap-5">
                    
        {/* Crops */}
        <Title name="Crops" />
        <div className="grid grid-cols-5 gap-3 p-0 mx-auto place-items-center">
        {farmer['crops'].map(value => (
            <CropNames crop={value} onRemove={handleRemove}/>
        ))}

        {/* Crops drowpdown list */}
        <select 
            value={selectedItem} 
            onChange={(e) => setSelectedItem(e.target.value)}
            className='flex flex-row justify-center items-center w-auto h-12 border border-blue-500 hover:bg-blue-500 rounded-lg p-2 bg-transparent'
        >
            <option value="">Select item</option>
            {dropdownItems.map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>

        <button 
          onClick={handleAdd} 
          className='flex flex-row justify-center items-center w-12 h-12 border border-blue-500 hover:bg-blue-500 rounded-lg p-2 bg-transparent'
        > 
          <HiOutlinePlusSm /> 
        </button>
        </div> 
        </div>
    </main>
  )
}



function CropNames( {crop, onRemove} ){

    return (
        <div className="flex flex-row justify-center items-center w-32 h-12 border border-blue-500 hover:bg-blue-500 rounded-lg p-5 gap-2">
            <p className="text-white">{crop}</p>
            <div className='cursor-pointer' onClick={() => onRemove(crop)}><RxCross2 /></div>
        </div>
    )
}

function Title({name}){
    return(
      <div className="flex flex-col pl-7 items-start justify-left w-full h-full">
        <h1 className="text-3xl font-bold">{name}</h1>
      </div>
    )
}
        

