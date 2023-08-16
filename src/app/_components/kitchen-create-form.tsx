'use client';

import type { TFormFields } from '../_types';

import { handleAvailability, handleFeatures, handleLanguages, handlePrice, handleRules } from '../_utils';
import Availability from './availability';
import Description from './description';
import Features from './features';
import FormSubmit from './form-submit';
import Languages from './languages';
import Location from './location';
import Photos from './photos';
import Price from './price';
import Rules from './rules';
import Size from './size';
import Title from './title';
import { useForm } from 'react-hook-form';

const KitchenCreateForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    control,
    setError,
    formState: { errors, isSubmitted },
  } = useForm<TFormFields>({
    defaultValues: {
      title: '',
      description: '',
      features: [],
      location: '',
      rules: [],
      size: 3,
      policies: {
        terms: false,
        safety: false,
        cancel: false,
      },
      languages: [],
      photos: [],
      availability: {
        nonRecurring: [],
        recurring: [],
      },
    },
  });

  const onSubmit = async (data: TFormFields) => {
    console.log({
      errors,
      data,
      rules: handleRules(data),
      features: handleFeatures(data),
      languages: handleLanguages(data),
      price: handlePrice(data),
    });

 

  
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <Title register={register} errorMessage={errors.title?.message} />
        <Description register={register} errorMessage={errors.description?.message} />
      </div>

      <Price register={register} errorMessage={errors.price?.message} />

      <Location register={register} setValue={setValue} errorMessage={errors.location?.message} />
      <Rules register={register} control={control} />
      <Features register={register} control={control} />
      <Languages
        clearErrors={clearErrors}
        register={register}
        setValue={setValue}
        control={control}
        errorMessage={errors.languages && errors.languages[0]?.message}
      />
      <Size register={register} errorMessage={errors.size?.message} />
      <Photos
        register={register}
        setValue={setValue}
        errorMessage={errors.photos?.message}
        clearErrors={clearErrors}
        setError={setError}
        control={control}
        isSubmitted={isSubmitted}
      />
      <Availability
        clearErrors={clearErrors}
        register={register}
        errorMessage={errors.availability?.message}
        control={control}
        isSubmitted={isSubmitted}
        setError={setError}
      />
      <FormSubmit register={register} control={control} />
    </form>
  );
};

export default KitchenCreateForm;
