import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'ionic-demo',
  webDir: 'dist/ionic-demo',
  server: {
    androidScheme: 'https'
  }
};

export default config;
