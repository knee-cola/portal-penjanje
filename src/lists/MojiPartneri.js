import React from 'react';
import PartnerCard from '../cards/PartnerCard';
import { mojiPartneri } from '../data-store/DataStore';
import AddButton from '../components/AddButton';
import { List } from '@material-ui/core';

export const MojiPartneri = ({history}) =>
<List>
    { mojiPartneri('knee-cola').map(partner => <PartnerCard partner={partner} key={partner.nick} />) }
    <AddButton history={history} />
</List>;