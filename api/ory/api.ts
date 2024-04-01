import { Configuration, FrontendApi, IdentityApi } from "@ory/client-fetch";
import { env } from "../env/index.ts";

// export const oryConfig = createConfiguration({
    
//     // basePath: env.ORY_BASE_PATH,
//     authMethods: {
//         oryAccessToken: {
//             tokenProvider: {
//                 getToken: ()=>env.ORY_ACCESS_TOKEN
//             }
//         }
//     },
// });/

// export const oryId = new IdentityApi(oryConfig);

export const ory = new FrontendApi(new Configuration({
    basePath: env.ORY_BASE_PATH
    // baseServer: new ServerConfiguration(env.ORY_BASE_PATH,{})
}));