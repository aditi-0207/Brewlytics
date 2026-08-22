export const analysisSteps = [
  {
    id: 'location',
    number: '01',
    title: 'Location',

    heading: 'Where will your café live?',

    description:
      "Location affects rent, customer demand and competition. Tell us where you're planning to open.",

    fields: [
      {
        id: 'city',
        number: '01',
        label: 'City',
        type: 'text',
        placeholder: 'e.g. Bengaluru',
        description:
          'Where are you planning to open your café?',
      },

      {
        id: 'area',
        number: '02',
        label: 'Area / Locality',
        type: 'text',
        placeholder: 'e.g. Indiranagar',
        description:
          'Which neighbourhood are you considering?',
      },

      {
        id: 'rent',
        number: '03',
        label: 'Monthly Rent',
        type: 'currency',
        placeholder: '120000',
        description:
          'What will your café space cost each month?',
      },

      {
        id: 'propertyType',
        number: '04',
        label: 'Property Type',
        type: 'select',
        placeholder: 'Select property type',
        description:
          'What kind of property will your café operate from?',

        options: [
          'Rented commercial space',
          'Owned property',
          'Shopping mall',
          'Food court',
          'Standalone property',
        ],
      },

      {
        id: 'competitors',
        number: '05',
        label: 'Nearby Competitors',
        type: 'competitors',
        description:
          'Which cafés or coffee shops operate near your location?',

        suggestions: [
          'Starbucks',
          'Third Wave Coffee',
          'Blue Tokai',
          'The Coffee House',
          'Café Coffee Day',
          'Barista',
        ],
      },
    ],
  },


    {
  id: 'cafeSetup',
  number: '02',
  title: 'Café Setup',

  heading: 'What will your café look like?',

  description:
    'Define the format, size and operating pattern of your café.',

  fields: [
    {
      id: 'cafeType',
      number: '01',
      label: 'Café Type',
      type: 'select',

      description:
        'What kind of café are you planning to operate?',

      placeholder: 'Select café type',

      options: [
        'Coffee-focused café',
        'Casual café',
        'Premium café',
        'Café + bakery',
        'Café + restaurant',
      ],
    },

    {
      id: 'spaceSize',
      number: '02',
      label: 'Café Size',
      type: 'number',

      description:
        'How much space will your café occupy?',

      placeholder: 'e.g. 1000',

      unit: 'sq. ft.',
    },

    {
      id: 'seatingCapacity',
      number: '03',
      label: 'Seating Capacity',
      type: 'number',

      description:
        'How many customers can your café seat at one time?',

      placeholder: 'e.g. 40',

      unit: 'seats',
    },

    {
      id: 'operatingHours',
      number: '04',
      label: 'Operating Hours',
      type: 'time-range',

      description:
        'How long will your café operate each day?',
    },

    {
      id: 'operatingDays',
      number: '05',
      label: 'Operating Days',
      type: 'number',

      description:
        'How many days will your café operate each month?',

      placeholder: 'e.g. 30',

      unit: 'days / month',
    },
  ],
},

  {
    id: 'staff',
    number: '03',
    title: 'Staff',

    heading: 'Who will run your café?',

    description:
      'Estimate the people required to operate your café.',

    fields: [],
  },

  {
    id: 'menuPricing',
    number: '04',
    title: 'Menu & Pricing',

    heading: 'What will you sell?',

    description:
      'Define your menu and pricing strategy.',

    fields: [],
  },

  {
    id: 'equipment',
    number: '05',
    title: 'Equipment',

    heading: 'What will you need?',

    description:
      'Estimate your equipment requirements and costs.',

    fields: [],
  },

  {
    id: 'operatingCosts',
    number: '06',
    title: 'Operating Costs',

    heading: 'What will it cost to operate?',

    description:
      'Estimate your recurring monthly expenses.',

    fields: [],
  },

  {
    id: 'market',
    number: '07',
    title: 'Market',

    heading: 'How strong is your market?',

    description:
      'Understand demand and competitive pressure.',

    fields: [],
  },
]