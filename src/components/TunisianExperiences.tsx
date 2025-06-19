'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, Users, Heart } from 'lucide-react';

const tunisianExperiences = [
  {
    id: 1,
    title: "Safari dans le Sahara avec les Bédouins",
    guide: "Hassan El-Makki",
    guideImage: "https://media.gettyimages.com/id/158392485/fr/photo/camel-caravan-in-the-sahara-desert.jpg?s=612x612&w=gi&k=20&c=8_7rJ8KU4XuJ4F8wKDQg_9xF2oI1QN4jP7u5m6RwDR8=",
    location: "Douz, Porte du Sahara",
    duration: "3 jours / 2 nuits",
    price: 280,
    rating: 4.9,
    reviews: 156,
    image: "https://media.gettyimages.com/id/509420688/fr/photo/dromedary-in-the-sahara-desert-of-ksar-ghilane-tunisia.jpg?s=612x612&w=gi&k=20&c=HnOGhqbCSDwTsK_PBGJ6h-qUaQkZ8ZZw9pL8hU3-2Sc=",
    bgGradient: "from-orange-400 to-yellow-600",
    description: "Découvrez la vie nomade authentique avec Hassan, guide bédouin de 4ème génération",
    highlights: ["Nuit sous les étoiles", "Cuisine traditionnelle", "Contes du désert", "Caravane de chameaux"],
    specialty: "Traditions Bédouines"
  },  {
    id: 2,
    title: "Plongée & Pêche Traditionnelle à Djerba",
    guide: "Fatma Souissi",
    guideImage: "https://media.gettyimages.com/id/2148949400/fr/photo/the-island-of-djerba-in-tunisia.jpg?s=612x612&w=gi&k=20&c=zY4xB5oP6TUj7vQ3K9HGhOZEF8Y2xL1mW6dR8vS7nK4=",
    location: "Île de Djerba",
    duration: "1 journée",
    price: 85,
    rating: 4.8,
    reviews: 94,
    image: "https://media.gettyimages.com/id/1895958613/fr/photo/hammamet-on-the-mediterranean-coast-in-tunisia.jpg?s=612x612&w=gi&k=20&c=4dZkchNUYqL8_8dU2-g_Y8Ct7L5_YJlsVFLBc0k1EQY=",
    bgGradient: "from-blue-400 to-cyan-600",
    description: "Apprenez les techniques de pêche ancestrales avec Fatma, pêcheuse locale depuis 20 ans",
    highlights: ["Pêche au filet traditionnel", "Dégustation fruits de mer", "Récifs coralliens", "Techniques locales"],
    specialty: "Pêche Artisanale"
  },  {
    id: 3,
    title: "Artisanat dans la Médina de Tunis",
    guide: "Salim Ben Youssef",
    guideImage: "https://media.gettyimages.com/id/101567860/fr/photo/houmt-souk-pottery-djerba-tunisia.jpg?s=612x612&w=gi&k=20&c=7QxZ2zK9vL3HdJ8uF6rBG4mE5wY9N1tPo8cS7x1QxR2=",
    location: "Médina de Tunis",
    duration: "4 heures",
    price: 65,
    rating: 4.7,
    reviews: 203,
    image: "https://media.gettyimages.com/id/525660553/fr/photo/tunis-landmark.jpg?s=612x612&w=gi&k=20&c=mE7wL3qR9xH4dG8jP2sK1uY5bN6tC9fV0z8oW7lQ3xE=",
    bgGradient: "from-amber-500 to-orange-700",
    description: "Plongez dans l'artisanat traditionnel avec Salim, maître potier et guide de la médina",
    highlights: ["Atelier poterie", "Souks authentiques", "Art du zellige", "Café traditionnel"],
    specialty: "Artisanat Ancestral"
  },
  {
    id: 4,
    title: "Oasis & Agriculture Traditionnelle",
    guide: "Amina Trabelsi",
    guideImage: "https://media.gettyimages.com/id/575664325/fr/photo/scenic-view-at-the-town-of-sidi-bou-said.jpg?s=612x612&w=gi&k=20&c=vL4bQ7zR2uG8xJ9tK3fH1mP6sY5wN8cE7oD1aB9qW3x=",
    location: "Tozeur, Oasis de Chebika",
    duration: "2 jours",
    price: 150,
    rating: 4.9,
    reviews: 87,
    image: "https://media.gettyimages.com/id/1493402574/fr/photo/sidi-bou-said.jpg?s=612x612&w=gi&k=20&c=YIvV2ZhGxBp4YLHGfGd0mDBvmZxGN8uC2uKLQE8rGX4=",
    bgGradient: "from-green-400 to-emerald-600",
    description: "Découvrez l'agriculture oasienne millénaire avec Amina, agricultrice et guide écologique",
    highlights: ["Irrigation traditionnelle", "Récolte de dattes", "Vie dans l'oasis", "Cuisine du désert"],
    specialty: "Écotourisme"
  },
  {
    id: 5,
    title: "Musique & Traditions de Sidi Bou Saïd",
    guide: "Youssef Mokrani",
    guideImage: "https://media.gettyimages.com/id/1493402574/fr/photo/sidi-bou-said.jpg?s=612x612&w=gi&k=20&c=YIvV2ZhGxBp4YLHGfGd0mDBvmZxGN8uC2uKLQE8rGX4=",
    location: "Sidi Bou Saïd",
    duration: "3 heures",
    price: 45,
    rating: 4.8,
    reviews: 145,    image: "https://media.gettyimages.com/id/575664325/fr/photo/scenic-view-at-the-town-of-sidi-bou-said.jpg?s=612x612&w=gi&k=20&c=vL4bQ7zR2uG8xJ9tK3fH1mP6sY5wN8cE7oD1aB9qW3x=",
    bgGradient: "from-purple-400 to-blue-600",
    description: "Immergez-vous dans la culture musicale tunisienne avec Youssef, musicien traditionnel",
    highlights: ["Concert privé", "Instruments traditionnels", "Histoire musicale", "Vue panoramique"],
    specialty: "Culture Musicale"
  },
  {
    id: 6,
    title: "Cuisine Authentique & Marchés Locaux",
    guide: "Khadija Hamdi",
    guideImage: "https://media.gettyimages.com/id/101567860/fr/photo/houmt-souk-pottery-djerba-tunisia.jpg?s=612x612&w=gi&k=20&c=7QxZ2zK9vL3HdJ8uF6rBG4mE5wY9N1tPo8cS7x1QxR2=",
    location: "Sousse",
    duration: "5 heures",
    price: 75,
    rating: 4.9,
    reviews: 178,
    image: "https://media.gettyimages.com/id/525660553/fr/photo/tunis-landmark.jpg?s=612x612&w=gi&k=20&c=mE7wL3qR9xH4dG8jP2sK1uY5bN6tC9fV0z8oW7lQ3xE=",
    bgGradient: "from-red-400 to-orange-600",
    description: "Découvrez les secrets de la cuisine tunisienne avec Khadija, chef traditionnelle",
    highlights: ["Marché aux épices", "Cours de cuisine", "Recettes familiales", "Dégustation complète"],
    specialty: "Gastronomie Locale"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};

export function TunisianExperiences() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 via-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
            <span className="text-2xl">🇹🇳</span>
            <span className="font-medium">Expériences Authentiques</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Découvrez la
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
              Vraie Tunisie
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nos guides locaux vous emmènent hors des sentiers battus pour vivre des expériences 
            authentiques et découvrir les traditions millénaires de la Tunisie.
          </p>
        </motion.div>

        {/* Grille d'expériences */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tunisianExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={cardVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >              {/* Image d'en-tête avec photo authentique */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${experience.bgGradient} opacity-60`} />
                
                {/* Badge spécialité */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-gray-700">{experience.specialty}</span>
                </div>
                
                {/* Bouton favori */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
                >
                  <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                </motion.button>
              </div>

              {/* Contenu de la carte */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{experience.description}</p>
                </div>                {/* Informations du guide */}
                <div className="flex items-center space-x-3 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={experience.guideImage}
                      alt={experience.guide}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{experience.guide}</h4>
                    <p className="text-sm text-gray-600">Guide Local Expert</p>
                  </div>
                </div>

                {/* Points forts */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">Points forts :</h5>
                  <div className="grid grid-cols-2 gap-1">
                    {experience.highlights.map((highlight, idx) => (
                      <div key={idx} className="text-xs text-gray-600 flex items-center">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                        {highlight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Détails pratiques */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {experience.location}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {experience.duration}
                  </div>
                </div>

                {/* Prix et évaluation */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">{experience.price}€</span>
                    <span className="text-gray-600 text-sm"> /personne</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="font-semibold">{experience.rating}</span>
                    <span className="text-gray-500 text-sm ml-1">({experience.reviews})</span>
                  </div>
                </div>

                {/* Bouton de réservation */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 bg-gradient-to-r ${experience.bgGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300`}
                >
                  Réserver cette expérience
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous êtes un guide local tunisien ? 🌟
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez notre communauté et partagez votre passion pour la Tunisie avec des voyageurs du monde entier
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Devenir Guide Partenaire
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
