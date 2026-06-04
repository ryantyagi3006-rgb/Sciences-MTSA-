/* ===================================================
   MYP Sciences Drive — app.js
   All data + SPA rendering logic
   =================================================== */

// ─── SUBJECT DEFINITIONS ────────────────────────────────────────────────────
const SUBJECTS = [
  { id: 'biology',   name: 'Biology',   abbr: 'BIO',  cls: 'bio',  desc: 'Cell biology, genetics, ecology & physiology' },
  { id: 'chemistry', name: 'Chemistry', abbr: 'CHE',  cls: 'chem', desc: 'Bonding, organic chemistry & periodic trends' },
  { id: 'physics',   name: 'Physics',   abbr: 'PHY',  cls: 'phys', desc: 'Electricity, energy, waves & the EM spectrum' },
];

// ─── TASK SHEET DATA ────────────────────────────────────────────────────────
const SHEETS = {

  biology: [
    // ── CRITERION A ──────────────────────────────────────────────────────────
    {
      id: 'mitosis',
      title: 'Mitosis',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'biology', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Write your answers clearly in the spaces provided. Command terms such as <em>define</em>, <em>state</em>, <em>describe</em>, and <em>explain</em> indicate the depth of response required.',
      sections: [
        {
          title: 'Section 1 — Key Terms', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Define the following terms:', marks: 6,
              parts: [
                { l:'a', text:'Mitosis', lines: 2 },
                { l:'b', text:'Chromosome', lines: 2 },
                { l:'c', text:'Sister chromatid', lines: 2 },
              ]
            },
          ]
        },
        {
          title: 'Section 2 — Stages of Mitosis', marks: 8,
          items: [
            { type: 'q', n: 2, text: 'State the four stages of mitosis in the correct order.', marks: 4, lines: 2 },
            { type: 'q', n: 3, text: 'Describe what happens to chromosomes during <strong>metaphase</strong>.', marks: 2, lines: 3 },
            { type: 'q', n: 4, text: 'Explain why the chromosomes must replicate before mitosis begins. ', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 3 — Significance & Application', marks: 8,
          items: [
            { type: 'q', n: 5, text: 'Explain why mitosis produces genetically identical daughter cells.', marks: 3, lines: 4 },
            { type: 'q', n: 6, text: 'Compare mitosis and meiosis by completing the table below.', marks: 3,
              table: {
                headers: ['Feature', 'Mitosis', 'Meiosis'],
                rows: [
                  ['Number of divisions','',''],
                  ['Number of daughter cells','',''],
                  ['Genetic outcome of daughter cells','',''],
                ]
              }
            },
            { type: 'q', n: 7, text: 'A student views a root-tip squash under a microscope at ×400 magnification. A cell appears 2.8 mm wide on the slide. Calculate the actual width of the cell in micrometres (μm). Show your working.', marks: 2, calcBox: true },
          ]
        },
      ]
    },

    {
      id: 'endocrine-system',
      title: 'The Endocrine System',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'biology', duration: '45 min', totalMarks: 20,
      instructions: 'Answer all questions. Use correct scientific terminology throughout. Where asked to explain, ensure you include cause-and-effect reasoning.',
      sections: [
        {
          title: 'Section 1 — Glands and Hormones', marks: 8,
          items: [
            { type: 'q', n: 1, text: 'Define the term <em>hormone</em>.', marks: 2, lines: 2 },
            { type: 'q', n: 2, text: 'State the hormone produced by each gland.', marks: 4,
              table: {
                headers: ['Gland', 'Hormone produced', 'One function of the hormone'],
                rows: [
                  ['Pancreas (β-cells)','',''],
                  ['Adrenal gland (medulla)','',''],
                  ['Thyroid gland','',''],
                  ['Pituitary gland','',''],
                ]
              }
            },
            { type: 'q', n: 3, text: 'Explain how hormones travel from a gland to a target organ.', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 2 — Feedback Mechanisms', marks: 6,
          items: [
            { type: 'q', n: 4, text: 'Describe the meaning of <em>negative feedback</em> in the context of the endocrine system.', marks: 2, lines: 3 },
            { type: 'q', n: 5, text: 'Explain how blood glucose concentration is regulated after a meal. Include the role of insulin and glucagon in your answer.', marks: 4, lines: 6 },
          ]
        },
        {
          title: 'Section 3 — Case Study: Diabetes Mellitus', marks: 6,
          items: [
            { type: 'info', style: 'blue', title: 'Reading', text: 'Type 1 diabetes mellitus is an autoimmune condition in which the immune system destroys the β-cells of the islets of Langerhans in the pancreas. As a result, insufficient insulin is produced. Type 2 diabetes develops when cells become resistant to insulin, often associated with obesity and inactivity.' },
            { type: 'q', n: 6, text: 'Explain why blood glucose levels rise in a person with Type 1 diabetes.', marks: 2, lines: 3 },
            { type: 'q', n: 7, text: 'Compare Type 1 and Type 2 diabetes. State <strong>two</strong> similarities and <strong>two</strong> differences.', marks: 4, lines: 6 },
          ]
        },
      ]
    },

    {
      id: 'plant-hormones',
      title: 'Plant Hormones',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'biology', duration: '40 min', totalMarks: 20,
      instructions: 'Answer all questions. Diagrams may be included to support your written answers where appropriate.',
      sections: [
        {
          title: 'Section 1 — Key Concepts', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Define each of the following:', marks: 4,
              parts: [
                { l:'a', text:'Phototropism', lines: 2 },
                { l:'b', text:'Gravitropism (geotropism)', lines: 2 },
              ]
            },
            { type: 'q', n: 2, text: 'State the name of the plant hormone primarily responsible for phototropism.', marks: 1, lines: 1 },
            { type: 'q', n: 3, text: 'Name the region of a shoot where auxin is produced.', marks: 1, lines: 1 },
          ]
        },
        {
          title: 'Section 2 — Auxin and Tropisms', marks: 8,
          items: [
            { type: 'q', n: 4, text: 'Explain how unequal distribution of auxin causes a shoot to bend towards a light source.', marks: 4, lines: 6 },
            { type: 'q', n: 5, text: 'Explain why roots and shoots respond differently to the same concentration of auxin.', marks: 2, lines: 4 },
            { type: 'q', n: 6, text: 'Describe the role of gravitropism in a germinating seed.', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 3 — Other Plant Hormones and Applications', marks: 6,
          items: [
            { type: 'q', n: 7, text: 'State one function of each plant hormone listed below.', marks: 3,
              table: {
                headers: ['Plant Hormone', 'One Function'],
                rows: [['Gibberellin',''],['Ethylene (ethene)',''],['Cytokinin','']]
              }
            },
            { type: 'q', n: 8, text: 'Explain how knowledge of plant hormones is applied in agriculture. Give <strong>two</strong> specific examples.', marks: 3, lines: 5 },
          ]
        },
      ]
    },

    {
      id: 'food-chains',
      title: 'Food Chains and Energy Flow',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'biology', duration: '40 min', totalMarks: 20,
      instructions: 'Answer all questions. Where calculations are required, show all working clearly.',
      sections: [
        {
          title: 'Section 1 — Ecological Terms', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Define the following terms:', marks: 6,
              parts: [
                { l:'a', text:'Producer', lines: 2 },
                { l:'b', text:'Primary consumer', lines: 2 },
                { l:'c', text:'Trophic level', lines: 2 },
              ]
            },
          ]
        },
        {
          title: 'Section 2 — Food Web Analysis', marks: 6,
          items: [
            { type: 'info', style: 'green', title: 'Food Web', text: 'In a meadow ecosystem: grass → grasshopper → frog → snake → hawk. Grass is also eaten by rabbits, and rabbits are eaten by hawks and foxes.' },
            { type: 'q', n: 2, text: 'Write one complete food chain from the food web above that has <strong>four</strong> trophic levels.', marks: 2, lines: 2 },
            { type: 'q', n: 3, text: 'Predict what would happen to the frog population if all snakes were removed. Explain your reasoning.', marks: 2, lines: 3 },
            { type: 'q', n: 4, text: 'State the original source of energy for all food chains.', marks: 1, lines: 1 },
            { type: 'q', n: 5, text: 'Explain why energy is lost between each trophic level.', marks: 1, lines: 2 },
          ]
        },
        {
          title: 'Section 3 — Energy Efficiency', marks: 8,
          items: [
            { type: 'q', n: 6, text: 'A grassland producer fixes 80 000 kJ of energy. Only 8 000 kJ is transferred to the primary consumer. Calculate the percentage efficiency of this energy transfer. Show your working.', marks: 2, calcBox: true },
            { type: 'q', n: 7, text: 'Explain why food chains rarely have more than five trophic levels.', marks: 2, lines: 4 },
            { type: 'q', n: 8, text: 'Draw and label an ecological pyramid of numbers for the food chain: grass → grasshopper → frog → hawk. Explain the shape of your pyramid.', marks: 4, lines: 6 },
          ]
        },
      ]
    },

    {
      id: 'cell-cycle',
      title: 'The Cell Cycle',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'biology', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Use correct scientific terminology. Command terms in bold indicate the required level of detail.',
      sections: [
        {
          title: 'Section 1 — Phases of the Cell Cycle', marks: 8,
          items: [
            { type: 'q', n: 1, text: 'Define the term <em>cell cycle</em>.', marks: 2, lines: 2 },
            { type: 'q', n: 2, text: 'Complete the table describing the phases of the cell cycle.', marks: 6,
              table: {
                headers: ['Phase', 'Stage of Interphase?', 'Key Events'],
                rows: [
                  ['G₁ phase','Yes',''],
                  ['S phase','',''],
                  ['G₂ phase','',''],
                  ['Mitosis (M phase)','',''],
                  ['Cytokinesis','',''],
                ]
              }
            },
          ]
        },
        {
          title: 'Section 2 — Checkpoints', marks: 6,
          items: [
            { type: 'q', n: 3, text: 'Explain the purpose of checkpoints in the cell cycle.', marks: 2, lines: 3 },
            { type: 'q', n: 4, text: 'Describe what happens at the G₂/M checkpoint. State <strong>two</strong> conditions the cell must meet before mitosis is permitted.', marks: 4, lines: 5 },
          ]
        },
        {
          title: 'Section 3 — Cancer and the Cell Cycle', marks: 8,
          items: [
            { type: 'info', style: 'amber', title: 'Background', text: 'Cancer results from uncontrolled cell division. Mutations in genes that regulate the cell cycle (proto-oncogenes and tumour suppressor genes) can cause cells to divide without appropriate signals or ignore signals to stop dividing.' },
            { type: 'q', n: 5, text: 'Explain how a mutation in a tumour suppressor gene could lead to cancer.', marks: 3, lines: 5 },
            { type: 'q', n: 6, text: 'Explain why cancer cells often show chromosomal abnormalities.', marks: 2, lines: 3 },
            { type: 'q', n: 7, text: 'Suggest how a drug that inhibits DNA replication could be used to treat cancer. Identify one advantage and one disadvantage of this approach.', marks: 3, lines: 5 },
          ]
        },
      ]
    },

    // ── CRITERION B/C ────────────────────────────────────────────────────────
    {
      id: 'reaction-time-people',
      title: 'Reaction Time Investigation',
      criterion: 'BC', criterionName: 'Inquiring & Designing / Processing & Evaluating',
      subject: 'biology', duration: '80 min', totalMarks: 32,
      instructions: 'This task assesses Criterion B (Inquiring and Designing) and Criterion C (Processing and Evaluating). Complete each section fully. Use scientific language and refer to your data when drawing conclusions.',
      sections: [
        {
          title: 'Criterion B — Inquiring and Designing', marks: 16,
          items: [
            { type: 'info', style: 'blue', title: 'Background', text: 'Reaction time is the interval between a stimulus and a voluntary motor response. It depends on the speed of nerve impulse transmission along sensory, relay, and motor neurons. Factors such as age, caffeine consumption, time of day, and practice may influence reaction time.' },
            { type: 'q', n: 1, text: 'State a <strong>focused research question</strong> for this investigation. Your question must name a specific independent variable and the measured dependent variable.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'State a <strong>hypothesis</strong> for your investigation. Use an "if … then … because …" structure, linking your prediction to scientific reasoning.', marks: 3, lines: 4 },
            { type: 'q', n: 3, text: 'Identify and define the variables for your experiment.', marks: 3,
              table: {
                headers: ['Variable type', 'Variable name', 'How it is measured / controlled'],
                rows: [['Independent','',''],['Dependent','',''],['Controlled (×3)','',''],['','',''],['','','']]
              }
            },
            { type: 'q', n: 4, text: 'Write a detailed, step-by-step method that another student could follow to replicate your experiment. Include the number of trials and how you will ensure reliability.', marks: 5, lines: 10 },
            { type: 'q', n: 5, text: 'Describe the safety and ethical considerations relevant to this investigation.', marks: 3, lines: 4 },
          ]
        },
        {
          title: 'Criterion C — Processing and Evaluating', marks: 16,
          items: [
            { type: 'q', n: 6, text: 'Record your raw data in the table below. Add appropriate column headings and units.', marks: 2,
              table: {
                headers: ['Trial', 'Condition 1:', 'Condition 2:', 'Condition 3:'],
                rows: [['1','','',''],['2','','',''],['3','','',''],['4','','',''],['5','','',''],['Mean','','','']]
              }
            },
            { type: 'q', n: 7, text: 'Sketch a graph to display your processed data. Label axes, include a title, and add a best-fit line or bar where appropriate.', marks: 3, lines: 10 },
            { type: 'q', n: 8, text: 'State whether your results support your hypothesis. Justify your answer by referring to specific data values.', marks: 3, lines: 5 },
            { type: 'q', n: 9, text: 'Evaluate the reliability and validity of your investigation. Identify <strong>two</strong> specific weaknesses and suggest improvements for each.', marks: 4, lines: 6 },
            { type: 'q', n: 10, text: 'Discuss how your findings relate to a real-world context. What are the implications of reaction time differences in everyday life?', marks: 4, lines: 5 },
          ]
        },
      ]
    },

    // ── CRITERION D ──────────────────────────────────────────────────────────
    {
      id: 'effects-of-alcohol',
      title: 'Effects of Alcohol Consumption',
      criterion: 'D', criterionName: 'Reflecting on the Impacts of Science',
      subject: 'biology', duration: '50 min', totalMarks: 20,
      instructions: 'Read all sources carefully before answering. Your answers should demonstrate critical thinking about the social, economic, and health implications of alcohol consumption.',
      sections: [
        {
          title: 'Section 1 — Physiological Effects', marks: 6,
          items: [
            { type: 'info', style: 'amber', title: 'Source A — Data', text: 'Blood Alcohol Concentration (BAC) effects: 0.02%: relaxation, mild euphoria. 0.05%: impaired judgement. 0.10%: significantly impaired reaction time and coordination. 0.20%: disorientation, memory blackouts. 0.30%: loss of consciousness. 0.40%+: potential death from respiratory failure.' },
            { type: 'q', n: 1, text: 'Describe the trend in the severity of alcohol\'s effects as BAC increases.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'Explain why alcohol consumption impairs reaction time. Link your answer to the nervous system.', marks: 3, lines: 5 },
            { type: 'q', n: 3, text: 'State <strong>two</strong> long-term health consequences of chronic alcohol consumption.', marks: 1, lines: 2 },
          ]
        },
        {
          title: 'Section 2 — Social and Ethical Dimensions', marks: 8,
          items: [
            { type: 'info', style: 'blue', title: 'Source B — Statistics', text: 'According to the WHO (2023), alcohol causes approximately 3 million deaths per year globally. Alcohol-related road fatalities account for 25% of all traffic deaths in many countries. The economic cost of alcohol-related harm in the UK is estimated at £21 billion per year (NHS, health services, policing, lost productivity).' },
            { type: 'q', n: 4, text: 'Using data from Source B, evaluate the impact of alcohol consumption on society. Consider health, economic, and safety dimensions.', marks: 4, lines: 7 },
            { type: 'q', n: 5, text: 'Discuss whether the legal drinking age should be raised to 21. Present arguments for <strong>and</strong> against, then state your justified conclusion.', marks: 4, lines: 7 },
          ]
        },
        {
          title: 'Section 3 — Reflection', marks: 6,
          items: [
            { type: 'q', n: 6, text: 'Evaluate the limitations of using only BAC data to assess intoxication. What other factors influence alcohol\'s effects on behaviour?', marks: 3, lines: 5 },
            { type: 'q', n: 7, text: 'Suggest and justify <strong>two</strong> science-based public health strategies to reduce alcohol-related harm.', marks: 3, lines: 5 },
          ]
        },
      ]
    },

    {
      id: 'ddt-eggshells',
      title: 'DDT and Fragile Eggshells',
      criterion: 'D', criterionName: 'Reflecting on the Impacts of Science',
      subject: 'biology', duration: '50 min', totalMarks: 20,
      instructions: 'Read the sources carefully. Your answers should link biological concepts (bioaccumulation, biomagnification) to real environmental impacts and ethical considerations.',
      sections: [
        {
          title: 'Section 1 — DDT and Biomagnification', marks: 8,
          items: [
            { type: 'info', style: 'green', title: 'Background', text: 'DDT (dichlorodiphenyltrichloroethane) was widely used as a pesticide from the 1940s. It is persistent — it does not break down easily in the environment. DDT accumulates in fatty tissues and becomes increasingly concentrated as it passes up food chains (biomagnification). In predatory birds such as the bald eagle and peregrine falcon, high DDT levels interfered with calcium metabolism, causing females to produce thin-shelled eggs that broke under the weight of incubating adults.' },
            { type: 'q', n: 1, text: 'Define <em>bioaccumulation</em> and <em>biomagnification</em>. State the key difference between them.', marks: 3, lines: 5 },
            { type: 'q', n: 2, text: 'The DDT concentration in water is 0.000003 ppm. In a food chain: plankton → small fish → large fish → osprey, DDT concentrations are 0.04, 0.5, 2.0, and 25 ppm respectively. Calculate the magnification factor from water to osprey. Show your working.', marks: 2, calcBox: true },
            { type: 'q', n: 3, text: 'Explain how DDT caused eggshell thinning in birds of prey. Include the role of calcium in your answer.', marks: 3, lines: 5 },
          ]
        },
        {
          title: 'Section 2 — Environmental and Ethical Impacts', marks: 8,
          items: [
            { type: 'info', style: 'amber', title: 'Source — Bald Eagle Recovery', text: 'The bald eagle population in the USA fell to fewer than 500 breeding pairs by 1963 due to DDT. After DDT was banned in the USA in 1972, the population recovered to over 9,700 breeding pairs by 2006. However, DDT is still produced and used in some countries for malaria vector control, where it is credited with saving millions of lives.' },
            { type: 'q', n: 4, text: 'Evaluate the decision to ban DDT in developed nations. Consider both environmental and human health perspectives.', marks: 4, lines: 7 },
            { type: 'q', n: 5, text: 'Discuss the ethical dilemma of continuing DDT use in developing nations to control malaria. Is this use justified? Explain your reasoning.', marks: 4, lines: 6 },
          ]
        },
        {
          title: 'Section 3 — Broader Reflections', marks: 4,
          items: [
            { type: 'q', n: 6, text: 'Suggest what lessons scientists and policy-makers should take from the DDT case when introducing new pesticides today.', marks: 2, lines: 4 },
            { type: 'q', n: 7, text: 'Evaluate the role of science in both creating and solving the problem of DDT pollution.', marks: 2, lines: 4 },
          ]
        },
      ]
    },
  ],

  // ─── CHEMISTRY ──────────────────────────────────────────────────────────────
  chemistry: [
    // ── CRITERION A ──────────────────────────────────────────────────────────
    {
      id: 'bonding',
      title: 'Ionic, Covalent and Metallic Bonding',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'chemistry', duration: '50 min', totalMarks: 24,
      instructions: 'Answer all questions. Dot-and-cross diagrams may be drawn in the spaces provided. Use correct chemical symbols and formulae throughout.',
      sections: [
        {
          title: 'Section 1 — Types of Bonding', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Define each type of chemical bond:', marks: 6,
              parts: [
                { l:'a', text:'Ionic bond', lines: 2 },
                { l:'b', text:'Covalent bond', lines: 2 },
                { l:'c', text:'Metallic bond', lines: 2 },
              ]
            },
          ]
        },
        {
          title: 'Section 2 — Ionic Bonding', marks: 8,
          items: [
            { type: 'q', n: 2, text: 'Explain the formation of sodium chloride (NaCl). Include: electron transfer, ion charges, and the electrostatic attraction involved.', marks: 4, lines: 6 },
            { type: 'q', n: 3, text: 'Write the ionic formula for the compound formed between magnesium (Mg) and oxygen (O). Show how you determined the formula.', marks: 2, lines: 3 },
            { type: 'q', n: 4, text: 'Explain why ionic compounds have high melting points.', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 3 — Covalent and Metallic Bonding', marks: 6,
          items: [
            { type: 'q', n: 5, text: 'Draw a dot-and-cross diagram for a water (H₂O) molecule. Label the shared pairs of electrons and lone pairs.', marks: 3, lines: 7 },
            { type: 'q', n: 6, text: 'Describe the structure of a metal and explain how metallic bonding accounts for electrical conductivity.', marks: 3, lines: 5 },
          ]
        },
        {
          title: 'Section 4 — Comparing Properties', marks: 4,
          items: [
            { type: 'q', n: 7, text: 'Complete the properties comparison table.', marks: 4,
              table: {
                headers: ['Property', 'Ionic', 'Simple Covalent', 'Metallic'],
                rows: [
                  ['Melting point','','',''],
                  ['Electrical conductivity (solid)','','',''],
                  ['Electrical conductivity (liquid)','','',''],
                  ['Solubility in water','','',''],
                ]
              }
            },
          ]
        },
      ]
    },

    {
      id: 'alkanes-alkenes',
      title: 'Alkanes and Alkenes',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'chemistry', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Draw structural formulae using lines for bonds. Ensure reaction equations are correctly balanced.',
      sections: [
        {
          title: 'Section 1 — Homologous Series', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'State the general formula for: (a) alkanes  (b) alkenes.', marks: 2, lines: 2 },
            { type: 'q', n: 2, text: 'Define the term <em>homologous series</em>.', marks: 2, lines: 2 },
            { type: 'q', n: 3, text: 'Draw the structural formulae and name the first four straight-chain alkanes.', marks: 2, lines: 7 },
          ]
        },
        {
          title: 'Section 2 — Naming and Structures', marks: 8,
          items: [
            { type: 'q', n: 4, text: 'Draw and name the structural formula for: (a) propene  (b) but-1-ene  (c) 2-methylpropane.', marks: 3, lines: 8 },
            { type: 'q', n: 5, text: 'Explain why but-1-ene and but-2-ene are different compounds despite having the same molecular formula C₄H₈.', marks: 2, lines: 3 },
            { type: 'q', n: 6, text: 'Describe the bromine water test used to distinguish between an alkane and an alkene. State the observation for each.', marks: 3, lines: 4 },
          ]
        },
        {
          title: 'Section 3 — Reactions', marks: 8,
          items: [
            { type: 'q', n: 7, text: 'Write the balanced equation for the complete combustion of propane (C₃H₈).', marks: 2, lines: 3 },
            { type: 'q', n: 8, text: 'Explain why incomplete combustion is dangerous. State the products formed and their health/environmental risks.', marks: 3, lines: 5 },
            { type: 'q', n: 9, text: 'Describe the addition polymerisation of ethene to produce poly(ethene). Write the repeat unit structure.', marks: 3, lines: 5 },
          ]
        },
      ]
    },

    {
      id: 'isomerism',
      title: 'Structural Isomerism',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'chemistry', duration: '40 min', totalMarks: 20,
      instructions: 'Answer all questions. Draw structural formulae clearly, showing all bonds and atoms. Use the IUPAC naming system.',
      sections: [
        {
          title: 'Section 1 — Concepts', marks: 4,
          items: [
            { type: 'q', n: 1, text: 'Define <em>structural isomers</em>.', marks: 2, lines: 2 },
            { type: 'q', n: 2, text: 'State the molecular formula of butane and explain why it can exist as two structural isomers.', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 2 — Drawing Isomers', marks: 10,
          items: [
            { type: 'q', n: 3, text: 'Draw <strong>all</strong> structural isomers of C₄H₁₀ and give the IUPAC name for each.', marks: 4, lines: 8 },
            { type: 'q', n: 4, text: 'Draw <strong>all</strong> structural isomers of C₅H₁₂ and name each one.', marks: 6, lines: 10 },
          ]
        },
        {
          title: 'Section 3 — Properties and Applications', marks: 6,
          items: [
            { type: 'q', n: 5, text: 'Explain why branched isomers of alkanes generally have lower boiling points than their straight-chain counterparts.', marks: 3, lines: 5 },
            { type: 'q', n: 6, text: 'Suggest why isomerism is important in pharmaceutical chemistry. Give one example of how two isomers may have different biological effects.', marks: 3, lines: 5 },
          ]
        },
      ]
    },

    // ── CRITERION B/C ────────────────────────────────────────────────────────
    {
      id: 'reaction-time-elements',
      title: 'Reaction Time of Metals with Water/Acid',
      criterion: 'BC', criterionName: 'Inquiring & Designing / Processing & Evaluating',
      subject: 'chemistry', duration: '80 min', totalMarks: 32,
      instructions: 'This task assesses Criterion B and Criterion C. Use scientific reasoning and link observations to the reactivity series and atomic structure.',
      sections: [
        {
          title: 'Criterion B — Inquiring and Designing', marks: 16,
          items: [
            { type: 'info', style: 'blue', title: 'Background', text: 'Metals react with water and acids at different rates, reflecting their position in the reactivity series. More reactive metals (Li, Na, K) react vigorously with cold water; less reactive metals (Mg, Zn, Fe) react slowly or only with steam or dilute acids. The rate of reaction can be measured by the time taken to produce a set volume of hydrogen gas.' },
            { type: 'q', n: 1, text: 'Write a focused research question for an investigation into how metal reactivity varies in the reactivity series.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'State a hypothesis. Use "if … then … because …" and reference electron configuration or electronegativity.', marks: 3, lines: 4 },
            { type: 'q', n: 3, text: 'Identify and define variables for your experiment.', marks: 3,
              table: {
                headers: ['Variable type','Variable','How measured / controlled'],
                rows: [['Independent','',''],['Dependent','',''],['Controlled (×3)','',''],['','',''],['','','']]
              }
            },
            { type: 'q', n: 4, text: 'Write a detailed, reproducible method. Specify quantities, equipment, and safety precautions.', marks: 5, lines: 10 },
            { type: 'q', n: 5, text: 'Draw a results table template with appropriate headings and units, ready to record your data.', marks: 3, lines: 7 },
          ]
        },
        {
          title: 'Criterion C — Processing and Evaluating', marks: 16,
          items: [
            { type: 'q', n: 6, text: 'Record your processed data and calculate the mean rate of hydrogen production for each metal.', marks: 2,
              table: {
                headers: ['Metal','Time for 20 cm³ H₂ (s) Trial 1','Trial 2','Trial 3','Mean (s)','Rate (cm³/s)'],
                rows: [['Magnesium','','','','',''],['Zinc','','','','',''],['Iron','','','','',''],['Copper','','','','','']]
              }
            },
            { type: 'q', n: 7, text: 'Plot a bar chart of mean rate of reaction vs. metal. Include error bars if possible and label axes with units.', marks: 3, lines: 9 },
            { type: 'q', n: 8, text: 'State whether your results support the reactivity series. Refer to specific data values in your answer.', marks: 3, lines: 5 },
            { type: 'q', n: 9, text: 'Explain the trend you observed using atomic structure (ionisation energy, atomic radius, electron shells).', marks: 4, lines: 6 },
            { type: 'q', n: 10, text: 'Evaluate the reliability of your method and suggest two specific improvements with justification.', marks: 4, lines: 6 },
          ]
        },
      ]
    },

    // ── CRITERION D ──────────────────────────────────────────────────────────
    {
      id: 'fossil-fuels',
      title: 'Fossil Fuels and Their Impact',
      criterion: 'D', criterionName: 'Reflecting on the Impacts of Science',
      subject: 'chemistry', duration: '50 min', totalMarks: 20,
      instructions: 'Read all sources before answering. Your responses should integrate chemical knowledge with environmental, social, and economic perspectives.',
      sections: [
        {
          title: 'Section 1 — Chemistry of Fossil Fuels', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Describe how crude oil (petroleum) was formed. Include the original organic material and the conditions required.', marks: 2, lines: 4 },
            { type: 'q', n: 2, text: 'Write the balanced equation for the complete combustion of octane (C₈H₁₈).', marks: 2, lines: 3 },
            { type: 'q', n: 3, text: 'State three products of incomplete combustion and identify a risk associated with each.', marks: 2,
              table: {
                headers: ['Product of incomplete combustion','Associated risk'],
                rows: [['',''],['',''],['','']]
              }
            },
          ]
        },
        {
          title: 'Section 2 — Environmental Impact', marks: 8,
          items: [
            { type: 'info', style: 'amber', title: 'Source A', text: 'CO₂ concentration in the atmosphere was 280 ppm before industrialisation (1850) and is now over 420 ppm (2023). Global average temperature has risen by approximately 1.2°C since pre-industrial times. The IPCC warns that exceeding 1.5°C of warming will trigger severe and irreversible climate impacts.' },
            { type: 'q', n: 4, text: 'Explain the enhanced greenhouse effect. Describe how burning fossil fuels contributes to global warming.', marks: 3, lines: 5 },
            { type: 'q', n: 5, text: 'Using data from Source A, evaluate the urgency of transitioning away from fossil fuels.', marks: 3, lines: 5 },
            { type: 'q', n: 6, text: 'Describe one environmental impact of fossil fuel extraction (e.g. oil spills, fracking, habitat destruction).', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 3 — Alternatives and Evaluation', marks: 6,
          items: [
            { type: 'q', n: 7, text: 'Compare <strong>two</strong> renewable energy alternatives to fossil fuels. For each, state one advantage and one disadvantage.', marks: 4,
              table: {
                headers: ['Renewable source','Advantage','Disadvantage'],
                rows: [['Solar energy','',''],['Wind energy','','']]
              }
            },
            { type: 'q', n: 8, text: 'Evaluate whether science alone can solve the problem of fossil fuel dependency, or whether political and economic action is also necessary. Justify your view.', marks: 2, lines: 5 },
          ]
        },
      ]
    },

    {
      id: 'periodic-trends',
      title: 'Periodic Trends',
      criterion: 'D', criterionName: 'Reflecting on the Impacts of Science',
      subject: 'chemistry', duration: '45 min', totalMarks: 20,
      instructions: 'This task asks you to interpret data and evaluate trends in the periodic table. Link observations to atomic structure. Consider how understanding these trends has shaped science and technology.',
      sections: [
        {
          title: 'Section 1 — Understanding the Periodic Table', marks: 4,
          items: [
            { type: 'q', n: 1, text: 'Describe how elements are arranged in the modern periodic table. State the basis of the arrangement.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'State the trend in electronegativity across Period 3 (left to right). Explain this trend using atomic structure.', marks: 2, lines: 4 },
          ]
        },
        {
          title: 'Section 2 — Trends in Properties', marks: 10,
          items: [
            { type: 'q', n: 3, text: 'Explain the trend in atomic radius down Group 1. Use the concept of electron shielding in your answer.', marks: 3, lines: 4 },
            { type: 'q', n: 4, text: 'Explain why first ionisation energy generally increases across Period 2 (Li to Ne), but decreases from Group 2 to Group 3 (Be to B).', marks: 3, lines: 5 },
            { type: 'q', n: 5, text: 'Using the table of data below, describe the trend in melting points across Period 3. Explain the trend using bonding.', marks: 4,
              table: {
                headers: ['Element','Na','Mg','Al','Si','P','S','Cl','Ar'],
                rows: [['Melting point (°C)','98','650','660','1414','44','115','−101','−189'],['Bonding type','metallic','metallic','metallic','covalent (giant)','simple mol.','simple mol.','simple mol.','simple mol.'],['Your explanation','','','','','','','','']]
              }
            },
          ]
        },
        {
          title: 'Section 3 — Reflecting on the Periodic Table', marks: 6,
          items: [
            { type: 'q', n: 6, text: 'Evaluate the historical significance of Mendeleev\'s periodic table. What made it remarkable given the scientific knowledge available at the time?', marks: 3, lines: 5 },
            { type: 'q', n: 7, text: 'Suggest how a knowledge of periodic trends has enabled scientists to design materials with specific properties (e.g. semiconductors, alloys, pharmaceuticals). Give a specific example.', marks: 3, lines: 5 },
          ]
        },
      ]
    },
  ],

  // ─── PHYSICS ────────────────────────────────────────────────────────────────
  physics: [
    // ── CRITERION A ──────────────────────────────────────────────────────────
    {
      id: 'ohms-law',
      title: "Ohm's Law — Numerical Problems",
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'physics', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Show all working clearly. Include units in every answer. Use V = IR and related formulae throughout.',
      sections: [
        {
          title: 'Section 1 — Key Equations and Concepts', marks: 4,
          items: [
            { type: 'q', n: 1, text: 'State Ohm\'s Law in words and write the corresponding equation.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'Define <em>electrical resistance</em> and state its SI unit.', marks: 2, lines: 2 },
          ]
        },
        {
          title: 'Section 2 — Ohm\'s Law Calculations', marks: 12,
          items: [
            { type: 'q', n: 3, text: 'A 12 V battery is connected to a resistor of 4 Ω. Calculate the current flowing through the resistor.', marks: 2, calcBox: true },
            { type: 'q', n: 4, text: 'A current of 3 A flows through a resistor when a potential difference of 15 V is applied. Calculate the resistance of the resistor.', marks: 2, calcBox: true },
            { type: 'q', n: 5, text: 'A lamp with resistance 60 Ω carries a current of 0.5 A. Calculate the voltage across the lamp.', marks: 2, calcBox: true },
            { type: 'q', n: 6, text: 'A circuit contains three resistors in series: R₁ = 5 Ω, R₂ = 10 Ω, R₃ = 15 Ω. The supply voltage is 6 V.\n(a) Calculate the total resistance. (b) Calculate the total current. (c) Calculate the voltage across R₂.', marks: 6, calcBox: true },
          ]
        },
        {
          title: 'Section 3 — Graph Interpretation', marks: 6,
          items: [
            { type: 'info', style: 'blue', title: 'Data Table', text: 'A student records the following data for a resistor:\nVoltage (V): 0, 2, 4, 6, 8, 10\nCurrent (A): 0, 0.25, 0.50, 0.75, 1.00, 1.25' },
            { type: 'q', n: 7, text: 'Plot a V–I graph for the data. Draw a best-fit straight line and label axes.', marks: 3, lines: 10 },
            { type: 'q', n: 8, text: 'Use the gradient of your graph to calculate the resistance of the resistor.', marks: 2, calcBox: true },
            { type: 'q', n: 9, text: 'Explain what it means if a V–I graph is not a straight line through the origin.', marks: 1, lines: 2 },
          ]
        },
      ]
    },

    {
      id: 'forms-of-energy',
      title: 'Forms of Energy — Numerical Problems',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'physics', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Show all working. Include correct SI units. Use g = 10 m/s² unless otherwise stated.',
      sections: [
        {
          title: 'Section 1 — Energy Types and Equations', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'Name <strong>five</strong> different forms of energy and give one example of each.', marks: 5,
              table: {
                headers: ['Form of energy','Example'],
                rows: [['',''],['',''],['',''],['',''],['','']]
              }
            },
            { type: 'q', n: 2, text: 'State the equation for: (a) gravitational potential energy (GPE)  (b) kinetic energy (KE).', marks: 1, lines: 2 },
          ]
        },
        {
          title: 'Section 2 — GPE and KE Calculations', marks: 10,
          items: [
            { type: 'q', n: 3, text: 'A book of mass 0.5 kg is placed on a shelf 1.8 m above the floor. Calculate its gravitational potential energy.', marks: 2, calcBox: true },
            { type: 'q', n: 4, text: 'A cyclist and bicycle have a total mass of 80 kg and are travelling at 6 m/s. Calculate their kinetic energy.', marks: 2, calcBox: true },
            { type: 'q', n: 5, text: 'A ball of mass 0.2 kg is dropped from a height of 5 m. Assuming no air resistance, calculate its speed just before it hits the ground. (Hint: GPE = KE)', marks: 3, calcBox: true },
            { type: 'q', n: 6, text: 'A 60 kg skateboarder rolls down a 4 m high ramp. (a) Calculate the GPE at the top. (b) If 90% of GPE converts to KE, calculate the speed at the bottom.', marks: 3, calcBox: true },
          ]
        },
        {
          title: 'Section 3 — Energy Conservation and Transfer', marks: 6,
          items: [
            { type: 'q', n: 7, text: 'State the Law of Conservation of Energy.', marks: 1, lines: 2 },
            { type: 'q', n: 8, text: 'A pendulum is released from a height of 0.2 m. Explain what happens to the energy of the pendulum as it swings. Include reference to the forms of energy at: the highest point, the lowest point, and after several swings.', marks: 3, lines: 6 },
            { type: 'q', n: 9, text: 'A spring stores 45 J of elastic potential energy when compressed. When released, only 36 J is transferred to kinetic energy. Calculate the energy lost to heat and explain why this loss is unavoidable.', marks: 2, calcBox: true },
          ]
        },
      ]
    },

    {
      id: 'power-efficiency',
      title: 'Power and Efficiency — Numerical Problems',
      criterion: 'A', criterionName: 'Knowing and Understanding',
      subject: 'physics', duration: '45 min', totalMarks: 22,
      instructions: 'Answer all questions. Show all working. Include units. Use P = E/t and efficiency = useful output / total input × 100%.',
      sections: [
        {
          title: 'Section 1 — Key Equations', marks: 4,
          items: [
            { type: 'q', n: 1, text: 'Write the equation for power. State the meaning and SI unit of each quantity.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'Write the equation for efficiency. Explain why efficiency can never exceed 100%.', marks: 2, lines: 3 },
          ]
        },
        {
          title: 'Section 2 — Power Calculations', marks: 8,
          items: [
            { type: 'q', n: 3, text: 'A kettle transfers 180 000 J of energy in 3 minutes. Calculate its power output in watts.', marks: 2, calcBox: true },
            { type: 'q', n: 4, text: 'A 75 W light bulb is left on for 4 hours. Calculate the total energy transferred (in joules).', marks: 2, calcBox: true },
            { type: 'q', n: 5, text: 'A motor lifts a 20 kg load 3 m in 5 seconds. (a) Calculate the work done against gravity. (b) Calculate the useful power output of the motor. (g = 10 m/s²)', marks: 4, calcBox: true },
          ]
        },
        {
          title: 'Section 3 — Efficiency Calculations', marks: 10,
          items: [
            { type: 'q', n: 6, text: 'A petrol engine receives 5 000 J of energy from fuel and produces 1 500 J of useful kinetic energy. Calculate the efficiency of the engine.', marks: 2, calcBox: true },
            { type: 'q', n: 7, text: 'An electric motor has an efficiency of 85%. If it receives 2 400 J of electrical energy, calculate: (a) the useful energy output  (b) the energy wasted as heat.', marks: 4, calcBox: true },
            { type: 'q', n: 8, text: 'A power station burns coal to produce 50 MJ of thermal energy. Only 18 MJ is delivered as electrical energy to consumers. Calculate the overall efficiency and suggest <strong>two</strong> stages where energy is wasted.', marks: 4, calcBox: true },
          ]
        },
      ]
    },

    // ── CRITERION B/C ────────────────────────────────────────────────────────
    {
      id: 'wave-phenomena',
      title: 'Wave Phenomena Investigation',
      criterion: 'BC', criterionName: 'Inquiring & Designing / Processing & Evaluating',
      subject: 'physics', duration: '80 min', totalMarks: 32,
      instructions: 'This task assesses Criterion B (Inquiring and Designing) and Criterion C (Processing and Evaluating). Use the wave equation v = fλ where appropriate.',
      sections: [
        {
          title: 'Criterion B — Inquiring and Designing', marks: 16,
          items: [
            { type: 'info', style: 'blue', title: 'Background', text: 'Waves transfer energy without transferring matter. Key wave properties include frequency (f, measured in Hz), wavelength (λ, measured in m), amplitude (A, measured in m), and wave speed (v, measured in m/s). These are related by the wave equation: v = fλ. Waves can undergo reflection, refraction, diffraction, and interference.' },
            { type: 'q', n: 1, text: 'Formulate a focused research question that investigates one wave property and its relationship to another measurable quantity.', marks: 2, lines: 3 },
            { type: 'q', n: 2, text: 'State a hypothesis using scientific reasoning. Reference the wave equation where appropriate.', marks: 3, lines: 4 },
            { type: 'q', n: 3, text: 'Identify your variables and state how each will be measured or controlled.', marks: 3,
              table: {
                headers: ['Variable','Type','Unit','How measured / controlled'],
                rows: [['','Independent','',''],['','Dependent','',''],['','Controlled','',''],['','Controlled','','']]
              }
            },
            { type: 'q', n: 4, text: 'Describe a detailed experimental method. You may use a ripple tank, signal generator, oscilloscope, or slinky. Include diagram if helpful.', marks: 5, lines: 10 },
            { type: 'q', n: 5, text: 'Identify <strong>two</strong> potential sources of error and describe how you would minimise each.', marks: 3, lines: 5 },
          ]
        },
        {
          title: 'Criterion C — Processing and Evaluating', marks: 16,
          items: [
            { type: 'q', n: 6, text: 'Record your raw data in the table. Include appropriate headings and units. Calculate the mean for each condition.', marks: 2,
              table: {
                headers: ['Condition / Setting','Trial 1','Trial 2','Trial 3','Mean'],
                rows: [['','','','',''],['','','','',''],['','','','',''],['','','','','']]
              }
            },
            { type: 'q', n: 7, text: 'Calculate the wave speed for each condition using v = fλ. Show all working clearly.', marks: 3, calcBox: true },
            { type: 'q', n: 8, text: 'Plot a graph of your processed results. Label axes with quantities and units. Draw a best-fit line.', marks: 3, lines: 10 },
            { type: 'q', n: 9, text: 'State a conclusion. Does your data support your hypothesis? Quote specific values.', marks: 3, lines: 5 },
            { type: 'q', n: 10, text: 'Evaluate the reliability and validity of your investigation. Propose two improvements and explain how each would improve the quality of the data.', marks: 5, lines: 7 },
          ]
        },
      ]
    },

    // ── CRITERION D ──────────────────────────────────────────────────────────
    {
      id: 'electromagnetic-spectrum',
      title: 'The Electromagnetic Spectrum',
      criterion: 'D', criterionName: 'Reflecting on the Impacts of Science',
      subject: 'physics', duration: '50 min', totalMarks: 20,
      instructions: 'Answer all questions. Link scientific properties of EM waves to their applications and associated risks. Consider ethical and societal dimensions where relevant.',
      sections: [
        {
          title: 'Section 1 — Properties of EM Waves', marks: 6,
          items: [
            { type: 'q', n: 1, text: 'State <strong>three</strong> properties common to all electromagnetic waves.', marks: 3, lines: 3 },
            { type: 'q', n: 2, text: 'Complete the table below, placing the EM waves in order of increasing frequency.', marks: 3,
              table: {
                headers: ['EM Wave type','Approximate wavelength range','One use','One risk'],
                rows: [
                  ['Radio waves','km to m','',''],
                  ['Microwaves','cm','',''],
                  ['Infrared','700 nm – 1 mm','',''],
                  ['Visible light','400–700 nm','',''],
                  ['Ultraviolet','10–400 nm','',''],
                  ['X-rays','0.01–10 nm','',''],
                  ['Gamma rays','< 0.01 nm','',''],
                ]
              }
            },
          ]
        },
        {
          title: 'Section 2 — Uses and Risks', marks: 8,
          items: [
            { type: 'info', style: 'amber', title: 'Source — UV and Skin Cancer', text: 'The incidence of skin melanoma has more than doubled in the UK since the 1970s. UV radiation damages DNA in skin cells, potentially causing mutations in tumour-suppressor genes. Australia has the highest incidence of skin cancer globally, partly attributed to its sunny climate and the hole in the ozone layer above the Southern Hemisphere.' },
            { type: 'q', n: 3, text: 'Explain the biological mechanism by which UV radiation can cause skin cancer. Link your answer to DNA and cell division.', marks: 3, lines: 5 },
            { type: 'q', n: 4, text: 'Using the source above, evaluate the evidence for UV radiation as a cause of increased skin cancer rates. What other factors might contribute?', marks: 3, lines: 5 },
            { type: 'q', n: 5, text: 'Explain why X-rays are used in medicine despite being potentially harmful. Is this use ethically justified? Discuss.', marks: 2, lines: 4 },
          ]
        },
        {
          title: 'Section 3 — Technology and Society', marks: 6,
          items: [
            { type: 'q', n: 6, text: 'Discuss how mobile phone technology uses the electromagnetic spectrum. Address both the benefits and concerns about long-term microwave exposure.', marks: 3, lines: 6 },
            { type: 'q', n: 7, text: 'Evaluate the role of science and international cooperation in addressing the thinning of the ozone layer. What does the Montreal Protocol (1987) tell us about how science can influence global policy?', marks: 3, lines: 6 },
          ]
        },
      ]
    },
  ],
};

// ─── STATE ──────────────────────────────────────────────────────────────────
const state = {
  view: 'dashboard',
  subject: null,
  sheetId: null,
  search: '',
  viewMode: 'grid',
  filterCrit: 'all',
  sidebarOpen: false,
};

// ─── HELPERS ────────────────────────────────────────────────────────────────
function allSheets() {
  return Object.values(SHEETS).flat();
}

function getSheet(id) {
  return allSheets().find(s => s.id === id);
}

function sheetsForSubject(subjectId, crit = 'all') {
  const list = SHEETS[subjectId] || [];
  if (crit === 'all') return list;
  return list.filter(s => s.criterion === crit);
}

function critLabel(c) {
  if (c === 'BC') return 'B &amp; C';
  return c;
}

function criterionClass(c) {
  if (c === 'BC') return 'BC';
  return c;
}

function subjectOf(id) {
  for (const [sub, list] of Object.entries(SHEETS)) {
    if (list.find(s => s.id === id)) return sub;
  }
  return null;
}

function subjectMeta(id) {
  return SUBJECTS.find(s => s.id === id);
}

// ─── RENDER: ANSWER SPACES ────────────────────────────────────────────────
function answerLines(n, qid = '') {
  if (!n) return '';
  const minH = Math.max(n * 30, 42);
  return `<textarea class="ans-input ans-lined" data-question="${qid}" style="min-height:${minH}px" placeholder="Type your answer here…" oninput="autosaveAnswers()"></textarea>`;
}

function answerBox(qid = '') {
  return `<textarea class="ans-input ans-box-input" data-question="${qid}" placeholder="Type your answer here…" oninput="autosaveAnswers()"></textarea>`;
}

function calcBox(qid = '') {
  return `<div class="calc-wrap">
    <div class="calc-label">Working space</div>
    <textarea class="ans-input calc-input" data-question="${qid}" placeholder="Show your working clearly…" oninput="autosaveAnswers()"></textarea>
  </div>`;
}

// ─── RENDER: TABLE ────────────────────────────────────────────────────────
function renderTable(t, qprefix = '') {
  const heads = t.headers.map(h => `<th>${h}</th>`).join('');
  const rows = t.rows.map((row, ri) => {
    const cells = row.map((c, ci) => {
      if (ci === 0) return `<td>${c}</td>`;
      const qid = qprefix ? `${qprefix}-r${ri+1}c${ci}` : '';
      return `<td class="input"><textarea class="ans-input table-ans" data-question="${qid}" placeholder="…" oninput="autosaveAnswers()">${c || ''}</textarea></td>`;
    }).join('');
    return `<tr>${cells}</tr>`;
  }).join('');
  return `<table class="ws-table"><thead><tr>${heads}</tr></thead><tbody>${rows}</tbody></table>`;
}

// ─── RENDER: QUESTION ─────────────────────────────────────────────────────
function renderQuestion(item) {
  if (item.type === 'info') {
    return `<div class="ws-infobox ${item.style || 'blue'}">
      ${item.title ? `<h4>${item.title}</h4>` : ''}
      ${item.text}
    </div>`;
  }

  const qid = `q${item.n}`;

  let inner = `<div class="ws-q-row">
    <span class="ws-q-num">${item.n}.</span>
    <span class="ws-q-body">${item.text}</span>
    <span class="ws-q-marks">[${item.marks} mark${item.marks !== 1 ? 's' : ''}]</span>
  </div>`;

  if (item.parts) {
    inner += item.parts.map(p => `
      <div class="ws-subq">
        <span class="ws-sq-lbl">(${p.l})</span>
        <div class="ws-sq-body">
          <div class="ws-sq-text">${p.text}</div>
          ${answerLines(p.lines || 2, `${qid}${p.l}`)}
        </div>
      </div>
    `).join('');
  } else if (item.table) {
    inner += renderTable(item.table, qid);
    if (item.lines) inner += answerLines(item.lines, `${qid}-extra`);
  } else if (item.calcBox) {
    inner += calcBox(qid);
  } else if (item.lines) {
    inner += answerLines(item.lines, qid);
  }

  return `<div class="ws-question">${inner}</div>`;
}

// ─── RENDER: WORKSHEET ────────────────────────────────────────────────────
function renderSheet(sheetId) {
  const sheet = getSheet(sheetId);
  if (!sheet) return '<p>Sheet not found.</p>';
  const sub = subjectMeta(sheet.subject);

  const sectionsHtml = sheet.sections.map(sec => {
    const items = sec.items.map(item => renderQuestion(item)).join('');
    return `<div class="ws-section">
      <div class="ws-section-title">
        <span>${sec.title}</span>
        <span class="ws-marks-pill">${sec.marks} mark${sec.marks !== 1 ? 's' : ''}</span>
      </div>
      ${items}
    </div>`;
  }).join('');

  return `
    <div class="worksheet-page fade-in">
      <div class="worksheet-toolbar">
        <button class="back-btn" onclick="navigateFolder('${sheet.subject}')">
          ← Back to ${sub.name}
        </button>
        <div class="toolbar-divider"></div>
        <span class="toolbar-meta"><strong>${sheet.title}</strong> — Criterion ${critLabel(sheet.criterion)}</span>
        <div style="flex:1"></div>
        <span class="save-indicator" id="save-indicator"></span>
        <button class="btn btn-secondary" onclick="window.print()">Print</button>
        <button class="btn btn-primary" onclick="downloadAnswers('${sheet.id}')">Save Answers as PDF</button>
      </div>

      <div class="worksheet-doc">
        <!-- HEADER -->
        <div class="ws-header ${sheet.subject}">
          <div class="ws-school">MYP Sciences — Digital Resource Hub</div>
          <div class="ws-subject-tag">${sub.name}</div>
          <div class="ws-title">${sheet.title}</div>
          <div class="ws-info-grid">
            <div class="ws-info-field">
              <div class="ws-info-label">Student Name</div>
              <input type="text" id="ws-name" class="ws-info-input" placeholder="Enter your name" oninput="autosaveAnswers()" />
            </div>
            <div class="ws-info-field">
              <div class="ws-info-label">Class / Year Group</div>
              <input type="text" id="ws-class" class="ws-info-input" placeholder="e.g. 10B" oninput="autosaveAnswers()" />
            </div>
            <div class="ws-info-field">
              <div class="ws-info-label">Date</div>
              <input type="text" id="ws-date" class="ws-info-input" placeholder="DD / MM / YYYY" oninput="autosaveAnswers()" />
            </div>
          </div>
        </div>

        <!-- META BAR -->
        <div class="ws-meta-bar">
          <div class="ws-crit-box">
            <div>
              <div class="ws-crit-label">Criterion</div>
              <div class="ws-crit-val ${criterionClass(sheet.criterion)}">${critLabel(sheet.criterion)}</div>
            </div>
            <div class="ws-crit-name">${sheet.criterionName}</div>
          </div>
          <div class="ws-meta-pill">${sheet.duration}</div>
          <div class="ws-meta-pill">${sheet.totalMarks} marks total</div>
        </div>

        <!-- BODY -->
        <div class="ws-body">
          <div class="ws-instructions">
            <strong>Instructions</strong>
            ${sheet.instructions}
          </div>
          ${sectionsHtml}
        </div>
      </div>
    </div>
  `;
}

// ─── RENDER: FOLDER VIEW ─────────────────────────────────────────────────
function renderFolderView(subjectId) {
  const sub = subjectMeta(subjectId);
  if (!sub) return '<p>Subject not found.</p>';

  const filtered = sheetsForSubject(subjectId, state.filterCrit);
  const searched = state.search
    ? filtered.filter(s => s.title.toLowerCase().includes(state.search.toLowerCase()))
    : filtered;

  const tabs = [
    { id: 'all', label: 'All', cls: '' },
    { id: 'A',   label: 'Criterion A', cls: 'ta' },
    { id: 'BC',  label: 'Criteria B & C', cls: 'tbc' },
    { id: 'D',   label: 'Criterion D', cls: 'td' },
  ].map(t => `<button class="filter-tab ${t.cls}${state.filterCrit === t.id ? ' active' : ''}"
    onclick="setFilter('${t.id}')">${t.label}</button>`).join('');

  let filesHtml = '';
  if (searched.length === 0) {
    filesHtml = `<div class="empty-state">
      <div class="empty-state-icon">—</div>
      <h3>No task sheets found</h3>
      <p>Try changing the filter or search term.</p>
    </div>`;
  } else if (state.viewMode === 'grid') {
    filesHtml = `<div class="files-grid">
      ${searched.map((s, i) => `
        <div class="file-card stagger-${Math.min(i+1,5)} fade-in-up"
          data-subject="${s.subject}"
          onclick="navigateSheet('${s.id}')">
          <div class="file-preview">
            <div class="file-preview-doc">
              ${[1,2,3,4,5].map(() => '<div class="file-preview-line"></div>').join('')}
            </div>
          </div>
          <div class="file-info">
            <div class="file-title">${s.title}</div>
            <div class="file-badges">
              <span class="crit-badge ${criterionClass(s.criterion)}">Crit. ${critLabel(s.criterion)}</span>
              <span class="subj-badge ${s.subject}">${s.duration}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>`;
  } else {
    filesHtml = `<div class="files-list">
      ${searched.map((s, i) => `
        <div class="file-list-row stagger-${Math.min(i+1,5)} fade-in"
          data-subject="${s.subject}"
          onclick="navigateSheet('${s.id}')">
          <div class="file-list-icon subj-abbr ${s.subject}">${subjectMeta(s.subject).abbr}</div>
          <div class="file-list-info">
            <div class="file-list-title">${s.title}</div>
            <div class="file-list-meta">${s.duration} · ${s.totalMarks} marks</div>
          </div>
          <div class="file-list-badges">
            <span class="crit-badge ${criterionClass(s.criterion)}">Crit. ${critLabel(s.criterion)}</span>
          </div>
        </div>
      `).join('')}
    </div>`;
  }

  return `
    <div class="fade-in">
      <button class="back-btn" onclick="navigateDashboard()">← My Drive</button>
      <div class="breadcrumb">
        <span class="bc-item" onclick="navigateDashboard()">My Drive</span>
        <span class="bc-sep">›</span>
        <span class="bc-item current">${sub.name}</span>
      </div>

      <div class="subject-header ${subjectId}">
        <div class="subject-header-icon subj-abbr ${subjectId}">${sub.abbr}</div>
        <div class="subject-header-info">
          <h2>${sub.name}</h2>
          <p>${sub.desc} · ${SHEETS[subjectId].length} task sheets</p>
        </div>
      </div>

      <div class="section-header">
        <div class="filter-tabs">${tabs}</div>
        <div style="display:flex;gap:6px">
          <button class="icon-btn${state.viewMode === 'grid' ? ' active' : ''}" title="Grid view" onclick="setView('grid')">Grid</button>
          <button class="icon-btn${state.viewMode === 'list' ? ' active' : ''}" title="List view" onclick="setView('list')">List</button>
        </div>
      </div>

      ${filesHtml}
    </div>
  `;
}

// ─── RENDER: DASHBOARD ────────────────────────────────────────────────────
function renderDashboard() {
  const folders = SUBJECTS.map((sub, i) => {
    const sheets = SHEETS[sub.id];
    const cA  = sheets.filter(s => s.criterion === 'A').length;
    const cBC = sheets.filter(s => s.criterion === 'BC').length;
    const cD  = sheets.filter(s => s.criterion === 'D').length;
    const badges = [
      cA  ? `<span class="folder-badge">Crit. A &times;${cA}</span>` : '',
      cBC ? `<span class="folder-badge">Crit. B&amp;C &times;${cBC}</span>` : '',
      cD  ? `<span class="folder-badge">Crit. D &times;${cD}</span>` : '',
    ].join('');
    return `
      <div class="folder-card ${sub.cls} stagger-${i+1} fade-in-up" onclick="navigateFolder('${sub.id}')">
        <div class="folder-icon-wrap subj-abbr ${sub.cls}">${sub.abbr}</div>
        <div class="folder-name">${sub.name}</div>
        <div class="folder-count">${sheets.length} task sheets</div>
        <div class="folder-badges">${badges}</div>
      </div>
    `;
  }).join('');

  function fileCardHtml(s, i) {
    const sub = subjectMeta(s.subject);
    return `<div class="file-card stagger-${Math.min(i+1,5)} fade-in-up"
      data-subject="${s.subject}"
      onclick="navigateSheet('${s.id}')">
      <div class="file-preview">
        <div class="file-preview-doc">
          ${[1,2,3,4,5].map(() => '<div class="file-preview-line"></div>').join('')}
        </div>
      </div>
      <div class="file-info">
        <div class="file-title">${s.title}</div>
        <div class="file-badges">
          <span class="crit-badge ${criterionClass(s.criterion)}">Crit. ${critLabel(s.criterion)}</span>
          <span class="subj-badge ${s.subject}">${sub.name}</span>
        </div>
      </div>
    </div>`;
  }

  const searchFiltered = state.search
    ? allSheets().filter(s => s.title.toLowerCase().includes(state.search.toLowerCase()))
    : null;

  if (searchFiltered) {
    return `<div class="fade-in">
      <div class="page-header">
        <div class="page-title">Search results for &ldquo;${state.search}&rdquo;</div>
        <div class="page-subtitle">${searchFiltered.length} result${searchFiltered.length !== 1 ? 's' : ''} found</div>
      </div>
      <div class="files-grid">
        ${searchFiltered.length
          ? searchFiltered.map(fileCardHtml).join('')
          : '<div class="empty-state"><div class="empty-state-icon">—</div><h3>No results found</h3></div>'}
      </div>
    </div>`;
  }

  const allSheetsHtml = `<div class="files-grid">
    ${allSheets().map(fileCardHtml).join('')}
  </div>`;

  return `
    <div class="fade-in">
      <div class="page-header">
        <div class="breadcrumb"><span class="bc-item current">My Drive</span></div>
        <div class="page-title">My Drive</div>
        <div class="page-subtitle">MYP Sciences — Digital Resource Hub</div>
      </div>

      <div class="section-header" style="margin-bottom:14px">
        <div class="section-title">Subjects</div>
      </div>
      <div class="folders-grid">${folders}</div>

      <div class="section-header" style="margin-bottom:14px">
        <div class="section-title">All Task Sheets</div>
        <div style="display:flex;gap:6px">
          <button class="icon-btn${state.viewMode === 'grid' ? ' active' : ''}" onclick="setView('grid')">Grid</button>
          <button class="icon-btn${state.viewMode === 'list' ? ' active' : ''}" onclick="setView('list')">List</button>
        </div>
      </div>
      ${state.viewMode === 'list'
        ? `<div class="files-list">${allSheets().map((s,i) => {
            const sub = subjectMeta(s.subject);
            return `<div class="file-list-row stagger-${Math.min(i+1,5)} fade-in"
              data-subject="${s.subject}"
              onclick="navigateSheet('${s.id}')">
              <div class="file-list-icon subj-abbr ${s.subject}">${sub.abbr}</div>
              <div class="file-list-info">
                <div class="file-list-title">${s.title}</div>
                <div class="file-list-meta">${sub.name} &middot; ${s.duration} &middot; ${s.totalMarks} marks</div>
              </div>
              <div class="file-list-badges">
                <span class="crit-badge ${criterionClass(s.criterion)}">Crit. ${critLabel(s.criterion)}</span>
              </div>
            </div>`;
          }).join('')}</div>`
        : allSheetsHtml}
    </div>
  `;
}

// ─── RENDER: SIDEBAR ────────────────────────────────────────────────────
function renderSidebar() {
  const subHtml = SUBJECTS.map(s => `
    <button class="nav-item ${state.subject === s.id ? 'active' : ''}"
      onclick="navigateFolder('${s.id}')">
      <span class="nav-dot" style="background:var(--${s.cls})"></span>
      ${s.name}
    </button>
  `).join('');

  return `
    <div class="sidebar ${state.sidebarOpen ? 'open' : ''}" id="sidebar">
      <div class="sidebar-logo">
        <div class="logo-icon">
          <span class="logo-icon-text">Sc</span>
        </div>
        <div>
          <div class="logo-text">Sciences Drive</div>
          <div class="logo-sub">MYP Resource Hub</div>
        </div>
      </div>
      <nav class="sidebar-nav">
        <button class="nav-item ${state.view === 'dashboard' && !state.subject ? 'active' : ''}"
          onclick="navigateDashboard()">
          <span class="nav-home-icon"></span>
          My Drive
        </button>
        <div class="sidebar-section-label">Subjects</div>
        ${subHtml}
        <div class="sidebar-section-label">By Criterion</div>
        <button class="nav-item" onclick="navigateDashboard()">
          <span class="crit-letter" style="color:var(--crit-a)">A</span>
          Knowing &amp; Understanding
        </button>
        <button class="nav-item" onclick="navigateDashboard()">
          <span class="crit-letter" style="color:var(--crit-bc)">B</span>
          Inquiring &amp; Designing
        </button>
        <button class="nav-item" onclick="navigateDashboard()">
          <span class="crit-letter" style="color:var(--crit-bc)">C</span>
          Processing &amp; Evaluating
        </button>
        <button class="nav-item" onclick="navigateDashboard()">
          <span class="crit-letter" style="color:var(--crit-d)">D</span>
          Reflecting on Impacts
        </button>
      </nav>
      <div class="sidebar-footer">
        MYP Sciences &middot; IB Curriculum<br>
        ${allSheets().length} task sheets
      </div>
    </div>
  `;
}

// ─── RENDER: TOPBAR ───────────────────────────────────────────────────────
function renderTopbar() {
  return `
    <div class="topbar">
      <button class="hamburger" onclick="toggleSidebar()">&#9776;</button>
      <div class="search-bar">
        <svg class="search-icon" width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
          <circle cx="6.5" cy="6.5" r="5"/><line x1="10.5" y1="10.5" x2="15" y2="15"/>
        </svg>
        <input type="text" placeholder="Search task sheets…"
          value="${state.search}"
          id="search-input"
          oninput="handleSearch(this.value)" />
      </div>
      <div class="topbar-spacer"></div>
      <div class="topbar-actions">
        <button class="icon-btn" title="Home" onclick="navigateDashboard()">Home</button>
        <button class="icon-btn" title="Print" onclick="window.print()">Print</button>
      </div>
    </div>
  `;
}

// ─── MAIN RENDER ──────────────────────────────────────────────────────────
function renderApp() {
  let pageContent = '';

  if (state.view === 'dashboard') {
    pageContent = renderDashboard();
  } else if (state.view === 'folder') {
    pageContent = renderFolderView(state.subject);
  } else if (state.view === 'sheet') {
    pageContent = renderSheet(state.sheetId);
  }

  document.getElementById('app').innerHTML = `
    <div class="app-layout">
      ${renderSidebar()}
      <div class="main-content">
        ${renderTopbar()}
        <div class="page-content">
          ${pageContent}
        </div>
      </div>
    </div>
  `;

  // Re-attach search input focus if active
  if (state.search) {
    const inp = document.getElementById('search-input');
    if (inp) { inp.focus(); inp.setSelectionRange(inp.value.length, inp.value.length); }
  }

  // Restore saved answers when opening a sheet
  if (state.view === 'sheet') {
    loadAnswers(state.sheetId);
  }
}

// ─── AUTOSAVE & DOWNLOAD ─────────────────────────────────────────────────

function autosaveAnswers() {
  if (state.view !== 'sheet' || !state.sheetId) return;
  const data = collectAnswerData();
  try {
    localStorage.setItem(`myp-answers-${state.sheetId}`, JSON.stringify(data));
    const indicator = document.getElementById('save-indicator');
    if (indicator) {
      indicator.textContent = 'Saved';
      indicator.classList.add('visible');
      clearTimeout(indicator._t);
      indicator._t = setTimeout(() => indicator.classList.remove('visible'), 1800);
    }
  } catch (e) { /* storage full — silent fail */ }
}

function collectAnswerData() {
  const inputs = document.querySelectorAll('.ans-input[data-question]');
  const answers = {};
  inputs.forEach(el => {
    if (el.dataset.question) answers[el.dataset.question] = el.value;
  });
  return {
    name:  document.getElementById('ws-name')?.value  || '',
    class: document.getElementById('ws-class')?.value || '',
    date:  document.getElementById('ws-date')?.value  || '',
    answers,
  };
}

function loadAnswers(sheetId) {
  try {
    const raw = localStorage.getItem(`myp-answers-${sheetId}`);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (data.name)  { const el = document.getElementById('ws-name');  if (el) el.value = data.name; }
    if (data.class) { const el = document.getElementById('ws-class'); if (el) el.value = data.class; }
    if (data.date)  { const el = document.getElementById('ws-date');  if (el) el.value = data.date; }
    if (data.answers) {
      Object.entries(data.answers).forEach(([qid, val]) => {
        const el = document.querySelector(`.ans-input[data-question="${qid}"]`);
        if (el) el.value = val;
      });
    }
  } catch (e) { /* corrupted data — silent fail */ }
}

function downloadAnswers(sheetId) {
  const sheet = getSheet(sheetId);
  const sub   = subjectMeta(sheet.subject);
  const data  = collectAnswerData();

  // Build sections HTML for the export document
  function esc(str) {
    return (str || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  }
  function ansBlock(val, placeholder) {
    const filled = (val || '').trim();
    return filled
      ? `<div class="ans">${esc(filled).replace(/\n/g,'<br>')}</div>`
      : `<div class="ans empty">${placeholder || 'No answer provided'}</div>`;
  }

  let sectionsHtml = '';
  sheet.sections.forEach(sec => {
    sectionsHtml += `<div class="section"><div class="sec-title">${esc(sec.title)}</div>`;
    sec.items.forEach(item => {
      if (item.type === 'info') return;
      const qid = `q${item.n}`;
      sectionsHtml += `<div class="question">
        <div class="q-text"><span class="q-num">${item.n}.</span> ${item.text} <span class="marks">[${item.marks} mark${item.marks !== 1 ? 's' : ''}]</span></div>`;

      if (item.parts) {
        item.parts.forEach(p => {
          const ans = data.answers[`${qid}${p.l}`] || '';
          sectionsHtml += `<div class="part"><span class="part-lbl">(${p.l})</span> <span class="part-text">${esc(p.text)}</span>${ansBlock(ans)}</div>`;
        });
      } else if (item.table) {
        sectionsHtml += `<table class="ans-table"><thead><tr>${item.table.headers.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>`;
        item.table.rows.forEach((row, ri) => {
          sectionsHtml += `<tr>`;
          row.forEach((cell, ci) => {
            if (ci === 0) {
              sectionsHtml += `<td class="row-label">${esc(cell)}</td>`;
            } else {
              const tqid = `${qid}-r${ri+1}c${ci}`;
              const val  = (data.answers[tqid] || '').trim();
              sectionsHtml += `<td class="${val ? 'filled' : 'empty-cell'}">${val ? esc(val).replace(/\n/g,'<br>') : ''}</td>`;
            }
          });
          sectionsHtml += `</tr>`;
        });
        sectionsHtml += `</tbody></table>`;
        if (item.lines) sectionsHtml += ansBlock(data.answers[`${qid}-extra`]);
      } else if (item.calcBox) {
        const ans = data.answers[qid] || '';
        sectionsHtml += `<div class="calc-ans-label">Working:</div>${ansBlock(ans, 'No working shown')}`;
      } else if (item.lines) {
        sectionsHtml += ansBlock(data.answers[qid]);
      }

      sectionsHtml += `</div>`;
    });
    sectionsHtml += `</div>`;
  });

  const critColor = { A: '#DC2626', BC: '#D97706', D: '#7C3AED' };
  const subColor  = { biology: '#059669', chemistry: '#2563EB', physics: '#7C3AED' };
  const cc = critColor[sheet.criterion] || '#3B82F6';
  const sc = subColor[sheet.subject] || '#3B82F6';
  const now = new Date().toLocaleDateString('en-GB', { day:'2-digit', month:'long', year:'numeric' });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>${sheet.title} — Answers</title>
<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: 'Segoe UI', Arial, sans-serif; background: #f8fafc; color: #1E293B; line-height: 1.6; }
  .page { max-width: 820px; margin: 0 auto; background: white; min-height: 100vh; box-shadow: 0 0 40px rgba(0,0,0,0.08); }
  .doc-header { padding: 28px 36px 22px; border-bottom: 3px solid ${sc}; background: linear-gradient(135deg, #f0f9ff, white); }
  .doc-header .eyebrow { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #94A3B8; margin-bottom: 4px; }
  .doc-header h1 { font-size: 26px; font-weight: 800; color: #1E293B; margin-bottom: 10px; }
  .crit-badge { display: inline-flex; align-items: center; gap: 6px; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 700; background: ${cc}18; color: ${cc}; margin-right: 8px; }
  .subj-pill { display: inline-flex; align-items: center; padding: 4px 12px; border-radius: 999px; font-size: 11px; font-weight: 600; background: ${sc}18; color: ${sc}; margin-right: 6px; }
  .meta-pill { display: inline-flex; align-items: center; padding: 4px 10px; border-radius: 999px; font-size: 11px; color: #64748B; background: #F1F5F9; margin-right: 6px; }
  .student-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 12px; margin-top: 16px; }
  .student-field label { font-size: 9px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: #94A3B8; display: block; margin-bottom: 2px; }
  .student-field .val { font-size: 14px; font-weight: 600; color: #1E293B; border-bottom: 2px solid #E2E8F0; padding-bottom: 4px; min-height: 26px; }
  .body { padding: 28px 36px 48px; }
  .section { margin-bottom: 28px; }
  .sec-title { font-size: 11px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; color: #94A3B8; border-bottom: 1px solid #E2E8F0; padding-bottom: 7px; margin-bottom: 16px; }
  .question { margin-bottom: 18px; }
  .q-text { font-size: 13.5px; font-weight: 500; color: #1E293B; margin-bottom: 8px; line-height: 1.55; }
  .q-num { font-weight: 800; }
  .marks { font-size: 11.5px; color: #94A3B8; font-weight: 400; }
  .ans { background: #F0FDF4; border-left: 3px solid ${sc}; padding: 10px 14px; border-radius: 0 6px 6px 0; font-size: 13.5px; min-height: 38px; white-space: pre-wrap; line-height: 1.6; margin-top: 4px; }
  .ans.empty { background: #F8FAFC; border-left-color: #E2E8F0; color: #CBD5E0; font-style: italic; }
  .part { margin: 8px 0 0 16px; }
  .part-lbl { font-weight: 700; color: #475569; font-size: 13px; }
  .part-text { font-size: 13px; color: #475569; }
  .calc-ans-label { font-size: 10px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: #94A3B8; margin-top: 8px; margin-bottom: 3px; }
  .ans-table { width: 100%; border-collapse: collapse; font-size: 12.5px; margin-top: 8px; }
  .ans-table th { background: #F1F5F9; padding: 8px 12px; font-size: 10px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #94A3B8; border: 1px solid #E2E8F0; text-align: left; }
  .ans-table td { padding: 9px 12px; border: 1px solid #E2E8F0; }
  .ans-table td.row-label { font-weight: 500; color: #475569; background: #F8FAFC; }
  .ans-table td.filled { background: #F0FDF4; }
  .ans-table td.empty-cell { background: #FAFBFC; color: #CBD5E0; }
  .footer { padding: 16px 36px; border-top: 1px solid #E2E8F0; font-size: 11px; color: #CBD5E0; display: flex; justify-content: space-between; }
  @media print {
    body { background: white; }
    .page { box-shadow: none; max-width: 100%; }
    .ans.empty { display: none; }
    @page { margin: 15mm; size: A4; }
  }
  @media screen {
    .print-hint { display: flex; align-items: center; justify-content: center; gap: 12px; padding: 12px 24px; background: #1E293B; color: #94A3B8; font-size: 12px; position: sticky; top: 0; z-index: 10; }
    .print-hint strong { color: #F8FAFC; }
    .print-hint button { padding: 6px 16px; background: #3B82F6; color: white; border: none; border-radius: 6px; font-size: 12px; font-weight: 600; cursor: pointer; }
    .print-hint button:hover { background: #2563EB; }
    .print-hint .close-hint { background: none; border: none; color: #64748B; cursor: pointer; font-size: 16px; line-height: 1; padding: 2px 6px; border-radius: 4px; }
    .print-hint .close-hint:hover { color: #F8FAFC; }
  }
</style>
</head>
<body>
<div class="print-hint" id="hint">
  <span>To save as PDF: <strong>File → Print</strong> (or Ctrl/Cmd+P) then choose <strong>Save as PDF</strong> as the destination.</span>
  <button onclick="window.print()">Save as PDF</button>
  <button class="close-hint" onclick="document.getElementById('hint').remove()" title="Dismiss">&#x2715;</button>
</div>
<div class="page">
  <div class="doc-header">
    <div class="eyebrow">MYP Sciences — Completed Worksheet</div>
    <h1>${sheet.title}</h1>
    <div>
      <span class="crit-badge">Criterion ${critLabel(sheet.criterion)}: ${sheet.criterionName}</span>
      <span class="subj-pill">${sub.name}</span>
      <span class="meta-pill">${sheet.duration}</span>
      <span class="meta-pill">${sheet.totalMarks} marks</span>
    </div>
    <div class="student-grid">
      <div class="student-field"><label>Student Name</label><div class="val">${esc(data.name) || '&nbsp;'}</div></div>
      <div class="student-field"><label>Class / Year Group</label><div class="val">${esc(data.class) || '&nbsp;'}</div></div>
      <div class="student-field"><label>Date</label><div class="val">${esc(data.date) || '&nbsp;'}</div></div>
    </div>
  </div>
  <div class="body">${sectionsHtml}</div>
  <div class="footer">
    <span>MYP Sciences Drive</span>
    <span>Downloaded ${now}</span>
  </div>
</div>
</body>
</html>`;

  const win = window.open('', '_blank');
  if (!win) {
    alert('Pop-up blocked. Please allow pop-ups for this page and try again.');
    return;
  }
  win.document.write(html);
  win.document.close();
  // Slight delay lets the browser finish rendering before print dialog opens
  setTimeout(() => win.print(), 400);
}

// ─── NAVIGATION ──────────────────────────────────────────────────────────
function navigateDashboard() {
  state.view = 'dashboard';
  state.subject = null;
  state.sheetId = null;
  state.filterCrit = 'all';
  state.sidebarOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function navigateFolder(subjectId) {
  state.view = 'folder';
  state.subject = subjectId;
  state.sheetId = null;
  state.filterCrit = 'all';
  state.sidebarOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function navigateSheet(sheetId) {
  state.view = 'sheet';
  state.sheetId = sheetId;
  state.subject = subjectOf(sheetId);
  state.sidebarOpen = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  renderApp();
}

function setFilter(crit) {
  state.filterCrit = crit;
  renderApp();
}

function setView(mode) {
  state.viewMode = mode;
  renderApp();
}

function handleSearch(val) {
  state.search = val;
  if (state.view !== 'dashboard') {
    state.view = 'dashboard';
    state.subject = null;
  }
  renderApp();
}

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  if (sidebar) sidebar.classList.toggle('open', state.sidebarOpen);
}

// Close sidebar on outside click (mobile)
document.addEventListener('click', e => {
  if (state.sidebarOpen && !e.target.closest('#sidebar') && !e.target.closest('.hamburger')) {
    state.sidebarOpen = false;
    const sidebar = document.getElementById('sidebar');
    if (sidebar) sidebar.classList.remove('open');
  }
});

// Keyboard shortcut: Escape to go back
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (state.view === 'sheet') navigateFolder(state.subject);
    else if (state.view === 'folder') navigateDashboard();
  }
});

// ─── INIT ─────────────────────────────────────────────────────────────────
renderApp();
