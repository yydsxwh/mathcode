import type {NextConfig} from "next";
import {securityHeaders} from "@andyyyds/shared/security/headers";
const config:NextConfig={transpilePackages:["@yydsxwh/shared","@andyyyds/mathcode","@andyyyds/shared","@andyyyds/courses","@andyyyds/meetup","@andyyyds/decorate","@andyyyds/forum"],async headers(){return [{source:"/:path*",headers:securityHeaders()}];}};
export default config;
