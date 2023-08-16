import type { Control, UseFormClearErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import type { TFormFields } from '../_types';

import { useEffect, useState } from 'react';
import { LANGUAGES } from '../_constants';
import { useWatch } from 'react-hook-form';

const Languages = ({
  register,
  errorMessage,
  clearErrors,
  setValue,
  control,
}: {
  register: UseFormRegister<TFormFields>;
  errorMessage?: string;
  clearErrors: UseFormClearErrors<TFormFields>;
  setValue: UseFormSetValue<TFormFields>;
  control: Control<TFormFields>;
}) => {
  const [languagesDropdownOpen, setLanguagesDropdownOpen] = useState(false);

  const [languages] = useWatch({ control, name: ['languages'] });

  useEffect(() => {
    if (languages.some(Boolean)) {
      clearErrors('languages');
    }
  }, [languages, clearErrors]);

  const getCSSClasses = () => {
    if (languagesDropdownOpen) {
      return errorMessage ? 'border-red-500' : 'border-emerald-500';
    } else {
      return errorMessage ? 'border-red-500' : 'border-grey-300';
    }
  };

  return (
    <div className="mb-12 flex flex-col">
      <label htmlFor="languages" className="mb-1 text-lg font-bold">
        Languages
      </label>

      <span className="mb-2 text-sm">Include all languages that you speak:</span>

      <div className="relative">
        <div
          className={`mr-2 flex w-full md:w-1/2 cursor-pointer flex-wrap rounded-md border border-solid px-2 py-2 ${getCSSClasses()}`}
          onClick={() => {
            setLanguagesDropdownOpen(!languagesDropdownOpen);
          }}
        >
          {languages.filter(Boolean).length === 0 && <p className="text-sm text-gray-400">Select languages...</p>}
          {languages.filter(Boolean).map((lang) => (
            <div
              key={lang.toString()}
              className="mx-1 mt-1 flex rounded-md bg-emerald-500 px-2 text-sm font-bold text-white"
            >
              <p className="mr-2">{lang}</p>
              <button
                onClick={() => {
                  setLanguagesDropdownOpen(false);
                  setValue(
                    'languages',
                    languages.filter((language) => language !== lang)
                  );
                }}
              >
                x
              </button>
            </div>
          ))}
        </div>
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        <ul
          className={`grid w-1/2 ${
            !languagesDropdownOpen && 'hidden'
          } mt-1 flex-col rounded-md border border-gray-300 shadow-lg absolute top-9 z-10 bg-white`}
        >
          {LANGUAGES.map((lang, index) => (
            <label
              key={lang}
              className="px-2 py-1 text-sm first-of-type:rounded-t-md last-of-type:rounded-b-md hover:cursor-pointer hover:bg-emerald-500 hover:text-white"
              htmlFor={lang}
              onClick={() => {
                setLanguagesDropdownOpen(false);
              }}
            >
              {lang}
              <input
                {...register(`languages.${index}`, {
                  validate: (value, formValues) => {
                    if (!formValues.languages.some(Boolean)) return 'At least one language is required';
                  },
                })}
                id={lang}
                value={lang}
                type="checkbox"
                className="hidden"
              />
            </label>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Languages;
