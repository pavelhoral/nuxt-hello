import { hostname, networkInterfaces } from 'node:os';

export default defineEventHandler(async () => {
  return {
    hostname: hostname(),
    nifs: networkInterfaces()
  }
})
