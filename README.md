# Folder Magic App 🪄

Turn your folder structure dreams into reality with the Folder Magic App! ✨

## ✨ What is the Folder Magic App?

The Folder Magic App is a magical Node.js application powered by Express that effortlessly creates custom folder structures for you. Whether you're organizing your projects, setting up directories for your files, or even just feeling a little whimsical, this app has got you covered!

## 🚀 Key Features

- **🔮 Create Folders Like Magic:** Simply provide a JSON structure, and the Folder Magic App will conjure up directories and files exactly as you've imagined!

- **✨ Recursive Wizardry:** Nested folders? No problem! Our app works its magic recursively to bring your entire structure to life.

- **📂 Interactive Logging:** Watch the magic happen with real-time logs that show you when folders and files are created. It's like having a wizard narrate your file system journey!

## 🧙‍♂️ Getting Started

1. **Install Dependencies:** 📦🔮

- Node Installed (tested in node 18)
- Postman or other softwares to hit the api

2. **Run the App:** 🪄🚀

```
npm i
npm start
```
4. **Invoke the Magic:** 🎩🌟

Send a POST request to `/createFolderStructure` with your JSON structure, and watch the magic unfold!

## 💡 Example JSON Structure

url
```
 http://localhost:3000/createFolderStructure
```
body
```
{
    "basePath": "/home/sarinalexander/projects/sample",
    "structure":{
        "src":{
            "index.js":"",
            "assets":{
                "images":{},
                "fonts":{},
                "templates":{}
            },
            "app":{
                "index.js":"",
                "api":{
                    "routes":{},
                    "middlewares":{},
                    "controllers":{}
                },
                "services":{},
                "database":{
                    "repository":{},
                    "connection.js":"",
                    "index.js":""
                },
                "utils":{
                    "index.js":"// generic utilities",
                    "error-handler.js":"",
                    "app-errors.js":""
                },
                "config":{
                    "config.js":"// environment level constants",
                    "constants.js":"// applevel contstants"
                }
            },
            "uploads":{},
            "tests":{}
        },
        "Dockerfile":"",
        ".gitignore":""
    }
}
```
