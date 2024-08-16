---
title: "The Core Banking Simulator"
summary: "A Java-based application that simulates the core functionalities of a bank."
date: "Jul 15 2024"
draft: false
tags:
- Java
- MySQL
repoUrl: https://github.com/h-off-nung/core-banking-simulator
---

### Overview

**The Core Banking Simulator** is a console-based banking application developed in Java, showcasing my ability to build robust and secure software systems. The project simulates a real-world banking environment where users can manage their bank accounts, perform transactions, and track their financial activity. The application features a secure, encrypted database to ensure all sensitive user data is protected.

### Key Features

- **User Authentication**: The system provides a secure way for users to sign up and log in using unique credentials. Each user’s account is protected by encrypted passwords, ensuring their personal information is safe.
  
- **Admin Controls**: Administrators have full access to the system, allowing them to manage user accounts, monitor transactions, and control bank card statuses (e.g., blocking or unblocking cards).

- **Bank Card Management**: Users can register up to three bank cards, view their balances, and manage their accounts seamlessly.

- **Secure Transactions**: The application allows users to perform transactions, including transfers and withdrawals, with strict validation and logging to ensure security and compliance with daily limits.

- **Transaction History and Statistics**: Users can view detailed transaction histories and analyze their spending with built-in statistics.

### Technical Highlights

- **Java and Maven**: The application is built using Java, following the Maven structure, which ensures clean dependency management and project structure.
  
- **SQLite Database with SQLCipher**: All user data is securely stored in an encrypted SQLite database, using SQLCipher for encryption. This ensures that even if the database file is accessed, the data remains protected.

- **Modular Design**: The system is divided into services and models, making the codebase maintainable and scalable. Each service handles specific business logic, such as user management, bank card management, and transaction processing.

- **Testing and Reliability**: Unit tests are implemented to ensure the reliability of the system. The project adheres to industry best practices, with a focus on clean code and robust error handling.

### Why This Project?

I developed The Core Banking Simulator to deepen my understanding of secure software development and database management. This project reflects my commitment to writing clean, maintainable code and my ability to build complex systems that simulate real-world applications. Whether it's handling sensitive user data or implementing intricate business logic, The Core Banking Simulator demonstrates my proficiency in Java and database security.

### Explore More

Feel free to check out the project on GitHub for more details, or get in touch if you’re interested in discussing this project or potential collaborations.
