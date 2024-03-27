### Welcome to Sehtie's GitHub Repo! 👋

## Sehtie's inspiration ✨

Sehtie is a healthcare web application inspired by the COVID-19 pandemic. The pandemic has brought to light the importance of mental health and the need for accessible healthcare services. Sehtie aims to provide a platform for users to seek help and support from healthcare professionals.

## Sehtie's features 🚀

- **Patient Profile**: Users can view and edit their profiles.
- **Doctor Profile**: Healthcare professionals can view and edit their profiles.
- **Appointment Booking**: Users can book appointments with healthcare professionals.
- **Appointment Management**: Healthcare professionals can manage their appointments.
- **Medical Records**: Patients can view their medical records & doctors can add medical records.
- **Prescription Management**: Doctors can add prescriptions for patients.

## Sehtie's tech stack 💻

- **Frontend**: React, tailwindcss, shadcn
- **Backend**: .NET Core, Entity Framework Core

## Sehtie's setup 🛠️

1. Clone the repository.
2. Install the dependencies in the `frontend` directory.

```bash
cd frontend
npm install
```

3. Run the `frontend`.

```bash
npm run dev
```

4. Navigate to `http://localhost:3000` in your browser.

5. Navigate to the `backend` directory.

6. Run the `backend`.

```bash
cd backend
dotnet run
```

7. The database will be created on Microsoft SQL Server, so make sure you have it installed and running.

# If you are using macOS with Apple Silicon, you can't run the database directly on your machine because Microsoft SQL Server doesn't support Apple Silicon. You can use Docker to run the database.

8. To run the database on macOS, you can use Docker.

```bash
docker pull mcr.microsoft.com/mssql/server:2022-latest
docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=DB_Password' -p 1433:1433 -d mcr.microsoft.com/mssql/server:2022-latest
```

# if you are facing a problem running the image on docker you need to enable `Use Rosetta for x86/amd64 emulation on Apple Silicon` from the docker preferences -> General.

9. Update the connection string in the `appsettings.json` file.

```json
"ConnectionStrings": {
    "DefaultConnection": "Server=localhost,1433;Database=master;User=sa;Password=DB_Password;"
}
```

## Sehtie's contributors 🌟

- [Mohammed](https://github.com/aghsa97)
- [Abdulrahman](https://github.com/AbdulrahmanAlsoso)
- [Ahmed](https://github.com/A-cel)
