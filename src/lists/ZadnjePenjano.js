import React, { Fragment } from 'react';
import UsponCard from '../cards/UsponCard';
import { usponi } from '../data-store/DataStore';
import AddButton from '../components/AddButton';

export const ZadnjePenjano = props => 
<Fragment>
    { usponi.map(uspon => <UsponCard uspon={uspon} key={uspon.id} {...props} />) }
    <AddButton history={props.history} />
</Fragment>;