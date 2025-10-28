'use client';import Image from "next/image";



import { useState } from 'react';export default function Home() {

import {  return (

  BuildingOfficeIcon,    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

  WrenchScrewdriverIcon,      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

  ChartBarIcon,        <Image

  ClipboardDocumentCheckIcon,          className="dark:invert"

  CheckCircleIcon,          src="/next.svg"

  ClockIcon,          alt="Next.js logo"

  CogIcon,          width={100}

} from '@heroicons/react/24/outline';          height={20}

          priority

export default function FacilityManagementPage() {        />

  const [selectedTab, setSelectedTab] = useState('dashboard');        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">

  // Mock data for demonstration            To get started, edit the page.tsx file.

  const facilityStats = {          </h1>

    totalSpaces: 24,          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

    activeWorkOrders: 8,            Looking for a starting point or more instructions? Head over to{" "}

    completedThisMonth: 45,            <a

    upcomingMaintenance: 12,              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    equipmentStatus: {              className="font-medium text-zinc-950 dark:text-zinc-50"

      operational: 85,            >

      maintenance: 6,              Templates

      critical: 2            </a>{" "}

    }            or the{" "}

  };            <a

              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

  const workOrders = [              className="font-medium text-zinc-950 dark:text-zinc-50"

    { id: 1, title: 'AC Unit Repair - Room 301', priority: 'high', status: 'in-progress', assignee: 'John Smith', due: '2025-10-30' },            >

    { id: 2, title: 'Plumbing Check - Surgery Suite', priority: 'medium', status: 'pending', assignee: 'Mary Johnson', due: '2025-11-02' },              Learning

    { id: 3, title: 'Equipment Calibration - X-Ray Room', priority: 'low', status: 'scheduled', assignee: 'Mike Wilson', due: '2025-11-05' },            </a>{" "}

  ];            center.

          </p>

  const getPriorityColor = (priority: string) => {        </div>

    switch (priority) {        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

      case 'high': return 'text-red-600 bg-red-100';          <a

      case 'medium': return 'text-yellow-600 bg-yellow-100';            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"

      case 'low': return 'text-green-600 bg-green-100';            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

      default: return 'text-gray-600 bg-gray-100';            target="_blank"

    }            rel="noopener noreferrer"

  };          >

            <Image

  const getStatusColor = (status: string) => {              className="dark:invert"

    switch (status) {              src="/vercel.svg"

      case 'in-progress': return 'text-blue-600 bg-blue-100';              alt="Vercel logomark"

      case 'pending': return 'text-yellow-600 bg-yellow-100';              width={16}

      case 'scheduled': return 'text-green-600 bg-green-100';              height={16}

      case 'completed': return 'text-gray-600 bg-gray-100';            />

      default: return 'text-gray-600 bg-gray-100';            Deploy Now

    }          </a>

  };          <a

            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"

  return (            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">            target="_blank"

      {/* Header */}            rel="noopener noreferrer"

      <div className="bg-white shadow-sm border-b">          >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">            Documentation

          <div className="flex justify-between items-center py-6">          </a>

            <div>        </div>

              <h1 className="text-3xl font-bold text-gray-900">🏢 Facility Management</h1>      </main>

              <p className="mt-1 text-sm text-gray-500">    </div>

                Furfield Veterinary Facility Operations & Maintenance  );

              </p>}

            </div>
            <div className="flex items-center space-x-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                <CheckCircleIcon className="w-4 h-4 mr-1" />
                All Systems Operational
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Work Orders */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Active Work Orders</h3>
              </div>
              <div className="divide-y divide-gray-200">
                {workOrders.map((order) => (
                  <div key={order.id} className="p-6 hover:bg-gray-50">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900">{order.title}</h4>
                        <p className="text-sm text-gray-500 mt-1">Assigned to {order.assignee}</p>
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
                      Due: {new Date(order.due).toLocaleDateString()}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-6 py-3 bg-gray-50 text-right">
                <button className="text-sm text-blue-600 hover:text-blue-500">View all work orders →</button>
              </div>
            </div>
          </div>

          {/* Equipment Status */}
          <div className="space-y-6">
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

            {/* Quick Actions */}
            <div className="bg-white shadow rounded-lg">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-900">Quick Actions</h3>
              </div>
              <div className="p-6 space-y-3">
                <button className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <WrenchScrewdriverIcon className="h-5 w-5 mr-3 text-gray-400" />
                  Create Work Order
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <ClipboardDocumentCheckIcon className="h-5 w-5 mr-3 text-gray-400" />
                  Schedule Inspection
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <ChartBarIcon className="h-5 w-5 mr-3 text-gray-400" />
                  View Reports
                </button>
                <button className="w-full flex items-center px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-md">
                  <CogIcon className="h-5 w-5 mr-3 text-gray-400" />
                  System Settings
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}