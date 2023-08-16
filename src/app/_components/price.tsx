import type { TFormFields } from '../_types';
import type { UseFormRegister } from 'react-hook-form';

const Price = ({ register, errorMessage }: { register: UseFormRegister<TFormFields>; errorMessage?: string }) => {
  return (
    <div className="my-12 flex flex-col">
      <label htmlFor="price" className="mb-1 text-lg font-bold">
        Price
      </label>
      <div className="flex flex-col md:flex-row md:items-center">
        <div className="mb-3 md:mb-0">
          <input
            {...register('price', {
              required: {
                value: true,
                message: 'This field is required',
              },
              min: {
                value: 1,
                message: 'The price must be at least 1,00 EUR',
              },
            })}
            type="number"
            min={1}
            id="price"
            className={`w-16 rounded-md border p-2 text-sm focus:outline ${
              errorMessage ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
            }`}
            placeholder="0"
          />
          <span className="ml-2 mr-3 font-semibold">&euro;</span>
        </div>
        <span className="text-sm">
          Set a competitive price based on the features of your kitchen and prices of similar kitchens in your area.
          Remember, you can always adjust this later.
        </span>
      </div>
      <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default Price;
