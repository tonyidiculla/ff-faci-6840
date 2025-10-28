'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ChartBarIcon,
  ClipboardDocumentCheckIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationTriangleIcon,
  CalendarIcon,
  UserGroupIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

export default function FacilityDashboard() {
  // Mock data for facility management
  const facilityStats = {
    totalSpaces: 145,
    occupiedSpaces: 128,
    availableSpaces: 17,
    activeWorkOrders: 23,
    completedThisMonth: 45,
    upcomingMaintenance: 12,
    equipmentStatus: {
      operational: 85,
      maintenance: 6,
      critical: 2
    }
  };

  const recentWorkOrders = [
    {
      id: 'WO-2025-001',
      title: 'HVAC System Maintenance',
      location: 'Surgery Suite A',
      priority: 'high',
      status: 'in-progress',
      assignedTo: 'John Smith',
      dueDate: '2025-10-30'
    },
    {
      id: 'WO-2025-002',
      title: 'Plumbing Repair',
      location: 'Examination Room 3',
      priority: 'medium',
      status: 'pending',
      assignedTo: 'Sarah Johnson',
      dueDate: '2025-11-02'
    },
    {
      id: 'WO-2025-003',
      title: 'Equipment Calibration',
      location: 'X-Ray Room',
      priority: 'low',
      status: 'scheduled',
      assignedTo: 'Mike Davis',
      dueDate: '2025-11-05'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      message: 'HVAC maintenance completed in Surgery Suite B',
      time: '2 hours ago',
      type: 'success'
    },
    {
      id: 2,
      message: 'Equipment inspection scheduled for tomorrow',
      time: '4 hours ago',
      type: 'info'
    },
    {
      id: 3,
      message: 'Critical alert: Water leak detected in basement',
      time: '6 hours ago',
      type: 'error'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-progress': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'scheduled': return 'text-green-600 bg-green-100';
      case 'completed': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="p-6 pt-20 lg:pt-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">
          Facility Management Dashboard
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Monitor and manage Furfield veterinary facility operations, maintenance, and space utilization
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircleIcon className="w-4 h-4 mr-1" />
            All Systems Operational
          </span>
          <span className="text-sm text-gray-500">
            Last updated: {new Date().toLocaleString()}
          </span>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <BuildingOfficeIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Spaces</dt>
                  <dd className="text-lg font-medium text-gray-900">{facilityStats.totalSpaces}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <WrenchScrewdriverIcon className="h-6 w-6 text-orange-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Work Orders</dt>
                  <dd className="text-lg font-medium text-gray-900">{facilityStats.activeWorkOrders}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Completed This Month</dt>
                  <dd className="text-lg font-medium text-gray-900">{facilityStats.completedThisMonth}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Upcoming Maintenance</dt>
                  <dd className="text-lg font-medium text-gray-900">{facilityStats.upcomingMaintenance}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Work Orders */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Recent Work Orders</h3>
              <Link 
                href="/work-orders"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                View all →
              </Link>
            </div>
            <div className="divide-y divide-gray-200">
              {recentWorkOrders.map((order) => (
                <div key={order.id} className="p-6 hover:bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900">{order.title}</h4>
                      <p className="text-sm text-gray-500 mt-1">{order.location} • Assigned to {order.assignedTo}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getPriorityColor(order.priority)}`}>
                        {order.priority}
                      </span>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-gray-500">
                    Due: {new Date(order.dueDate).toLocaleDateString()}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Equipment Status */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Equipment Status</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Operational</span>
                  <span className="text-sm font-medium text-green-600">{facilityStats.equipmentStatus.operational}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Under Maintenance</span>
                  <span className="text-sm font-medium text-yellow-600">{facilityStats.equipmentStatus.maintenance}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Critical Issues</span>
                  <span className="text-sm font-medium text-red-600">{facilityStats.equipmentStatus.critical}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Recent Activity</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-400' :
                      activity.type === 'error' ? 'bg-red-400' : 'bg-blue-400'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
            </div>
            <div className="p-6 space-y-3">
              <Link 
                href="/work-orders/new"
                className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <WrenchScrewdriverIcon className="h-5 w-5 mr-3 text-gray-400" />
                Create Work Order
              </Link>
              <Link 
                href="/maintenance"
                className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <ClipboardDocumentCheckIcon className="h-5 w-5 mr-3 text-gray-400" />
                Schedule Inspection
              </Link>
              <Link 
                href="/reports"
                className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <ChartBarIcon className="h-5 w-5 mr-3 text-gray-400" />
                View Reports
              </Link>
              <Link 
                href="/equipment"
                className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
              >
                <CogIcon className="h-5 w-5 mr-3 text-gray-400" />
                Manage Equipment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}