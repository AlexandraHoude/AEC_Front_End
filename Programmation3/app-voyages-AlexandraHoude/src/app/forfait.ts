import { Hotel } from './hotel';

export interface Forfait {
   _id: number;
   destination: string;
   villeDepart: string;
   hotel: Hotel;
   dateDepart: string;
   dateRetour: string;
   prix: number;
   rabais: number;
   forfaitVedette: boolean;
   da: string;
}
