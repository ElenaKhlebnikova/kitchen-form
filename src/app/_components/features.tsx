import type { Control, UseFormRegister } from 'react-hook-form';
import type { TFormFields } from '../_types';

import { FEATURES } from '../_constants';
import { useWatch } from 'react-hook-form';

const Features = ({ register, control }: { register: UseFormRegister<TFormFields>; control: Control<TFormFields> }) => {
  const [features] = useWatch({ control, name: ['features'] });

  return (
    <>
      <h3 className="mb-2 text-lg font-bold">Features</h3>
      <p className="text-sm">
        List all the features available in your kitchen. You can add more in the description field
      </p>
      <div className="mb-12 mt-5 grid grid-cols-2 gap-x-5">
        {FEATURES.map((feature, index) => {
          return (
            <div
              key={feature.id}
              className={`${
                features?.includes(feature.id)
                  ? 'text-white   bg-emerald-500 border-emerald-500'
                  : 'border-emerald-300 text-gray-700'
              } mb-5 flex flex-col rounded-md  cursor-pointer border border-solid px-2 py-2 `}
            >
              <div className="flex cursor-pointer items-start">
                <input
                  {...register(`features.${index}`)}
                  id={feature.id}
                  value={feature.id}
                  type="checkbox"
                  className="hidden"
                />
                <label htmlFor={feature.id} className="flex ml-3  w-full h-full cursor-pointer flex-col">
                  <span className="text-sm cursor-pointer font-semibold "> {feature.name} </span>
                  <span className="text-sm cursor-pointer"> {feature.description} </span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Features;
