# Combined Assignment App
A React-based application that addresses two core challenges: visualizing supplier pricing data through an interactive heatmap and displaying hierarchical product information with a dynamic tree table. Designed for clarity, performance, and ease of use.
---

## Screenshots

Below are screenshots demonstrating the app’s key functionalities:

**Problem 1: Supplier Heatmap View** 

<img width="1903" height="546" alt="image" src="https://github.com/user-attachments/assets/b7abbc6a-30e9-42ed-9a19-3c1402cc6c49" />


**Problem 2: Hierarchical Tree Table View** 

<img width="1905" height="606" alt="image" src="https://github.com/user-attachments/assets/0aa1a36d-7617-44c4-82c6-a5fea21f4f5e" />

---

## Project Overview

This React application implements two key features as per the assignment requirements:

1. **Supplier Heatmap (Problem 1)**  
   Visualizes supplier rate data from a CSV file with a heatmap color scale indicating pricing differences. Features include sortable columns, freeze columns, and column visibility toggling.

2. **Hierarchical Tree Table (Problem 2)**  
   Displays hierarchical data with expandable/collapsible nodes showing Category, Subcategories, and Item details in a clean tree table format.

---

## Features & Highlights

- **CSV File Upload & Parsing**  
  Dynamically load data for both problem views.

- **Heatmap Logic (Problem 1)**  
  - Conditional coloring from green (lowest rate) to red (highest rate) per row.  
  - Percentage difference from estimated rate displayed with arrows and colored text.  
  - Freeze columns to lock important fields during horizontal scroll.  
  - Sorting by any column ascending/descending.  
  - Column show/hide toggle for customizable views.

- **Hierarchical Tree Table (Problem 2)**  
  - Multi-level expandable/collapsible rows reflecting category hierarchy.  
  - Clean, responsive design.  
  - Numeric columns aligned and styled for readability.

- **Reusable React Components & Hooks**  
  - Clean code separation between UI and data logic.  
  - Memoization for performance on large datasets.  
  - Minimal prop drilling with clear naming conventions.

---

## Tech Stack

- React.js (Functional Components & Hooks)  
- JavaScript (ES6+)  
- CSS3 with scoped styles  
- CSV parsing with `papaparse`  
- Deployment ready (Vercel / Netlify compatible)

---

## Setup Instructions

### Prerequisites

- Node.js (v16 or later recommended)  
- npm (comes with Node.js)  
- Git
### Step-by-Step Setup

```bash
# Clone the Repository
git clone https://github.com/nitin2001581402/supplier-heatmap-tree-assignment.git
cd TREE-TABLE-APP

# Install Dependencies
npm install

# Run the Application
npm start
