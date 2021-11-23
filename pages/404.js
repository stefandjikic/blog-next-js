import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

const NotFoundPage = () => {
  return (
    <Layout title="Page not found">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-5xl font-bold mb-2">404</h1>
        <h2 className="text-3xl text-gray-600">Page not found</h2>
      </div>
    </Layout>
  )
}

export default NotFoundPage
