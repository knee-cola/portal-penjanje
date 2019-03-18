import React, { Fragment } from 'react';
import UsponCard from '../cards/UsponCard';
import { mojiUsponi } from '../data-store/DataStore';
import AddButton from '../components/AddButton';
import { Paper } from '@material-ui/core';


export const MojiUsponi = props => 
<Paper>
    { mojiUsponi('knee-cola').map(uspon => <UsponCard key={uspon.id} uspon={uspon} {...props} />) }
    <AddButton history={props.history} />
</Paper>;