import type { Control, UseFormClearErrors, UseFormRegister, UseFormSetError } from 'react-hook-form';
import type { TFormFields } from '../_types';

import NonRecurringAvailability from './availability-non-recurring';
import RecurringAvailability from './availability-recurring';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';

const Availability = ({
  register,
  setError,
  clearErrors,
  errorMessage,
  control,
  isSubmitted,
}: {
  register: UseFormRegister<TFormFields>;
  setError: UseFormSetError<TFormFields>;
  clearErrors: UseFormClearErrors<TFormFields>;
  errorMessage?: string;
  control: Control<TFormFields>;
  isSubmitted: boolean;
}) => {
  const [recurring, nonRecurring] = useWatch({
    control,
    name: ['availability.recurring', 'availability.nonRecurring'],
  });

  useEffect(() => {
    if (isSubmitted && (recurring.length === 0 || nonRecurring.length === 0)) {
      setError('availability', { type: 'required', message: 'This field is required' });
    }

    if (recurring.length > 0 || nonRecurring.length > 0) {
      clearErrors('availability');
    }
  }, [clearErrors, setError, isSubmitted, nonRecurring, recurring]);

  return (
    <>
      <h3 className="mb-2 text-lg font-bold">Kitchen Availability</h3>
      <p className="mb-2 text-sm">You can select recurring and non recurring availability for your kitchen.</p>
      <div className="mt-2 w-full md:w-2/3">
        <RecurringAvailability recurring={recurring} register={register} control={control} />
        <hr className="mb-3" />
        <NonRecurringAvailability register={register} control={control} nonRecurring={nonRecurring} />
      </div>

      <p className="mt-1 text-sm text-red-500">{errorMessage && errorMessage}</p>
    </>
  );
};

export default Availability;
