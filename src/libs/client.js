// microcms-js-sdkの初期化
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: process.env.SERVICE_DOMAIN,
  apiKey: process.env.API_KEY
});
