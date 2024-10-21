import React from 'react';
import PageHero from '../components/PageHero';
import Services from '../components/Services';
import AnimatedSection from '../components/AnimatedSection';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-light-gray">
      <PageHero 
        title="Our Services" 
        subtitle="Comprehensive Transaction Coordination for Real Estate Professionals"
        backgroundImage="https://images.unsplash.com/photo-1560518883-b414b19b183d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        overlay={true}
      />
      
      <Services />
      
      <AnimatedSection className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Services?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Experience and Expertise</h3>
              <p className="mb-4">
                With over 30 years in the real estate industry, we bring unparalleled knowledge and skills to every transaction. Our deep understanding of the Pocono Mountains market ensures smooth and efficient coordination tailored to local needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Personalized Approach</h3>
              <p className="mb-4">
                We understand that each transaction is unique. Our services are customized to meet the specific needs of each client, ensuring that you receive the support that best fits your business model and goals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Time and Cost Efficiency</h3>
              <p className="mb-4">
                By handling the intricate details of your transactions, we free up your time to focus on client relationships and growing your business. Our services often pay for themselves through increased productivity and reduced errors.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Peace of Mind</h3>
              <p className="mb-4">
                With our meticulous attention to detail and commitment to excellence, you can rest assured that your transactions are in capable hands. We stay up-to-date with the latest regulations and best practices to ensure compliance and smooth closings.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>
      
      <AnimatedSection className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Streamline Your Transactions?</h2>
          <p className="text-xl mb-8">
            Let us handle the details while you focus on growing your business. Contact us today to learn how our transaction coordination services can benefit you.
          </p>
          <Link to="/contact" className="btn bg-white text-primary hover:bg-gray-100 inline-flex items-center">
            Get Started <ArrowRight className="ml-2" />
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default ServicesPage;