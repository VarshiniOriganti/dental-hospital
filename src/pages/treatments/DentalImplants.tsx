import React from 'react';
import Layout from '../../components/Layout';
import PageHero from '../../components/PageHero';
import { dentalImplantsMetadata, type Metadata } from './dental-implants-metadata';

export const metadata: Metadata = dentalImplantsMetadata;

const DentalImplants: React.FC = () => {
  return (
    <Layout>
      <PageHero 
        title="Dental Implants"
        subtitle="Restore your smile with our advanced dental implant solutions."
        className="bg-gradient-to-r from-blue-600 to-blue-800"
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">What are Dental Implants?</h2>
          <p className="mb-6 text-lg">
            Dental implants are a permanent solution for missing teeth, providing a natural look and feel. 
            They are designed to fuse with bone, offering a strong foundation for fixed or removable 
            replacement teeth.
          </p>
          
          <h3 className="text-2xl font-semibold mb-4 mt-8">Benefits of Dental Implants</h3>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Improved appearance and self-confidence</li>
            <li>Enhanced comfort and speech</li>
            <li>Easier eating</li>
            <li>Improved oral health</li>
            <li>Durability and convenience</li>
          </ul>

          <h3 className="text-2xl font-semibold mb-4">The Procedure</h3>
          <p className="mb-6">
            The dental implant procedure is typically completed in multiple stages over several months. 
            Our experienced dental team will guide you through each step of the process to ensure 
            the best possible results.
          </p>

          <div className="bg-blue-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3">Schedule a Consultation</h3>
            <p className="mb-4">
              Ready to restore your smile? Contact us today to schedule a consultation with our dental 
              implant specialists.
            </p>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Book an appointment for dental implants"
            >
              Book an Appointment
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default DentalImplants;
