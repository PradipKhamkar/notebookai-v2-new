import type { Content } from "../types/content.type.js";
import type { Source } from "../types/source.type.js";

const examples= [
  {
    sources: {
      title: "Example: 🦠 How Your Immune System Fights Infections",
      type: "youtube",
      metaData: {
        url: "https://www.youtube.com/watch?v=zQGOcOUBi6s",
      },
      summary:
        "- **Immune System Overview**: The human body is constantly under attack from pathogens, defended by a super-complex immune system with specialized cells and proteins.\n- **Initial Response (Macrophages)**: When skin is breached, bacteria enter, and guard cells called macrophages devour intruders and initiate inflammation by releasing messenger proteins.\n- **Reinforcements (Neutrophils)**: Neutrophils leave the bloodstream to join the fight, aggressively killing bacteria and healthy cells, and creating barriers, then commit suicide after a few days to prevent excessive damage.\n- **Strategic Decisions (Dendritic Cells)**: If the invasion persists, dendritic cells collect samples of the enemy, identifying the type of pathogen, and traveling to lymph nodes to activate specific T-cells.\n- **T-cell Activation and Duplication**: In the lymph node, dendritic cells find specific helper T-cells that match the pathogen, leading to rapid duplication of helper T-cells, some becoming memory cells and others moving to the battlefield or activating B-cells.\n- **Antibody Production (B-cells)**: Activated B-cells rapidly multiply and produce millions of specific antibodies, which flood the body to disable and mark intruders, making them easier targets for other immune cells.\n- **Sustained Fight & Memory**: Helper T-cells stimulate fighting cells and antibody factories (B-cells) to continue their aggressive defense, and after the infection is cleared, memory cells remain to provide quick immunity against future encounters.\n- **System Efficiency**: Most immune cells commit suicide after the threat is neutralized to prevent wasting resources and harming the body, while memory cells ensure long-term protection.",
      topics: [
        "🦠 The constant threat of bacteria, viruses, and fungi to the human body.",
        '🛡️ The complex "army" of the human immune system with specialized cells and jobs.',
        "🔪 How macrophages act as first-line guard cells, devouring intruders and causing inflammation.",
        "💥 The aggressive role of neutrophils in fighting infections and creating barriers, including their programmed cell death.",
        "🧠 Dendritic cells making strategic decisions and activating specific immune responses based on pathogen samples.",
        "🧬 The training and activation of helper T-cells in lymph nodes, leading to memory and further immune responses.",
        "🔬 B-cells producing millions of antibodies to disable and mark specific intruders.",
        "💡 The role of memory cells in providing long-term immunity against previously encountered pathogens.",
        "🔄 The self-regulation of the immune system to efficiently clear infections and prevent harm to the body.",
      ],
      suggestedQuestions: [
        "How do macrophages and neutrophils work together to fight an infection?",
        "What is the role of dendritic cells in the immune response?",
        "How are antibodies produced, and what do they do?",
        "Explain the concept of immune memory.",
        "What happens when the skin barrier is breached during an infection?",
        "How does the immune system differentiate between different types of pathogens?",
      ],
    } as Source,
    material: [
            {
        title: "🛡️ The Human Immune System",
        data: {
          note: "# 🛡️ The Human Immune System: A Detailed Overview\n\n## Overview\nThe human immune system is an incredibly complex network of cells, organs, and proteins designed to defend the body against a constant barrage of pathogens like bacteria, viruses, and fungi. It acts as a sophisticated internal army, equipped with various specialized units and communication channels to identify, neutralize, and remember threats, ensuring the body's survival.\n\n## The Immune System's Complexity\nThe immune system performs a multitude of critical **jobs** and involves a vast array of **cells** and **proteins** working in concert.\n\n### Jobs of the Immune System\nIts primary functions include:\n*   **Communicate**: Sending and receiving signals to coordinate responses.\n*   **Cause inflammation**: Initiating local responses to bring immune cells to the site of infection.\n*   **Strategic decisions**: Deciding on the most effective response strategy.\n*   **Kill enemies**: Directly eliminating pathogens or infected cells.\n*   **Activate other cells**: Stimulating other immune cells to join the fight.\n*   **Remember enemies**: Developing long-term immunity against specific pathogens.\n*   **Standby mode**: Maintaining a state of readiness.\n*   **Produce antibodies**: Generating specialized proteins to target pathogens.\n*   **Mark/disable enemies**: Tagging pathogens for destruction or rendering them harmless.\n*   **Fight worms**: Targeting larger parasites.\n*   **Kill infected cells**: Eliminating body cells that have been compromised by pathogens.\n\n### Immune Cells and Proteins\nThe immune system comprises numerous specialized cells (e.g., Macrophage, Neutrophil, Natural Killer Cell, Dendritic Cell, Helper T Cell, B Cell, Memory T/B Cell) and protein forces (e.g., Complement, Antibodies). Each type has distinct primary and secondary duties, forming an intricate web of interactions essential for defense.\n\n### Interconnectedness\nThese cells and proteins constantly interact, relaying information and activating one another through complex pathways. This interconnectedness allows for a coordinated and effective response to threats.\n\n## Immune Response to an Infection: A Case Study (Rusty Nail)\nLet's trace the immune system's response when a foreign body, like a rusty nail, breaches the body's defenses and introduces bacteria.\n\n### Initial Breach: The Skin\n*   Your **skin**, the body's first physical barrier, is cut, providing an entry point for **bacteria**.\n*   Bacteria quickly begin to consume body resources and multiply rapidly, doubling their numbers approximately every 20 minutes.\n*   Initially, they may go unnoticed, but once a critical population density is reached, they begin to actively damage surrounding tissue.\n\n### First Responders: Macrophages\n*   **Macrophages** (guard cells) are among the first to intervene. These large cells patrol the body's border regions.\n*   **Phagocytosis**: Macrophages engulf and trap intruders within a membrane, then break them down with enzymes, killing them.\n*   **Inflammation**: They release **messenger proteins** (causing inflammation) to signal blood vessels to become more permeable, allowing water and more immune cells to access the battlefield. This is perceived as mild swelling.\n\n### Calling for Backup: Neutrophils\n*   If macrophages are overwhelmed, they release more messenger proteins, signaling for heavy backup.\n*   **Neutrophils** (soldiers) leave the bloodstream and migrate to the site of infection.\n*   **Mindless Destruction**: Neutrophils are aggressive, fighting furiously and generating barriers to trap and kill bacteria. However, they can also damage healthy body cells in the process.\n*   **Programmed Cell Death**: To prevent excessive damage, neutrophils commit suicide after about five days.\n\n### The Brain of the Immune System: Dendritic Cells\n*   If the initial response isn't enough, **Dendritic Cells** (the intelligence of the immune system) become active.\n*   **Antigen Presentation**: They collect samples from the invaders, ripping them into pieces and presenting specific parts (**antigens**) on their outer membrane.\n*   **Strategic Decision**: The dendritic cell determines the type of threat (e.g., bacterial infection requiring anti-bacterial forces).\n*   **Travel to Lymph Nodes**: The dendritic cell then travels to the nearest **lymph node**, which acts as a central command center, to activate specific adaptive immune cells.\n\n### Activating the Adaptive Immune Response: T Cells\n*   Within the lymph nodes, billions of naive **Helper T Cells** and **Killer T Cells** are waiting.\n*   **T Cell Training**: T cells undergo a rigorous training process, with only about a quarter surviving, each equipped with a unique receptor.\n*   **Helper T Cell Activation**: The dendritic cell searches for a Helper T cell with a receptor that perfectly matches the presented antigen.\n*   Upon finding a match, the **Helper T Cell** is activated and rapidly duplicates thousands of times:\n    *   Some become **Memory T Helper Cells**, remaining in the lymph node to provide long-term immunity.\n    *   Others travel to the battlefield to assist.\n    *   A third group moves to the center of the lymph node to activate ",
        },
        //   createdBy: ObjectId('6acdd7978fa6dae360ed6177'),
        //   sourceId: ObjectId('6adb0d372688e4c05e11346b'),
        type: "note",
        //   createdAt: ISODate('2026-10-23T07:39:04.705Z'),
        //   updatedAt: ISODate('2026-10-23T07:39:04.705Z'),
        //   __v: NumberInt('0')
      },
      {
        title: "🦠 The Human Immune System",
        data: [
          {
            question:
              "According to the video, how many different jobs does the human immune system approximately perform?",
            options: [
              {
                label: "10",
                value: "a",
              },
              {
                label: "12",
                value: "b",
              },
              {
                label: "21",
                value: "c",
              },
              {
                label: "4",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The video states that for simplification, the immune system is assumed to have 12 different jobs, such as killing enemies and communicating.",
            type: "multiple-choice",
          },
          {
            question:
              "Which of the following is a primary function of macrophages when an infection begins?",
            options: [
              {
                label: "Producing antibodies",
                value: "a",
              },
              {
                label: "Devouring intruders and causing inflammation",
                value: "b",
              },
              {
                label: "Making strategic decisions for the immune response",
                value: "c",
              },
              {
                label: "Activating B cells directly",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "Macrophages, as guard cells, primarily devour intruders (up to 100 each) and cause inflammation to prepare the battlefield.",
            type: "multiple-choice",
          },
          {
            question:
              "What happens to bacteria once they enter a wound and their population reaches a certain threshold?",
            options: [
              {
                label:
                  "They are immediately recognized and destroyed by antibodies.",
                value: "a",
              },
              {
                label:
                  "They change their behavior and begin to damage the body by altering their environment.",
                value: "b",
              },
              {
                label: "They become dormant and await further signals.",
                value: "c",
              },
              {
                label:
                  "They trigger an immediate fever response without local inflammation.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "At first, bacteria fly under the radar, but once their population reaches a certain level, they change their behavior and start damaging the body.",
            type: "multiple-choice",
          },
          {
            question:
              "How do neutrophils prevent causing too much damage to the body despite their aggressive fighting style?",
            options: [
              {
                label:
                  "They are strictly controlled by the brain of the immune system.",
                value: "a",
              },
              {
                label: "They only kill infected cells and never healthy ones.",
                value: "b",
              },
              {
                label: "They commit suicide after five days.",
                value: "c",
              },
              {
                label: "They convert into memory cells once their job is done.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Neutrophils fight so aggressively that they kill healthy cells, but they also commit suicide after five days to prevent excessive damage to the body.",
            type: "multiple-choice",
          },
          {
            question:
              "What is the role of a dendritic cell when the initial immune response is not enough to stop an invasion?",
            options: [
              {
                label: "It directly attacks the remaining bacteria.",
                value: "a",
              },
              {
                label: "It causes more severe inflammation.",
                value: "b",
              },
              {
                label:
                  "It collects samples from enemies and makes a crucial decision about the type of immune forces needed.",
                value: "c",
              },
              {
                label:
                  "It produces messenger proteins to activate macrophages.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "The dendritic cell, considered the 'brain' of the immune system, collects samples from enemies and makes a crucial decision on whether to call for anti-virus or anti-bacterial forces.",
            type: "multiple-choice",
          },
          {
            question:
              "Where does the dendritic cell travel to activate Helper T cells after collecting enemy samples?",
            options: [
              {
                label: "To the site of infection",
                value: "a",
              },
              {
                label: "To the bloodstream",
                value: "b",
              },
              {
                label: "To the bone marrow",
                value: "c",
              },
              {
                label: "To the closest lymph node",
                value: "d",
              },
            ],
            answer: "d",
            explanation:
              "The dendritic cell travels to the closest lymph node, where billions of Helper and Killer T cells are waiting to be activated.",
            type: "multiple-choice",
          },
          {
            question:
              "What is the primary function of B cells once they are activated by Helper T cells?",
            options: [
              {
                label: "To devour enemy cells directly.",
                value: "a",
              },
              {
                label: "To produce millions of antibodies.",
                value: "b",
              },
              {
                label: "To cause inflammation.",
                value: "c",
              },
              {
                label: "To patrol blood vessels for new threats.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "Once activated, B cells duplicate rapidly and start producing millions of antibodies, which are the 'weapons' of the immune system.",
            type: "multiple-choice",
          },
          {
            question:
              "How do Helper T cells support B cells during antibody production?",
            options: [
              {
                label: "They physically assist B cells in replicating.",
                value: "a",
              },
              {
                label:
                  "They stimulate B cells to continue producing antibodies and specify the most needed type.",
                value: "b",
              },
              {
                label:
                  "They take over antibody production when B cells are exhausted.",
                value: "c",
              },
              {
                label:
                  "They transport produced antibodies to the infection site.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "Helper T cells stimulate the hard-working B cells, telling them to keep going and instructing them on which type of antibody is needed most.",
            type: "multiple-choice",
          },
          {
            question:
              "What is the main function of antibodies in fighting infection?",
            options: [
              {
                label: "To directly consume the pathogens.",
                value: "a",
              },
              {
                label: "To physically repair damaged body cells.",
                value: "b",
              },
              {
                label:
                  "To disable intruders, stun them, and make them easier targets for killer cells.",
                value: "c",
              },
              {
                label: "To create new immune cells.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Antibodies flood the battlefield, disabling intruders, rendering them helpless, and making them an easy target for other killer cells like macrophages.",
            type: "multiple-choice",
          },
          {
            question:
              "What important role do memory cells (Memory Helper T Cell and Memory B Cell) play after an infection is resolved?",
            options: [
              {
                label: "They repair damaged tissue at the site of infection.",
                value: "a",
              },
              {
                label:
                  "They initiate a new immune response to constantly patrol the body.",
                value: "b",
              },
              {
                label:
                  "They stay behind in the lymph node, ready to rapidly respond and kill the same enemy if encountered again.",
                value: "c",
              },
              {
                label:
                  "They transform into regular body cells to replace those that died.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Memory cells stay behind, ensuring that if the same enemy is encountered again, the immune system will be ready for it and can quickly neutralize the threat.",
            type: "multiple-choice",
          },
          {
            question:
              "Approximately how often do bacteria entering a wound double their numbers, according to the video?",
            options: [
              {
                label: "Every 5 minutes",
                value: "a",
              },
              {
                label: "Every 20 minutes",
                value: "b",
              },
              {
                label: "Every hour",
                value: "c",
              },
              {
                label: "Every 24 hours",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The video states that bacteria start using up the body's resources and double their numbers about every 20 minutes.",
            type: "multiple-choice",
          },
          {
            question:
              "When Helper T cells are 'born,' they undergo a training process. What is the survival rate for this training?",
            options: [
              {
                label: "About 75%",
                value: "a",
              },
              {
                label: "About 50%",
                value: "b",
              },
              {
                label: "About 25%",
                value: "c",
              },
              {
                label: "About 10%",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "The video mentions that T cells go through a difficult and complicated training process, and only about a quarter (25%) survive.",
            type: "multiple-choice",
          },
          {
            question:
              "What is the primary visual representation of a cell's main job in the simplified immune system diagrams?",
            options: [
              {
                label: "The surrounding colors",
                value: "a",
              },
              {
                label: "The central color",
                value: "b",
              },
              {
                label: "The size of the cell",
                value: "c",
              },
              {
                label: "The shape of the cell",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The video explicitly states that the central color in the cell diagrams represents the main job of the cell.",
            type: "multiple-choice",
          },
        ],
        type: "quiz",
      },
      {
        title: "🦠 Human Immune System Explained",
        data: [
          {
            front: "What is the primary function of the human immune system?",
            back: "The immune system's primary function is to protect the body from constant attacks by billions of bacteria, viruses, and fungi.",
            explanation:
              "It acts as a complex internal army with various specialized cells and proteins working together to prevent illness and death.",
          },
          {
            front:
              "What is the body's first physical barrier against pathogens, and what happens if it's breached?",
            back: "The skin is the first barrier. If breached, nearby bacteria seize the opportunity to enter and multiply rapidly.",
            explanation:
              "This initial breach triggers the start of the body's internal immune response as pathogens gain access to internal resources.",
          },
          {
            front: "What is the main role of a macrophage during an infection?",
            back: "Macrophages are 'guard cells' that patrol border regions, engulfing and destroying up to 100 intruders each by trapping them in a membrane and breaking them down with enzymes.",
            explanation:
              "They are the first line of cellular defense, acting as phagocytes to clear out pathogens directly at the site of infection.",
          },
          {
            front: "How do macrophages contribute to inflammation?",
            back: "Macrophages cause inflammation by releasing messenger proteins that order blood vessels to release water into the battlefield, making it easier for immune cells to move and fight.",
            explanation:
              "This localized swelling is a noticeable sign of the immune system actively responding to an infection, facilitating the transport of more immune components.",
          },
          {
            front:
              "What is a key characteristic of neutrophils in combat and their ultimate fate?",
            back: "Neutrophils fight aggressively, even killing healthy cells in the process. They self-destruct after about 5 days to prevent excessive damage to the body.",
            explanation:
              "This 'kamikaze' strategy ensures that while they are highly effective at killing pathogens and containing infection, their destructive power is limited to protect surrounding healthy tissue.",
          },
          {
            front:
              "When do dendritic cells become active, and what is their crucial decision?",
            back: "Dendritic cells activate when macrophages call for heavy backup. They collect samples from intruders and then decide whether to call for antiviral or antibacterial forces.",
            explanation:
              "Dendritic cells act as the 'brain' of the immune system, making strategic decisions based on the type of pathogen encountered, crucial for a targeted immune response.",
          },
          {
            front:
              "What happens after a dendritic cell collects samples from enemies?",
            back: "The dendritic cell rips the enemies into pieces and presents parts on its outer layer, then travels to the nearest lymph node.",
            explanation:
              "This presentation of antigen fragments is vital for activating specific T cells that can recognize and respond to the unique markers of the invading pathogen.",
          },
          {
            front:
              "What is the main role of activated Helper T cells in the lymph node?",
            back: "Activated Helper T cells quickly duplicate thousands of times. Some become memory cells, others travel to the battle, and a third group activates B cells (weapons factories).",
            explanation:
              "Helper T cells are central orchestrators of the adaptive immune response, amplifying the immune signal and directing other immune cells to fight or remember the pathogen.",
          },
          {
            front: "How are B cells activated, and what do they produce?",
            back: "B cells are activated when a Helper T cell with the same setup meets them in the lymph node. They then rapidly duplicate and produce millions of antibodies.",
            explanation:
              "B cells are the body's 'weapon factories,' responsible for mass-producing antibodies, which are specialized proteins designed to target specific invaders.",
          },
          {
            front:
              "Describe the primary mechanism by which antibodies combat intruders.",
            back: "Antibodies bind to the surface of specific intruders, disabling or killing them. They also stun bacteria, making them easier targets for other immune cells like macrophages.",
            explanation:
              "Antibodies act as molecular 'flags' or 'keys', tagging pathogens for destruction or directly neutralizing them, and they can also link up with killer cells for enhanced efficacy.",
          },
          {
            front:
              "What is the purpose of memory cells (Memory Helper T Cell and Memory B Cell)?",
            back: "Memory cells stay behind in the lymph nodes after an infection is cleared, providing long-term immunity by being ready to quickly respond if the same enemy is encountered again.",
            explanation:
              "This 'immune memory' is the basis of how vaccines work, allowing the body to mount a faster and stronger response to subsequent infections from a familiar pathogen.",
          },
          {
            front:
              "How does the immune system regulate itself and prevent excessive resource waste after an infection is cleared?",
            back: "Most immune cells that are no longer needed commit suicide. Helper T cells also stimulate B cells, but ensure they eventually die if the infection is over.",
            explanation:
              "This programmed cell death (apoptosis) is crucial to prevent autoimmune reactions and conserve energy once the threat has been neutralized, returning the system to a 'standby' mode.",
          },
          {
            front: "Are all antibodies the same, or are there different types?",
            back: "There are different classes of antibodies (e.g., IgG, IgA, IgM, IgE) that have slightly different jobs and roles in the immune response.",
            explanation:
              "Each class of antibody is structurally distinct and plays specific roles, such as providing long-term immunity (IgG) or protecting mucosal surfaces (IgA).",
          },
          {
            front:
              "How do macrophages interact with antibodies during an infection?",
            back: "Macrophages are particularly effective at engulfing bacteria that antibodies have attached to, making it easier for them to 'eat up' the marked intruders.",
            explanation:
              "Antibodies act as opsonins, essentially tagging pathogens for destruction and enhancing phagocytosis by macrophages and other phagocytic cells.",
          },
          {
            front:
              "What is the role of Helper T cells in stimulating weapons factories?",
            back: "Helper T cells stimulate B cell 'factories' to continue producing antibodies, but also ensure they stop production and die once the infection is controlled.",
            explanation:
              "This balancing act ensures that enough antibodies are produced to clear the infection, but also prevents the body from expending unnecessary resources once the threat is gone.",
          },
        ],
        //   createdBy: ObjectId('6acdd7978fa6dae360ed6177'),
        //   sourceId: ObjectId('6adb0d372688e4c05e11346b'),
        type: "flashcards",
        //   createdAt: ISODate('2026-10-23T07:35:50.918Z'),
        //   updatedAt: ISODate('2026-10-23T07:35:50.918Z'),
        //   __v: NumberInt('0')
      },
      {
        title: "🛡️ The Human Immune System",
        data: [
          {
            id: "node_1",
            label: "🛡️ Immune System Overview",
            note: {
              title: "🛡️ Body's Defense Mechanism",
              content:
                "The human immune system is a sophisticated network designed to **protect the body** from a myriad of external and internal threats. It constantly monitors and combats billions of bacteria, viruses, and fungi trying to establish a foothold.",
            },
            children: [
              {
                id: "node_1_1",
                label: "🎯 System Purpose",
                note: {
                  title: "🎯 Protection Mission",
                  content:
                    "The immune system's primary role is to **protect the body** from constant threats like bacteria, viruses, and fungi. It acts as a complex defense mechanism to prevent **illness and death** by identifying and neutralizing harmful invaders.",
                },
              },
              {
                id: "node_1_2",
                label: "🤯 Intricate Complexity",
                note: {
                  title: "🤯 A Vast Network",
                  content:
                    "The immune system is a **super-complex army** with various specialized cells and proteins. It involves intricate **interactions and communications** among its components, making it a highly sophisticated biological defense network.",
                },
              },
            ],
          },
          {
            id: "node_2",
            label: "🧬 Immune System Components",
            note: {
              title: "🧬 Diverse Arsenal",
              content:
                "The immune system is composed of numerous specialized cells and proteins, each with distinct functions. These components work synergistically to detect, identify, and eliminate pathogens, maintaining the body's health.",
            },
            children: [
              {
                id: "node_2_1",
                label: "✨ Key Immune Jobs",
                note: {
                  title: "✨ Diverse Functions",
                  content:
                    "The immune system performs **12 distinct jobs** to protect the body, including communicating, causing inflammation, making strategic decisions, killing enemies, activating other cells, and remembering threats. These varied tasks ensure a comprehensive defense strategy.",
                },
              },
              {
                id: "node_2_2",
                label: "🔬 Cells & Proteins",
                note: {
                  title: "🔬 Cellular Army",
                  content:
                    "The immune system comprises **21 different cell types** and two main protein forces. Each cell type has specialized roles, contributing to the system's overall defense capabilities.",
                },
              },
            ],
          },
          {
            id: "node_3",
            label: "🦠 Infection Response: Innate Immunity",
            note: {
              title: "🦠 Immediate Defense",
              content:
                "Innate immunity represents the **body's first line of defense**, providing an immediate, non-specific response to invading pathogens. This rapid action helps to contain infections before they become widespread.",
            },
            children: [
              {
                id: "node_3_1",
                label: "🩹 Barrier Breach",
                note: {
                  title: "🩹 Skin Penetration",
                  content:
                    "An initial infection often occurs when the body's first line of defense, like the **skin, is breached**. This allows pathogens, such as bacteria from a rusty nail, to enter the body and begin proliferation.",
                },
              },
              {
                id: "node_3_2",
                label: "📈 Bacterial Proliferation",
                note: {
                  title: "📈 Rapid Growth",
                  content:
                    "Once inside, bacteria exploit the body's resources and **rapidly multiply**, doubling their numbers approximately every 20 minutes. Initially, they might remain undetected until a critical population density is reached.",
                },
              },
              {
                id: "node_3_3",
                label: "🟠 Macrophage Intervention",
                note: {
                  title: "🟠 First Responders",
                  content:
                    "Macrophages are among the first immune cells to respond to a localized infection. They **engulf and destroy up to 100 intruders** each, acting as guards at the body's borders.",
                },
              },
              {
                id: "node_3_4",
                label: "🟡 Neutrophil Reinforcement",
                note: {
                  title: "🟡 Soldier Mobilization",
                  content:
                    "Neutrophils, alerted by macrophage signals, **leave the bloodstream** and migrate to the site of infection. They act as aggressive soldiers, engaging in direct combat with pathogens.",
                },
              },
            ],
          },
          {
            id: "node_4",
            label: "🧠 Infection Response: Adaptive Immunity",
            note: {
              title: "🧠 Targeted Defense",
              content:
                "Adaptive immunity provides a highly specific and long-lasting defense against pathogens. It involves the activation of specialized cells that **learn and remember specific threats**, allowing for a more effective response upon re-exposure.",
            },
            children: [
              {
                id: "node_4_1",
                label: "⚪ Dendritic Cell Activation",
                note: {
                  title: "⚪ Strategic Intelligence",
                  content:
                    "If innate immunity isn't enough, dendritic cells, the 'brain' of the immune system, become active. They collect and process **samples of the pathogen** to prepare for a targeted adaptive response.",
                },
              },
              {
                id: "node_4_2",
                label: "🟤 T Cell Activation",
                note: {
                  title: "🟤 Specific Recognition",
                  content:
                    "In the lymph node, dendritic cells present pathogen antigens to **virgin Helper T cells**. Only T cells with the correct receptor setup will bind, leading to their activation.",
                },
              },
              {
                id: "node_4_3",
                label: "🔵 B Cell Activation",
                note: {
                  title: "🔵 Antibody Production",
                  content:
                    "Activated Helper T cells then activate B cells. When a B cell with the specific receptor matches the T cell's antigen, it **duplicates rapidly** and transforms into a plasma cell, which produces antibodies.",
                },
              },
              {
                id: "node_4_4",
                label: "🧪 Antibody Action",
                note: {
                  title: "🧪 Targeted Weapons",
                  content:
                    "Antibodies are proteins engineered to **bind specifically to the surface of intruders**. They act as targeted weapons to neutralize pathogens in various ways.",
                },
              },
            ],
          },
          {
            id: "node_5",
            label: "💡 Immune Memory & Resolution",
            note: {
              title: "💡 Post-Infection State",
              content:
                "After successfully clearing an infection, the immune system undergoes a process of resolution, returning to a state of readiness. A crucial outcome is the development of **immunological memory**, ensuring faster and stronger responses to future encounters with the same pathogen.",
            },
            children: [
              {
                id: "node_5_1",
                label: "✅ Infection Clearance",
                note: {
                  title: "✅ Victory Achieved",
                  content:
                    "Through the combined efforts of macrophages, neutrophils, T cells, and antibodies, the immune system **successfully eliminates the infection**. The balance shifts in favor of the host.",
                },
              },
              {
                id: "node_5_2",
                label: "📉 Cell Apoptosis",
                note: {
                  title: "📉 Programmed Cell Death",
                  content:
                    "After the infection is cleared, most activated immune cells become useless. Without constant stimulating signals, they **undergo programmed cell death (suicide)** to conserve resources and prevent autoimmunity.",
                },
              },
              {
                id: "node_5_3",
                label: "🧠 Memory Cell Formation",
                note: {
                  title: "🧠 Long-Term Protection",
                  content:
                    "A small fraction of activated T cells and B cells survive and become **memory cells** (Memory Helper T Cells, Memory B Cells). These cells persist in the body, providing long-term immunity.",
                },
              },
            ],
          },
        ],

        type: "mindmap",
      },
      // {
      //   title: "🦠 The Human Immune System",
      //   data: [
      //     {
      //       chapter: "Chapter 1: Your Body Under Attack",
      //       heading: "An Ever-Present Threat",
      //       intro:
      //         "Every second, your body is under attack from billions of bacteria, viruses, and fungi trying to establish a home.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "To defend itself, your body has developed a highly complex immune system. Think of it as a miniature army with specialized units, factories, and communication networks, all working to protect you from harm.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "book",
      //               title: "Bacteria",
      //               text: "Microscopic organisms that can cause infection and disease.",
      //             },
      //             {
      //               icon: "book",
      //               title: "Viruses",
      //               text: "Even smaller agents that hijack host cells to replicate.",
      //             },
      //             {
      //               icon: "book",
      //               title: "Fungi",
      //               text: "Organisms that can cause various infections in the body.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 2: The Immune System's Roles",
      //       heading: "A Multitasking Defense Force",
      //       intro:
      //         "The human immune system is incredibly intricate, with numerous cells and proteins performing a wide array of vital tasks to maintain health.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "The immune system has 12 different primary jobs, including communication, eliminating threats, managing inflammation, and remembering past enemies. These tasks are carried out by 21 distinct cell types and 2 protein forces, each with up to four specialized functions, all interacting in a complex network.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "message",
      //               title: "Communicate",
      //               text: "Cells relay urgent messages across the body.",
      //             },
      //             {
      //               icon: "target",
      //               title: "Kill Enemies",
      //               text: "Directly destroy pathogens and infected cells.",
      //             },
      //             {
      //               icon: "activity",
      //               title: "Activate Cells",
      //               text: "Trigger other immune cells to join the fight.",
      //             },
      //             {
      //               icon: "brain",
      //               title: "Remember Enemies",
      //               text: "Store information for faster future responses.",
      //             },
      //             {
      //               icon: "zap",
      //               title: "Cause Inflammation",
      //               text: "Direct resources to infection sites.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 3: An Infection Scenario",
      //       heading: "Breaching the First Barrier",
      //       intro:
      //         "Imagine a simple cut, like from a rusty nail. This event is enough to breach the body's primary physical barrier: your skin.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Bacteria quickly seize the opportunity to enter the wound. They begin to multiply rapidly, doubling their numbers approximately every 20 minutes, using the body's resources. Initially, they might go unnoticed, but once their population reaches a certain threshold, they alter their behavior, actively damaging surrounding tissues.",
      //         },
      //         {
      //           type: "stat-blocks",
      //           stats: [
      //             {
      //               icon: "alert",
      //               value: "Skin Breach",
      //               caption: "The initial physical barrier is compromised.",
      //             },
      //             {
      //               icon: "clock",
      //               value: "20 Minutes",
      //               caption:
      //                 "Bacteria can double their numbers within this time.",
      //             },
      //             {
      //               icon: "chart",
      //               value: "Critical Mass",
      //               caption:
      //                 "Bacteria become damaging once a certain population is reached.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Macrophages: The Guards",
      //       heading: "First Responders on Duty",
      //       intro:
      //         "The first immune cells to respond to an infection are the macrophages, essentially the 'guard cells' of your immune system.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Macrophages are large cells constantly patrolling the body's border regions. They act as immediate defenders, capable of engulfing up to 100 intruders each. Inside, the trapped pathogens are broken down by enzymes and eliminated. Macrophages also initiate inflammation by signaling blood vessels to release fluid, causing mild swelling to aid the fight.",
      //         },
      //         {
      //           type: "stat-blocks",
      //           stats: [
      //             {
      //               icon: "home",
      //               value: "Guard Cells",
      //               caption:
      //                 "Macrophages patrol all border regions of the body.",
      //             },
      //             {
      //               icon: "target",
      //               value: "100 Intruders",
      //               caption: "Each macrophage can devour this many pathogens.",
      //             },
      //             {
      //               icon: "zap",
      //               value: "Inflammation",
      //               caption:
      //                 "Caused by macrophages releasing messenger proteins.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 5: Neutrophils: Aggressive Backup",
      //       heading: "Reinforcements Arrive",
      //       intro:
      //         "When macrophages are overwhelmed, they send out distress signals, calling for aggressive reinforcements: the neutrophils.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Neutrophils, guided by messenger proteins, leave their blood vessel patrol routes and rush to the infection site. They fight ferociously, sometimes even killing healthy body cells in their destructive process. They also create barriers to trap and destroy bacteria. To prevent excessive collateral damage, neutrophils are programmed to commit suicide after about five days.",
      //         },
      //         {
      //           type: "key-point",
      //           text: "Neutrophils are highly aggressive soldiers that can cause collateral damage but are essential for overwhelming initial bacterial invaders, programmed for self-destruction to limit harm.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 6: Dendritic Cells: The Strategists",
      //       heading: "Making Crucial Decisions",
      //       intro:
      //         "If the initial 'guard' and 'soldier' cells aren't enough, the immune system's 'brain,' the dendritic cell, steps in to make strategic decisions.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Dendritic cells react to the initial battle signals, collecting samples from the enemies and presenting their unique parts on their outer layer. They then travel to the nearest lymph node, a journey that takes about a day, to present these samples to waiting T-cells.",
      //         },
      //         {
      //           type: "remember",
      //           text: "The dendritic cell is like the intelligence officer, collecting enemy intel (antigens) and delivering it to the central command (lymph node) for a strategic response.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 7: T-Cells: Training & Duplication",
      //       heading: "Activating Specialized Units",
      //       intro:
      //         "At the lymph node, T-cells undergo a rigorous training process, preparing them to recognize and fight specific threats.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Helper T-cells are activated when a dendritic cell presents a matching intruder part. This triggers a chain reaction: the Helper T-cell rapidly duplicates thousands of times. Some become Memory T-cells for long-term immunity, others join the battle, and a third group activates powerful 'weapons factories' called B-cells.",
      //         },
      //         {
      //           type: "stat-blocks",
      //           stats: [
      //             {
      //               icon: "school",
      //               value: "25% Survival",
      //               caption:
      //                 "Only a quarter of T-cells survive the training process.",
      //             },
      //             {
      //               icon: "refresh",
      //               value: "Thousands of Copies",
      //               caption:
      //                 "Activated Helper T-cells quickly duplicate to build an army.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 8: B-Cells & Antibodies: The Weapons",
      //       heading: "Mass Production of Attack Tools",
      //       intro:
      //         "With Helper T-cells' guidance, B-cells transform into antibody-producing powerhouses, flooding the body with tailored weapons.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Similar to T-cells, B-cells have a specific setup. When a B-cell encounters a matching Helper T-cell, it rapidly multiplies and starts producing millions of antibodies. These Y-shaped proteins are engineered to bind to the surface of specific intruders, disabling them or making them easier targets for macrophages. Helper T-cells also instruct B-cells on which type of antibody is most effective.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "factory",
      //               title: "B-Cells",
      //               text: "Weapon factories that produce millions of antibodies.",
      //             },
      //             {
      //               icon: "target",
      //               title: "Antibodies",
      //               text: "Proteins designed to bind to and disable specific pathogens.",
      //             },
      //             {
      //               icon: "link",
      //               title: "Targeting",
      //               text: "Antibodies mark pathogens for destruction by other immune cells.",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 9: Victory and Long-Term Immunity",
      //       heading: "Clearing the Battlefield",
      //       intro:
      //         "The combined efforts of immune cells and antibodies eventually turn the tide, wiping out the infection and leaving behind a lasting memory.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "With billions of antibodies flooding the bloodstream and disabling the intruders, coupled with the aggressive efforts of macrophages and neutrophils, the balance of power shifts. The infection is eventually wiped out. Although millions of body cells may have died, they are quickly replenished.",
      //         },
      //         {
      //           type: "key-point",
      //           text: "After the infection is cleared, most active immune cells commit suicide to conserve resources, but Memory T-cells and B-cells remain, ready to rapidly respond if the same enemy is ever encountered again, providing long-term immunity.",
      //         },
      //       ],
      //     },
      //   ],

      //   type: "infograph",
      // },
    ] as Content[],
  },
  {
    sources: {
      title: "Example: 🧫 Cell Biology: Nucleus, Division & Death",
      type: "document",
      metaData: {
        url: "https://res.cloudinary.com/dzkexyp4x/image/upload/v1792742683/claira_files/cfpsia7sjjdiqxm1ls4e.pdf",
        uploadId: "claira_files/cfpsia7sjjdiqxm1ls4e",
        fileType: "application/pdf",
      },
      summary:
        "- **The Nucleus**: It is the largest membranous organelle, containing chromosomes essential for DNA replication, RNA transcription, and processing, comprising the nuclear envelope, chromatin, nucleolus, and nucleoplasm.\n- **Chromatin Forms**: Chromatin exists as heterochromatin (inactive, condensed) and euchromatin (active, extended) within the interphase nucleus, differing based on cellular functional activity.\n- **Cell Cycle Overview**: The cell cycle alternates between a longer Interphase for growth and genetic material replication, and a shorter Mitotic phase for cell division, regulated by growth factors and checkpoints.\n- **Interphase Stages**: Interphase includes G1 (cell growth, RNA/protein synthesis), S (DNA replication, chromosome duplication), and G2 (storage of proteins/energy for mitosis, centrosome duplication).\n- **Cell Division Types**: Cells divide through Mitosis, producing two identical daughter cells for growth and repair, or Meiosis, which forms four haploid gametes for sexual reproduction with genetic variation.\n- **Cell Cycle Regulation**: The cell cycle is controlled by various growth factors and checkpoints, such as the restriction checkpoint and DNA damage checkpoints, to ensure proper cell proliferation and integrity.\n- **Cell Differentiation**: This is the process where unspecialized cells acquire specialized structural and functional features, influencing their proliferation rates and grouping them into static, stable, or labile populations.\n- **Stem Cells**: These primal cells possess self-renewal and potency, differentiating into various specialized cell types, and are categorized as totipotent, pluripotent, multipotent, and unipotent.\n- **Cell Death Mechanisms**: Cells can undergo two main types of death: necrosis (accidental, pathological, involves cell rupture and inflammation) and apoptosis (programmed, physiological, involves controlled cellular breakdown and removal).\n- **Apoptosis Significance**: Apoptosis plays crucial roles in embryonic development for tissue morphogenesis, eliminating damaged cells, and maintaining cell population homeostasis in adults.",
      topics: [
        "🧫 The nucleus: its structure, components, and functions in DNA replication and RNA transcription.",
        "🧬 Chromatin organization and types: heterochromatin (inactive) and euchromatin (active) in the interphase nucleus.",
        "🔄 The cell cycle: including interphase stages (G1, S, G2) and mitotic phases, along with its regulatory checkpoints.",
        "✖️ Karyotyping: the systematic arrangement of chromosomes into homologous pairs during metaphase.",
        "🦠 Cell division types: mitosis for somatic cell replication and meiosis for germ cell gamete formation.",
        "🌱 Cell proliferation and differentiation: the process of unspecialized cells acquiring specialized features and classification into static, stable, and labile populations.",
        "🧪 Stem cells: their properties of self-renewal and potency, and types including totipotent, pluripotent, multipotent, and unipotent.",
        "💀 Cell death: the distinct mechanisms of necrosis (accidental) and apoptosis (programmed) and their morphological features.",
        "🧬 Genetic variation: the role of crossing-over during meiosis I in increasing genetic diversity.",
        "🎯 Cell cycle checkpoints: critical control mechanisms that detect and address internal or external problems to regulate cell progression.",
      ],
      suggestedQuestions: [
        "What are the main components and functions of the cell nucleus?",
        "How do heterochromatin and euchromatin differ in their structure and activity?",
        "Describe the stages of the cell cycle and the key events occurring in each phase.",
        "What are the primary differences between mitosis and meiosis, and what is the outcome of each?",
        "Explain the concept of cell differentiation and the different types of cell populations.",
        "How do necrosis and apoptosis differ as mechanisms of cell death?",
      ],
    } as Source,
    material: [
        {
        title: "🧬 Nucleus, Cell Division & Cell Cycle",
        data: {
          note: '# 🧬 Nucleus, Cell Division & Cell Cycle\n\n## Overview\nThis chapter provides a comprehensive look into the cell\'s command center, **the nucleus**, detailing its structure and the organization of genetic material. It then thoroughly explores **the cell cycle**, the series of events leading to cell division, and delves into the two main types of cell division: **mitosis** and **meiosis**. Finally, the note covers **cell proliferation and differentiation**, including various stem cell types, and distinguishes between **necrosis** and **apoptosis** as mechanisms of cell death.\n\n## The Nucleus\nThe nucleus is the **largest membranous organelle** containing chromosomes, which are essential for **DNA replication, RNA transcription, and processing**. Most cells have a single nucleus, but exceptions exist (e.g., binucleated liver cells, multinucleated skeletal muscle fibers, anucleated mature RBCs).\n\n### Components of the Interphase Nucleus\n1.  **The Nuclear Envelope:**\n    *   Consists of two parallel membranes (outer and inner) separated by a **perinuclear cisterna**.\n    *   **Nuclear Pores** perforate the envelope, providing channels for communication and substance exchange between the nucleus and cytoplasm (e.g., ribosomal subunits).\n        *   **Outer membrane:** Continuous with the rough endoplasmic reticulum and covered with ribosomes synthesizing transmembrane proteins.\n        *   **Inner membrane:** Supported by intermediate filaments called **lamins**, forming the **nuclear lamina**. The lamina supports the envelope and influences chromosome distribution and function.\n2.  **The Chromatin:**\n    *   Formed from **deoxyribonucleic acid (DNA)** conjugated with **histone proteins**. It strongly binds basic dyes like hematoxylin.\n    *   **DNA Packaging:** DNA is extensively packaged in chromatin through several levels:\n        *   A segment of DNA double helix wraps twice around an octamer of eight histone proteins to form a **nucleosome** (the structural unit of chromatin). Each nucleosome is separated by **linker DNA**.\n        *   Repeating nucleosomes with linker DNA form an **11nm fiber**, known as "beads on a string."\n        *   This chain of nucleosomes packs together to form a **30nm fiber**.\n        *   Higher orders of packaging eventually create the compact **700nm structure** seen in the metaphase of dividing cells, known as the **chromatid** of a chromosome.\n    *   **Forms of Chromatin in Interphase Nucleus:**\n        *   **Heterochromatin (condensed chromatin):** Represents the **inactive part** of chromatin. It appears as **dense basophilic clumps** (LM) or **condensed filaments/granules** (EM). Locations include nucleolar-associated, peripheral (at inner nuclear membrane), and heterochromatin islands in nuclear sap.\n        *   **Euchromatin (extended chromatin):** Represents the **active part** of chromatin, stretched out for genetic information transcription. It appears as **lightly stained basophilic areas** (LM) or **dispersed filaments/granules** (EM).\n        *   The proportion of euchromatin to heterochromatin varies with a cell\'s functional activity; active cells have more euchromatin and prominent nucleoli.\n3.  **The Nucleolus:**\n    *   A spherical body within the nucleus, **without a surrounding membrane**.\n    *   **Function:** Site of **ribosomal RNA (rRNA) formation (transcription)**. These rRNAs are packaged with associated proteins to form ribosomal subunits, which are then exported to the cytoplasm for protein synthesis.\n4.  **The Nucleoplasm (Nuclear Sap):**\n    *   A **colloidal protein solution** providing a medium for rapid diffusion of metabolites and movement of RNAs towards nuclear pores.\n\n## The Cell Cycle\nThe **cell cycle** is the alternation between **interphase** and **mitosis**, a regulated sequence of events controlling cell growth, function, and division.\n\n### Major Events\n1.  **Interphase:** A longer period where the cell grows, performs normal functions, and **replicates its genetic material**.\n2.  **Mitosis:** A shorter period where the parent cell divides into **two daughter cells**, each with the **same number of chromosomes** (46 in human somatic cells).\n\n### Events of Interphase\nInterphase is subdivided into three phases:\n*   **First Gap Phase (G1 phase):**\n    *   **Longest period** between mitosis and DNA replication.\n    *   Cell growth, **RNA and protein synthesis** occur.\n    *   The cell regains its full size and performs its function.\n    *   Duplication of **centrioles** begins.\n*   **G0 phase:**\n    *   A quiescent state where most differentiated cells no longer divide, performing specialized functions.\n    *   G0 is not necessarily permanent; cells may re-enter the cell cycle upon stimuli.\n*   **DNA Synthesis Phase (S phase):**\n    *   **DNA replication** occurs, duplicating the DNA content of the nucleus.\n    *   The **amount of DNA doubles**, but the **total chromosome number remains 46**.\n    *   **Chromosomes during S phase:**\n        *   **s-chromosomes:** Each chromosome is made of **one DNA molecule** (interphase chromosomes).\n        *   **d-chromosomes (mitotic metaphase chromosomes):** Formed during S phase, maximally condensed in metaphase. Each d-chromosome consists of **two sister chromatids** linked at the **centromere**.\n*   **Second Gap Phase (G2 phase):**\n    *   A brief period from the end of DNA replication to the beginning of mitosis.\n    *   **Proteins and energy essential for mitosis are stored**.\n    *   Duplication of the **centrosome is completed** (two pairs of centrioles).\n\n### Karyotyping\n*   Systematic arrangement of metaphase chromosomes into **homologous pairs**.\n*   Human chromosomes are organized into **22 homologous pairs of autosomes** and **one pair of sex chromosomes** (XX in females, XY in males).\n*   In females, one X chromosome is **heterochromatic** in interphase, forming a dense chromatin mass called the **"Barr body."** It can be seen as a drumstick-shaped mass in neutrophils.\n\n### Regulation of the Cell Cycle\nThe cell cycle is regulated by **growth factors** and **checkpoints** that monitor conditions and ensure proper progression.\n*   **Restriction Checkpoint:**\n    *   The **most important checkpoint**, occurring in the **G1 phase**.\n    *   Sensitive to cell size and interactions with the extracellular matrix.\n    *   Cells not receiving appropriate growth stimuli do not pass this point and are eliminated by apoptosis.\n*   **DNA Damage Checkpoints:**\n    *   Occur in **G1, S, and G2 phases**.\n    *   Block cell cycle progression until damaged DNA is repaired or apoptosis occurs.\n\n## Cell Division\nCells divide via two main processes: **mitosis** and **meiosis**.\n\n### Mitosis\n*   **Definition:** Division of a **somatic cell** into **two daughter cells identical to the mother cell**.\n*   **Purpose:** Essential for organism **growth, development, renewal, and repair**.\n*   **Stages:**\n    1.  **Prophase:**\n        *   The **nucleolus disappears**.\n        *   Nuclear chromatin gradually condenses into **46 rod-shaped d-chromosomes**.\n        *   Centriole pairs migrate to opposite poles, forming the **mitotic spindle**.\n        *   The **nuclear envelope breaks** into small vesicles.\n    2.  **Metaphase:**\n        *   The **46 d-chromosomes become maximally condensed**.\n        *   Chromosomes align at the **equatorial plate** of the cell.\n        *   Each pair of sister chromatids attaches to mitotic spindle microtubules at the **kinetochore**.\n    3.  **Anaphase:**\n        *   **Centromere divides**, separating sister chromatids.\n        *   The **46 chromatids migrate** towards opposite poles of the cell.\n        *   A **cleavage furrow** begins to develop at the equatorial plate.\n    4.  **Telophase:**\n        *   The **mitotic spindle disappears**, and the **nucleolus reappears**.\n        *   Chromosomes uncoil and organize into **interphase chromatin (46 s-chromosomes)**.\n        *   The **nuclear envelope reforms** around the chromosomes at each pole.\n        *   **Cytokinesis** (cytoplasm division) occurs as the cleavage furrow deepens due to a contractile ring of actin filaments, resulting in **two daughter cells**.\n\n### Meiosis\n*   **Definition:** Cell division in **germ cells** to form **gametes** (sperm/ova).\n*   **Result:** **Four daughter cells**, each containing the **haploid number of 23 s-chromosomes**.\n*   Consists of **two successive divisions** without an intervening S phase.\n\n#### A. First Meiotic Division (Reductional Division)\n*   **Prophase I:**\n    *   Preceded by an S phase where chromosomes replicate.\n    *   Extended phase with **pairing of homologous chromosomes**, forming **tetrads**.\n    *   **Crossing-over** occurs between chromatids of homologous chromosomes, leading to genetic recombination.\n    *   Nuclear envelope disappears, and mitotic spindle forms.\n*   **Metaphase I:** Paired chromosomes align at the equatorial plate.\n*   **Anaphase I:** **Centromeres do not divide**; members of each homologous pair move to opposite poles.\n*   **Telophase I:** Cytokinesis occurs, resulting in two daughter cells, each with **23 chromosomes** (haploid).\n\n#### B. Second Meiotic Division (Equatorial Division)\n*   Very similar to mitosis, but **not preceded by an S phase**.\n*   Daughter cells from Meiosis I (with 23 d-chromosomes) enter Meiosis II.\n*   **Metaphase II:** Each chromosome lines up individually at the equatorial plate.\n*   **Anaphase II:** The **centromere splits**, and each of the two chromatids (now individual chromosomes) moves to opposite poles.\n\n## Cell Proliferation and Differentiation\n**Cell proliferation** is the rapid multiplication of cells, while **cell differentiation** is the process where unspecialized cells acquire specialized structural and/or functional features.\n\n### Types of Cell Populations\nSomatic cells in adults are grouped into three categories based on proliferation:\n1.  **Static Cell Population:**\n    *   **Non-dividing permanent cells** that are not replaced if lost.\n    *   Long-lived cells that have left the cell cycle (Go phase) to perform specialized functions.\n    *   Examples: **cardiac muscle fibers and neurons**.\n2.  **Stable Cell Population:**\n    *   **Quiescent cells** that do not usually divide but can be stimulated to do so (e.g., due to injury).\n    *   Considered to be in the **Go phase**.\n    *   Examples: **smooth muscle fibers and epithelial cells of most internal organs** (e.g., liver, kidney).\n3.  **Labile Cell Population (Renewing Cells):**\n    *   Fully differentiated cells that do not proliferate themselves but are continuously renewed by the proliferation of less differentiated **stem cells**.\n    *   Short life span.\n    *   Examples: **blood cells, epithelial cells of the skin, and epithelial cells lining the digestive tract**.\n\n*Clinical Hint:* Chemotherapeutic drugs destroy actively growing cells, including cancer cells, but also harm labile cells like those in bone marrow and hair follicles, leading to side effects like bone marrow suppression and hair loss.\n\n### The Stem Cells\nStem cells are primal cells that are the source for all specialized cells. They have two key properties:\n1.  **Self-renewal:** Ability to undergo numerous cycles of cell division while maintaining an undifferentiated state.\n2.  **Potency:** Capacity to differentiate into different cell types.\n\n#### Types of Stem Cells (by potency)\n*   **Totipotent Stem Cells:**\n    *   Can generate **all types of cells and tissues**.\n    *   Can construct a **complete, viable organism**.\n    *   Derived from the cells of the **first few divisions of the fertilized ovum (morula cells)**.\n*   **Pluripotent Stem Cells:**\n    *   Descendants of totipotent cells, derived from the **inner cell mass of the blastocyst**.\n    *   Can differentiate into **more than 220 cell types** from the three primary germ layers (ectoderm, endoderm, mesoderm).\n    *   Undergo further specialization into multipotent progenitor cells.\n*   **Multipotent Stem Cells:**\n    *   Can produce cells of a **closely related family**.\n    *   Examples: **hematopoietic stem cells (HSCs)** (differentiate into red/white blood cells, platelets) and **mesenchymal stem cells (MSCs)** (differentiate into various connective tissue types).\n*   **Unipotent Cells:**\n    *   Can produce **mature cells of a single type**.\n    *   Retain the property of **self-renewal**.\n    *   Example: stem cells in the **skin epidermis**.\n\n#### Potential Sources of Stem Cells for Clinical Application\n1.  **Embryonic Stem Cells:** Pluripotent, derived from blastocysts, with limited use due to ethical restrictions.\n2.  **Adult Stem Cells:** Mostly multipotent, producing a limited number of cell types.\n3.  **Amniotic Fluid Stem Cells:** Multipotent.\n4.  **Umbilical Cord Blood Stem Cells:** Contains hematopoietic stem cells (HSCs) and mesenchymal stem cells (MSCs).\n\n## Cell Death\nWhen a cell is exposed to severe stress beyond its adaptive capacity, it reaches a ',
        },

        type: "note",
      },
      {
        title: "Cell Biology: Nucleus & Cell Cycle",
        data: [
          {
            question:
              "Which of the following best describes the primary role of the nucleus within a cell, according to the source?",
            options: [
              {
                label:
                  "It serves as the site for protein synthesis and packaging.",
                value: "a",
              },
              {
                label:
                  "It is the largest membranous organelle containing machinery for DNA replication and RNA transcription.",
                value: "b",
              },
              {
                label:
                  "Its main function is to produce ATP through cellular respiration.",
                value: "c",
              },
              {
                label:
                  "It acts as a storage site for lipids and carbohydrates.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The source states that the nucleus is the largest membranous organelle, containing chromosomes that represent the machinery for DNA replication, RNA transcription, and processing.",
            type: "multiple-choice",
          },
          {
            question:
              "In which form is DNA extensively packaged in chromatin, starting with its basic structural unit?",
            options: [
              {
                label: "Chromatid, which is then packaged into a nucleosome.",
                value: "a",
              },
              {
                label:
                  "A nucleosome, followed by an 11nm fiber, then a 30nm fiber, culminating in a 700nm chromatid.",
                value: "b",
              },
              {
                label:
                  "A 30nm fiber, which is then condensed into an 11nm fiber, and finally a nucleosome.",
                value: "c",
              },
              {
                label: "Linker DNA directly forming a chromatid.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "DNA is packaged as a nucleosome (DNA wrapped around histones), which forms an 11nm fiber ('beads on a string'), then a 30nm fiber, and eventually a 700nm chromatid during metaphase.",
            type: "multiple-choice",
          },
          {
            question:
              "Which statement accurately describes the function of nuclear pores in the nuclear envelope?",
            options: [
              {
                label:
                  "They are channels exclusively for the export of mature proteins from the nucleus to the cytoplasm.",
                value: "a",
              },
              {
                label:
                  "They are uniform in distribution and number across all cell types, primarily for DNA replication.",
                value: "b",
              },
              {
                label:
                  "They provide a bidirectional channel for communication and substance exchange between the nucleus and cytoplasm, such as ribosomal subunits.",
                value: "c",
              },
              {
                label:
                  "They serve as structural support for the nuclear envelope, formed by intermediate filaments.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Nuclear pores are perforations in the nuclear envelope that provide a bidirectional channel through which the nucleus and cytoplasm communicate and exchange substances, including ribosomal subunits.",
            type: "multiple-choice",
          },
          {
            question:
              "According to the source, what differentiates euchromatin from heterochromatin in the interphase nucleus?",
            options: [
              {
                label:
                  "Euchromatin is condensed and inactive, while heterochromatin is extended and active.",
                value: "a",
              },
              {
                label:
                  "Euchromatin appears as dense basophilic clumps, whereas heterochromatin appears as lightly stained areas.",
                value: "b",
              },
              {
                label:
                  "Euchromatin represents the active part of chromatin where genetic information can be transcribed, appearing extended.",
                value: "c",
              },
              {
                label:
                  "Heterochromatin is always found swimming in the nuclear sap, while euchromatin is always associated with the nucleolus.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Euchromatin is described as extended chromatin, representing the active part where genetic information in the DNA can be transcribed. Heterochromatin is condensed and inactive.",
            type: "multiple-choice",
          },
          {
            question: "What is the primary function of the nucleolus?",
            options: [
              {
                label: "Site of DNA replication.",
                value: "a",
              },
              {
                label: "Storage of chromatin proteins.",
                value: "b",
              },
              {
                label:
                  "Formation (transcription) of ribosomal RNA and packaging into ribosomal subunits.",
                value: "c",
              },
              {
                label: "Regulation of nuclear-cytoplasmic transport.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "The nucleolus is the site of formation (transcription) of ribosomal RNA, which is then packaged with associated proteins to form ribosomal subunits.",
            type: "multiple-choice",
          },
          {
            question:
              "Which event is unique to the S (synthesis) phase of the cell cycle?",
            options: [
              {
                label: "Cell growth and protein synthesis.",
                value: "a",
              },
              {
                label:
                  "DNA replication, doubling the DNA content of the nucleus.",
                value: "b",
              },
              {
                label: "Storage of proteins and energy essential for mitosis.",
                value: "c",
              },
              {
                label: "Division of the parent cell into two daughter cells.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The S (synthesis) phase is characterized by replication of DNA, where the DNA content of the nucleus becomes duplicated, though the chromosome number remains unchanged at 46 in human somatic cells.",
            type: "multiple-choice",
          },
          {
            question:
              "During which stage of mitosis do chromosomes become maximally condensed and align at the equatorial plate of the cell?",
            options: [
              {
                label: "Prophase",
                value: "a",
              },
              {
                label: "Metaphase",
                value: "b",
              },
              {
                label: "Anaphase",
                value: "c",
              },
              {
                label: "Telophase",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "In Metaphase, the 46 d-chromosomes become maximally condensed and are aligned at the equatorial plate of the cell, attached to the mitotic spindle.",
            type: "multiple-choice",
          },
          {
            question:
              "What is a distinguishing event of Prophase I in meiosis that contributes to genetic variation?",
            options: [
              {
                label: "The complete disappearance of the nucleolus.",
                value: "a",
              },
              {
                label:
                  "Alignment of individual chromosomes at the equatorial plate.",
                value: "b",
              },
              {
                label:
                  "Crossing-over between chromatids of homologous chromosomes.",
                value: "c",
              },
              {
                label:
                  "Division of centromeres and separation of sister chromatids.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "During Prophase I, crossing-over occurs between the chromatids of homologous chromosomes, leading to genetic recombination and variation.",
            type: "multiple-choice",
          },
          {
            question:
              "Which of the following cell populations are described as 'static' cells, meaning they are non-dividing and not replaced if injured or lost?",
            options: [
              {
                label: "Epithelial cells of the skin and digestive tract.",
                value: "a",
              },
              {
                label:
                  "Smooth muscle fibers and epithelial cells of the liver.",
                value: "b",
              },
              {
                label: "Cardiac muscle fibers and neurons.",
                value: "c",
              },
              {
                label: "Blood cells and stem cells.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Static cell populations consist of non-dividing, permanent cells such as cardiac muscle fibers and neurons, which are not replaced if injured or lost.",
            type: "multiple-choice",
          },
          {
            question:
              "A pluripotent stem cell is capable of differentiating into which of the following?",
            options: [
              {
                label:
                  "Only cells of a single, closely related family, while maintaining self-renewal.",
                value: "a",
              },
              {
                label: "A complete, viable organism on its own.",
                value: "b",
              },
              {
                label:
                  "Cells from all three primary germ layers (ectoderm, endoderm, and mesoderm).",
                value: "c",
              },
              {
                label:
                  "Only mature cells of one specific type, without self-renewal.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Pluripotent stem cells are descendants of totipotent cells and can differentiate into derivatives of all three primary germ layers, forming more than 220 cell types in the adult body.",
            type: "multiple-choice",
          },
          {
            question:
              "Which morphological feature is characteristic of apoptosis rather than necrosis?",
            options: [
              {
                label: "Cell membrane rupture with severe swelling.",
                value: "a",
              },
              {
                label:
                  "Extensive inflammation with damage to surrounding tissue.",
                value: "b",
              },
              {
                label:
                  "Hypercondensation of nuclear chromatin with membrane blebbing.",
                value: "c",
              },
              {
                label: "Denaturation and coagulation of cytoplasmic proteins.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Apoptosis is characterized by chromatin condensation, cell shrinkage, and membrane blebbing without loss of membrane integrity. Cell membrane rupture, inflammation, and protein coagulation are features of necrosis.",
            type: "multiple-choice",
          },
          {
            question:
              "What is the primary difference in the origin or cause between necrosis and apoptosis?",
            options: [
              {
                label:
                  "Necrosis is always physiological, while apoptosis is always pathological.",
                value: "a",
              },
              {
                label:
                  "Necrosis is programmed cell death, while apoptosis is accidental cell death.",
                value: "b",
              },
              {
                label:
                  "Necrosis is accidental cell death due to unfavorable factors, while apoptosis is programmed cell death controlled by genes.",
                value: "c",
              },
              {
                label:
                  "Both necrosis and apoptosis are exclusively triggered by viral infections.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Necrosis is described as accidental cell death caused by pathological factors, while apoptosis is programmed cell death, a physiological process controlled by genes.",
            type: "multiple-choice",
          },
          {
            question:
              "The G0 phase of the cell cycle is best described as a state where:",
            options: [
              {
                label: "Cells are undergoing rapid DNA replication.",
                value: "a",
              },
              {
                label:
                  "Cells have exited the cell cycle to perform specialized functions and may or may not reenter.",
                value: "b",
              },
              {
                label:
                  "Cells are storing proteins and energy in preparation for mitosis.",
                value: "c",
              },
              {
                label: "Cells are actively dividing into two daughter cells.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The G0 phase is where most differentiated cells reside, carrying out specialized functions without dividing. They are considered outside the cycle but may reenter in response to stimuli.",
            type: "multiple-choice",
          },
          {
            question:
              "Which of the following events takes place during Anaphase of mitosis?",
            options: [
              {
                label:
                  "The nucleolus disappears and the nuclear envelope breaks down.",
                value: "a",
              },
              {
                label: "Chromosomes align at the equatorial plate.",
                value: "b",
              },
              {
                label:
                  "Centromeres divide, and sister chromatids separate, migrating to opposite poles.",
                value: "c",
              },
              {
                label:
                  "The mitotic spindle disappears, and the nuclear envelope reforms.",
                value: "d",
              },
            ],
            answer: "c",
            explanation:
              "Anaphase is characterized by the division of the centromere, leading to the separation of sister chromatids, which then migrate towards opposite poles of the cell.",
            type: "multiple-choice",
          },
          {
            question:
              "A Barr body observed in a female neutrophil represents what cellular structure?",
            options: [
              {
                label: "An active nucleolus involved in rRNA synthesis.",
                value: "a",
              },
              {
                label: "A condensed, inactive X chromosome.",
                value: "b",
              },
              {
                label: "The site of DNA replication within the nucleus.",
                value: "c",
              },
              {
                label: "A pair of homologous autosomes.",
                value: "d",
              },
            ],
            answer: "b",
            explanation:
              "The Barr body is a dense chromatin mass found in females, representing one of the X chromosomes that is heterochromatic (inactive) in the interphase nucleus.",
            type: "multiple-choice",
          },
        ],
        type: "quiz",
      },
      {
        title: "Cell Biology: Nucleus, Division & Cycle",
        data: [
          {
            front: "What is the primary function of the cell nucleus?",
            back: "The nucleus contains chromosomes and machinery for DNA replication, RNA transcription, and processing.",
            explanation:
              "It acts as the cell's control center, managing genetic material and gene expression.",
          },
          {
            front: "Name the four main components of an interphase nucleus.",
            back: "The nuclear envelope, chromatin, nucleolus, and nucleoplasm.",
            explanation:
              "These components work together to maintain the nucleus's structure and function in regulating cellular activities.",
          },
          {
            front: "What is the role of nuclear pores?",
            back: "Nuclear pores provide a bidirectional channel for communication and exchange of substances between the nucleus and cytoplasm.",
            explanation:
              "They regulate the transport of molecules like ribosomal subunits, RNAs, and proteins, essential for cellular function.",
          },
          {
            front: "Distinguish between heterochromatin and euchromatin.",
            back: "Heterochromatin is condensed and inactive chromatin, while euchromatin is extended and active chromatin, allowing genetic information transcription.",
            explanation:
              "The state of chromatin packaging dictates whether genes can be accessed and expressed, affecting cell function.",
          },
          {
            front: "What is the main function of the nucleolus?",
            back: "The nucleolus is the site of ribosomal RNA (rRNA) formation and packaging with proteins to form ribosomal subunits.",
            explanation:
              "These ribosomal subunits are then exported to the cytoplasm to initiate protein synthesis, highlighting the nucleolus's role in ribosome biogenesis.",
          },
          {
            front: "What are the two major events of the cell cycle?",
            back: "The cell cycle consists of Interphase (growth, function, DNA replication) and Mitosis (cell division).",
            explanation:
              "These two phases alternate to allow for cell growth and division, ensuring organismal development and tissue repair.",
          },
          {
            front:
              "What key event occurs during the S phase of the cell cycle?",
            back: "DNA replication takes place, duplicating the DNA content of the nucleus, though the chromosome number remains 46 in human somatic cells.",
            explanation:
              "This duplication is crucial to ensure that each daughter cell receives a complete set of genetic material after division.",
          },
          {
            front: "What is the G0 phase of the cell cycle?",
            back: "G0 is a quiescent phase where cells differentiate to perform specialized functions and no longer divide, though they may reenter the cycle.",
            explanation:
              "Many differentiated cells, like neurons, enter G0 to carry out their specific roles without continuously proliferating.",
          },
          {
            front:
              "What is the significance of the restriction checkpoint in the cell cycle?",
            back: "The restriction checkpoint in G1 is the most important, controlling progression based on cell size and environmental stimuli; cells not meeting criteria undergo apoptosis.",
            explanation:
              "This checkpoint ensures that cells only divide under favorable conditions, preventing the proliferation of unhealthy or inappropriate cells.",
          },
          {
            front: "Describe the main outcome of mitosis.",
            back: "Mitosis results in a parent somatic cell dividing into two daughter cells, each genetically identical to the parent with the same number of chromosomes (46 in humans).",
            explanation:
              "This type of division is essential for growth, development, tissue renewal, and repair in multicellular organisms.",
          },
          {
            front: "What is the key event during mitotic metaphase?",
            back: "Chromosomes become maximally condensed and align at the equatorial plate of the cell, with sister chromatids attached to spindle microtubules via kinetochores.",
            explanation:
              "This precise alignment ensures that sister chromatids will be evenly distributed to daughter cells during anaphase.",
          },
          {
            front: "What is a Barr body and in which cells is it found?",
            back: "A Barr body is a dense chromatin mass representing a condensed, inactive X chromosome found in the interphase nucleus of female cells.",
            explanation:
              "It is a mechanism of dosage compensation in females, ensuring that cells with two X chromosomes do not produce double the X-linked gene products compared to males.",
          },
          {
            front: "What is the primary outcome of meiosis?",
            back: "Meiosis produces four daughter cells (gametes) from a germ cell, each containing the haploid number of chromosomes (23 in humans).",
            explanation:
              "This reductional division is crucial for sexual reproduction, ensuring that the diploid number is restored upon fertilization.",
          },
          {
            front:
              "Which unique event occurs during Prophase I of meiosis that contributes to genetic variation?",
            back: "Crossing-over occurs, where homologous chromosomes exchange genetic material, resulting in chromosomes that are a mixture of paternal and maternal genes.",
            explanation:
              "This recombination shuffles alleles, leading to increased genetic diversity in the offspring.",
          },
          {
            front: "Define cell differentiation.",
            back: "Cell differentiation is the process by which unspecialized cells acquire specialized structural and/or functional features.",
            explanation:
              "This process allows cells to develop into the diverse cell types that form the tissues and organs of a mature organism.",
          },
          {
            front: 'What distinguishes a "static cell population"?',
            back: "Static cells are non-dividing, permanent cells (e.g., cardiac muscle fibers, neurons) that leave the cell cycle and are not replaced if injured or lost.",
            explanation:
              "These cells are highly specialized and typically have a very long lifespan, with limited or no capacity for self-renewal.",
          },
          {
            front: "What are the two main properties of stem cells?",
            back: "Stem cells possess self-renewal (ability to undergo numerous divisions while remaining undifferentiated) and potency (capacity to differentiate into various cell types).",
            explanation:
              "These properties make stem cells crucial for development, growth, and tissue repair throughout an organism's life.",
          },
          {
            front:
              "What is the differentiation potential of pluripotent stem cells?",
            back: "Pluripotent stem cells can differentiate into cell types derived from all three primary germ layers (ectoderm, endoderm, mesoderm), forming most cell types in the adult body.",
            explanation:
              "They are more restricted than totipotent cells but still highly versatile, derived from the inner cell mass of the blastocyst.",
          },
          {
            front: "What are the two mechanisms of cell death?",
            back: "The two distinct mechanisms of cell death are necrosis (accidental) and apoptosis (programmed).",
            explanation:
              "Necrosis is a pathological response to injury, while apoptosis is a regulated physiological process for eliminating unwanted cells.",
          },
          {
            front:
              "How do morphological features of apoptosis differ from necrosis?",
            back: "Apoptosis involves chromatin hypercondensation, cell shrinkage, and membrane blebbing without loss of integrity, forming apoptotic bodies; necrosis involves cell swelling, membrane rupture, and inflammation.",
            explanation:
              "Apoptosis is a tidy process, typically cleared by phagocytes without causing inflammation, whereas necrosis causes extensive tissue damage and inflammation.",
          },
        ],

        type: "flashcards",
      },
  
       {
        title: "🔬 Cell Nucleus, Division & Cycle",
        data: [
          {
            id: "node_1",
            label: "🧬 The Nucleus",
            note: {
              title: "🌟 Overview & Components",
              content:
                "The **nucleus** is the largest membranous organelle in eukaryotic cells, housing **chromosomes** essential for DNA replication, RNA transcription, and processing. While most cells have a single nucleus, some like liver cells can be binucleated, and mature RBCs lack one entirely. It comprises four main components during interphase.",
            },
            children: [
              {
                id: "node_1_1",
                label: " enveloppe nucléaire",
                note: {
                  title: "🛡️ Nuclear Envelope",
                  content:
                    "This double membrane encloses the nucleus, consisting of outer and inner membranes separated by the **perinuclear cisterna**. It is perforated by **nuclear pores** which facilitate bidirectional communication and substance exchange between the nucleus and cytoplasm. The outer membrane is continuous with the rough endoplasmic reticulum and has ribosomes.",
                },
              },
              {
                id: "node_1_2",
                label: "🔗 Chromatin Structure",
                note: {
                  title: "📜 DNA Packaging",
                  content:
                    "Chromatin is formed from **DNA conjugated with histone proteins**, allowing extensive packaging of the genetic material. The basic unit is a **nucleosome**, where DNA wraps around an octamer of histones, connected by linker DNA. These nucleosomes coil into an **11nm fiber** (beads on a string) and then a **30nm fiber**, eventually forming highly compact **chromatids** in dividing cells.",
                },
              },
              {
                id: "node_1_3",
                label: "🔬 Chromatin Forms",
                note: {
                  title: "Active vs Inactive DNA",
                  content:
                    "Chromatin exists in two main forms in the interphase nucleus: **heterochromatin** and **euchromatin**. **Heterochromatin** is condensed and inactive, appearing as dense clumps, while **euchromatin** is extended and active, allowing genetic information in the DNA to be transcribed. The proportion varies based on cell activity.",
                },
              },
              {
                id: "node_1_4",
                label: "⚛️ Nucleolus & Nucleoplasm",
                note: {
                  title: "Factory & Medium",
                  content:
                    "The **nucleolus** is a spherical, non-membranous body within the nucleus, serving as the site for **ribosomal RNA (rRNA) formation** and assembly into ribosomal subunits. The **nucleoplasm** (nuclear sap) is a colloidal protein solution that provides a medium for rapid diffusion of metabolites and movement of RNAs towards nuclear pores.",
                },
              },
            ],
          },
          {
            id: "node_2",
            label: "🔄 The Cell Cycle",
            note: {
              title: "⏰ Growth & Division Phases",
              content:
                "The **cell cycle** describes the regulated sequence of events by which cells grow, replicate genetic material, and divide. It involves an alternation between a longer **interphase** for growth and DNA replication, and a shorter **mitosis** phase for cell division. This regulated process is crucial for cell growth, function, and tissue maintenance.",
            },
            children: [
              {
                id: "node_2_1",
                label: "⏳ Interphase Stages",
                note: {
                  title: "Preparation for Division",
                  content:
                    "Interphase is subdivided into three critical phases: **G1, S, and G2**. The **G1 phase** involves cell growth and synthesis of RNA and proteins. The **S phase** is dedicated to DNA replication, where the DNA content doubles but chromosome number remains constant. The **G2 phase** prepares the cell for mitosis by storing essential proteins and energy.",
                },
              },
              {
                id: "node_2_2",
                label: "⏸️ G0 Phase & Karyotyping",
                note: {
                  title: "Quiescence & Chromosome View",
                  content:
                    "The **G0 phase** is a quiescent state where differentiated cells temporarily or permanently exit the cell cycle without dividing further, performing specialized functions. **Karyotyping** involves systematically arranging metaphase chromosomes into homologous pairs to visualize and analyze the chromosomal set of an individual, identifying autosomes and sex chromosomes (e.g., Barr body).",
                },
              },
              {
                id: "node_2_3",
                label: "🚦 Cell Cycle Regulation",
                note: {
                  title: "Control Mechanisms",
                  content:
                    "The cell cycle is tightly regulated by **growth factors** and internal **checkpoints** to ensure proper cell proliferation and coordinate with organismal needs. Key checkpoints, like the **restriction checkpoint** in G1 and **DNA damage checkpoints** in G1, S, and G2, monitor cell size, environment, and DNA integrity, halting progression if conditions are unsuitable or damage is detected.",
                },
              },
            ],
          },
          {
            id: "node_3",
            label: "➗ Cell Division",
            note: {
              title: "🔄 Mitosis vs Meiosis",
              content:
                "Cell division is a fundamental process for all living cells, ensuring growth, development, and repair. There are two primary types: **mitosis** and **meiosis**. Mitosis produces two genetically identical daughter cells from a somatic cell, while meiosis produces four haploid gametes from germ cells, contributing to genetic diversity.",
            },
            children: [
              {
                id: "node_3_1",
                label: "👯 Mitosis Stages",
                note: {
                  title: "Somatic Cell Duplication",
                  content:
                    "Mitosis is divided into **prophase, metaphase, anaphase, and telophase**, followed by **cytokinesis**. In prophase, chromatin condenses, and the nuclear envelope breaks down. Metaphase sees chromosomes align at the equatorial plate. Anaphase involves sister chromatid separation, moving to opposite poles. Telophase concludes with nuclear envelope re-formation and chromosome decondensation, leading to two daughter cells via cytokinesis.",
                },
              },
              {
                id: "node_3_2",
                label: "🌱 Meiosis I (Reductional)",
                note: {
                  title: "Halving Chromosome Number",
                  content:
                    "Meiosis I, the **reductional division**, reduces the chromosome number by half. It includes **Prophase I**, characterized by homologous chromosome pairing (forming tetrads) and **crossing-over**, which generates genetic variation. This is followed by **Metaphase I** (homologous pairs align), **Anaphase I** (homologous chromosomes separate), and **Telophase I** (cytokinesis, forming two haploid cells).",
                },
              },
              {
                id: "node_3_3",
                label: "🌾 Meiosis II (Equatorial)",
                note: {
                  title: "Sister Chromatid Separation",
                  content:
                    "Meiosis II, the **equatorial division**, is similar to mitosis but without a preceding S phase. The two haploid daughter cells from Meiosis I enter Meiosis II. In **Metaphase II**, chromosomes align individually at the equatorial plate. In **Anaphase II**, the centromeres divide, and sister chromatids separate, moving to opposite poles. This ultimately results in four haploid daughter cells (gametes).",
                },
              },
            ],
          },
          {
            id: "node_4",
            label: "📈 Cell Proliferation & Differentiation",
            note: {
              title: "🔄 Development & Renewal",
              content:
                "Cell **proliferation** is the process of cell growth and multiplication, while **differentiation** is when unspecialized cells acquire specialized structural and functional features. These processes are balanced to maintain tissue and organ homeostasis. As cells differentiate, their proliferation rate generally decreases.",
            },
            children: [
              {
                id: "node_4_1",
                label: "📊 Cell Population Types",
                note: {
                  title: "Growth & Renewal Capacity",
                  content:
                    "Adult somatic cells are categorized by their proliferative capacity into three groups. **Static cell populations** (e.g., neurons) are non-dividing permanent cells. **Stable cell populations** (e.g., liver cells) are quiescent but can be stimulated to divide. **Labile cell populations** (e.g., blood cells, skin epidermis) have continuous renewal via less differentiated stem cells.",
                },
              },
              {
                id: "node_4_2",
                label: "🌟 Stem Cell Properties",
                note: {
                  title: "Self-renewal & Potency",
                  content:
                    "Stem cells are primal cells characterized by two key properties: **self-renewal** and **potency**. Self-renewal is their ability to undergo numerous cycles of cell division while maintaining an undifferentiated state. Potency refers to their capacity to differentiate into various specialized cell types, making them crucial for tissue repair and regeneration.",
                },
              },
              {
                id: "node_4_3",
                label: " 분류 줄기 세포",
                note: {
                  title: "Differentiation Potential",
                  content:
                    "Stem cells are classified by their differentiation potential. **Totipotent cells** can form a complete organism (e.g., morula cells). **Pluripotent cells** can differentiate into all three primary germ layers but not a complete organism (e.g., embryonic stem cells). **Multipotent cells** produce cells of a closely related family (e.g., hematopoietic stem cells). **Unipotent cells** produce a single mature cell type while retaining self-renewal (e.g., skin stem cells).",
                },
              },
            ],
          },
          {
            id: "node_5",
            label: "💀 Cell Death",
            note: {
              title: "💔 Mechanisms of Demise",
              content:
                "Cell death is an essential process in maintaining tissue homeostasis and organismal health. Cells subjected to severe stress beyond repair ultimately undergo death. There are two main mechanisms: **necrosis** (accidental, pathological) and **apoptosis** (programmed, physiological), each with distinct triggers and morphological features.",
            },
            children: [
              {
                id: "node_5_1",
                label: "💥 Necrosis",
                note: {
                  title: "Accidental Cell Demise",
                  content:
                    "Necrosis is an **accidental, pathological** process triggered by severe unfavorable factors such as hypoxia, radiation, or pathogens. Its morphological features include **severe cell swelling and membrane rupture**, denaturation and coagulation of cytoplasmic proteins, and breakdown of organelles. Necrosis typically leads to extensive **inflammation** in surrounding tissues.",
                },
              },
              {
                id: "node_5_2",
                label: "⏳ Apoptosis Conditions",
                note: {
                  title: "Physiological Programmed Death",
                  content:
                    "Apoptosis is a **programmed cell death** process controlled by several genes, crucial for normal embryonic development, eliminating excess or unnecessary cells. In adults, it occurs in hormone-dependent tissue involution (e.g., mammary gland regression), the elimination of cells with irreparable DNA damage, and maintaining constant cell numbers in proliferating populations like intestinal crypt epithelium.",
                },
              },
              {
                id: "node_5_3",
                label: "📉 Apoptosis Features",
                note: {
                  title: "Distinctive Cell Changes",
                  content:
                    "Morphological features of apoptosis include **hypercondensation of nuclear chromatin** and its collapse, cell shrinkage with **membrane blebbing**, and fragmentation into membrane-enclosed **apoptotic bodies**. Unlike necrosis, cell organelles remain intact, and membrane integrity is maintained without extensive inflammation. These apoptotic bodies are then removed by phagocytic cells.",
                },
              },
            ],
          },
        ],
        type: "mindmap",
      },
      // {
      //   title: "🧬 Nucleus, Cell Division & Cell Cycle",
      //   data: [
      //     {
      //       chapter: "Chapter 4: The Nucleus",
      //       heading: "Meet the Cell's Control Center",
      //       intro:
      //         "The nucleus is the largest and most vital organelle, housing the cell's genetic material and directing its essential activities.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "The nucleus is a membranous organelle that contains chromosomes, serving as the machinery for DNA replication, RNA transcription, and processing. Most cells have one nucleus, but some like liver cells are binucleated, and mature RBCs lack nuclei entirely.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "dna",
      //               title: "DNA Replication",
      //               text: "The nucleus is the site where DNA is copied, ensuring genetic continuity.",
      //             },
      //             {
      //               icon: "code",
      //               title: "RNA Transcription",
      //               text: "Genetic information from DNA is converted into RNA within the nucleus.",
      //             },
      //             {
      //               icon: "settings",
      //               title: "RNA Processing",
      //               text: "RNA molecules undergo modifications before exiting the nucleus to perform their functions.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "The nucleus is the cell's command center, orchestrating DNA and RNA activities essential for cell life.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Nucleus",
      //       heading: "Interphase Nucleus Components",
      //       intro:
      //         "During interphase, the nucleus is comprised of four main parts, each playing a crucial role in maintaining nuclear function.",
      //       blocks: [
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "layers",
      //               title: "Nuclear Envelope",
      //               text: "A double membrane enclosing the nucleus, perforated by nuclear pores for communication.",
      //             },
      //             {
      //               icon: "dna",
      //               title: "Chromatin",
      //               text: "DNA conjugated with histone proteins, responsible for genetic information storage.",
      //             },
      //             {
      //               icon: "circle",
      //               title: "Nucleolus",
      //               text: "A spherical body within the nucleus, vital for ribosomal RNA synthesis.",
      //             },
      //             {
      //               icon: "water",
      //               title: "Nucleoplasm",
      //               text: "A colloidal protein solution facilitating metabolite and RNA diffusion.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "text",
      //           text: "The nuclear envelope consists of outer and inner membranes separated by a perinuclear cisterna, forming nuclear pores for cytoplasm-nucleus exchange. The outer membrane is continuous with the rough endoplasmic reticulum.",
      //         },
      //         {
      //           type: "exam",
      //           text: "Nuclear pores are critical for bidirectional transport between the nucleus and cytoplasm, essential for cell function.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Nucleus",
      //       heading: "Chromatin: DNA Packaging",
      //       intro:
      //         "Chromatin, a complex of DNA and proteins, undergoes extensive packaging to fit within the nucleus, affecting gene activity.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Chromatin is formed by DNA associated with histone proteins. DNA is extensively packaged into various forms to achieve high compaction within the nucleus.",
      //         },
      //         {
      //           type: "timeline",
      //           events: [
      //             {
      //               date: "Basic Unit",
      //               title: "Nucleosome Formation",
      //               description:
      //                 "DNA double helix wraps twice around eight histone proteins, forming a nucleosome.",
      //             },
      //             {
      //               date: "First Level",
      //               title: "11nm Fiber (Beads)",
      //               description:
      //                 "Repeating nucleosomes with linker DNA form a 'beads on a string' structure.",
      //             },
      //             {
      //               date: "Second Level",
      //               title: "30nm Fiber",
      //               description:
      //                 "The chain of nucleosomes packs together to form a thicker 30nm fiber.",
      //             },
      //             {
      //               date: "Highest Level",
      //               title: "700nm Chromatid",
      //               description:
      //                 "Further packaging leads to the highly compact 700nm chromatid, visible during metaphase.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "remember",
      //           text: "The nucleolus is the site of ribosomal RNA (rRNA) transcription and assembly into ribosomal subunits, crucial for protein synthesis.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Nucleus",
      //       heading: "Active vs. Inactive Chromatin",
      //       intro:
      //         "Chromatin exists in two functional forms: euchromatin (active) and heterochromatin (inactive), dictating gene expression.",
      //       blocks: [
      //         {
      //           type: "comparison",
      //           comparisons: [
      //             {
      //               feature: "Function",
      //               itemA: "Active part, transcribed DNA",
      //               itemB: "Inactive part, condensed DNA",
      //             },
      //             {
      //               feature: "LM Picture",
      //               itemA: "Lightly stained basophilic areas",
      //               itemB: "Dense basophilic clumps",
      //             },
      //             {
      //               feature: "EM Picture",
      //               itemA: "Dispersed filaments/granules",
      //               itemB: "Condensed filaments/granules",
      //             },
      //             {
      //               feature: "Location",
      //               itemA: "Scattered in nucleoplasm",
      //               itemB: "Nucleolar, peripheral, islands",
      //             },
      //           ],
      //         },
      //         {
      //           type: "text",
      //           text: "The proportion of euchromatin to heterochromatin varies by cell activity. Active cells, such as dividing cells or those with high synthetic activity, display more euchromatin and prominent nucleoli.",
      //         },
      //         {
      //           type: "key-point",
      //           text: "Euchromatin is stretched and transcriptionally active, while heterochromatin is condensed and largely inactive but can transform.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Cell Cycle",
      //       heading: "Cell Cycle: Life of a Cell",
      //       intro:
      //         "The cell cycle is a fundamental process, representing the ordered sequence of events that divide a cell into two daughter cells.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Most cells undergo repeated cell cycles, each divided into two major events: Interphase and Mitosis. This regulated sequence controls cell growth, function, and division.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "clock",
      //               title: "Interphase",
      //               text: "A longer period of cell growth, normal function, and genetic material replication (G1, S, G2 phases).",
      //             },
      //             {
      //               icon: "activity",
      //               title: "Mitosis",
      //               text: "A shorter period where the parent cell divides into two identical daughter cells (M phase).",
      //             },
      //           ],
      //         },
      //         {
      //           type: "stat-blocks",
      //           stats: [
      //             {
      //               icon: "dna",
      //               value: "46",
      //               caption:
      //                 "Number of chromosomes in human somatic cells during interphase.",
      //             },
      //             {
      //               icon: "percent",
      //               value: "2n",
      //               caption: "Diploid number of chromosomes in somatic cells.",
      //             },
      //             {
      //               icon: "percent",
      //               value: "1n",
      //               caption:
      //                 "Haploid number of chromosomes in gametes (23 chromosomes).",
      //             },
      //           ],
      //         },
      //         {
      //           type: "exam",
      //           text: "In interphase, cells grow and replicate DNA. Mitosis is for division, creating genetically identical daughter cells.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Cell Cycle",
      //       heading: "Interphase: Preparation for Division",
      //       intro:
      //         "Interphase is the crucial preparatory stage before cell division, divided into three distinct phases where the cell grows and duplicates its DNA.",
      //       blocks: [
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "plus",
      //               title: "G1 Phase",
      //               text: "Cell growth, RNA and protein synthesis, cell attains full size. Centriole duplication begins.",
      //             },
      //             {
      //               icon: "dna",
      //               title: "S Phase",
      //               text: "DNA replication occurs, duplicating DNA content. Chromosome number remains 46.",
      //             },
      //             {
      //               icon: "settings-alt",
      //               title: "G2 Phase",
      //               text: "Brief period for storing essential proteins and energy for mitosis. Centrosome duplication completes.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "text",
      //           text: "Many differentiated cells enter the G0 phase, where they perform specialized functions and do not divide. These quiescent cells can re-enter the cell cycle in response to stimuli.",
      //         },
      //         {
      //           type: "comparison",
      //           comparisons: [
      //             {
      //               feature: "S-Chromosomes",
      //               itemA: "One DNA molecule",
      //               itemB: "Interphase",
      //             },
      //             {
      //               feature: "D-Chromosomes",
      //               itemA: "Two sister chromatids (DNA)",
      //               itemB: "Mitotic metaphase",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: The Cell Cycle",
      //       heading: "Karyotyping & Cell Cycle Control",
      //       intro:
      //         "Karyotyping arranges chromosomes for analysis, while strict checkpoints regulate the cell cycle, ensuring proper division and preventing errors.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Karyotyping is the systematic arrangement of metaphase chromosomes into homologous pairs, used for genetic analysis. Humans have 22 pairs of autosomes and one pair of sex chromosomes (XX for females, XY for males).",
      //         },
      //         {
      //           type: "remember",
      //           text: "In females, one inactive X chromosome forms a dense chromatin mass called the 'Barr body,' visible in interphase nuclei.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "shield-check",
      //               title: "Restriction Checkpoint (G1)",
      //               text: "Most important. Sensitive to cell size and extracellular matrix; stops cells without growth stimuli.",
      //             },
      //             {
      //               icon: "alert",
      //               title: "DNA Damage Checkpoints",
      //               text: "Occur in G1, S, G2; halt progression until DNA is repaired or apoptosis occurs.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "Cell cycle checkpoints are essential quality control mechanisms that prevent division until conditions are favorable and DNA is intact.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Division",
      //       heading: "Mitosis: Somatic Cell Division",
      //       intro:
      //         "Mitosis is the process by which somatic cells divide into two genetically identical daughter cells, crucial for growth, development, and tissue repair.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Mitosis ensures that each daughter cell receives a complete set of 46 chromosomes, identical to the parent cell. It is vital for maintaining organismal integrity and replacing old or damaged cells.",
      //         },
      //         {
      //           type: "timeline",
      //           events: [
      //             {
      //               date: "Prophase",
      //               title: "Chromatin Condensation",
      //               description:
      //                 "Nucleolus disappears, chromatin condenses into d-chromosomes, centrioles migrate, and nuclear envelope breaks down.",
      //             },
      //             {
      //               date: "Metaphase",
      //               title: "Equatorial Alignment",
      //               description:
      //                 "Chromosomes align at the equatorial plate, attached to spindle microtubules via kinetochores.",
      //             },
      //             {
      //               date: "Anaphase",
      //               title: "Sister Chromatid Separation",
      //               description:
      //                 "Centromeres divide, sister chromatids separate and move to opposite poles; cleavage furrow begins to form.",
      //             },
      //             {
      //               date: "Telophase",
      //               title: "Nuclear Reformation",
      //               description:
      //                 "Mitotic spindle disappears, nucleolus reappears, chromosomes uncoil, nuclear envelope reforms, followed by cytokinesis.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "Mitosis yields two diploid daughter cells, ensuring genetic stability across somatic cell generations.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Division",
      //       heading: "Meiosis: Gamete Formation",
      //       intro:
      //         "Meiosis is a specialized cell division in germ cells, producing four haploid daughter cells (gametes) with genetic variation.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Meiosis involves two successive divisions without an intervening S phase. It reduces the chromosome number by half, restoring the diploid number upon fertilization.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "book",
      //               title: "First Meiotic Division (Meiosis I)",
      //               text: "Reductional division, separates homologous chromosomes, resulting in two haploid cells.",
      //             },
      //             {
      //               icon: "book",
      //               title: "Second Meiotic Division (Meiosis II)",
      //               text: "Equatorial division, separates sister chromatids, yielding four haploid gametes.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "timeline",
      //           events: [
      //             {
      //               date: "Prophase I",
      //               title: "Pairing & Crossing-Over",
      //               description:
      //                 "Homologous chromosomes pair (tetrads) and exchange genetic material, increasing variation.",
      //             },
      //             {
      //               date: "Anaphase I",
      //               title: "Homolog Separation",
      //               description:
      //                 "Centromeres don't divide; homologous chromosomes move to opposite poles.",
      //             },
      //             {
      //               date: "Anaphase II",
      //               title: "Chromatid Separation",
      //               description:
      //                 "Centromeres split, and sister chromatids move to opposite poles, similar to mitosis.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "Crossing-over during Prophase I is unique to meiosis and generates genetic diversity in gametes.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Proliferation & Differentiation",
      //       heading: "Cell Proliferation & Specialization",
      //       intro:
      //         "Cell proliferation and differentiation are coordinated processes that drive development and maintain tissue homeostasis in multicellular organisms.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Early development features rapid embryonic cell proliferation followed by differentiation into specialized cell types. As cells differentiate, their proliferation rate generally decreases, with many adult cells entering a quiescent G0 stage.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "tree",
      //               title: "Cell Proliferation",
      //               text: "The process of cell multiplication, balancing with cell death to maintain organ size.",
      //             },
      //             {
      //               icon: "star",
      //               title: "Cell Differentiation",
      //               text: "Unspecialized cells acquire specific structural and functional features, becoming specialized.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "remember",
      //           text: "Chemotherapeutic drugs target rapidly proliferating cells, including cancer cells, but also destroy healthy labile cells, leading to side effects like bone marrow suppression.",
      //         },
      //         {
      //           type: "exam",
      //           text: "Many adult cells in G0 can re-enter the cell cycle in response to appropriate stimuli, such as injury.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Proliferation & Differentiation",
      //       heading: "Types of Cell Populations",
      //       intro:
      //         "Adult somatic cells are categorized into three populations based on their proliferative capacity, reflecting diverse tissue needs and renewal strategies.",
      //       blocks: [
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "lock",
      //               title: "Static Cell Population",
      //               text: "Non-dividing, permanent cells that leave the cell cycle; e.g., cardiac muscle fibers, neurons.",
      //             },
      //             {
      //               icon: "refresh",
      //               title: "Stable Cell Population",
      //               text: "Quiescent (G0) cells that usually don't divide but can be stimulated for renewal; e.g., liver, kidney cells.",
      //             },
      //             {
      //               icon: "activity",
      //               title: "Labile Cell Population",
      //               text: "Continuously renewing cells with short lifespans, replaced by stem cells; e.g., blood cells, skin epidermis.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "The balance between cell proliferation and death is critical for maintaining constant cell numbers in adult tissues.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Proliferation & Differentiation",
      //       heading: "Stem Cells: Master Cells",
      //       intro:
      //         "Stem cells are unique primal cells with the remarkable ability to self-renew and differentiate into various specialized cell types.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Stem cells are the source for all specialized cells that form organs and tissues. They possess two key properties that distinguish them from other cells.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "refresh",
      //               title: "Self-Renewal",
      //               text: "Ability to undergo numerous cell divisions while maintaining an undifferentiated state.",
      //             },
      //             {
      //               icon: "award",
      //               title: "Potency",
      //               text: "Capacity to differentiate into different types of specialized cells.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "Stem cells' unique properties make them crucial for development, tissue repair, and regenerative medicine.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Proliferation & Differentiation",
      //       heading: "Potency of Stem Cells",
      //       intro:
      //         "Stem cells are categorized by their differentiation potential, ranging from totipotent (forming a whole organism) to unipotent (forming a single cell type).",
      //       blocks: [
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "globe",
      //               title: "Totipotent",
      //               text: "Can generate all cell types and construct a complete, viable organism (e.g., morula cells).",
      //             },
      //             {
      //               icon: "layers",
      //               title: "Pluripotent",
      //               text: "Differentiate into derivatives of all three primary germ layers (e.g., blastocyst inner cell mass).",
      //             },
      //             {
      //               icon: "users",
      //               title: "Multipotent",
      //               text: "Produce cells of a closely related family (e.g., hematopoietic stem cells, mesenchymal stem cells).",
      //             },
      //             {
      //               icon: "user",
      //               title: "Unipotent",
      //               text: "Produce mature cells of a single type, but retain self-renewal ability (e.g., skin epidermis stem cells).",
      //             },
      //           ],
      //         },
      //         {
      //           type: "text",
      //           text: "Potential sources for clinical application include embryonic (pluripotent, ethical restrictions), adult (mostly multipotent), amniotic fluid (multipotent), and umbilical cord blood (HSCs and MSCs) stem cells.",
      //         },
      //         {
      //           type: "exam",
      //           text: "Pluripotent stem cells are a key focus in research due to their broad differentiation capacity into adult body cell types.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Death",
      //       heading: "Cellular Adaptation & Death",
      //       intro:
      //         "Cells respond to stress through adaptation, but persistent severe stimuli can lead to irreversible cell death via necrosis or apoptosis.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Normal cells adapt to physiologic demands, but if stress persists beyond a 'point of no return', cell death occurs. This ensures tissue health by removing damaged or unwanted cells.",
      //         },
      //         {
      //           type: "key-point",
      //           text: "Cell death is a crucial process, either accidental (necrosis) due to injury or programmed (apoptosis) for tissue homeostasis.",
      //         },
      //         {
      //           type: "comparison",
      //           comparisons: [
      //             {
      //               feature: "Cause",
      //               itemA: "Accidental cell injury (hypoxia, toxins)",
      //               itemB: "Programmed genetic cascade",
      //             },
      //             {
      //               feature: "Cell Size",
      //               itemA: "Swelling & rupture",
      //               itemB: "Shrinkage & blebbing",
      //             },
      //             {
      //               feature: "Membrane",
      //               itemA: "Damage, loss of integrity",
      //               itemB: "Intact but altered characteristics",
      //             },
      //             {
      //               feature: "Inflammation",
      //               itemA: "Extensive in surrounding tissue",
      //               itemB: "No inflammation",
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Death",
      //       heading: "Necrosis: Accidental Cell Demise",
      //       intro:
      //         "Necrosis is a pathological process of accidental cell death triggered by unfavorable factors, leading to cellular breakdown and inflammation.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Necrosis occurs due to factors like hypoxia, radiation, or pathogens. It is characterized by severe cellular damage, making it distinct from programmed cell death.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "alert",
      //               title: "Membrane Damage",
      //               text: "Severe cell swelling and rupture of the cell membrane occur.",
      //             },
      //             {
      //               icon: "dna",
      //               title: "Protein Coagulation",
      //               text: "Cytoplasmic proteins denature and coagulate, and organelles break down.",
      //             },
      //             {
      //               icon: "fire",
      //               title: "Inflammation",
      //               text: "Extensive damage to surrounding tissue, leading to an inflammatory response.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "exam",
      //           text: "Key features distinguishing necrosis are cell swelling, membrane rupture, and extensive inflammation.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Death",
      //       heading: "Apoptosis: Programmed Cell Suicide",
      //       intro:
      //         "Apoptosis is a genetically controlled, physiological process of programmed cell death, vital for development and maintaining tissue balance.",
      //       blocks: [
      //         {
      //           type: "text",
      //           text: "Apoptosis is regulated by genes, leading to mitochondrial dysfunction and a cascade of reactions that culminate in cell death. It occurs in specific conditions to remove unnecessary or damaged cells without causing inflammation.",
      //         },
      //         {
      //           type: "grid",
      //           cards: [
      //             {
      //               icon: "leaf",
      //               title: "Embryonic Development",
      //               text: "Removes excess cells during morphogenesis and determines organ size.",
      //             },
      //             {
      //               icon: "timer",
      //               title: "Adult Tissue Homeostasis",
      //               text: "Maintains constant cell numbers in proliferating populations, e.g., intestinal crypt epithelium.",
      //             },
      //             {
      //               icon: "settings",
      //               title: "Cell Cycle Control",
      //               text: "Eliminates cells with irreparable DNA damage during cell cycle checkpoints.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "key-point",
      //           text: "Apoptosis is a clean, regulated process that disposes of cells without triggering an immune response, unlike necrosis.",
      //         },
      //       ],
      //     },
      //     {
      //       chapter: "Chapter 4: Cell Death",
      //       heading: "Apoptosis: Morphological Features",
      //       intro:
      //         "Apoptosis is characterized by specific morphological changes, including DNA breakdown, cell shrinkage, and the formation of apoptotic bodies.",
      //       blocks: [
      //         {
      //           type: "timeline",
      //           events: [
      //             {
      //               date: "Step 1",
      //               title: "Chromatin Condensation",
      //               description:
      //                 "DNA breaks down, and nuclear chromatin hypercondenses, collapsing against the nuclear periphery.",
      //             },
      //             {
      //               date: "Step 2",
      //               title: "Cell Shrinkage",
      //               description:
      //                 "Cells shrink, and the membrane blebs, losing microvilli and intercellular junctions.",
      //             },
      //             {
      //               date: "Step 3",
      //               title: "Organelle Clumping",
      //               description:
      //                 "Cell organelles remain largely normal but clump within the cytoplasm.",
      //             },
      //             {
      //               date: "Step 4",
      //               title: "Apoptotic Body Formation",
      //               description:
      //                 "The cell fragments into membrane-enclosed apoptotic bodies containing nuclear and organelle fragments.",
      //             },
      //             {
      //               date: "Step 5",
      //               title: "Phagocytosis",
      //               description:
      //                 "Apoptotic bodies are rapidly removed by surrounding phagocytic cells, preventing inflammation.",
      //             },
      //           ],
      //         },
      //         {
      //           type: "remember",
      //           text: "Unlike necrosis, apoptosis maintains cell membrane integrity throughout the process, ensuring no cellular contents spill to cause inflammation.",
      //         },
      //       ],
      //     },
      //   ],
      //   type: "infograph",
      // },
    ] as Content[],
  },
];
export default {
   examples: examples,
};