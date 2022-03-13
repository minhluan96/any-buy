import React from 'react';
import Layout from '../../components/Layout';

export default function Home() {
  return (
    <Layout>
      <h1 className='font-bold text-2xl text-gray-700'>Dashboard</h1>
      <div className='flex flex-col flex-grow border-4 border-gray-400 border-dashed bg-white rounded mt-4'></div>
    </Layout>
  );
}
