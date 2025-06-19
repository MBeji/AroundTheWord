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
  const textRef = useRef<THREE.Object3D>(null); // Ref for Text3D

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.3;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
    }
    if (textRef.current) { // Make text face camera
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.8} floatIntensity={0.4}>
      <mesh ref={meshRef} position={position}>
        <boxGeometry args={[0.8, 0.8, 0.8]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.6} />
      </mesh>
      <Text3D
        ref={textRef}
        // font="/fonts/Inter_Bold.json" // Font prop removed to attempt using default
        position={[position[0], position[1] + 0.6, position[2]]} // Position text above the box
        size={0.3}
        height={0.05}
        curveSegments={12}
      >
        {text}
        <meshStandardMaterial color="white" />
      </Text3D>
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
        >
          <Image src="/images/tunisia/hero-background-sahara.jpg" alt="Vaste paysage désertique du Sahara tunisien avec des dunes de sable et un ciel clair" layout="fill" objectFit="cover" priority />
        </div>
        
        {/* Overlay gradient pour la lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
        
        {/* Images flottantes additionnelles */}        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-20 right-20 w-64 h-48 rounded-xl overflow-hidden shadow-2xl"
        >
          <Image
            src="/images/tunisia/hero-floater-sidi-bou-said.jpg"
            alt="Vue pittoresque du village blanc et bleu de Sidi Bou Saïd en Tunisie"
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
            src="/images/tunisia/hero-floater-hammamet-beach.jpg"
            alt="Plage sereine de Hammamet en Tunisie avec du sable doré et des eaux bleues"
            width={192}
            height={256}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Background 3D Scene (réduit l'opacité) */}
      <div className="absolute inset-0 opacity-20">
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
                <Image src="/images/tunisia/hero-gallery-sahara-detail.jpg" alt="Dunes de sable majestueuses dans le Sahara Tunisien" layout="fill" objectFit="cover" className="rounded-2xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-2xl">
                  <h3 className="text-2xl font-bold text-white">Sahara Tunisien</h3>
                  <p className="text-sm text-white opacity-90">Aventure dans les dunes</p>
                </div>
              </motion.div>

              {/* Plages de Djerba */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="/images/tunisia/hero-gallery-djerba-beach.jpg" alt="Plage idyllique de Djerba avec sable blanc et mer turquoise" layout="fill" objectFit="cover" className="rounded-2xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-2xl">
                  <h4 className="text-lg font-bold text-white">Plages de Djerba</h4>
                </div>
              </motion.div>

              {/* Médina traditionnelle */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                className="relative h-48 rounded-2xl overflow-hidden shadow-xl"
              >
                <Image src="/images/tunisia/hero-gallery-medina-architecture.jpg" alt="Architecture traditionnelle d'une médina tunisienne avec des détails complexes" layout="fill" objectFit="cover" className="rounded-2xl" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 rounded-2xl">
                  <h4 className="text-lg font-bold text-white">Médinas Historiques</h4>
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
