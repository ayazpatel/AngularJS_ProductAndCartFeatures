# AngularJS Product & Cart Features

A pair of demo e-commerce applications built with AngularJS 1.x, illustrating product listing, search/filter, and shopping-cart functionality.

## Table of Contents

- [Overview](#overview)  
- [Demos](#demos)  
- [Features](#features)  
- [Project Structure](#project-structure)  
- [Getting Started](#getting-started)  
- [Usage](#usage)  
- [Technologies](#technologies)  
- [Contributing](#contributing)  
- [License](#license)  

## Overview

This repository contains two standalone AngularJS applications:

1. **AngularJS_JwelleryShop**  
   A showcase of a jewelry store UI with product listing, detail views, and cart.  
2. **AngularJs_eCommerceShop**  
   A more generic e-commerce demo with product search, filtering, and shopping-cart management.

Each app is purely frontend—just open its `index.html` in a browser (or serve it on a static server).

## Demos

- AngularJS Jewelry Shop:  
  [AngularJS_JwelleryShop/index.html](file:///Users/ayazpatel/Projects/AngularJS_ProductAndCartFeatures/AngularJS_JwelleryShop/index.html)  
- AngularJS eCommerce Shop:  
  [AngularJs_eCommerceShop/index.html](file:///Users/ayazpatel/Projects/AngularJS_ProductAndCartFeatures/AngularJs_eCommerceShop/index.html)  

*(Adjust the `file://` paths to match your local checkout directory.)*

## Features

- AngularJS controllers, services, and two-way data binding  
- Product listing with images, names, prices  
- Live search/filter input  
- Add to cart, update quantity, remove items  
- Cart summary with total calculation  
- Simple routing via multiple HTML pages (`about.html`, `contact.html`, etc.)

## Project Structure
AngularJS_ProductAndCartFeatures/
├── AngularJS_JwelleryShop/
│   ├── assets/               # images, icons  
│   ├── index.html            # main entry  
│   ├── about.html            # about page  
│   ├── contact.html          # contact page  
│   ├── app.js                # AngularJS module, controllers, services  
│   └── styles.css            # custom styling  
│  
├── AngularJs_eCommerceShop/  
│   ├── assets/  
│   ├── index.html  
│   ├── search.html           # product search demo  
│   ├── app.js  
│   └── styles.css  
│  
└── README.md                 # this file  

## Getting Started

### Prerequisites

- A modern browser (Chrome, Firefox, Edge…)  
- (Optional) A static file server, e.g.:
npm install -g http-server

### Installation

1. Clone the repo
   git clone https://github.com/ayazpatel/AngularJS_ProductAndCartFeatures.git
   cd AngularJS_ProductAndCartFeatures
2. (Optional) Serve on `http://localhost:8080`
   http-server . -c-1
3. Open the demo(s) in your browser:  
   - http://localhost:8080/AngularJS_JwelleryShop/index.html  
   - http://localhost:8080/AngularJs_eCommerceShop/index.html  

   Or simply double-click each `index.html` file.

## Usage

- Browse products on the main page.  
- Use the **Search** box to filter by keyword.  
- Click **Add to Cart** to accumulate items.  
- View the cart (sidebar or separate page) to adjust quantities or remove items.  
- Observe automatic total price updates.

## Technologies

- AngularJS 1.x  
- HTML5 / CSS3  / BootStrap 5
- Vanilla JavaScript  

No build step—this is purely static frontend code.

## Contributing

1. Fork the repository  
2. Create a feature branch:
   git checkout -b feature/my-feature
3. Commit your changes:
   git commit -m "Add feature"
4. Push to your branch:
   git push origin feature/my-feature
5. Open a Pull Request  

Feel free to suggest enhancements or new demo scenarios!

## License

MIT © Ayaz Patel  
