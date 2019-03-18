import React, { Fragment } from 'react';
import PartnerCard from '../cards/PartnerCard';
import { mojiPartneri } from '../data-store/DataStore';
import AddButton from '../components/AddButton';

export const MojiPartneri = ({history}) =>
<Fragment>
    { mojiPartneri('knee-cola').map(partner => <PartnerCard partner={partner} key={partner.nick} />) }
    <AddButton history={history} />
</Fragment>;