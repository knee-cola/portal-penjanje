import KrckoSpitBull from '../img/usponi/krcko-spit-bull.jpg';
import SandaBridZaCekic from '../img/usponi/sanda-brid-za-cekic.jpg';
import Velebitas from '../img/usponi/velebitas.jpg';
import Grapa from '../img/usponi/grapa.jpg';

import SkicaVelebitas from '../img/smjerovi/paklenica-velebitas.jpg';
import SkicaSpitBull from '../img/smjerovi/paklenica-spit-bull.jpg';
import SkicaBridZaCekic from '../img/smjerovi/paklenica-velebitas.jpg';
import SkicaPripravniska from '../img/smjerovi/pripravniska-grapa.jpg';

import img0 from '../img//usponi/brid-za-veliki-cekic-0.jpg';
import img1 from '../img//usponi/brid-za-veliki-cekic-1.jpg';
import img2 from '../img//usponi/brid-za-veliki-cekic-2.jpg';
import img3 from '../img//usponi/brid-za-veliki-cekic-3.jpg';

import JimboAvatar from '../img/partneri/jimbo.jpg';
import KrckoAvatar from '../img/partneri/krcko.jpg';
import SandaAvatar from '../img/partneri/sanda.jpg';

export const penjaci = [
    { id: 0, ime: 'Dragutin', prezime: 'Vdović', nick:'krcko', avatar: KrckoAvatar },
    { id: 1, ime: 'Dražen', prezime:'Đimoti', nick:'jimbo', avatar: JimboAvatar },
    { id: 2, ime: 'Sanda', prezime:'Banović', nick:'banovec', avatar: SandaAvatar },
    { id: 3, ime: 'Ivan', prezime:'Padavić', nick:'pado', avatar: null },
    { id: 4, ime: 'Marin', prezime:'Šapit', nick:'sampita', avatar: null },
    { id: 5, ime: 'Rene', prezime:'Lisac', nick:'rene', avatar: null },
    { id: 6, ime: 'Nikola', prezime:'Derežić', nick:'knee-cola', avatar: null },
];

const slikeSIzleta = [
    { file: img0, cols: 3, title:'' },
    { file: img1, cols: 1, title:'' },
    { file: img2, cols: 1, title:'' },
    { file: img3, cols: 1, title:'' },
];

export const smjerovi = [
    {
        id:'velebitas',
        imeSmjera:'Velebitaš',
        lokacijaSmjera:'Croatia > Velika Paklenica > Anića kuk > Sjeverna stijena',
        ocjenaSmjera:'6a+',
        thumb: SkicaVelebitas,
    },
    {
        id:'spit-bull',
        imeSmjera:'Spit Bull',
        ocjenaSmjera:'5c',
        lokacijaSmjera:'Croatia > Velika Paklenica > Kuk od Nosoroga',
        thumb: SkicaSpitBull,
    },
    {
        id: 'brid-za-cekic',
        imeSmjera:'Brid za veliki čekić',
        ocjenaSmjera:'5b',
        lokacijaSmjera:'Croatia > Velika Paklenica > Kuk od gaćine',
        thumb: SkicaBridZaCekic,
    },
    {
        id: 'pripravniska-grapa',
        imeSmjera:'Pripravniška grapa',
        ocjenaSmjera:'VI+ / M3',
        lokacijaSmjera:'Slovenija > Julijske alpe > Mala Mojstrovka',
        thumb: SkicaPripravniska,
    },
];

export const usponi = [
    {
        id: 3,
        penjaci: penjaci.filter(({nick}) => (nick === 'rene' || nick === 'sampita')),
        titleImage: Grapa,
        images: slikeSIzleta,
        datumUspona:'23.03.2019.',
        smjer: smjerovi.find(({id}) => id === 'pripravniska-grapa'),
        napomena: 'Bilo je jako hladnoi, smrzla num se muda od smrzavice!',
    },
    {
        id: 1,
        penjaci: penjaci.filter(({nick}) => (nick === 'knee-cola' || nick === 'krcko' || nick === 'banovec')),
        titleImage: KrckoSpitBull,
        images: slikeSIzleta,
        datumUspona:'23.03.2019.',
        smjer: smjerovi.find(({id}) => id === 'spit-bull'),
        napomena: 'Smjer je puno lakši nego što smo očekivali...'
    },
    {
        id: 2,
        penjaci: penjaci.filter(({nick}) => (nick === 'knee-cola' || nick === 'banovec')),
        titleImage: SandaBridZaCekic,
        images: slikeSIzleta,
        datumUspona:'23.03.2019.',
        smjer: smjerovi.find(({id}) => id === 'brid-za-cekic'),
        napomena: 'Baš smo se nauživali straha u prečnici na početku Brida'
    },
    {
        id: 4,
        penjaci: penjaci.filter(({nick}) => (nick === 'knee-cola' || nick === 'krcko')),
        titleImage: Velebitas,
        images: slikeSIzleta,
        datumUspona:'23.03.2019.',
        smjer: smjerovi.find(({id}) => id === 'velebitas'),
        napomena: 'jebeš Velebitaša i Paklenicu - ljepše je penjati u dvorani',
    },
];

export const tipoviUspona = [
    { id:0, label: '-' },
    { id:9, label: 'kratki sportski smjer' },
    { id:2, label: 'dugački sportski smjer' },
    { id:1, label: 'alpinistički uspon u suhoj stijeni' },
    { id:4, label: 'alpinistički uspon u zimskim uvjetima' },
    { id:3, label: 'zimski alpnistički uspon' },
    { id:5, label: 'smrznuti slap' },
    { id:6, label: 'alpinistički skijaški spust' },
    { id:7, label: 'pristup na vrh' },
];

export const mjestoUNavezu = [
    { id:1, label:'sve kao prvi' },
    { id:2, label:'sve kao drugi' },
    { id:3, label:'naizmjenično' },
];

/**
 * Vraća polje svih uspona u kojima je zadana osoba sudjelovala
 * @param {*} myNick nick od osobe čije partnere tražimo
 */
export const mojiUsponi = myNick => usponi.filter(({penjaci}) => penjaci.find(({nick}) => nick===myNick) );

/**
 * Vraća popis partnera s kojima je zadana osoba penjala
 * @param {*} myNick nick od osobe čije partnere tražimo
 */
export const mojiPartneri = myNick => mojiUsponi(myNick)
        // kreiraj polje sa imenima svih partnera
        .flatMap(({penjaci}) => penjaci)
        // ukloni vlastiti zapis (koji se odnosi na samog sebe)
        .filter(({nick}) => nick !== myNick)
        // uklanjam duplikate (ako smo više puta zajedno penjali)
        .filter((item, pos, self) => self.indexOf(item) === pos);

export const usponByID = usponID => usponi.find(el => el.id === usponID);

export const tipoviSmjera = [
    {id:0, name:'kratki sportski'},
    {id:1, name:'dugi sportski'},
    {id:2, name: 'dugi alpinistički'},
    {id:3, name: 'zaleđeni slap'},
    {id:4, name: 'grapa'},
];

export const ocjene = {
    ljetne: [
        { id: 0, french:'1', uiaa:'I' },
        { id: 1, french:'2', uiaa:'II' },
        { id: 2, french:'3', uiaa:'III' },
        { id: 3, french:'4a', uiaa:'IV' },
        { id: 4, french:'4b', uiaa:'IV+' },
        { id: 5, french:'4c', uiaa:'V' },
        { id: 6, french:'5a', uiaa:'V+' },
        { id: 7, french:'5b', uiaa:'VI-' },
        { id: 8, french:'5c', uiaa:'VI' },
        { id: 9, french:'6a', uiaa:'VI+' },
        { id: 10, french:'6a+', uiaa:'VII-' },
        { id: 11, french:'6b', uiaa:'VII' },
        { id: 12, french:'6b+', uiaa:'VII+' },
        { id: 13, french:'6c', uiaa:'VIII-' },
        { id: 14, french:'6c+', uiaa:'VIII' },
        { id: 15, french:'7a', uiaa:'VIII+' },
        { id: 16, french:'7a+', uiaa:'IX-' },
        { id: 17, french:'7b', uiaa:'IX-' },
        { id: 18, french:'7b+', uiaa:'IX' },
        { id: 19, french:'7c', uiaa:'IX' },
        { id: 20, french:'7c+', uiaa:'IX+' },
        { id: 21, french:'8a', uiaa:'IX+' },
        { id: 22, french:'8a+', uiaa:'X-' },
        { id: 23, french:'8b', uiaa:'X' },
        { id: 24, french:'8b+', uiaa:'X+' },
        { id: 25, french:'8c', uiaa:'X+' },
        { id: 26, french:'8c+', uiaa:'XI-' },
        { id: 27, french:'9a', uiaa:'XI' },
        { id: 28, french:'9a+', uiaa:'XI+' },
        { id: 29, french:'9b', uiaa:'XII-' },
        { id: 30, french:'9b+', uiaa:'XII' },
        { id: 31, french:'9c', uiaa:'XII+' },
    ],
    tehnicke: [
        {id: 0, name:'A0'},
        {id: 1, name:'A1'},
        {id: 2, name:'A2'},
        {id: 3, name:'A2+'},
        {id: 4, name:'A3'},
        {id: 5, name:'A3+'},
        {id: 6, name:'A4'},
        {id: 7, name:'A4+'},
        {id: 8, name:'A5'},
        {id: 9, name:'A6'},
    ],
    mix: [
        {id: 0, name:'M1'},
        {id: 1, name:'M2'},
        {id: 2, name:'M3'},
        {id: 3, name:'M4'},
        {id: 4, name:'M5'},
        {id: 5, name:'M6'},
        {id: 6, name:'M7'},
        {id: 7, name:'M8'},
        {id: 8, name:'M9'},
        {id: 9, name:'M10'},
        {id: 0, name:'M11'},
        {id: 1, name:'M12'},
    ],
    led: [
        {id: 0, name:'WI1'},
        {id: 1, name:'WI2'},
        {id: 2, name:'WI3'},
        {id: 3, name:'WI4'},
        {id: 4, name:'WI5'},
        {id: 5, name:'WI6'},
        {id: 6, name:'WI7'},
        {id: 7, name:'WI8'},
    ]
};