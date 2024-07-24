# Evergreen Bank

A Fintech Bank Application

Build this project step by step with our detailed tutorial on [JavaScript Mastery YouTube](https://www.youtube.com/c/JavaScriptMastery). Join the JSM family!

## 📋 Table of Contents
- 🤖 [Introduction](#-introduction)
- ⚙️ [Tech Stack](#️-tech-stack)
- 🔋 [Features](#-features)
- 🤸 [Quick Start](#-quick-start)
- 🕸️ [Code Snippets to Copy](#️-code-snippets-to-copy)
- 🔗 [Assets](#-assets)
- 🚀 [More](#-more)
- 🚨 [Tutorial](#-tutorial)

## 🤖 Introduction
Evergreen Bank is a financial SaaS platform built with Next.js. It connects to multiple bank accounts, displays transactions in real-time, allows users to transfer money to other platform users, and manages their finances altogether.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 34k+ members. It's a place where people help each other out.

## ⚙️ Tech Stack
- Next.js
- TypeScript
- Appwrite
- Plaid
- Dwolla
- React Hook Form
- Zod
- TailwindCSS
- Chart.js
- ShadCN

## 🔋 Features
- **Authentication**: An ultra-secure SSR authentication with proper validations and authorization.
- **Connect Banks**: Integrates with Plaid for multiple bank account linking.
- **Home Page**: Shows a general overview of user account with total balance from all connected banks, recent transactions, money spent on different categories, etc.
- **My Banks**: Check the complete list of all connected banks with respective balances and account details.
- **Transaction History**: Includes pagination and filtering options for viewing transaction history of different banks.
- **Real-time Updates**: Reflects changes across all relevant pages upon connecting new bank accounts.
- **Funds Transfer**: Allows users to transfer funds using Dwolla to other accounts with required fields and recipient bank ID.
- **Responsiveness**: Ensures the application adapts seamlessly to various screen sizes and devices, providing a consistent user experience across desktop, tablet, and mobile platforms.

...and many more, including code architecture and reusability.

## 🤸 Quick Start
Follow these steps to set up the project locally on your machine.

### Prerequisites
Make sure you have the following installed on your machine:
- Git
- Node.js
- npm (Node Package Manager)

### Cloning the Repository
```bash
git clone https://github.com/adrianhajdin/banking.git
cd banking
```

### Installation
Install the project dependencies using npm:
```bash
npm install
```

### Set Up Environment Variables
Create a new file named `.env` in the root of your project and add the following content:
```env
#NEXT
NEXT_PUBLIC_SITE_URL=

#APPWRITE
NEXT_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
NEXT_PUBLIC_APPWRITE_PROJECT=
APPWRITE_DATABASE_ID=
APPWRITE_USER_COLLECTION_ID=
APPWRITE_BANK_COLLECTION_ID=
APPWRITE_TRANSACTION_COLLECTION_ID=
APPWRITE_SECRET=

#PLAID
PLAID_CLIENT_ID=
PLAID_SECRET=
PLAID_ENV=
PLAID_PRODUCTS=
PLAID_COUNTRY_CODES=

#DWOLLA
DWOLLA_KEY=
DWOLLA_SECRET=
DWOLLA_BASE_URL=https://api-sandbox.dwolla.com
DWOLLA_ENV=sandbox
```
Replace the placeholder values with your actual respective account credentials. You can obtain these credentials by signing up on the Appwrite, Plaid, and Dwolla.

### Running the Project
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## 🕸️ Code Snippets to Copy
```javascript
// Example code snippet
```

## 🔗 Assets
- [Logos](#)
- [Icons](#)
- [Screenshots](#)

## 🚀 More
For more information and advanced setups, check out our [wiki](#).

## 🚨 Tutorial
This repository contains the code corresponding to an in-depth tutorial available on our [YouTube channel, JavaScript Mastery](https://www.youtube.com/c/JavaScriptMastery).

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!
