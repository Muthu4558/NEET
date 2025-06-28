const questions = [
  {
    "id": 1,
    "question": "Which of the following is a derived SI unit?",
    "options": ["Ampere", "Kilogram", "Pascal", "Candela"],
    "correctAnswer": "Pascal"
  },
  {
    "id": 2,
    "question": "A physical quantity has dimensions of [ML^2T^-2]. It may represent:",
    "options": ["Energy", "Force", "Pressure", "Work"],
    "correctAnswer": "Energy"
  },
  {
    "id": 3,
    "question": "A car accelerates from rest at a constant rate α for a time t and then decelerates at the same rate for the same time. What is the maximum velocity attained?",
    "options": ["αt", "2αt", "αt/2", "t/α"],
    "correctAnswer": "αt"
  },
  {
    "id": 4,
    "question": "The slope of velocity-time graph gives:",
    "options": ["Displacement", "Acceleration", "Speed", "Distance"],
    "correctAnswer": "Acceleration"
  },
  {
    "id": 5,
    "question": "A particle moves in a circle of radius R with a constant speed v. The acceleration of the particle is:",
    "options": ["v²/R", "R/v²", "v/R", "v²R"],
    "correctAnswer": "v²/R"
  },
  {
    "id": 6,
    "question": "A man of mass 60 kg stands on a weighing scale in a lift which is moving upward with a uniform acceleration of 5 m/s². The reading of the scale is (g = 10 m/s²):",
    "options": ["600 N", "900 N", "300 N", "0 N"],
    "correctAnswer": "900 N"
  },
  {
    "id": 7,
    "question": "The tension in a string holding a block of 2 kg moving in a vertical circle of radius 2 m at the lowest point is (v = 3 m/s, g = 10 m/s²):",
    "options": ["44 N", "28 N", "32 N", "40 N"],
    "correctAnswer": "44 N"
  },
  {
    "id": 8,
    "question": "The value of acceleration due to gravity decreases with:",
    "options": ["Increase in mass of Earth", "Height above the Earth's surface", "Depth below the surface", "Both B and C"],
    "correctAnswer": "Both B and C"
  },
  {
    "id": 9,
    "question": "What is the escape velocity on Earth?",
    "options": ["11.2 km/s", "7.9 km/s", "9.8 km/s", "12.5 km/s"],
    "correctAnswer": "11.2 km/s"
  },
  {
    "id": 10,
    "question": "Moment of inertia of a thin rod of length L and mass M about an axis perpendicular to its length and through one end is:",
    "options": ["(1/3)ML²", "(1/2)ML²", "(1/12)ML²", "(2/3)ML²"],
    "correctAnswer": "(1/3)ML²"
  },
  {
    "id": 11,
    "question": "A disc and a ring of same mass and radius are allowed to roll down an inclined plane. Which will reach the bottom first?",
    "options": ["Disc", "Ring", "Both simultaneously", "Depends on slope"],
    "correctAnswer": "Disc"
  },
  {
    "id": 12,
    "question": "A body is projected vertically upwards with a speed of 20 m/s. The work done by the gravitational force when it reaches maximum height is:",
    "options": ["Negative", "Positive", "Zero", "Infinite"],
    "correctAnswer": "Negative"
  },
  {
    "id": 13,
    "question": "Work done by centripetal force on a particle moving in circular path is:",
    "options": ["Positive", "Negative", "Zero", "Infinite"],
    "correctAnswer": "Zero"
  },
  {
    "id": 14,
    "question": "The relation between kinetic energy and momentum is:",
    "options": ["K = p²/2m", "K = 2p²/m", "K = p²/m", "K = √p/m"],
    "correctAnswer": "K = p²/2m"
  },
  {
    "id": 15,
    "question": "According to kinetic theory, the pressure exerted by a gas is due to:",
    "options": ["Attractive forces between molecules", "Repulsive forces", "Random motion of molecules", "Weight of gas molecules"],
    "correctAnswer": "Random motion of molecules"
  },
  {
    "id": 16,
    "question": "Which law states that the total pressure exerted by a mixture of non-reacting gases is equal to the sum of the partial pressures?",
    "options": ["Boyle’s Law", "Dalton’s Law", "Charles’s Law", "Gay-Lussac's Law"],
    "correctAnswer": "Dalton’s Law"
  },
  {
    "id": 17,
    "question": "Root mean square speed of gas molecules is directly proportional to:",
    "options": ["Temperature", "Volume", "Mass", "Pressure"],
    "correctAnswer": "Temperature"
  },
  {
    "id": 18,
    "question": "Which of the following has the highest root mean square speed at the same temperature?",
    "options": ["Hydrogen", "Oxygen", "Nitrogen", "Carbon Dioxide"],
    "correctAnswer": "Hydrogen"
  },
  {
    "id": 19,
    "question": "In a cyclic process, the net work done by the system is equal to:",
    "options": ["Internal energy", "Change in pressure", "Heat absorbed", "Area enclosed by the cycle in PV diagram"],
    "correctAnswer": "Area enclosed by the cycle in PV diagram"
  },
  {
    "id": 20,
    "question": "The efficiency of a Carnot engine depends on:",
    "options": ["Working substance", "Temperature of source and sink", "Pressure", "Specific heat"],
    "correctAnswer": "Temperature of source and sink"
  },
  {
    "id": 21,
    "question": "Which process has zero change in internal energy?",
    "options": ["Isothermal", "Adiabatic", "Isochoric", "Isobaric"],
    "correctAnswer": "Isothermal"
  },
  {
    "id": 22,
    "question": "Electric field inside a conductor in electrostatic equilibrium is:",
    "options": ["Maximum", "Zero", "Uniform", "Variable"],
    "correctAnswer": "Zero"
  },
  {
    "id": 23,
    "question": "The electric flux through a closed surface depends on:",
    "options": ["Volume enclosed", "Area of surface", "Net charge enclosed", "Shape of surface"],
    "correctAnswer": "Net charge enclosed"
  },
  {
    "id": 24,
    "question": "The unit of electric flux is:",
    "options": ["Nm²/C", "C/N", "N/C", "C/m²"],
    "correctAnswer": "Nm²/C"
  },
  {
    "id": 25,
    "question": "Two point charges +Q and -Q are placed at a distance d. The electric dipole moment is:",
    "options": ["Q × d", "Q/d", "Qd²", "Q + d"],
    "correctAnswer": "Q × d"
  },
  {
    "id": 26,
    "question": "Which of the following has the highest number of atoms?",
    "options": ["1 mol H₂O", "1 mol NaCl", "1 mol CO₂", "1 mol CH₄"],
    "correctAnswer": "1 mol CH₄"
  },
  {
    "id": 27,
    "question": "Which law is obeyed when a chemical reaction occurs in a closed container with no loss of mass?",
    "options": ["Law of Definite Proportions", "Law of Conservation of Mass", "Law of Constant Composition", "Avogadro's Law"],
    "correctAnswer": "Law of Conservation of Mass"
  },
  {
    "id": 28,
    "question": "What is the molarity of a solution containing 0.5 mol of NaOH in 250 mL of solution?",
    "options": ["1 M", "2 M", "0.5 M", "0.2 M"],
    "correctAnswer": "2 M"
  },
  {
    "id": 29,
    "question": "Which quantum number determines the shape of an orbital?",
    "options": ["Principal (n)", "Azimuthal (l)", "Magnetic (m)", "Spin (s)"],
    "correctAnswer": "Azimuthal (l)"
  },
  {
    "id": 30,
    "question": "Which of the following is a correct set of quantum numbers for 3p electron?",
    "options": ["n=3, l=1, m=0, s=+½", "n=3, l=2, m=0, s=+½", "n=2, l=1, m=0, s=−½", "n=3, l=0, m=1, s=+½"],
    "correctAnswer": "n=3, l=1, m=0, s=+½"
  },
  {
    "id": 31,
    "question": "The energy of an electron in hydrogen atom in the nth orbit is given by:",
    "options": ["-13.6/n² eV", "-13.6 × n² eV", "-13.6n eV", "-13.6/n eV"],
    "correctAnswer": "-13.6/n² eV"
  },
  {
    "id": 32,
    "question": "Which among the following has highest electronegativity?",
    "options": ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
    "correctAnswer": "Fluorine"
  },
  {
    "id": 33,
    "question": "The bond order of O₂ molecule is:",
    "options": ["0", "1", "2", "3"],
    "correctAnswer": "2"
  },
  {
    "id": 34,
    "question": "Which hybridization corresponds to a linear molecular geometry?",
    "options": ["sp", "sp²", "sp³", "dsp²"],
    "correctAnswer": "sp"
  },
  {
    "id": 35,
    "question": "What is the shape of SF₄ molecule?",
    "options": ["Tetrahedral", "Trigonal bipyramidal", "See-saw", "Square planar"],
    "correctAnswer": "See-saw"
  },
  {
    "id": 36,
    "question": "Which of the following statements is true for a spontaneous reaction?",
    "options": ["ΔG > 0", "ΔH = 0", "ΔS < 0", "ΔG < 0"],
    "correctAnswer": "ΔG < 0"
  },
  {
    "id": 37,
    "question": "Which law states that the total energy of the universe remains constant?",
    "options": ["First Law of Thermodynamics", "Second Law of Thermodynamics", "Hess's Law", "Boyle’s Law"],
    "correctAnswer": "First Law of Thermodynamics"
  },
  {
    "id": 38,
    "question": "For an ideal gas undergoing isothermal expansion, which of the following is true?",
    "options": ["ΔU = 0", "q = 0", "w = 0", "ΔH > 0"],
    "correctAnswer": "ΔU = 0"
  },
  {
    "id": 39,
    "question": "In which of the following compounds is resonance not possible?",
    "options": ["C₆H₆", "CH₄", "CH₂=CH−CH=CH₂", "CO₃²⁻"],
    "correctAnswer": "CH₄"
  },
  {
    "id": 40,
    "question": "Which of the following alkanes will give only one monochlorinated product?",
    "options": ["n-butane", "isobutane", "neopentane", "propane"],
    "correctAnswer": "neopentane"
  },
  {
    "id": 41,
    "question": "What is the major product of the reaction of 2-butene with Br₂ in CCl₄?",
    "options": ["1,2-dibromobutane", "2,3-dibromobutane", "Butanol", "2-butanol"],
    "correctAnswer": "2,3-dibromobutane"
  },
  {
    "id": 42,
    "question": "Which hydrocarbon shows geometrical isomerism?",
    "options": ["C₂H₆", "C₂H₄", "C₄H₈", "CH₄"],
    "correctAnswer": "C₄H₈"
  },
  {
    "id": 43,
    "question": "In redox reactions, oxidising agents are those which:",
    "options": ["Gain electrons", "Lose electrons", "Gain protons", "Lose protons"],
    "correctAnswer": "Gain electrons"
  },
  {
    "id": 44,
    "question": "Which of the following metals has the highest standard reduction potential?",
    "options": ["Fe", "Ag", "Cu", "Zn"],
    "correctAnswer": "Ag"
  },
  {
    "id": 45,
    "question": "What is the oxidation number of Mn in KMnO₄?",
    "options": ["+2", "+4", "+6", "+7"],
    "correctAnswer": "+7"
  },
  {
    "id": 46,
    "question": "The unit of standard electrode potential is:",
    "options": ["Volt", "Joule", "Coulomb", "Ohm"],
    "correctAnswer": "Volt"
  },
  {
    "id": 47,
    "question": "In electrolysis, the amount of substance deposited is directly proportional to:",
    "options": ["Current only", "Time only", "Product of current and time", "Resistance"],
    "correctAnswer": "Product of current and time"
  },
  {
    "id": 48,
    "question": "Which of the following reactions is a redox reaction?",
    "options": ["NaOH + HCl → NaCl + H₂O", "CaCO₃ → CaO + CO₂", "Zn + H₂SO₄ → ZnSO₄ + H₂", "AgNO₃ + NaCl → AgCl + NaNO₃"],
    "correctAnswer": "Zn + H₂SO₄ → ZnSO₄ + H₂"
  },
  {
    "id": 49,
    "question": "During discharge of a lead-acid battery:",
    "options": ["Pb is oxidised, PbO₂ is reduced", "Pb is reduced, PbO₂ is oxidised", "Both are reduced", "Both are oxidised"],
    "correctAnswer": "Pb is oxidised, PbO₂ is reduced"
  },
  {
    "id": 50,
    "question": "Which cell is used in pacemakers and hearing aids?",
    "options": ["Leclanche cell", "Daniell cell", "Mercury cell", "Fuel cell"],
    "correctAnswer": "Mercury cell"
  },
  {
    "id": 51,
    "question": "Which of the following is not a characteristic of living organisms?",
    "options": ["Growth", "Metabolism", "Reproduction", "Crystallization"],
    "correctAnswer": "Crystallization"
  },
  {
    "id": 52,
    "question": "Binomial nomenclature was given by:",
    "options": ["Linnaeus", "Darwin", "Haeckel", "Whittaker"],
    "correctAnswer": "Linnaeus"
  },
  {
    "id": 53,
    "question": "In dicot stems, vascular bundles are:",
    "options": ["Conjoint, closed", "Conjoint, open", "Radial", "Scattered"],
    "correctAnswer": "Conjoint, open"
  },
  {
    "id": 54,
    "question": "Companion cells are associated with:",
    "options": ["Xylem", "Phloem", "Cambium", "Collenchyma"],
    "correctAnswer": "Phloem"
  },
  {
    "id": 55,
    "question": "Which one of the following has a cell wall made of cellulose?",
    "options": ["Fungi", "Bacteria", "Plant cells", "Animal cells"],
    "correctAnswer": "Plant cells"
  },
  {
    "id": 56,
    "question": "Plasmodesmata help in:",
    "options": ["Cytoplasmic streaming", "Cell division", "Intercellular transport", "DNA replication"],
    "correctAnswer": "Intercellular transport"
  },
  {
    "id": 57,
    "question": "Mitochondria are absent in:",
    "options": ["Eukaryotic cells", "Bacterial cells", "Animal cells", "Fungal cells"],
    "correctAnswer": "Bacterial cells"
  },
  {
    "id": 58,
    "question": "Which of the following is not part of the endomembrane system?",
    "options": ["Endoplasmic reticulum", "Golgi body", "Lysosome", "Peroxisome"],
    "correctAnswer": "Peroxisome"
  },
  {
    "id": 59,
    "question": "Water movement through the cell wall is known as:",
    "options": ["Symplast", "Apoplast", "Transpiration", "Osmosis"],
    "correctAnswer": "Apoplast"
  },
  {
    "id": 60,
    "question": "Root pressure is responsible for:",
    "options": ["Ascent of sap", "Transpiration", "Guttation", "Photosynthesis"],
    "correctAnswer": "Guttation"
  },
  {
    "id": 61,
    "question": "Which ion plays a key role in the opening and closing of stomata?",
    "options": ["Na⁺", "K⁺", "Cl⁻", "Ca²⁺"],
    "correctAnswer": "K⁺"
  },
  {
    "id": 62,
    "question": "Z-scheme of photosynthesis is related to:",
    "options": ["ATP synthesis", "CO₂ fixation", "Electron transport", "Photolysis"],
    "correctAnswer": "Electron transport"
  },
  {
    "id": 63,
    "question": "Photorespiration occurs in:",
    "options": ["C₃ plants only", "C₄ plants only", "CAM plants only", "Both C₃ and C₄ plants"],
    "correctAnswer": "C₃ plants only"
  },
  {
    "id": 64,
    "question": "Which of the following hormones promotes senescence?",
    "options": ["Auxin", "Cytokinin", "Ethylene", "Gibberellin"],
    "correctAnswer": "Ethylene"
  },
  {
    "id": 65,
    "question": "Which of the following is the immediate product of photosynthesis?",
    "options": ["Sucrose", "Glucose", "Fructose", "Starch"],
    "correctAnswer": "Glucose"
  },
  {
    "id": 66,
    "question": "Which enzyme is responsible for carbon fixation in the Calvin cycle?",
    "options": ["PEP carboxylase", "Rubisco", "Hexokinase", "Carbonic anhydrase"],
    "correctAnswer": "Rubisco"
  },
  {
    "id": 67,
    "question": "In angiosperms, double fertilization results in formation of:",
    "options": ["Zygote and embryo", "Zygote and endosperm", "Endosperm only", "Embryo only"],
    "correctAnswer": "Zygote and endosperm"
  },
  {
    "id": 68,
    "question": "During which stage of mitosis does the nuclear envelope reform?",
    "options": ["Prophase", "Anaphase", "Telophase", "Metaphase"],
    "correctAnswer": "Telophase"
  },
  {
    "id": 69,
    "question": "Which pigment is responsible for photoperiodism?",
    "options": ["Chlorophyll", "Carotene", "Phytochrome", "Xanthophyll"],
    "correctAnswer": "Phytochrome"
  },
  {
    "id": 70,
    "question": "Lenticels are involved in:",
    "options": ["Water conduction", "Photosynthesis", "Secondary growth", "Gaseous exchange"],
    "correctAnswer": "Gaseous exchange"
  },
  {
    "id": 71,
    "question": "Which part of the human brain regulates heartbeat and respiration?",
    "options": ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
    "correctAnswer": "Medulla oblongata"
  },
  {
    "id": 72,
    "question": "What type of epithelium is found lining the kidney tubules?",
    "options": ["Ciliated", "Squamous", "Cuboidal", "Columnar"],
    "correctAnswer": "Cuboidal"
  },
  {
    "id": 73,
    "question": "Which of the following is not a connective tissue?",
    "options": ["Cartilage", "Adipose", "Blood", "Muscle"],
    "correctAnswer": "Muscle"
  },
  {
    "id": 74,
    "question": "The functional unit of a muscle fiber is:",
    "options": ["Myofibril", "Sarcomere", "Sarcolemma", "Actin"],
    "correctAnswer": "Sarcomere"
  },
  {
    "id": 75,
    "question": "Which blood group is known as the universal donor?",
    "options": ["A", "B", "AB", "O"],
    "correctAnswer": "O"
  },
  {
    "id": 76,
    "question": "Which valve is found between left atrium and left ventricle?",
    "options": ["Tricuspid", "Pulmonary", "Mitral", "Aortic"],
    "correctAnswer": "Mitral"
  },
  {
    "id": 77,
    "question": "Which enzyme is secreted in saliva?",
    "options": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
    "correctAnswer": "Amylase"
  },
  {
    "id": 78,
    "question": "Where does most nutrient absorption occur in the human body?",
    "options": ["Stomach", "Large intestine", "Small intestine", "Liver"],
    "correctAnswer": "Small intestine"
  },
  {
    "id": 79,
    "question": "The functional unit of the kidney is:",
    "options": ["Ureter", "Glomerulus", "Neuron", "Nephron"],
    "correctAnswer": "Nephron"
  },
  {
    "id": 80,
    "question": "Which hormone regulates water balance in the body?",
    "options": ["Insulin", "ADH", "Thyroxine", "Cortisol"],
    "correctAnswer": "ADH"
  },
  {
    "id": 81,
    "question": "Which gland is both endocrine and exocrine?",
    "options": ["Thyroid", "Pancreas", "Adrenal", "Pituitary"],
    "correctAnswer": "Pancreas"
  },
  {
    "id": 82,
    "question": "Which antibody is most abundant in human plasma?",
    "options": ["IgA", "IgD", "IgG", "IgM"],
    "correctAnswer": "IgG"
  },
  {
    "id": 83,
    "question": "The cell-mediated immunity is carried out by:",
    "options": ["B cells", "T cells", "Macrophages", "Erythrocytes"],
    "correctAnswer": "T cells"
  },
  {
    "id": 84,
    "question": "The correct sequence of events in fertilization is:",
    "options": ["Capacitation → Acrosome reaction → Fusion", "Acrosome reaction → Capacitation → Fusion", "Fusion → Capacitation → Acrosome reaction", "Capacitation → Fusion → Acrosome reaction"],
    "correctAnswer": "Capacitation → Acrosome reaction → Fusion"
  },
  {
    "id": 85,
    "question": "Sex is determined in humans by:",
    "options": ["Number of chromosomes", "X chromosome", "Y chromosome", "Z chromosome"],
    "correctAnswer": "Y chromosome"
  },
  {
    "id": 86,
    "question": "Which stage of meiosis is responsible for genetic recombination?",
    "options": ["Metaphase I", "Anaphase II", "Prophase I", "Telophase I"],
    "correctAnswer": "Prophase I"
  },
  {
    "id": 87,
    "question": "A cross between a tall (TT) and a dwarf (tt) plant yields:",
    "options": ["All tall", "All dwarf", "1:1 ratio", "3:1 ratio"],
    "correctAnswer": "All tall"
  },
  {
    "id": 88,
    "question": "What is the probability of a hemophilic son from a carrier mother and a normal father?",
    "options": ["0%", "25%", "50%", "100%"],
    "correctAnswer": "50%"
  },
  {
    "id": 89,
    "question": "Which of the following diseases is a sex-linked recessive disorder?",
    "options": ["Thalassemia", "Down syndrome", "Haemophilia", "Turner syndrome"],
    "correctAnswer": "Haemophilia"
  },
  {
    "id": 90,
    "question": "If a trait appears in the F1 generation and reappears in F2, it is called:",
    "options": ["Dominant", "Recessive", "Codominant", "Incomplete"],
    "correctAnswer": "Recessive"
  }
]

export default questions;