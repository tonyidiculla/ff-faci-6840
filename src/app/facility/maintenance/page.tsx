'use client';

import { useState } from 'react';
import {
  CalendarIcon,
  PlusIcon,
  ClockIcon,
  WrenchScrewdriverIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  UserIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from '@heroicons/react/24/outline';

export default function MaintenancePage() {
  const [selectedView, setSelectedView] = useState('calendar'); // 'calendar' or 'list'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedMonth, setSelectedMonth] = useState(new Date());

  // Mock data for maintenance schedules
  const maintenanceSchedules = [
    {
      id: 'MS-001',
      title: 'HVAC System Quarterly Maintenance',
      description: 'Filter replacement, system cleaning, and performance check',
      equipmentId: 'EQ-HVAC-001',
      equipmentName: 'HVAC Unit - Surgery Suite A',
      type: 'Preventive',
      priority: 'high',
      status: 'scheduled',
      assignedTo: 'John Smith',
      scheduledDate: '2025-10-30',
      estimatedDuration: 4, // hours
      frequency: 'Quarterly',
      lastCompleted: '2025-07-30',
      location: 'Surgery Suite A',
      checklist: [
        'Replace air filters',
        'Clean air ducts',
        'Check temperature sensors',
        'Calibrate thermostat',
        'Inspect electrical connections'
      ],
      parts: ['Air Filter - HEPA', 'Cleaning Supplies'],
      cost: 250
    },
    {
      id: 'MS-002',
      title: 'X-Ray Machine Calibration',
      description: 'Annual calibration and safety inspection',
      equipmentId: 'EQ-001',
      equipmentName: 'Digital X-Ray Machine',
      type: 'Calibration',
      priority: 'medium',
      status: 'scheduled',
      assignedTo: 'Tech Specialist',
      scheduledDate: '2025-11-15',
      estimatedDuration: 3,
      frequency: 'Annually',
      lastCompleted: '2024-11-15',
      location: 'X-Ray Room',
      checklist: [
        'Radiation output calibration',
        'Image quality assessment',
        'Safety system check',
        'Software update',
        'Documentation review'
      ],
      parts: ['Calibration Kit'],
      cost: 500
    },
    {
      id: 'MS-003',
      title: 'Ultrasound Transducer Maintenance',
      description: 'Cleaning, inspection, and recalibration',
      equipmentId: 'EQ-003',
      equipmentName: 'Ultrasound Scanner',
      type: 'Preventive',
      priority: 'medium',
      status: 'in-progress',
      assignedTo: 'Dr. Emily Chen',
      scheduledDate: '2025-10-28',
      estimatedDuration: 2,
      frequency: 'Bi-monthly',
      lastCompleted: '2025-08-28',
      location: 'Examination Room 2',
      checklist: [
        'Clean transducer probes',
        'Check cable integrity',
        'Update software',
        'Calibrate image settings',
        'Performance test'
      ],
      parts: ['Cleaning Solution', 'Probe Covers'],
      cost: 150
    },
    {
      id: 'MS-004',
      title: 'Autoclave Monthly Inspection',
      description: 'Pressure test, door seal check, and cycle validation',
      equipmentId: 'EQ-006',
      equipmentName: 'Autoclave Sterilizer',
      type: 'Inspection',
      priority: 'high',
      status: 'overdue',
      assignedTo: 'Maintenance Team',
      scheduledDate: '2025-10-25',
      estimatedDuration: 1.5,
      frequency: 'Monthly',
      lastCompleted: '2025-09-25',
      location: 'Sterilization Room',
      checklist: [
        'Pressure sensor test',
        'Door seal inspection',
        'Steam quality test',
        'Cycle time validation',
        'Safety valve check'
      ],
      parts: ['Door Seal', 'Pressure Relief Valve'],
      cost: 100
    },
    {
      id: 'MS-005',
      title: 'Surgical Laser Service',
      description: 'Fiber optic inspection and power calibration',
      equipmentId: 'EQ-004',
      equipmentName: 'Surgical Laser',
      type: 'Service',
      priority: 'low',
      status: 'completed',
      assignedTo: 'Vendor Technician',
      scheduledDate: '2025-10-20',
      estimatedDuration: 2.5,
      frequency: 'Bi-annually',
      lastCompleted: '2025-10-20',
      location: 'Surgery Suite B',
      checklist: [
        'Fiber optic inspection',
        'Power output calibration',
        'Cooling system check',
        'Safety interlock test',
        'Software validation'
      ],
      parts: ['Fiber Optic Cable'],
      cost: 750
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled': return 'text-blue-600 bg-blue-100 border-blue-200';
      case 'in-progress': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'completed': return 'text-green-600 bg-green-100 border-green-200';
      case 'overdue': return 'text-red-600 bg-red-100 border-red-200';
      case 'postponed': return 'text-gray-600 bg-gray-100 border-gray-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'scheduled': return <CalendarIcon className="h-4 w-4" />;
      case 'in-progress': return <WrenchScrewdriverIcon className="h-4 w-4" />;
      case 'completed': return <CheckCircleIcon className="h-4 w-4" />;
      case 'overdue': return <ExclamationTriangleIcon className="h-4 w-4" />;
      case 'postponed': return <ClockIcon className="h-4 w-4" />;
      default: return <ClockIcon className="h-4 w-4" />;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-600 bg-red-100 border-red-200';
      case 'medium': return 'text-yellow-600 bg-yellow-100 border-yellow-200';
      case 'low': return 'text-green-600 bg-green-100 border-green-200';
      default: return 'text-gray-600 bg-gray-100 border-gray-200';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Preventive': return 'text-blue-600 bg-blue-100';
      case 'Calibration': return 'text-purple-600 bg-purple-100';
      case 'Inspection': return 'text-orange-600 bg-orange-100';
      case 'Service': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  // Calendar functions
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      selectedMonth.getMonth() === today.getMonth() &&
      selectedMonth.getFullYear() === today.getFullYear()
    );
  };

  const getMaintenanceForDate = (day: number) => {
    const dateStr = `${selectedMonth.getFullYear()}-${String(selectedMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return maintenanceSchedules.filter(m => m.scheduledDate === dateStr);
  };

  const previousMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() - 1));
  };

  const nextMonth = () => {
    setSelectedMonth(new Date(selectedMonth.getFullYear(), selectedMonth.getMonth() + 1));
  };

  const renderCalendarDay = (day: number) => {
    const maintenanceItems = getMaintenanceForDate(day);
    const hasOverdue = maintenanceItems.some(m => m.status === 'overdue');
    const hasInProgress = maintenanceItems.some(m => m.status === 'in-progress');
    const hasScheduled = maintenanceItems.some(m => m.status === 'scheduled');

    return (
      <div
        key={day}
        className={`
          min-h-16 p-1 border border-gray-200 cursor-pointer hover:bg-gray-50
          ${isToday(day) ? 'bg-blue-50 border-blue-300' : ''}
        `}
      >
        <div className={`text-sm font-medium ${isToday(day) ? 'text-blue-600' : 'text-gray-900'}`}>
          {day}
        </div>
        <div className="space-y-1">
          {maintenanceItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className={`
                text-xs px-1 py-0.5 rounded truncate
                ${hasOverdue && item.status === 'overdue' ? 'bg-red-100 text-red-700' :
                  hasInProgress && item.status === 'in-progress' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-blue-100 text-blue-700'}
              `}
              title={item.title}
            >
              {item.title}
            </div>
          ))}
          {maintenanceItems.length > 2 && (
            <div className="text-xs text-gray-500">
              +{maintenanceItems.length - 2} more
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="p-6 pt-20 lg:pt-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Maintenance Scheduling
            </h1>
            <p className="mt-2 text-sm text-gray-600">
              Schedule and track preventive maintenance, inspections, and equipment servicing
            </p>
          </div>
          <div className="flex space-x-3">
            <button
              onClick={() => setSelectedView(selectedView === 'calendar' ? 'list' : 'calendar')}
              className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
            >
              {selectedView === 'calendar' ? 'List View' : 'Calendar View'}
            </button>
            <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700">
              <PlusIcon className="h-5 w-5 mr-2" />
              Schedule Maintenance
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
                <CalendarIcon className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Scheduled</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {maintenanceSchedules.filter(m => m.status === 'scheduled').length}
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
                  <dt className="text-sm font-medium text-gray-500 truncate">In Progress</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {maintenanceSchedules.filter(m => m.status === 'in-progress').length}
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
                  <dt className="text-sm font-medium text-gray-500 truncate">Overdue</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {maintenanceSchedules.filter(m => m.status === 'overdue').length}
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
                <CheckCircleIcon className="h-6 w-6 text-green-400" />
              </div>
              <div className="ml-5 w-0 flex-1">
                <dl>
                  <dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
                  <dd className="text-lg font-medium text-gray-900">
                    {maintenanceSchedules.filter(m => m.status === 'completed').length}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Calendar or List View */}
      {selectedView === 'calendar' ? (
        <div className="bg-white shadow rounded-lg">
          {/* Calendar Header */}
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-900">
              {selectedMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </h3>
            <div className="flex space-x-2">
              <button
                onClick={previousMonth}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="p-6">
            <div className="grid grid-cols-7 gap-0 border border-gray-200">
              {/* Days of week header */}
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="p-3 bg-gray-50 border-b border-gray-200 text-center text-sm font-medium text-gray-700">
                  {day}
                </div>
              ))}

              {/* Empty cells for days before month starts */}
              {Array.from({ length: getFirstDayOfMonth(selectedMonth) }, (_, index) => (
                <div key={index} className="min-h-16 p-1 border border-gray-200 bg-gray-50"></div>
              ))}

              {/* Days of the month */}
              {Array.from({ length: getDaysInMonth(selectedMonth) }, (_, index) => 
                renderCalendarDay(index + 1)
              )}
            </div>
          </div>
        </div>
      ) : (
        /* List View */
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Maintenance Task
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Equipment
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Priority
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Assigned To
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Scheduled Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Duration
                  </th>
                  <th scope="col" className="relative px-6 py-3">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {maintenanceSchedules.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">{item.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <CogIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {item.equipmentName}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>
                        {item.type}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                        {item.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                        {getStatusIcon(item.status)}
                        <span className="ml-1 capitalize">{item.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center text-sm text-gray-900">
                        <UserIcon className="h-4 w-4 mr-1 text-gray-400" />
                        {item.assignedTo}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(item.scheduledDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {item.estimatedDuration}h
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
    </div>
  );
}