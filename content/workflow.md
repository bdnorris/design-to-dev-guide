# Workflow

## Styletiles

One way to quickly iterate on the styles for a web project without having to complete full page designs too early is to work on a "Style Tile". A style tile is a single page that shows the general style direction for a project. It can include:

- Logo
- Color palette
- Typography
- Icons
- Imagery
- Textures
- Patterns

### Audience

Although style tiles are great for communicating amongst a design and development team, the ultimate audience for them is the client. They’re meant to quickly get feedback and show possible directions.

### Level of Detail

Style tiles are general. They exist to communicate mood and the general design direction.

[Styletiles](http://styletil.es/)


## Wireframing

Wireframing involves creating a visual representation of the website's layout and structure to establish a _blueprint_ for the website before any actual detailed work takes place. The main purpose is to establish a foundation for content hierarchy, navigation, and functionality. It provides something visual to share with stakeholders and to use as a reference for the design process. 

Different stakeholders may have different ideas in their head regarding the website's layout and structure. A wireframe helps to establish a common understanding. It also helps to identify any potential issues early in the process.

Typically this is done digitally, but it can be done on paper as well. The wireframe should include basic visual elements such as navigation menus, content blocks, and placeholders for images and text. You can then refine the design based on feedback from stakeholders. 

When creating a wireframe, it's important to focus on functionality and user experience rather than aesthetics. Wireframes should be low-fidelity. They should not include any colors, images, or other visual elements. They should be easy to create and update. If you find you're spending hours and hours on this part of the process, too much actual design work is happening.

## Prototyping

There's tremendous value of prototyping interactive designs prior to full development. Having an interactive example before a full coding effort can reveal design and content issues. Interactivity adds a the dimension of time.

There are several levels of prototyping, each taking up a different amounts of time and effort. Choosing the right one depends on the complexity and size of the project.

### Types

- XD or a similar design programs prototyping features.
  - Adding states to components
	- Adding clickable navigation elements to your designs 
	- These can be previewed by stakeholders as a web proof
- Low-overhead coded implementations.
  - Here's where a developer would start coding a project, but typically with a small data-set, and unpolished UI.
  - The goal is to get something interactive in front of stakeholders to work out the problem.
- Prototyping specific applications
  - There are a host of prototyping specific apps that can be used to work out solutions in low-to-high fidelity. These typically are much more in-depth, and are mostly beneficial for very large, expensive projects.
  - Examples include Framer or InVision Studio
  	- [https://www.framer.com/](https://www.framer.com/)
  - These often have a lot more animation prototyping features than Adobe XD, at least at the moment.

### Resiliency

There’s a tendency in the digital design process to design with ideal data, mock or otherwise. But a good template should be resilient and accommodate varying amounts and types of content.

Will your design break if the client changes the copy at the last minute? Keep this in mind as you move from your wireframe to your fleshed out design.

### Behavior and Interactivity

Prototyping most useful for complex user inputs.

- For example: filters and search should show whether the increasing specificity is an additive process, or a subtractive, i.e. does the result set increase when adding search terms, or narrow?
- Micro-interactions
- Any other special behaviors that are based on user input

### State

Prototype for all items that have a state, if you can’t design, **document.**

- Hover states
- Null/0/empty results from search or filtering and/or edge case results (1 item, 100 items)
- Normal, error, and focus states on form inputs, including error messages
- Any interface changes
  - Display toggles
  - Data updates
    - Wait times and loading states (what appears when there is a delay in updating the page?)

## Iterative Design

Prototyping and wireframes can lead to a more iterative approach to design problems. Sometimes this is called "Design Thinking". 

Linear Workflow: Discovery and Research > Sitemap > Wireframe > Prototype > Copy > Design > Develop
Iterative: Discovery and Research > Sitemap > Wireframe/Copy/Prototype/Design > Develop > Test, repeat.

An iterative design process is a cyclical approach to designing a product, service, or system, where the design is refined through repeated cycles of prototyping, testing, and feedback. This approach involves breaking down the design process into small, manageable steps, with each step building on the knowledge gained from the previous step. It also requires dedicated testers, whether this is highly structured user testing, or just a client who is willing to spend the time testing an incremental approach.

The following are the typical stages involved in an iterative design process:

Research and Discovery: This stage involves gathering information about the problem or opportunity that the design is intended to address. This may include conducting user research, competitive analysis, or market research to understand the needs and preferences of users or customers.

Conceptualization: This stage involves generating ideas and concepts for the design based on the insights gained during the research phase. This may include brainstorming, sketching, or creating wireframes or prototypes.

Prototyping: In this stage, a basic version of the design is created and tested. This may involve creating low-fidelity prototypes using paper or digital tools, or building more advanced prototypes using physical materials or software.

Testing: The prototype is then tested with users or clients to gather feedback on how well it meets their needs and expectations. This feedback is used to refine the design and improve its usability, functionality, and aesthetics.

Iteration: Based on the feedback received during testing, the design is revised and refined. This may involve making changes to the prototype or returning to an earlier stage in the process to explore alternative solutions.

Implementation: Once the design has been refined and tested to the satisfaction of the designer and stakeholders, it is implemented and released to users or customers.

Evaluation: After implementation, the design is evaluated to determine its effectiveness and identify areas for improvement. This feedback is then used to inform future iterations of the design process.

## Atomic Web Design

For larger projects, think beyond layouts and pages, think about modular and systems (design as legos).

Atomic web design is a methodology that involves breaking down a website's design into its fundamental building blocks, known as "atoms." These atoms include basic design elements such as buttons, forms, typography, and color schemes. By designing and testing these atoms individually, designers can create a more modular and scalable approach to web design. Once these atoms are tested and refined, they can be combined to create larger components, such as navigation menus or search bars, and then further assembled into full-page layouts. This approach ensures consistency and flexibility in design, making it easier to maintain and update websites over time.

[Atomic Design E-Book](https://atomicdesign.bradfrost.com/)
