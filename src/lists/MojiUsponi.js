import React, { Fragment } from 'react';
import UsponCard from '../cards/UsponCard';
import { mojiUsponi } from '../data-store/DataStore';
import AddButton from '../components/AddButton';

export const MojiUsponi = () =>
<Fragment>
    { mojiUsponi('knee-cola').map(uspon => <UsponCard key={uspon.id} uspon={uspon} />) }
    <AddButton />
</Fragment>;