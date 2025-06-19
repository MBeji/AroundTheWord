# AroundTheWorld 🌍

**Collaborative Travel Experience Exchange Platform**

AroundTheWorld is a peer-powered travel platform connecting seasoned travelers and local experts with people seeking authentic, cost-efficient, and well-organized travel experiences. Transform your travel knowledge into income while helping others discover unforgettable adventures.

## 🎯 Project Overview

AroundTheWorld revolutionizes travel planning by creating a shared economy where users can:
- **Monetize** their detailed travel itineraries
- **Offer** localized experience packages (transportation, meals, lodging, tours)
- **Negotiate** prices directly with providers
- **Build** reputation through ratings and reviews
- **Earn** credits for quality contributions

## 🚀 Target Audience

- **Global Travelers** (budget-conscious to premium)
- **Digital Nomads** and remote workers
- **Backpackers** and experience-seekers
- **Local Experts** interested in tourism side-income
- **Travel Influencers** and micro-agents

## ✨ Key Features

### 🗺️ Marketplace
- User-generated travel itineraries
- Local experience packages
- Price negotiation system
- Secure booking and payments

### 🎨 Categories
Travel styles for every preference:
- 🏔️ Nature & Adventure
- 🏙️ City Exploration  
- 🎭 Cultural Immersion
- 🧘 Wellness & Relax
- ⚽ Sports & Activities
- ✨ Luxury Travel
- 💰 Budget Friendly
- 👨‍👩‍👧‍👦 Family Adventures

### 🔐 Trust & Safety
- Identity verification system
- Comprehensive ratings & reviews
- Secure payment processing
- In-app communication
- AI-powered quality checks

### 🎁 Rewards System
- Credit-based rewards for contributions
- Reputation building
- Community recognition

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** with React 19
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations

### Backend & Database
- **Prisma ORM** with PostgreSQL
- **NextAuth.js** for authentication
- **Stripe** for payments
- **Socket.io** for real-time features

### Maps & Location
- **Mapbox GL** for interactive maps
- **Geolocation APIs**

### Additional Tools
- **Lucide React** for icons
- **Date-fns** for date handling
- **Zod** for validation
- **React Hook Form** for forms

## 🏁 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- Stripe account (for payments)
- Mapbox account (for maps)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/around-the-world.git
   cd around-the-world
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Configure your `.env.local` with:
   ```env
   DATABASE_URL="postgresql://username:password@localhost:5432/aroundtheworld"
   NEXTAUTH_SECRET="your-secret-key"
   NEXTAUTH_URL="http://localhost:3000"
   STRIPE_SECRET_KEY="your-stripe-secret"
   STRIPE_PUBLISHABLE_KEY="your-stripe-publishable"
   MAPBOX_ACCESS_TOKEN="your-mapbox-token"
   ```

4. **Set up the database**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📱 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🌍 Market Context

### Industry Trends
- Global online travel market: **$475B in 2023** → **$1T+ by 2030**
- Growing demand for **DIY travel planning**
- **Millennials & Gen Z** prioritize authentic experiences
- **Peer recommendations** trusted more than traditional agencies

### Our Advantage
- **Direct peer-to-peer** connections
- **Negotiable pricing** vs fixed agency rates
- **Local expertise** for authentic experiences
- **Community-driven** quality assurance

## 🗂️ Project Structure

```
around-the-world/
├── src/
│   ├── app/                 # Next.js app directory
│   ├── components/          # Reusable components
│   │   ├── providers/       # Context providers
│   │   └── ui/             # UI components
│   └── lib/                # Utilities and configurations
├── prisma/                 # Database schema
├── public/                 # Static assets
└── docs/                   # Documentation
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: hello@aroundtheworld.com
- **Website**: [aroundtheworld.com](https://aroundtheworld.com)
- **Twitter**: [@AroundTheWorld](https://twitter.com/AroundTheWorld)

---

*Transforming travel from an agency-dominated model to a shared economy approach* 🚀
