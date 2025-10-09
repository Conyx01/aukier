# Aukier - African Talent Marketplace

> **Building Africa's Trust-Based Talent Infrastructure**

Aukier is not just another gig platform. It's a comprehensive talent infrastructure designed specifically for African markets, addressing real local needs through culturally-aware trust systems, mobile money integration, and community-driven verification.

## 🌍 **Why Aukier Exists**

### The African Reality
- **High unemployment** → Many skilled people lack digital visibility
- **Fragmented talent pools** → Skilled tradespeople aren't connected to opportunities  
- **Trust gap** → People fear hiring strangers due to safety and quality concerns
- **Payment challenges** → Cash-dependent economy with limited online payment adoption
- **Mobile-first continent** → Most access is via smartphones, not desktops
- **Cultural trust networks** → Word-of-mouth and local recommendations drive decisions
- **Global platforms are distant** → Upwork/Fiverr optimized for global digital freelancers

### Our Solution
Aukier builds **African talent infrastructure** by combining:
- **Trust Layer**: Community endorsements, family vouches, local references
- **Payment Layer**: Mobile money integration (Mpamba, Airtel Money, TNM)
- **Discovery Layer**: Location-aware, community-weighted search
- **Cultural Layer**: Respects local customs and trust mechanisms

## 🏗️ **Architecture**

### Core Design Pillars

1. **Trust-First Design**
   - Community endorsements from neighbors, church members, family
   - Local business references and cash transaction history
   - Multi-layered verification (phone, ID, address, community)
   - Trust scores based on African social structures

2. **Mobile Money Integration**
   - Primary: Mpamba, Airtel Money, TNM Mobile Money
   - Escrow system for trust building
   - Milestone-based payments
   - Offline-friendly payment flows

3. **Location-Aware Discovery**
   - Proximity-based search (walking distance)
   - Community-weighted recommendations
   - Local business endorsements
   - Cultural trust signals

4. **Progressive Web App**
   - Mobile-first responsive design
   - Offline capability for poor connectivity
   - Fast loading on 2G/3G networks
   - Native app-like experience

## 🚀 **Features**

### For Aukiers (Workers)
- **Enhanced Profiles**: Portfolio, skills, availability, trust scores
- **Community Verification**: Family vouches, neighbor endorsements
- **Mobile Money Payments**: Instant, secure, local payment methods
- **Location-Based Discovery**: Find nearby opportunities
- **Trust Building**: Build reputation through community connections

### For Clients
- **Trusted Workers**: Community-verified, locally recommended
- **Easy Discovery**: Find workers by location, skill, trust level
- **Secure Payments**: Escrow protection, milestone payments
- **Local Focus**: Workers from your area, walking distance
- **Cultural Fit**: Workers who understand local needs

### For Communities
- **Local Economic Growth**: Keep money in local communities
- **Skill Development**: Connect skilled people to opportunities
- **Trust Networks**: Leverage existing social structures
- **Digital Inclusion**: Bring offline workers online

## 🛠️ **Technology Stack**

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS 4, shadcn/ui components
- **State Management**: React hooks, context
- **Payments**: Mobile money APIs (Malawi)
- **Location**: Geolocation APIs, distance calculations
- **Offline**: Service workers, local storage
- **Deployment**: Vercel (optimized for Africa)

## 📱 **Mobile Money Integration**

### Supported Providers (Malawi)
- **Mpamba** (Airtel) - Primary
- **Airtel Money** - Primary  
- **TNM Mobile Money** - Primary
- **Bank Transfer** - Secondary
- **Cash on Delivery** - Tertiary (with escrow)

### Payment Flow
1. Client selects mobile money provider
2. Payment held in escrow
3. Work completed in milestones
4. Client approves each milestone
5. Funds released to Aukier
6. Dispute resolution available

## 🔒 **Trust System**

### Verification Levels
- **Basic**: Phone, email, profile photo
- **Enhanced**: National ID, address verification
- **Community**: Neighbor endorsements, local references
- **Cultural**: Family vouches, religious endorsements
- **Business**: Local business references, cash transactions

### Trust Scores
- **Community Trust**: Based on local endorsements
- **Reputation Score**: Historical performance
- **Overall Score**: Weighted combination (0-100)

## 🌍 **Localization**

### Current Markets
- **Malawi**: Primary market (Lilongwe, Blantyre, Mzuzu)
- **Currency**: Malawian Kwacha (MWK)
- **Languages**: English, Chichewa
- **Mobile Money**: Mpamba, Airtel Money, TNM

### Future Expansion
- **Zambia**: Lusaka, Ndola
- **Tanzania**: Dar es Salaam, Arusha
- **Kenya**: Nairobi, Mombasa
- **Ghana**: Accra, Kumasi

## 🚀 **Getting Started**

### Prerequisites
- Node.js 18+
- pnpm (recommended)
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/your-org/aukier.git
cd aukier

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Environment Setup
```bash
# Copy environment variables
cp .env.example .env.local

# Configure mobile money APIs
MOBILE_MONEY_MPAMBA_API_KEY=your_key
MOBILE_MONEY_AIRTEL_API_KEY=your_key
MOBILE_MONEY_TNM_API_KEY=your_key
```

## 📊 **Project Structure**

```
aukier/
├── app/                    # Next.js app router
│   ├── aukier/[id]/       # Worker profiles
│   ├── client/[id]/       # Client profiles
│   ├── post-job/          # Job posting
│   └── subscription/       # Subscription plans
├── components/
│   ├── trust/             # Trust system components
│   ├── payments/          # Payment integration
│   ├── discovery/         # Location-based discovery
│   ├── community/         # Community features
│   └── ui/                # Reusable UI components
├── lib/
│   ├── types/             # TypeScript definitions
│   ├── utils/             # Utility functions
│   └── api/               # API integrations
└── public/                # Static assets
```

## 🤝 **Contributing**

We welcome contributions that help us better serve African markets:

1. **Trust Systems**: Improve verification and community features
2. **Mobile Money**: Add new payment providers
3. **Localization**: Support new languages and regions
4. **Offline Support**: Enhance offline capabilities
5. **Community Features**: Build stronger local connections

### Development Guidelines
- Follow the design philosophy in `CLAUDE.md`
- Write self-explanatory code
- Test with real African user workflows
- Consider mobile-first, low-bandwidth scenarios
- Respect cultural contexts and local customs

## 📄 **License**

MIT License - see [LICENSE](LICENSE) for details.

## 🌟 **Vision**

Aukier aims to become the **trust infrastructure** for African talent markets - not just a platform, but the foundation that enables millions of skilled Africans to find meaningful work while building stronger, more connected communities.

**We're not building another Upwork. We're building Africa's talent future.**

---

*Built with ❤️ for Africa*
