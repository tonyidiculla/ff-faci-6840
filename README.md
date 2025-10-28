# FF-FACI-6840 - Furfield Facility Management

🏢 **Comprehensive Veterinary Facility Operations & Maintenance Management System**

## Overview

The Furfield Facility Management application is a specialized module within the Furfield ecosystem designed to handle all aspects of veterinary facility operations, maintenance, and compliance.

## 🚀 Features

### Core Functionality
- **Work Order Management** - Create, assign, and track maintenance requests
- **Equipment Monitoring** - Real-time equipment status and performance tracking
- **Space Management** - Optimize facility layout and room utilization
- **Preventive Maintenance** - Scheduled maintenance workflows and reminders
- **Compliance Tracking** - Regulatory compliance monitoring and reporting

### Dashboard Capabilities
- Real-time facility statistics
- Active work order overview
- Equipment health monitoring
- Maintenance scheduling calendar
- Priority-based task management

## 🛠️ Technical Details

- **Framework**: Next.js 16.0.0 with TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Heroicons
- **Port**: 6840
- **Development Server**: http://localhost:6840

## 📦 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/tonyidiculla/ff-faci-6840.git
   cd ff-faci-6840
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   # or use the convenience script
   ./start-service.sh
   ```

4. **Access the application**:
   - Direct URL: http://localhost:6840
   - Via HMS Portal: http://localhost:6900 → Facility Management

## 🎯 Integration with Furfield Ecosystem

### HMS Navigation Integration
The Facility Management app is integrated into the HMS navigation structure:
- **Location**: HMS Sidebar → Facility Management (expandable)
- **Submenu Items**:
  - Dashboard (Main facility overview)
  - Work Orders (Maintenance requests)
  - Equipment (Asset management)
  - Maintenance (Scheduled tasks)
  - Compliance (Regulatory tracking)

### Service Architecture
- **Port**: 6840 (replaces the removed rostering service)
- **Service Name**: ff-faci-6840
- **Integration**: Part of the HMS application portfolio
- **Authentication**: Integrated with Furfield auth system

## 📊 Key Metrics Tracked

- **Total Facility Spaces**: 24 rooms/areas
- **Active Work Orders**: Real-time tracking
- **Monthly Completion Rate**: Performance metrics
- **Equipment Status**: Operational/Maintenance/Critical
- **Upcoming Maintenance**: Proactive scheduling

## 🔧 Development

### Scripts Available
- `npm run dev` - Start development server on port 6840
- `npm run build` - Build production version
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Project Structure
```
ff-faci-6840/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main facility dashboard
│   │   └── layout.tsx        # App layout
│   └── components/           # Reusable components
├── public/                   # Static assets
├── start-service.sh         # Development startup script
└── package.json            # Dependencies and scripts
```

## 🔗 Related Services

This facility management app replaces the previous rostering service (ff-rost-6840) and provides enhanced facility operations management capabilities for veterinary practices.

## 📝 License

Part of the Furfield Veterinary Management System
© 2025 Furfield Technologies
