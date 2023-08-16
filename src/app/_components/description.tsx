import type { TFormFields } from '../_types';
import type { UseFormRegister } from 'react-hook-form';

const Description = ({ register, errorMessage }: { register: UseFormRegister<TFormFields>; errorMessage?: string }) => {
  return (
    <div>
      <label htmlFor="description" className="mb-1 text-lg font-bold">
        Description
      </label>
      <textarea
        {...register('description', {
          minLength: {
            value: 30,
            message: 'Description should be at least 30 characters long',
          },
          required: {
            value: true,
            message: 'This field is required',
          },
        })}
        id="description"
        className={`h-24 w-full rounded-md border p-2 text-sm ${
          errorMessage ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
        }  focus:outline-none`}
        placeholder="Describe your kitchen's features, style, and unique elements. Do you have modern appliances, a
            beautiful view, a spacious layout, or unique cookware? Let potential guests know!"
      />
      <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default Description;
