React Native Phone Directory Application


Task Description

This project is a take-home assignment to create a Phone Directory Application using React Native. The application allows users to manage their contacts with functionalities to add, view, search, edit, and delete contacts. The task focuses on creating a user-friendly interface and implementing efficient state management and data persistence.
Features
1. Add Contacts

    Users can add new contacts with the following details:
        Name (required, only alphabets and spaces)
        Phone Number (required, numeric, at least 10 digits)
        City (optional)
    Input validation is implemented for both the name and phone number fields.

2. View Contacts

    Display all saved contacts in a scrollable list.
    Each contact card shows:
        Name
        Phone Number
        City (if provided)
    Contacts are sorted alphabetically by name.

3. Search Contacts

    A search bar allows filtering contacts by:
        Name
        Phone Number
    The search is case-insensitive for a better user experience.

4. Persistent Storage

    Contacts are stored locally using AsyncStorage.
    Data persists even after the application is closed or restarted.

5. Edit and Delete Contacts (Bonus)

    Edit: Users can modify an existing contact's details.
    Delete: Users can remove a contact with a confirmation prompt.

6. Error Handling

    Displays appropriate error messages for invalid inputs.
    Handles empty state when no contacts are available.

7. Performance Optimization

    Efficient rendering of large contact lists using FlatList with proper key extraction.

Technical Stack

    Framework: React Native
    Programming Language: TypeScript (optional but recommended)
    Navigation: React Navigation
    State Management: React Context API (or Redux for larger scalability)
    UI/UX: NativeBase / React Native Paper / Custom Components
    Storage: AsyncStorage
    UUID Generation: uuid library for unique contact IDs

Installation and Setup

    Clone the repository:

git clone https://github.com/your-username/phone-directory-app.git

Navigate to the project directory:

cd phone-directory-app

Install dependencies:

npm install

Run the application:

    For iOS:

npx react-native run-ios

For Android:

        npx react-native run-android

Directory Structure

phone-directory-app/
├── src/
│   ├── components/       # Reusable components (e.g., ContactCard, SearchBar)
│   ├── screens/          # Screen components (e.g., AddContactScreen, ViewContactsScreen)
│   ├── context/          # ContactsContext for state management
│   ├── utils/            # Helper functions (e.g., validation)
│   ├── assets/           # Images, fonts, or other static assets
│   └── styles/           # Centralized stylesheets
├── App.tsx               # Entry point of the application
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation

How to Contribute

    Fork the repository.
    Create a new branch:

git checkout -b feature/your-feature-name

Make changes and commit:

git commit -m "Add your message here"

Push to your branch:

    git push origin feature/your-feature-name

    Submit a pull request.

License

This project is licensed under the MIT License.
Notes

    Please ensure the code follows React Native best practices and is well-documented.
    Include comments where necessary for clarity.
    Make sure all dependencies are installed and functional before running the app.
    
