#!/bin/bash

# Furfield Facility Management Service Start Script
# Port: 6840

echo "🏢 Starting Furfield Facility Management Service..."
echo "📍 Port: 6840"
echo "🔗 URL: http://localhost:6840"
echo ""

# Check if port 6840 is already in use
if lsof -Pi :6840 -sTCP:LISTEN -t >/dev/null ; then
    echo "⚠️  Port 6840 is already in use. Stopping existing process..."
    lsof -ti:6840 | xargs kill -9
    sleep 2
fi

# Start the development server
echo "🚀 Starting development server..."
npm run dev

echo "✅ Facility Management Service started successfully!"
echo "📱 Access the application at: http://localhost:6840"