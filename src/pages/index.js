import React from 'react';
import Header from '../components/Header';
import ContentSection from '../components/ContentSection';
import { QueryClient, QueryClientProvider } from 'react-query';


const queryClient = new QueryClient();

const Home = () => (
  <>
  <QueryClientProvider client={queryClient}>
    <div className='containerHome'>
      <Header />
      <ContentSection />
      <div className='foot-note'>
            Note: Earn Alliance and its subsidiaries are not affiliated with
            Axie Infinity.
          </div>
    </div>
    </QueryClientProvider>
  </>
);
export default Home;