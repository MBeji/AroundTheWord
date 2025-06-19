'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    country: "France 🇫🇷",
    avatar: "/images/tunisia/avatars/avatar-female-1.jpg",
    guide: "Ahmed Ben Salah",
    experience: "Safari Sahara 3 jours",
    rating: 5,
    text: "Ahmed nous a fait découvrir son désert comme personne d'autre n'aurait pu le faire. Les histoires de ses ancêtres bédouins, la cuisine traditionnelle sous les étoiles... Un voyage inoubliable ! Ahmed est plus qu'un guide, c'est un ami.",
    highlight: "Authenticité",
    date: "Mars 2025"
  },
  {
    id: 2,
    name: "Marco Rossi",
    country: "Italie 🇮🇹",
    avatar: "/images/tunisia/avatars/avatar-male-1.jpg",
    guide: "Fatma Khelifi",
    experience: "Pêche traditionnelle Djerba",
    rating: 5,
    text: "Fatma m'a appris les techniques de pêche que sa famille pratique depuis des générations. J'ai pu comprendre la vraie vie des pêcheurs tunisiens. Elle parle parfaitement italien et connaît chaque recoin de Djerba.",
    highlight: "Expertise locale",
    date: "Avril 2025"
  },
  {
    id: 3,
    name: "Emma Thompson",
    country: "Royaume-Uni 🇬🇧",
    avatar: "/images/tunisia/avatars/avatar-female-2.jpg",
    guide: "Youssef Mokrani",
    experience: "Musique traditionnelle",
    rating: 5,
    text: "Youssef nous a fait vibrer avec sa musique traditionnelle tunisienne. Il nous a raconté l'histoire de chaque instrument et nous a même appris quelques airs. Un moment magique à Sidi Bou Saïd !",
    highlight: "Culture vivante",
    date: "Mai 2025"
  },
  {
    id: 4,
    name: "Hans Mueller",
    country: "Allemagne 🇩🇪",
    avatar: "/images/tunisia/avatars/avatar-male-2.jpg",
    guide: "Khadija Trabelsi",
    experience: "Cuisine & marchés",
    rating: 5,
    text: "Khadija nous a emmenés dans les vrais marchés locaux, loin des zones touristiques. Elle nous a appris à cuisiner le couscous authentique et tant d'autres spécialités. Ma femme et moi avons adoré !",
    highlight: "Savoir-faire",
    date: "Février 2025"
  },
  {
    id: 5,
    name: "Sofia Andersson",
    country: "Suède 🇸🇪",
    avatar: "/images/tunisia/avatars/avatar-female-3.jpg",
    guide: "Salim Ben Youssef",
    experience: "Artisanat médina",
    rating: 5,
    text: "Salim nous a ouvert les portes de son atelier de poterie familial. Voir les artisans travailler avec leurs mains, comprendre les techniques millénaires... C'était comme voyager dans le temps !",
    highlight: "Traditions",
    date: "Janvier 2025"
  }
];

export function TunisianTestimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-orange-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-6">
            <Quote className="h-5 w-5" />
            <span className="font-medium">Témoignages Authentiques</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ce que disent nos
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-orange-500">
              Voyageurs
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez les expériences vécues par nos voyageurs avec nos guides locaux tunisiens passionnés
          </p>
        </motion.div>

        {/* Grille de témoignages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover-lift"
            >
              {/* En-tête du témoignage */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonial.avatar}
                      alt={`Avatar de ${testimonial.name}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.country}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              {/* Badge de l'expérience */}
              <div className="mb-4">
                <span className="inline-block bg-gradient-to-r from-orange-100 to-blue-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.experience}
                </span>
              </div>

              {/* Texte du témoignage */}
              <div className="mb-4">
                <Quote className="h-6 w-6 text-gray-300 mb-2" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Informations du guide */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Guide : {testimonial.guide}</p>
                    <p className="text-xs text-gray-500">{testimonial.date}</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {testimonial.highlight}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistiques */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 bg-white rounded-2xl p-8 shadow-xl border border-orange-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-orange-600">4.9★</div>
              <p className="text-gray-600">Note Moyenne</p>
              <p className="text-sm text-gray-500">Sur 2,847 avis</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <p className="text-gray-600">Satisfaction</p>
              <p className="text-sm text-gray-500">Clients satisfaits</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-green-600">500+</div>
              <p className="text-gray-600">Guides Locaux</p>
              <p className="text-sm text-gray-500">Experts certifiés</p>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="space-y-2"
            >
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <p className="text-gray-600">Destinations</p>
              <p className="text-sm text-gray-500">À travers la Tunisie</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Prêt à vivre votre propre aventure tunisienne ? 🌟
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Rejoignez des milliers de voyageurs qui ont découvert la vraie Tunisie grâce à nos guides locaux passionnés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              🏜️ Réserver une Expérience Sahara
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              🏖️ Découvrir les Expériences Côtières
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
