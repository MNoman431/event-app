import React from 'react';
import Bannar from '../client/pages/Bannar';
import WhyChooseUs from '../client/pages/WhyChooseUs';
import ExploreOurVendors from '../client/pages/ExploreOurVendors';
import MostSearchedVendors from '../client/pages/MostSearchedVendors';
import VoiceClients from '../client/pages/VoiceClients';


const ClientRouting = () => {

  return (
    <>
      <Bannar />
      <WhyChooseUs />
      <ExploreOurVendors />
      <MostSearchedVendors />
      <VoiceClients />
    </>
  );
};

export default ClientRouting;
