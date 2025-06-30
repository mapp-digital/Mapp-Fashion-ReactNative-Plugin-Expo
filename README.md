# Dressipi SDK Expo Storage

A secure storage adapter plugin for the Dressipi SDK that provides mobile-optimized credential management using Expo SecureStore.

## Overview

This plugin extends the Dressipi SDK with secure storage capabilities specifically designed for React Native applications using Expo. It provides a `SecureStoreAdapter` class that implements secure credential storage, retrieval, and management using Expo's SecureStore API.

The `SecureStoreAdapter` ensures that sensitive authentication data is stored securely on the device, leveraging the native keychain on iOS and the Android Keystore system on Android.

## Installation

### Prerequisites

First, make sure you have the main Dressipi SDK installed:

(Naming of packages currently in the works)

```bash
npm install @dressipi/sdk-react-native
```

### Install the Plugin

```bash
npm install @dressipi/sdk-expo-storage
```

### Install Expo SecureStore

This plugin requires Expo SecureStore as a peer dependency:

```bash
npx expo install expo-secure-store
```

## Usage

### Basic Setup

Import the `SecureStoreAdapter` and pass it to your `DressipiProvider`:

```typescript
import React from 'react';
import { DressipiProvider } from '@dressipi/sdk-react-native';
import { SecureStoreAdapter } from '@dressipi/sdk-expo-storage';

const App = () => {
  return (
    <DressipiProvider
      namespaceId="your-namespace-id"
      domain="your-domain"
      clientId="your-client-id"
      storage={new SecureStoreAdapter()}
    >
      {/* Your app content */}
    </DressipiProvider>
  );
};

export default App;
```

## Configuration

The `SecureStoreAdapter` works out of the box with no additional configuration required. The SDK will automatically handle:

- Credential storage and retrieval
- Token refresh management  
- Secure cleanup on logout
- Error handling and fallbacks

## Requirements

- React Native with Expo
- iOS 10.0+ or Android API level 21+
- Expo SecureStore (automatically handles platform requirements)

## Troubleshooting

### Common Issues

**SecureStore not available**: Ensure you're running on a physical device or a simulator with keychain support. The iOS Simulator and Android Emulator support SecureStore.

**Authentication errors**: Make sure your `clientId` and `domain` are correctly configured in the `DressipiProvider`.

**Storage errors**: Check that your app has the necessary permissions and that SecureStore is properly installed.

## Support

For issues related to this storage adapter, please check the main Dressipi SDK documentation or contact support.

## License

This plugin follows the same license as the main Dressipi SDK.
