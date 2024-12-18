# Evergreen Bank

A Fintech Bank Application

## 📋 Table of Contents
- 🤖 [Introduction](#-introduction)
- ⚙️ [Tech Stack](#️-tech-stack)
- 🔋 [Features](#-features)
- 🤸 [Quick Start](#-quick-start)
- 🔗 [Screenshots](#-screenshots)

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
git clone https://github.com/SumitRodrigues/banking_app.git
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

## 🔗 Screenshots
- [Screenshots](#)
- <img width="1390" alt="Screenshot 2024-11-21 at 3 38 47 PM" src="https://github.com/user-attachments/assets/9e899939-a568-4b85-8c41-aaa064466c51">
- <img width="1325" alt="Screenshot 2024-11-21 at 3 42 59 PM" src="https://github.com/user-attachments/assets/895571ae-83fd-4b7d-b5a4-2b99d3127be6">
- <img width="624" alt="Screenshot 2024-11-21 at 3 41 49 PM" src="https://github.com/user-attachments/assets/97f5abce-d7c5-4446-ba6d-8fab70008dc1">
- <img width="1451" alt="Screenshot 2024-11-21 at 3 42 21 PM" src="https://github.com/user-attachments/assets/71313c09-f098-4225-bea4-fd5e619a5e42">
- <img width="983" alt="Screenshot 2024-11-21 at 3 42 34 PM" src="https://github.com/user-attachments/assets/cb4ce503-202e-43b3-8887-ddec4684a3c9">
- <img width="1325" alt="Screenshot 2024-11-21 at 3 42 59 PM" src="https://github.com/user-attachments/assets/f286f003-3cf1-46b9-98da-54749164ee88">
- <img width="1440" alt="Screenshot 2024-11-21 at 3 43 47 PM" src="https://github.com/user-attachments/assets/df98e728-f5aa-4054-a24c-ed1fb3c77f12">
- <img width="1401" alt="Screenshot 2024-11-21 at 3 40 43 PM" src="https://github.com/user-attachments/assets/c612c482-5b37-4263-ba41-9e65c8d4b653">








