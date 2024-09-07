import ServiceSingle from '@/components/Services/ServiceSingle';
import Breadcumb from '@/layouts/breadcumb';
import Layout from '@/layouts/layout';
import { services } from '@/constants/data';

export const generateMetadata = ({ params }) => {
  const serviceId = +params?.serviceId;
  const currentService = services.find((service) => service.id === serviceId);

  return {
    title: `${currentService.title} - Ծառայության Էջ`,
    description: `Ճանաչեք ավելին ${currentService.title} ծառայության մասին և ինչպես ենք մենք ապահովում որակ, հուսալիություն և անվտանգություն։`,
  };
};
export default function page({ params }) {
  const serviceId = +params?.serviceId;
  const currentService = services.find((service) => service.id === serviceId);
  return (
    <Layout>
      <Breadcumb CurrentPage={currentService.title} />
      <ServiceSingle service={currentService} />
    </Layout>
  );
}