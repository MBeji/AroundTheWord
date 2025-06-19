'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, MessageCircle, Users, Award, Heart } from 'lucide-react';

const tunisianGuides = [
  {
    id: 1,
    name: "Ahmed Ben Salah",
    photo: "/images/tunisia/guide-ahmed-ben-salah.jpg",
    age: 45,
    location: "Douz, Sahara",
    specialties: ["Désert du Sahara", "Culture Bédouine", "Astronomie"],
    languages: ["Arabe", "Français", "Anglais", "Allemand"],
    experience: "20 ans",
    rating: 4.9,
    reviews: 234,
    clients: 1200,
    description: "Guide bédouin de 4ème génération, Ahmed connaît chaque dune du Sahara. Il partage les traditions ancestrales de ses ancêtres nomades et vous fera vivre une expérience authentique du désert.",
    price: "280€",
    duration: "3 jours",
    backgroundGradient: "from-orange-400 to-yellow-600",
    achievements: ["Guide Certifié", "Expert Sahara", "Prix du Tourisme 2024"],
    availability: "Disponible",
    signature: "Nuits sous les étoiles garanties ✨"
  },
  {
    id: 2,
    name: "Fatma Khelifi",
    photo: "/images/tunisia/guide-fatma-khelifi.jpg",
    age: 38,
    location: "Djerba, Côte Est",
    specialties: ["Pêche Traditionnelle", "Vie Marine", "Artisanat Local"],
    languages: ["Arabe", "Français", "Italien"],
    experience: "15 ans",
    rating: 4.8,
    reviews: 189,
    clients: 890,
    description: "Pêcheuse de famille depuis 3 générations, Fatma vous initie aux techniques de pêche ancestrales et vous fait découvrir les trésors cachés de la côte tunisienne.",
    price: "85€",
    duration: "1 jour",
    backgroundGradient: "from-blue-400 to-cyan-600",
    achievements: ["Experte Pêche", "Guide Écologique", "Formation Marine"],
    availability: "Disponible",
    signature: "Poissons frais garantis 🐟"
  },
  {
    id: 3,    name: "Youssef Mokrani",
    photo: "/images/tunisia/guide-youssef-mokrani.jpg",
    age: 42,
    location: "Sidi Bou Saïd",
    specialties: ["Musique Traditionnelle", "Histoire Culturelle", "Instruments"],
    languages: ["Arabe", "Français", "Anglais"],
    experience: "18 ans",
    rating: 4.9,
    reviews: 156,
    clients: 720,
    description: "Musicien traditionnel et conteur, Youssef fait revivre l'âme musicale de la Tunisie à travers ses concerts privés et ses récits captivants.",
    price: "45€",
    duration: "3 heures",
    backgroundGradient: "from-purple-400 to-blue-600",
    achievements: ["Musicien Diplômé", "Conteur Certifié", "Artiste Reconnu"],
    availability: "Très demandé",
    signature: "Concerts privés exceptionnels 🎶"
  },
  {
    id: 4,
    name: "Khadija Trabelsi",
    photo: "/images/tunisia/guide-khadija-trabelsi.jpg",
    age: 51,
    location: "Sousse, Centre",
    specialties: ["Cuisine Authentique", "Marchés Locaux", "Traditions Culinaires"],
    languages: ["Arabe", "Français"],
    experience: "25 ans",
    rating: 4.9,
    reviews: 298,
    clients: 1450,
    description: "Chef traditionnelle et experte des marchés, Khadija transmet les secrets culinaires de sa grand-mère et vous guide dans les vrais marchés locaux.",
    price: "75€",
    duration: "5 heures",
    backgroundGradient: "from-red-400 to-orange-600",
    achievements: ["Chef Experte", "Formatrice Cuisine", "Prix Gastronomie"],
    availability: "Disponible",
    signature: "Recettes familiales secrètes 🥘"
  },
  {
    id: 5,
    name: "Salim Ben Youssef",
    photo: "/images/tunisia/guide-salim-ben-youssef.jpg",
    age: 39,
    location: "Tunis, Médina",
    specialties: ["Artisanat Traditionnel", "Poterie", "Histoire"],
    languages: ["Arabe", "Français", "Espagnol"],
    experience: "16 ans",
    rating: 4.7,
    reviews: 203,
    clients: 980,
    description: "Maître potier et guide de la médina, Salim perpétue l'art ancestral de ses ancêtres et vous fait découvrir les secrets des artisans tunisiens.",
    price: "65€",
    duration: "4 heures",
    backgroundGradient: "from-amber-500 to-orange-700",
    achievements: ["Maître Artisan", "Guide Médina", "Formateur Art"],
    availability: "Disponible",
    signature: "Créations artisanales uniques 🏺"
  },  {
    id: 6,
    name: "Amina Hammami",
    photo: "/images/tunisia/guide-amina-hammami.jpg",
    age: 44,
    location: "Tozeur, Oasis",
    specialties: ["Agriculture Oasienne", "Écologie", "Botanique"],
    languages: ["Arabe", "Français", "Anglais"],
    experience: "19 ans",
    rating: 4.8,
    reviews: 167,
    clients: 650,
    description: "Agricultrice et guide écologique, Amina vous révèle les secrets millénaires de l'agriculture dans le désert et la beauté des oasis tunisiennes.",
    price: "120€",
    duration: "2 jours",
    backgroundGradient: "from-green-400 to-emerald-600",
    achievements: ["Guide Écologique", "Experte Oasis", "Formation Agriculture"],
    availability: "Disponible",
    signature: "Écotourisme authentique 🌴"
  }
];

export function TunisianGuides() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
            <Users className="h-5 w-5" />
            <span className="font-medium">Nos Guides Experts</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Rencontrez vos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
              Guides Locaux
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Tunisiens
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos guides locaux sont plus que des accompagnateurs : ils sont vos ambassadeurs culturels, 
            prêts à partager leur passion et leurs connaissances ancestrales de la Tunisie.
          </p>
        </motion.div>

        {/* Grille des guides */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tunisianGuides.map((guide, index) => (
            <motion.div
              key={guide.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover-lift"
            >              {/* Photo de profil avec image authentique */}
              <div className="relative h-32 overflow-hidden">
                <Image
                  src={guide.photo}
                  alt={guide.name}
                  width={400}
                  height={128}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${guide.backgroundGradient} opacity-60`} />
                
                {/* Badge de disponibilité */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                  guide.availability === 'Disponible' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'
                }`}>
                  {guide.availability}
                </div>
                
                {/* Bouton favori */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="h-4 w-4 text-gray-600 hover:text-red-500" />
                </motion.button>
              </div>

              {/* Informations du guide */}
              <div className="p-6">
                {/* Nom et localisation */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{guide.name}</h3>
                  <div className="flex items-center text-gray-600 text-sm mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {guide.location} • {guide.age} ans
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{guide.description}</p>
                </div>

                {/* Spécialités */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Spécialités :</h5>
                  <div className="flex flex-wrap gap-1">
                    {guide.specialties.map((specialty, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Langues */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Langues :</h5>
                  <div className="flex flex-wrap gap-1">
                    {guide.languages.map((language, idx) => (
                      <span key={idx} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                        {language}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Statistiques */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="flex items-center justify-center">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="font-semibold">{guide.rating}</span>
                    </div>
                    <p className="text-xs text-gray-500">{guide.reviews} avis</p>
                  </div>
                  <div>
                    <div className="font-semibold">{guide.clients}+</div>
                    <p className="text-xs text-gray-500">Clients</p>
                  </div>
                  <div>
                    <div className="font-semibold">{guide.experience}</div>
                    <p className="text-xs text-gray-500">Expérience</p>
                  </div>
                </div>

                {/* Réalisations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {guide.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
                        <Award className="h-3 w-3 mr-1" />
                        {achievement}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Signature */}
                <div className="mb-4 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 italic">"{guide.signature}"</p>
                </div>

                {/* Prix et durée */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{guide.price}</span>
                    <span className="text-gray-600 text-sm"> / {guide.duration}</span>
                  </div>
                </div>

                {/* Boutons d'action */}
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex-1 py-3 bg-gradient-to-r ${guide.backgroundGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                  >
                    Réserver
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to action pour devenir guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 shadow-xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              Vous êtes tunisien et passionné par votre région ? 🌟
            </h3>
            <p className="mb-6 opacity-90">
              Rejoignez notre équipe de guides locaux et partagez votre amour de la Tunisie avec le monde entier
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                Devenir Guide Partenaire
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300"
              >
                En Savoir Plus
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
