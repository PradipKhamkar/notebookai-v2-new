import type { Content } from "../types/content.type.js";
import type { Source } from "../types/source.type.js";

const examples = [
  {
    sources: {
      title: 'Example - 📚 Gravitation, Elements, and Chemical Reactions',
      type: 'document',
      metaData: {
        url: 'https://res.cloudinary.com/dzkexyp4x/image/upload/v1792893141/claira_files/fpokgfxfjpdvm15ktg8q.pdf',
        uploadId: 'claira_files/fpokgfxfjpdvm15ktg8q',
        fileType: 'application/pdf'
      },
      summary: '- **Gravitation**: Sir Isaac Newton formulated the universal law of gravitation, stating that every object attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of their distance.\n- **Kepler\'s Laws**: Johannes Kepler\'s three laws describe planetary motion, including elliptical orbits and the relationship between a planet\'s orbital period and its distance from the Sun.\n- **Centripetal Force**: This force, directed towards the center of a circular path, is essential for objects like the Moon to orbit the Earth and is related to Newton\'s derivation of the inverse square law of gravitation.\n- **Acceleration Due to Gravity (g)**: The Earth\'s gravitational force causes acceleration \'g\', which varies with location (poles vs. equator) and altitude, but is constant for all objects at a given place.\n- **Periodic Classification Evolution**: Early attempts by Dobereiner and Newlands led to Mendeleev\'s periodic table, which grouped elements by atomic mass and predicted new ones, later refined by Moseley based on atomic number.\n- **Modern Periodic Table**: Elements are arranged by increasing atomic number into periods and groups, revealing systematic trends in properties such as valency, atomic size, and metallic-nonmetallic character.\n- **Chemical Reactions**: These processes involve bond breaking and formation to create new substances, represented by balanced chemical equations that indicate reactants, products, physical states, and reaction conditions.\n- **Types of Reactions**: Chemical reactions are categorized into combination, decomposition, displacement, and double displacement reactions based on how reactants transform into products.\n- **Rate of Reaction Factors**: The speed of a chemical reaction is influenced by the nature and particle size of reactants, their concentration, temperature, and the presence of catalysts.\n- **Redox Reactions**: Oxidation, defined as combining with oxygen, losing hydrogen, or losing electrons, and reduction, defined as gaining hydrogen, losing oxygen, or gaining electrons, are fundamental processes often occurring simultaneously.',
      topics: [
        '🧲 Discovery and concept of gravitational force, including Newton\'s Law.',
        '🪐 Kepler\'s laws describe planetary motion, influencing the understanding of gravity.',
        '🔄 Centripetal force is crucial for objects in circular motion, such as planetary orbits.',
        '🌍 Earth\'s gravitational acceleration (g) varies with location and height.',
        '🚀 Escape velocity is the speed needed to overcome gravitational pull.',
        '⚛️ Early attempts and the development of the Periodic Classification of Elements.',
        '📊 The Modern Periodic Table arranges elements by atomic number, showing periodic trends.',
        '🧪 Understanding chemical reactions, including writing and balancing equations.',
        '💥 Different types of chemical reactions: combination, decomposition, displacement, and double displacement.',
        '🔥 Factors affecting reaction rates and the concepts of oxidation and reduction.'
      ],
      suggestedQuestions: [
        'How did Sir Isaac Newton discover the phenomenon of gravitation?',
        'What are Kepler\'s three laws of planetary motion?',
        'Explain the concept of centripetal force and its role in orbital motion.',
        'How does the Modern Periodic Table improve upon Mendeleev\'s classification of elements?',
        'What are the main types of chemical reactions, and how do they differ?',
        'List and explain the factors that affect the rate of a chemical reaction.'
      ],
    } as Source,
    material: [
      {
        title: 'Circular Motion and Centripetal Force',
        data: {
          note: '# Circular Motion and Centripetal Force\n\nCircular motion occurs when an object moves along a circular path. For this motion to be sustained, a continuous force, known as **centripetal force**, must act on the object.\n\n## Definition and Characteristics\n\n*   **Centripetal Force:** A force that acts on an object moving along a circle, always directed towards the center of the circle. The term "centripetal" means "center-seeking," indicating the object\'s tendency to move towards the center due to this force.\n*   **Effect of Force Removal:** If the centripetal force stops acting on an object in circular motion (e.g., releasing a string tied to a stone), the object will fly off along a straight line that is tangent to the circle at the point of release. This tangential direction represents the object\'s instantaneous velocity.\n\n## Magnitude of Centripetal Force\n\nFor an object of mass \'m\' moving in a circle with constant speed \'v\' and radius \'r\', the magnitude of the centripetal force (F) is given by:\n\n$F = \\frac{mv^2}{r}$\n\n## Speed in Circular Motion\n\nThe speed \'v\' of an object undergoing uniform circular motion can also be expressed in terms of its period of revolution \'T\' (the time taken for one complete revolution):\n\n*   **Distance travelled in one revolution:** The circumference of the orbit, $2\\pi r$\n*   **Time taken:** Period of revolution, $T$\n*   **Speed:** $v = \\frac{\\text{Distance travelled}}{\\text{Time taken}} = \\frac{2\\pi r}{T}$\n\n## Connection to Gravitational Force\n\nNewton utilized the concept of centripetal force to formulate his theory of Universal Gravitation, particularly in explaining planetary motion.\n\n1.  **Centripetal Force on Planets:** If a planet of mass \'m\' revolves around the Sun in a circular orbit of radius \'r\' with speed \'v\', the centripetal force acting on the planet towards the Sun is $F = \\frac{mv^2}{r}$.\n2.  **Substituting Speed:** By substituting the expression for speed ($v = \\frac{2\\pi r}{T}$), the centripetal force can be rewritten as:\n    $F = \\frac{m(2\\pi r/T)^2}{r} = \\frac{m(4\\pi^2 r^2/T^2)}{r} = \\frac{4m\\pi^2 r}{T^2}$\n3.  **Applying Kepler\'s Third Law:** Kepler\'s Third Law states that the square of a planet\'s period of revolution (T) around the Sun is directly proportional to the cube of its mean distance (r) from the Sun. Mathematically, $\\frac{T^2}{r^3} = K$, where K is a constant. This can be rearranged to $T^2 = Kr^3$.\n4.  **Deriving Inverse Square Law:** Substituting $T^2 = Kr^3$ into the centripetal force equation:\n    $F = \\frac{4m\\pi^2 r}{Kr^3} = (\\frac{4m\\pi^2}{K}) \\times (\\frac{1}{r^2})$\n    Since $(\\frac{4m\\pi^2}{K})$ is a constant, this equation shows that the centripetal force (F) is **inversely proportional to the square of the distance (r)** between the planet and the Sun ($F \\propto \\frac{1}{r^2}$). \n\nNewton identified this centripetal force as the force of gravity, thus postulating the inverse square law of gravitation. Although gravitational force is much weaker than other forces, it governs the universe due to the immense masses of celestial bodies.\n\n## Examples\n\n*   **Stone on a string:** A force applied by the hand pulling the string acts as the centripetal force, keeping the stone in circular motion.\n*   **Moon orbiting Earth:** The Earth\'s gravitational force provides the necessary centripetal force for the Moon to orbit around it.\n*   **Planets orbiting the Sun:** The Sun\'s gravitational force acts as the centripetal force, keeping all planets in their orbits.'
        },
        type: 'note',
      },
      {
        title: 'Gravitation, Periodic Classification, and Chemical Reactions',
        data: [
          {
            front: 'What is the phenomenon of gravitation?',
            back: 'The phenomenon of gravitation is the attractive force discovered by Sir Isaac Newton, observed when an apple falls vertically downward.',
            explanation: 'Newton concluded that the Earth attracts objects towards its center, leading to the concept of an attractive force directed towards the center of the Earth.'
          },
          {
            front: 'What is centripetal force?',
            back: 'Centripetal force is a force that acts on an object moving along a circle and is directed towards the center of the circle, meaning \'center seeking\'.',
            explanation: 'This force is necessary for any object to maintain circular motion, like the Moon orbiting the Earth or a stone swung on a string.'
          },
          {
            front: 'State Kepler\'s First Law of planetary motion.',
            back: 'The orbit of a planet is an ellipse with the Sun at one of the foci.',
            explanation: 'This law describes the shape of planetary orbits, moving beyond the older idea of perfectly circular paths.'
          },
          {
            front: 'What does Newton\'s Universal Law of Gravitation state?',
            back: 'Every object in the Universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between them.',
            explanation: 'This fundamental law, expressed as F = G(m₁m₂)/d², explains gravitational attraction throughout the cosmos.'
          },
          {
            front: 'How does the value of \'g\' (acceleration due to gravity) vary with height above the Earth\'s surface?',
            back: 'As height above the Earth\'s surface increases, the value of \'g\' decreases.',
            explanation: 'This occurs because the distance (r) from the center of the Earth increases, and \'g\' is inversely proportional to r².'
          },
          {
            front: 'Define free fall.',
            back: 'Free fall is when an object moves solely under the influence of the force of gravity, with no other forces acting upon it.',
            explanation: 'In true free fall, which is possible only in a vacuum, all objects fall with the same acceleration \'g\', regardless of their mass.'
          },
          {
            front: 'What are Dobereiner\'s Triads?',
            back: 'Dobereiner\'s Triads were groups of three elements with similar chemical properties, arranged in increasing order of atomic mass, where the atomic mass of the middle element was approximately the mean of the other two.',
            explanation: 'This was an early attempt at classifying elements, but it could not classify all known elements.'
          },
          {
            front: 'State Mendeleev\'s Periodic Law.',
            back: 'The properties of elements are a periodic function of their atomic masses.',
            explanation: 'Mendeleev arranged elements by atomic mass and observed recurring patterns in their chemical and physical properties, leading to the first comprehensive periodic table.'
          },
          {
            front: 'How does atomic radius change across a period in the Modern Periodic Table?',
            back: 'Atomic radius generally decreases from left to right across a period.',
            explanation: 'As you move across a period, the atomic number and nuclear charge increase, pulling the electrons in the same outermost shell closer to the nucleus.'
          },
          {
            front: 'What is the key difference between a physical change and a chemical change?',
            back: 'In a physical change, only the state of matter changes temporarily, while in a chemical change, the composition of matter changes permanently to form new substances.',
            explanation: 'Chemical changes involve bond breaking and formation, creating products with different properties than the reactants.'
          },
          {
            front: 'What is a combination reaction?',
            back: 'A combination reaction is a chemical reaction where two or more reactants combine to form a single product.',
            explanation: 'An example is the burning of magnesium in air to form magnesium oxide (2Mg + O₂ → 2MgO).'
          },
          {
            front: 'What is an endothermic reaction?',
            back: 'An endothermic reaction is a chemical reaction in which heat is absorbed from the surroundings.',
            explanation: 'This absorption of heat typically causes the temperature of the surroundings or the resulting solution to decrease.'
          },
          {
            front: 'How does increasing the temperature generally affect the rate of a chemical reaction?',
            back: 'Increasing the temperature generally increases the rate of a chemical reaction.',
            explanation: 'Higher temperatures provide more energy to reactant particles, leading to more frequent and energetic collisions, thus accelerating the reaction.'
          },
          {
            front: 'Define oxidation in terms of electron transfer.',
            back: 'Oxidation is the loss of one or more electrons by a reactant, resulting in an increase in its positive charge or a decrease in its negative charge.',
            explanation: 'This modern definition of oxidation is crucial for understanding redox reactions, where electron transfer occurs.'
          },
          {
            front: 'What is corrosion, and what is the chemical formula for rust?',
            back: 'Corrosion is the process where metals are damaged due to oxidation by atmospheric components; the chemical formula for rust (iron corrosion) is Fe₂O₃·xH₂O.',
            explanation: 'Rusting is an electrochemical reaction where iron is oxidized, forming a reddish hydrated iron oxide layer on its surface.'
          }
        ],

        type: 'flashcards',


      },
      {
        title: 'Science Concepts: Gravitation, Periodic Classification, Chemical Reactions',
        data: [
          {
            id: 'gravitation',
            label: '🌌 Gravitation',
            note: {
              title: '🌟 Core Concept: Gravitation',
              content: 'Gravitation is a universal force that acts between any two objects in the universe, attracting them towards each other. It was famously discovered by Sir Isaac Newton upon observing an apple fall from a tree, leading him to ponder why objects fall vertically downwards and not at an angle or fly off horizontally. He concluded that the Earth attracts the apple towards its center.'
            },
            children: [
              {
                id: 'grav_force',
                label: '🧲 Gravitational Force',
                note: {
                  title: '💫 Nature of Gravitational Force',
                  content: 'Gravitational force is a universal attractive force. It acts not only between objects on Earth but also between any two objects in the universe. The direction of this attractive force is always towards the center of the Earth for objects near its surface. Newton extended this idea to celestial bodies, suggesting it acts between the Earth and the Moon, and between the Sun and planets.'
                }
              },
              {
                id: 'circ_motion',
                label: '🌀 Circular Motion & Centripetal Force',
                note: {
                  title: '🔄 Force for Circular Paths',
                  content: 'An object moving in a circle at a constant speed requires a force constantly directed towards the center of the circle; this is called centripetal force. Without this force, the object would fly off along a straight line (tangent to the circle). Examples include a stone tied to a string and swung in a circle, and the Earth\'s gravity acting as the centripetal force for the Moon orbiting the Earth, and the Sun\'s gravity for planets orbiting the Sun. The magnitude of centripetal force is F = mv²/r.'
                }
              },
              {
                id: 'kepler_laws',
                label: '📜 Kepler\'s Laws',
                note: {
                  title: '🔭 Planetary Motion Rules',
                  content: 'Johannes Kepler derived three laws describing planetary motion based on observational data. These laws were later mathematically derived by Newton using his theory of gravitation.'
                }
              },
              {
                id: 'newton_grav_law',
                label: '⚖️ Newton\'s Universal Law of Gravitation',
                note: {
                  title: '📏 Universal Gravitation Formula',
                  content: 'Every object in the Universe attracts every other object with a force directly proportional to the product of their masses (m₁m₂) and inversely proportional to the square of the distance (d) between their centers (F = G m₁m₂/d²). G is the Universal Gravitational Constant. The direction of this force is along the line joining their centers.'
                }
              },
              {
                id: 'grav_accel',
                label: '⬇️ Acceleration due to Gravity (g)',
                note: {
                  title: '🌍 Earth\'s Gravitational Pull',
                  content: 'The gravitational force exerted by the Earth on a body causes an acceleration known as acceleration due to gravity (g). It is a vector quantity, directed vertically downwards towards the Earth\'s center. Its value on the Earth\'s surface is calculated as g = GM/R² (approximately 9.77 m/s² on average), where M is Earth\'s mass and R is Earth\'s radius.'
                }
              },
              {
                id: 'variation_g',
                label: '📈 Variation in \'g\'',
                note: {
                  title: '🌐 How \'g\' Changes',
                  content: 'The value of \'g\' varies: 1. Along the Earth\'s surface: Highest at poles (9.832 m/s²) and lowest at the equator (9.78 m/s²) due to Earth\'s non-spherical shape and rotation. 2. With height: Decreases as height above Earth\'s surface increases. 3. With depth: Decreases as one goes deep inside the Earth due to reduced contributing mass.'
                }
              },
              {
                id: 'mass_weight',
                label: '⚖️ Mass vs. Weight',
                note: {
                  title: '⚖️ Fundamental Differences',
                  content: 'Mass is the amount of matter in an object, a scalar quantity, measured in kg, and its value is constant everywhere. It is a measure of inertia. Weight is the force with which the Earth attracts an object (W = mg), a vector quantity (direction towards Earth\'s center), measured in Newtons, and changes from place to place due to variation in \'g\'.'
                }
              },
              {
                id: 'free_fall',
                label: '🍎 Free Fall',
                note: {
                  title: '⬇️ Motion Under Gravity Alone',
                  content: 'Free fall occurs when an object moves solely under the influence of the force of gravity. In true free fall (possible only in vacuum), initial velocity is zero, and velocity increases due to acceleration \'g\'. The moon and artificial satellites are considered in free fall under Earth\'s gravitational field, but their orbital velocity prevents them from crashing into Earth.'
                }
              },
              {
                id: 'grav_potential_energy',
                label: '🔋 Gravitational Potential Energy',
                note: {
                  title: '⚡ Energy of Position',
                  content: 'Potential energy is stored energy due to an object\'s position. For objects at a height (h) small compared to Earth\'s radius (R), it\'s mgh. For large h, where \'g\' is not constant, the potential energy is negative, and is assumed to be zero at infinite distance from Earth. It is given by -GMm/(R+h).'
                }
              },
              {
                id: 'escape_velocity',
                label: '🚀 Escape Velocity',
                note: {
                  title: '⬆️ Overcoming Gravity\'s Pull',
                  content: 'Escape velocity is the minimum initial velocity an object needs to overcome the gravitational pull of a celestial body and escape into space indefinitely. It is derived using the law of conservation of energy and is given by √(2GM/R). For Earth, it is approximately 11.2 km/s. Spacecraft need to achieve velocities greater than escape velocity to travel to other planets.'
                }
              },
              {
                id: 'grav_waves',
                label: '🌊 Gravitational Waves',
                note: {
                  title: '🌌 Ripples in Spacetime',
                  content: 'Gravitational waves are ripples in the fabric of spacetime, predicted by Einstein in 1916. These extremely weak waves are emitted by astronomical sources. Scientists, notably using LIGO, detected these waves for the first time a century after their prediction, opening a new avenue for understanding the Universe.'
                }
              }
            ]
          },
          {
            id: 'periodic_classification',
            label: '⚛️ Periodic Classification of Elements',
            note: {
              title: '📚 Organizing Elements',
              content: 'The classification of elements helps to organize and study their properties efficiently. As more elements were discovered and their properties understood, scientists developed various methods to classify them, moving from simple groups like metals and nonmetals to more complex periodic arrangements.'
            },
            children: [
              {
                id: 'dobereiner_triads',
                label: '🧪 Dobereiner\'s Triads (1817)',
                note: {
                  title: '👨\u200d🔬 Early Grouping by Atomic Mass',
                  content: 'Johann Dobereiner grouped elements into \'triads\' (groups of three) with similar chemical properties. He observed that when arranged by increasing atomic mass, the atomic mass of the middle element was approximately the mean of the other two. This classification was limited as not all known elements fit into triads.'
                }
              },
              {
                id: 'newlands_octaves',
                label: '🎶 Newlands\' Law of Octaves (1866)',
                note: {
                  title: '🎹 Repeating Properties',
                  content: 'John Newlands arranged known elements in increasing order of atomic masses and found that every eighth element had properties similar to the first, comparing this to musical octaves. This law was only applicable up to Calcium and had limitations, such as placing dissimilar elements together and having no provision for newly discovered elements.'
                }
              },
              {
                id: 'mendeleev_table',
                label: '📈 Mendeleev\'s Periodic Table (1869-1872)',
                note: {
                  title: '🗺️ Classification by Atomic Mass',
                  content: 'Dmitri Mendeleev developed a periodic table based on his Periodic Law: \'Properties of elements are a periodic function of their atomic masses.\' He arranged 63 known elements by increasing atomic mass, considering their physical and chemical properties.'
                }
              },
              {
                id: 'merits_mendeleev',
                label: '👍 Merits of Mendeleev\'s Table',
                note: {
                  title: '✅ Strengths of the Table',
                  content: 'Mendeleev\'s table had several merits: 1. Revision of atomic masses (e.g., Beryllium from 14.09 to 9.4). 2. Prediction of undiscovered elements (e.g., eka-boron, eka-aluminum, eka-silicon) and their properties by leaving vacant spaces. 3. Accommodation of noble gases by creating a \'zero\' group without disturbing the existing table.'
                }
              },
              {
                id: 'demerits_mendeleev',
                label: '👎 Demerits of Mendeleev\'s Table',
                note: {
                  title: '❌ Limitations of the Table',
                  content: 'Mendeleev\'s table faced demerits: 1. Ambiguity in the sequence of elements with similar atomic masses (e.g., Cobalt and Nickel). 2. No fixed position for isotopes, as they have different atomic masses but similar chemical properties. 3. Non-uniform rise in atomic masses, making it difficult to predict new elements. 4. Unclear position of Hydrogen due to its similarity with both alkali metals and halogens.'
                }
              },
              {
                id: 'modern_periodic_law',
                label: '📊 Modern Periodic Law',
                note: {
                  title: '🔬 Redefined Periodic Law',
                  content: 'In 1913, Henry Moseley demonstrated that atomic number (Z), representing the positive charge on the nucleus or number of protons, is a more fundamental property than atomic mass. The Modern Periodic Law states: \'Properties of elements are a periodic function of their atomic numbers.\''
                }
              },
              {
                id: 'modern_periodic_table',
                label: '📈 Modern Periodic Table (Long Form)',
                note: {
                  title: '🌐 Structure and Organization',
                  content: 'The modern periodic table arranges elements in increasing order of atomic numbers, resolving most drawbacks of Mendeleev\'s table (except Hydrogen\'s position). It consists of 7 horizontal \'periods\' and 18 vertical \'groups\'. It is divided into s-block (Groups 1-2), p-block (Groups 13-18), d-block (Groups 3-12, transition elements), and f-block (lanthanides and actinides at the bottom).'
                }
              },
              {
                id: 'periodic_trends',
                label: '📉 Periodic Trends',
                note: {
                  title: '⚙️ Regularity in Properties',
                  content: 'Periodic trends describe the regular variations in elemental properties across periods and down groups. Key trends include valency, atomic size, and metallic/nonmetallic character, which are determined by electronic configuration.'
                }
              },
              {
                id: 'valency_trend',
                label: '🔢 Valency Trend',
                note: {
                  title: '🔗 Combining Capacity',
                  content: 'Valency, determined by the number of valence electrons, shows a trend: In a period (left to right), valency first increases and then decreases. In a group (top to bottom), elements have the same number of valence electrons, hence similar valency, though the number of shells increases.'
                }
              },
              {
                id: 'atomic_size_trend',
                label: '📏 Atomic Size Trend',
                note: {
                  title: '⚛️ Atom\'s Radius',
                  content: 'Atomic size (atomic radius) is the distance from the nucleus to the outermost electron shell. In a period (left to right), atomic radius generally decreases due to increasing nuclear charge pulling electrons closer. In a group (top to bottom), atomic radius increases because new electron shells are added, increasing the distance from the nucleus to the outermost electrons.'
                }
              },
              {
                id: 'metallic_nonmetallic_trend',
                label: '✨ Metallic-Nonmetallic Character Trend',
                note: {
                  title: '💡 Electropositivity vs. Electronegativity',
                  content: 'Metallic character (electropositivity) is the tendency to lose valence electrons to form cations. Nonmetallic character (electronegativity) is the tendency to gain electrons to form anions. In a period (left to right), metallic character decreases while nonmetallic character increases due to increasing effective nuclear charge. In a group (top to bottom), metallic character increases while nonmetallic character decreases due to increasing atomic size and reduced effective nuclear charge on valence electrons.'
                }
              }
            ]
          },
          {
            id: 'chemical_reactions',
            label: '🧪 Chemical Reactions & Equations',
            note: {
              title: '⚗️ Transforming Matter',
              content: 'Chemical reactions are processes where substances undergo bond breaking and bond formation to transform into new substances with permanent changes in composition. This contrasts with physical changes, which only alter the state of matter temporarily.'
            },
            children: [
              {
                id: 'writing_equations',
                label: '✍️ Writing Chemical Equations',
                note: {
                  title: '📝 Representing Reactions',
                  content: 'Chemical reactions are represented by chemical equations. Reactants are written on the left, products on the right, separated by an arrow. Plus signs (+) link multiple reactants or products. Physical states (s, l, g, aq), precipitates (↓), gases (↑), heat (Δ), and reaction conditions (temperature, pressure, catalyst) are indicated to make equations informative.'
                }
              },
              {
                id: 'balancing_equations',
                label: '⚖️ Balancing Chemical Equations',
                note: {
                  title: '✅ Law of Conservation of Mass',
                  content: 'Balancing a chemical equation ensures that the number of atoms of each element is the same on both the reactant and product sides, adhering to the law of conservation of mass. This is typically done using a step-by-step trial and error method by applying appropriate stoichiometric factors to reactants and products without changing their chemical formulae.'
                }
              },
              {
                id: 'types_reactions',
                label: '🔬 Types of Chemical Reactions',
                note: {
                  title: ' 분류 Classifying Reactions',
                  content: 'Chemical reactions are categorized based on the nature and number of reactants and products.'
                }
              },
              {
                id: 'combination_reaction',
                label: '➕ Combination Reaction',
                note: {
                  title: '🤝 Forming a Single Product',
                  content: 'A combination reaction occurs when two or more reactants combine to form a single product (e.g., NH₃(g) + HCl(g) → NH₄Cl(s); 2Mg + O₂ → 2MgO; CaO + H₂O → Ca(OH)₂).'
                }
              },
              {
                id: 'decomposition_reaction',
                label: '➖ Decomposition Reaction',
                note: {
                  title: '💔 Breaking Down a Reactant',
                  content: 'A decomposition reaction involves a single reactant breaking down to form two or more products (e.g., C₁₂H₂₂O₁₁ → 12C + 11H₂O upon heating; CaCO₃(s) → CaO(s) + CO₂(g) upon heating; 2H₂O₂(l) → 2H₂O(l) + O₂(g); 2H₂O(l) → 2H₂(g) + O₂(g) via electrolysis).'
                }
              },
              {
                id: 'displacement_reaction',
                label: '➡️ Displacement Reaction',
                note: {
                  title: '🔛 More Reactive Element Takes Place',
                  content: 'In a displacement reaction, a more reactive element displaces a less reactive element\'s ion from its compound, forming its own ions (e.g., CuSO₄(aq) + Zn(s) → ZnSO₄(aq) + Cu(s)). Iron and lead can also displace copper from its compounds.'
                }
              },
              {
                id: 'double_displacement_reaction',
                label: '↔️ Double Displacement Reaction',
                note: {
                  title: '🔄 Ion Exchange for Precipitate',
                  content: 'A double displacement reaction involves the exchange of ions between two reactants to form a precipitate (an insoluble solid) (e.g., AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)).'
                }
              },
              {
                id: 'end_exo_processes',
                label: '🔥 Endothermic & Exothermic Processes',
                note: {
                  title: '🌡️ Heat Exchange',
                  content: 'Endothermic processes absorb heat from the surroundings (e.g., melting ice, dissolving potassium nitrate), causing the temperature to decrease. Exothermic processes release heat to the surroundings (e.g., formation of ice, dissolving sodium hydroxide, diluting concentrated sulphuric acid), causing the temperature to increase. These classifications also apply to chemical reactions.'
                }
              },
              {
                id: 'rate_reactions',
                label: '⚡ Rate of Chemical Reaction',
                note: {
                  title: '⏱️ Speed of Reaction',
                  content: 'The rate of a chemical reaction refers to how quickly it proceeds. Reactions can be rapid (e.g., cooking gas burning) or slow (e.g., rusting). The rate is influenced by several factors.'
                }
              },
              {
                id: 'factors_rate',
                label: '⚙️ Factors Affecting Rate',
                note: {
                  title: '🔬 Influencing Reaction Speed',
                  content: '1. Nature of Reactants: More reactive substances react faster (e.g., Al reacts faster than Zn with HCl). 2. Size of Reactant Particles: Smaller particles have greater surface area, leading to a higher reaction rate. 3. Concentration of Reactants: Higher concentration generally leads to a faster reaction rate. 4. Temperature of Reaction: Increasing temperature typically increases the reaction rate. 5. Catalyst: A substance that increases the rate of a chemical reaction without undergoing permanent chemical change itself (e.g., MnO₂ in H₂O₂ decomposition).'
                }
              },
              {
                id: 'oxidation_reduction',
                label: '➕ Oxidation & Reduction (Redox)',
                note: {
                  title: '↔️ Electron Transfer Reactions',
                  content: 'Oxidation and reduction reactions often occur simultaneously and are collectively called redox reactions. Historically, oxidation meant combining with oxygen or losing hydrogen, and reduction meant gaining hydrogen or losing oxygen. In modern terms, oxidation is the loss of one or more electrons (increase in positive charge), while reduction is the gain of one or more electrons (decrease in positive charge).'
                }
              },
              {
                id: 'oxidants_reductants',
                label: '💪 Oxidants & Reductants',
                note: {
                  title: '🔬 Agents of Redox',
                  content: 'An oxidant (oxidizing agent) is a chemical substance that brings about an oxidation reaction by providing oxygen or accepting electrons (e.g., K₂Cr₂O₇/H₂SO₄, KMnO₄/H₂SO₄, O₃, H₂O₂). A reductant (reducing agent) is a substance that brings about a reduction reaction by providing hydrogen or donating electrons.'
                }
              },
              {
                id: 'corrosion',
                label: '錆 Corrosion',
                note: {
                  title: '🛠️ Metal Deterioration',
                  content: 'Corrosion is the process of oxidation of metals due to various components of the atmosphere, leading to their damage. It is an electrochemical reaction. Rusting of iron is a common example, where iron forms a reddish-colored hydrated oxide (Fe₂O₃·xH₂O) on its surface in the presence of both water and air (oxygen). Salt accelerates rusting.'
                }
              },
              {
                id: 'rancidity',
                label: '🤢 Rancidity',
                note: {
                  title: '🍔 Spoilage of Fats and Oils',
                  content: 'Rancidity refers to the foul odor and altered taste that develop in old cooking oil, ghee, or fried foods when they undergo air oxidation over time. This process can be slowed down by using antioxidants or by storing the foodstuff in airtight containers.'
                }
              }
            ]
          }
        ],
        type: 'mindmap',
      },
      {
        title: 'Quiz on Dobereiner\'s Triads',
        data: [
          {
            question: 'Which scientist proposed the concept of triads based on atomic masses?',
            options: [
              {
                label: 'Dmitri Mendeleev',
                value: 'a'
              },
              {
                label: 'Johannes Kepler',
                value: 'b'
              },
              {
                label: 'J.W. Dobereiner',
                value: 'c'
              },
              {
                label: 'John Newlands',
                value: 'd'
              }
            ],
            answer: 'c',
            explanation: 'The text states that in 1817, a German scientist Dobereiner suggested that properties of elements are related to their atomic masses and grouped them into triads.',
            type: 'multiple-choice'
          },
          {
            question: 'What was the primary criterion used by Dobereiner to form his triads?',
            options: [
              {
                label: 'Similar chemical properties and increasing atomic number',
                value: 'a'
              },
              {
                label: 'Similar chemical properties and increasing atomic mass',
                value: 'b'
              },
              {
                label: 'Different chemical properties and increasing atomic mass',
                value: 'c'
              },
              {
                label: 'Different chemical properties and increasing atomic number',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'Dobereiner made groups of three elements each, having similar chemical properties, and arranged them in increasing order of atomic mass.',
            type: 'multiple-choice'
          },
          {
            question: 'According to Dobereiner\'s law of triads, what was the relationship between the atomic mass of the middle element and the other two elements in a triad?',
            options: [
              {
                label: 'It was exactly equal to the sum of the atomic masses of the other two.',
                value: 'a'
              },
              {
                label: 'It was approximately equal to the mean of the atomic masses of the other two.',
                value: 'b'
              },
              {
                label: 'It was always double the atomic mass of the first element.',
                value: 'c'
              },
              {
                label: 'It was always half the atomic mass of the third element.',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'Dobereiner showed that the atomic mass of the middle element was approximately equal to the mean of the atomic masses of the other two elements.',
            type: 'multiple-choice'
          },
          {
            question: 'Which of the following is a limitation of Dobereiner\'s Triads?',
            options: [
              {
                label: 'The elements in a triad did not have similar chemical properties.',
                value: 'a'
              },
              {
                label: 'Only elements with low atomic masses could form triads.',
                value: 'b'
              },
              {
                label: 'Not all known elements could be classified into Dobereiner\'s triads.',
                value: 'c'
              },
              {
                label: 'The atomic mass of the middle element was never close to the mean of the other two.',
                value: 'd'
              }
            ],
            answer: 'c',
            explanation: 'The text states, \'However, all the known elements could not be classified into the Dobereiner\'s triads,\' indicating a limitation of his classification.',
            type: 'multiple-choice'
          },
          {
            question: 'In the triad Li, Na, K with atomic masses 6.9, 23.0, and 39.1 respectively, how is the atomic mass of Na related to Li and K?',
            options: [
              {
                label: 'It is exactly the sum of Li and K.',
                value: 'a'
              },
              {
                label: 'It is approximately the mean of Li and K.',
                value: 'b'
              },
              {
                label: 'It is greater than the sum of Li and K.',
                value: 'c'
              },
              {
                label: 'It is unrelated to the atomic masses of Li and K.',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'For the Li, Na, K triad, the mean of (6.9 + 39.1) / 2 = 23.0, which is exactly the atomic mass of Na, fitting Dobereiner\'s rule.',
            type: 'multiple-choice'
          },
          {
            question: 'Which of these groups of elements represents a Dobereiner\'s Triad as mentioned in the text?',
            options: [
              {
                label: 'H, Li, Na',
                value: 'a'
              },
              {
                label: 'Ca, Sr, Ba',
                value: 'b'
              },
              {
                label: 'C, N, O',
                value: 'c'
              },
              {
                label: 'F, Cl, Br, I',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'The table 2.1 in the text explicitly lists (Ca), Sr, Ba as a Dobereiner\'s triad.',
            type: 'multiple-choice'
          },
          {
            question: 'What year did Dobereiner propose his classification of elements?',
            options: [
              {
                label: '1800',
                value: 'a'
              },
              {
                label: '1817',
                value: 'b'
              },
              {
                label: '1866',
                value: 'c'
              },
              {
                label: '1913',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'The text states: \'In the year 1817 a German scientist Dobereiner suggested that properties of elements are related to their atomic masses.\'',
            type: 'multiple-choice'
          },
          {
            question: 'What is the common characteristic shared by elements within a Dobereiner\'s triad?',
            options: [
              {
                label: 'They all have the same atomic number.',
                value: 'a'
              },
              {
                label: 'They belong to the same period in the modern periodic table.',
                value: 'b'
              },
              {
                label: 'They have similar chemical properties.',
                value: 'c'
              },
              {
                label: 'They are all nonmetals.',
                value: 'd'
              }
            ],
            answer: 'c',
            explanation: 'Dobereiner made groups of three elements each, \'having similar chemical properties and called them triads.\'',
            type: 'multiple-choice'
          },
          {
            question: 'If an element \'X\' has an atomic mass of 40.1 and element \'Z\' has an atomic mass of 137.3, and they form a Dobereiner\'s triad with element \'Y\', what would be the approximate atomic mass of \'Y\'?',
            options: [
              {
                label: '88.7',
                value: 'a'
              },
              {
                label: '177.4',
                value: 'b'
              },
              {
                label: '40.1',
                value: 'c'
              },
              {
                label: '137.3',
                value: 'd'
              }
            ],
            answer: 'a',
            explanation: 'According to Dobereiner\'s law, the atomic mass of Y would be the mean of X and Z: (40.1 + 137.3) / 2 = 177.4 / 2 = 88.7.',
            type: 'multiple-choice'
          },
          {
            question: 'The table in the text shows a triad of Cl, Br, I. Given the atomic masses of Cl (35.5) and I (126.9), what is the calculated mean atomic mass for the middle element, Br?',
            options: [
              {
                label: '79.9',
                value: 'a'
              },
              {
                label: '81.2',
                value: 'b'
              },
              {
                label: '162.4',
                value: 'c'
              },
              {
                label: '61.4',
                value: 'd'
              }
            ],
            answer: 'b',
            explanation: 'The mean atomic mass for Br is calculated as (35.5 + 126.9) / 2 = 162.4 / 2 = 81.2.',
            type: 'multiple-choice'
          },
          {
            question: 'Why did Dobereiner\'s classification not gain universal acceptance?',
            options: [
              {
                label: 'He used atomic number instead of atomic mass.',
                value: 'a'
              },
              {
                label: 'The elements in his triads did not have similar properties.',
                value: 'b'
              },
              {
                label: 'He arranged elements in decreasing order of atomic mass.',
                value: 'c'
              },
              {
                label: 'All known elements could not be classified into his triads.',
                value: 'd'
              }
            ],
            answer: 'd',
            explanation: 'The text explicitly mentions that \'all the known elements could not be classified into the Dobereiner\'s triads\' as a limitation.',
            type: 'multiple-choice'
          }
        ],

        type: 'quiz',

      },
      {
        title: 'Unraveling Gravitation: Key Concepts',
        data: [
          {
            chapter: 'Gravitation',
            heading: 'Gravitation\'s Origins',
            intro: 'Gravitation is a fundamental universal force, acting between any two objects in the universe. Let\'s explore its discovery and basic principles.',
            blocks: [
              {
                type: 'timeline',
                events: [
                  {
                    date: '17th Century',
                    title: 'Newton\'s Discovery',
                    description: 'Sir Isaac Newton observed an apple falling, leading him to ponder the force that pulls objects towards Earth.'
                  }
                ]
              },
              {
                type: 'key-point',
                text: 'The Earth exerts an attractive force on all objects towards its center, causing them to fall vertically downwards.'
              },
              {
                type: 'text',
                text: 'Newton\'s observation of a falling apple sparked his curiosity about why objects always fall towards the ground. He realized this attractive force, which he later called gravitation, must be directed towards the Earth\'s center. This concept extended beyond Earth to all objects in the universe.'
              },
              {
                type: 'grid',
                cards: [
                  {
                    icon: 'globe',
                    title: 'Universal Force',
                    text: 'Gravitation acts between any two objects in the entire universe.'
                  },
                  {
                    icon: 'book',
                    title: 'Apple Fall',
                    text: 'Newton\'s insight came from observing an apple fall vertically.'
                  },
                  {
                    icon: 'moon',
                    title: 'Celestial Influence',
                    text: 'This force also explains the moon\'s orbit around Earth.'
                  }
                ]
              }
            ]
          },
          {
            chapter: 'Gravitation',
            heading: 'Circular Motion & Centripetal Force',
            intro: 'Objects moving in a circular path require a continuous force directed towards the center. This is key to understanding orbits.',
            blocks: [
              {
                type: 'text',
                text: 'Imagine tying a stone to a string and swinging it in a circle. You constantly pull the string towards your hand, which is the center of the circle. This continuous pull prevents the stone from flying off in a straight line. If you release the string, the stone moves tangentially.'
              },
              {
                type: 'remember',
                text: 'Centripetal force is the \'center-seeking\' force that keeps an object moving in a circular path.'
              },
              {
                type: 'exam',
                text: 'The Earth\'s gravitational force provides the necessary centripetal force for the Moon to orbit around it, preventing the Moon from flying off into space.'
              },
              {
                type: 'grid',
                cards: [
                  {
                    icon: 'circle',
                    title: 'Circular Path',
                    text: 'Objects moving in a circle constantly change direction.'
                  },
                  {
                    icon: 'target',
                    title: 'Center-Seeking',
                    text: 'Centripetal force always points towards the center of the orbit.'
                  },
                  {
                    icon: 'rocket',
                    title: 'Planetary Orbits',
                    text: 'Gravitation provides the centripetal force for planets orbiting the Sun.'
                  }
                ]
              }
            ]
          },
          {
            chapter: 'Gravitation',
            heading: 'Kepler\'s Laws of Planetary Motion',
            intro: 'Before Newton, Johannes Kepler formulated three empirical laws describing planetary motion based on observational data.',
            blocks: [
              {
                type: 'timeline',
                events: [
                  {
                    date: '16th-17th Century',
                    title: 'Kepler\'s Observations',
                    description: 'Johannes Kepler studied vast astronomical data to formulate his three laws of planetary motion.'
                  },
                  {
                    date: '1916',
                    title: 'Einstein\'s Prediction',
                    description: 'Einstein predicted the existence of gravitational waves, a different type of wave on the fabric of spacetime.'
                  }
                ]
              },
              {
                type: 'grid',
                cards: [
                  {
                    icon: 'sun',
                    title: 'First Law: Elliptical Orbits',
                    text: 'Planets orbit the Sun in ellipses, with the Sun at one focus.'
                  },
                  {
                    icon: 'clock',
                    title: 'Second Law: Equal Areas',
                    text: 'A line joining a planet and the Sun sweeps equal areas in equal times.'
                  },
                  {
                    icon: 'stats',
                    title: 'Third Law: Period-Distance',
                    text: 'The square of a planet\'s orbital period is proportional to the cube of its average distance from the Sun.'
                  }
                ]
              },
              {
                type: 'text',
                text: 'Kepler\'s laws provided a precise description of how planets move. They were derived from meticulous observations, not theoretical principles. Newton later used these laws to mathematically derive his universal law of gravitation, explaining *why* planets move in this manner.'
              },
              {
                type: 'remember',
                text: 'An ellipse is a curve with two focal points; the sum of distances from any point on the curve to these foci is constant.'
              }
            ]
          },
          {
            chapter: 'Gravitation',
            heading: 'Newton\'s Universal Law of Gravitation',
            intro: 'Building on Kepler\'s work, Newton formulated a universal law that quantifies the attractive force between any two objects.',
            blocks: [
              {
                type: 'key-point',
                text: 'Every object in the universe attracts every other object with a force directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers.'
              },
              {
                type: 'comparison',
                comparisons: [
                  {
                    feature: 'Mass (doubled)',
                    itemA: 'Gravitational Force: Doubles',
                    itemB: 'Gravitational Force: Doubles'
                  },
                  {
                    feature: 'Distance (doubled)',
                    itemA: 'Gravitational Force: Decreases by factor of 4',
                    itemB: 'Gravitational Force: Decreases by factor of 4'
                  }
                ]
              },
              {
                type: 'stat-blocks',
                stats: [
                  {
                    icon: 'atom',
                    value: 'F = G(m₁m₂)/d²',
                    caption: 'The mathematical representation of Newton\'s Law of Gravitation.'
                  },
                  {
                    icon: 'calculator',
                    value: 'G = 6.673 x 10⁻¹¹ Nm²kg⁻²',
                    caption: 'The Universal Gravitational Constant, first measured by Henry Cavendish.'
                  }
                ]
              },
              {
                type: 'exam',
                text: 'The value of \'G\' is numerically equal to the gravitational force between two 1 kg masses placed 1 meter apart.'
              },
              {
                type: 'text',
                text: 'This law explains the force on falling objects and celestial bodies alike. While gravitational force is weak compared to other forces, the immense masses of planets and stars make it the dominant force in the universe, shaping its structure and future.'
              }
            ]
          },
          {
            chapter: 'Gravitation',
            heading: 'Earth\'s Gravitational Pull (g)',
            intro: 'The Earth\'s gravitational force causes objects near its surface to accelerate. This acceleration is denoted by \'g\' and varies depending on location and height.',
            blocks: [
              {
                type: 'key-point',
                text: 'Acceleration due to gravity (\'g\') is the acceleration a body experiences due to the Earth\'s gravitational force, always directed vertically downwards.'
              },
              {
                type: 'text',
                text: 'The value of \'g\' can be calculated using Newton\'s universal law of gravitation. For an object on the Earth\'s surface, \'g\' depends on the Earth\'s mass and radius, not on the object\'s properties.'
              },
              {
                type: 'stat-blocks',
                stats: [
                  {
                    icon: 'globe',
                    value: '9.77 m/s²',
                    caption: 'Average acceleration due to gravity on the Earth\'s surface.'
                  },
                  {
                    icon: 'map',
                    value: '9.832 m/s² (Poles)',
                    caption: 'Highest \'g\' value due to Earth\'s flatter shape at poles.'
                  },
                  {
                    icon: 'map',
                    value: '9.78 m/s² (Equator)',
                    caption: 'Lowest \'g\' value due to Earth\'s bulge at the equator.'
                  }
                ]
              },
              {
                type: 'comparison',
                comparisons: [
                  {
                    feature: 'Mass',
                    itemA: 'Amount of matter in an object, constant everywhere (scalar).',
                    itemB: 'The force with which Earth attracts an object, changes with \'g\' (vector).'
                  },
                  {
                    feature: 'Unit',
                    itemA: 'Kilogram (kg)',
                    itemB: 'Newton (N)'
                  }
                ]
              },
              {
                type: 'grid',
                cards: [
                  {
                    icon: 'globe',
                    title: 'Surface Variations',
                    text: 'Earth\'s non-spherical shape causes \'g\' to vary; highest at poles, lowest at equator.'
                  },
                  {
                    icon: 'trending',
                    title: 'Height Changes',
                    text: 'As height increases, \'g\' decreases because distance from Earth\'s center increases.'
                  },
                  {
                    icon: 'layers',
                    title: 'Depth Variations',
                    text: 'Going deeper into Earth also decreases \'g\' due to reduced effective mass.'
                  },
                  {
                    icon: 'moon',
                    title: 'Lunar Gravity',
                    text: 'On the Moon, \'g\' is about 1/6th of Earth\'s value, allowing for higher jumps.'
                  }
                ]
              },
              {
                type: 'remember',
                text: 'High and low tides are caused by the Moon\'s gravitational force, pulling water directly under it for high tide.'
              }
            ]
          },
          {
            chapter: 'Gravitation',
            heading: 'Escape Velocity & Weightlessness',
            intro: 'To completely break free from Earth\'s gravitational pull, an object needs a specific initial velocity known as escape velocity. This concept also explains weightlessness.',
            blocks: [
              {
                type: 'text',
                text: 'Gravitational potential energy is the energy an object possesses due to its position in a gravitational field. For practical purposes, it\'s considered zero at infinite distance from Earth, and negative at closer distances. As an object is thrown upwards, its velocity decreases due to Earth\'s gravity, reaching a maximum height before falling back. The higher the initial velocity, the greater the height reached.'
              },
              {
                type: 'key-point',
                text: 'Escape velocity is the minimum initial velocity an object needs to completely overcome Earth\'s gravitational pull and never fall back.'
              },
              {
                type: 'stat-blocks',
                stats: [
                  {
                    icon: 'rocket',
                    value: '11.2 km/s',
                    caption: 'Earth\'s escape velocity, essential for sending spacecraft to other planets.'
                  },
                  {
                    icon: 'moon',
                    value: '2.37 km/s',
                    caption: 'Moon\'s escape velocity, significantly lower due to its smaller mass.'
                  }
                ]
              },
              {
                type: 'remember',
                text: 'Weightlessness in space (e.g., in a spacecraft) occurs because the objects and the spacecraft are in a continuous state of free fall around Earth, not because gravity is absent.'
              },
              {
                type: 'text',
                text: 'In true free fall (only possible in a vacuum), all objects, regardless of mass, fall at the same rate. This was famously demonstrated by Galileo with falling spheres and later in vacuum with a feather and a stone.'
              }
            ]
          }
        ],
        type: 'infograph',
      }
    ] as Content[],
  },
];
export default {
  examples: examples,
};