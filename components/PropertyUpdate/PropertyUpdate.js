import React, { useState } from 'react';

const PropertyForm = () => {
  const [num, setNum] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/property-update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num, price }),
      });

      if (response.ok) {
        const updatedProperty = await response.json();
        console.log(updatedProperty); // Assuming the response contains the updated document
      } else {
        throw new Error('Failed to update property');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="num" className="form-label">Number:</label>
        <input
          type="text"
          id="num"
          className="form-control"
          value={num}
          onChange={(event) => setNum(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="price" className="form-label">Price:</label>
        <input
          type="text"
          id="price"
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Update</button>
    </form>
  );
};

export default PropertyForm;
