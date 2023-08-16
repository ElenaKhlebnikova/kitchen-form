import type { Control, UseFormRegister } from 'react-hook-form';
import type { TFormFields } from '../_types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RULES } from '../_constants';
import { useWatch } from 'react-hook-form';

const Rules = ({ register, control }: { register: UseFormRegister<TFormFields>; control: Control<TFormFields> }) => {
  const [rules] = useWatch({ control, name: ['rules'] });

  return (
    <>
      <h3 className="mb-2 text-lg font-bold">Rules</h3>
      <p className="text-sm">Add rules to your kitchen</p>
      <div className="mb-12 mt-5 grid grid-cols-2  gap-x-5">
        {RULES.map((rule, index) => {
          return (
            <div
              key={rule.id}
              className={`${
                rules?.includes(rule.id)
                  ? 'text-white   bg-emerald-500 border-emerald-500'
                  : 'border-emerald-300 text-gray-700'
              } mb-5  flex flex-col rounded-md  cursor-pointer border border-solid px-2 py-2 `}
            >
              <div className="flex items- ml-3 cursor-pointer ">
                <input
                  {...register(`rules.${index}`)}
                  id={rule.id}
                  value={rule.id}
                  type="checkbox"
                  className="hidden"
                />
                <label
                  htmlFor={rule.id}
                  className="flex flex-col md:flex-row w-full h-full items-center cursor-pointer"
                >
                  <FontAwesomeIcon
                    className={`${
                      rules?.includes(rule.id) ? 'text-white' : 'text-emerald-500'
                    } h-10 w-10 p-2 mb-3 md:mb-0`}
                    icon={rule.icon}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm cursor-pointer font-extrabold"> {rule.name} </span>
                    <span className="text-sm cursor-pointer"> {rule.description} </span>
                  </div>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Rules;
