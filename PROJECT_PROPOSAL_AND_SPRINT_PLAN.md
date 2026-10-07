# R1 MOTO PERFORMANCE - OJT PROJECT PROPOSAL & SPRINT PLANNING
**Project Title:** R1 Moto Performance E-Commerce & B2B Dealer Portal  
**Proponent:** On-the-Job Training (OJT) Developer / Software Engineering Intern  
**Target Architecture:** Decoupled Architecture (React SPA Frontend + Laravel 11 REST API Backend)  
**Authentication Engine:** Laravel Sanctum (Token-Based RBAC: Customer, Dealer, Admin)  
**Database:** MySQL / PostgreSQL  
**Document Version:** 1.1.0  
**Date:** October 2026  

---

## 1. Executive Summary & Project Background

### 1.1 Company Background
**R1 Moto Performance** is a premier manufacturer and distributor of high-quality motorcycle performance parts and accessories. Built by passionate riders and engineers, R1 Moto specializes in precision Continuously Variable Transmission (CVT) tuning components, ceramic braking systems, and specialized motorcycle lubricants. 

Beyond retailing parts, R1 Moto Performance fosters an active riding community connecting mechanics, riders, scouts, and motorcycle dealerships across the Philippines.

### 1.2 Problem Statement & Industry Need
1. **Lack of Centralized Account & Role Management:** Customers, wholesale dealers, and staff have no unified platform to manage profiles, track orders, or access privileged B2B tiers. A secure **Login and Sign Up authentication system** with Role-Based Access Control (RBAC) is essential.
2. **Catalog Fragmentation & Incompatible Part Purchases:** In the motorcycle aftermarket industry, riders frequently purchase the wrong CVT or transmission parts due to confusing bike specifications (e.g., Yamaha Aerox vs. NMAX vs. Mio, Honda Click 125/150/160 vs. PCX vs. ADV). Riders need an intuitive **two-way compatibility engine**.
3. **Manual & Inefficient B2B Dealership Onboarding:** Dealership applications and wholesale bulk orders are currently handled via fragmented social media chats and manual forms. Business requirements (DTI, Mayor's Permit, IDs) get scattered across messages.
4. **Disorganized Wholesale Ordering:** Dealers need a dedicated system to select product lines, configure order quantities, generate verifiable **Purchase Order / Quotation PDFs**, and upload verification documents that the back-office can download as a **consolidated archive**.

### 1.3 Project Objectives
* **Deliver a Secure Multi-Role Authentication System:**
  * **Customer / Rider Sign Up & Login:** Enables riders to create accounts, save their motorcycle model to "My Garage", and review past inquiries and orders.
  * **Dealer Sign Up & Login:** Grants verified wholesale dealers access to tier pricing, application status tracking, and past order PDF re-downloads.
  * **Administrator Login:** Secure portal access to the content management system (CMS) and wholesale operational workflows.
* **Develop a High-Performance Web Catalog:** A modern, responsive React interface showcasing R1 Moto Performance's flagship product lines.
* **Implement a Two-Way Motorcycle Compatibility Engine:**
  1. *Unit-to-Parts Search:* Select a motorcycle model (e.g., Yamaha NMAX 155) to view all verified compatible parts.
  2. *Part-to-Units Inspection:* View a specific part (e.g., R1 High-Grade Pulley Set) and see all compatible motorcycle models.
* **Build an Automated B2B Dealer / Distributor Portal:**
  * Interactive wholesale ordering with automatic order summary calculation.
  * Server-side PDF generation for formal Dealer Purchase Orders.
  * Document upload for dealership accreditation (PNG, JPEG, PDF) with one-click consolidated ZIP downloads for administrators.
* **Deliver Brand Content & Discovery:** Dedicated "About Us" with mission & vision, interactive authorized store locator, official marketplace links (Shopee, Lazada, Facebook), and a Careers portal.
* **Provide an Admin CMS Dashboard:** Built in Laravel to manage products, categories, motorcycle models, compatibility pivots, dealer submissions, user accounts, and customer inquiries.

---

## 2. Technical Stack & System Architecture

### 2.1 Technology Stack
| Layer | Technology | Rationale |
| :--- | :--- | :--- |
| **Frontend** | React 18+ (Vite), React Router v6 | Lightning-fast SPA rendering, component modularity, instant hot-reloading |
| **UI & Styling** | Vanilla CSS / CSS Modules & Tailwind CSS | Custom dark-mode racing aesthetic, responsive grid system, micro-animations |
| **Authentication (Client)** | React Auth Context, Axios Interceptors | Global user session state, automatic `Bearer <token>` attachment, route guards |
| **Icons & Media** | Lucide React / React Icons | Lightweight, consistent iconography |
| **HTTP Client & State** | Axios, TanStack React Query / Context API | Predictable data fetching, caching, and server-state synchronization |
| **Backend API** | Laravel 11.x (PHP 8.2+) | Robust MVC structure, Eloquent ORM, built-in validation, clean REST routing |
| **Authentication (API)** | Laravel Sanctum | Token-based lightweight authentication for Admin, Dealer, and Customer accounts |
| **Database** | MySQL 8.0+ / MariaDB | Relational integrity for users, compatibility mappings, and order items |
| **PDF Generation** | `barryvdh/laravel-dompdf` | Server-side automated compilation of branded B2B order purchase sheets |
| **Bulk File Archiving** | PHP `ZipArchive` | Server-side bundling of uploaded dealer verification credentials |
| **Version Control** | Git & GitHub | Feature-branch workflow, atomic commits, weekly OJT documentation tracking |

### 2.2 System Architecture Overview
```
+-----------------------------------------------------------------------------------+
|                                  CLIENT LAYER                                     |
|  React Single Page Application (SPA) - Vite                                       |
|  - Auth Modals & Pages (Sign Up, Login, Forgot Password, Profile / My Garage)     |
|  - Customer Catalog & Two-Way Compatibility Matrix                                |
|  - Dealer Application & Wholesale Order Interface                                 |
|  - About Us, Careers, Contact & Marketplace Links                                 |
|  - Protected Admin CMS Dashboard Portal                                           |
+-----------------------------------------------------------------------------------+
                                          |
                                    REST API (JSON)
                                Axios Interceptor (Bearer Token)
                                          |
+-----------------------------------------------------------------------------------+
|                                 APPLICATION LAYER                                 |
|  Laravel 11 REST API Engine                                                       |
|  - Sanctum Auth Middleware (Token Guard, Role Authorization: Admin/Dealer/User)   |
|  - Controllers: Auth, Product, Compatibility, DealerApp, Order, Career, Contact   |
|  - Business Services: PdfGeneratorService, DocumentZipService                     |
+-----------------------------------------------------------------------------------+
                       |                                    |
          Eloquent ORM Database Access              Storage Engine
                       |                                    |
+---------------------------------------+   +---------------------------------------+
|              DATA LAYER               |   |            STORAGE LAYER              |
|  MySQL Database                       |   |  Local Storage / Public Disk          |
|  - Users, Roles & Password Resets     |   |  - Product Raw Photos & Specs         |
|  - Products, Specs & Categories       |   |  - Dealer Requirement Uploads         |
|  - Motorcycle Models & Pivot Matrix   |   |  - Generated Purchase Order PDFs      |
|  - Dealer Applications & Orders       |   +---------------------------------------+
+---------------------------------------+
```

---

## 3. Database Schema Design (Entity Relationship)

### 3.1 Primary Entities
1. **`users`**: User identity and credentials:
   * `id`: BIGINT (Primary Key, Auto-Increment)
   * `name`: VARCHAR(255)
   * `email`: VARCHAR(255) (Unique)
   * `password`: VARCHAR(255) (Hashed bcrypt)
   * `phone`: VARCHAR(50) (Nullable)
   * `role`: ENUM (`'customer'`, `'dealer'`, `'admin'`) (Default: `'customer'`)
   * `motorcycle_model_id`: BIGINT (Nullable, Foreign Key $\rightarrow$ `motorcycle_models.id` for "My Garage")
   * `email_verified_at`: TIMESTAMP (Nullable)
   * `remember_token`: VARCHAR(100) (Nullable)
   * `timestamps`: `created_at`, `updated_at`
2. **`password_reset_tokens`**: Password recovery (`email`, `token`, `created_at`).
3. **`personal_access_tokens`**: Sanctum API tokens (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`).
4. **`categories`**: Product classifications (`id`, `name`, `slug`, `description`, `is_active`).
5. **`products`**: Core catalog (`id`, `category_id`, `name`, `sku`, `slug`, `summary`, `description`, `key_features` [json], `specs` [json], `image_path`, `suggested_retail_price`, `dealer_price`, `stock_status`, `is_featured`).
6. **`motorcycle_models`**: Reference units (`id`, `brand` [Yamaha, Honda, Suzuki, etc.], `model_name`, `engine_displacement`, `year_range`, `image_path`, `slug`).
7. **`motorcycle_model_product`** *(Pivot)*: Two-way compatibility (`id`, `product_id`, `motorcycle_model_id`, `notes`).
8. **`dealer_applications`**: B2B dealership onboarding (`id`, `user_id` [Nullable, FK $\rightarrow$ `users`], `business_name`, `contact_person`, `email`, `phone`, `business_address`, `status`: `'pending'|'approved'|'rejected'`, `admin_notes`, `timestamps`).
9. **`dealer_documents`**: Uploaded requirement files (`id`, `dealer_application_id`, `document_type`: `'dti'|'mayors_permit'|'valid_id'|'store_photo'`, `file_path`, `original_filename`, `file_type`).
10. **`dealer_orders`**: Wholesale orders linked to applications (`id`, `dealer_application_id`, `user_id` [FK $\rightarrow$ `users`], `order_reference_no`, `total_amount`, `pdf_path`, `status`: `'draft'|'submitted'|'processed'`, `timestamps`).
11. **`dealer_order_items`**: Line items (`id`, `dealer_order_id`, `product_id`, `quantity`, `unit_wholesale_price`, `subtotal`).
12. **`careers`**: Open jobs (`id`, `title`, `department`, `job_type`, `description`, `requirements`, `is_active`).
13. **`career_applications`**: Job candidate submissions (`id`, `career_id`, `applicant_name`, `email`, `phone`, `resume_path`, `cover_letter`).
14. **`contact_inquiries`**: General and tech inquiries (`id`, `name`, `email`, `contact_number`, `subject_type`, `message`, `status`).

---

## 4. User Authentication & Role Architecture

### 4.1 Account Roles & Privileges
```
                      +-----------------------------+
                      |       R1 User Account       |
                      +-----------------------------+
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
  [ CUSTOMER ROLE ]           [ DEALER ROLE ]             [ ADMIN ROLE ]
  • Public Catalog & Specs    • Wholesale Dealer Pricing   • Full Admin Dashboard
  • Two-Way Fitment Engine    • Multi-File Requirements    • Product & Specs CRUD
  • "My Garage" Saved Bike    • Bulk Order Placement       • Compatibility Matrix
  • Submit Inquiries          • Download Order Sheet PDF   • Dealer App Approvals
  • Order History Log         • Application Status View    • PDF & ZIP Bulk Exports
```

### 4.2 Security & Authentication Workflow
1. **User Sign Up (Registration):**
   * Public registration form for Riders (`/register`).
   * Collects Name, Email, Phone, Password, and optional Motorcycle Model (My Garage).
   * Validates uniqueness of email, password strength, and confirms password match.
   * Auto-logs the user in upon registration and issues a Sanctum Bearer token.
2. **User Login (Sign In):**
   * Login form modal/page (`/login`).
   * Validates credentials using `Auth::attempt()`.
   * Throttles failed attempts (Rate Limiting) to protect against brute-force attacks.
   * Returns authenticated user profile, assigned role (`customer`, `dealer`, or `admin`), and Bearer API token.
3. **Session & State Management in React:**
   * `AuthContext` provides global `user`, `role`, `token`, `isAuthenticated`, `login()`, and `logout()` methods.
   * Tokens are securely stored in browser storage and appended via Axios request interceptors:
     ```javascript
     config.headers.Authorization = `Bearer ${token}`;
     ```
   * Role-based route guards (`<ProtectedRoute role="admin" />`) redirect unauthorized users to the login screen with clear toast alerts.
4. **Logout Workflow:**
   * Calls `POST /api/v1/auth/logout`.
   * Server revokes the active personal access token (`$request->user()->currentAccessToken()->delete()`).
   * Client purges cached token and resets application state.

---

## 5. Product Catalog & Asset Breakdown

Derived directly from R1 Moto Performance engineering documentation and assets:

| Product Name | Category | Primary Specs / Key Highlights |
| :--- | :--- | :--- |
| **R1 High-Grade Pulley Set** | CVT Transmission | CNC-Machined surface, optimized ramp angle, high-grade aluminum alloy, air fins |
| **R1 Clutch Bell** | CVT Transmission | Stainless steel material, linear grooves for dust evacuation, cooling wing, balanced |
| **R1 Precision Flyball (Roller Weights)** | CVT Tuning | Precision weighted grams (8g - 15g), heat-resistant composite compound |
| **R1 High-Tensile Center Spring** | CVT Tuning | 1000 RPM / 1200 RPM / 1500 RPM, heat-treated alloy steel |
| **R1 Clutch Spring Set** | CVT Tuning | High-engagement spring sets for crisp throttle launch |
| **R1 Clutch Lining Assembly** | CVT Transmission | Heavy-duty friction material, non-slip composite, high-grip engagement |
| **R1 Slider Piece Set** | CVT Tuning | High-durability wear-resistant polymer dampers |
| **R1 Torque Drive Assembly** | CVT Transmission | Dual-angle guide pin slots, smooth high-RPM shift transition |
| **R1 Ceramic Brake Pads** | Braking System | Premium ceramic compound, heat-resistant braking material, fade-free |
| **R1 Professional CVT Cleaner** | Maintenance | High-pressure aerosol degreaser, removes dust, oil & rubber residue |
| **R1 Heavy-Duty Fork Oil** | Suspension Fluid | Multi-viscosity hydraulic suspension fluid, anti-foaming & friction reducing |

---

## 6. Agile Sprint Planning & GitHub Push Roadmap

This project is planned over **7 Sprints (Sprint 0 to Sprint 6)**, designed for a 300 to 500-hour OJT schedule. Each task is mapped directly to **exact Git branch names** and **Conventional Git commit messages** to allow step-by-step pushes to GitHub.

---

### SPRINT 0: Project Initiation, Architecture & Database Migrations
**Duration:** Week 1 – 2 (Approx. 40 hours)  
**Goal:** Initialize decoupled repositories, configure Laravel 11 and React Vite, set up database schemas including users/roles, seeders, and establish the R1 dark/red motorsport design system.

#### Frontend Tasks (React + Vite)
- [ ] Initialize React Vite application with clean directory structure (`src/components`, `src/pages`, `src/context`, `src/services`, `src/assets`).
- [ ] Configure custom design tokens adhering to R1 Moto branding:
  - Primary Dark: `#0d0f12`, `#161920`, `#1f242d`
  - Performance Red: `#e11d48`, `#be123c`, `#f43f5e`
  - Neutral Chrome: `#e2e8f0`, `#94a3b8`
- [ ] Implement responsive Navbar and Footer with Login/Sign Up buttons and user dropdown skeleton.
- [ ] Set up React Router v6 route skeleton.

#### Backend Tasks (Laravel 11)
- [ ] Initialize Laravel 11 REST API project.
- [ ] Configure MySQL database connection and environment variables.
- [ ] Install and configure Laravel Sanctum for API token authentication.
- [ ] Create database migration files for all primary tables (`users`, `password_reset_tokens`, `categories`, `products`, `motorcycle_models`, `motorcycle_model_product`, `dealer_applications`, `dealer_documents`, `dealer_orders`, `dealer_order_items`, `careers`, `contact_inquiries`).
- [ ] Create Database Seeders for Admin user, categories, and initial R1 product specifications.

#### GitHub Git Push Checklist (Sprint 0)
1. `git checkout -b chore/project-initialization`
   * `git commit -m "chore: scaffold react vite frontend and configure router layout"`
   * `git commit -m "chore: scaffold laravel 11 api backend with sanctum auth setup"`
   * `git commit -m "style: establish r1 moto dark/red design tokens and global layout"`
2. `git checkout -b feat/database-schema-and-seeders`
   * `git commit -m "feat(db): create migrations for users, catalog, compatibility, and dealer modules"`
   * `git commit -m "feat(db): implement database seeders for admin user, categories, and r1 products"`
   * `git commit -m "docs: add sprint 0 completion documentation and api env setup guide"`
3. *Merge to `develop` branch via PR: "Sprint 0: Initial Project Architecture and Database Setup"*

---

### SPRINT 1: Authentication System (Login & Sign Up) & Product Catalog Showcase
**Duration:** Week 3 – 4 (Approx. 50 hours)  
**Goal:** Deliver the full authentication flow (Login, Sign Up, Sanctum Token Auth, Role Guards) and the public product catalog with category filtering and specs.

#### Frontend Tasks (React)
- [ ] Build `AuthModal` / `AuthPages` (`LoginForm`, `SignUpForm`, `ForgotPasswordModal`).
- [ ] Build `AuthContext` to manage user state, token persistence, and login/logout handlers.
- [ ] Implement Axios request interceptor attaching `Authorization: Bearer <token>`.
- [ ] Implement `ProtectedRoute` component to restrict access based on user role (`customer`, `dealer`, `admin`).
- [ ] Develop `ProductCard` component with hover micro-interactions, badge indicators, and high-res photo display.
- [ ] Build `ProductCatalog` page with real-time category filtering (CVT, Brake, Oil, Tuning) and search bar.
- [ ] Build `ProductDetail` page showcasing:
  - Technical specs (material, ramp angle, grove types, viscosity).
  - High-resolution raw product photos gallery.
  - "Where to Buy" direct links (Shopee, Lazada, Facebook).
  - "Check Bike Compatibility" CTA button.

#### Backend Tasks (Laravel 11)
- [ ] Create `AuthController` (`POST /api/v1/auth/register`, `POST /api/v1/auth/login`, `POST /api/v1/auth/logout`, `GET /api/v1/auth/me`).
- [ ] Implement validation rules for registration (email uniqueness, password rules) and rate-limiting for login.
- [ ] Create `CategoryController` (`GET /api/v1/categories`).
- [ ] Create `ProductController` (`GET /api/v1/products`, `GET /api/v1/products/{slug}`).
- [ ] Implement API Resources (`ProductResource`, `CategoryResource`, `UserResource`) for clean JSON formatting.

#### GitHub Git Push Checklist (Sprint 1)
1. `git checkout -b feat/auth-system`
   * `git commit -m "feat(api): implement sanctum user register, login, logout, and profile endpoints"`
   * `git commit -m "feat(ui): build login and sign up form components with validation"`
   * `git commit -m "feat(ui): create auth context and axios bearer token interceptor"`
   * `git commit -m "feat(ui): implement role-based protected route wrappers"`
2. `git checkout -b feat/catalog-ui-and-api`
   * `git commit -m "feat(api): implement product and category controllers with json resources"`
   * `git commit -m "feat(ui): create product card and responsive product grid components"`
   * `git commit -m "feat(ui): develop detailed product view with technical specs and gallery"`
3. *Merge to `develop` via PR: "Sprint 1: Authentication System and Product Catalog Showcase"*

---

### SPRINT 2: Two-Way Motorcycle Compatibility Engine & My Garage
**Duration:** Week 5 – 6 (Approx. 50 hours)  
**Goal:** Implement the flagship two-way compatibility engine and the "My Garage" saved motorcycle feature for logged-in riders.

#### Functional Requirements
1. **Mode A (Unit to Products):** Rider selects or clicks a motorcycle unit (e.g., Yamaha Aerox 155, Honda Click 125, NMAX) to instantly see all compatible R1 performance parts.
2. **Mode B (Product to Units):** Rider opens a product page and sees a visual list/badges of all motorcycle units compatible with that part.
3. **"My Garage" Feature:** Logged-in riders can save their primary motorcycle model in their profile for automatic "Fit Guaranteed" badge indicators on catalog cards.

#### Frontend Tasks (React)
- [ ] Build `MotorcycleSelector` component displaying motorcycle unit photos (Yamaha, Honda, Suzuki).
- [ ] Build `CompatibilityFinder` page where riders select Brand -> Model -> Year to retrieve matched parts.
- [ ] Add `CompatibleUnitsList` badge gallery inside `ProductDetail` page.
- [ ] Build `MyGarage` profile widget allowing riders to select and save their motorcycle.

#### Backend Tasks (Laravel 11)
- [ ] Create `MotorcycleModelController` (`GET /api/v1/motorcycle-models`, `GET /api/v1/motorcycle-models/{id}/products`).
- [ ] Implement `GET /api/v1/products/{id}/compatible-models` endpoint.
- [ ] Implement `PUT /api/v1/profile/garage` to update user's saved motorcycle unit.
- [ ] Seed motorcycle models common in the Philippine market (NMAX 155, Aerox 155, Click 125/150/160, PCX 160, Mio Sporty, ADV 160).

#### GitHub Git Push Checklist (Sprint 2)
1. `git checkout -b feat/compatibility-backend`
   * `git commit -m "feat(api): create motorcycle models endpoint with eager-loaded relations"`
   * `git commit -m "feat(api): implement reverse compatibility endpoint from product to units"`
   * `git commit -m "feat(api): add user my-garage motorcycle model preference endpoint"`
2. `git checkout -b feat/compatibility-frontend`
   * `git commit -m "feat(ui): build interactive motorcycle unit photo selector grid"`
   * `git commit -m "feat(ui): implement unit-to-parts compatibility search view"`
   * `git commit -m "feat(ui): add compatible motorcycle badges to product detail page"`
   * `git commit -m "feat(ui): build my-garage quick compatibility filter for authenticated riders"`
3. *Merge to `develop` via PR: "Sprint 2: Two-Way Motorcycle Compatibility Engine and My Garage"*

---

### SPRINT 3: Brand Content (About Us, Store Locator, Careers & Contact)
**Duration:** Week 7 – 8 (Approx. 40 hours)  
**Goal:** Deliver the brand narrative, company location, official online store links, careers page, and contact inquiry submission system.

#### Frontend Tasks (React)
- [ ] Build `AboutUs` page using the official copy:
  - Mission & Vision statement.
  - Interactive Location map & Authorized Partner Shops.
  - Direct verified external shop links (Shopee, Lazada, Facebook: `facebook.com/r1motoperformance`).
- [ ] Build `Careers` page displaying active job vacancies and resume upload application modal.
- [ ] Build `ContactUs` page with responsive feedback form, contact info, and inquiry subject selector.

#### Backend Tasks (Laravel 11)
- [ ] Create `ContactController` (`POST /api/v1/contact-inquiries`) with form request validation.
- [ ] Create `CareerController` (`GET /api/v1/careers`, `POST /api/v1/careers/{id}/apply`) with resume storage.
- [ ] Configure transactional notification emails / storage logging for received inquiries.

#### GitHub Git Push Checklist (Sprint 3)
1. `git checkout -b feat/brand-pages`
   * `git commit -m "feat(ui): build about us page with mission, vision, and official shop links"`
   * `git commit -m "feat(ui): implement interactive dealer locator and map component"`
2. `git checkout -b feat/careers-and-contact`
   * `git commit -m "feat(api): build contact inquiry and careers application endpoints"`
   * `git commit -m "feat(ui): develop careers job board and resume submission modal"`
   * `git commit -m "feat(ui): develop contact us form with real-time feedback validation"`
3. *Merge to `develop` via PR: "Sprint 3: Brand Content, Careers Board, and Contact Management"*

---

### SPRINT 4: B2B Dealer / Distributor Portal & Wholesale Ordering
**Duration:** Week 9 – 10 (Approx. 50 hours)  
**Goal:** Build the dedicated B2B portal where prospective dealers can review perks, upload business credentials (PNG/JPEG), select products for a wholesale order, and submit their application.

#### Blueprint Requirements Covered
* Dealer / Distributor perks & requirements.
* Interactive product selector for wholesale bulk orders.
* Multipart upload for accreditation documents (DTI/SEC, Mayor's Permit, Store Photo, Valid ID).
* Seamless integration with logged-in dealer accounts.

#### Frontend Tasks (React)
- [ ] Build `BecomeDealer` landing page detailing dealership perks (margins, territory exclusivity, marketing collaterals) and prerequisites.
- [ ] Build Multi-Step Application Wizard:
  - **Step 1: Business Details:** Store Name, Owner Name, Contact, Complete Address, Social/Store Links (auto-filled if logged in).
  - **Step 2: Document Upload:** Drag-and-drop file uploaders for PNG/JPEG files with thumbnail preview.
  - **Step 3: Wholesale Product Selector:** Interactive order sheet where dealers select SKUs and enter quantities (with MOQ enforcement, unit dealer prices, and running subtotal calculation).
  - **Step 4: Review & Submit:** Confirmation summary before submission.

#### Backend Tasks (Laravel 11)
- [ ] Create `DealerApplicationController` (`POST /api/v1/dealer-applications`).
- [ ] Handle multipart file uploads with strict mime-type validation (`image/png`, `image/jpeg`, `application/pdf`) and secure storage on `storage/app/dealer_docs/`.
- [ ] Create `DealerOrderController` to store selected order lines in `dealer_orders` and `dealer_order_items`.
- [ ] Implement database transactions (`DB::transaction`) to guarantee atomicity across application, files, and orders.

#### GitHub Git Push Checklist (Sprint 4)
1. `git checkout -b feat/dealer-portal-backend`
   * `git commit -m "feat(api): implement dealer application submission endpoint with file upload handling"`
   * `git commit -m "feat(api): implement wholesale order creation with atomic database transaction"`
2. `git checkout -b feat/dealer-portal-frontend`
   * `git commit -m "feat(ui): create become a dealer page with perks and requirements breakdown"`
   * `git commit -m "feat(ui): build multi-step dealer application wizard with document uploader"`
   * `git commit -m "feat(ui): implement interactive wholesale product order selector with running total"`
3. *Merge to `develop` via PR: "Sprint 4: B2B Dealer Portal and Wholesale Order Selection"*

---

### SPRINT 5: Automated PDF Order Generation & Consolidated Archive Downloads
**Duration:** Week 11 – 12 (Approx. 50 hours)  
**Goal:** Deliver the automated backend PDF purchase order generator and consolidated ZIP export tool for dealer documents.

#### Blueprint Requirements Covered
* *"On the back end, we can download the PDF file of the list of order."*
* *"Backend, we can download all files. Must be consolidated."*

#### Backend Tasks (Laravel 11)
- [ ] Install `barryvdh/laravel-dompdf`.
- [ ] Design a clean, high-resolution Blade template (`resources/views/pdf/dealer-order.blade.php`):
  - R1 Moto Performance header with logo.
  - Order reference number, date, dealer business details.
  - Itemized table: SKU, Product Name, Quantity, Dealer Price, Subtotal, Grand Total.
  - Terms & Conditions and Authorized Signature lines.
- [ ] Implement `PdfOrderService` to render and save the PDF on order submission.
- [ ] Implement `GET /api/v1/admin/dealer-orders/{id}/download-pdf` endpoint.
- [ ] Implement `GET /api/v1/admin/dealer-applications/{id}/download-documents-zip` using PHP `ZipArchive`:
  - Dynamically packages all uploaded requirement files (DTI, permits, store photos) into a single consolidated `.zip` file named `R1-Dealer-[BusinessName]-[AppID].zip`.

#### Frontend Tasks (React)
- [ ] Provide instant "Download Order Summary PDF" button for applicant upon successful submission.
- [ ] Add Admin preview buttons: "Download Purchase Order PDF" and "Download Consolidated Documents (.ZIP)".

#### GitHub Git Push Checklist (Sprint 5)
1. `git checkout -b feat/pdf-order-generator`
   * `git commit -m "feat(pdf): integrate dompdf and design r1 branded wholesale order blade template"`
   * `git commit -m "feat(api): implement automated pdf generation and download endpoint"`
2. `git checkout -b feat/consolidated-zip-exporter`
   * `git commit -m "feat(api): implement ziparchive service to bundle dealer documents into single archive"`
   * `git commit -m "feat(ui): integrate pdf order download and consolidated zip trigger in admin interface"`
3. *Merge to `develop` via PR: "Sprint 5: Automated PDF Order Generation and Consolidated Archive Exporter"*

---

### SPRINT 6: Admin CMS Dashboard, Security, Testing & Final Deployment
**Duration:** Week 13 – 14 (Approx. 50 hours)  
**Goal:** Build the unified Admin CMS, implement Sanctum role-based security, perform thorough integration testing, and prepare deployment.

#### Frontend Tasks (React)
- [ ] Build protected Admin Dashboard layout with sidebar navigation and role guards.
- [ ] Admin Module 1: Product & Inventory CRUD (form with file uploader for new parts, specs editor).
- [ ] Admin Module 2: Motorcycle Compatibility Matrix Manager (link/unlink products to motorcycle models).
- [ ] Admin Module 3: Dealer Applications Manager (filter by status: Pending/Approved/Rejected, view applicant data, trigger PDF & ZIP downloads).
- [ ] Admin Module 4: Inquiries & Careers Inbox.
- [ ] Implement global error boundary, toast notifications, and responsive mobile testing.

#### Backend Tasks (Laravel 11)
- [ ] Protect all `/api/v1/admin/*` routes with Sanctum and `role:admin` middleware.
- [ ] Write Feature tests:
  - `AuthenticationTest`: verifies register, login, invalid credentials, rate-limiting, and token revocation.
  - `ProductCatalogTest`: verifies filtering and pagination.
  - `CompatibilityTest`: verifies two-way relation retrieval.
  - `DealerApplicationTest`: verifies document upload, order creation, PDF generation, and ZIP bundling.
- [ ] Finalize production optimization (`php artisan config:cache`, `route:cache`, Vite build bundle).

#### GitHub Git Push Checklist (Sprint 6)
1. `git checkout -b feat/admin-cms-dashboard`
   * `git commit -m "feat(auth): enforce sanctum admin role middleware and api route guards"`
   * `git commit -m "feat(admin): build product and compatibility matrix crud management"`
   * `git commit -m "feat(admin): build dealer application review table with status toggles"`
2. `git checkout -b test/quality-assurance-and-polish`
   * `git commit -m "test: add laravel feature tests for auth, catalog, compatibility, and dealer flow"`
   * `git commit -m "style: polish responsive design, dark mode contrast, and micro-animations"`
   * `git commit -m "chore: configure production build scripts and deployment documentation"`
3. *Final merge to `main` via PR: "Sprint 6: Admin Dashboard, Test Suite, and Final Release v1.0.0"*

---

## 7. GitHub Branching Strategy & Commit Guidelines

To make sure your GitHub repository reflects professional software engineering standards for your OJT evaluation:

### 7.1 Branching Convention
* `main`: Production-ready, stable releases (tagged with release versions: `v0.1.0`, `v1.0.0`).
* `develop`: Active integration branch where all completed sprint features are merged.
* `feature/<sprint-number>-<feature-name>`: E.g., `feature/s1-auth-system`.
* `fix/<sprint-number>-<bug-name>`: Bug fixes found during testing.
* `docs/<topic>`: Documentation, README updates, and proposal revisions.

### 7.2 Commit Message Standard (Conventional Commits)
Use the format: `<type>(<scope>): <short description>`
* `feat(auth)`: Add user login and sign up form with validation
* `feat(catalog)`: Add multi-attribute category filter
* `feat(compatibility)`: Add motorcycle model selector modal
* `feat(dealer)`: Implement document upload with validation
* `fix(auth)`: Fix token refresh handling in Axios interceptor
* `docs(readme)`: Update setup instructions for Laravel Sanctum

---

## 8. OJT Milestone Schedule & Weekly Log Mapping

| Week | Phase | Milestone Output | GitHub Deliverables |
| :---: | :--- | :--- | :--- |
| **Week 1-2** | Sprint 0 | Environment setup, Database ERD, Scaffoldings | Initial repo commit, migrations, seeders |
| **Week 3-4** | Sprint 1 | Authentication (Login/Sign Up) & Product Catalog | Auth API & UI, Token Interceptors, Catalog UI |
| **Week 5-6** | Sprint 2 | Two-Way Compatibility Engine & My Garage | Unit selector, Compatibility pivot queries |
| **Week 7-8** | Sprint 3 | About Us, Store Locator, Careers, Contact | Public brand pages, inquiry endpoints |
| **Week 9-10** | Sprint 4 | Dealer Portal & Wholesale Order Sheet | Dealer wizard, document uploader, order state |
| **Week 11-12** | Sprint 5 | Automated PDF Generator & ZIP Exporter | DomPDF integration, ZipArchive exporter |
| **Week 13-14** | Sprint 6 | Admin CMS Dashboard, Security & QA | Sanctum admin auth, CMS CRUD, test suite |

---

## 9. Definition of Done (DoD) for OJT Completion

Before marking each sprint as complete, the following criteria must be fulfilled:
1. **Clean Code & Linting:** Code follows PSR-12 for Laravel/PHP and ESLint/Prettier standards for React.
2. **API Specification Compliance:** All API endpoints return consistent JSON structures with proper HTTP status codes (`200 OK`, `201 Created`, `422 Unprocessable Content`, `401 Unauthorized`).
3. **Security Standards:** Passwords hashed with bcrypt, API tokens secured, route middleware enforced.
4. **Responsive UI:** UI rendered cleanly across mobile (375px+), tablet, and desktop viewports.
5. **Git Documentation:** All work committed under descriptive branch names with conventional commit messages and pushed to the remote GitHub repository.
6. **Supervisor Demo:** Working feature demonstrable on local development server.
