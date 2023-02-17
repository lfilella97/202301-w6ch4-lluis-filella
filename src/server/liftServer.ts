import { app, createDebug, port } from "../index.js";

const liftServer = () => {
  if (!port) {
    createDebug(`Cant lift server`);
    return;
  }

  app.listen(port, () => {
    createDebug(`Server up in port ${port} `);
  });
};

export default liftServer;
