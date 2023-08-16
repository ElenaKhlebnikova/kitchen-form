import type { Control, UseFormRegister } from 'react-hook-form';
import type { RecurringDate, TFormFields } from '../_types';

import { DAYS, HOURS } from '../_constants';
import { useFieldArray } from 'react-hook-form';

import SelectedDatesTable from './selected-dates-table';

const RecurringAvailability = ({
  register,
  control,
  recurring,
}: {
  register: UseFormRegister<TFormFields>;
  control: Control<TFormFields>;
  recurring: RecurringDate[];
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'availability.recurring',
  });

  return (
    <div>
      <div className="flex flex-row justify-between">
        <label htmlFor="dates" className="mb-1 text-sm md:text-base font-bold">
          Recurring availablity
        </label>
        <button
          type="button"
          className="text-emerald-500 font-semibold text-sm md:text-base cursor-pointer"
          onClick={() =>
            append({
              dayOfWeek: 0,
              startTime: 0,
              endTime: 1,
            })
          }
        >
          + Add recurring availablity
        </button>
      </div>
      <div>
        <div className="flex flex-col justify-center items-stretch w-full text-sm mt-2">
          {fields.map((field, index) => (
            <div className="flex border border-emerald-200 rounded-md justify-around items-center mt-2" key={field.id}>
              <div className="flex flex-col py-1">
                <label className="mb-1 text-xs md:text-base text-emerald-500">Select a day</label>
                <select
                  className="p-1 border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.recurring.${index}.dayOfWeek`, { valueAsNumber: true })}
                >
                  {DAYS.map((d) => (
                    <option value={d.number} key={d.day + d.number}>
                      {d.day}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-xs md:text-base  text-emerald-500">Start time</label>
                <select
                  className="border p-1 focus:border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.recurring.${index}.startTime`, { valueAsNumber: true })}
                >
                  {HOURS.map((h) => (
                    <option key={h} value={h}>
                      {`${h}:00`}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label className="mb-1 text-xs md:text-base  text-emerald-500">End time</label>
                <select
                  className="border p-1 focus:border focus:outline-none rounded-md border-gray-200 focus:border-emerald-500"
                  {...register(`availability.recurring.${index}.endTime`, { valueAsNumber: true })}
                >
                  {HOURS.map((h) => (
                    <option key={h} value={h}>
                      {`${h}:00`}
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

        {recurring && recurring.length !== 0 && <SelectedDatesTable dates={recurring} remove={remove} />}
      </div>
    </div>
  );
};

export default RecurringAvailability;
