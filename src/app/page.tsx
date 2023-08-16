import FormOverview from './_components/form-overview';
import KitchenCreateForm from './_components/kitchen-create-form';

export const metadata = {
  title: 'Manage your kitchen | Dine Spree',
  description:
    'Kitchens Without Borders: Journey through kitchens, cultures, and cuisines as you curate your own unique dining experiences with our innovative platform.',
};

const Managekitchen = () => {
  return (
    <div className="my-12 mx-10 lg:mx-24 text-gray-700">
      <FormOverview />
      <KitchenCreateForm />
      <p className="text-xs text-gray-500">
        {' '}
        *
        <a href="https://www.freepik.com/free-vector/hand-drawn-family-sitting-around-table-background_4335601.htm#query=people%20eating&position=33&from_view=search&track=ais">
          Image by pikisuperstar
        </a>{' '}
        on Freepik
      </p>
    </div>
  );
};

export default Managekitchen;
