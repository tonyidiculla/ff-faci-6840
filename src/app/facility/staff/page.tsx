'use client';

import { useState } from 'react';
import {
  UserGroupIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  EyeIcon,
  PencilIcon,
  CalendarIcon,
  MapPinIcon,
  TagIcon,
} from '@heroicons/react/24/outline';

export default function StaffPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedView, setSelectedView] = useState('grid');

  // Mock data for staff
  const staff = [
    {
      id: 'ST-001',
      name: 'John Smith',
      role: 'Senior Maintenance Technician',
      department: 'Maintenance',
      email: 'john.smith@furfield.com',
      phone: '(555) 123-4567',
      status: 'active',
      shift: 'Day (7AM - 3PM)',
      location: 'Main Building',
      hireDate: '2022-03-15',
      skills: ['HVAC', 'Electrical', 'Plumbing'],
      certifications: ['EPA 608', 'Electrical License'],
      currentWorkOrders: 3,
      completedThisMonth: 12,
      averageRating: 4.8,
      lastActive: '2025-10-28T14:30:00Z',
      availability: 'available',
      schedule: [
        { day: 'Monday', start: '07:00', end: '15:00' },
        { day: 'Tuesday', start: '07:00', end: '15:00' },
        { day: 'Wednesday', start: '07:00', end: '15:00' },
        { day: 'Thursday', start: '07:00', end: '15:00' },
        { day: 'Friday', start: '07:00', end: '15:00' }
      ]
    },
    {
      id: 'ST-002',
      name: 'Sarah Johnson',
      role: 'Facilities Specialist',
      department: 'Facilities',
      email: 'sarah.johnson@furfield.com',
      phone: '(555) 234-5678',
      status: 'active',
      shift: 'Day (8AM - 4PM)',
      location: 'Main Building',
      hireDate: '2021-08-22',
      skills: ['Space Planning', 'Inventory Management', 'Safety Compliance'],
      certifications: ['OSHA 30', 'CPR/First Aid'],
      currentWorkOrders: 2,
      completedThisMonth: 18,
      averageRating: 4.9,
      lastActive: '2025-10-28T15:45:00Z',
      availability: 'busy',
      schedule: [
        { day: 'Monday', start: '08:00', end: '16:00' },
        { day: 'Tuesday', start: '08:00', end: '16:00' },
        { day: 'Wednesday', start: '08:00', end: '16:00' },
        { day: 'Thursday', start: '08:00', end: '16:00' },
        { day: 'Friday', start: '08:00', end: '16:00' }
      ]
    },
    {
      id: 'ST-003',
      name: 'Mike Davis',
      role: 'Equipment Technician',
      department: 'Technical Services',
      email: 'mike.davis@furfield.com',
      phone: '(555) 345-6789',
      status: 'active',
      shift: 'Evening (3PM - 11PM)',
      location: 'Equipment Lab',
      hireDate: '2023-01-10',
      skills: ['Medical Equipment', 'Calibration', 'Repairs'],
      certifications: ['Biomedical Equipment Technician', 'Electronics Repair'],
      currentWorkOrders: 5,
      completedThisMonth: 8,
      averageRating: 4.6,
      lastActive: '2025-10-28T13:20:00Z',
      availability: 'available',
      schedule: [
        { day: 'Monday', start: '15:00', end: '23:00' },
        { day: 'Tuesday', start: '15:00', end: '23:00' },
        { day: 'Wednesday', start: '15:00', end: '23:00' },
        { day: 'Thursday', start: '15:00', end: '23:00' },
        { day: 'Friday', start: '15:00', end: '23:00' }
      ]
    },
    {
      id: 'ST-004',
      name: 'Lisa Martinez',
      role: 'Cleaning Supervisor',
      department: 'Environmental Services',
      email: 'lisa.martinez@furfield.com',
      phone: '(555) 456-7890',
      status: 'active',
      shift: 'Night (11PM - 7AM)',
      location: 'All Buildings',
      hireDate: '2020-11-03',
      skills: ['Deep Cleaning', 'Sanitization', 'Team Management'],
      certifications: ['Infection Control', 'HAZMAT'],
      currentWorkOrders: 1,
      completedThisMonth: 25,
      averageRating: 4.7,
      lastActive: '2025-10-28T06:30:00Z',
      availability: 'off-duty',
      schedule: [
        { day: 'Sunday', start: '23:00', end: '07:00' },
        { day: 'Monday', start: '23:00', end: '07:00' },
        { day: 'Tuesday', start: '23:00', end: '07:00' },
        { day: 'Wednesday', start: '23:00', end: '07:00' },
        { day: 'Thursday', start: '23:00', end: '07:00' }
      ]
    },
    {
      id: 'ST-005',
      name: 'Tom Wilson',
      role: 'Electrician',
      department: 'Maintenance',
      email: 'tom.wilson@furfield.com',
      phone: '(555) 567-8901',
      status: 'active',
      shift: 'Day (6AM - 2PM)',
      location: 'Main Building',
      hireDate: '2019-05-18',
      skills: ['Electrical Systems', 'Generator Maintenance', 'Emergency Repairs'],
      certifications: ['Master Electrician', 'Generator Technician'],
      currentWorkOrders: 4,
      completedThisMonth: 15,
      averageRating: 4.9,
      lastActive: '2025-10-28T14:15:00Z',
      availability: 'available',
      schedule: [
        { day: 'Monday', start: '06:00', end: '14:00' },
        { day: 'Tuesday', start: '06:00', end: '14:00' },
        { day: 'Wednesday', start: '06:00', end: '14:00' },
        { day: 'Thursday', start: '06:00', end: '14:00' },
        { day: 'Friday', start: '06:00', end: '14:00' }
      ]
    },
    {
      id: 'ST-006',
      name: 'Jennifer Lee',
      role: 'Facility Coordinator',
      department: 'Administration',
      email: 'jennifer.lee@furfield.com',
      phone: '(555) 678-9012',
      status: 'on-leave',
      shift: 'Day (9AM - 5PM)',
      location: 'Administrative Office',
      hireDate: '2021-02-14',
      skills: ['Project Management', 'Vendor Relations', 'Documentation'],
      certifications: ['PMP', 'Facility Management'],
      currentWorkOrders: 0,
      completedThisMonth: 0,
      averageRating: 4.8,
      lastActive: '2025-10-15T17:00:00Z',
      availability: 'unavailable',
      schedule: []
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100 border-green-200';
      case 'on-leave': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'inactive': return 'text-gray-600 bg-gray-100 border-gray-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'busy': return 'text-yellow-600 bg-yellow-100';
      case 'off-duty': return 'text-blue-600 bg-blue-100';
      case 'unavailable': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAvailabilityIcon = (availability: string) => {
    switch (availability) {
      case 'available': return <CheckCircleIcon className="h-4 w-4" />;
      case 'busy': return <WrenchScrewdriverIcon className="h-4 w-4" />;
      case 'off-duty': return <ClockIcon className="h-4 w-4" />;
      case 'unavailable': return <ExclamationTriangleIcon className="h-4 w-4" />;
      default: return <ClockIcon className="h-4 w-4" />;
    }
  };

  // Filter staff
  const filteredStaff = staff.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         person.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = departmentFilter === 'all' || person.department === departmentFilter;
    const matchesStatus = statusFilter === 'all' || person.status === statusFilter;
    
    return matchesSearch && matchesDepartment && matchesStatus;
  });

  const departments = [...new Set(staff.map(person => person.department))];

  return (
    <div className="p-6 pt-20 lg:pt-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Staff Management
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Manage facility staff, assignments, schedules, and performance
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
              Add Staff Member
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
                <UserGroupIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Total Staff</dt>
                  <dd className="text-lg font-medium text-gray-900">{staff.length}</dd>
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
                    {staff.filter(s => s.availability === 'available').length}
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
                  <dt className="text-sm font-medium text-gray-500 truncate">On Duty</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {staff.filter(s => s.availability === 'busy' || s.availability === 'available').length}
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
                <ClockIcon className="h-6 w-6 text-purple-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Active Work Orders</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {staff.reduce((sum, s) => sum + s.currentWorkOrders, 0)}
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
                  placeholder="Search staff..."
                  className="pl-10 w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            {/* Department Filter */}
            <div>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={departmentFilter}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                <option value="all">All Departments</option>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <select
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="on-leave">On Leave</option>
                <option value="inactive">Inactive</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Staff Display */}
      {selectedView === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStaff.map((person) => (
            <div key={person.id} className="bg-white overflow-hidden shadow rounded-lg hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="h-12 w-12 bg-gray-300 rounded-full flex items-center justify-center">
                      <UserIcon className="h-8 w-8 text-gray-600" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{person.name}</h3>
                      <p className="text-sm text-gray-500">{person.role}</p>
                    </div>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(person.status)}`}>
                    {person.status}
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Availability</span>
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(person.availability)}`}>
                      {getAvailabilityIcon(person.availability)}
                      <span className="ml-1 capitalize">{person.availability}</span>
                    </span>
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <TagIcon className="h-4 w-4 mr-2" />
                    {person.department}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="h-4 w-4 mr-2" />
                    {person.location}
                  </div>

                  <div className="flex items-center text-sm text-gray-600">
                    <ClockIcon className="h-4 w-4 mr-2" />
                    {person.shift}
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Active Work Orders</span>
                    <span className="font-medium">{person.currentWorkOrders}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Completed This Month</span>
                    <span className="font-medium">{person.completedThisMonth}</span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Rating</span>
                    <div className="flex items-center">
                      <span className="font-medium">{person.averageRating}</span>
                      <span className="text-yellow-400 ml-1">★</span>
                    </div>
                  </div>

                  {person.skills.length > 0 && (
                    <div>
                      <span className="text-sm text-gray-600">Skills: </span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {person.skills.slice(0, 3).map((skill, index) => (
                          <span key={index} className="inline-flex px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded">
                            {skill}
                          </span>
                        ))}
                        {person.skills.length > 3 && (
                          <span className="text-xs text-gray-500">+{person.skills.length - 3} more</span>
                        )}
                      </div>
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
                    Staff Member
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Department
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Availability
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Shift
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Work Orders
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Contact
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredStaff.map((person) => (
                  <tr key={person.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <UserIcon className="h-6 w-6 text-gray-600" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.role}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <TagIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {person.department}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(person.status)}`}>
                        {person.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(person.availability)}`}>
                        {getAvailabilityIcon(person.availability)}
                        <span className="ml-1 capitalize">{person.availability}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {person.shift}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {person.currentWorkOrders} active
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        <div className="flex items-center">
                          <EnvelopeIcon className="h-4 w-4 mr-1 text-gray-400" />
                          <a href={`mailto:${person.email}`} className="hover:text-blue-600">
                            {person.email}
                          </a>
                        </div>
                        <div className="flex items-center mt-1">
                          <PhoneIcon className="h-4 w-4 mr-1 text-gray-400" />
                          <a href={`tel:${person.phone}`} className="hover:text-blue-600">
                            {person.phone}
                          </a>
                        </div>
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {filteredStaff.length === 0 && (
        <div className="text-center py-12">
          <UserGroupIcon className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">No staff members found</h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      )}
    </div>
  );
}