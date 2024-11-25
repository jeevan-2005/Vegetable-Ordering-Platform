import dotenv from "dotenv";
dotenv.config();
import { app } from "./app";
import connection from "./config/db";

app.listen(process.env.PORT, async () => {
  try {
    const connect = await connection;
    console.log(`Server is running on port ${process.env.PORT}`);
    console.log(`Database is connected - ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
});
