
const express = require('express')
const fs = require('fs');
const path = require('path');

const app = express()
app.use(express.json());

// route
app.post('/createFolderStructure', createFolderStructure)

app.use((req, res)=>{
    res.status(404).send('Route not found')
})

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('app is listening on port:', port);
})
app.on('error', (error) => {
    console.error(error);
})

// controller
async function createFolderStructure(req, res) {
    try {
        const body = req.body
        if (!body.basePath) {
            return res.status(400).send('basePath is required in body')
        }
        if (!body.structure) {
            return res.status(400).send('structure is required in body')
        }
        let logs = createDirectoriesRecursively(body.basePath, body.structure)
        return res.status(200).send({ logs })
    } catch (error) {
        console.error(error)
        res.status(500).send('OOps, Something went wrong !!!')
    }
}

// service
function createDirectoriesRecursively(basePath, obj) {
    let logs = []
    // Ensure the base path exists
    if (!fs.existsSync(basePath)) {
        fs.mkdirSync(basePath);
    }

    // Iterate through the keys of the object
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            const currentPath = path.join(basePath, key);

            // If the value is an object, create a directory and recurse
            if (typeof obj[key] === 'object' && obj[key] !== null) {
                if (!fs.existsSync(currentPath)) {
                    fs.mkdirSync(currentPath);
                    logs.push('FOLDER CREATED :' + currentPath);
                }
                else {
                    logs.push('FOLDER EXISTS  :' + currentPath);
                }
                const innerlogs = createDirectoriesRecursively(currentPath, obj[key]);
                logs = [...logs, ...innerlogs]
            } else {
                // If the value is not an object, create a file with its content
                if (!fs.existsSync(currentPath)) {
                    logs.push('FILE CREATED   :' + currentPath);
                    fs.writeFileSync(currentPath, obj[key]);
                } else {
                    logs.push('FILE EXISTS    :' + currentPath);
                }
            }
        }
    }
    return logs
}