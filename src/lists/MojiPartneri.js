import React from 'react';
import PartnerCard from '../cards/PartnerCard';
import JimboAvatar from '../img/partneri/jimbo.jpg';
import KrckoAvatar from '../img/partneri/krcko.jpg';
import SandaAvatar from '../img/partneri/sanda.jpg';

const partneri = [
    { id: 0, ime: 'Dragutin', prezime: 'Vdović', nick:'krcko', avatar: KrckoAvatar },
    { id: 1, ime: 'Dražen', prezime:'Đimoti', nick:'jimbo', avatar: JimboAvatar },
    { id: 2, ime: 'Sanda', prezime:'Banović', nick:'banovec', avatar: SandaAvatar },
    { id: 3, ime: 'Ivan', prezime:'Padavić', nick:'pado', avatar: null }
];

export const MojiPartneri = () => partneri.map(partner => <PartnerCard partner={partner} key={partner.id} />);