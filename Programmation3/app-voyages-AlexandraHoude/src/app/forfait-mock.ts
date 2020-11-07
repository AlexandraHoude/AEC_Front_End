import { Forfait } from './forfait';

export const forfaits : Forfait [] = [
    {
        id: 1,
        destination: 'Playa Blanca, Panama',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Playa Blanca Resort',
            coordonnee: '50 Planta Baja Local 1A, Panama, Panama',
            etoiles: 4,
            nbChambres: 219,
            photo: "https://images.sunwingtravelgroup.com/HotelImages/PTYPLB/16x9/001.jpg",
            caracteristiques: [ 'Mini Zoo',
                                "Toboggan aquatique",
                                "Casse-croûte jusqu'à 2h",
                                "Salle d'entraînement",
                                "Salle de jeux vidéo", 
                                '5 restaurants',
                                'WiFi: Hall'],
        },
        dateDepart: '03/11/2020',
        dateRetour: '10/11/2020',
        prix: 1650,
        rabais: 200,
        forfaitVedette: true
    },
    {
        id: 2,
        destination: 'Antigua , Antigua et Barbuda',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Ocean Point Resort and Spa',
            coordonnee: 'Hodges Bay Main Rd, Saint Johns,, Antigua & Barbuda, Antigua and Barbuda',
            etoiles: 3,
            nbChambres: 69,
            photo: "https://images.sunwingtravelgroup.com/HotelImages/ANUOPR/16x9/001.jpg",
            caracteristiques: [ 'Tout inclus', 
                                'Piscine eau douce',
                                "1 bar",
                                "1 restaurant",
                                "Climatisation",
                                "Wi-Fi", 
                                'Télévision satellite'],
        },
        dateDepart: '03/11/2020',
        dateRetour: '10/11/2020',
        prix: 1805,
        rabais: 0,
        forfaitVedette: false
    },
    {
        id: 3,
        destination: 'Montego Bay, Jamaique',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Royalton Blue Waters',
            coordonnee: 'Highway A1, Mountain Spring, Trelawny, Jamaica',
            etoiles: 5,
            nbChambres: 228,
            photo: "https://images.sunwingtravelgroup.com/HotelImages/MBJRBW/16X9/001.jpg",
            caracteristiques: [ 'Tout inclus', 
                                'Miniclub ',
                                "3 piscines",
                                "11 restaurants",
                                "7 bars",
                                "Parc Aquatique", 
                                'Centre de fitness',
                                'cours de cuisine '],
        },
        dateDepart: '03/11/2020',
        dateRetour: '10/11/2020',
        prix: 825,
        rabais: 50,
        forfaitVedette: false
    },
    {
        id: 4,
        destination: 'Saint-Martin',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Oyster Bay Beach Resort',
            coordonnee: 'Emerald Merit Road #10, St Maarten',
            etoiles: 4,
            nbChambres: 182,
            photo: "https://images.sunwingtravelgroup.com/HotelImages/SXMOBB/16x9/001.jpg" ,
            caracteristiques: [ 'Magnifique panorama sur un récif coloré dans l’océan Atlantique', 
                                'Wi-Fi',
                                "piscine à débordement",
                                "Spa",
                                "Boutiques",
                                "Centre de fitness",  
                                'Coffret de sûreté'],
        },
        dateDepart: '03/11/2020',
        dateRetour: '10/11/2020',
        prix: 1395,
        rabais: 149,
        forfaitVedette: true
    },
    {
        id: 5,
        destination: 'Cancun, Mexique',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Golden Parnassus Resort And Spa',
            coordonnee: 'Blvd Kukulcan Km 14, Hotel Zone Cancun, Q.Roo, Cancun, Mexique, 77500',
            etoiles: 4,
            nbChambres: 214,
            photo: "https://images.sunwingtravelgroup.com/HotelImages/CUNGOL/16x9/001.jpg",
            caracteristiques: [ 'Directement sur la plage', 
                                'Sauna, Hammam',
                                "Bain tourbillon exterieur",
                                "Théâtre",
                                "Lits balinais ($)", 
                                'Terrain de volleyball',
                                "Équipement de plongée avec tuba", 
                                "Centre de fitness"],
        },
        dateDepart: '03/11/2020',
        dateRetour: '10/11/2020',
        prix: 1014,
        rabais: 300,
        forfaitVedette: false
    },
];