'use client';

import { useState } from 'react';
import { ContentArea, VStack } from '@/components/layout/PageLayout';
import {
  CogIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
  ClockIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  CalendarIcon,
  DocumentTextIcon,
  TagIcon,
  MapPinIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

export default function EquipmentPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedView, setSelectedView] = useState('grid');

  // Mock data for equipment
  const equipment = [
    {
      id: 'EQ-001',
      name: 'Digital X-Ray Machine',
      category: 'Diagnostic',
      model: 'RadiMax Pro 3000',
      manufacturer: 'MedTech Solutions',
      serialNumber: 'RM3000-2023-001',
      location: 'X-Ray Room',
      status: 'operational',
      purchaseDate: '2023-06-15',
      warrantyExpiry: '2026-06-15',
      lastMaintenance: '2025-09-15',
      nextMaintenance: '2025-12-15',
      maintenanceInterval: 90, // days
      cost: 85000,
      condition: 'excellent',
      notes: 'Latest software update installed',
      assignedTo: 'Dr. Mike Davis',
      maintenanceHistory: [
        { date: '2024-12-15', type: 'Routine', notes: 'Calibration and cleaning' },
        { date: '2024-09-15', type: 'Repair', notes: 'Replaced imaging sensor' }
      ]
    },
    {
      id: 'EQ-002',
      name: 'Anesthesia Machine',
      category: 'Surgical',
      model: 'AnesMaster 500',
      manufacturer: 'SurgiTech',
      serialNumber: 'AM500-2022-045',
      location: 'Surgery Suite A',
      status: 'operational',
      purchaseDate: '2022-03-20',
      warrantyExpiry: '2025-03-20',
      lastMaintenance: '2025-10-01',
      nextMaintenance: '2025-11-01',
      maintenanceInterval: 30,
      cost: 45000,
      condition: 'good',
      notes: 'Gas flow calibration completed',
      assignedTo: 'Dr. Sarah Wilson',
      maintenanceHistory: [
        { date: '2025-09-01', type: 'Routine', notes: 'Monthly safety check' },
      ]
    },
    {
      id: 'EQ-003',
      name: 'Ultrasound Scanner',
      category: 'Diagnostic',
      model: 'UltraVision HD',
      manufacturer: 'ImageCorp',
      serialNumber: 'UV-HD-2024-008',
      location: 'Examination Room 2',
      status: 'maintenance',
      purchaseDate: '2024-01-10',
      warrantyExpiry: '2027-01-10',
      lastMaintenance: '2025-10-20',
      nextMaintenance: '2025-11-20',
      maintenanceInterval: 60,
      cost: 35000,
      condition: 'good',
      notes: 'Transducer needs recalibration',
      assignedTo: 'Dr. Emily Chen',
      maintenanceHistory: [
        { date: '2025-08-20', type: 'Routine', notes: 'Software update and probe check' },
      ]
    },
    {
      id: 'EQ-004',
      name: 'Surgical Laser',
      category: 'Surgical',
      model: 'LaserPro 2000',
      manufacturer: 'PrecisionMed',
      serialNumber: 'LP2000-2023-012',
      location: 'Surgery Suite B',
      status: 'operational',
      purchaseDate: '2023-08-05',
      warrantyExpiry: '2026-08-05',
      lastMaintenance: '2025-10-10',
      nextMaintenance: '2025-12-10',
      maintenanceInterval: 60,
      cost: 65000,
      condition: 'excellent',
      notes: 'Recent fiber optic replacement',
      assignedTo: 'Dr. Sarah Wilson',
      maintenanceHistory: [
        { date: '2025-08-10', type: 'Repair', notes: 'Fiber optic cable replacement' },
      ]
    },
    {
      id: 'EQ-005',
      name: 'Centrifuge',
      category: 'Laboratory',
      model: 'SpinMax 1500',
      manufacturer: 'LabEquip Inc',
      serialNumber: 'SM1500-2022-089',
      location: 'Laboratory',
      status: 'operational',
      purchaseDate: '2022-11-12',
      warrantyExpiry: '2025-11-12',
      lastMaintenance: '2025-09-30',
      nextMaintenance: '2025-12-30',
      maintenanceInterval: 90,
      cost: 8500,
      condition: 'good',
      notes: 'Rotor balance checked',
      assignedTo: 'Lab Tech Alex Johnson',
      maintenanceHistory: [
        { date: '2025-06-30', type: 'Routine', notes: 'Cleaning and rotor inspection' },
      ]
    },
    {
      id: 'EQ-006',
      name: 'Autoclave Sterilizer',
      category: 'Sterilization',
      model: 'SterileMax Pro',
      manufacturer: 'CleanTech',
      serialNumber: 'SMP-2021-156',
      location: 'Sterilization Room',
      status: 'critical',
      purchaseDate: '2021-05-18',
      warrantyExpiry: '2024-05-18',
      lastMaintenance: '2025-10-25',
      nextMaintenance: '2025-10-30',
      maintenanceInterval: 30,
      cost: 15000,
      condition: 'fair',
      notes: 'Pressure sensor malfunction detected',
      assignedTo: 'Maintenance Team',
      maintenanceHistory: [
        { date: '2025-09-25', type: 'Repair', notes: 'Door seal replacement' },
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-600 bg-green-100 border-green-200';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'critical': return 'text-red-600 bg-red-100 border-red-200';
      case 'retired': return 'text-gray-600 bg-gray-100 border-gray-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'operational': return <CheckCircleIcon className="h-4 w-4" />;
      case 'maintenance': return <WrenchScrewdriverIcon className="h-4 w-4" />;
      case 'critical': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'retired': return <XCircleIcon className="h-4 w-4" />;
      default: return <ClockIcon className="h-4 w-4" />;
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'excellent': return 'text-green-600';
      case 'good': return 'text-blue-600';
      case 'fair': return 'text-yellow-600';
      case 'poor': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const isMaintenanceDue = (nextMaintenance: string) => {
    const dueDate = new Date(nextMaintenance);
    const today = new Date();
    const daysUntilDue = Math.ceil((dueDate.getTime() - today.getTime()) / (1000 * 3600 * 24));
    return daysUntilDue <= 7;
  };

  // Filter equipment
  const filteredEquipment = equipment.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.manufacturer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || item.status === statusFilter;
    const matchesCategory = categoryFilter === 'all' || item.category === categoryFilter;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const categories = [...new Set(equipment.map(item => item.category))];

  return (
    <ContentArea maxWidth="7xl">
      <VStack>
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                Equipment Management
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                Track and manage facility equipment, assets, and maintenance schedules
              </p>
            </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedView(selectedView === 'grid' ? 'list' : 'grid')}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              {selectedView === 'grid' ? 'List View' : 'Grid View'}
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              <PlusIcon className="h-5 w-5 mr-2" />
              Add Equipment
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white overflow-hidden shadow rounded-lg">
          <div className="p-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <CogIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Equipment</dt>
                  <dd className="text-lg font-medium text-gray-900">{equipment.length}</dd>
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
                  <dt className="text-sm font-medium text-gray-500 truncate">Operational</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {equipment.filter(e => e.status === 'operational').length}
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
                <WrenchScrewdriverIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Under Maintenance</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {equipment.filter(e => e.status === 'maintenance').length}
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
                <ExclamationTriangleIcon className="h-6 w-6 text-red-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Critical</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {equipment.filter(e => e.status === 'critical').length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white shadow rounded-lg mb-8">
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div>
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search equipment..."
                  className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Status Filter */}
            <div>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="operational">Operational</option>
                <option value="maintenance">Maintenance</option>
                <option value="critical">Critical</option>
                <option value="retired">Retired</option>
              </select>
            </div>

            {/* Category Filter */}
            <div>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">All Categories</option>
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Equipment Display */}
      {selectedView === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEquipment.map((item) => (
            <div key={item.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.manufacturer} - {item.model}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                    {getStatusIcon(item.status)}
                    <span className="ml-1 capitalize">{item.status}</span>
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center text-sm text-gray-600">
                    <TagIcon className="h-4 w-4 mr-2" />
                    {item.category}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {item.location}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Condition</span>
                    <span className={`font-medium capitalize ${getConditionColor(item.condition)}`}>
                      {item.condition}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Serial Number</span>
                    <span className="font-mono text-xs">{item.serialNumber}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Next Maintenance</span>
                    <span className={`text-xs ${isMaintenanceDue(item.nextMaintenance) ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                      {new Date(item.nextMaintenance).toLocaleDateString()}
                      {isMaintenanceDue(item.nextMaintenance) && <span className="ml-1">⚠️</span>}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Value</span>
                    <span className="font-medium">${item.cost.toLocaleString()}</span>
                  </div>

                  {item.notes && (
                    <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
                      <DocumentTextIcon className="h-3 w-3 inline mr-1" />
                      {item.notes}
                    </div>
                  )}
                </div>

                <div className="mt-4 flex justify-end space-x-2">
                  <button className="text-blue-600 hover:text-blue-900">
                    <EyeIcon className="h-4 w-4" />
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="text-red-600 hover:text-red-900">
                    <TrashIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Equipment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Condition
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Maintenance
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Value
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredEquipment.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="text-sm text-gray-500">{item.manufacturer} - {item.model}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <TagIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {item.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {item.location}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">{item.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`text-sm font-medium capitalize ${getConditionColor(item.condition)}`}>
                        {item.condition}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className={`flex items-center text-sm ${isMaintenanceDue(item.nextMaintenance) ? 'text-red-600 font-medium' : 'text-gray-900'}`}>
                        <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {new Date(item.nextMaintenance).toLocaleDateString()}
                        {isMaintenanceDue(item.nextMaintenance) && <span className="ml-1">⚠️</span>}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      ${item.cost.toLocaleString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <EyeIcon className="h-4 w-4" />
                        </button>
                        <button className="text-gray-600 hover:text-gray-900">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredEquipment.length === 0 && (
        <div className="text-center py-12">
          <CogIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No equipment found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
      </VStack>
    </ContentArea>
  );
}