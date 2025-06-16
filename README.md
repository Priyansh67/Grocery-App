# Grocery-App 🍎🛒

An end-to-end e-commerce web application for a grocery business, developed to showcase products and allow customers to browse, search, add to cart, and place orders. Admin users can manage products via a secure dashboard.

---

## 🚀 Features

### 🛍️ Customer Features

- **Anonymous Users**
  - View all products with pagination, sorting, and category filter
  - Product search by name or description
  - Product details view
  - Sign up & login options

- **Registered Users**
  - Personalized dashboard (Full Name, View Cart, My Orders, Sign Out)
  - Add products to cart with quantity selection
  - Cart management (add/remove items, view cart)
  - Place order (generates order ID, updates inventory)
  - View order history

### 🛠️ Admin Features

- Admin dashboard after login
- View, Add, Edit, and Delete products
- Upload product image (JPG/PNG)
- Input validation on all product fields
- Support for multiple admin users

---

## 🧰 Tech Stack

- **Frontend (UI Layer)**: Angular 16, HTML5, CSS3, TypeScript
- **Backend (Presentation Layer)**: ASP.NET Web API
- **Business & Data Layer**: .NET 6, Entity Framework Core
- **Database**: Microsoft SQL Server

---

## 📦 Application Architecture

The application follows a standard **N-tier Architecture**:

1. **Presentation Layer**:
   - ASP.NET MVC 6
   - Web APIs exposing RESTful endpoints

2. **Business Logic Layer**:
   - Business rules and services
   - Order placement, stock management, authentication logic

3. **Data Access Layer**:
   - Entity Framework Core (EF Core)
   - SQL Server with normalized schema, foreign keys, constraints

4. **UI Layer**:
   - Angular SPA
   - REST API communication
   - Responsive and mobile-friendly

---

## 🗃️ Database Schema (Highlights)

- **Users**: Id, FullName, Email, PhoneNumber, PasswordHash, IsAdmin
- **Products**: Id, Name, Description, Category, Price, Discount, AvailableQuantity, Specification, ImagePath
- **Orders**: Id, UserId, OrderDate
- **OrderItems**: Id, OrderId, ProductId, Quantity, PriceAtPurchase
- **Carts**: Id, UserId
- **CartItems**: Id, CartId, ProductId, Quantity

> Admin users are seeded using a Seed method during database initialization.

---

## ✅ Validations

### Signup
- Full Name: Alphabets only, max 50 characters
- Email: Unique & valid format
- Phone Number: 10-digit format
- Password: Min 8 characters, with 1 alphabet, 1 number, 1 special character
- Confirm Password: Must match password

### Product
- Name, Description, Category: Required, with character limits
- Quantity: Required, numeric
- Image: Required, JPG/PNG
- Price: Required, decimal
- Discount/Specifications: Optional

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (for Angular)
- .NET 6 SDK
- SQL Server 2019 or later
- Visual Studio / VS Code
- Git

### Clone the Repository

```bash
git clone https://github.com/Priyansh67/Grocery-App.git
cd Grocery-App
```

### Backend Setup

1. Open the solution in Visual Studio
2. Update `appsettings.json` with your SQL Server connection string
3. Run EF Core migrations:

```bash
Update-Database
```

4. Run the backend API project

### Frontend Setup (Angular)

```bash
cd GroceryApp-Frontend
npm install
ng serve
```

### Open in Browser

- Frontend: `http://localhost:4200`
- Backend API: `http://localhost:5000` (or as per your launch settings)


