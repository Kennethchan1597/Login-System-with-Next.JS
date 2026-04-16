# Login System

- 🔥 **Modern login system with Java Spring Boot backend**
  - Uses **Spring Security** and **JWT** for authentication
  - Connected to a **MySQL** database
  - Backend handles **password encryption**
  - Sends automatic registration emails via **Gmail SMTP**
  - Supports Apple Login and Google Login for **seamless OAuth authentication**
    - Mobile app (React Native) integrates with **Apple** and **Google SDKs**
    - Backend verifies provider tokens **(Apple identity token / Google ID token)**
    - Automatically creates or links user accounts on first login
    - Generates JWT tokens after successful OAuth validation

- 💻 **Frontend built with Next.js**
  - Developed using **Next.js (App Router)** with modern React architecture
  - Implements responsive UI with a **glassmorphism design system**
  - Handles **authentication flows (login / signup / OAuth UI)**
  - Integrates seamlessly with backend APIs via **fetch (RESTful API calls)**
  - Supports **Google / Apple social login UI interactions**
  - Uses **client-side state management (useState)** for form handling and validation
  - Designed with a clear separation of concerns (**AuthLayout, LoginForm, SignupForm**)

## Architecture Diagram

<p align="center">
  <img src="login_system/images/System-Architecture.png" alt="System Architecture" />
</p>
<p align="center">
  <img src="login_system/images/System-Flow-Chart.png" alt="System Flow Chart" />
</p>
<p align="center">
  <img src="login_system/images/login-ui.png" alt="System Flow Chart" />
</p>

