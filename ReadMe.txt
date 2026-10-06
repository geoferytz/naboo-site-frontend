# NABOO TECHNOLOGIES

## Complete Website Development Specification

**Project:** NABOO Corporate Website and Software Sales Platform
**Version:** 1.0
**Platform:** Web Application
**Deployment:** Contabo VPS — Ubuntu + Docker
**Frontend:** Angular 18 Standalone + TypeScript + SCSS
**Backend:** Java 21 + Spring Boot + GraphQL
**Database:** PostgreSQL
**Web Server:** Nginx

---

# 1. PROJECT OVERVIEW

## 1.1 Project Introduction

NABOO Technologies is a software development and IT services company that provides innovative digital solutions to businesses, hotels, and organizations.

The company initially offers two primary software products:

1. NABOO Sales & Management System
2. NABOO Hotel Management System

NABOO also provides professional IT services, including custom software development, website development, cloud deployment, software installation, system maintenance, and technical support.

The purpose of this project is to develop a modern, responsive, professional company website that serves as the company's official online presence and software sales platform.

The website must allow prospective customers to explore software products, compare packages, view prices, request demonstrations, and contact the company.

An administrative dashboard must allow authorized NABOO employees to manage website content, products, pricing, services, customer inquiries, and demo requests.

The application must be scalable so that new software products, services, and subscription packages can be added in the future without redesigning the entire website.

## 1.2 Project Objectives

The website must achieve the following objectives:

* Establish a professional online presence for NABOO Technologies.
* Present the company's software products and IT services.
* Display software features and subscription prices.
* Allow visitors to compare software packages.
* Allow prospective customers to request product demonstrations.
* Allow visitors to submit inquiries and request quotations.
* Provide an administrative dashboard for managing website content.
* Allow administrators to manage software products and prices dynamically.
* Provide a responsive user experience on desktop, tablet, and mobile devices.
* Support future online payments and subscription management.
* Support deployment using Docker on an Ubuntu VPS.

## 1.3 Target Users

The website will serve the following user categories:

| User                 | Description                                            |
| -------------------- | ------------------------------------------------------ |
| Website Visitor      | Anyone visiting the NABOO website                      |
| Prospective Customer | A person or business interested in purchasing software |
| Existing Customer    | A customer who uses NABOO products                     |
| Administrator        | An authorized employee who manages the website         |
| Content Manager      | An authorized user who manages website content         |
| Sales Representative | An employee who handles inquiries and demo requests    |

The public website must be accessible without requiring registration.

Only the administrative dashboard requires authentication.

---

# 2. TECHNOLOGY STACK

Use the following technologies throughout the project.

| Component               | Technology                                |
| ----------------------- | ----------------------------------------- |
| Frontend                | Angular 18                                |
| Frontend architecture   | Angular Standalone Components             |
| Programming language    | TypeScript                                |
| UI components           | Angular Material                          |
| Styling                 | SCSS                                      |
| Icons                   | Material Symbols / Angular Material Icons |
| Backend                 | Spring Boot 3                             |
| Backend language        | Java 21                                   |
| API                     | GraphQL                                   |
| Database                | PostgreSQL 16                             |
| ORM                     | Spring Data JPA                           |
| Authentication          | Spring Security                           |
| Authentication tokens   | JWT                                       |
| Database migrations     | Flyway                                    |
| Build tools             | Maven and npm                             |
| Web server              | Nginx                                     |
| Containerization        | Docker                                    |
| Container orchestration | Docker Compose                            |
| Hosting                 | Contabo VPS                               |
| Operating system        | Ubuntu 24.04 LTS                          |
| SSL                     | Let's Encrypt                             |
| Source control          | Git                                       |

Use compatible versions of Angular, Spring Boot, and their dependencies. Do not introduce unnecessary technologies or frameworks.

---

# 3. BRAND IDENTITY AND DESIGN SYSTEM

## 3.1 Company Branding

Company name: NABOO Technologies

Primary slogan:

**Smart Software. Smarter Business.**

Alternative supporting message:

**Empowering Businesses Through Technology.**

The website should communicate innovation, reliability, simplicity, professionalism, and technological expertise.

## 3.2 Color Palette

Use a modern technology-inspired color scheme.

| Color          | Hexadecimal | Usage                               |
| -------------- | ----------- | ----------------------------------- |
| Primary Navy   | #5b121a     | Main branding and headings          |
| Primary Blue   | #F5DABF     | Primary buttons and links           |
| Bright Blue    | #3B82F6     | Highlights and interactive elements |
| Teal           | #14B8A6     | Success indicators and accents      |
| White          | #FFFFFF     | Main backgrounds                    |
| Light Gray     | #F3F6FA     | Section backgrounds                 |
| Dark Gray      | #334155     | Body text                           |
| Muted Gray     | #64748B     | Secondary text                      |
| Border Gray    | #E2E8F0     | Card and form borders               |
| Success Green  | #16A34A     | Success notifications               |
| Warning Orange | #F59E0B     | Warning notifications               |
| Error Red      | #DC2626     | Error messages                      |

Use CSS variables or SCSS variables to centralize the color palette.

## 3.3 Typography

Use Inter as the primary font.

Typography guidelines:

* Large hero heading: 48–64px on desktop.
* Page heading: 36–48px.
* Section heading: 28–36px.
* Card heading: 20–24px.
* Body text: 15–18px.
* Small labels: 12–14px.

Use responsive typography for smaller screens.

## 3.4 Design Principles

The website must follow these principles:

1. Modern SaaS website design.
2. Clean and spacious layouts.
3. Consistent spacing and alignment.
4. Clear visual hierarchy.
5. Professional product cards.
6. Subtle shadows and rounded corners.
7. Smooth transitions and hover effects.
8. Mobile-first responsive design.
9. Accessible color contrast.
10. Consistent buttons, forms, and navigation.

Avoid excessive animations, unnecessary gradients, crowded sections, and distracting visual effects.

The website must look professional on both mobile phones and desktop computers.

---

# 4. WEBSITE STRUCTURE AND NAVIGATION

Create the following public website pages.

| Page           | Route                        | Description                          |
| -------------- | ---------------------------- | ------------------------------------ |
| Home           | `/`                          | Main landing page                    |
| About Us       | `/about`                     | Company information                  |
| Products       | `/products`                  | Software product catalogue           |
| Sales System   | `/products/sales-management` | Sales system details                 |
| Hotel System   | `/products/hotel-management` | Hotel system details                 |
| Services       | `/services`                  | IT services catalogue                |
| Pricing        | `/pricing`                   | Software pricing and packages        |
| Contact Us     | `/contact`                   | Contact information and inquiry form |
| Request Demo   | `/request-demo`              | Product demonstration request        |
| Privacy Policy | `/privacy-policy`            | Privacy policy                       |
| Terms          | `/terms`                     | Website and service terms            |
| Admin Login    | `/admin/login`               | Administrator authentication         |

The primary navigation should include:

* Home
* About
* Products
* Services
* Pricing
* Contact

Place two prominent buttons on the right side of the desktop navigation:

* Request a Demo
* Get Started

The navigation must collapse into a mobile menu on smaller screens.

Create a reusable navigation component and footer component.

---

# 5. HOMEPAGE REQUIREMENTS

The homepage is the most important public page.

It must introduce NABOO, showcase the available products, communicate the company's value, and encourage visitors to contact the company.

## 5.1 Navigation Bar

Create a sticky navigation bar.

Requirements:

* NABOO logo on the left.
* Navigation links in the center or right.
* Request Demo button.
* Get Started button.
* Mobile navigation menu.
* Smooth scrolling for homepage section links.
* Active navigation state.
* Responsive behavior.

Use a text-based NABOO logo initially if the final logo is not available.

Do not invent an existing official logo.

## 5.2 Hero Section

Create an attractive hero section with the following content.

**Main heading:**

Smart Software Solutions for Modern Businesses

**Description:**

NABOO provides innovative software solutions that simplify business operations, improve productivity, and help businesses grow. From sales and inventory management to hotel operations, we deliver technology designed to make business management easier.

**Primary button:**

Explore Our Products

Action: Navigate to `/products`.

**Secondary button:**

Request a Demo

Action: Navigate to `/request-demo`.

Add a professional visual on the right side of the hero section.

The visual should represent business software, using a dashboard mockup showing:

* Sales overview
* Revenue statistics
* Inventory status
* Business analytics
* Charts and graphs

Use original interface mockups or properly licensed images.

Do not display fabricated customer statistics or company achievements.

## 5.3 Company Benefits Section

Display three or four benefit cards.

### Efficiency

Automate routine business operations and reduce unnecessary manual work.

### Business Control

Monitor business activities and access important information from one platform.

### Better Decisions

Use reports and analytics to understand business performance.

### Scalable Technology

Choose solutions that can grow with your business requirements.

## 5.4 Featured Products Section

Display the two available software products.

Each product card must include:

* Product image or dashboard preview.
* Product name.
* Short description.
* Three to five key features.
* Starting price, if configured.
* View Details button.
* Request Demo button.

Product 1:

NABOO Sales & Management System

Product 2:

NABOO Hotel Management System

Product information and prices must come from the backend rather than being hardcoded in Angular.

If a product is unavailable or unpublished, do not display it on the public website.

## 5.5 Services Section

Display the company's main services:

* Custom Software Development
* Website Development
* Software Installation
* Cloud Hosting and Deployment
* IT Consultation
* Software Maintenance and Support

Each service card should include an icon, name, description, and Learn More button.

## 5.6 Why Choose NABOO Section

Create a section explaining the company's approach.

Use the following proposed content:

**Technology Designed Around Your Business**

NABOO focuses on developing practical software solutions that help businesses simplify operations and improve productivity.

Display the following principles:

* Practical business solutions.
* Reliable technology.
* Customer-focused development.
* Ongoing technical support.
* Scalable software architecture.

Do not make unverified claims about certifications, years of experience, customer numbers, or uptime.

## 5.7 Pricing Preview

Display a short preview of the available software packages.

Show the entry-level price for each product when a price is configured.

Include a View All Pricing button linking to `/pricing`.

## 5.8 Call-to-Action Section

Heading:

**Ready to Simplify Your Business?**

Description:

Discover how NABOO software solutions can help your business manage daily operations more efficiently.

Buttons:

* Explore Products
* Contact Us

## 5.9 Footer

The footer must include:

Company information:

* NABOO Technologies
* Company slogan
* Short company description

Quick links:

* Home
* About Us
* Products
* Services
* Pricing
* Contact Us

Products:

* Sales & Management System
* Hotel Management System

Legal:

* Privacy Policy
* Terms and Conditions

Contact:

* Company email
* Phone number
* Physical address, if provided

Social media:

* Facebook
* Instagram
* LinkedIn
* WhatsApp

Only show social links that have been configured by the administrator.

Include the current year automatically.

---

# 6. ABOUT US PAGE

Create a professional company profile page.

## 6.1 Page Header

Heading:

About NABOO Technologies

Description:

Discover our mission to simplify business operations through innovative software and technology services.

## 6.2 Company Overview

Use the following initial content:

NABOO Technologies is a technology company focused on developing software solutions that help businesses operate more efficiently.

We provide business management software, hotel management solutions, custom software development, website development, and IT services.

Our goal is to make technology practical, accessible, and useful for businesses of different sizes.

## 6.3 Mission

To empower businesses with reliable, innovative, and accessible technology that simplifies operations and supports sustainable growth.

## 6.4 Vision

To become a trusted technology partner for businesses by delivering intelligent software solutions that improve productivity and create opportunities for growth.

## 6.5 Core Values

Display five core values:

1. Innovation
2. Reliability
3. Integrity
4. Customer Satisfaction
5. Continuous Improvement

## 6.6 Call to Action

Include buttons linking to Products and Contact Us.

All company information should be editable through the administration dashboard.

---

# 7. PRODUCTS PAGE

Create a product catalogue that can support additional products in the future.

Route: `/products`

## 7.1 Product Listing

Display all published products in a responsive grid.

Each product card must include:

* Product image.
* Product name.
* Short description.
* Category.
* Starting price.
* Key features.
* Product status.
* View Details button.
* Request Demo button.

Add filters for:

* All Products
* Business Management
* Hospitality
* Other categories

Add search functionality.

The catalogue must retrieve products from the GraphQL API.

## 7.2 Product Details

Each product must have its own detail page.

The product page should include:

1. Product hero section.
2. Product description.
3. Key benefits.
4. Features.
5. Screenshots or interface previews.
6. Pricing packages.
7. Frequently asked questions.
8. Request Demo button.
9. Contact Sales button.

Product pages should use dynamic routing based on a product slug.

Example:

`/products/sales-management`

`/products/hotel-management`

The system must support new products without requiring new hardcoded pages for every product.

---

# 8. NABOO SALES & MANAGEMENT SYSTEM

Create a dedicated product page for the Sales & Management System.

Route: `/products/sales-management`

## 8.1 Product Introduction

Product name:

NABOO Sales & Management System

Tagline:

Manage Sales. Control Inventory. Grow Your Business.

Description:

NABOO Sales & Management System is designed to help businesses manage sales, inventory, purchases, customers, suppliers, expenses, and financial reports through a centralized platform.

## 8.2 Main Features

### Dashboard

Display:

* Total sales.
* Total purchases.
* Total expenses.
* Gross profit.
* Sales trends.
* Inventory summary.
* Recent transactions.

These are product capabilities to advertise only if they are actually implemented in the software.

### Sales Management

Features:

* Point of Sale.
* Sales transactions.
* Invoices.
* Receipts.
* Sales history.
* Customer selection.
* Sales reports.

### Inventory Management

Features:

* Product management.
* Stock tracking.
* Stock adjustments.
* Low-stock alerts.
* Stock movement history.
* Inventory valuation.

### Purchase Management

Features:

* Purchase orders.
* Supplier management.
* Purchase records.
* Goods received.
* Purchase reports.

### Customer Management

Features:

* Customer registration.
* Customer profiles.
* Purchase history.
* Customer account tracking.

### Expense Management

Features:

* Expense registration.
* Expense categories.
* Expense history.
* Expense reports.

### Financial Reports

Features:

* Sales reports.
* Purchase reports.
* Expense reports.
* Gross profit reports.
* Inventory valuation reports.

### User Management

Features:

* User accounts.
* Role-based access.
* Permissions.
* Activity records.

## 8.3 Product Benefits

Present benefits such as:

* Centralized business management.
* Faster sales processing.
* Better inventory visibility.
* Easier purchase tracking.
* Improved reporting.
* Access to business information.

Do not claim guaranteed increases in revenue or profits.

## 8.4 Product CTA

Include:

* Request a Demo
* View Pricing
* Contact Sales

Each button must function correctly.

---

# 9. NABOO HOTEL MANAGEMENT SYSTEM

Create a dedicated hotel software product page.

Route: `/products/hotel-management`

## 9.1 Product Introduction

Product name:

NABOO Hotel Management System

Tagline:

Simplify Hotel Operations. Enhance Guest Management.

Description:

NABOO Hotel Management System is designed to help hotels, lodges, and accommodation businesses manage reservations, rooms, guests, check-ins, check-outs, billing, housekeeping, and operational reports.

## 9.2 Main Features

### Hotel Dashboard

Display:

* Room occupancy.
* Available rooms.
* Current reservations.
* Check-ins.
* Check-outs.
* Revenue summary.
* Booking trends.

### Reservation Management

Features:

* Guest reservations.
* Booking calendar.
* Reservation status.
* Room allocation.
* Reservation history.
* Booking modifications.

### Room Management

Features:

* Room registration.
* Room categories.
* Room rates.
* Room availability.
* Room status.
* Maintenance status.

### Guest Management

Features:

* Guest registration.
* Guest profiles.
* Guest history.
* Contact information.
* Guest preferences, where appropriate.

### Check-in and Check-out

Features:

* Guest registration.
* Room assignment.
* Check-in processing.
* Check-out processing.
* Guest billing.

### Billing and Payments

Features:

* Guest invoices.
* Payment records.
* Outstanding balances.
* Receipts.
* Financial summaries.

### Housekeeping

Features:

* Room cleaning status.
* Room inspection status.
* Housekeeping assignments.
* Maintenance requests.

### Restaurant Management

If included in the actual product package:

* Restaurant orders.
* Food sales.
* Order tracking.
* Restaurant billing.

### Reports

Features:

* Occupancy reports.
* Reservation reports.
* Revenue reports.
* Guest reports.
* Payment reports.

## 9.3 Product Benefits

Present the following benefits:

* Centralized hotel operations.
* Easier reservation management.
* Improved room visibility.
* Simplified guest registration.
* Better billing management.
* Operational reporting.

## 9.4 Product CTA

Include:

* Request a Demo
* View Pricing
* Contact Sales

---

# 10. PRICING PAGE

Route: `/pricing`

Create a professional pricing page for all available software products.

The pricing page must retrieve its data from the backend.

Do not hardcode prices in Angular.

## 10.1 Pricing Page Header

Heading:

Simple and Transparent Software Pricing

Description:

Choose a software package that meets your business requirements. Explore our plans and find the right solution for your operations.

## 10.2 Pricing Categories

Provide two pricing categories:

1. Sales & Management System
2. Hotel Management System

Allow visitors to switch between the two categories using tabs or segmented controls.

## 10.3 Initial Sales & Management Pricing

Use the following proposed packages as initial configurable data.

| Feature           | Starter    | Business   | Enterprise |
| ----------------- | ---------- | ---------- | ---------- |
| Monthly price     | TSh 30,000 | TSh 60,000 | Custom     |
| Users             | 1          | 5          | Custom     |
| Products          | 500        | Unlimited  | Unlimited  |
| Sales             | Yes        | Yes        | Yes        |
| Inventory         | Basic      | Advanced   | Advanced   |
| Purchases         | Yes        | Yes        | Yes        |
| Customers         | Yes        | Yes        | Yes        |
| Expenses          | Yes        | Yes        | Yes        |
| Reports           | Basic      | Advanced   | Advanced   |
| Multiple branches | No         | Optional   | Yes        |
| Support           | Basic      | Priority   | Dedicated  |

These values are initial examples and must be editable by administrators.

Enterprise pricing should display "Contact Sales" rather than an invented amount.

## 10.4 Initial Hotel Management Pricing

| Feature               | Basic      | Professional | Enterprise |
| --------------------- | ---------- | ------------ | ---------- |
| Monthly price         | TSh 50,000 | TSh 100,000  | Custom     |
| Rooms                 | 10         | 50           | Unlimited  |
| Reservations          | Yes        | Yes          | Yes        |
| Guest management      | Yes        | Yes          | Yes        |
| Check-in/out          | Yes        | Yes          | Yes        |
| Billing               | Basic      | Advanced     | Advanced   |
| Restaurant management | No         | Yes          | Yes        |
| Housekeeping          | Basic      | Advanced     | Advanced   |
| Reports               | Basic      | Advanced     | Advanced   |
| Multi-property        | No         | No           | Yes        |

These prices are initial examples and must be editable.

## 10.5 Pricing Features

Every pricing card must display:

* Package name.
* Price.
* Billing frequency.
* Short description.
* Included features.
* Number of users, rooms, or other applicable limits.
* Support level.
* Get Started button.
* Request Demo button.

The Business and Professional packages may be visually highlighted using a "Popular" badge if configured by the administrator.

Do not automatically label a package as popular without an explicit configuration.

## 10.6 Billing Options

Support the following billing frequencies:

* Monthly
* Quarterly
* Annually
* One-time

The system should support different prices for each billing frequency.

For the first version, payment can be handled manually through a sales inquiry.

Future online payment integration must be possible without changing the entire pricing architecture.

## 10.7 Additional Services Pricing

Create a separate section for additional services.

| Service                     | Displayed Price  |
| --------------------------- | ---------------- |
| Software Installation       | From TSh 50,000  |
| Website Development         | Request a Quote  |
| Custom Software Development | Request a Quote  |
| Server Deployment           | Request a Quote  |
| Software Customization      | Request a Quote  |
| Technical Support           | Based on Package |

All prices and descriptions must be editable through the admin dashboard.

---

# 11. SERVICES PAGE

Route: `/services`

Create a professional page for NABOO's IT services.

## 11.1 Custom Software Development

Description:

We develop customized software solutions designed to meet specific business and organizational requirements.

Features:

* Business process automation.
* Web application development.
* Database design.
* API development.
* Software integration.

CTA: Request a Quote.

## 11.2 Website Development

Description:

We design and develop responsive websites for businesses, organizations, hotels, and other institutions.

Features:

* Corporate websites.
* Business websites.
* Hotel websites.
* E-commerce websites.
* Website maintenance.

CTA: Request a Quote.

## 11.3 Software Installation

Description:

Professional software installation and configuration services to help businesses deploy their applications.

Features:

* Application installation.
* Server configuration.
* Database configuration.
* Application setup.
* Deployment support.

CTA: Request Installation.

## 11.4 Cloud Hosting and Deployment

Description:

Deployment and configuration of business applications on cloud infrastructure.

Features:

* VPS configuration.
* Docker deployment.
* Nginx configuration.
* SSL configuration.
* Application deployment.

CTA: Request Hosting Consultation.

## 11.5 IT Consultation

Description:

Technical consultation to help businesses identify suitable digital solutions.

CTA: Contact Us.

## 11.6 Maintenance and Technical Support

Description:

Ongoing maintenance and technical support to help businesses keep their software operational.

Features:

* Bug fixes.
* Application updates.
* Technical troubleshooting.
* System maintenance.
* Deployment assistance.

CTA: Request Support.

---

# 12. CONTACT PAGE

Route: `/contact`

Create a professional contact page.

## 12.1 Contact Information

Display configurable contact information:

* Company name.
* Phone number.
* Email address.
* Physical address.
* WhatsApp number.
* Business hours.
* Social media links.

Do not invent contact details. Use editable configuration fields.

## 12.2 Contact Form

Fields:

| Field           | Type      | Required |
| --------------- | --------- | -------- |
| Full Name       | Text      | Yes      |
| Email           | Email     | Yes      |
| Phone           | Telephone | No       |
| Company         | Text      | No       |
| Subject         | Dropdown  | Yes      |
| Product         | Dropdown  | No       |
| Message         | Textarea  | Yes      |
| Privacy Consent | Checkbox  | Yes      |

Subject options:

* Product Inquiry
* Pricing Inquiry
* Custom Software
* Website Development
* Technical Support
* General Inquiry
* Other

On submission:

1. Validate the form.
2. Send the request to the backend.
3. Store the inquiry in PostgreSQL.
4. Assign a unique inquiry reference.
5. Notify the visitor that the request was received.
6. Optionally send an email notification to the configured company address.
7. Make the inquiry visible in the admin dashboard.

Display appropriate loading, success, and error messages.

Implement server-side validation and spam protection.

---

# 13. REQUEST DEMO PAGE

Route: `/request-demo`

Create a dedicated product demonstration request page.

## 13.1 Form Fields

| Field                  | Type      | Required |
| ---------------------- | --------- | -------- |
| Full Name              | Text      | Yes      |
| Business Name          | Text      | Yes      |
| Email                  | Email     | Yes      |
| Phone                  | Telephone | Yes      |
| Product                | Dropdown  | Yes      |
| Business Type          | Dropdown  | No       |
| Number of Employees    | Dropdown  | No       |
| Preferred Date         | Date      | No       |
| Preferred Time         | Time      | No       |
| Additional Information | Textarea  | No       |
| Privacy Consent        | Checkbox  | Yes      |

Product options should be populated dynamically from published products.

## 13.2 Submission Workflow

When a visitor submits a demo request:

1. Validate all required fields.
2. Submit the request to the GraphQL backend.
3. Save the request in the database.
4. Generate a unique request reference.
5. Set the initial status to `PENDING`.
6. Display a confirmation message.
7. Send an email notification if email is configured.
8. Make the request available in the admin dashboard.

Example confirmation:

"Thank you for your interest in NABOO. Your demonstration request has been received. Our team will contact you using the details you provided."

Do not automatically confirm an appointment until an administrator has approved the requested time.

---

# 14. ADMINISTRATION DASHBOARD

Route prefix: `/admin`

The administrative dashboard is a critical part of the project.

It must be protected by authentication and authorization.

## 14.1 Admin Login

Route:

`/admin/login`

Features:

* Email or username.
* Password.
* Show/hide password.
* Login button.
* Form validation.
* Loading indicator.
* Authentication error messages.
* Secure session handling.

Use Spring Security and JWT authentication.

Protect all admin GraphQL operations on the backend.

Do not rely solely on Angular route guards for authorization.

## 14.2 Admin Dashboard

Route:

`/admin/dashboard`

Display:

* Total published products.
* Total active pricing packages.
* Total services.
* New inquiries.
* Pending demo requests.
* Recently submitted inquiries.
* Recent demo requests.

Only display real database information.

Do not show fabricated analytics.

## 14.3 Product Management

Route:

`/admin/products`

Administrators should be able to:

* Add products.
* Edit products.
* View products.
* Publish products.
* Unpublish products.
* Archive products.
* Upload product images.
* Manage product features.
* Manage product descriptions.
* Configure product categories.
* Set product display order.
* Manage product slugs.

Product fields:

| Field             | Type      |
| ----------------- | --------- |
| Product ID        | UUID      |
| Product Name      | String    |
| Slug              | String    |
| Short Description | Text      |
| Full Description  | Text      |
| Category          | String    |
| Product Image     | String    |
| Status            | Enum      |
| Display Order     | Integer   |
| Featured          | Boolean   |
| Created At        | Timestamp |
| Updated At        | Timestamp |

Product status:

* DRAFT
* PUBLISHED
* ARCHIVED

Only published products should appear on the public website.

## 14.4 Pricing Management

Route:

`/admin/pricing`

Administrators should be able to:

* Create pricing packages.
* Edit pricing packages.
* Activate or deactivate packages.
* Assign packages to products.
* Configure monthly pricing.
* Configure annual pricing.
* Configure quarterly pricing.
* Configure one-time pricing.
* Configure package features.
* Configure limits.
* Configure support levels.
* Set a featured package.
* Set display order.

Package fields:

* Package name.
* Product.
* Price.
* Currency.
* Billing frequency.
* Package description.
* User limit.
* Room limit.
* Product limit.
* Included features.
* Support level.
* Active status.
* Featured status.
* Display order.

Support custom enterprise packages where the price is displayed as "Contact Sales".

Store monetary values using an appropriate decimal type, never floating-point values.

## 14.5 Service Management

Route:

`/admin/services`

Administrators should be able to:

* Create services.
* Edit services.
* Delete or archive services.
* Upload service images.
* Configure service descriptions.
* Configure starting prices.
* Set service categories.
* Publish or unpublish services.
* Set display order.

## 14.6 Inquiry Management

Route:

`/admin/inquiries`

Display all customer inquiries in a searchable and filterable table.

Columns:

* Reference Number.
* Customer Name.
* Email.
* Phone.
* Subject.
* Product.
* Date Submitted.
* Status.
* Assigned Employee.
* Actions.

Inquiry statuses:

* NEW
* IN_PROGRESS
* RESPONDED
* CLOSED
* SPAM

Administrator actions:

* View inquiry.
* Update status.
* Add internal notes.
* Assign an employee.
* Record follow-up information.
* Close inquiry.

Allow filtering by status, date, product, and subject.

## 14.7 Demo Request Management

Route:

`/admin/demo-requests`

Display:

* Request reference.
* Customer name.
* Company name.
* Product.
* Contact information.
* Requested date.
* Requested time.
* Submission date.
* Status.
* Assigned employee.

Statuses:

* PENDING
* APPROVED
* RESCHEDULED
* COMPLETED
* CANCELLED

Administrator actions:

* View request.
* Approve request.
* Propose a different date.
* Update status.
* Assign a sales representative.
* Add internal notes.
* Record the demo outcome.

## 14.8 Website Settings

Route:

`/admin/settings`

Allow authorized administrators to manage:

* Company name.
* Company slogan.
* Company description.
* Logo.
* Favicon.
* Company email.
* Company phone.
* WhatsApp number.
* Physical address.
* Social media links.
* Business hours.
* SEO metadata.
* Footer content.
* Contact email recipient.
* Currency display settings.

Validate all settings on the backend.

## 14.9 User Management

Route:

`/admin/users`

Allow authorized administrators to:

* Create users.
* Edit users.
* Activate users.
* Deactivate users.
* Assign roles.
* Reset passwords.

Roles:

ADMIN
CONTENT_MANAGER
SALES_MANAGER
SUPPORT_AGENT

Permissions must be enforced on the backend.

An administrator must be able to access all administrative functions.

Content managers should manage products, services, pricing, and website content.

Sales managers should manage inquiries and demo requests.

Support agents should have access only to the functions assigned to them.

---

# 15. DATABASE DESIGN

Use PostgreSQL with UUID primary keys.

Use Flyway to manage database schema migrations.

Create the following core tables.

## 15.1 users

| Column        | Type           |
| ------------- | -------------- |
| id            | UUID           |
| full_name     | VARCHAR        |
| email         | VARCHAR UNIQUE |
| password_hash | VARCHAR        |
| role          | VARCHAR        |
| active        | BOOLEAN        |
| created_at    | TIMESTAMP      |
| updated_at    | TIMESTAMP      |

Never store plain-text passwords.

## 15.2 products

| Column            | Type           |
| ----------------- | -------------- |
| id                | UUID           |
| name              | VARCHAR        |
| slug              | VARCHAR UNIQUE |
| short_description | TEXT           |
| description       | TEXT           |
| category          | VARCHAR        |
| image_url         | TEXT           |
| status            | VARCHAR        |
| featured          | BOOLEAN        |
| display_order     | INTEGER        |
| created_at        | TIMESTAMP      |
| updated_at        | TIMESTAMP      |

## 15.3 product_features

| Column        | Type    |
| ------------- | ------- |
| id            | UUID    |
| product_id    | UUID    |
| name          | VARCHAR |
| description   | TEXT    |
| icon          | VARCHAR |
| display_order | INTEGER |
| active        | BOOLEAN |

A product can have multiple features.

## 15.4 pricing_packages

| Column            | Type          |
| ----------------- | ------------- |
| id                | UUID          |
| product_id        | UUID          |
| name              | VARCHAR       |
| description       | TEXT          |
| price             | DECIMAL(19,2) |
| currency          | VARCHAR       |
| billing_frequency | VARCHAR       |
| custom_price      | BOOLEAN       |
| active            | BOOLEAN       |
| featured          | BOOLEAN       |
| display_order     | INTEGER       |
| created_at        | TIMESTAMP     |
| updated_at        | TIMESTAMP     |

## 15.5 pricing_features

| Column        | Type    |
| ------------- | ------- |
| id            | UUID    |
| package_id    | UUID    |
| feature_name  | VARCHAR |
| feature_value | VARCHAR |
| included      | BOOLEAN |
| display_order | INTEGER |

## 15.6 services

| Column            | Type           |
| ----------------- | -------------- |
| id                | UUID           |
| name              | VARCHAR        |
| slug              | VARCHAR UNIQUE |
| short_description | TEXT           |
| description       | TEXT           |
| image_url         | TEXT           |
| starting_price    | DECIMAL(19,2)  |
| currency          | VARCHAR        |
| price_type        | VARCHAR        |
| status            | VARCHAR        |
| display_order     | INTEGER        |
| created_at        | TIMESTAMP      |
| updated_at        | TIMESTAMP      |

## 15.7 inquiries

| Column           | Type           |
| ---------------- | -------------- |
| id               | UUID           |
| reference_number | VARCHAR UNIQUE |
| full_name        | VARCHAR        |
| email            | VARCHAR        |
| phone            | VARCHAR        |
| company          | VARCHAR        |
| subject          | VARCHAR        |
| product_id       | UUID NULL      |
| message          | TEXT           |
| status           | VARCHAR        |
| assigned_user_id | UUID NULL      |
| created_at       | TIMESTAMP      |
| updated_at       | TIMESTAMP      |

## 15.8 demo_requests

| Column                 | Type           |
| ---------------------- | -------------- |
| id                     | UUID           |
| reference_number       | VARCHAR UNIQUE |
| full_name              | VARCHAR        |
| company_name           | VARCHAR        |
| email                  | VARCHAR        |
| phone                  | VARCHAR        |
| product_id             | UUID           |
| business_type          | VARCHAR        |
| preferred_date         | DATE NULL      |
| preferred_time         | TIME NULL      |
| additional_information | TEXT           |
| status                 | VARCHAR        |
| assigned_user_id       | UUID NULL      |
| created_at             | TIMESTAMP      |
| updated_at             | TIMESTAMP      |

## 15.9 inquiry_notes

| Column     | Type      |
| ---------- | --------- |
| id         | UUID      |
| inquiry_id | UUID      |
| user_id    | UUID      |
| note       | TEXT      |
| created_at | TIMESTAMP |

## 15.10 demo_request_notes

| Column          | Type      |
| --------------- | --------- |
| id              | UUID      |
| demo_request_id | UUID      |
| user_id         | UUID      |
| note            | TEXT      |
| created_at      | TIMESTAMP |

## 15.11 company_settings

| Column        | Type           |
| ------------- | -------------- |
| id            | UUID           |
| setting_key   | VARCHAR UNIQUE |
| setting_value | TEXT           |
| updated_at    | TIMESTAMP      |

## 15.12 audit_logs

| Column      | Type      |
| ----------- | --------- |
| id          | UUID      |
| user_id     | UUID NULL |
| action      | VARCHAR   |
| entity_type | VARCHAR   |
| entity_id   | UUID NULL |
| description | TEXT      |
| created_at  | TIMESTAMP |

Record important administrative actions such as product publication, pricing changes, user management, and status updates.

Add appropriate indexes and foreign key constraints.

Use database migrations to create and update all tables.

---

# 16. GRAPHQL API DESIGN

Use Spring Boot GraphQL.

The API should support public queries and protected administrative operations.

## 16.1 Public Queries

Implement:

`products`

Returns published products.

`productBySlug(slug: String!)`

Returns one published product and its details.

`featuredProducts`

Returns featured published products.

`services`

Returns published services.

`serviceBySlug(slug: String!)`

Returns a published service.

`pricingPackages(productSlug: String!)`

Returns active pricing packages for a published product.

`companySettings`

Returns public company information.

`featuredPricingPackages`

Returns selected packages for homepage display.

## 16.2 Public Mutations

Implement:

`submitInquiry(input: InquiryInput!)`

Creates a customer inquiry.

`requestDemo(input: DemoRequestInput!)`

Creates a demo request.

`requestQuotation(input: QuotationInput!)`

Creates a quotation inquiry.

All public mutations must validate input and use spam protection and rate limiting.

## 16.3 Admin Queries

Implement protected queries:

* `adminDashboard`
* `adminProducts`
* `adminProduct(id: ID!)`
* `adminPricingPackages`
* `adminServices`
* `adminInquiries`
* `adminInquiry(id: ID!)`
* `adminDemoRequests`
* `adminDemoRequest(id: ID!)`
* `adminUsers`
* `adminCompanySettings`
* `adminAuditLogs`

Support pagination, sorting, and filtering for administrative lists.

## 16.4 Admin Mutations

Implement:

### Products

* `createProduct`
* `updateProduct`
* `publishProduct`
* `unpublishProduct`
* `archiveProduct`
* `deleteProduct`, if deletion is safe and permitted

### Pricing

* `createPricingPackage`
* `updatePricingPackage`
* `activatePricingPackage`
* `deactivatePricingPackage`
* `deletePricingPackage`

### Services

* `createService`
* `updateService`
* `publishService`
* `unpublishService`
* `archiveService`

### Inquiries

* `updateInquiryStatus`
* `assignInquiry`
* `addInquiryNote`

### Demo Requests

* `updateDemoRequestStatus`
* `assignDemoRequest`
* `addDemoRequestNote`

### Users

* `createUser`
* `updateUser`
* `activateUser`
* `deactivateUser`
* `changeUserRole`
* `resetUserPassword`

### Settings

* `updateCompanySettings`

All administrative mutations must enforce authorization and record relevant actions in the audit log.

---

# 17. FRONTEND ARCHITECTURE

Use Angular standalone components and lazy-loaded routes.

Organize the frontend into the following logical areas.

## 17.1 Core

Contains:

* GraphQL service.
* Authentication service.
* Application configuration.
* Route guards.
* Error handling.
* HTTP interceptors.
* Notification service.
* Environment configuration.

## 17.2 Shared

Contains reusable components:

* Navbar.
* Footer.
* Buttons.
* Product cards.
* Pricing cards.
* Service cards.
* Loading indicators.
* Confirmation dialogs.
* Form controls.
* Empty-state components.
* Pagination.
* Error messages.

## 17.3 Public Pages

Contains:

* Home.
* About.
* Products.
* Product details.
* Services.
* Pricing.
* Contact.
* Demo request.
* Legal pages.

## 17.4 Admin Pages

Contains:

* Login.
* Dashboard.
* Products.
* Product form.
* Pricing.
* Pricing form.
* Services.
* Service form.
* Inquiries.
* Inquiry details.
* Demo requests.
* Demo details.
* Users.
* Settings.
* Audit logs.

## 17.5 State Management

Use Angular services and RxJS for the initial application.

Avoid adding a complex state management library unless the application's requirements justify it.

Use typed GraphQL queries and mutations.

Create reusable services for:

* Products.
* Pricing.
* Services.
* Inquiries.
* Demo requests.
* Authentication.
* Company settings.

---

# 18. UI AND UX REQUIREMENTS

The website must be fully responsive.

## 18.1 Desktop

Support common desktop screen sizes.

Requirements:

* Horizontal navigation.
* Multi-column product cards.
* Professional dashboard layouts.
* Pricing comparison tables.
* Readable typography.
* Consistent spacing.

## 18.2 Tablet

Requirements:

* Responsive navigation.
* Two-column product layouts where appropriate.
* Flexible pricing cards.
* Responsive admin tables.

## 18.3 Mobile

Requirements:

* Mobile navigation menu.
* Single-column product cards.
* Stacked pricing cards.
* Touch-friendly buttons.
* Responsive forms.
* No horizontal page overflow.
* Tables that adapt to narrow screens.
* Appropriate spacing and readable text.

## 18.4 Accessibility

Implement:

* Semantic HTML.
* Keyboard navigation.
* Visible focus indicators.
* Form labels.
* Appropriate ARIA attributes.
* Sufficient color contrast.
* Accessible error messages.
* Alt text for meaningful images.

## 18.5 Loading and Error States

All API-driven pages must provide:

* Loading indicators.
* Empty states.
* Error states.
* Retry options where appropriate.
* Success notifications.

Do not leave the user with a blank page if the API fails.

---

# 19. SEARCH ENGINE OPTIMIZATION

Implement basic SEO for public pages.

Requirements:

* Page-specific titles.
* Meta descriptions.
* Canonical URLs.
* Open Graph metadata.
* Appropriate heading hierarchy.
* Descriptive image alt text.
* Sitemap.
* Robots.txt.
* Structured data where applicable.

Example homepage title:

NABOO Technologies | Smart Software Solutions

Example description:

Discover NABOO business management software, hotel management systems, custom software development, and professional IT services.

Product pages must have unique SEO titles and descriptions.

Where practical, use server-side rendering or prerendering for public Angular pages to improve search engine discoverability.

Do not expose admin pages to search engines.

---

# 20. SECURITY REQUIREMENTS

Security must be considered throughout the application.

## 20.1 Authentication

Use Spring Security for administrative authentication.

Requirements:

* Secure password hashing using BCrypt or an equivalent secure algorithm.
* JWT-based authentication.
* Short-lived access tokens.
* Secure refresh-token handling if refresh tokens are implemented.
* Logout functionality.
* Account activation and deactivation.
* Protection against brute-force login attempts.

Prefer secure, HttpOnly cookies for browser token storage where the architecture supports them. Configure CSRF protection appropriately when using cookies.

Do not store administrative passwords or secrets in frontend source code.

## 20.2 Authorization

Enforce role-based access control on the backend.

Protect every administrative query and mutation.

Angular route guards are only a user-interface convenience and must not be treated as the security boundary.

## 20.3 Input Validation

Validate all submitted information on both the frontend and backend.

Requirements:

* Validate email addresses.
* Enforce field length limits.
* Reject invalid product identifiers.
* Validate pricing values.
* Sanitize content rendered on the website.
* Prevent unsafe file uploads.

## 20.4 API Security

Implement:

* HTTPS.
* Rate limiting.
* CORS restrictions.
* GraphQL query depth limits.
* Appropriate GraphQL complexity limits.
* Error handling that does not expose sensitive details.
* Authentication and authorization checks.
* Input validation.

## 20.5 File Upload Security

If product images or company logos are uploaded:

* Restrict accepted image formats.
* Validate file size.
* Verify file content.
* Generate safe filenames.
* Prevent executable uploads.
* Store uploaded files outside the application source directory.

## 20.6 Secrets

Store production secrets in protected environment variables or a secure secrets manager.

Never commit passwords, database credentials, JWT signing keys, or SMTP passwords to Git.

---

# 21. EMAIL NOTIFICATIONS

Create an email notification service in Spring Boot.

The service should support SMTP configuration through environment variables.

Send emails for:

1. New customer inquiries.
2. New demo requests.
3. Inquiry acknowledgments.
4. Demo request acknowledgments.
5. Demo approval or rescheduling.
6. Password reset requests, if password reset is implemented.

Email content should use professional NABOO branding.

Email configuration must be optional during local development.

If SMTP is unavailable, the application must still save customer inquiries and demo requests successfully.

Log email delivery failures without exposing credentials or sensitive message content.

---

# 22. DOCKER DEPLOYMENT

The entire application must be deployable using Docker Compose on Ubuntu 24.04.

## 22.1 Docker Services

Create the following containers:

| Container      | Purpose                             |
| -------------- | ----------------------------------- |
| naboo-frontend | Angular production application      |
| naboo-backend  | Spring Boot GraphQL API             |
| naboo-postgres | PostgreSQL database                 |
| naboo-nginx    | Reverse proxy and HTTPS termination |

Use separate Docker networks where appropriate.

Only publish necessary public ports.

Do not expose PostgreSQL publicly.

## 22.2 Deployment Directory

Use the following deployment structure:

```text
/opt/naboo/
│
├── docker-compose.yml
├── .env
├── frontend/
│   └── Dockerfile
├── backend/
│   └── Dockerfile
├── nginx/
│   ├── default.conf
│   └── ssl/
├── backups/
└── uploads/
```

## 22.3 Docker Compose Requirements

The Docker Compose configuration must:

* Build the Angular frontend.
* Build the Spring Boot backend.
* Start PostgreSQL.
* Configure internal networking.
* Configure persistent database storage.
* Configure environment variables.
* Configure container health checks.
* Use restart policies.
* Configure Nginx.
* Support HTTPS.
* Avoid exposing internal service ports publicly.

Use a PostgreSQL named volume for database persistence.

## 22.4 Production Environment Variables

Provide an `.env.example` file containing placeholders for:

```env
APP_ENV=production

POSTGRES_DB=naboo
POSTGRES_USER=naboo_user
POSTGRES_PASSWORD=CHANGE_ME

JWT_SECRET=CHANGE_ME

APP_DOMAIN=example.com

MAIL_HOST=
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_FROM=

COMPANY_EMAIL=
COMPANY_PHONE=
```

Do not commit the real `.env` file.

## 22.5 Nginx

Configure Nginx to:

* Serve the Angular application.
* Support Angular client-side routing.
* Proxy GraphQL requests to Spring Boot.
* Support HTTPS.
* Redirect HTTP to HTTPS.
* Set appropriate request headers.
* Configure request body limits.
* Support WebSockets if needed.

## 22.6 Deployment Commands

Document the deployment procedure.

Initial deployment:

```bash
docker compose build
docker compose up -d
```

View running containers:

```bash
docker compose ps
```

View logs:

```bash
docker compose logs -f
```

Rebuild the application:

```bash
docker compose build
```

Restart the application:

```bash
docker compose up -d
```

Provide a safe rollback procedure.

Never delete production database volumes during routine application updates.

---

# 23. DATABASE BACKUPS

Implement a documented PostgreSQL backup process.

Requirements:

* Automated daily database backups.
* Timestamped backup files.
* Backup retention policy.
* Backup storage outside the database container.
* Recommended off-server backup storage.
* Documented restoration procedure.

Use PostgreSQL's `pg_dump` for logical backups.

Provide scripts for backup and restoration.

Do not assume that a Docker volume alone is a sufficient backup.

---

# 24. TESTING REQUIREMENTS

The application must include automated tests.

## 24.1 Angular Tests

Test:

* Navigation.
* Product listing.
* Product detail pages.
* Pricing display.
* Contact form validation.
* Demo request form validation.
* Admin route protection.
* Authentication interface.
* Loading and error states.

## 24.2 Spring Boot Tests

Test:

* Authentication.
* Authorization.
* Product CRUD operations.
* Pricing CRUD operations.
* Service CRUD operations.
* Inquiry submission.
* Demo request submission.
* Input validation.
* Database integration.
* Error handling.

## 24.3 Integration Tests

Verify:

* Angular can communicate with the GraphQL API.
* Public product queries return published products.
* Public forms create database records.
* Unauthorized users cannot access admin operations.
* Administrators can manage products and pricing.
* PostgreSQL data persists after container restarts.

## 24.4 End-to-End Tests

Test these essential user journeys:

1. A visitor opens the homepage.
2. A visitor views available products.
3. A visitor opens the Sales & Management System page.
4. A visitor compares pricing packages.
5. A visitor submits a demo request.
6. A visitor submits a contact inquiry.
7. An administrator logs in.
8. An administrator creates a product.
9. An administrator updates a price.
10. An administrator reviews a demo request.

---

# 25. PERFORMANCE REQUIREMENTS

Optimize the website for fast loading and reliable operation.

Requirements:

* Lazy-load Angular routes.
* Use production builds.
* Optimize images.
* Use modern image formats where appropriate.
* Minimize unnecessary JavaScript.
* Use pagination for large administrative lists.
* Add database indexes for frequently searched fields.
* Avoid unnecessary GraphQL requests.
* Use caching for suitable public content.
* Configure Nginx compression.
* Avoid loading large images unnecessarily.

The public website should remain usable on slower mobile connections.

---

# 26. CONFIGURATION AND ENVIRONMENTS

Support three environments:

## Development

Local development using Angular, Spring Boot, and PostgreSQL.

Requirements:

* Local configuration.
* Development database.
* Debug logging.
* Sample data.
* No production credentials.

## Testing

A separate environment for automated testing and manual acceptance testing.

Requirements:

* Isolated test database.
* Automated test execution.
* Test environment variables.
* Repeatable test setup.

## Production

Hosted on the Contabo VPS.

Requirements:

* HTTPS.
* Production database.
* Protected secrets.
* Restricted administrative access.
* Production logging.
* Database backups.
* Monitoring.
* Secure deployment.

Never use production credentials in development or test environments.

---

# 27. INITIAL DATA

Provide a database seeding mechanism for the initial products and services.

Initial products:

1. NABOO Sales & Management System
2. NABOO Hotel Management System

Initial services:

1. Custom Software Development
2. Website Development
3. Software Installation
4. Cloud Hosting and Deployment
5. IT Consultation
6. Maintenance and Technical Support

Initial pricing:

Sales & Management:

* Starter: TSh 30,000/month
* Business: TSh 60,000/month
* Enterprise: Contact Sales

Hotel Management:

* Basic: TSh 50,000/month
* Professional: TSh 100,000/month
* Enterprise: Contact Sales

These are sample initial values. Make them configurable and editable.

Seed the data only when it is absent. Do not overwrite existing administrator changes every time the application starts.

Create an initial administrator through a secure initialization process.

Do not use a publicly known default administrator password.

---

# 28. ADMIN DASHBOARD DESIGN

The admin dashboard should have a professional layout.

Desktop layout:

* Sidebar navigation on the left.
* Header with NABOO branding.
* Current administrator profile.
* Notifications area.
* Main content area.
* Breadcrumb navigation.

Sidebar:

* Dashboard
* Products
* Pricing
* Services
* Inquiries
* Demo Requests
* Users
* Website Settings
* Audit Logs
* Logout

Use a collapsible sidebar.

On mobile, convert the sidebar into a navigation drawer.

Use Angular Material components where appropriate:

* MatSidenav
* MatToolbar
* MatTable
* MatPaginator
* MatSort
* MatDialog
* MatFormField
* MatInput
* MatSelect
* MatButton
* MatIcon
* MatSnackBar

Use reusable form components where possible.

All admin tables should support pagination and filtering.

---

# 29. CONTENT MANAGEMENT

The admin dashboard should allow administrators to manage public website content without modifying source code.

Manageable content should include:

* Homepage hero title.
* Homepage hero description.
* Company description.
* Company mission.
* Company vision.
* Company values.
* Product descriptions.
* Product features.
* Product images.
* Service descriptions.
* Pricing packages.
* Company contact information.
* Footer links.
* SEO metadata.

Use database-backed content management for fields that are intended to change frequently.

Do not create an unnecessarily complex general-purpose CMS for the initial version.

---

# 30. FUTURE DEVELOPMENT

Design the architecture to support future features.

Potential future modules:

* Customer registration.
* Customer login.
* Online subscriptions.
* Mobile money payments.
* Automated license generation.
* Subscription renewals.
* Customer software portals.
* Customer support tickets.
* Software downloads.
* Customer billing history.
* Automated invoices.
* Discount codes.
* Referral programs.
* Additional software products.

These features should be considered in the architecture but must not delay delivery of the initial website.

Do not implement fake payment processing.

---

# 31. PROJECT DELIVERY PHASES

Develop the project in the following phases.

## Phase 1: Project Foundation

* Initialize Angular standalone application.
* Initialize Spring Boot application.
* Configure PostgreSQL.
* Configure GraphQL.
* Establish the Docker development environment.
* Implement application configuration.
* Establish the branding and design system.

Deliverable: A working project foundation.

## Phase 2: Public Website

* Navigation.
* Homepage.
* About page.
* Product catalogue.
* Product detail pages.
* Services page.
* Pricing page.
* Contact page.
* Demo request page.
* Footer.
* Responsive layouts.

Deliverable: A complete public website connected to the backend.

## Phase 3: Backend and Database

* Database schema.
* Flyway migrations.
* GraphQL queries.
* GraphQL mutations.
* Product management.
* Pricing management.
* Services management.
* Contact inquiry management.
* Demo request management.
* Email notifications.

Deliverable: A fully functional backend.

## Phase 4: Administration Dashboard

* Admin login.
* Authentication.
* Authorization.
* Dashboard.
* Product management.
* Pricing management.
* Service management.
* Inquiry management.
* Demo request management.
* User management.
* Company settings.
* Audit logs.

Deliverable: A complete administrative interface.

## Phase 5: Security and Testing

* Input validation.
* Authentication tests.
* Authorization tests.
* API integration tests.
* Responsive testing.
* Form testing.
* Error handling.
* Performance improvements.

Deliverable: A tested application ready for deployment.

## Phase 6: Production Deployment

* Production Dockerfiles.
* Docker Compose configuration.
* Nginx configuration.
* Domain configuration.
* SSL certificate.
* Database initialization.
* Database backups.
* Deployment documentation.

Deliverable: A running NABOO website on the Contabo VPS.

---

# 32. ACCEPTANCE CRITERIA

The project will be considered complete when all the following conditions are satisfied.

### Public Website

* Homepage displays the company introduction.
* Products are loaded dynamically.
* Product detail pages display the correct information.
* Pricing is loaded from the backend.
* Services are loaded dynamically.
* Contact forms work.
* Demo request forms work.
* All navigation links work.
* The website is responsive.
* SEO metadata is configured.
* Legal pages are available.

### Administration

* Administrators can log in securely.
* Unauthorized users cannot access admin operations.
* Administrators can create and edit products.
* Administrators can publish and unpublish products.
* Administrators can manage pricing packages.
* Administrators can manage services.
* Administrators can review customer inquiries.
* Administrators can manage demo requests.
* Administrators can manage company settings.
* Administrative actions are logged.

### Backend

* GraphQL API works.
* Database migrations work.
* Input validation works.
* Authorization works.
* Errors are handled appropriately.
* Data persists after restarts.
* Tests pass.

### Deployment

* Docker Compose starts all required services.
* Nginx serves the website.
* GraphQL requests reach Spring Boot.
* PostgreSQL is not publicly exposed.
* HTTPS works.
* Database backups can be restored.
* Deployment instructions are complete.

---

# 33. INSTRUCTIONS FOR DEVIN AI

You are the lead software architect and full-stack developer responsible for building the entire NABOO Technologies website described in this document.

Your task is to implement a complete, production-oriented application, not just a static website or a visual prototype.

Follow these instructions strictly.

## Development Rules

1. Use Angular 18 standalone components and TypeScript for the frontend.
2. Use SCSS for styling.
3. Use Angular Material for suitable UI components.
4. Use Java 21 and Spring Boot for the backend.
5. Use Spring GraphQL as the primary API.
6. Use PostgreSQL as the database.
7. Use Flyway for database migrations.
8. Use Spring Security for authentication and authorization.
9. Use Docker Compose for local and production deployment.
10. Use Nginx as the production reverse proxy.
11. Follow clean architecture and separation of concerns.
12. Implement reusable Angular components.
13. Implement reusable backend services.
14. Use DTOs for API inputs and outputs where appropriate.
15. Implement validation on both frontend and backend.
16. Protect administrative operations.
17. Never hardcode production credentials.
18. Never expose database credentials in the frontend.
19. Avoid unnecessary dependencies.
20. Ensure the application can be built and deployed using the supplied documentation.

## Implementation Rules

Do not stop after generating the homepage.

Build all public pages, backend operations, database tables, administrative interfaces, and deployment files described in this specification.

Do not replace functional features with static mockups.

Do not use hardcoded sample data in production-facing product and pricing pages. Use the GraphQL API.

Create seed data for initial products and packages.

Do not invent company contact information, certifications, customer testimonials, or business statistics.

Use editable placeholders for missing company information.

Implement proper loading, empty, success, and error states.

Implement working forms and persist their data.

Ensure that the application can be started locally and deployed to the Contabo VPS.

## Development Workflow

Follow this sequence:

1. Inspect the repository and identify existing code.
2. Create a project plan and implementation checklist.
3. Initialize or update the frontend.
4. Initialize or update the backend.
5. Implement database migrations.
6. Implement the public GraphQL API.
7. Build the public website.
8. Implement authentication and authorization.
9. Build the admin dashboard.
10. Implement email notifications.
11. Write automated tests.
12. Build Docker images.
13. Create the production Docker Compose configuration.
14. Configure Nginx.
15. Document the deployment process.
16. Run the application and resolve build errors.
17. Verify the acceptance criteria.

If the repository already contains a working implementation, preserve compatible code and improve it instead of unnecessarily rebuilding everything.

Work incrementally and ensure that each major phase builds successfully before moving to the next.

## Required Deliverables

Produce the following:

1. Complete Angular source code.
2. Complete Spring Boot source code.
3. PostgreSQL database migrations.
4. Initial seed data.
5. GraphQL schema and resolvers.
6. Authentication and authorization.
7. Complete public website.
8. Complete administration dashboard.
9. Responsive design.
10. Dockerfiles.
11. Docker Compose configuration.
12. Nginx configuration.
13. `.env.example`.
14. `.gitignore`.
15. Automated tests.
16. README.md.
17. Local development instructions.
18. Production deployment instructions.
19. Database backup and restoration scripts.
20. Troubleshooting documentation.

## Final Instruction

Build NABOO as a professional, extensible software company website with a working software catalogue, configurable pricing, customer inquiry management, demo requests, and an administration dashboard.

Prioritize functional completeness, security, responsive design, maintainability, and straightforward deployment.

Do not mark the project as complete until the application builds successfully and the required functionality has been tested.
