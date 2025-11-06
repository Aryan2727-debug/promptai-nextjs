// Pre-made prompts library organized by categories
export const libraryPrompts = [
  // Coding & Development
  {
    id: 1,
    category: "Coding",
    title: "Code Review Assistant",
    prompt: "Review the following code for best practices, potential bugs, and optimization opportunities. Provide specific suggestions for improvement with explanations.",
    tags: ["code-review", "debugging", "optimization"]
  },
  {
    id: 2,
    category: "Coding",
    title: "Algorithm Explainer",
    prompt: "Explain the following algorithm step by step, including its time and space complexity, use cases, and provide a practical example with code implementation.",
    tags: ["algorithms", "learning", "explanation"]
  },
  {
    id: 3,
    category: "Coding",
    title: "API Documentation Generator",
    prompt: "Generate comprehensive API documentation for the following code, including endpoint descriptions, parameters, response formats, error codes, and usage examples.",
    tags: ["documentation", "api", "development"]
  },
  {
    id: 4,
    category: "Coding",
    title: "Unit Test Generator",
    prompt: "Create comprehensive unit tests for the following code, covering edge cases, error scenarios, and expected behavior. Include test descriptions and assertions.",
    tags: ["testing", "quality-assurance", "development"]
  },
  {
    id: 5,
    category: "Coding",
    title: "Database Schema Design",
    prompt: "Design a database schema for the following requirements. Include tables, relationships, indexes, and explain your design decisions for scalability and performance.",
    tags: ["database", "schema", "design"]
  },

  // Writing & Content
  {
    id: 6,
    category: "Writing",
    title: "Blog Post Outline",
    prompt: "Create a detailed blog post outline on the topic: [TOPIC]. Include an engaging introduction, 5-7 main sections with subpoints, and a compelling conclusion with call-to-action.",
    tags: ["content", "blogging", "structure"]
  },
  {
    id: 7,
    category: "Writing",
    title: "SEO Content Optimizer",
    prompt: "Optimize the following content for SEO. Suggest improvements for keyword placement, meta descriptions, headings structure, and readability while maintaining natural flow.",
    tags: ["seo", "content", "optimization"]
  },
  {
    id: 8,
    category: "Writing",
    title: "Email Marketing Copy",
    prompt: "Write a compelling email marketing campaign for [PRODUCT/SERVICE]. Include an attention-grabbing subject line, engaging opening, clear value proposition, and strong call-to-action.",
    tags: ["marketing", "email", "copywriting"]
  },
  {
    id: 9,
    category: "Writing",
    title: "Product Description",
    prompt: "Write an engaging product description for [PRODUCT] that highlights key features, benefits, and unique selling points. Make it persuasive and customer-focused.",
    tags: ["e-commerce", "marketing", "description"]
  },
  {
    id: 10,
    category: "Writing",
    title: "Social Media Caption",
    prompt: "Create engaging social media captions for [PLATFORM] about [TOPIC]. Include relevant hashtags, emojis, and a call-to-action that encourages engagement.",
    tags: ["social-media", "marketing", "engagement"]
  },

  // Business & Strategy
  {
    id: 11,
    category: "Business",
    title: "SWOT Analysis",
    prompt: "Conduct a comprehensive SWOT analysis for [COMPANY/PRODUCT]. Identify Strengths, Weaknesses, Opportunities, and Threats with specific examples and actionable insights.",
    tags: ["strategy", "analysis", "planning"]
  },
  {
    id: 12,
    category: "Business",
    title: "Business Plan Generator",
    prompt: "Create a business plan outline for [BUSINESS IDEA]. Include executive summary, market analysis, competitive landscape, revenue model, marketing strategy, and financial projections.",
    tags: ["startup", "planning", "strategy"]
  },
  {
    id: 13,
    category: "Business",
    title: "Customer Persona Builder",
    prompt: "Develop detailed customer personas for [PRODUCT/SERVICE]. Include demographics, pain points, goals, behaviors, preferred channels, and how the product solves their problems.",
    tags: ["marketing", "customer", "research"]
  },
  {
    id: 14,
    category: "Business",
    title: "Meeting Agenda Creator",
    prompt: "Create a structured meeting agenda for [MEETING PURPOSE]. Include objectives, time allocations, discussion topics, decisions needed, and action items template.",
    tags: ["productivity", "meetings", "planning"]
  },
  {
    id: 15,
    category: "Business",
    title: "Pitch Deck Outline",
    prompt: "Create a compelling pitch deck outline for [BUSINESS/IDEA]. Include problem statement, solution, market opportunity, business model, traction, team, and financial ask.",
    tags: ["pitch", "funding", "presentation"]
  },

  // Creative & Design
  {
    id: 16,
    category: "Creative",
    title: "Brand Story Creator",
    prompt: "Craft a compelling brand story for [BRAND/COMPANY] that connects emotionally with the audience. Include origin story, mission, values, and unique brand personality.",
    tags: ["branding", "storytelling", "marketing"]
  },
  {
    id: 17,
    category: "Creative",
    title: "Video Script Writer",
    prompt: "Write a video script for [VIDEO PURPOSE/TOPIC]. Include hook, narrative arc, key messages, visual descriptions, and call-to-action. Duration: [X] minutes.",
    tags: ["video", "script", "content"]
  },
  {
    id: 18,
    category: "Creative",
    title: "Slogan Generator",
    prompt: "Generate 10 memorable and catchy slogans for [BRAND/PRODUCT] that capture its essence, benefits, and appeal to [TARGET AUDIENCE]. Make them short and impactful.",
    tags: ["branding", "marketing", "copywriting"]
  },
  {
    id: 19,
    category: "Creative",
    title: "Character Development",
    prompt: "Develop a detailed character profile for a story. Include background, personality traits, motivations, conflicts, relationships, and character arc throughout the narrative.",
    tags: ["writing", "storytelling", "fiction"]
  },
  {
    id: 20,
    category: "Creative",
    title: "Design Brief Generator",
    prompt: "Create a comprehensive design brief for [PROJECT]. Include objectives, target audience, style preferences, deliverables, constraints, timeline, and success metrics.",
    tags: ["design", "planning", "creative"]
  },

  // Learning & Education
  {
    id: 21,
    category: "Education",
    title: "Learning Path Creator",
    prompt: "Design a structured learning path for mastering [SKILL/TOPIC]. Include beginner to advanced progression, key concepts, resources, practice exercises, and milestones.",
    tags: ["learning", "education", "development"]
  },
  {
    id: 22,
    category: "Education",
    title: "Concept Simplifier",
    prompt: "Explain [COMPLEX CONCEPT] in simple terms using analogies and real-world examples. Make it understandable for someone with no background in the subject.",
    tags: ["education", "explanation", "learning"]
  },
  {
    id: 23,
    category: "Education",
    title: "Quiz Generator",
    prompt: "Create a comprehensive quiz on [TOPIC] with 10 questions. Include multiple choice, true/false, and short answer questions with varying difficulty levels and answer explanations.",
    tags: ["education", "assessment", "learning"]
  },
  {
    id: 24,
    category: "Education",
    title: "Study Guide Creator",
    prompt: "Create a detailed study guide for [SUBJECT/TOPIC]. Include key concepts, definitions, important facts, practice questions, and memory aids or mnemonics.",
    tags: ["education", "studying", "learning"]
  },
  {
    id: 25,
    category: "Education",
    title: "Tutorial Planner",
    prompt: "Outline a step-by-step tutorial for [SKILL/TASK]. Include prerequisites, tools needed, detailed instructions, common mistakes to avoid, and troubleshooting tips.",
    tags: ["education", "tutorial", "how-to"]
  },

  // Data & Analysis
  {
    id: 26,
    category: "Data",
    title: "Data Analysis Framework",
    prompt: "Analyze the following dataset and provide insights. Include data cleaning steps, statistical analysis, patterns identified, visualizations needed, and actionable recommendations.",
    tags: ["data", "analysis", "insights"]
  },
  {
    id: 27,
    category: "Data",
    title: "Research Methodology",
    prompt: "Design a research methodology for investigating [RESEARCH QUESTION]. Include approach, data collection methods, sample size, analysis techniques, and expected outcomes.",
    tags: ["research", "methodology", "analysis"]
  },
  {
    id: 28,
    category: "Data",
    title: "Report Summary Generator",
    prompt: "Create an executive summary of the following report. Highlight key findings, important metrics, trends, and strategic recommendations in a concise, action-oriented format.",
    tags: ["reporting", "summary", "business"]
  },
  {
    id: 29,
    category: "Data",
    title: "KPI Dashboard Design",
    prompt: "Design a KPI dashboard for [DEPARTMENT/FUNCTION]. Identify critical metrics, data sources, visualization types, update frequency, and how it supports decision-making.",
    tags: ["kpi", "metrics", "dashboard"]
  },
  {
    id: 30,
    category: "Data",
    title: "Survey Question Designer",
    prompt: "Create a survey with 10-15 questions to gather insights about [TOPIC]. Include various question types, avoid bias, and ensure questions are clear and actionable.",
    tags: ["survey", "research", "feedback"]
  },

  // Productivity & Planning
  {
    id: 31,
    category: "Productivity",
    title: "Project Timeline Builder",
    prompt: "Create a detailed project timeline for [PROJECT]. Break down into phases, tasks, dependencies, resource allocation, milestones, and identify critical path.",
    tags: ["project-management", "planning", "timeline"]
  },
  {
    id: 32,
    category: "Productivity",
    title: "Daily Schedule Optimizer",
    prompt: "Optimize my daily schedule considering: [TASKS/COMMITMENTS]. Factor in peak productivity hours, break times, priorities, and time-blocking for deep work.",
    tags: ["productivity", "time-management", "planning"]
  },
  {
    id: 33,
    category: "Productivity",
    title: "Goal Setting Framework",
    prompt: "Help me set SMART goals for [OBJECTIVE]. Make them Specific, Measurable, Achievable, Relevant, and Time-bound. Include action steps and success metrics.",
    tags: ["goals", "planning", "productivity"]
  },
  {
    id: 34,
    category: "Productivity",
    title: "Workflow Automation Ideas",
    prompt: "Identify automation opportunities in the following workflow: [DESCRIBE WORKFLOW]. Suggest tools, processes to automate, and expected time savings.",
    tags: ["automation", "efficiency", "productivity"]
  },
  {
    id: 35,
    category: "Productivity",
    title: "Decision Matrix",
    prompt: "Create a decision matrix to evaluate [OPTIONS] for [DECISION]. Include relevant criteria, weighting, scoring system, and provide a recommendation with rationale.",
    tags: ["decision-making", "analysis", "planning"]
  },

  // Communication
  {
    id: 36,
    category: "Communication",
    title: "Presentation Outline",
    prompt: "Create a presentation outline for [TOPIC] with [X] slides. Include opening hook, key points per slide, supporting data, visuals needed, and memorable closing.",
    tags: ["presentation", "communication", "speaking"]
  },
  {
    id: 37,
    category: "Communication",
    title: "Professional Email Template",
    prompt: "Write a professional email for [PURPOSE/SITUATION]. Maintain appropriate tone, clear structure, and include necessary details while being concise and action-oriented.",
    tags: ["email", "communication", "business"]
  },
  {
    id: 38,
    category: "Communication",
    title: "Conflict Resolution Guide",
    prompt: "Provide a framework for resolving the following conflict: [DESCRIBE SITUATION]. Include understanding perspectives, finding common ground, and proposing solutions.",
    tags: ["communication", "conflict", "resolution"]
  },
  {
    id: 39,
    category: "Communication",
    title: "Feedback Framework",
    prompt: "Structure constructive feedback for [SITUATION] using the SBI model (Situation-Behavior-Impact). Be specific, actionable, and focus on growth and improvement.",
    tags: ["feedback", "communication", "management"]
  },
  {
    id: 40,
    category: "Communication",
    title: "Negotiation Strategy",
    prompt: "Develop a negotiation strategy for [SCENARIO]. Include preparation steps, desired outcomes, alternatives (BATNA), tactics, and how to create win-win solutions.",
    tags: ["negotiation", "strategy", "communication"]
  }
];

// Get unique categories for filtering
export const getCategories = () => {
  const categories = libraryPrompts.map(prompt => prompt.category);
  return ['All', ...new Set(categories)];
};

// Filter prompts by category
export const filterByCategory = (category) => {
  if (category === 'All') return libraryPrompts;
  return libraryPrompts.filter(prompt => prompt.category === category);
};

// Search prompts by query
export const searchPrompts = (query) => {
  const lowerQuery = query.toLowerCase();
  return libraryPrompts.filter(prompt => 
    prompt.title.toLowerCase().includes(lowerQuery) ||
    prompt.prompt.toLowerCase().includes(lowerQuery) ||
    prompt.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    prompt.category.toLowerCase().includes(lowerQuery)
  );
};
