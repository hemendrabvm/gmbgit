import React, { useState, useEffect } from 'react';
import axios from 'axios';

const QuoteSection = () => {
  const [quoteData, setQuoteData] = useState(null);

  useEffect(() => {
    const fetchQuoteData = async () => {
      try {
        const response = await axios.get('https://bvmwebsolutions.com/ghoombuddy_laravel/api/quote');
        setQuoteData(response.data.quote);
      } catch (error) {
        console.error('Error fetching quote data:', error);
      }
    };

    fetchQuoteData();
  }, []);

  return (
    <section id="" className="quote-section pt-spc">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mr-auto">
            <h2 className="">
              {quoteData?.quote}
            </h2>
            <p className="auther-n">
              {quoteData?.name}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
