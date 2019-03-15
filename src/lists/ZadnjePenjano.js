import React from 'react';
import UsponCard from '../cards/UsponCard';
import IMG1 from '../img/velebitas.jpg';
import IMG2 from '../img/grapa.jpg';

const usponi = [
    {
        id: 0,
        penjaci:['Dragutin Vdović', 'Nikola Derežić'],
        img: IMG1,
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Velebitaš',
            lokacijaSmjera:'Sjeverna stijena, Anića kuk, Velika Paklenica, Croatia',
            ocjenaSmjera:'6a+'
          }
    },
    {
        id: 1,
        penjaci:['Rene Lisac', 'Marin Šapit'],
        img: IMG2,
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Pripravniška grapa',
            ocjenaSmjera:'VI+ / M3',
            lokacijaSmjera:'Mala Mojstrovka, Julijske alpe, Slovenija',
        }
    }
];

export const ZadnjePenjano = () => usponi.map(uspon => <UsponCard uspon={uspon} key={uspon.id} />);