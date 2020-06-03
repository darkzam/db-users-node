import routes_v1, { routes_v1_options } from './v1/index';

export const routes = {
    name: 'routes',
    register: async (server, options) => {
        await server.register(routes_v1, routes_v1_options);

        server.route({
            method: 'GET',
            path: '/status',
            handler: (request, h) => {
                return { status: 'alive' };
            }
        });
    },
};

export const routes_options = {
    routes: {
        prefix: '/api'
    }
};

export default routes;