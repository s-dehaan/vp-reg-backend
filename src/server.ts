import app from "./app";

const PORT: number = Number(process.env.PORT) || 8080;

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Application listening on port: ${PORT}`);
      console.log("Press Ctrl+C to exit the application");
    });
  } catch (error) {
    console.error(`Something went wrong starting the server: ${error}`);
  }
};

start();
