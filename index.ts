import { Server } from "./src/config/server";

const port = 3000;
new Server(port)
  .listen()
  .then(() => console.log(`Server is running on port ${port}`))
  .catch((err) => console.log(err));
