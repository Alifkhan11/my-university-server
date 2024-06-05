import app from './app';
import mongoose from 'mongoose';
import config from './app/config';

const port = config.PORT;

async function main() {
  try {
    await mongoose.connect(config.DATABASE_URL as string);

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
}

main();
