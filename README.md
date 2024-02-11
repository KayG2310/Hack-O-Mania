# FarmCom: A Database Management System for Crops

FarmCom is a comprehensive database management system designed to streamline the process of crop management for farmers and administrators. It provides a robust platform for farmers to add crops and for administrators to filter and view the crops added by different farmers.

## Features

### Farmer Portal
- **Add Crops:** Farmers can easily add information about their crops, including type, quantity, and growth stage.
- **Profile Page:** Each farmer has a profile page where they can view and edit their personal information.
- **Login Screen:** Secure login screen for farmers to access their portal.

### Admin Portal
- **Filter and View Crops:** Administrators can filter and view the crops added by different farmers, allowing for efficient management and oversight.
- **Profile Page:** Administrators also have a profile page where they can view and edit their personal information.
- **Login Screen:** Secure login screen for administrators to access their portal.

### Contact Us Page
- A dedicated page for users to reach out to us with any queries, concerns, or feedback they might have.


## Getting Started
1. Make sure you have the following software installed:
    - git
    - Python (Latest version preferred)
    - Node.js (Latest version preferred)
    - VSCode (preferred, otherwise your opinion will be rejected)
2. Clone the project by running the following command in the terminal: `git clone https://github.com/KayG2310/Hack-O-Mania FarmCom`.
3. Move into the project directory by running `cd FarmCom`.
4. The backend and frontend now need to be run simultaneously. So, open another terminal in this directory, and use both of these terminals for either segments.

### For backend
5. Install all python requirements by running `pip install -r requirements.txt`. You can also use a [virtual environment](https://docs.python.org/3/library/venv.html) if you have a lot of projects that require different versions of different libraries.
6. Whenever there is a database schema change, you need to run `python3 manage.py makemigrations` and `python3 manage.py migrate`.
7. To run the server, run `python3 manage.py runserver`. This will run the backend on `http://localhost:8000/`.

### For frontend
5. Move into the `frontend` directory.
6. Run `npm install`.
7. Run `npm run dev`. This will run the frontend on `http://localhost:3000/`.

## Studying the file structure
- `manage.py`: Django controlling script. This is used to interact with the django application.
- `db.sqlite3`: Database.
- `farmcom`: This is the app folder for containing the app settings and parameters.
- `backend`: This is the main folder containing the files for the backend.
- `frontend`: This is the main folder containing the files for the frontend.




### How next.js pages work
Go in `frontend/pages/app.js`. This file is used to get the output for `http://localhost:3000/app`. If we create a file by a name like `frontend/pages/[filename].js`, the file will be used to generate the output for `http://localhost:3000/filename`.  
These files have code generally in the format:  
```
export default function FileName(){
  // Some JS Code and stuff
  return (
    <>
    <!-- Some HTML+CSS Code and stuff -->
    </>
  )
}
```
Detailed explanation of how to pass parameters to html tags can be found online. (Here's some cool stuff)[https://www.youtube.com/watch?v=s2skans2dP4].