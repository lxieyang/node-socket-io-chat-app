# Node Socket.io Chat app

## Deploying to Heroku

1. Install **Heroku** CLI
2. Use **Git** to track the project
3. Update `package.json` with 

    a Node.js engine **version**
    ```json
    "engines": {
      "node": "8.9.1"
    },
    ```
    and a **start** script:

    ```json
    "scripts": {
      "start": "node server/server.js",
      "test": "xxxxxxxxxxx"
    },
    ``` 

3. Run `heroku create`
4. Run `git push heroku master`

Follow detailed instructions here: [Deploying with Git](https://devcenter.heroku.com/articles/git)