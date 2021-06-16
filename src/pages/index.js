import react, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

const HomePage = () => {
  const { t } = useTranslation(['common']);
  const { locale } = useRouter();
  console.log('locale', locale)
  const [temp, setTemp] = useState('first');
  setTimeout(() => setTemp('second'), 1500)
  return (
    <div>
      <div>Welcome to Next.js!</div>
      <div><Link href="/a">Go to Page A</Link></div>
      <div><Link href="/b">Go to Page B</Link></div>
    </div>
  );
};

export const getServerSideProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(req?.language || locale)),
  },
});

export default HomePage