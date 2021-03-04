import 'package:flutter/material.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Forfaits Voyages',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: AccueilForfaitsVoyages(title: 'Forfaits Voyages'),
    );
  }
}

class AccueilForfaitsVoyages extends StatefulWidget {
  AccueilForfaitsVoyages({Key key, this.title}) : super(key: key);

  final String title;

  @override
  AccueilForfaitsVoyagesState createState() => AccueilForfaitsVoyagesState();
}

class AccueilForfaitsVoyagesState extends State<AccueilForfaitsVoyages> {
  Future<List<Forfait>> futursForfaits;


  initState() {
    super.initState();
    futursForfaits = _fetchForfaits();
  }

  Future<List<Forfait>> _fetchForfaits() async {
    final response = await http.get(Uri.https('forfaits-voyages.herokuapp.com', '/api/forfaits/da/1996358', {}));

    if (response.statusCode == 200) {
      List jsonResponse = json.decode(response.body);
      return jsonResponse.map((forfait) => new Forfait.fromJson(forfait)).toList();
    } else {
      throw Exception('Erreur de chargement des forfaits');
    }
  }

  @override
  Widget build(BuildContext context) {
    return FutureBuilder<List<Forfait>>(
      future: futursForfaits,
      builder: (context, snapshot) {
        if (snapshot.hasData) {
          return Scaffold(
              appBar: AppBar(title: Text(widget.title)),
              body: Center(
                child: Column(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: <Widget>[
                    Expanded(
                        child: ListView.builder(
                            itemCount: snapshot.data?.length,
                            itemBuilder: (context, index) {
                              return Container(
                                  margin: const EdgeInsets.all(15.0),
                                  padding: const EdgeInsets.all(3.0),
                                  decoration: BoxDecoration(
                                      border: Border.all(color: Colors.black26)
                                  ),
                                  child: Column(
                                      children: <Widget>[
                                        Image.network(
                                          'https://picsum.photos/600/240',
                                          width: 600,
                                          height: 240,
                                          fit: BoxFit.cover,
                                        ),
                                        Container(
                                          padding: const EdgeInsets.all(32),
                                          child: Row(
                                            children: [
                                              Expanded(
                                                /*1*/
                                                child: Column(
                                                  crossAxisAlignment: CrossAxisAlignment.center,
                                                  children: [
                                                    /*2*/
                                                    Container(
                                                      padding: const EdgeInsets.only(bottom: 8),
                                                      child: Text(
                                                        snapshot.data[index].destination ?? '',
                                                        style: TextStyle(
                                                          fontWeight: FontWeight.bold,
                                                        ),
                                                      ),
                                                    ),
                                                    Text(
                                                      snapshot.data[index].hotel.nom ?? '',
                                                      style: TextStyle(
                                                        color: Colors.grey[500],
                                                      ),
                                                    ),
                                                    Text(
                                                      'Rabais: ' +
                                                      snapshot.data[index].rabais.toString() ?? '',
                                                      style: TextStyle(
                                                        color: Colors.grey[500],
                                                      ),
                                                    ),
                                                    Text(
                                                      'Prix: ' +
                                                      snapshot.data[index].prix.toString() ?? '',
                                                      style: TextStyle(
                                                        color: Colors.grey[500],
                                                      ),
                                                    ),
                                                  ],
                                                ),
                                              ),
                                              /*3*/
                                              Icon(
                                                Icons.star,
                                                color: Colors.red[500],
                                              ),
                                              Text(snapshot.data[index].hotel.nombreEtoiles.toString()),
                                            ],
                                          ),
                                        ),
                                      ]
                                  )
                              );
                            }))],),)); // Cette partie a été comprimée dans les notes pour une meilleure visibilité
        } else if (snapshot.hasError) {
          return Text("${snapshot.error}");
        }
        return CircularProgressIndicator();
      },
    );
  }
}

Widget titleSection = Container(
  padding: const EdgeInsets.all(32),
  child: Row(
    children: [
      Expanded(
        /*1*/
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            /*2*/
            Container(
              padding: const EdgeInsets.only(bottom: 8),
              child: Text(
                'Oeschinen Lake Campground',
                style: TextStyle(
                  fontWeight: FontWeight.bold,
                ),
              ),
            ),
            Text(
              'Kandersteg, Switzerland',
              style: TextStyle(
                color: Colors.grey[500],
              ),
            ),
          ],
        ),
      ),
      /*3*/
      Icon(
        Icons.star,
        color: Colors.red[500],
      ),
      Text('41'),
    ],
  ),
);

class Forfait {
  final String id;
  final String destination;
  final String villeDepart;
  final DateTime dateDepart;
  final DateTime dateRetour;
  final String image;
  final int prix;
  final int rabais;
  final bool vedette;
  final Hotel hotel;

  Forfait({this.id, this.destination, this.villeDepart, this.hotel, this.dateDepart, this.dateRetour, this.image, this.prix, this.rabais, this.vedette});

  factory Forfait.fromJson(Map<String, dynamic> json) {
    return Forfait(
      id: json['_id'],
      destination: json['destination'],
      dateDepart: DateTime.parse("2021-01-01"), //DateTime.parse(json['dateDepartD']),
      dateRetour: DateTime.parse("2021-01-01"), //DateTime.parse(json['dateRetourD']),
      image: json['image'],
      prix: json['prix'],
      rabais: json['rabais'],
      vedette: json['vedette'],
      hotel:Hotel.fromJson(json['hotel']),

    );
  }

}

class Hotel {
  final String nom;
  final String coordonnees;
  final int nombreEtoiles;
  final int nombreChambres;
  final List<String> caracteristiques;

  Hotel({this.nom, this.coordonnees, this.nombreEtoiles, this.nombreChambres, this.caracteristiques});

  factory Hotel.fromJson(Map<String, dynamic> json) {
    return Hotel(
        nom:json['nom'],
        coordonnees:json['coordonnees'],
        nombreEtoiles: json['nombreEtoiles'],
        nombreChambres: json['nombreChambres'],
        caracteristiques: new List<String>.from(json['caracteristiques'])
    );
  }
}





