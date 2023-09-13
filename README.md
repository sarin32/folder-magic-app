# folder-structure-creator-
A nodejs server for creating folder structure for projects in your system

## Prerequisites 
- Node Installed (tested in node 18)
- Postman or other softwares to hit the api

## How to run server
```
npm i
npm start
```
## Sample request

```
--------------------url----------------
 http://localhost:3000/createFolderStructure

----------------body-------------------

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
