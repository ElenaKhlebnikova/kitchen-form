import type { Control, UseFormRegister } from 'react-hook-form';
import type { NonRecurringDate, TFormFields } from '../_types';

import { HOURS } from '../_constants';
import SelectedDatesTable from './selected-dates-table';
import { useFieldArray } from 'react-hook-form';

const NonRecurringAvailability = ({
  register,
  control,
  nonRecurring,
}: {
  register: UseFormRegister<TFormFields>;
  control: Control<TFormFields>;
  nonRecurring: NonRecurringDate[];
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'availability.nonRecurring',
  });

  const currentDateObj = new Date();
  const currentDate = currentDateObj.toISOString();
  const maxDate = new Date(
    currentDateObj.getFullYear(),
    currentDateObj.getMonth() + 3,
    currentDateObj.getDate()
  ).toISOString();

  return (
    <div>
      <div className="flex flex-row justify-between">
        <label htmlFor="dates" className="mb-1 text-sm md:text-base font-bold">
          Non recurring availablity
        </label>
        <button
          type="button"
          className="text-emerald-500 font-semibold text-sm md:text-base cursor-pointer"
          onClick={() => {
            append({
              date: new Date().toISOString().substring(0, 10),
              startTime: 0,
              endTime: 1,
            });
          }}
        >
          + Add non recurring availablity
        </button>
      </div>

      <div>
        <div className="flex flex-col justify-center items-stretch w-full text-sm mt-2">
          {fields.map((field, index) => (
            <div className="flex border border-emerald-200 rounded-md justify-around items-center mt-2 " key={field.id}>
              <div className="flex flex-col py-1">
                <label className="mb-1 text-xs md:text-base   text-emerald-500">Select a date</label>
                <input
                  className="border p-1 focus:border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.nonRecurring.${index}.date`, { valueAsDate: true })}
                  key={field.id}
                  type="date"
                  min={currentDate}
                  max={maxDate}
                />
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-xs md:text-base   text-emerald-500">Start time</label>
                <select
                  className="border p-1 focus:border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.nonRecurring.${index}.startTime`, { valueAsNumber: true })}
                >
                  {HOURS.map((h) => (
                    <option value={h} key={h}>
                      {h + ':00'}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-xs md:text-base   text-emerald-500">End time</label>

                <select
                  className="border p-1 focus:border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.nonRecurring.${index}.endTime`, { valueAsNumber: true })}
                >
                  {HOURS.map((h) => (
                    <option key={h} value={h}>
                      {h + ':00'}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => {
                  remove(index);
                }}
                className="text-emerald-500  ml-1 align-bottom  font-semibold"
              >
                X
              </button>
            </div>
          ))}
        </div>
        <div>
          {nonRecurring && nonRecurring.length !== 0 && <SelectedDatesTable dates={nonRecurring} remove={remove} />}
        </div>
      </div>
    </div>
  );
};
export default NonRecurringAvailability;
