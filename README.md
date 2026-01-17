# Combined Assignment App

Live Demo: [https://your-live-demo-link.vercel.app/](https://your-live-demo-link.vercel.app/)

---

## Screenshots

Below are screenshots demonstrating the app’s key functionalities:

| **Supplier Heatmap View**                           | **Hierarchical Tree Table View**                   |
|----------------------------------------------------|----------------------------------------------------|
| ![Supplier Heatmap](./screenshots/heatmap.png)     | ![Tree Table](./screenshots/tree-table.png)        |

| **CSV Upload Dialog**                              | **Column Sorting & Freeze Columns**                 |
|----------------------------------------------------|----------------------------------------------------|
| ![CSV Upload](./screenshots/csv-upload.png)        | ![Sorting & Freeze](./screenshots/sorting-freeze.png) |

| **Voice Recording State**                           | **Transcription Result**                            |
|----------------------------------------------------|----------------------------------------------------|
| ![Recording](./screenshots/recording.png)          | ![Transcription](./screenshots/transcription.png)  |

*Note:* Replace the paths with your actual screenshots.

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

1. **Clone the Repository**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
