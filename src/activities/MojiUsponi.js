import React from 'react';
import MojUsponCard from '../components/cards/MojUsponCard';

import KrckoSpitBull from '../img/usponi/krcko-spit-bull.jpg';
import SandaBridZaCekic from '../img/usponi/sanda-brid-za-cekic.jpg';

const usponi = [
    {
        penjaci:['Dragutin Vdović', 'Nikola Derežić'],
        img: KrckoSpitBull,
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Spit bull',
            lokacijaSmjera:'Kuk od nosoroga, Velika Paklenica, Croatia',
            ocjenaSmjera:'5c'
          }
    },
    {
        penjaci:['Sanda Banović', 'Nikola Derežić'],
        img: SandaBridZaCekic,
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Brid za veliki čekić',
            ocjenaSmjera:'5b',
            lokacijaSmjera:'Kuk od gaćina, Velika Paklenica, Croatia',
        }
    }
];

export const MojiUsponi = () => usponi.map(uspon => <MojUsponCard uspon={uspon} />);