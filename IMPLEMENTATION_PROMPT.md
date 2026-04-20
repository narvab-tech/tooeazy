# TooEazy Website Overhaul - Complete Implementation Prompt

## Overview
This document contains the complete implementation plan for the TooEazy website revisions based on the `Web-amendments_20260309-2000.pptx` document. The website is a React + TypeScript + Vite project with GSAP animations, Tailwind CSS, and shadcn/ui components.

**Repository:** https://github.com/narvab-tech/tooeazy.git

---

## PHASE 1: Brand & Design System Updates

### 1.1 Color Palette Update
Update `src/index.css` with new brand colors:

```css
/* NEW Brand Colors */
--too-navy: #001450;        /* Deep Navy - backgrounds, header, footer */
--too-green: #50BE00;       /* tooeazy Green - buttons, highlights, headings */
--too-sand: #E6E0B8;        /* Soft Sand/Gold - subtext, icons, separators */
--too-white: #FFFFFF;       /* Content background */
--too-grey-light: #F5F6F8;  /* Section backgrounds */
--too-grey-dark: #333333;   /* Body text */
```

**Replace existing accent color (#2F6BFF) with tooeazy Green (#50BE00) throughout all components.**

### 1.2 Typography Update
Update fonts in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=Open+Sans:wght@300;400;500;600&display=swap');

/* Headings: Poppins */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}

/* Body: Open Sans */
body {
  font-family: 'Open Sans', sans-serif;
}
```

### 1.3 Button Style Update
Update button styles with new brand colors and 8px border-radius:

```css
.btn-primary {
  background-color: #50BE00;
  border-radius: 8px;
  /* hover state: #3F9C00 */
}
```

### 1.4 Global: Remove ChatGPT Long Hyphens
Search and replace all instances of "—" (em dash) with "-" or remove where unnecessary across ALL pages.

---

## PHASE 2: Homepage Revisions (`src/pages/Home.tsx`)

### 2.1 Hero Section Updates
**Current:** "Move to Australia. Smarter from day one."
**New messaging:**
- Headline: "Turn your visa into a functioning life in Australia."
- Subheadline: Include "To call Australia, 'Home'"
- CTA: "Book your first consult here. No obligations, and it's on us."

**Remove/Replace:**
- Remove "95%" success rate stat (too early to claim)
- Replace with: "Up to X times faster with your progress" or similar metric

**Add key questions carousel/grid:**
1. "I've arrived. Now what?"
2. "How do I make this work long-term?"
3. "Am I really doing this?"

### 2.2 Value Proposition Section
**Add new section with:**
- Headline: "A life architect, not a relocation helper."
- Body: "Most services focus on flights, shipping and checklists after you've already decided. TooEazy starts earlier: we design the life you are moving into."
- Supporting: "We work alongside your migration agent and other licensed professionals to reduce risks, avoid costly mistakes, and shorten the 'lost' months after landing."

**Add "Avoid" bullet points:**
- "Avoid suburb and school mismatches."
- "Avoid months of admin drift after arrival."
- "Make the right move decision before spending big."

### 2.3 Framework Section Updates
Rename service cards to use **D.A.S.H Framework**:
- **D**ecide
- **A**rrive (rename from "Land")
- **S**ettle
- **H**ome (bundle)

### 2.4 Hero Image
Replace with Pexels migration/Sydney imagery:
- Suggested: Sydney Opera House, Harbour Bridge, diverse families, professional consultations
- **Pexels search:** "Sydney Australia", "diverse family Australia", "migration journey"

---

## PHASE 3: DECIDE Page Revisions (`src/pages/Decide.tsx`)

### 3.1 Hero Section
**New headline:** "Make the right move decision."
**New subhead:** "Before you invest in visas, flights and shipping, we help you test whether Australia – and specific regions – truly align with your lifestyle, finances and family needs."

### 3.2 Services Update
Replace current services with:

```typescript
const services = [
  {
    title: 'Lifestyle Consult',
    description: 'Compare your current life to realistic Australian scenarios.'
  },
  {
    title: 'Visa Consult (via MARA Partner)',
    description: 'Clarify pathways, risks and timing without overpromising.'
  },
  {
    title: 'Region & Suburb Shortlisting',
    description: 'Narrow 10–15 options down to 2–3 viable targets.'
  },
  {
    title: 'School Feasibility',
    description: 'Understand public vs private, zoning, fees and waitlists for your children.'
  }
];
```

### 3.3 Target Audience Section
**Add "Who this is for" block:**
- Skilled workers deciding between Australia and another country
- Families unsure which city or suburb makes sense for schooling
- Employer-sponsored migrants wanting clarity before signing contracts

### 3.4 MARA Disclaimer
**Add prominent disclaimer:**
> "Migration advice is provided only through or under the supervision of a MARA-registered agent. We never guarantee visa outcomes."

---

## PHASE 4: ARRIVE Page (Rename from Land) (`src/pages/Land.tsx`)

### 4.1 Rename Page
- Rename file: `Land.tsx` → `Arrive.tsx`
- Update all route references in `App.tsx`
- Update navigation links

### 4.2 Hero Section
**New headline:** "Arrive ready."
**New subhead:** "We help you arrive with core life-admin already planned, so you can focus on settling in—not spending weeks untangling the basics."

### 4.3 Services Update
```typescript
const services = [
  {
    title: 'Bank Setup Guidance',
    description: 'Understand account types, required documents and when to open from overseas vs onshore.'
  },
  {
    title: 'Mobile & eSIM',
    description: 'Pick options that work from day one, avoid unexpected roaming and data surprises.'
  },
  {
    title: 'TFN Guidance',
    description: 'Know when and how to apply so your income is taxed correctly from the start.'
  },
  {
    title: 'Transport Cards',
    description: 'Understand Opal/myki/Go etc., and plan routes for work and school.'
  },
  {
    title: 'Health Insurance',
    description: 'Navigate overseas visitor cover, private policies and how they interact with Medicare eligibility.'
  },
  {
    title: 'Cargo & Airport Transfers',
    description: 'Plan what to ship, what to buy on arrival, and how you physically move from airport to first home.'
  }
];
```

### 4.4 Financial Disclaimer
**Add at bottom of page:**
> "All banking and insurance information is general in nature and not financial advice. You should obtain independent financial advice before making decisions."

### 4.5 CTA Button
Add: **"Prepare for day one"** button after service bullet list

---

## PHASE 5: SETTLE Page Revisions (`src/pages/Settle.tsx`)

### 5.1 Hero Section
**New headline:** "Build stability, community, and long-term advantage."
**New subhead:** "Once you've landed, we help you move from 'temporary survival mode' to a stable, sustainable life that feels like home."

### 5.2 Services - Group by Theme
```typescript
const serviceGroups = [
  {
    subheading: 'Suburb and Home',
    services: [
      {
        title: 'Suburb Strategy',
        description: 'Match commute, budget, schools and lifestyle rather than chasing random listings.'
      },
      {
        title: 'Accommodation Strategy',
        description: 'Understand renting rules, inspections, applications and typical costs.'
      }
    ]
  },
  {
    subheading: 'Family and Health',
    services: [
      {
        title: 'Schooling and Daycare',
        description: 'Clarify options, enrolment steps and realistic timelines.'
      },
      {
        title: 'Medicare Guidance',
        description: 'Understand eligibility, enrolment and how it works with any private cover.'
      }
    ]
  },
  {
    subheading: 'Work and Mobility',
    services: [
      {
        title: 'Resume & Job Strategy',
        description: 'Adapt your CV, LinkedIn and approach for the Australian market.'
      },
      {
        title: 'Driving & Car',
        description: 'Licensing, buying vs leasing, and what to expect on the road.'
      }
    ]
  }
];
```

### 5.3 Outcome Block
**Add "From → To" transformation statements:**
1. "From: guessing suburbs on Google Maps → To: a shortlist you understand and feel confident about."
2. "From: scattered admin tasks → To: a clear sequence with support."
3. "From: feeling like a visitor → To: feeling like a local in your own routine."

### 5.4 CTA
**Add button:** "Plan your settlement"

---

## PHASE 6: PACKAGES Page Revisions (`src/pages/Packages.tsx`)

### 6.1 Header Update
**Add disclaimer at top:**
> "Choose the level of support that fits your situation. All packages are advisory/concierge only and work alongside your professional advisors."

### 6.2 Package Cards - Complete Rewrite

```typescript
const packages = [
  {
    name: 'DECIDE',
    forStatement: 'If you\'re still deciding whether, when or where to move.',
    price: '600 – 900',
    priceNote: 'Indicative (final quote after discovery call)',
    features: [
      'Lifestyle consult',
      'Visa clarity via MARA partner',
      'Region & suburb shortlist',
      'School feasibility snapshot'
    ],
    cta: 'Book DECIDE package'
  },
  {
    name: 'ARRIVE',
    forStatement: 'If you\'ve committed to moving and want day-one readiness.',
    price: '1,200 – 1,500',
    priceNote: 'Indicative (final quote after discovery call)',
    features: [
      'Bank, mobile, TFN and transport guidance',
      'Health insurance overview',
      'Cargo and airport transfer planning'
    ],
    cta: 'Book ARRIVE package'
  },
  {
    name: 'SETTLE',
    forStatement: 'If you\'re landing soon or recently arrived and want stability.',
    price: '1,800 – 2,500',
    priceNote: 'Indicative (final quote after discovery call)',
    features: [
      'Suburb and accommodation strategy',
      'Schooling/daycare path',
      'Medicare guidance',
      'Resume and job strategy',
      'Driving/car guidance'
    ],
    cta: 'Book SETTLE package'
  },
  {
    name: 'HOME BUNDLE',
    forStatement: 'End-to-end support from first thoughts to feeling at home.',
    price: 'Custom quote',
    priceNote: 'After discovery call',
    features: [
      'DECIDE + ARRIVE + SETTLE combined',
      'Priority support',
      'Extended guidance period'
    ],
    cta: 'Discuss a full path',
    isBundle: true
  }
];
```

### 6.3 Visual Updates
- Remove "Most Popular" highlighting (or apply consistently)
- Align all buttons
- Clean up whitespace

---

## PHASE 7: HOW IT WORKS Page Revisions (`src/pages/HowItWorks.tsx`)

### 7.1 Add "What You Receive" Box
```typescript
const deliverables = [
  'Written summary of key decisions and recommendations',
  'Links and resources relevant to your chosen city/region',
  'Clear next actions and timing'
];
```

### 7.2 Add FAQ Preview Section
```typescript
const faqPreview = [
  {
    question: 'Do you guarantee visas or jobs?',
    answer: 'No, and we never will. We provide guidance and strategy only.'
  },
  {
    question: 'Are you a migration agent?',
    answer: 'tooeazy is a life and settlement advisory. Migration advice is provided only by MARA-registered agents we collaborate with.'
  }
];
```

---

## PHASE 8: LEGAL Page Revisions (`src/pages/Legal.tsx`)

### 8.1 Disclaimer Sections
Add/update these disclaimer blocks:

**Advisory Nature:**
> "tooeazy operates as an advisory and concierge service. We do not replace licensed professionals such as migration agents, lawyers, financial advisers or real estate agents."

**Migration Disclaimer:**
> "Any migration advice is provided only by or under the supervision of a MARA-registered migration agent. We do not guarantee visa approvals or processing times."

**Financial Disclaimer:**
> "Our information on banking and insurance is general only. It does not take into account your personal objectives, financial situation or needs. You should seek independent financial advice."

**Settlement Disclaimer:**
> "We provide best-efforts advice on housing, schooling and employment but cannot guarantee availability, pricing, enrolments or job offers."

---

## PHASE 9: CONTACT & ABOUT Page (`src/pages/Contact.tsx`)

### 9.1 Add "About" Section
**New emotional storytelling section:**

**Headline:** "Because the Journey Doesn't End With the Visa"

**Body copy:**
> For many people, the hardest part of migration begins after the visa is granted. There are a thousand small questions. Where to live. How to start. Who to trust. It can feel like stepping into the unknown.
>
> In Australia, we have a quiet belief about moments like this: **Mates help mates.**
>
> A mate shows up. A mate helps you figure things out. A mate stands beside you when things are uncertain.
>
> It's a spirit Australians know well. Because here, we believe something simple: No job is too tough when mates help each other.
>
> Bushfires, floods, setbacks, unexpected turns: Australians face them together, pick themselves up, and move forward. Sometimes with resilience. Sometimes with humour. Often with the quiet phrase: "It's alright mate, we'll sort it out."
>
> **tooeazy was built with that same spirit.**
>
> We're here to help you navigate the messy middle after the visa success—turning complexity into clarity and making the journey ahead feel a little more manageable. Step by step. Like a trusted guide. And a good Aussie mate beside you.

### 9.2 Address
**Note:** Address needs confirmation from Jai + Manoji (placeholder for now)

---

## PHASE 10: Footer Update (`src/components/Layout.tsx`)

### 10.1 Add Spirit Message
**Add to footer:**
> "The Spirit Behind tooeazy: In Australia, there's a belief that no challenge is too big when mates help each other. Through fires, floods, setbacks, and new beginnings, Australians face life with resilience, humour, and quiet confidence. tooeazy reflects that same spirit: helping make what can feel complicated after a visa success a little easier, a little clearer, and a lot more manageable. Because sometimes all you need is the right guidance… and a good mate beside you."

### 10.2 Footer Color
Update footer background to Deep Navy `#001450`

---

## PHASE 11: Image Replacements

### 11.1 Pexels Images to Download
Use these search terms on Pexels.com and download high-quality images:

| Current Image | Pexels Search | Usage |
|---------------|---------------|-------|
| home_hero.jpg | "Sydney Opera House sunset", "diverse family Australia" | Homepage hero |
| decide_consultation.jpg | "professional consultation diverse", "family planning meeting" | Decide page |
| land_arrival.jpg | "airport arrival family", "Sydney airport" | Arrive page |
| settle_home.jpg | "suburban house Australia", "family home Australia" | Settle page |
| contact_support.jpg | "friendly customer support", "video call consultation" | Contact page |

### 11.2 New Images Needed
- Australian landmarks background (subtle watermarks)
- Diverse migrant families
- Sydney skyline variants
- Professional consultation scenes

---

## PHASE 12: Navigation Updates

### 12.1 Route Updates
In `App.tsx`, update:
```typescript
// Rename /land to /arrive
<Route path="/arrive" element={<Layout title="Arrive" description="..."><Arrive /></Layout>} />
```

### 12.2 Navigation Labels
In `Layout.tsx`, update navLinks:
```typescript
const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/decide', label: 'Decide' },
  { path: '/arrive', label: 'Arrive' },  // Changed from 'Land'
  { path: '/settle', label: 'Settle' },
  { path: '/packages', label: 'Packages' },
  { path: '/how-it-works', label: 'How It Works' },
  { path: '/legal', label: 'Legal' },
  { path: '/contact', label: 'Contact' },
];
```

---

## PHASE 13: Icon System

### 13.1 Icon Style Guidelines
- Use line icons only (not filled)
- Simple and minimal
- Slightly rounded corners
- Source: Lucide React (already installed), Feather Icons, or Heroicons

### 13.2 Audit Current Icons
Review all pages for icon consistency and replace any that don't match the line icon style.

---

## Implementation Checklist

### Brand System
- [ ] Update color palette to new brand colors
- [ ] Replace blue (#2F6BFF) with green (#50BE00) throughout
- [ ] Update typography to Poppins/Open Sans
- [ ] Update button border-radius to 8px
- [ ] Remove all "—" em dashes

### Pages
- [ ] Homepage - complete rewrite with new messaging
- [ ] Decide - update services and add disclaimers
- [ ] Land → Arrive - rename and update content
- [ ] Settle - group services by theme, add outcomes
- [ ] Packages - complete rewrite with 4 packages
- [ ] How It Works - add deliverables and FAQ preview
- [ ] Legal - add all disclaimer sections
- [ ] Contact - add "About" storytelling section

### Components
- [ ] Footer - add spirit message and update color
- [ ] Navigation - update route for Arrive

### Assets
- [ ] Download and replace images from Pexels
- [ ] Audit icons for consistency

---

## Git Workflow

```bash
# Fork and clone
git clone https://github.com/narvab-tech/tooeazy.git
cd tooeazy

# Create feature branch
git checkout -b feature/website-revisions-march-2026

# After all changes
git add .
git commit -m "feat: complete website revisions per March 2026 amendments"
git push origin feature/website-revisions-march-2026

# Create Pull Request to narvab-tech/tooeazy main branch
```

---

## Notes for Implementation

1. **Test thoroughly** after each phase before moving to the next
2. **Maintain GSAP animations** - they should work with new content
3. **Mobile responsiveness** - verify all changes work on mobile
4. **SEO** - update meta descriptions for renamed pages
5. **Accessibility** - ensure color contrast meets WCAG standards with new palette
6. **Performance** - optimize new Pexels images before adding

---

*Generated from Web-amendments_20260309-2000.pptx*
