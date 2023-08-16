import type { TFormFields } from '../_types';
import type { UseFormRegister } from 'react-hook-form';

const Title = ({ register, errorMessage }: { register: UseFormRegister<TFormFields>; errorMessage?: string }) => {
  return (
    <div className="mb-12 flex flex-col">
      <label htmlFor="title" className="mb-1 text-lg font-bold">
        Title
      </label>
      <input
        {...register('title', {
          required: {
            value: true,
            message: 'This field is required',
          },
          minLength: {
            value: 30,
            message: 'Title should be at least 30 characters long',
          },
        })}
        id="title"
        type="text"
        className={`rounded-md border p-2 text-sm ${
          errorMessage ? 'border-red-500 focus:border-red-500' : 'border-gray-200 focus:border-emerald-500'
        } focus:outline-none`}
        placeholder="Give your kitchen a catchy name that highlights its unique features or vibe."
      />
      <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
    </div>
  );
};

export default Title;
