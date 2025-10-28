'use client';

import { useState } from 'react';
import {
  ChartBarIcon,
  DocumentArrowDownIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  CogIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from '@heroicons/react/24/outline';

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [selectedReport, setSelectedReport] = useState('overview');

  // Mock data for reports
  const reportData = {
    overview: {
      totalWorkOrders: 156,
      completedWorkOrders: 134,
      avgCompletionTime: 2.8, // days
      totalCost: 45750,
      equipmentUptime: 96.2, // percentage
      spaceUtilization: 78.5, // percentage
      trends: {
        workOrders: 12.5, // percentage change
        completionTime: -8.3,
        cost: 15.2,
        uptime: 2.1
      }
    },
    workOrdersByStatus: [
      { status: 'Completed', count: 134, percentage: 85.9 },
      { status: 'In Progress', count: 12, percentage: 7.7 },
      { status: 'Pending', count: 8, percentage: 5.1 },
      { status: 'Cancelled', count: 2, percentage: 1.3 }
    ],
    workOrdersByPriority: [
      { priority: 'High', count: 23, percentage: 14.7 },
      { priority: 'Medium', count: 87, percentage: 55.8 },
      { priority: 'Low', count: 46, percentage: 29.5 }
    ],
    workOrdersByCategory: [
      { category: 'HVAC', count: 45, cost: 12500 },
      { category: 'Plumbing', count: 38, cost: 8750 },
      { category: 'Electrical', count: 32, cost: 11200 },
      { category: 'Equipment', count: 28, cost: 9800 },
      { category: 'Cleaning', count: 13, cost: 3500 }
    ],
    monthlyTrends: [
      { month: 'Jan', workOrders: 18, cost: 4200, avgTime: 3.2 },
      { month: 'Feb', workOrders: 22, cost: 5100, avgTime: 2.9 },
      { month: 'Mar', workOrders: 19, cost: 4800, avgTime: 3.1 },
      { month: 'Apr', workOrders: 25, cost: 6200, avgTime: 2.7 },
      { month: 'May', workOrders: 21, cost: 4900, avgTime: 2.8 },
      { month: 'Jun', workOrders: 23, cost: 5400, avgTime: 2.6 },
      { month: 'Jul', workOrders: 28, cost: 6800, avgTime: 2.5 },
      { month: 'Aug', workOrders: 24, cost: 5600, avgTime: 2.9 },
      { month: 'Sep', workOrders: 26, cost: 6100, avgTime: 2.8 },
      { month: 'Oct', workOrders: 30, cost: 7200, avgTime: 2.4 }
    ],
    equipmentPerformance: [
      { equipment: 'HVAC Systems', uptime: 98.5, incidents: 2, lastMaintenance: '2025-10-15' },
      { equipment: 'X-Ray Machine', uptime: 95.2, incidents: 3, lastMaintenance: '2025-09-20' },
      { equipment: 'Ultrasound', uptime: 97.8, incidents: 1, lastMaintenance: '2025-10-10' },
      { equipment: 'Surgical Laser', uptime: 99.1, incidents: 1, lastMaintenance: '2025-10-05' },
      { equipment: 'Autoclave', uptime: 88.7, incidents: 5, lastMaintenance: '2025-10-20' },
      { equipment: 'Centrifuge', uptime: 96.4, incidents: 2, lastMaintenance: '2025-09-30' }
    ],
    spaceUtilization: [
      { space: 'Surgery Suite A', utilization: 92, avgOccupancy: 3.7, capacity: 4 },
      { space: 'Surgery Suite B', utilization: 88, avgOccupancy: 3.5, capacity: 4 },
      { space: 'Exam Room 1', utilization: 75, avgOccupancy: 2.3, capacity: 3 },
      { space: 'Exam Room 2', utilization: 82, avgOccupancy: 2.5, capacity: 3 },
      { space: 'X-Ray Room', utilization: 68, avgOccupancy: 1.4, capacity: 2 },
      { space: 'Laboratory', utilization: 85, avgOccupancy: 1.7, capacity: 2 }
    ],
    costAnalysis: {
      labor: 28500,
      parts: 12750,
      external: 4500,
      breakdown: [
        { category: 'Preventive Maintenance', amount: 18200, percentage: 39.8 },
        { category: 'Reactive Repairs', amount: 15600, percentage: 34.1 },
        { category: 'Equipment Upgrades', amount: 8950, percentage: 19.6 },
        { category: 'Emergency Repairs', amount: 3000, percentage: 6.5 }
      ]
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getTrendIcon = (trend: number) => {
    if (trend > 0) {
      return <ArrowUpIcon className="h-4 w-4 text-green-500" />;
    } else if (trend < 0) {
      return <ArrowDownIcon className="h-4 w-4 text-red-500" />;
    }
    return null;
  };

  const getTrendColor = (trend: number) => {
    if (trend > 0) return 'text-green-600';
    if (trend < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  return (
    <div className="p-6 pt-20 lg:pt-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Reports & Analytics
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Analyze facility performance, costs, and operational metrics
            </p>
          </div>
          <div className="flex space-x-3">
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              <DocumentArrowDownIcon className="h-5 w-5 mr-2" />
              Export Report
            </button>
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <WrenchScrewdriverIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Work Orders</dt>
                  <dd className="flex items-center">
                    <div className="text-lg font-medium text-gray-900">
                      {reportData.overview.totalWorkOrders}
                    </div>
                    <div className={`ml-2 flex items-center text-sm ${getTrendColor(reportData.overview.trends.workOrders)}`}>
                      {getTrendIcon(reportData.overview.trends.workOrders)}
                      <span className="ml-1">{Math.abs(reportData.overview.trends.workOrders)}%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ClockIcon className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Avg Completion Time</dt>
                  <dd className="flex items-center">
                    <div className="text-lg font-medium text-gray-900">
                      {reportData.overview.avgCompletionTime} days
                    </div>
                    <div className={`ml-2 flex items-center text-sm ${getTrendColor(reportData.overview.trends.completionTime)}`}>
                      {getTrendIcon(reportData.overview.trends.completionTime)}
                      <span className="ml-1">{Math.abs(reportData.overview.trends.completionTime)}%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CurrencyDollarIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Costs</dt>
                  <dd className="flex items-center">
                    <div className="text-lg font-medium text-gray-900">
                      {formatCurrency(reportData.overview.totalCost)}
                    </div>
                    <div className={`ml-2 flex items-center text-sm ${getTrendColor(reportData.overview.trends.cost)}`}>
                      {getTrendIcon(reportData.overview.trends.cost)}
                      <span className="ml-1">{Math.abs(reportData.overview.trends.cost)}%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CogIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Equipment Uptime</dt>
                  <dd className="flex items-center">
                    <div className="text-lg font-medium text-gray-900">
                      {reportData.overview.equipmentUptime}%
                    </div>
                    <div className={`ml-2 flex items-center text-sm ${getTrendColor(reportData.overview.trends.uptime)}`}>
                      {getTrendIcon(reportData.overview.trends.uptime)}
                      <span className="ml-1">{Math.abs(reportData.overview.trends.uptime)}%</span>
                    </div>
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Charts and Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Work Orders by Status */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Work Orders by Status</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {reportData.workOrdersByStatus.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      item.status === 'Completed' ? 'bg-green-500' :
                      item.status === 'In Progress' ? 'bg-blue-500' :
                      item.status === 'Pending' ? 'bg-yellow-500' : 'bg-gray-500'
                    }`} />
                    <span className="text-sm text-gray-900">{item.status}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">{item.count}</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.status === 'Completed' ? 'bg-green-500' :
                          item.status === 'In Progress' ? 'bg-blue-500' :
                          item.status === 'Pending' ? 'bg-yellow-500' : 'bg-gray-500'
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Work Orders by Priority */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Work Orders by Priority</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {reportData.workOrdersByPriority.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-3 ${
                      item.priority === 'High' ? 'bg-red-500' :
                      item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <span className="text-sm text-gray-900">{item.priority}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm font-medium text-gray-900">{item.count}</span>
                    <div className="w-32 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          item.priority === 'High' ? 'bg-red-500' :
                          item.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                        }`}
                        style={{ width: `${item.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{item.percentage}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Analysis Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Equipment Performance */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Equipment Performance</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Equipment</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Uptime</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Incidents</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportData.equipmentPerformance.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.equipment}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        item.uptime >= 95 ? 'text-green-600' :
                        item.uptime >= 90 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.uptime}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.incidents}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Space Utilization */}
        <div className="bg-white shadow rounded-lg">
          <div className="px-6 py-4 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Space Utilization</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Space</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Utilization</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Avg Occupancy</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {reportData.spaceUtilization.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.space}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium ${
                        item.utilization >= 80 ? 'text-green-600' :
                        item.utilization >= 60 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {item.utilization}%
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.avgOccupancy}/{item.capacity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Cost Analysis */}
      <div className="bg-white shadow rounded-lg">
        <div className="px-6 py-4 border-b border-gray-200">
          <h3 className="text-lg font-medium text-gray-900">Cost Analysis</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Cost Breakdown by Type */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Cost Breakdown by Type</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Labor</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(reportData.costAnalysis.labor)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Parts & Materials</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(reportData.costAnalysis.parts)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">External Services</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(reportData.costAnalysis.external)}</span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-900">Total</span>
                    <span className="text-sm font-bold text-gray-900">
                      {formatCurrency(reportData.costAnalysis.labor + reportData.costAnalysis.parts + reportData.costAnalysis.external)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Cost Breakdown by Category */}
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-4">Cost Breakdown by Category</h4>
              <div className="space-y-3">
                {reportData.costAnalysis.breakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center flex-1">
                      <span className="text-sm text-gray-600">{item.category}</span>
                      <div className="ml-4 flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full"
                            style={{ width: `${item.percentage}%` }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ml-4 flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">{formatCurrency(item.amount)}</span>
                      <span className="text-xs text-gray-500">({item.percentage}%)</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}