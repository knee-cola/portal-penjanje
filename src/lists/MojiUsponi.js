import React from 'react';

import KrckoSpitBull from '../img/usponi/krcko-spit-bull.jpg';
import SandaBridZaCekic from '../img/usponi/sanda-brid-za-cekic.jpg';
import img0 from '../img//usponi/brid-za-veliki-cekic-0.jpg';
import img1 from '../img//usponi/brid-za-veliki-cekic-1.jpg';
import img2 from '../img//usponi/brid-za-veliki-cekic-2.jpg';
import img3 from '../img//usponi/brid-za-veliki-cekic-3.jpg';
import UsponCard from '../cards/UsponCard';

const usponi = [
    {
        id: 1,
        penjaci:[
            { ime:'Dragutin Vdović', nick:'krcko' },
            { ime: 'Nikola Derežić', nick:'knee-cola' }
        ],
        titleImage: KrckoSpitBull,
        images: [
            { file: img0, cols: 3, title:'' },
            { file: img1, cols: 1, title:'' },
            { file: img2, cols: 1, title:'' },
            { file: img3, cols: 1, title:'' },
        ],
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Spit bull',
            lokacijaSmjera:'Kuk od nosoroga, Velika Paklenica, Croatia',
            ocjenaSmjera:'5c'
        },
        napomena: 'Smjer je puno lakši nego što smo očekivali...'
    },
    {
        id: 2,
        penjaci:[
            { ime:'Sanda Banović', nick:'banovec' },
            { ime: 'Nikola Derežić', nick:'knee-cola' }
        ],
        titleImage: SandaBridZaCekic,
        images: [
            { file: img0, cols: 3, title:'' },
            { file: img1, cols: 1, title:'' },
            { file: img2, cols: 1, title:'' },
            { file: img3, cols: 1, title:'' },
        ],
        datumUspona:'23.03.2019.',
        smjer:{
            imeSmjera:'Brid za veliki čekić',
            ocjenaSmjera:'5b',
            lokacijaSmjera:'Kuk od gaćina, Velika Paklenica, Croatia',
        },
        napomena: 'Baš smo se nauživali straha u prečnici na početku Brida'
    }
];

export const MojiUsponi = () => usponi.map(uspon => <UsponCard key={uspon.id} uspon={uspon} />);