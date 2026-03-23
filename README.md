# Second Brain

A TypeScript-based Express.js API for managing content and user authentication with MongoDB. This project provides a secure backend for a second brain application that allows users to store, organize, and manage their digital content.

## Description

Second Brain is a robust backend API built with Express.js and TypeScript that enables users to securely manage their digital knowledge base. The application features:

- **User Authentication**: Secure JWT-based authentication with bcrypt password hashing
- **Content Management**: Create, read, update, and delete content entries
- **User Management**: User registration, login, and profile management
- **Database Integration**: MongoDB integration using Mongoose ODM
- **Type Safety**: Full TypeScript support for better code reliability
- **Middleware Security**: Custom authentication middleware to protect routes

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd second-brain
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory with the following variables:

   ```
   PORT=3000
   MONGODB_URI=<your-mongodb-connection-string>
   JWT_SECRET=<your-jwt-secret-key>
   ```

4. **Build the project**
   ```bash
   npm run build
   ```

### Running the Application

- **Development Mode** (with auto-reload)

  ```bash
  npm run dev
  ```

- **Production Mode**

  ```bash
  npm run start
  ```

- **Watch Mode** (compile TypeScript on file changes)
  ```bash
  npm run watch
  ```

## Usage

### API Endpoints

#### User Routes (`/user`)

- `POST /user/register` - Register a new user
- `POST /user/login` - Login user and receive JWT token
- `GET /user/profile` - Get user profile (requires authentication)
- `PUT /user/profile` - Update user profile (requires authentication)

#### Content Routes (`/content`)

- `GET /content` - Get all user content (requires authentication)
- `POST /content` - Create new content entry (requires authentication)
- `GET /content/:id` - Get specific content entry (requires authentication)
- `PUT /content/:id` - Update content entry (requires authentication)
- `DELETE /content/:id` - Delete content entry (requires authentication)

### Example Requests

**User Registration**

```bash
curl -X POST http://localhost:3000/user/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "securepassword",
    "name": "User Name"
  }'
```

**Create Content**

```bash
curl -X POST http://localhost:3000/content \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <jwt-token>" \
  -d '{
    "title": "My Note",
    "description": "This is my first note",
    "content": "Note content here"
  }'
```

## Contributor Guidelines

### How to Contribute

1. **Fork the repository** and create a feature branch

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Follow the code style** - Use TypeScript and follow the existing project structure

3. **Make your changes** and ensure code quality:
   - Write clear, descriptive commit messages
   - Test your changes thoroughly
   - Follow the existing code patterns and conventions

4. **Commit your work**

   ```bash
   git commit -m "feat: add descriptive commit message"
   ```

5. **Push to your branch**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create a Pull Request** with a description of your changes

### Development Guidelines

- Use TypeScript for all source files
- Place new features in appropriate folders (controllers, models, routes, etc.)
- Update types in the `types/` directory when adding new Express extensions
- Ensure environment variables are properly documented
- Write meaningful comments for complex logic


