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

Wireframing involves creating a visual representation of the website's layout and structure to establish a _blueprint_ for the website's design before any actual detailed work takes place. The main purpose is to establish a foundation for content hierarchy, navigation, and functionality. It provides something visual to share with stakeholders and to use as a reference for the design process. 

Different stakeholders may have different ideas in their head regarding the website's layout and structure. A wireframe helps to establish a common understanding. It also helps to identify any potential issues before any detailed work is done.

Typically this is done digitally, but can be done on paper as well. The wireframe should include basic visual elements such as navigation menus, content blocks, and placeholders for images and text. You can then refine the design based on feedback from stakeholders. 

When creating a wireframe, it's important to focus on functionality and user experience rather than aesthetics. Wireframes should be low-fidelity. They should not include any colors, images, or other visual elements. They should be easy to create and update. If you find you're spending hours and hours on this part of the process, too much actual design work is happening.

## Prototyping

There's tremendous value of prototyping interactive designs prior to full development. Having an interactive example before full coding can reveal design and content issues. Interactivity adds a the dimension of time and what we generally refer to as "navigation." Both big issues and small ones can be revealed by adding this step to your workflow.

There are several levels of prototyping, each taking up a different amounts of time and effort (\$\$\$). Choosing the right one depends on the complexity, size and importance of the project.

- In app prototyping: Next generation digital design tools like XD and Sketch have a certain amount of prototyping built in. These tools are getting better and better and will continue to improve. The mostly allow navigation through a design via click points that move you from artboard to artboard (page/view to page/view), but there is also a certain amount of interactivity that can be added by creating different "states" on a component. These can sometimes include animation.
- Quick code prototypes: Sometimes it just makes sense to start coding. These prototypes can use mock data, skipping actual complicated back-end functionality. The goal is to get coding with a lower-fidelity design to test interactivity instead of worrying about details.

For a typical website, the first one is usually sufficient. Code prototypes are often only necessary with more complicated tools (filters, quizes/wizards, calculators)

Prototyping can take a lot of different forms, but here's where we are making things that are actually interactive but have a similar incompleteness to a wireframe. The design probably isn't all the way thought out yet, and you're not even sure which pattern to use or abuse.

### Types

- XD or similar design programs prototyping features.
  - Adding states and clickable navigation elements to your designs that can be previewed on the web.
  - This is probably going to be the most common way we prototype sites and apps.
- Low-overhead coded implementations.
  - Here's where a developer would start coding a project, but typically with a small data-set, and unpolished UI.
  - The goal is to get something interactive in front of stakeholders to work out the problem.
- Prototyping specific applications
  - There are a host of prototyping specific apps that can be used to work out solutions in low-to-high fidelity.
  - These typically are much more in-depth, and are mostly beneficial for very large, expensive projects.
  - Examples include Framer or InVision Studio
  - [https://www.framer.com/](https://www.framer.com/)
  - These often have a lot more animation prototyping features than Adobe XD, at least at the moment.

# Iterative Design

Prototyping and wireframes can lead to a more iterative approach design problems.

// CHAT GPT

An iterative design process is a cyclical approach to designing a product, service, or system, where the design is refined through repeated cycles of prototyping, testing, and feedback. This approach involves breaking down the design process into small, manageable steps, with each step building on the knowledge gained from the previous step.

The following are the typical stages involved in an iterative design process:

Research and Discovery: This stage involves gathering information about the problem or opportunity that the design is intended to address. This may include conducting user research, competitive analysis, or market research to understand the needs and preferences of users or customers.

Conceptualization: This stage involves generating ideas and concepts for the design based on the insights gained during the research phase. This may include brainstorming, sketching, or creating wireframes or prototypes.

Prototyping: In this stage, a basic version of the design is created and tested. This may involve creating low-fidelity prototypes using paper or digital tools, or building more advanced prototypes using physical materials or software.

Testing: The prototype is then tested with users or customers to gather feedback on how well it meets their needs and expectations. This feedback is used to refine the design and improve its usability, functionality, and aesthetics.

Iteration: Based on the feedback received during testing, the design is revised and refined. This may involve making changes to the prototype or returning to an earlier stage in the process to explore alternative solutions.

Implementation: Once the design has been refined and tested to the satisfaction of the designer and stakeholders, it is implemented and released to users or customers.

Evaluation: After implementation, the design is evaluated to determine its effectiveness and identify areas for improvement. This feedback is then used to inform future iterations of the design process.

Overall, an iterative design process involves a continuous cycle of prototyping, testing, and refining, with each iteration building on the knowledge gained from previous iterations. The process is flexible and adaptable, allowing designers to make changes and improvements as they learn more about the needs and preferences of users or customers.

/////

Linear Workflow: Sitemap > Wireframe > Prototype > Copy > Design > Develop
Iterative: Sitemap > Wireframe/Copy/Prototype/Design, repeat.

Responsive Deliverables
Element Collages
Atomic Web Design
For larger projects, think beyond layouts and pages, think about modular and systems (design as legos).

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

## Animation

- Animations need planning, so please **document** where you think animation will be useful and provide examples/mockups/sketches of the style of animation
- If animation is elaborate, plan on adding a prototyping phase concurrent with visual design

### Complexity

We can animate a lot. But the complexity varies and it's hard to break down in any kind of guidelines as to what's more or less complexity, time or cost.

So let's discuss it early.

_Transforms_ and _opacity_ are the most performant animations. You know what opacity is, but what can we "transform"? Here's a start:

[transform - CSS Reference](https://cssreference.io/property/transform/)

### Animista

Animista is the best site to find some nice animation styles you can tweak and export code. All of these implementations have pretty good performance.

[Animista](https://animista.net/)

### SVG Line Dashes

We can do that line drawing in animation thing, but your SVGs need to be designed to accommodate it.

### Animation Libraries

There are some cool helper libraries out there for animation. These can speed up dev of more complex animations. However, they have a performance and download cost, so better to stick with one. Here's one...

[anime.js](https://animejs.com/)

And here's an example implementation.

[Moving Letters](https://tobiasahlin.com/moving-letters/)
