// Dependencies
import mongoose from 'mongoose';

// Config
const { MONGODB_DATASOURCE } = process.env;

const options = {
    keepAlive: 300000,
    connectTimeoutMS: 300000,
    useMongoClient: true,
};

export const datasource = {
    name: 'datasource',
    register: async (server, options) => {
        mongoose.connect(MONGODB_DATASOURCE, options, (error, db) => {
            if (error) {
                console.log(error);
            }

            server.app.db = {
                link: db,
            };
        });
    }
};

export default datasource;