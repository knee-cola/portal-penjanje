import React from 'react';
import PartnerCard from '../cards/PartnerCard';
import { mojiPartneri } from '../data-store/DataStore';


export const MojiPartneri = () => mojiPartneri('knee-cola').map(partner => <PartnerCard partner={partner} key={partner.nick} />);