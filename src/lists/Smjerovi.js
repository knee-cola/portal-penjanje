import React from 'react';
import SmjerCard from '../components/cards/SmjerCard';
import PaklenicaBrahm from '../img/smjerovi/paklenica-brahm.jpg';
import PaklenicaNosorog from '../img/smjerovi/paklenica-nosorog.jpg';

const smjerovi = [
    {
        imeSmjera:'Velebitaš',
        lokacijaSmjera:'Sjeverna stijena, Anića kuk, Velika Paklenica, Croatia',
        ocjenaSmjera:'6a+',
        thumb: PaklenicaBrahm,
    },
    {
        imeSmjera:'Spit Bull',
        ocjenaSmjera:'5c',
        lokacijaSmjera:'Kuk od Nosoroga, Velika Paklenica, Croatia',
        thumb: PaklenicaNosorog,
    }
];

export const Smjerovi = () => smjerovi.map(smjer => <SmjerCard smjer={smjer} />);