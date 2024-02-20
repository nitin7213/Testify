import React from 'react';
import PriceCard from './PriceCard';

function PriceChart() {
  return (
    <div className='container mx-auto'>
      <div className='-mx-4 flex flex-wrap'>
        <div className='w-full px-4'>
          <div className='mx-auto mb-[60px] max-w-[510px] text-center'>
            <span className='mb-2 block text-3xl font-semibold text-primary'>
              Our Pricing Plan
            </span>

            <p className='text-base text-body-color dark:text-dark-6'>
              There are many variations of passages of Lorem Ipsum available but
              the majority have suffered alteration in some form.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <PriceCard
          plan='Personal'
          price='$59'
          duration='year'
          description='Perfect for using in a personal website or a client project.'
          features={[
            '1 User',
            'All UI components',
            'Lifetime access',
            'Free updates',
            'Use on 1 (one) project',
            '3 Months support',
          ]}
        />
      </div>
    </div>
  );
}

export default PriceChart;
