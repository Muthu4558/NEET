const questions = [
  {
    "id": 1,
    "question": "What is the SI unit of pressure?",
    "options": ["Pascal", "Joule", "Newton", "Watt"],
    "correctAnswer": "Pascal"
  },
  {
    "id": 2,
    "question": "Which of the following is a derived quantity?",
    "options": ["Length", "Mass", "Time", "Velocity"],
    "correctAnswer": "Velocity"
  },
  {
    "id": 3,
    "question": "Displacement is a:",
    "options": ["Scalar quantity", "Vector quantity", "Dimensionless", "None of the above"],
    "correctAnswer": "Vector quantity"
  },
  {
    "id": 4,
    "question": "Which of the following represents uniformly accelerated motion?",
    "options": ["v = u + at", "s = ut", "v = d/t", "s = vt"],
    "correctAnswer": "v = u + at"
  },
  {
    "id": 5,
    "question": "The area under a velocity-time graph gives:",
    "options": ["Speed", "Distance", "Displacement", "Acceleration"],
    "correctAnswer": "Displacement"
  },
  {
    "id": 6,
    "question": "Newton's second law of motion gives the measure of:",
    "options": ["Inertia", "Momentum", "Force", "Energy"],
    "correctAnswer": "Force"
  },
  {
    "id": 7,
    "question": "Action and reaction forces act on:",
    "options": ["Same body", "Different bodies", "At same point", "None"],
    "correctAnswer": "Different bodies"
  },
  {
    "id": 8,
    "question": "The value of 'g' on the surface of Earth is approximately:",
    "options": ["8.9 m/s²", "9.8 m/s²", "10.2 m/s²", "7.6 m/s²"],
    "correctAnswer": "9.8 m/s²"
  },
  {
    "id": 9,
    "question": "Acceleration due to gravity on Moon is:",
    "options": ["Equal to Earth", "1/6th of Earth", "9.8 m/s²", "Zero"],
    "correctAnswer": "1/6th of Earth"
  },
  {
    "id": 10,
    "question": "Centripetal force always acts:",
    "options": ["Outward", "Tangentially", "Inward", "Vertically"],
    "correctAnswer": "Inward"
  },
  {
    "id": 11,
    "question": "Rotational analog of force is:",
    "options": ["Torque", "Moment", "Power", "Angular velocity"],
    "correctAnswer": "Torque"
  },
  {
    "id": 12,
    "question": "Moment of inertia of a body depends on:",
    "options": ["Mass", "Axis of rotation", "Shape", "All of these"],
    "correctAnswer": "All of these"
  },
  {
    "id": 13,
    "question": "Work done is zero when:",
    "options": ["Force is zero", "Displacement is zero", "Angle is 90°", "All of the above"],
    "correctAnswer": "All of the above"
  },
  {
    "id": 14,
    "question": "SI unit of Power is:",
    "options": ["Watt", "Joule", "Newton", "Kilowatt-hour"],
    "correctAnswer": "Watt"
  },
  {
    "id": 15,
    "question": "Which law is used in the principle of calorimetry?",
    "options": ["Law of conservation of energy", "Newton’s law", "Boyle’s law", "Charles’s law"],
    "correctAnswer": "Law of conservation of energy"
  },
  {
    "id": 16,
    "question": "At constant temperature, volume of a gas is inversely proportional to pressure. This is:",
    "options": ["Boyle's law", "Charles's law", "Avogadro's law", "Ideal gas law"],
    "correctAnswer": "Boyle's law"
  },
  {
    "id": 17,
    "question": "Average kinetic energy of gas molecules is directly proportional to:",
    "options": ["Pressure", "Temperature", "Volume", "Density"],
    "correctAnswer": "Temperature"
  },
  {
    "id": 18,
    "question": "Which of the following is a thermodynamic state function?",
    "options": ["Heat", "Work", "Internal Energy", "All of the above"],
    "correctAnswer": "Internal Energy"
  },
  {
    "id": 19,
    "question": "Which law states that entropy of the universe always increases?",
    "options": ["Zeroth law", "First law", "Second law", "Third law"],
    "correctAnswer": "Second law"
  },
  {
    "id": 20,
    "question": "Unit of electric charge is:",
    "options": ["Coulomb", "Volt", "Ampere", "Ohm"],
    "correctAnswer": "Coulomb"
  },
  {
    "id": 21,
    "question": "Like charges always:",
    "options": ["Attract", "Repel", "Neutralize", "None"],
    "correctAnswer": "Repel"
  },
  {
    "id": 22,
    "question": "Coulomb's law is valid only for:",
    "options": ["Point charges", "Extended bodies", "Neutral bodies", "None of these"],
    "correctAnswer": "Point charges"
  },
  {
    "id": 23,
    "question": "Electrostatic potential is:",
    "options": ["A vector", "A scalar", "Always negative", "None"],
    "correctAnswer": "A scalar"
  },
  {
    "id": 24,
    "question": "Unit of electric field is:",
    "options": ["N/C", "C/N", "V", "Coulomb"],
    "correctAnswer": "N/C"
  },
  {
    "id": 25,
    "question": "Work done in moving a charge in an equipotential surface is:",
    "options": ["Maximum", "Zero", "Infinite", "Negative"],
    "correctAnswer": "Zero"
  },
  {
    "id": 26,
    "question": "Which of the following is a SI base unit?",
    "options": ["Liter", "Mole", "Calorie", "Degree"],
    "correctAnswer": "Mole"
  },
  {
    "id": 27,
    "question": "Which law is used in determining the empirical formula from elemental analysis?",
    "options": ["Law of conservation of mass", "Law of definite proportions", "Law of multiple proportions", "Avogadro’s law"],
    "correctAnswer": "Law of definite proportions"
  },
  {
    "id": 28,
    "question": "1 mole of any substance contains:",
    "options": ["6.022 × 10²³ particles", "1 gram of particles", "1 liter of particles", "22.4 grams of particles"],
    "correctAnswer": "6.022 × 10²³ particles"
  },
  {
    "id": 29,
    "question": "The number of neutrons in carbon-12 is:",
    "options": ["6", "12", "0", "18"],
    "correctAnswer": "6"
  },
  {
    "id": 30,
    "question": "Which subatomic particle was discovered by J.J. Thomson?",
    "options": ["Proton", "Neutron", "Electron", "Nucleus"],
    "correctAnswer": "Electron"
  },
  {
    "id": 31,
    "question": "Which quantum number defines the shape of an orbital?",
    "options": ["Principal quantum number", "Azimuthal quantum number", "Magnetic quantum number", "Spin quantum number"],
    "correctAnswer": "Azimuthal quantum number"
  },
  {
    "id": 32,
    "question": "Which orbital has a spherical shape?",
    "options": ["s", "p", "d", "f"],
    "correctAnswer": "s"
  },
  {
    "id": 33,
    "question": "In a d orbital, the maximum number of electrons that can be accommodated is:",
    "options": ["2", "6", "10", "14"],
    "correctAnswer": "10"
  },
  {
    "id": 34,
    "question": "Which of the following has the highest electronegativity?",
    "options": ["Oxygen", "Chlorine", "Fluorine", "Nitrogen"],
    "correctAnswer": "Fluorine"
  },
  {
    "id": 35,
    "question": "Ionic bonds are formed between:",
    "options": ["Two metals", "Two non-metals", "A metal and a non-metal", "Inert gases"],
    "correctAnswer": "A metal and a non-metal"
  },
  {
    "id": 36,
    "question": "A covalent bond is formed by:",
    "options": ["Transfer of electrons", "Sharing of electrons", "Loss of electrons", "Gain of electrons"],
    "correctAnswer": "Sharing of electrons"
  },
  {
    "id": 37,
    "question": "Which of the following molecules has a linear geometry?",
    "options": ["CO₂", "NH₃", "CH₄", "H₂O"],
    "correctAnswer": "CO₂"
  },
  {
    "id": 38,
    "question": "In chemical thermodynamics, a spontaneous process is one that:",
    "options": ["Occurs on its own", "Requires external energy", "Is always fast", "Never occurs"],
    "correctAnswer": "Occurs on its own"
  },
  {
    "id": 39,
    "question": "Enthalpy change is defined as:",
    "options": ["ΔE + PΔV", "ΔV + PΔE", "ΔP + VΔE", "ΔQ - W"],
    "correctAnswer": "ΔE + PΔV"
  },
  {
    "id": 40,
    "question": "Which of the following hydrocarbons is alkyne?",
    "options": ["Ethene", "Ethane", "Ethyne", "Propane"],
    "correctAnswer": "Ethyne"
  },
  {
    "id": 41,
    "question": "Which hydrocarbon is used in LPG gas?",
    "options": ["Methane", "Ethane", "Butane", "Propene"],
    "correctAnswer": "Butane"
  },
  {
    "id": 42,
    "question": "The IUPAC name of CH₄ is:",
    "options": ["Methene", "Methyne", "Methane", "Methyl"],
    "correctAnswer": "Methane"
  },
  {
    "id": 43,
    "question": "Redox reactions involve:",
    "options": ["Only oxidation", "Only reduction", "Both oxidation and reduction", "Neither oxidation nor reduction"],
    "correctAnswer": "Both oxidation and reduction"
  },
  {
    "id": 44,
    "question": "The reducing agent in a redox reaction is the substance that:",
    "options": ["Gets oxidized", "Gets reduced", "Loses protons", "Gains neutrons"],
    "correctAnswer": "Gets oxidized"
  },
  {
    "id": 45,
    "question": "Which of the following is an oxidizing agent?",
    "options": ["H₂", "Na", "O₂", "Cl⁻"],
    "correctAnswer": "O₂"
  },
  {
    "id": 46,
    "question": "Which of the following conducts electricity in molten state?",
    "options": ["NaCl", "CCl₄", "CH₄", "CO₂"],
    "correctAnswer": "NaCl"
  },
  {
    "id": 47,
    "question": "In electrolysis, the anode is the electrode where:",
    "options": ["Reduction occurs", "Oxidation occurs", "Electrons are gained", "No reaction occurs"],
    "correctAnswer": "Oxidation occurs"
  },
  {
    "id": 48,
    "question": "Which law relates mass deposited and charge passed during electrolysis?",
    "options": ["Faraday’s first law", "Boyle’s law", "Ohm’s law", "Charles’s law"],
    "correctAnswer": "Faraday’s first law"
  },
  {
    "id": 49,
    "question": "Which ion moves toward the cathode during electrolysis?",
    "options": ["Anion", "Cation", "Neutral", "None"],
    "correctAnswer": "Cation"
  },
  {
    "id": 50,
    "question": "The unit of electrode potential is:",
    "options": ["Volt", "Ampere", "Ohm", "Farad"],
    "correctAnswer": "Volt"
  },
  {
    "id": 51,
    "question": "Who is known as the father of taxonomy?",
    "options": ["Charles Darwin", "Aristotle", "Carolus Linnaeus", "Gregor Mendel"],
    "correctAnswer": "Carolus Linnaeus"
  },
  {
    "id": 52,
    "question": "Binomial nomenclature consists of:",
    "options": ["Family and genus", "Order and species", "Genus and species", "Phylum and class"],
    "correctAnswer": "Genus and species"
  },
  {
    "id": 53,
    "question": "Which of the following is not a taxonomic category?",
    "options": ["Phylum", "Class", "Kingdom", "Species name"],
    "correctAnswer": "Species name"
  },
  {
    "id": 54,
    "question": "Which type of epithelium lines the kidney tubules?",
    "options": ["Squamous", "Columnar", "Cuboidal", "Ciliated"],
    "correctAnswer": "Cuboidal"
  },
  {
    "id": 55,
    "question": "Which connective tissue connects muscle to bone?",
    "options": ["Ligament", "Tendon", "Cartilage", "Areolar"],
    "correctAnswer": "Tendon"
  },
  {
    "id": 56,
    "question": "Which organ is absent in plants but present in animals?",
    "options": ["Chloroplast", "Cell wall", "Centrosome", "Vacuole"],
    "correctAnswer": "Centrosome"
  },
  {
    "id": 57,
    "question": "Which cell organelle is known as the powerhouse of the cell?",
    "options": ["Chloroplast", "Mitochondria", "Golgi body", "Nucleus"],
    "correctAnswer": "Mitochondria"
  },
  {
    "id": 58,
    "question": "Which of the following is not a component of the endomembrane system?",
    "options": ["Golgi complex", "Lysosome", "Mitochondria", "Endoplasmic reticulum"],
    "correctAnswer": "Mitochondria"
  },
  {
    "id": 59,
    "question": "The fluid mosaic model explains the structure of:",
    "options": ["Mitochondria", "Plasma membrane", "Chloroplast", "Nucleus"],
    "correctAnswer": "Plasma membrane"
  },
  {
    "id": 60,
    "question": "Which pigment is responsible for capturing light in photosynthesis?",
    "options": ["Carotene", "Chlorophyll", "Anthocyanin", "Xanthophyll"],
    "correctAnswer": "Chlorophyll"
  },
  {
    "id": 61,
    "question": "Stomata open due to:",
    "options": ["Influx of potassium ions", "Efflux of water", "Efflux of potassium ions", "Lack of sunlight"],
    "correctAnswer": "Influx of potassium ions"
  },
  {
    "id": 62,
    "question": "Transpiration is least in:",
    "options": ["Dry wind", "Sunny day", "Humid condition", "Hot and dry day"],
    "correctAnswer": "Humid condition"
  },
  {
    "id": 63,
    "question": "The main site of photosynthesis in a leaf is:",
    "options": ["Upper epidermis", "Xylem", "Phloem", "Palisade mesophyll"],
    "correctAnswer": "Palisade mesophyll"
  },
  {
    "id": 64,
    "question": "The enzyme pepsin acts in:",
    "options": ["Mouth", "Small intestine", "Stomach", "Large intestine"],
    "correctAnswer": "Stomach"
  },
  {
    "id": 65,
    "question": "Which blood vessel carries oxygenated blood from lungs to heart?",
    "options": ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    "correctAnswer": "Pulmonary vein"
  },
  {
    "id": 66,
    "question": "Which part of the brain controls breathing?",
    "options": ["Cerebellum", "Medulla oblongata", "Cerebrum", "Thalamus"],
    "correctAnswer": "Medulla oblongata"
  },
  {
    "id": 67,
    "question": "Which hormone regulates glucose levels in blood?",
    "options": ["Adrenaline", "Insulin", "Thyroxine", "Cortisol"],
    "correctAnswer": "Insulin"
  },
  {
    "id": 68,
    "question": "Which structure filters the blood in the kidney?",
    "options": ["Tubule", "Nephron", "Glomerulus", "Ureter"],
    "correctAnswer": "Glomerulus"
  },
  {
    "id": 69,
    "question": "What is the genetic composition of a gamete?",
    "options": ["Diploid", "Triploid", "Tetraploid", "Haploid"],
    "correctAnswer": "Haploid"
  },
  {
    "id": 70,
    "question": "Gregor Mendel used which plant for his experiments?",
    "options": ["Sunflower", "Wheat", "Pea", "Tomato"],
    "correctAnswer": "Pea"
  },
  {
    "id": 71,
    "question": "The phenotypic ratio of monohybrid cross in F2 generation is:",
    "options": ["3:1", "1:2:1", "9:3:3:1", "2:1"],
    "correctAnswer": "3:1"
  },
  {
    "id": 72,
    "question": "Which term describes the physical appearance of an organism?",
    "options": ["Genotype", "Phenotype", "Karyotype", "Genome"],
    "correctAnswer": "Phenotype"
  },
  {
    "id": 73,
    "question": "A heterozygous tall pea plant is crossed with a dwarf plant. The ratio of tall to dwarf in offspring will be:",
    "options": ["1:1", "3:1", "2:1", "All tall"],
    "correctAnswer": "1:1"
  },
  {
    "id": 74,
    "question": "Which law of inheritance states that alleles segregate during gamete formation?",
    "options": ["Law of dominance", "Law of segregation", "Law of independent assortment", "Law of purity"],
    "correctAnswer": "Law of segregation"
  },
  {
    "id": 75,
    "question": "Mendel's dihybrid cross led to which phenotypic ratio in F2 generation?",
    "options": ["3:1", "1:2:1", "9:3:3:1", "1:1:1:1"],
    "correctAnswer": "9:3:3:1"
  }

]

export default questions;