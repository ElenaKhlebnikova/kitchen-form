import type { NonRecurringDate, RecurringDate } from '../_types';

import { DAYS } from '../_constants';

const isRecurringDate = (date: RecurringDate | NonRecurringDate): date is RecurringDate => {
  return (date as RecurringDate).dayOfWeek !== undefined;
};

const SelectedDatesTable = ({
  dates,
  remove,
}: {
  dates: (RecurringDate | NonRecurringDate)[];
  remove: (index: number) => void;
}) => {
  const getDate = (dates: RecurringDate | NonRecurringDate): string => {
    const dayOfWeek = (dates as RecurringDate)?.dayOfWeek;

    if (dayOfWeek !== undefined) {
      return DAYS.find((day) => day.number === dayOfWeek)?.day || 'Mon';
    }

    const date = (dates as NonRecurringDate)?.date;

    if (date instanceof Date) {
      return date.toISOString().substring(0, 10);
    }

    return '';
  };

  return (
    <div className="mb-10 mt-5 md:w-2/4 w-full text-xs">
      <p className="text-sm md:text-base mb-2 font-extrabold">Selected availablity</p>
      <table className="w-full">
        <tbody className=" items-stretch">
          <tr className="grid grid-cols-4 bg-emerald-500  justify-items-start text-white">
            <th>{isRecurringDate(dates[0]) ? 'Day' : 'Date'}</th>
            <th>Start</th>
            <th>End</th>
            <th></th>
          </tr>
          {dates.map((date, index) => (
            <tr
              key={isRecurringDate(date) ? `${index}-${date.dayOfWeek}` : `${index}-${(date as NonRecurringDate).date}`}
              className="grid grid-cols-4 py-1  odd:bg-emerald-100"
            >
              <td>{getDate(date)}</td>
              <td>{date.startTime}:00</td>
              <td>{date.endTime}:00</td>
              <td className="justify-self-center">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    remove(index);
                  }}
                  className="text-emerald-500   ml-1 align-bottom  font-semibold"
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedDatesTable;
