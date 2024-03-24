import express from "express"

const configViewEngine = (app) => {
    app.use(express.static('./src/public'))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")//tat ca nhung file ejs se tu dong tim trong thu muc view
}

export default configViewEngine;