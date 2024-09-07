'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export const metadata = {
  title: 'Տ-Քնսթրաքշն» ՓԲԸ - Էջը չի գտնվել',
};

export default function notFound() {
  const router = useRouter();

  useEffect(() => {
    router.push('/');
  }, []);

  return null;
}