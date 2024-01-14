import express from "express";
import axios from "axios";

const app = express();
const port = process.env.PORT || 3000;


app.get("/", async(req, res) => {
    try{
        const result = await axios.get("https://evilinsult.com/generate_insult.php?lang=en&type=text");

        res.render("index.ejs", {data : result.data});
        console.log(result.data);
        }catch (error){
        res.render("index.ejs", { content: JSON.stringify(error.response)})
        }
   });

app.listen(port, () => {
    console.log("App is up and running");

});