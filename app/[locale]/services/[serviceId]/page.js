import ServiceSingle from '@/components/Services/ServiceSingle';
import Breadcumb from '@/layouts/breadcumb';
import Layout from '@/layouts/layout';
import { getTranslations } from 'next-intl/server';

export const generateMetadata = async ({ params, locale }) => {
  const serviceId = +params?.serviceId;
  const s = await getTranslations('servicesPage');

  const currentService = s.raw('services').find((service) => service.id === serviceId);

  const t = await getTranslations(locale);

  // Retrieve dynamic title and description using the translator
  const metaTitle = t('servicesPage.meta.title', { title: currentService.title });
  const metaDescription = t('servicesPage.meta.description', { title: currentService.title });

  return {
    title: metaTitle,
    description: metaDescription,
  };
};

export default async function ServicePage({ params }) {
  const serviceId = +params?.serviceId;
  const t = await getTranslations('servicesPage');
  const currentService = t.raw('services').find((service) => service.id === serviceId);

  return (
    <Layout>
      <Breadcumb CurrentPage={currentService.title} />
      <ServiceSingle service={currentService} />
    </Layout>
  );
}