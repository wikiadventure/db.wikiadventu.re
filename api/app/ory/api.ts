import { FrontendApi, IdentityApi } from "https://deno.land/x/sacramentix_ory_client@v.1.1.39/index.ts";
import { createConfiguration } from "https://deno.land/x/sacramentix_ory_client@v.1.1.39/configuration.ts";
import { env } from "../env/index.ts";
import { ServerConfiguration } from "https://deno.land/x/sacramentix_ory_client@v.1.1.39/servers.ts";

// export const oryConfig = createConfiguration({
    
//     // basePath: env.ORY_BASE_PATH,
//     authMethods: {
//         oryAccessToken: {
//             tokenProvider: {
//                 getToken: ()=>env.ORY_ACCESS_TOKEN
//             }
//         }
//     },
// });

// export const oryId = new IdentityApi(oryConfig);

export const ory = new FrontendApi(createConfiguration({
    baseServer: new ServerConfiguration(env.ORY_BASE_PATH,{})
}));