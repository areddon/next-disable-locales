import React, { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';
import Link from 'next/link';

const PageA = () => {
  const { t } = useTranslation(['common']);
  const { locale } = useRouter();
  console.log('locale', locale)
  return (
    <div>
      <div>`Welcome to Next.js! - Page A`</div>
      <div><Link href="/">Go to Home</Link></div>
      <div><Link href="/b">Go to Page B</Link></div>
    </div>
  );
};

export const getServerSideProps = async ({ locale, req }) => ({
  props: {
    ...(await serverSideTranslations(req?.language || locale)),
  },
});

export default PageA;