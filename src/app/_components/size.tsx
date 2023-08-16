import type { TFormFields } from '../_types';
import type { UseFormRegister } from 'react-hook-form';

const Size = ({ register, errorMessage }: { register: UseFormRegister<TFormFields>; errorMessage?: string }) => {
  return (
    <div className="mb-12 flex flex-col">
      <label htmlFor="size" className="mb-1 text-lg font-bold">
        Size
      </label>
      <div className="flex items-center">
        <input
          {...register('size', {
            valueAsNumber: true,
            required: {
              value: true,
              message: 'This field is required',
            },
            min: {
              value: 1,
              message: 'Maximum number of people should be at least 1.',
            },
          })}
          min={0}
          type="number"
          id="size"
          className="w-16 rounded-md border p-2 text-sm focus:border-emerald-500 focus:outline-none"
        />
        <span className="ml-2 text-sm">
          Enter the maximum number of people allowed in your kitchen, Default value is 3.
        </span>
      </div>
      <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default Size;
