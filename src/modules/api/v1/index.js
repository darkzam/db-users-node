export const routes_v1 = {
    name: 'v1 api',
    register: async (server, options) => {
        server.route({
            method: 'GET',
            path: '/test',
            handler: (request, h) => {
                return { test: 'a simple reply in v1 api' };
            }
        });
    }
};

export const routes_v1_options = {
    routes: {
        prefix: '/v1'
    }
};

export default routes_v1;