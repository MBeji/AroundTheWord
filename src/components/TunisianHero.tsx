'use client';

import React, { Suspense, useRef } from 'react';
import Image from 'next/image';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Text3D, Environment } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

// Composant 3D flottant pour représenter les destinations
function FloatingElement({ position, color, text }: { position: [number, number, number], color: string, text: string }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
    </Float>
  );
}

// Scène 3D de fond
function Tunisia3DScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
      <Suspense fallback={null}>
        <Environment preset="sunset" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        
        {/* Éléments flottants représentant les destinations tunisiennes */}
        <FloatingElement position={[-2, 1, 0]} color="#FF6B35" text="Sahara" />
        <FloatingElement position={[2, -1, 0]} color="#4ECDC4" text="Plages" />
        <FloatingElement position={[0, 2, 0]} color="#45B7D1" text="Médinas" />
        <FloatingElement position={[-1.5, -2, 0]} color="#96CEB4" text="Oasis" />
        <FloatingElement position={[1.5, 1.5, 0]} color="#FECA57" text="Désert" />
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Suspense>
    </Canvas>
  );
}

export function TunisianHero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Images de fond authentiques de Tunisie */}
      <div className="absolute inset-0">
        {/* Image principale : Sahara tunisien */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://media.gettyimages.com/id/509420688/fr/photo/dromedary-in-the-sahara-desert-of-ksar-ghilane-tunisia.jpg?s=2048x2048&w=gi&k=20&c=HnOGhqbCSDwTsK_PBGJ6h-qUaQkZ8ZZw9pL8hU3-2Sc=')`,
          }}
        />
        
        {/* Overlay gradient pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        {/* Images flottantes additionnelles */}        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20 w-64 h-48 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1539650116574-75c0c6d73fb3?w=400&h=300&fit=crop&crop=center"
            alt="Sidi Bou Said"
            width={256}
            height={192}
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-20 left-20 w-48 h-64 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=300&h=400&fit=crop&crop=center"
            alt="Plage de Hammamet"
            width={192}
            height={256}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Background 3D Scene (réduit l'opacité) */}
      <div className="absolute inset-0 opacity-10">
        <Tunisia3DScene />
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Dunes animées */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-yellow-300/30 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          style={{
            clipPath: "polygon(0 100%, 100% 100%, 90% 0%, 10% 0%)"
          }}
        />
        
        {/* Vagues de la mer */}
        <motion.div
          className="absolute top-0 right-0 w-full h-32 bg-gradient-to-b from-blue-300/20 to-transparent"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          style={{
            clipPath: "polygon(10% 100%, 100% 100%, 100% 0%, 0% 0%)"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl">🇹🇳</span>
                <span className="text-sm font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  Découvrez la Tunisie Authentique
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Voyagez avec des
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
                  Guides Locaux
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-500">
                  Tunisiens
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-xl text-gray-600 leading-relaxed"
              >
                Explorez les dunes du Sahara, les plages de Djerba, les médinas historiques 
                et les oasis cachées avec des guides locaux passionnés qui connaissent tous les secrets de la Tunisie.
              </motion.p>
            </div>

            {/* Statistiques animées */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="grid grid-cols-3 gap-6"
            >
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="text-3xl font-bold text-orange-600"
                >
                  500+
                </motion.div>
                <p className="text-sm text-gray-600">Guides Locaux</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="text-3xl font-bold text-blue-600"
                >
                  50+
                </motion.div>
                <p className="text-sm text-gray-600">Destinations</p>
              </div>
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                  className="text-3xl font-bold text-green-600"
                >
                  4.9★
                </motion.div>
                <p className="text-sm text-gray-600">Note Moyenne</p>
              </div>
            </motion.div>

            {/* Boutons d'action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🏜️ Explorer le Sahara
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                🏖️ Découvrir les Plages
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Galerie d'images tunisiennes */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Image principale - Sahara */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="col-span-2 relative h-64 rounded-2xl overflow-hidden shadow-2xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl mb-2">🐪</div>
                    <h3 className="text-2xl font-bold">Sahara Tunisien</h3>
                    <p className="text-sm opacity-90">Dunes de Erg Chebbi</p>
                  </div>
                </div>
                {/* Overlay de sable animé */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-yellow-500/50 to-transparent"
                  animate={{ x: [-20, 20, -20] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Plages de Djerba */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-cyan-600"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🏖️</div>
                    <h4 className="text-lg font-bold">Plages de Djerba</h4>
                  </div>
                </div>
                {/* Vagues animées */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white/30 to-transparent"
                  animate={{ scaleX: [1, 1.1, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Médina traditionnelle */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-600 to-orange-800"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🕌</div>
                    <h4 className="text-lg font-bold">Médinas</h4>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Guides locaux flottants */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  AM
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Ahmed Mehdi</h5>
                  <p className="text-sm text-gray-600">Guide Sahara • 15 ans d'expérience</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-xs text-gray-500 ml-1">(127 avis)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl p-4 shadow-2xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                  LB
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900">Leïla Ben Ali</h5>
                  <p className="text-sm text-gray-600">Guide Côtière • Spécialiste Djerba</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★★★★★</span>
                    <span className="text-xs text-gray-500 ml-1">(89 avis)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
