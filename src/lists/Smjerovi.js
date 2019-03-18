import React, { Fragment } from 'react';
import SmjerCard from '../cards/SmjerCard';
import { smjerovi } from '../data-store/DataStore';
import AddButton from '../components/AddButton';

export const Smjerovi = ({history}) =>
<Fragment>
    { smjerovi.map(smjer => <SmjerCard key={smjer.id} smjer={smjer} />) }
    <AddButton history={history} />
</Fragment>;