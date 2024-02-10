import React, { useState, useEffect } from 'react';



function Dropdowns() {

  const dictionary = {
    "Crop Name": ['Rice', 'Wheat', 'Millets', 'Pulses', 'Oilseeds', 'Cotton', 'Sugarcane', 'Jute', 'Tea', 'Coffee', 'Others'],
    State: ['Gujarat', 'Maharashtra', 'UP', 'Punjab', 'Haryana', 'MP', 'Rajasthan', 'Karnataka', 'Tamil Nadu', 'Others'],
    "Month Planted": ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  };

  const initialCheckedItems = Object.keys(dictionary).reduce((acc, category) => {
    acc[category] = [];
    return acc;
  }, {});

  const [isOpen, setIsOpen] = useState({});
  const [checkedItems, setCheckedItems] = useState(initialCheckedItems);


  const handleCheckChange = (event, category) => {
    const item = event.target.name;
    setCheckedItems(prevItems => {
      if (event.target.checked) {
        return { ...prevItems, [category]: [...prevItems[category], item] };
      } else {
        return { ...prevItems, [category]: prevItems[category].filter(i => i !== item) };
      }
    });
  };

  useEffect(() => {
    console.log(checkedItems); // This will log the updated array
  }, [checkedItems]);

  const toggleDropdown = (category) => {
    setIsOpen(prevState => ({ ...prevState, [category]: !prevState[category] }));
  };

  return (
    // Outer Div
    <div className='flex flex-row gap-10 items-center justify-center'>
      {Object.keys(dictionary).map(category => (
    // Div for individual dropdown
        <div className='w-64 bg-slate-500 h-12 rounded-lg flex flex-col items-center justify-start pt-3' key={category}
            onMouseEnter={() => setIsOpen({ [category]: true })}
            onMouseLeave={() => setIsOpen({ [category]: false })}>
          <button className='text-xl font-bold' onClick={() => toggleDropdown(category)}>{category}</button>
          {isOpen[category] && (
    // Div for all the items in the dropdown
            <div className=' gap-0.5 grid'>
              {dictionary[category].map(item => (
    // Div for individual item in the dropdown
                <div className='h-8 w-52 bg-slate-600 place-items-center rounded-lg' key={item}>
                  <label className='grid grid-cols-2 place-items-center'>
                    <input type="checkbox" name={item} checked={checkedItems[category ].includes(item)} onChange={(event) => handleCheckChange(event, category)} />
                    {item}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Dropdowns;