import { AppRouter } from "@/app/app/trpc"
import {createTRPCReact} from "@trpc/react-query"


export const trpc = createTRPCReact<AppRouter>({})