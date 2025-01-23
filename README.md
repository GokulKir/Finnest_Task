# Task Project

## Project Description

This project is a **React Native Phone Number Directory Application** designed to help users manage their contacts efficiently. The application offers robust features for adding, viewing, searching, editing, and deleting contacts while ensuring data persistence using local storage. It is fully compatible with both Android and iOS platforms.

---

## Features

### 1. Add Contacts
- Users can create a new contact by providing the following details:
  - **Name (Required):** Accepts only alphabets and spaces.
  - **Phone Number (Required):** Must be numeric and at least 10 digits long.
  - **City (Optional):** An optional field to include the city.
- Includes input validation to ensure accurate data entry.

### 2. View Contacts
- Displays a scrollable list of saved contacts.
- Contact cards include:
  - **Name**
  - **Phone Number**
  - **City** (if provided).
- Contacts are automatically sorted alphabetically by name.

### 3. Search Contacts
- Provides a search bar at the top of the directory.
- Allows filtering contacts by:
  - **Name**
  - **Phone Number**
- The search functionality is case-insensitive.

### 4. Edit and Delete Contacts (Bonus)
- Users can:
  - Edit existing contact details.
  - Delete a contact with a confirmation prompt to prevent accidental deletions.

### 5. Persistent Storage
- Contact data is stored using local storage to ensure:
  - Data persistence even after the app is closed or restarted.

### 6. Error Handling
- Displays appropriate error messages for invalid inputs.
- Manages empty states, such as when no contacts are added yet.

### 7. UI/UX Design
- Features a simple and intuitive design.
- Utilizes a design system or component library for consistent and user-friendly UI/UX.

---

## Technologies Used

- **React Native:** To build the cross-platform mobile application.
- **React Navigation:** For seamless navigation between screens.
- **Local Storage:** To persist contact data locally.
- **TypeScript (Optional):** To enhance type safety and maintain better code quality.
- **FlatList:** For efficient rendering of large contact lists.
- **Validation Libraries:** To ensure valid user input.

---

## Key Highlights

- **Cross-Platform Compatibility:** Runs smoothly on both Android and iOS devices.
- **Robust Data Handling:** Ensures data persistence and provides user-friendly error messages.
- **Enhanced User Experience:** Offers intuitive navigation and smooth performance.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository_url>
   ```
2. Navigate to the project directory:
   ```bash
   cd task-project
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npx react-native run-android  # For Android
   npx react-native run-ios     # For iOS
   ```

---

## Screenshots

Include screenshots of the app (if available) to provide visual context.

---

## Contribution

Contributions are welcome! Please follow the standard [GitHub Flow](https://guides.github.com/introduction/flow/) for submitting pull requests.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

