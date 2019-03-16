import React from 'react';
import SmjerCard from '../cards/SmjerCard';
import { smjerovi } from '../data-store/DataStore';

export const Smjerovi = () => smjerovi.map(smjer => <SmjerCard key={smjer.id} smjer={smjer} />);