// Dependencies
import 'dotenv/config';
import Hapi from '@hapi/hapi';

// plugins
import routes, { routes_options } from './modules/api/index';
import datasource from './modules/datasource/index';

const init = async () => {
    const server = Hapi.server({
        port: process.env.APP_PORT,
        host: process.env.APP_HOST
    });

    await server.register(datasource);
    await server.register(routes, routes_options);

    await server.start();
    console.log(`Server running on ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();