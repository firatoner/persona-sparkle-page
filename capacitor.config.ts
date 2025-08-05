import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.3bf7dab42a9c4deda409ea6c45e3e181',
  appName: 'persona-sparkle-page',
  webDir: 'dist',
  server: {
    url: 'https://3bf7dab4-2a9c-4ded-a409-ea6c45e3e181.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  bundledWebRuntime: false
};

export default config;