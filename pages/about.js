import React from 'react'
import Layout from '../components/Layout'

const AboutPage = () => {
  return (
    <Layout title="About author | Stefan Djikic">
      <h1 className="text-3xl border-b-2 pb-4">About Me</h1>
      <div className="bg-white shadow border-rounded p-4 mt-10">
        <h2 className="text-xl mb-4">Stefan Blog</h2>
        <p className="mb-2">Hi! My name is Stefan Đikić and I am frontend developer.</p>
        <p><span className="text-gray-400">Version 1.0.0</span></p>
      </div>
    </Layout>
  )
}

export default AboutPage;
