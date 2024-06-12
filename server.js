import express, { urlencoded } from "express";
import "dotenv/config";
import routes from "./Routes/index.js";


const app = express();

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.get("/",(req,res)=>{
  return res.send("Hi Everyone.");
})


app.use(routes);

app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));
