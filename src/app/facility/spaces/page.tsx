'use client';

import { useState } from 'react';
import {
  BuildingOfficeIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  UserIcon,
  MapPinIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  PencilIcon,
  CalendarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

export default function SpacesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedView, setSelectedView] = useState('grid'); // 'grid' or 'list'

  // Mock data for spaces
  const spaces = [
    {
      id: 'SP-001',
      name: 'Surgery Suite A',
      type: 'Surgery Room',
      floor: '2',
      building: 'Main Building',
      capacity: 4,
      currentOccupancy: 2,
      status: 'occupied',
      assignedTo: 'Dr. Sarah Wilson',
      equipment: ['Surgical Table', 'Anesthesia Machine', 'Monitors'],
      lastCleaned: '2025-10-28T08:00:00Z',
      nextMaintenance: '2025-11-15',
      area: 450, // sq ft
      temperature: 68,
      humidity: 45
    },
    {
      id: 'SP-002',
      name: 'Examination Room 1',
      type: 'Examination Room',
      floor: '1',
      building: 'Main Building',
      capacity: 3,
      currentOccupancy: 0,
      status: 'available',
      assignedTo: null,
      equipment: ['Examination Table', 'Scale', 'Computer Terminal'],
      lastCleaned: '2025-10-28T10:30:00Z',
      nextMaintenance: '2025-11-10',
      area: 200,
      temperature: 72,
      humidity: 40
    },
    {
      id: 'SP-003',
      name: 'X-Ray Room',
      type: 'Diagnostic Room',
      floor: '1',
      building: 'Main Building',
      capacity: 2,
      currentOccupancy: 1,
      status: 'occupied',
      assignedTo: 'Dr. Mike Davis',
      equipment: ['X-Ray Machine', 'Lead Aprons', 'Computer Workstation'],
      lastCleaned: '2025-10-28T09:15:00Z',
      nextMaintenance: '2025-12-01',
      area: 180,
      temperature: 70,
      humidity: 42
    },
    {
      id: 'SP-004',
      name: 'Recovery Room A',
      type: 'Recovery Room',
      floor: '2',
      building: 'Main Building',
      capacity: 6,
      currentOccupancy: 3,
      status: 'occupied',
      assignedTo: 'Nurse Jennifer Lee',
      equipment: ['Recovery Cages', 'Monitoring Equipment', 'IV Stands'],
      lastCleaned: '2025-10-28T07:45:00Z',
      nextMaintenance: '2025-11-08',
      area: 300,
      temperature: 74,
      humidity: 38
    },
    {
      id: 'SP-005',
      name: 'Laboratory',
      type: 'Laboratory',
      floor: '1',
      building: 'Main Building',
      capacity: 2,
      currentOccupancy: 1,
      status: 'occupied',
      assignedTo: 'Lab Tech Alex Johnson',
      equipment: ['Microscopes', 'Centrifuge', 'Analysis Equipment'],
      lastCleaned: '2025-10-28T11:00:00Z',
      nextMaintenance: '2025-11-20',
      area: 250,
      temperature: 69,
      humidity: 35
    },
    {
      id: 'SP-006',
      name: 'Isolation Room 1',
      type: 'Isolation Room',
      floor: '1',
      building: 'Isolation Wing',
      capacity: 1,
      currentOccupancy: 0,
      status: 'maintenance',
      assignedTo: null,
      equipment: ['Isolation Cage', 'Air Filtration', 'Disinfection System'],
      lastCleaned: '2025-10-27T16:00:00Z',
      nextMaintenance: '2025-10-29',
      area: 120,
      temperature: 72,
      humidity: 45
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100 border-green-200';
      case 'occupied': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'out-of-order': return 'text-red-600 bg-red-100 border-red-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available': return <CheckCircleIcon className="h-4 w-4" />;
      case 'occupied': return <UserIcon className="h-4 w-4" />;
      case 'maintenance': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'out-of-order': return <XCircleIcon className="h-4 w-4" />;
      default: return <CheckCircleIcon className="h-4 w-4" />;
    }
  };

  const getOccupancyPercentage = (current: number, capacity: number) => {
    return Math.round((current / capacity) * 100);
  };

  const getOccupancyColor = (percentage: number) => {
    if (percentage === 0) return 'bg-gray-200';
    if (percentage <= 50) return 'bg-green-500';
    if (percentage <= 80) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  // Filter spaces
  const filteredSpaces = spaces.filter(space => {
    const matchesSearch = space.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         space.building.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || space.status === statusFilter;
    const matchesType = typeFilter === 'all' || space.type === typeFilter;
    
    return matchesSearch && matchesStatus && matchesType;
  });

  const spaceTypes = [...new Set(spaces.map(space => space.type))];

  return (
    <div className="p-6 pt-20 lg:pt-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Space Management
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Monitor and manage facility spaces, rooms, and occupancy
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
              Add Space
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
                <BuildingOfficeIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Spaces</dt>
                  <dd className="text-lg font-medium text-gray-900">{spaces.length}</dd>
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
                  <dt className="text-sm font-medium text-gray-500 truncate">Available</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {spaces.filter(s => s.status === 'available').length}
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
                <UserIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Occupied</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {spaces.filter(s => s.status === 'occupied').length}
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
                <ExclamationTriangleIcon className="h-6 w-6 text-yellow-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Under Maintenance</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {spaces.filter(s => s.status === 'maintenance').length}
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
                  placeholder="Search spaces..."
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
                <option value="available">Available</option>
                <option value="occupied">Occupied</option>
                <option value="maintenance">Maintenance</option>
                <option value="out-of-order">Out of Order</option>
              </select>
            </div>

            {/* Type Filter */}
            <div>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
              >
                <option value="all">All Types</option>
                {spaceTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Spaces Display */}
      {selectedView === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpaces.map((space) => {
            const occupancyPercentage = getOccupancyPercentage(space.currentOccupancy, space.capacity);
            
            return (
              <div key={space.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{space.name}</h3>
                      <p className="text-sm text-gray-500">{space.type}</p>
                    </div>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(space.status)}`}>
                      {getStatusIcon(space.status)}
                      <span className="ml-1 capitalize">{space.status}</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="h-4 w-4 mr-2" />
                      {space.building}, Floor {space.floor}
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Occupancy</span>
                      <span className="font-medium">
                        {space.currentOccupancy}/{space.capacity} ({occupancyPercentage}%)
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${getOccupancyColor(occupancyPercentage)}`}
                        style={{ width: `${occupancyPercentage}%` }}
                      />
                    </div>

                    {space.assignedTo && (
                      <div className="flex items-center text-sm text-gray-600">
                        <UserIcon className="h-4 w-4 mr-2" />
                        {space.assignedTo}
                      </div>
                    )}

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Area: {space.area} sq ft</span>
                      <span>{space.temperature}°F, {space.humidity}% humidity</span>
                    </div>

                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>Last cleaned: {new Date(space.lastCleaned).toLocaleDateString()}</span>
                      <span>Next maintenance: {new Date(space.nextMaintenance).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-end space-x-2">
                    <button className="text-blue-600 hover:text-blue-900">
                      <EyeIcon className="h-4 w-4" />
                    </button>
                    <button className="text-gray-600 hover:text-gray-900">
                      <PencilIcon className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* List View */
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Space
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Occupancy
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Next Maintenance
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredSpaces.map((space) => {
                  const occupancyPercentage = getOccupancyPercentage(space.currentOccupancy, space.capacity);
                  
                  return (
                    <tr key={space.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{space.name}</div>
                          <div className="text-sm text-gray-500">{space.type}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {space.building}, Floor {space.floor}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(space.status)}`}>
                          {getStatusIcon(space.status)}
                          <span className="ml-1 capitalize">{space.status}</span>
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-1 mr-2">
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className={`h-2 rounded-full ${getOccupancyColor(occupancyPercentage)}`}
                                style={{ width: `${occupancyPercentage}%` }}
                              />
                            </div>
                          </div>
                          <span className="text-sm text-gray-900">
                            {space.currentOccupancy}/{space.capacity}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {space.assignedTo ? (
                          <div className="flex items-center text-sm text-gray-900">
                            <UserIcon className="h-4 w-4 mr-1 text-gray-400" />
                            {space.assignedTo}
                          </div>
                        ) : (
                          <span className="text-sm text-gray-500">Unassigned</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center text-sm text-gray-900">
                          <CalendarIcon className="h-4 w-4 mr-1 text-gray-400" />
                          {new Date(space.nextMaintenance).toLocaleDateString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <button className="text-blue-600 hover:text-blue-900">
                            <EyeIcon className="h-4 w-4" />
                          </button>
                          <button className="text-gray-600 hover:text-gray-900">
                            <PencilIcon className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredSpaces.length === 0 && (
        <div className="text-center py-12">
          <BuildingOfficeIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No spaces found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}