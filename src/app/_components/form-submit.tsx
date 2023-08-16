import type { Control, UseFormRegister } from 'react-hook-form';
import type { TFormFields } from '../_types';

import Link from 'next/link';
import { useWatch } from 'react-hook-form';

const FormSubmit = ({
  register,
  control,
}: {
  register: UseFormRegister<TFormFields>;
  control: Control<TFormFields>;
}) => {
  const [policies] = useWatch({ control, name: ['policies'] });

  const isSubmitButtonDisabled = !(policies.cancel && policies.terms && policies.safety);
  return (
    <div>
      <div className="mt-14">
        <p className="mb-5 font-semibold text-sm">
          Before you can publish your kitchen listing, please make sure you to fully read and understand our policies
        </p>

        <div>
          <label htmlFor="terms" className="text-sm cursor-pointer">
            <input
              id="terms"
              type="checkbox"
              {...register('policies.terms')}
              className="my-1 mr-2 rounded-md border  p-2 text-sm hover:cursor-pointer"
            />
            I read and understand the{' '}
            <Link target="_blank" href="/policies/terms-of-service-and-use" className="text-emerald-500">
              Terms of service and use
            </Link>
          </label>
        </div>
        <div>
          <label id="safety" className="text-sm cursor-pointer">
            <input
              {...register('policies.safety')}
              id="safety"
              type="checkbox"
              className="my-1 mr-2 rounded-md border  p-2 text-sm hover:cursor-pointer "
            />
            I read and understand the{' '}
            <Link target="_blank" href="/policies/safety-and-cleanliness-policy" className="text-emerald-500">
              Safety & Cleanliness Guidelines
            </Link>
          </label>
        </div>
        <div>
          <label htmlFor="cancel" className="text-sm cursor-pointer">
            <input
              id="cancel"
              type="checkbox"
              {...register('policies.cancel')}
              className="my-1 mr-2 rounded-md border  p-2 text-sm hover:cursor-pointer "
            />
            I read and understand the{' '}
            <Link target="_blank" href="/policies/cancellation-policy" className="text-emerald-500">
              Cancellation policy
            </Link>
          </label>
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <button className="rounded-lg px-4 py-2 font-semibold text-emerald-500 transition-all hover:bg-emerald-100 ">
          Save & exit
        </button>
        <button
          disabled={isSubmitButtonDisabled}
          type="submit"
          className={`mx-4 rounded-lg ${
            isSubmitButtonDisabled
              ? 'bg-gray-400 cursor-not-allowed'
              : ' bg-emerald-500  hover:bg-emerald-700 cursor-pointer'
          } px-6 py-2 text-white  transition-all`}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default FormSubmit;
