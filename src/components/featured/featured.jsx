import React, { useState } from 'react';
import axios from 'axios';

function Featured() {
  const [citiesInput, setCitiesInput] = useState('');
  const [cities, setCities] = useState([]);
  const [counts, setCounts] = useState([]);

  const handleInputChange = (event) => {
    setCitiesInput(event.target.value);
  };

  const fetchHotelCounts = async () => {
    try {
      const citiesArray = citiesInput.split(',').map((city) => city.trim()); // Split and trim city names
      console.log(citiesArray)
      const join=citiesArray.join(',')
      console.log(join)
      const response = await axios.get(
        `http://localhost:9090/api/v1/hotel/countByCity?cities=${citiesArray.join(',')}`
      );
      setCities(citiesArray); // Update 'cities' with the selected cities
      setCounts(response.data); // Update 'counts' with response data
    } catch (error) {
      console.error('Error fetching hotel counts:', error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page.
    fetchHotelCounts();
  };

  return (
    <div>
      <h1>Hotel Counts by City</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter cities (comma-separated)"
          value={citiesInput}
          onChange={handleInputChange}
        />
        <button type="submit">Fetch Hotel Counts</button>
      </form>
      <h2>Selected Cities:</h2>
      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
      <h2>Hotel Counts:</h2>
      <ul>
        {counts.map((count, index) => (
          <li key={index}>
            City: {cities[index]}, Count: {count} hotels
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Featured;
