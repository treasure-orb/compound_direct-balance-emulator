export const classes = [
  {
    name: "bA5Fnc",
    description: "Environment Display",
    items: [
      {
        name: "Cond",
        desciption: "Condition",
        conditions: [
          { name: "FAST", description: "Fast response, sensitive value" },
          { name: "MID", description: "Medium response", circleIndicator: true},
          { name: "SLOW", description: "Slow response, stable value" },
        ],
      },
      {
        name: "St-b",
        desciption: "Stability band width",
        conditions: [
          { name: "Stable Range is ±1" },
          { name: "Stable Range is ±2", circleIndicator: true },
          { name: "Stable Range is ±3" },
        ],
      },
      {
        name: "HoLd",
        description: "Hold function",
        conditions: [
          { name: "OFF", circleIndicator: true }, 
          { name: "ON" }
        ],
      },
      {
        name: "trc",
        description: "Zero tracking",
        conditions: [
          { name: "OFF" },
          { name: "Normal", circleIndicator: true },
          { name: "Strong" },
          { name: "Very Strong" },
        ],
      },
      { 
        name: "SPd", 
        description: "Display refresh rate",
        conditions: [
          { name: "5 times/second", circleIndicator: true },
          { name: "10 times/second" },
          { name: "20 times/second" }
        ] 
      },
      { 
        name: "Pnt", 
        description: "Decimal point",
        conditions: [
          { name: "Point(.)", circleIndicator: true },
          { name: "Comma(,)" }
        ] 
      },
      { 
        name: "P-on", 
        description: "Auto display-ON",
        conditions: [
          { name: "OFF", circleIndicator: true },
          { name: "ON" }
        ] 
      },
      { 
        name: "PoFF", 
        description: "Auto display-OFF",
        conditions: [
          { name: "OFF", circleIndicator: true },
          { name: "ON (10 minutes)" }
        ] 
      },
      { 
        name: "rnC", 
        description: "Display at start",
        conditions: [
          { name: "Displays", circleIndicator: true },
          { name: "Does not display" }
        ] 
      },
      { 
        name: "bEEP", 
        description: "Beep",
        conditions: [
          { name: "Does not sounds" },
          { name: "Sounds", circleIndicator: true }
        ] 
      },
    ],
  },
  {
    name: "CL adJ",
    description: "Clock",
    items: [
    ]
  },
  {
    name: "CP Fnc",
    description: "Comparator",
    items: [
      {
        name: "CP",
        desciption: "Comparator mode",
        conditions: [
          { name: "", description: "No comparison", circleIndicator: true },
          { name: "", description: "Comparison, excluding 'near zero' when stable value oroverloaded" },
          { name: "", description: "Comparison, including 'near zero' when stable value oroverloaded" },
          { name: "", description: "Continuous comparison, excluding 'near zero'" },
          { name: "", description: "Continuous comparison, including 'near zero'" },
        ],
      },
      {
        name: "bEP_",
        desciption: "LO buzzer",
        conditions: [
          { name: "OFF",  circleIndicator: true },
          { name: "ON" },
        ],
      },
      {
        name: "bEP-",
        desciption: "OK buzzer",
        conditions: [
          { name: "OFF",  circleIndicator: true },
          { name: "ON" },
        ],
      },
      {
        name: "bep`",
        desciption: "HI buzzer",
        conditions: [
          { name: "OFF",  circleIndicator: true },
          { name: "ON" },
        ],
      },
    ]
  },
  {
    name: "CP H,",
    description: "Upper limit",
    items: [
    ]
  },
  {
    name: "CP Lo",
    description: "Lower limit",
    items: [
    ]
  },
  {
    name: "dout",
    description: "Data output",
    items: [
      {
        name: "Prt",
        desciption: "Data output mode",
        conditions: [
          { name: "Key mode", circleIndicator: true },
          { name: "Auto print mode A", description: "(Reference = zero)" },
          { name: "Auto print mode B", description: "(Reference = last stable value)" },
          { name: "Stream mode"},
          { name: "Key mode B", description: "Immediately" },
          { name: "Key mode C", description: "When stable" },
          { name: "Interval output mode" },
        ],
      },
      {
        name: "AP-P",
        desciption: "Auto print polarity",
        conditions: [
          { name: "Plus only", circleIndicator: true },
          { name: "Minus only" },
          { name: "Both" },
        ],
      },
      {
        name: "AP-b",
        description: "Auto print difference",
        conditions: [
          { name: "10 digits", circleIndicator: true }, 
          { name: "100 digits" }, 
          { name: "1000 digits" }, 
        ],
      },
      {
        name: ",nt",
        description: "Interval time",
        conditions: [
          { name: "Every measurement" },
          { name: "2 seconds", circleIndicator: true },
          { name: "5 seconds" },
          { name: "10 seconds" },
          { name: "30 seconds" },
          { name: "1 minute" },
          { name: "2 minutes" },
          { name: "5 minutes" },
          { name: "110 minutes" },
        ],
      },
      { 
        name: "S-,d", 
        description: "ID number output",
        conditions: [
          { name: "No output ", circleIndicator: true },
          { name: "Output" },
        ] 
      },
      { 
        name: "S-td", 
        description: "Time/Date output",
        conditions: [
          { name: "No output ", circleIndicator: true },
          { name: "Time only" },
          { name: "Date only" },
          { name: "Time and date" },
        ] 
      },
      { 
        name: "PUSE", 
        description: "Data output pause",
        conditions: [
          { name: "No pause", circleIndicator: true },
          { name: "Pause", description: "1.6 seconds" }
        ] 
      },
      { 
        name: "At-F", 
        description: "Auto feed",
        conditions: [
          { name: "Not used", circleIndicator: true },
          { name: "Used" }
        ] 
      },
      { 
        name: ",nFo", 
        description: "GLP output",
        conditions: [
          { name: "No output", circleIndicator: true },
          { name: "AD-8121 format" },
          { name: "General data format", description: "output time and date usingthe built-in clock" },
          { name: "General data format", description: "(output time and date using the clock of the external equipmen" }
        ] 
      },
      { 
        name: "Ar-d", 
        description: "Zero after output",
        conditions: [
          { name: "Not used", circleIndicator: true },
          { name: "Used" }
        ] 
      },
    ],
  },
  {
    name: "S ,F",
    description: "Serial interface",
    items: [
      {
        name: "bPS",
        desciption: "Baud rate",
        conditions: [
          { name: "600 bps", },
          { name: "1200 bps", },
          { name: "2400 bps", circleIndicator: true },
          { name: "4800 bps", },
          { name: "9600 bps", },
          { name: "19200 bps", },
        ],
      },
      {
        name: "btPr",
        desciption: "Data bit, parity bit",
        conditions: [
          { name: "7 bits, even", circleIndicator: true },
          { name: "7 bits, odd" },
          { name: "8 bits, none" },
        ],
      },
      {
        name: "CrLF",
        description: "Terminator",
        conditions: [
          { name: "CR LF", circleIndicator: true }, 
          { name: "CR" }, 
        ],
      },
      {
        name: "tYPE",
        description: "Data format",
        conditions: [
          { name: "A&D standard format", circleIndicator: true },
          { name: " DP format" },
          { name: " KF format" },
          { name: " MT format" },
          { name: " NU format" },
          { name: " CSV format" },        
        ],
      },
      { 
        name: "t-UP", 
        description: "Timeout",
        conditions: [
          { name: "No limit" },
          { name: "1 second", circleIndicator: true },
        ] 
      },
      { 
        name: "ErCd", 
        description: "AK, Error code",
        conditions: [
          { name: "No output ", circleIndicator: true },
          { name: "Output" },
        ] 
      },
    ],
  },
  {
    name: "ALt",
    description: "Programmable-unit (Multi-unit)",
    items: [
    ]
  },
  {
    name: "Un,t",
    description: "Unit",
    items: [
    ]
  },
  {
    name: ",d",
    description: "ID number",
    items: [
    ]
  },
  {
    name: "AP Fnc",
    description: "Application",
    items: [
      {
        name: "APF",
        desciption: "Application function",
        conditions: [
          { name: "Normal weighing mode", circleIndicator: true },
          { name: "Capacity indicator" },
          { name: "Statistical calculation mode" },
        ],
      },
      {
        name: "StAF",
        desciption: "Statistical function mode output items",
        conditions: [
          { name: "", description: "Number of data, sum", circleIndicator: true },
          { name: "", description: "Number of data, sum, maximum, minimum, average, range (maximum-minimum)" },
          { name: "", description: "Number of data, sum, maximum, minimum, average, range (maximum-minimum), standard deviation, coefficient of variation" },
          { name: "", description: "Number of data, sum, maximum, minimum, average, range (maximum-minimum), standard deviation, coefficient of variation, relative error " },
        ],
      },
    ]
  },
  {
    name: "LocFnc",
    items: [
      {
        name: "PASS",
        conditions: [
          { name: "OFF", circleIndicator: true },
          { name: "ON", description: "limits weighing operations" },
          { name: "ON", description: "enables basic weighing" },
        ],
      },
      {
        name: "Loc no",
        conditions: [
          { name: "", description: "Administrator password input" },
          { name: "", description: "User 1 password input" },
        ],
      },
    ]
  },
  {
    name: "CS ,n 1",
    description: "Internal mass value correction: Method 1",
    items: [
    ]
  },
  {
    name: "CS ,n 2",
    description: "Internal mass value correction: Method 2",
    items: [
    ]
  },
];