import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const FirstForm = () => {
  const [userData, setUserData] = useState();
  const { register, handleSubmit } = useForm();

  
  
  const countryOptions = [
    { value: 'usa', label: 'United States' },
    { value: 'canada', label: 'Canada' },
    { value: 'scotland', label: 'Scotland' },
  ];

  const handleSave = (formValues: any) => {
    console.log("form value", formValues);
    setUserData(formValues);
  }

  console.log('userData :>> ', userData);

  return (
    <form onSubmit={handleSubmit(handleSave)} className="grid gap-6">
      <div>
        <input
          {...register('firstName')}
          type="text"
          placeholder="First Name"
          className="w-full"
        />
      </div>
      <div>
        <input {...register('lastName')} type="text" placeholder="Last Name" />
      </div>
      <div>
        <select {...register('country')} placeholder="Country">
          <option value="">--Please choose an option--</option>
          {countryOptions?.map(country => {
            return (
              <option value={country?.value} key={country?.value}>
                {country?.label}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <button
          type="submit"
          className="border-2 border-white text-lg uppercase px-6 py-2 w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default FirstForm;
