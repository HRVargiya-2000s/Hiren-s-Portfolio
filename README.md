# 🚀 HIREN VARGIYA - Creative Developer Portfolio

A modern, interactive portfolio website showcasing projects, skills, experience, and open-source contributions. Built with React, Vite, and Framer Motion for stunning animations and smooth interactions.

## 🌟 Features

### **Navigation**
- **3D Interactive Logo**: Hover-responsive "HIREN VARGIYA" text that creates a 3D tilt effect following your cursor movement
- **Smooth Navigation**: Fixed navbar with quick links to all sections
- **Professional Styling**: Glassmorphism design with blur effects and gradients

### **Projects Section**
- **2-Column Layout**: Responsive card grid displaying all projects
- **Project Cards with**:
  - Large, bold project heading (2.2rem)
  - Subtitle in vibrant pink
  - One-line description (truncated with ellipsis)
  - Two Action Buttons:
    - **View More**: Opens detailed modal dialogue
    - **GitHub**: Direct link to repository
  
- **Interactive Modal Dialogue**:
  - Glossy, transparent background with backdrop blur
  - Centered on screen with proper z-indexing
  - Displays:
    - Project title and subtitle
    - Detailed about section
    - Key features (organized by category if applicable)
    - Technology stack with gradient badges
  - Smooth spring animations
  - Perfect circular close button
  - Hidden scrollbar for clean appearance

### **Projects Included**

#### 1. **FixItNow** - Citizen Issue Resolver
- **Description**: Urban-Company type platform for repair issues
- **Features for Users**: Secure login, issue reporting, tracking, DIY guides
- **Features for Workers**: Job discovery, acceptance, earnings stats, ratings
- **Tech**: HTML, CSS, JavaScript, Firebase Auth, Cloudinary
- **URL**: [GitHub](https://github.com/HRVargiya-2000s/fixItNow.git)

#### 2. **StacKit** - Q&A Platform
- **Description**: Lightweight collaborative learning platform
- **Features**: Simplified auth, Q&A system, voting, tagging, search & filtering, session persistence
- **Tech**: HTML, CSS, JavaScript, PHP, MySQL, RestAPI
- **URL**: [GitHub](https://github.com/HRVargiya-2000s/stackit---A-minimal-web-app-for-QnA.git)

#### 3. **StudyHub** - Classroom Study Portal
- **Description**: Secure collaborative platform for academic materials
- **Features**: Secure authentication, centralized management, cloud storage, class-based segregation, search & filtering
- **Tech**: React.js, Tailwind CSS, Material UI, Firebase
- **URL**: [GitHub](https://github.com/HRVargiya-2000s/StudyHub.git)

#### 4. **LDBuddy** - College Chatbot Assistant
- **Description**: Offline-friendly chatbot for college information
- **Features**: Profile storage with localStorage, FAQ-JSON-based QA, multi-chat handling, export chat
- **Tech**: HTML, CSS, JavaScript, LocalStorage, JSON
- **URL**: [GitHub](https://github.com/HRVargiya-2000s/LDBuddy.git)

### **Hackathons & Events**
- **CVM Hackathon 3.0** Badge with professional laptop icon
- **Icon**: Cyan-colored FontAwesome laptop icon
- **Technologies**: HTML, CSS, JS, HandleBars, MongoDB
- **Status**: Completed
- **Link**: LinkedIn post with more details

### **Experience**
- **Campus Ambassador** at CampusCrew
- **Timeline View**: Visual vertical timeline with gradient markers
- **Icon**: Cyan FontAwesome graduation cap
- **Responsibilities**: Event organization, student engagement, community building
- **Period**: Dec 2025 - Present

### **Open Source & Certifications**
- **OSCI - Open Source Contribution Initiative**
  - Icon: Code branch (FontAwesome)
  - Achievements: PR submissions, bug fixes, documentation
  - Period: Aug 15 - Sep 7, 2025

- **Google Cloud Arcade Facilitator Program**
  - Icon: Cloud (FontAwesome)
  - Focus: Cloud fundamentals, hands-on labs, peer facilitation
  - Status: Pending Completion (2025 Cohort-2)

## 🎨 Design Features

### **Color Scheme**
- **Primary Cyan**: `#00d4ff` - Main accent and interactive elements
- **Primary Pink/Magenta**: `#ff006e` - Highlights and secondary accents
- **Secondary Purple**: `#8338ec` - Tertiary accent
- **Background**: Dark gradient `rgba(15, 15, 35, 0.95)`

### **Visual Effects**
- **Glassmorphism**: Frosted glass effect with backdrop blur
- **Gradient Animations**: Animated gradient text on headings
- **3D Transforms**: Mouse-responsive 3D tilt effects
- **Smooth Transitions**: Framer Motion animations throughout
- **Floating Orbs**: Animated background gradient orbs

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Animation Library**: Framer Motion 12.23.26
- **Icons**: FontAwesome (Solid SVG Icons)
- **Styling**: CSS3 with modern features
- **3D Library**: Three.js 0.182.0

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx/css       # 3D logo navbar
│   ├── Projects.jsx/css         # Project cards & modal
│   ├── Hackathons.jsx/css       # Hackathon section
│   ├── Experience.jsx/css       # Timeline experience
│   ├── OpenSource.jsx/css       # Open source section
│   ├── Skills.jsx/css           # Skills showcase
│   ├── About.jsx/css            # About section
│   ├── Contact.jsx/css          # Contact section
│   ├── Home.jsx/css             # Hero section
│   ├── Footer.jsx/css           # Footer
│   └── App.jsx                  # Main app component
├── main.jsx                     # Entry point
├── index.css                    # Global styles
└── assets/                      # Images and resources
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project
cd Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build

# Preview production build
npm run preview
```

## 📱 Responsive Design

- **Desktop**: Full 2-column project grid, all features enabled
- **Tablet**: Responsive grid, touch-optimized interactions
- **Mobile**: Single column layout, optimized card sizes

## ✨ Key Features Breakdown

### Projects Modal
- **Size**: 550px max-width (optimized)
- **Animations**: Spring animation with scale transform
- **Content**: About, Features, Tech stack with hover effects
- **Accessibility**: Click outside to close, ESC key support

### Navigation Logo
- **Hover Effect**: 3D rotation following cursor
- **Size**: 1.8em, bold typography
- **Gradient**: Animated cyan → pink → purple
- **Interactivity**: Smooth return to center on mouse leave

### Card System
- **Minimum Height**: 280px for better proportion
- **Padding**: Optimized spacing (1rem top/bottom)
- **Typography**: 2.2rem bold heading, 0.75rem subtitle
- **Buttons**: Gradient "View More" + outline "GitHub"

## 🎯 Performance Optimizations

- Lazy loading with Framer Motion's viewport detection
- Optimized animations with will-change
- CSS transforms for smooth 3D effects
- Efficient grid layout with CSS Grid
- Minimal re-renders with React hooks

## 📄 License

This portfolio is created by Hiren Vargiya. All rights reserved.

## 🔗 Links

- **GitHub**: [HRVargiya-2000s](https://github.com/HRVargiya-2000s)
- **LinkedIn**: [Profile Link]
- **Portfolio**: [Live Demo]

---

**Last Updated**: December 2025
**Version**: 2.0 - Enhanced UI/UX with Interactive Components
