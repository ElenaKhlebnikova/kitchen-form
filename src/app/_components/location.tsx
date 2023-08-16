import type { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import type { ChangeEvent, FocusEvent } from 'react';
import type { TFormFields } from '../_types';
import { useState } from 'react';

interface TLocationInput {
  display_name: string;
  licence: 'Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright';
  powered_by: 'Map Maker: https://maps.co';
  osm_type: 'way';
  osm_id: number;
  boundingbox: string[];
  lat: string;
  lon: string;
}

interface UseFormReturn {
  setValue: UseFormSetValue<TFormFields>;
  register: UseFormRegister<TFormFields>;
  errorMessage?: string;
}

const Location = ({ register, setValue, errorMessage }: UseFormReturn) => {
  const [searchResults, setSearchResults] = useState<TLocationInput[]>([]);

  const loadOptions = async (address: string) => {
    try {
      const res = (await fetch(`https://geocode.maps.co/search?q=${address}`)).json();

      setSearchResults(await res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="mb-12 flex flex-col">
      <label htmlFor="location" className="mb-1 text-lg font-bold">
        Location
      </label>
      <div className="flex flex-col relative">
        <input
          {...register('location', {
            required: {
              value: true,
              message: 'This field is required',
            },
            onChange: (event: ChangeEvent<HTMLInputElement>) => {
              loadOptions(event.target.value);
            },
            onBlur: (event: FocusEvent<HTMLInputElement>) => {
              setSearchResults([]);
            },
          })}
          type="text"
          id="location"
          className={`rounded-md border p-2 text-sm focus:outline-none ${
            errorMessage ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
          }`}
          placeholder="Enter your kitchen's exact address for internal use."
        />
        {searchResults.length > 0 && (
          <ul className="z-50  mt-1 -b-md w-full rounded-md border absolute top-9 border-gray-300 bg-white text-sm shadow-lg">
            {searchResults.map((result) => (
              <li
                key={result.display_name.toLowerCase()}
                onClick={() => {
                  setValue('location', result.display_name);
                  setSearchResults([]);
                }}
                className="cursor-pointer p-2 first-of-type:rounded-t-md last-of-type:rounded hover:bg-emerald-500 hover:text-white"
              >
                {result.display_name}
              </li>
            ))}
          </ul>
        )}
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        <span className="mt-2 text-sm">
          On the listing, we&apos;ll only show the general area to guests until a booking is confirmed for privacy
          reasons.
        </span>
      </div>
    </div>
  );
};
export default Location;
