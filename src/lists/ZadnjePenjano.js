import React, { Fragment } from 'react';
import UsponCard from '../cards/UsponCard';
import { usponi } from '../data-store/DataStore';
import AddButton from '../components/AddButton';

export const ZadnjePenjano = () => 
<Fragment>
    { usponi.map(uspon => <UsponCard uspon={uspon} key={uspon.id} />) }
    <AddButton />
</Fragment>;