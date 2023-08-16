import type { Control, UseFormClearErrors, UseFormRegister, UseFormSetError, UseFormSetValue } from 'react-hook-form';
import type { Photo, TFormFields } from '../_types';
import type { MouseEvent } from 'react';

import { CldImage, CldUploadWidget, CldUploadWidgetPropsOptions } from 'next-cloudinary';
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tooltip from './tooltip';
import { useEffect } from 'react';
import { useWatch } from 'react-hook-form';


interface Result {
  info: {
    secure_url: string;
    public_id: string;
  };
}

const options = {
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
} as CldUploadWidgetPropsOptions;




const Photos = ({
  register,
  setError,
  clearErrors,
  errorMessage,
  setValue,
  control,
  isSubmitted,
}: {
  register: UseFormRegister<TFormFields>;
  setError: UseFormSetError<TFormFields>;
  clearErrors: UseFormClearErrors<TFormFields>;
  errorMessage?: string;
  setValue: UseFormSetValue<TFormFields>;
  control: Control<TFormFields>;
  isSubmitted: boolean;
}) => {
  const [photos] = useWatch({ control, name: ['photos'] });

  useEffect(() => {
    if (isSubmitted && photos.length === 0) {
      setError('photos', { type: 'required', message: 'This field is required' });
    }

    if (photos.length > 0 && photos.length < 9) {
      clearErrors('photos');
    }
  }, [photos, clearErrors, setError, isSubmitted]);

  const handleUploadPhoto = (result: Result) => {
    const newPhotosUrls = [...photos];
    newPhotosUrls.push({ secure_url: result?.info.secure_url, photo_id: result?.info.public_id });

    setValue('photos', newPhotosUrls);
  };

  const handleDeletePhoto = async (photo: Photo) => {
    try {
      await fetch(`/api/photos/${photo.photo_id}`, { method: 'DELETE' });

      setValue(
        'photos',
        photos.filter((pic) => pic.photo_id !== photo.photo_id)
      );
    } catch (error) {
      console.error(error);
    }
  };

  const setMainPhoto = (photo: Photo) => {
    const newPhotosUrls = [...photos];
    const filteredArr = newPhotosUrls.filter((p) => p.secure_url !== photo.secure_url);

    filteredArr.unshift(photo);

    setValue('photos', filteredArr);
  };

  return (
    <div className="mb-12 flex flex-col">
      <label htmlFor="photos" className="mb-1 text-lg font-bold">
        Photos
      </label>
      <div className="flex flex-col">
        <span className="text-sm">
          Upload high-quality, well-lit photos that showcase your kitchen from multiple angles. Don&apos;t forget to
          include photos of unique features or appliances.
        </span>

        <CldUploadWidget
          uploadPreset={process.env.CLOUDINARY_UPLOAD_PRESET}
          signatureEndpoint="/api/photos"
          options={options}
          onUpload={handleUploadPhoto}
        >
          {({ open }) => {
            return (
              <button
                className="bg-emerald-500 text-white rounded-md px-2 mt-5 w-36 mb-2 py-1"
                onClick={(event: MouseEvent) => {
                  event.preventDefault();
                  open();
                }}
              >
                Upload images
              </button>
            );
          }}
        </CldUploadWidget>
        <div className="flex flex-wrap mt-2">
          {photos.map((photo, index) => {
            return (
              <div key={photo.secure_url}>
                <input
                  {...register(`photos.${index}`, {
                    validate: (value, formValues) => {
                      if (formValues.photos.length === 0) return 'This field is required';
                      else if (formValues.photos.length > 9) return 'The maximum number of photosUrls is 9';
                    },
                  })}
                  value={photo.secure_url}
                  className="hidden"
                />
                <div className="w-32 mr-3 mb-3 relative">
                  <CldImage
                    width="600"
                    height="400"
                    src={photo.secure_url}
                    alt="Picture of the kitchen"
                    className="shadow-sm rounded-md border"
                  />
                  <div className="opacity-0 hover:bg-opacity-75 hover:opacity-100 z-10  bg-emerald-500 w-full h-full cursor-pointer transition-all rounded-md absolute top-0 left-0">
                    <div className="flex justify-end  m-1">
                      <div>
                        <Tooltip text="Set as the main picture">
                          <button
                            onClick={(event: MouseEvent) => {
                              event.preventDefault();
                              setMainPhoto(photo);
                            }}
                          >
                            {/* setting style to display which picture is the main image */}
                            <FontAwesomeIcon
                              className={`h-4 w-4 mr-1 ${
                                index === 0
                                  ? 'text-yellow-400 hover:text-yellow-600'
                                  : 'text-white  hover:text-gray-300'
                              }`}
                              icon={faStar}
                            />
                          </button>
                        </Tooltip>
                      </div>
                      <div>
                        <button
                          onClick={(event: MouseEvent) => {
                            event.preventDefault();
                            handleDeletePhoto(photo);
                          }}
                        >
                          <FontAwesomeIcon className="h-4 w-4 text-white z-10  hover:text-gray-300" icon={faTrash} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        <span className="mt-3 text-xs">Limited at 9 photos</span>
      </div>
    </div>
  );
};

export default Photos;
