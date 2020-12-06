import { Hotel } from './hotel';

export interface Forfait {
   id: number;
   destination: string;
   villeDepart: string;
   hotel: Hotel;
   dateDepart: string;
   dateRetour: string;
   prix: number;
   rabais: number;
   forfaitVedette: boolean;
}
