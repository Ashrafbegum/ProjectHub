Breakpoints:
------------

📱 Mobile First (default styles: 320px → 767px) 

/* 📟 Tablet: 768px → 1023px */
@media (min-width: 768px) {
  /* tablet styles */
}

/* 💻 Desktop: 1024px and above */
@media (min-width: 1024px) {
  /* desktop styles */
}

Folder Structure:
----------------

projecthub/
│
├── index.html
├── pages/
│   ├── dashboard.html
│   ├── projects.html
│   ├── project-details.html
│   ├── tasks.html
│   └── team.html
    ├── calendar.html
│   └── settings.html
│
├── assets/
│   ├── css/
│   │   ├── base/
│   │   │   ├── reset.css
│   │   │   ├── variables.css
│   │   │   ├── typography.css
│   │   │   
│   │   │
│   │   ├── layout/
│   │   │   ├── containers.css
│   │   │   └── app-layout.css
│   │   │
│   │   ├── components/
│   │   │   ├── navbar.css
│   │   │   ├── sidebar.css
│   │   │   ├── project-card.css
│   │   │   ├── button.css
│   │   │   ├── input.css
│   │   │   ├── badge.css
│   │   │   ├── table.css
│   │   │   ├── modal.css
│   │   │   ├── toast.css
│   │   │   └── avatar.css
|   |   |   ├── chart-container.css
│   │   │   └── drop-down.css  
|   |   |   ├── filter-bar.css
│   │   │   └── page-header.css 
|   |   |   ├── progress-bar.css
│   │   │   └── stat-card.css   
|   |   |   ├── search-bar.css

│   │   ├── pages/
│   │   │   ├── calendar.css
│   │   │   ├── dashboard.css
│   │   │   ├── projects.css
│   │   │   ├── project-details.css
│   │   │   ├── tasks.css
│   │   │   ├── team.css
│   │   │   ├── settings.css            
│   │   │   
│   │   │
│   │   └── main.css
│
├── js/
└── images/

Conventions throughout the project:
-------------------------------------

BEM naming for all custom classes (component__element--modifier).
CSS custom properties (var(...)) for colors, spacing, typography, border radii, and shadows—avoid hard-coded values where possible.
Rem units for spacing and font sizes, with px reserved for borders, icons, and fine details.
Semantic HTML (header, nav, main, section, article, aside, footer) wherever appropriate.
Mobile-first media queries using your agreed breakpoints: 320–767px, 768–1023px, and 1024px+.

Page Structure
---------------
<body>

    Navbar

    <div class="app-layout">

        Sidebar

        Main

            Page Header

            Page Specific Content

    </div>

</body>
