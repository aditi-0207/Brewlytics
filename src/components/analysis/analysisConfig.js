export const analysisSteps = [
  /* =========================
     01 — LOCATION
  ========================= */

  {
    id: 'location',
    number: '01',
    title: 'Location',

    heading: 'Choose Your Café’s Corner',

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
          'Chaayos',
          'Blue Tokai',
          'Chelvies Coffee',
          'The Coffee House',
          'Costa Coffee',
          'Chai Point',
          'Café Coffee Day',
          'Barista',
        ],
      },
    ],
  },


  /* =========================
     02 — CAFÉ SETUP
  ========================= */

  {
    id: 'cafeSetup',
    number: '02',
    title: 'Café Setup',

    heading: 'How Much Room for the Brew?',

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
          'Café + co-working space',
          'Bookcafé',
          'Pet café',
          'Themed café', 
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


  /* =========================
     03 — STAFF
  ========================= */

  {
    id: 'staff',
    number: '03',
    title: 'Staff',

    heading: 'Who’s Brewing the Magic?',

    description:
      'Estimate the people and payroll required to operate your café.',

    fields: [
      {
        id: 'employeeCount',
        number: '01',
        label: 'Number of Employees',
        type: 'number',

        description:
          'How many people will work at your café?',

        placeholder: 'e.g. 8',

        unit: 'employees',
      },

      {
        id: 'averageSalary',
        number: '02',
        label: 'Average Monthly Salary',
        type: 'currency',

        description:
          'What is the average monthly salary per employee?',

        placeholder: 'e.g. 18000',
      },

      {
        id: 'ownerOperated',
        number: '03',
        label: 'Owner-Operated',
        type: 'select',

        description:
          'Will you personally be involved in operating the café?',

        placeholder: 'Select an option',

        options: [
          'Yes',
          'No',
        ],
      },

      {
        id: 'managerRequired',
        number: '04',
        label: 'Manager Required',
        type: 'select',

        description:
          'Will you need a dedicated manager to run the café?',

        placeholder: 'Select an option',

        options: [
          'Yes',
          'No',
        ],
      },
    ],
  },


  /* =========================
   04 — MENU & PRICING
========================= */

{
  id: 'menuPricing',
  number: '04',
  title: 'Menu & Pricing',

  heading: 'What’s Your Café’s Lineup?',

  description:
    'Define your pricing, expected customer volume and menu economics.',

  fields: [
    {
      id: 'averageOrderValue',
      number: '01',
      label: 'Average Order Value',
      type: 'currency',

      description:
        'How much do you expect the average customer to spend per visit?',

      placeholder: 'e.g. 350',
    },

    {
      id: 'customersPerDay',
      number: '02',
      label: 'Expected Customers / Day',
      type: 'number',

      description:
        'How many customers do you expect to serve on a typical day?',

      placeholder: 'e.g. 100',

      unit: 'customers / day',
    },

    {
      id: 'foodBeverageMix',
      number: '03',
      label: 'Food & Beverage Mix',
      type: 'select',

      description:
        'How would you describe the balance between food and beverage sales?',

      placeholder: 'Select sales mix',

      options: [
        'Mostly beverages',
        'More beverages than food',
        'Balanced',
        'More food than beverages',
        'Mostly food',
      ],
    },

    {
      id: 'foodCostPercentage',
      number: '04',
      label: 'Average Food Cost',
      type: 'number',

      description:
        'Approximately what percentage of your selling price goes toward ingredients and raw materials?',

      placeholder: 'e.g. 30',

      unit: '% of sales',
    },

    {
      id: 'menuPositioning',
      number: '05',
      label: 'Menu Positioning',
      type: 'select',

      description:
        'What price segment are you targeting with your menu?',

      placeholder: 'Select positioning',

      options: [
        'Budget',
        'Mid-range',
        'Premium',
        'Luxury',
      ],
    },

    {
      id: 'deliverySales',
      number: '06',
      label: 'Delivery / Online Sales',
      type: 'select',

      description:
        'Will your café offer delivery or online ordering?',

      placeholder: 'Select an option',

      options: [
        'No delivery',
        'Yes — small share of sales',
        'Yes — significant share of sales',
      ],
    },

    {
      id: 'peakHours',
      number: '07',
      label: 'Peak Hours',
      type: 'select',

      description:
        'When do you expect your café to receive the most customers?',

      placeholder: 'Select peak period',

      options: [
        'Morning',
        'Afternoon',
        'Evening',
        'Throughout the day',
      ],
    },
  ],
},


/* =========================
   05 — EQUIPMENT
========================= */

{
  id: 'equipment',
  number: '05',
  title: 'Equipment',

  heading: 'What Goes Into the Setup?',

  description:
    'Estimate the one-time investment needed to build and equip your café.',

  fields: [
    {
      id: 'coffeeEquipment',
      number: '01',
      label: 'Coffee Equipment',
      type: 'currency',

      description:
        'How much do you expect to spend on espresso machines, grinders, brewers and other coffee equipment?',

      placeholder: 'e.g. 300000',
    },

    {
      id: 'kitchenEquipment',
      number: '02',
      label: 'Kitchen Equipment',
      type: 'currency',

      description:
        'Estimate the cost of ovens, refrigerators, freezers and other kitchen equipment.',

      placeholder: 'e.g. 250000',
    },

    {
      id: 'furnitureSeating',
      number: '03',
      label: 'Furniture & Seating',
      type: 'currency',

      description:
        'How much will you spend on tables, chairs, counters and other furniture?',

      placeholder: 'e.g. 200000',
    },

    {
      id: 'interiorDecor',
      number: '04',
      label: 'Interior & Décor',
      type: 'currency',

      description:
        'Estimate your interior fit-out, lighting, décor and other design costs.',

      placeholder: 'e.g. 500000',
    },

    {
      id: 'posTechnology',
      number: '05',
      label: 'POS & Technology',
      type: 'currency',

      description:
        'Estimate the cost of POS hardware, billing systems, networking and other technology.',

      placeholder: 'e.g. 75000',
    },

    {
      id: 'otherSetupCosts',
      number: '06',
      label: 'Other Setup Costs',
      type: 'currency',

      description:
        'Add any other one-time setup costs not covered above.',

      placeholder: 'e.g. 50000',
    },
  ],
},


 /* =========================
   06 — OPERATING COSTS
========================= */

{
  id: 'operatingCosts',
  number: '06',
  title: 'Operating Costs',

  heading: 'Who’s Your Café Crowd?',

  description:
    'Estimate the recurring monthly expenses needed to keep your café running.',

  fields: [
    {
      id: 'rawMaterials',
      number: '01',
      label: 'Raw Materials / Ingredients',
      type: 'currency',

      description:
        'How much do you expect to spend each month on coffee, food ingredients, packaging and other consumables?',

      placeholder: 'e.g. 100000',
    },

    {
      id: 'utilities',
      number: '02',
      label: 'Utilities',
      type: 'currency',

      description:
        'Estimate your monthly electricity, gas, water and other utility expenses.',

      placeholder: 'e.g. 30000',
    },

    {
      id: 'marketing',
      number: '03',
      label: 'Marketing',
      type: 'currency',

      description:
        'How much do you plan to spend each month on advertising, social media and promotions?',

      placeholder: 'e.g. 20000',
    },

    {
      id: 'deliveryFees',
      number: '04',
      label: 'Delivery / Platform Fees',
      type: 'currency',

      description:
        'Estimate monthly commissions and fees paid to delivery or ordering platforms.',

      placeholder: 'e.g. 15000',
    },

    {
      id: 'softwareSubscriptions',
      number: '05',
      label: 'Software & Subscriptions',
      type: 'currency',

      description:
        'Estimate recurring costs for POS, accounting, inventory and other software subscriptions.',

      placeholder: 'e.g. 5000',
    },

    {
      id: 'maintenance',
      number: '06',
      label: 'Maintenance',
      type: 'currency',

      description:
        'Estimate monthly equipment, furniture and property maintenance costs.',

      placeholder: 'e.g. 10000',
    },

    {
      id: 'miscellaneous',
      number: '07',
      label: 'Miscellaneous',
      type: 'currency',

      description:
        'Allow for smaller recurring expenses that do not fit into another category.',

      placeholder: 'e.g. 10000',
    },

    {
      id: 'otherMonthlyCosts',
      number: '08',
      label: 'Other Monthly Costs',
      type: 'currency',

      description:
        'Add any other recurring monthly costs not covered above.',

      placeholder: 'e.g. 5000',
    },
  ],
},

/* =========================
   07 — MARKET
========================= */

{
  id: 'market',
  number: '07',
  title: 'Market',

  heading: 'Who are you brewing for?',

  description:
    'Define your target audience and expectations for the local market.',

  fields: [
    {
      id: 'targetCustomer',
      number: '01',
      label: 'Target Customer',
      type: 'select',

      description:
        'Who do you expect to be the primary customers of your café?',

      placeholder: 'Select target customer',

      options: [
        'Students',
        'Young professionals',
        'Families',
        'Remote workers',
        'Tourists',
        'Mixed audience',
      ],
    },

    {
      id: 'cafePositioning',
      number: '02',
      label: 'Café Positioning',
      type: 'select',

      description:
        'How do you want your café to be perceived in the market?',

      placeholder: 'Select positioning',

      options: [
        'Affordable & casual',
        'Trendy & social',
        'Premium & refined',
        'Specialty coffee',
        'Experience-focused',
      ],
    },

    {
      id: 'expectedDemand',
      number: '03',
      label: 'Expected Demand',
      type: 'select',

      description:
        'How strong do you expect customer demand to be in your chosen area?',

      placeholder: 'Select expected demand',

      options: [
        'Low',
        'Moderate',
        'High',
        'Very high',
      ],
    },

    {
      id: 'marketFamiliarity',
      number: '04',
      label: 'Market Familiarity',
      type: 'select',

      description:
        'How familiar are you with the café market in this area?',

      placeholder: 'Select familiarity',

      options: [
        'New to the market',
        'Somewhat familiar',
        'Very familiar',
        'Already operate a business here',
      ],
    },

    {
      id: 'competitivePressure',
      number: '05',
      label: 'Competitive Pressure',
      type: 'select',

      description:
        'How competitive do you believe the café market is in your chosen area?',

      placeholder: 'Select competition level',

      options: [
        'Low',
        'Moderate',
        'High',
        'Very high',
      ],
    },

    {
      id: 'growthExpectation',
      number: '06',
      label: 'Growth Expectation',
      type: 'select',

      description:
        'How much growth do you expect your café to achieve after establishing itself?',

      placeholder: 'Select growth expectation',

      options: [
        'Conservative',
        'Moderate',
        'Strong',
        'Aggressive',
      ],
    },
  ],
},


]