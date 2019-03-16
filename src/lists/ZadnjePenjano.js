import React from 'react';
import UsponCard from '../cards/UsponCard';
import { usponi } from '../data-store/DataStore';

export const ZadnjePenjano = () => usponi.map(uspon => <UsponCard uspon={uspon} key={uspon.id} />);