import { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'co.sumit.nuxt-capacitor',
  appName: 'nuxt-capacitor',
  webDir: 'dist',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.0.150:3000',
    cleartext: true,
  },
}

export default config
