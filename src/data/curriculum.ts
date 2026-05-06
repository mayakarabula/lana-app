/** Area + difficulty — show on each topic card */
export type TopicTag = 'frontend' | 'backend' | 'easy' | 'mid' | 'hard'

export const TAG_ORDER: TopicTag[] = ['frontend', 'backend', 'easy', 'mid', 'hard']

export const TAG_LABELS: Record<TopicTag, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  easy: 'Easy',
  mid: 'Mid',
  hard: 'Hard',
}

export function sortTopicTags(tags: TopicTag[]): TopicTag[] {
  return [...tags].sort((a, b) => TAG_ORDER.indexOf(a) - TAG_ORDER.indexOf(b))
}

export type ResourceLink = { label: string; href: string }

/** Granular tutorials under a topic (e.g. MDN module articles) */
export type SubTopic = {
  id: string
  title: string
  links: ResourceLink[]
}

export type Topic = {
  id: string
  title: string
  note?: string
  /** Area (frontend / backend / both) + difficulty (easy / mid / hard) */
  tags: TopicTag[]
  links: ResourceLink[]
  /** Optional breakdown — same checklist item, richer outline */
  subTopics?: SubTopic[]
}

export type Section = {
  id: string
  emoji: string
  title: string
  topics: Topic[]
}

/** Outline from lana.pdf — Web dev learning path */
export const curriculum: Section[] = [
  {
    id: 'general',
    emoji: '🛜',
    title: 'General knowledge',
    topics: [
      {
        id: 'web-standards',
        title: 'Getting started on the web',
        note: 'MDN Getting started modules',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Getting started (overview)',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started',
          },
        ],
        subTopics: [
          {
            id: 'web-standards:first-website',
            title: 'Your first website',
            links: [
              {
                label: 'Module overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website',
              },
              {
                label: 'What will your website look like?',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like',
              },
              {
                label: 'Creating the content',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content',
              },
              {
                label: 'Styling the content',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content',
              },
              {
                label: 'Adding interactivity',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Adding_interactivity',
              },
              {
                label: 'Publishing your website',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website/Publishing_your_website',
              },
            ],
          },
          {
            id: 'web-standards:web-basics',
            title: 'Web standards & how the web works',
            links: [
              {
                label: 'Module overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards',
              },
              {
                label: 'How the web works',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_the_web_works',
              },
              {
                label: 'The web standards model',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/The_web_standards_model',
              },
              {
                label: 'How browsers load websites',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Web_standards/How_browsers_load_websites',
              },
            ],
          },
          {
            id: 'web-standards:soft-skills',
            title: 'Soft skills',
            links: [
              {
                label: 'Module overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills',
              },
              {
                label: 'Research and learning',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Research_and_learning',
              },
              {
                label: 'Collaboration and teamwork',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Collaboration_and_teamwork',
              },
              {
                label: 'Workflows and processes',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Workflows_and_processes',
              },
              {
                label: 'Finding a job',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Soft_skills/Finding_a_job',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'languages',
    emoji: '💬',
    title: 'Languages',
    topics: [
      {
        id: 'html',
        title: 'HTML',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Structuring content',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
          },
        ],
        subTopics: [
          {
            id: 'html:text-content',
            title: 'Text content',
            links: [
              {
                label: 'Basic HTML syntax',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax',
              },
              {
                label: 'Webpage metadata',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata',
              },
              {
                label: 'Headings and paragraphs',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs',
              },
              {
                label: 'Emphasis and importance',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance',
              },
              {
                label: 'Lists',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Lists',
              },
              {
                label: 'Advanced text features',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features',
              },
              {
                label: 'Marking up a letter',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter',
              },
            ],
          },
          {
            id: 'html:structure-and-links',
            title: 'Structure and links',
            links: [
              {
                label: 'Structuring documents',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents',
              },
              {
                label: 'Creating links',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Creating_links',
              },
              {
                label: 'Structuring a page of content',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content',
              },
            ],
          },
          {
            id: 'html:media-and-embedding',
            title: 'Media and embedding',
            links: [
              {
                label: 'HTML images',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_images',
              },
              {
                label: 'HTML video and audio',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio',
              },
              {
                label: 'Splash page',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Splash_page',
              },
              {
                label: 'Including vector graphics in HTML',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML',
              },
              {
                label: 'General embedding technologies',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies',
              },
            ],
          },
          {
            id: 'html:tables',
            title: 'Tables',
            links: [
              {
                label: 'HTML table basics',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics',
              },
              {
                label: 'Table accessibility',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Table_accessibility',
              },
              {
                label: 'Planet data table',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Planet_data_table',
              },
            ],
          },
          {
            id: 'html:forms',
            title: 'Forms',
            links: [
              {
                label: 'HTML forms',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/HTML_forms',
              },
              {
                label: 'Forms challenge',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Forms_challenge',
              },
            ],
          },
          {
            id: 'html:debugging',
            title: 'Debugging',
            links: [
              {
                label: 'Debugging HTML',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML',
              },
            ],
          },
          {
            id: 'html:test-your-skills',
            title: 'Test your skills',
            links: [
              {
                label: 'Overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills',
              },
              {
                label: 'HTML text basics',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics',
              },
              {
                label: 'Advanced HTML text',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Advanced_HTML_text',
              },
              {
                label: 'Links',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Links',
              },
              {
                label: 'Images',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images',
              },
              {
                label: 'Audio and video',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Audio_and_video',
              },
              {
                label: 'Forms and buttons',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons',
              },
            ],
          },
        ],
      },
      {
        id: 'javascript',
        title: 'JavaScript fundamentals',
        tags: ['frontend', 'backend', 'easy'],
        links: [
          {
            label: 'MDN — Scripting',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting',
          },
        ],
        subTopics: [
          {
            id: 'javascript:getting-started',
            title: 'Getting started',
            links: [
              {
                label: 'What is JavaScript?',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript',
              },
              {
                label: 'A first splash',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/A_first_splash',
              },
              {
                label: 'What went wrong',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_went_wrong',
              },
            ],
          },
          {
            id: 'javascript:data-types-and-collections',
            title: 'Data: variables, math, strings, arrays',
            links: [
              {
                label: 'Variables',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Variables',
              },
              {
                label: 'Math',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Math',
              },
              {
                label: 'Strings',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Strings',
              },
              {
                label: 'Useful string methods',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Useful_string_methods',
              },
              {
                label: 'Arrays',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Arrays',
              },
              {
                label: 'Silly story generator',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Silly_story_generator',
              },
            ],
          },
          {
            id: 'javascript:logic-and-functions',
            title: 'Logic and functions',
            links: [
              {
                label: 'Conditionals',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals',
              },
              {
                label: 'Loops',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Loops',
              },
              {
                label: 'Functions',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Functions',
              },
              {
                label: 'Build your own function',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Build_your_own_function',
              },
              {
                label: 'Return values',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Return_values',
              },
            ],
          },
          {
            id: 'javascript:events-and-interactivity',
            title: 'Events and interactivity',
            links: [
              {
                label: 'Events',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Events',
              },
              {
                label: 'Event bubbling',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Event_bubbling',
              },
              {
                label: 'Image gallery',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Image_gallery',
              },
            ],
          },
          {
            id: 'javascript:objects-and-dom',
            title: 'Objects and the DOM',
            links: [
              {
                label: 'Object basics',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Object_basics',
              },
              {
                label: 'DOM scripting',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/DOM_scripting',
              },
            ],
          },
          {
            id: 'javascript:network-and-data',
            title: 'Network, data, and debugging',
            links: [
              {
                label: 'Network requests',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Network_requests',
              },
              {
                label: 'JSON',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON',
              },
              {
                label: 'House data UI',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/House_data_UI',
              },
              {
                label: 'Debugging JavaScript',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript',
              },
            ],
          },
          {
            id: 'javascript:test-your-skills',
            title: 'Test your skills',
            links: [
              {
                label: 'Overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills',
              },
              {
                label: 'Variables',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Variables',
              },
              {
                label: 'Math',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Math',
              },
              {
                label: 'Strings',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Strings',
              },
              {
                label: 'Arrays',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Arrays',
              },
              {
                label: 'Conditionals',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Conditionals',
              },
              {
                label: 'Loops',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Loops',
              },
              {
                label: 'Functions',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Functions',
              },
              {
                label: 'Events',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Events',
              },
              {
                label: 'Object basics',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/Object_basics',
              },
              {
                label: 'JSON',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Test_your_skills/JSON',
              },
            ],
          },
        ],
      },
      {
        id: 'typescript',
        title: 'TypeScript fundamentals',
        note: 'TypeScript handbook',
        tags: ['frontend', 'backend', 'mid'],
        links: [
          {
            label: 'TypeScript Handbook',
            href: 'https://www.typescriptlang.org/docs/handbook/intro.html',
          },
        ],
        subTopics: [
          {
            id: 'typescript:getting-started',
            title: 'Getting started',
            links: [
              {
                label: 'TypeScript for JavaScript programmers',
                href: 'https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html',
              },
              {
                label: 'Everyday types',
                href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
              },
              {
                label: 'Type annotations',
                href: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#type-annotations-on-variables',
              },
            ],
          },
          {
            id: 'typescript:core-type-system',
            title: 'Core type system',
            links: [
              {
                label: 'Narrowing',
                href: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
              },
              {
                label: 'Functions',
                href: 'https://www.typescriptlang.org/docs/handbook/2/functions.html',
              },
              {
                label: 'Object types',
                href: 'https://www.typescriptlang.org/docs/handbook/2/objects.html',
              },
            ],
          },
        ],
      },
      {
        id: 'css',
        title: 'CSS',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'MDN — Styling basics',
            href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
          },
        ],
        subTopics: [
          {
            id: 'css:introduction',
            title: 'Introduction',
            links: [
              {
                label: 'What is CSS?',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/What_is_CSS',
              },
              {
                label: 'Getting started with CSS',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Getting_started',
              },
              {
                label: 'Styling a bio page',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Styling_a_bio_page',
              },
            ],
          },
          {
            id: 'css:selectors',
            title: 'Selectors',
            links: [
              {
                label: 'Basic selectors',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors',
              },
              {
                label: 'Attribute selectors',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors',
              },
              {
                label: 'Pseudo-classes and pseudo-elements',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements',
              },
              {
                label: 'Combinators',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Combinators',
              },
            ],
          },
          {
            id: 'css:box-model-and-cascade',
            title: 'Box model and cascade',
            links: [
              {
                label: 'Box model',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model',
              },
              {
                label: 'Handling conflicts',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts',
              },
              {
                label: 'Fixing blog styles',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Fixing_blog_styles',
              },
            ],
          },
          {
            id: 'css:sizing-and-layout-basics',
            title: 'Sizing, values, and overflow',
            links: [
              {
                label: 'Values and units',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Values_and_units',
              },
              {
                label: 'Sizing',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Sizing',
              },
              {
                label: 'Backgrounds and borders',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders',
              },
              {
                label: 'Size and decorate a content panel',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Size_decorate_content_panel',
              },
              {
                label: 'Overflow',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Overflow',
              },
            ],
          },
          {
            id: 'css:content-types',
            title: 'Images, media, forms, and tables',
            links: [
              {
                label: 'Images, media, and forms',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Images_media_forms',
              },
              {
                label: 'Tables',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Tables',
              },
            ],
          },
          {
            id: 'css:debugging',
            title: 'Debugging',
            links: [
              {
                label: 'Debugging CSS',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Debugging_CSS',
              },
            ],
          },
          {
            id: 'css:advanced-topics',
            title: 'Advanced topics',
            links: [
              {
                label: 'Advanced styling effects',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Advanced_styling_effects',
              },
              {
                label: 'Cascade layers',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers',
              },
              {
                label: 'Handling different text directions',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions',
              },
              {
                label: 'Organizing your CSS',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Organizing',
              },
            ],
          },
          {
            id: 'css:test-your-skills',
            title: 'Test your skills',
            links: [
              {
                label: 'Overview',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills',
              },
              {
                label: 'Selectors',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors',
              },
              {
                label: 'Box model',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model',
              },
              {
                label: 'Cascade',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade',
              },
              {
                label: 'Values',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Values',
              },
              {
                label: 'Sizing',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing',
              },
              {
                label: 'Backgrounds and borders',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders',
              },
              {
                label: 'Overflow',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow',
              },
              {
                label: 'Images',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Test_your_skills/Images',
              },
              {
                label: 'Home color scheme search',
                href: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Home_color_scheme_search',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'frameworks',
    emoji: '🧩',
    title: 'Frameworks',
    topics: [
      {
        id: 'react',
        title: 'React fundamentals',
        note: 'react.dev — Learn React',
        tags: ['frontend', 'mid'],
        links: [{ label: 'React — Learn React (overview)', href: 'https://react.dev/learn' }],
        subTopics: [
          {
            id: 'react:quick-start',
            title: 'Quick start',
            links: [
              {
                label: 'Tutorial: Tic-Tac-Toe',
                href: 'https://react.dev/learn/tutorial-tic-tac-toe',
              },
              {
                label: 'Thinking in React',
                href: 'https://react.dev/learn/thinking-in-react',
              },
            ],
          },
          {
            id: 'react:installation',
            title: 'Installation',
            links: [
              {
                label: 'Installation',
                href: 'https://react.dev/learn/installation',
              },
              {
                label: 'Creating a React app',
                href: 'https://react.dev/learn/creating-a-react-app',
              },
              {
                label: 'Build a React app from scratch',
                href: 'https://react.dev/learn/build-a-react-app-from-scratch',
              },
              {
                label: 'Add React to an existing project',
                href: 'https://react.dev/learn/add-react-to-an-existing-project',
              },
            ],
          },
          {
            id: 'react:setup-and-tooling',
            title: 'Setup and tooling',
            links: [
              {
                label: 'Setup',
                href: 'https://react.dev/learn/setup',
              },
              {
                label: 'Editor setup',
                href: 'https://react.dev/learn/editor-setup',
              },
              {
                label: 'Using TypeScript',
                href: 'https://react.dev/learn/typescript',
              },
              {
                label: 'React Developer Tools',
                href: 'https://react.dev/learn/react-developer-tools',
              },
            ],
          },
          {
            id: 'react:describing-ui',
            title: 'Describing the UI',
            links: [
              {
                label: 'Describing the UI',
                href: 'https://react.dev/learn/describing-the-ui',
              },
              {
                label: 'Your first component',
                href: 'https://react.dev/learn/your-first-component',
              },
              {
                label: 'Importing and exporting components',
                href: 'https://react.dev/learn/importing-and-exporting-components',
              },
              {
                label: 'Writing markup with JSX',
                href: 'https://react.dev/learn/writing-markup-with-jsx',
              },
              {
                label: 'JavaScript in JSX with curly braces',
                href: 'https://react.dev/learn/javascript-in-jsx-with-curly-braces',
              },
              {
                label: 'Passing props to a component',
                href: 'https://react.dev/learn/passing-props-to-a-component',
              },
              {
                label: 'Conditional rendering',
                href: 'https://react.dev/learn/conditional-rendering',
              },
              {
                label: 'Rendering lists',
                href: 'https://react.dev/learn/rendering-lists',
              },
              {
                label: 'Keeping components pure',
                href: 'https://react.dev/learn/keeping-components-pure',
              },
              {
                label: 'Understanding your UI as a tree',
                href: 'https://react.dev/learn/understanding-your-ui-as-a-tree',
              },
            ],
          },
          {
            id: 'react:adding-interactivity',
            title: 'Adding interactivity',
            links: [
              {
                label: 'Adding interactivity',
                href: 'https://react.dev/learn/adding-interactivity',
              },
              {
                label: 'Responding to events',
                href: 'https://react.dev/learn/responding-to-events',
              },
              {
                label: 'State: a component’s memory',
                href: 'https://react.dev/learn/state-a-components-memory',
              },
              {
                label: 'Render and commit',
                href: 'https://react.dev/learn/render-and-commit',
              },
              {
                label: 'State as a snapshot',
                href: 'https://react.dev/learn/state-as-a-snapshot',
              },
              {
                label: 'Queueing a series of state updates',
                href: 'https://react.dev/learn/queueing-a-series-of-state-updates',
              },
              {
                label: 'Updating objects in state',
                href: 'https://react.dev/learn/updating-objects-in-state',
              },
              {
                label: 'Updating arrays in state',
                href: 'https://react.dev/learn/updating-arrays-in-state',
              },
            ],
          },
          {
            id: 'react:managing-state',
            title: 'Managing state',
            links: [
              {
                label: 'Managing state',
                href: 'https://react.dev/learn/managing-state',
              },
              {
                label: 'Reacting to input with state',
                href: 'https://react.dev/learn/reacting-to-input-with-state',
              },
              {
                label: 'Choosing the state structure',
                href: 'https://react.dev/learn/choosing-the-state-structure',
              },
              {
                label: 'Sharing state between components',
                href: 'https://react.dev/learn/sharing-state-between-components',
              },
              {
                label: 'Preserving and resetting state',
                href: 'https://react.dev/learn/preserving-and-resetting-state',
              },
              {
                label: 'Extracting state logic into a reducer',
                href: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
              },
              {
                label: 'Passing data deeply with context',
                href: 'https://react.dev/learn/passing-data-deeply-with-context',
              },
              {
                label: 'Scaling up with reducer and context',
                href: 'https://react.dev/learn/scaling-up-with-reducer-and-context',
              },
            ],
          },
          {
            id: 'react:escape-hatches',
            title: 'Escape hatches',
            links: [
              {
                label: 'Escape hatches',
                href: 'https://react.dev/learn/escape-hatches',
              },
              {
                label: 'Referencing values with refs',
                href: 'https://react.dev/learn/referencing-values-with-refs',
              },
              {
                label: 'Manipulating the DOM with refs',
                href: 'https://react.dev/learn/manipulating-the-dom-with-refs',
              },
              {
                label: 'Synchronizing with Effects',
                href: 'https://react.dev/learn/synchronizing-with-effects',
              },
              {
                label: 'You might not need an Effect',
                href: 'https://react.dev/learn/you-might-not-need-an-effect',
              },
              {
                label: 'Lifecycle of reactive Effects',
                href: 'https://react.dev/learn/lifecycle-of-reactive-effects',
              },
              {
                label: 'Separating events from Effects',
                href: 'https://react.dev/learn/separating-events-from-effects',
              },
              {
                label: 'Removing Effect dependencies',
                href: 'https://react.dev/learn/removing-effect-dependencies',
              },
              {
                label: 'Reusing logic with custom Hooks',
                href: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
              },
            ],
          },
        ],
      },
      {
        id: 'vite',
        title: 'Vite',
        note: 'Official Vite guide',
        tags: ['frontend', 'easy'],
        links: [{ label: 'Vite — Getting started', href: 'https://vitejs.dev/guide/' }],
        subTopics: [
          {
            id: 'vite:introduction',
            title: 'Introduction and concepts',
            links: [
              {
                label: 'Philosophy',
                href: 'https://vitejs.dev/guide/philosophy',
              },
              {
                label: 'Why Vite',
                href: 'https://vitejs.dev/guide/why',
              },
              {
                label: 'Features',
                href: 'https://vitejs.dev/guide/features',
              },
              {
                label: 'CLI',
                href: 'https://vitejs.dev/guide/cli',
              },
            ],
          },
          {
            id: 'vite:plugins-and-dependencies',
            title: 'Plugins and dependencies',
            links: [
              {
                label: 'Using plugins',
                href: 'https://vitejs.dev/guide/using-plugins',
              },
              {
                label: 'Dependency pre-bundling',
                href: 'https://vitejs.dev/guide/dep-pre-bundling',
              },
            ],
          },
          {
            id: 'vite:assets-and-build',
            title: 'Assets and build',
            links: [
              {
                label: 'Static asset handling',
                href: 'https://vitejs.dev/guide/assets',
              },
              {
                label: 'Build for production',
                href: 'https://vitejs.dev/guide/build',
              },
              {
                label: 'Static deploy',
                href: 'https://vitejs.dev/guide/static-deploy',
              },
            ],
          },
          {
            id: 'vite:runtime-and-integration',
            title: 'Runtime and integration',
            links: [
              {
                label: 'Env variables and modes',
                href: 'https://vitejs.dev/guide/env-and-mode',
              },
              {
                label: 'Server-side rendering',
                href: 'https://vitejs.dev/guide/ssr',
              },
              {
                label: 'Backend integration',
                href: 'https://vitejs.dev/guide/backend-integration',
              },
            ],
          },
          {
            id: 'vite:performance-and-maintenance',
            title: 'Performance and maintenance',
            links: [
              {
                label: 'Performance',
                href: 'https://vitejs.dev/guide/performance',
              },
              {
                label: 'Troubleshooting',
                href: 'https://vitejs.dev/guide/troubleshooting',
              },
              {
                label: 'Migration',
                href: 'https://vitejs.dev/guide/migration',
              },
            ],
          },
        ],
      },
      {
        id: 'nodejs',
        title: 'Node.js fundamentals',
        note: 'Official Node.js Learn',
        tags: ['backend', 'easy'],
        links: [
          {
            label: 'Node.js — Introduction',
            href: 'https://nodejs.org/en/learn/getting-started/introduction-to-nodejs',
          },
        ],
        subTopics: [
          {
            id: 'nodejs:getting-started',
            title: 'Getting started fundamentals',
            links: [
              {
                label: 'Introduction to Node.js',
                href: 'https://nodejs.org/learn/getting-started/introduction-to-nodejs',
              },
              {
                label: 'How much JavaScript you need',
                href: 'https://nodejs.org/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs',
              },
              {
                label: 'Node.js vs the browser',
                href: 'https://nodejs.org/learn/getting-started/differences-between-nodejs-and-the-browser',
              },
              {
                label: 'The V8 JavaScript engine',
                href: 'https://nodejs.org/learn/getting-started/the-v8-javascript-engine',
              },
              {
                label: 'Introduction to npm',
                href: 'https://nodejs.org/learn/getting-started/an-introduction-to-the-npm-package-manager',
              },
              {
                label: 'ES6 and beyond',
                href: 'https://nodejs.org/learn/getting-started/ecmascript-2015-es6-and-beyond',
              },
            ],
          },
          {
            id: 'nodejs:cli-and-environment',
            title: 'CLI and environment',
            links: [
              {
                label: 'Run scripts from the command line',
                href: 'https://nodejs.org/learn/command-line/run-nodejs-scripts-from-the-command-line',
              },
              {
                label: 'Use the Node.js REPL',
                href: 'https://nodejs.org/learn/command-line/how-to-use-the-nodejs-repl',
              },
              {
                label: 'Output to the command line',
                href: 'https://nodejs.org/learn/command-line/output-to-the-command-line-using-nodejs',
              },
              {
                label: 'Accept command line input',
                href: 'https://nodejs.org/learn/command-line/accept-input-from-the-command-line-in-nodejs',
              },
              {
                label: 'Read environment variables',
                href: 'https://nodejs.org/learn/command-line/how-to-read-environment-variables-from-nodejs',
              },
            ],
          },
          {
            id: 'nodejs:http-and-network',
            title: 'HTTP and network',
            links: [
              {
                label: 'Anatomy of an HTTP transaction',
                href: 'https://nodejs.org/learn/http/anatomy-of-an-http-transaction',
              },
              {
                label: 'Fetching data with Node.js',
                href: 'https://nodejs.org/learn/getting-started/fetch',
              },
              {
                label: 'WebSocket client with Node.js',
                href: 'https://nodejs.org/learn/getting-started/websocket',
              },
            ],
          },
          {
            id: 'nodejs:files-and-fs',
            title: 'Files and filesystem',
            links: [
              {
                label: 'Node.js file paths',
                href: 'https://nodejs.org/learn/manipulating-files/nodejs-file-paths',
              },
              {
                label: 'Reading files with Node.js',
                href: 'https://nodejs.org/learn/manipulating-files/reading-files-with-nodejs',
              },
              {
                label: 'Writing files with Node.js',
                href: 'https://nodejs.org/learn/manipulating-files/writing-files-with-nodejs',
              },
              {
                label: 'Working with folders',
                href: 'https://nodejs.org/learn/manipulating-files/working-with-folders-in-nodejs',
              },
            ],
          },
          {
            id: 'nodejs:async-runtime',
            title: 'Async and runtime model',
            links: [
              {
                label: 'Asynchronous programming and callbacks',
                href: 'https://nodejs.org/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks',
              },
              {
                label: 'Discover Promises in Node.js',
                href: 'https://nodejs.org/learn/asynchronous-work/discover-promises-in-nodejs',
              },
              {
                label: 'The Node.js event loop',
                href: 'https://nodejs.org/learn/asynchronous-work/event-loop-timers-and-nexttick',
              },
              {
                label: 'The Node.js Event Emitter',
                href: 'https://nodejs.org/learn/asynchronous-work/the-nodejs-event-emitter',
              },
              {
                label: "Don't block the Event Loop",
                href: 'https://nodejs.org/learn/asynchronous-work/dont-block-the-event-loop',
              },
            ],
          },
          {
            id: 'nodejs:debugging-and-production',
            title: 'Debugging and production',
            links: [
              {
                label: 'Debugging Node.js',
                href: 'https://nodejs.org/learn/getting-started/debugging',
              },
              {
                label: 'Development vs production',
                href: 'https://nodejs.org/learn/getting-started/nodejs-the-difference-between-development-and-production',
              },
              {
                label: 'Profiling Node.js applications',
                href: 'https://nodejs.org/learn/getting-started/profiling',
              },
              {
                label: 'Security best practices',
                href: 'https://nodejs.org/learn/getting-started/security-best-practices',
              },
            ],
          },
        ],
      },
      {
        id: 'express',
        title: 'Express fundamentals',
        note: 'Official Express docs',
        tags: ['backend', 'mid'],
        links: [
          {
            label: 'Express — Getting started',
            href: 'https://expressjs.com/en/starter/installing.html',
          },
        ],
        subTopics: [
          {
            id: 'express:getting-started',
            title: 'Getting started',
            links: [
              {
                label: 'Installing',
                href: 'https://expressjs.com/en/starter/installing.html',
              },
              {
                label: 'Hello world example',
                href: 'https://expressjs.com/en/starter/hello-world.html',
              },
              {
                label: 'Basic routing',
                href: 'https://expressjs.com/en/starter/basic-routing.html',
              },
              {
                label: 'Serving static files',
                href: 'https://expressjs.com/en/starter/static-files.html',
              },
              {
                label: 'Express generator',
                href: 'https://expressjs.com/en/starter/generator.html',
              },
              {
                label: 'Examples',
                href: 'https://expressjs.com/en/starter/examples.html',
              },
            ],
          },
          {
            id: 'express:routing-and-middleware',
            title: 'Routing and middleware',
            links: [
              {
                label: 'Routing guide',
                href: 'https://expressjs.com/en/guide/routing.html',
              },
              {
                label: 'Writing middleware',
                href: 'https://expressjs.com/en/guide/writing-middleware.html',
              },
              {
                label: 'Using middleware',
                href: 'https://expressjs.com/en/guide/using-middleware.html',
              },
              {
                label: 'Overriding the Express API',
                href: 'https://expressjs.com/en/guide/overriding-express-api.html',
              },
            ],
          },
          {
            id: 'express:errors-debugging-and-views',
            title: 'Errors, debugging, and views',
            links: [
              {
                label: 'Using template engines',
                href: 'https://expressjs.com/en/guide/using-template-engines.html',
              },
              {
                label: 'Error handling',
                href: 'https://expressjs.com/en/guide/error-handling.html',
              },
              {
                label: 'Debugging Express',
                href: 'https://expressjs.com/en/guide/debugging.html',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'ai',
    emoji: '🤖',
    title: 'AI',
    topics: [
      {
        id: 'claude-code',
        title: 'Claude Code',
        tags: ['frontend', 'easy'],
        links: [
          {
            label: 'Claude Code (GitHub)',
            href: 'https://github.com/anthropics/claude-code',
          },
          { label: 'Anthropic documentation', href: 'https://docs.anthropic.com/' },
        ],
      },
    ],
  },
  {
    id: 'testing',
    emoji: '🧪',
    title: 'Testing',
    topics: [
      {
        id: 'vitest',
        title: 'Vitest',
        tags: ['frontend', 'easy'],
        links: [{ label: 'Vitest — Getting started', href: 'https://vitest.dev/guide/' }],
      },
      {
        id: 'e2e',
        title: 'End-to-end testing',
        note: 'Pick a tool (e.g. Playwright or Cypress)',
        tags: ['frontend', 'hard'],
        links: [
          { label: 'Playwright', href: 'https://playwright.dev/docs/intro' },
          { label: 'Cypress', href: 'https://docs.cypress.io/app/get-started/why-cypress' },
        ],
      },
    ],
  },
  {
    id: 'infrastructure',
    emoji: '🏗',
    title: 'Infrastructure',
    topics: [
      {
        id: 'github',
        title: 'GitHub',
        note: 'Repositories, collaboration',
        tags: ['backend', 'easy'],
        links: [
          {
            label: 'GitHub Docs — Repositories',
            href: 'https://docs.github.com/en/repositories',
          },
        ],
      },
      {
        id: 'docker',
        title: 'Docker fundamentals',
        tags: ['backend', 'mid'],
        links: [{ label: 'Docker — Get started', href: 'https://docs.docker.com/get-started/' }],
      },
      {
        id: 'ci',
        title: 'CI',
        note: 'Pipelines for testing & deployment',
        tags: ['backend', 'mid'],
        links: [
          {
            label: 'GitHub Actions — Quickstart',
            href: 'https://docs.github.com/en/actions/quickstart',
          },
        ],
      },
      {
        id: 'deployment',
        title: 'Deployment',
        tags: ['frontend', 'mid'],
        links: [
          { label: 'Vercel', href: 'https://vercel.com/docs' },
          { label: 'Netlify', href: 'https://docs.netlify.com/' },
        ],
      },
    ],
  },
  {
    id: 'monitoring',
    emoji: '📈',
    title: 'Monitoring',
    topics: [
      {
        id: 'sentry',
        title: 'Error logging',
        note: 'Sentry',
        tags: ['backend', 'mid'],
        links: [{ label: 'Sentry — Product basics', href: 'https://docs.sentry.io/product/sentry-basics/' }],
      },
    ],
  },
]

export function totalTopicCount(): number {
  return curriculum.reduce((n, s) => n + s.topics.length, 0)
}

export function allTopicIds(): string[] {
  return curriculum.flatMap((s) => s.topics.map((t) => t.id))
}

export function totalChecklistCount(): number {
  return curriculum.reduce((sum, section) => {
    return (
      sum +
      section.topics.reduce((topicSum, topic) => {
        return (
          topicSum +
          topic.links.length +
          (topic.subTopics?.reduce((subSum, subTopic) => subSum + subTopic.links.length, 0) ?? 0)
        )
      }, 0)
    )
  }, 0)
}

function compactHref(href: string): string {
  return href
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function linkProgressId(parentId: string, href: string): string {
  return `link:${parentId}:${compactHref(href)}`
}

export function allLinkProgressIds(): string[] {
  return curriculum.flatMap((section) =>
    section.topics.flatMap((topic) => [
      ...topic.links.map((link) => linkProgressId(topic.id, link.href)),
      ...(topic.subTopics?.flatMap((subTopic) =>
        subTopic.links.map((link) => linkProgressId(subTopic.id, link.href)),
      ) ?? []),
    ]),
  )
}

export function allProgressIds(): string[] {
  // Keep legacy topic/subtopic IDs valid so old saved progress doesn't get dropped.
  const legacyContainerIds = curriculum.flatMap((section) =>
    section.topics.flatMap((topic) => [topic.id, ...(topic.subTopics?.map((sub) => sub.id) ?? [])]),
  )
  return [...legacyContainerIds, ...allLinkProgressIds()]
}
