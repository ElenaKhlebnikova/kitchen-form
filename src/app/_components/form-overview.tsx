import Image from 'next/image';

const FormOverview = () => {
  return (
    <div className="mb-9 mt-9 flex flex-col lg:flex-row-reverse lg:items-center">
      <div className="flex flex-col">
        <h1 className=" mb-4 text-center text-2xl font-bold">Create your kitchen</h1>
        <p className="text-center">
          Welcome to the first step of your hosting journey! We&apos;re excited for you to share your kitchen with
          cooking enthusiasts around the world. Fill in the details below to list your kitchen and start welcoming
          guests.
        </p>
      </div>
      <Image
        className="mx-auto"
        alt="People cooking in a kitchen"
        src="/assets/cooking-at-kitchen.jpg"
        width={400}
        height={333}
      />
    </div>
  );
};

export default FormOverview;
