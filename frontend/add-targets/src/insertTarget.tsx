import { useState } from 'react';
<<<<<<< HEAD
import './InsertTarget.css';

=======
import './insertTarget.css'
>>>>>>> 47cbe31c24ada730b987b88f9d17d269cb59facc

const InsertTarget = () => {
  const [inputValue, setInputValue] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://localhost:8000/add_target', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ target_ip: inputValue }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();
      setResponseData(data);
      setError(null);
      setInputValue('');
    } catch (error) {
<<<<<<< HEAD
      setError('An error occurred while fetching data.'); 
=======
      setError('Invalid IP Address');
>>>>>>> 47cbe31c24ada730b987b88f9d17d269cb59facc
    }
  };

  return (
    <div className='insert-target'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
<<<<<<< HEAD
      <button onClick={handleSubmit}>Submit</button>
=======
      <button className='insert-target' onClick={handleSubmit}>Submit</button>
>>>>>>> 47cbe31c24ada730b987b88f9d17d269cb59facc
      {error && <p className='error'>{error}</p>}
      {responseData && (
        <div className='response-data'>
          <h2>Response Data</h2>
          <p>{JSON.stringify(responseData)}</p>
        </div>
      )}
    </div>
  );
};

export default InsertTarget;