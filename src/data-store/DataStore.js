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
        lokacijaSmjera:'Sjeverna stijena, Anića kuk, Velika Paklenica, Croatia',
        ocjenaSmjera:'6a+',
        thumb: SkicaVelebitas,
    },
    {
        id:'spit-bull',
        imeSmjera:'Spit Bull',
        ocjenaSmjera:'5c',
        lokacijaSmjera:'Kuk od Nosoroga, Velika Paklenica, Croatia',
        thumb: SkicaSpitBull,
    },
    {
        id: 'brid-za-cekic',
        imeSmjera:'Brid za veliki čekić',
        ocjenaSmjera:'5b',
        lokacijaSmjera:'Kuk od gaćina, Velika Paklenica, Croatia',
        thumb: SkicaBridZaCekic,
    },
    {
        id: 'pripravniska-grapa',
        imeSmjera:'Pripravniška grapa',
        ocjenaSmjera:'VI+ / M3',
        lokacijaSmjera:'Mala Mojstrovka, Julijske alpe, Slovenija',
        thumb: SkicaPripravniska,
    },

];

export const usponi = [
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
        id: 3,
        penjaci: penjaci.filter(({nick}) => (nick === 'rene' || nick === 'sampita')),
        titleImage: Grapa,
        images: slikeSIzleta,
        datumUspona:'23.03.2019.',
        smjer: smjerovi.find(({id}) => id === 'pripravniska-grapa'),
        napomena: 'Bilo je jako hladnoi, smrzla num se muda od smrzavice!',
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