import React from 'react';
import UsponCard from '../cards/UsponCard';
import { mojiUsponi } from '../data-store/DataStore';

export const MojiUsponi = () => mojiUsponi('knee-cola').map(uspon => <UsponCard key={uspon.id} uspon={uspon} />);