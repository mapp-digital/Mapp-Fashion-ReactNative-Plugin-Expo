# Dressipi SDK Expo Storage

A secure storage adapter plugin for the Dressipi SDK that provides mobile-optimized credential management using Expo SecureStore.

## Overview

This plugin extends the Dressipi SDK with secure storage capabilities specifically designed for React Native applications using Expo. It provides a `SecureStoreAdapter` class that implements secure credential storage, retrieval, and management using Expo's SecureStore API.

The `SecureStoreAdapter` ensures that sensitive authentication data is stored securely on the device, leveraging the native keychain on iOS and the Android Keystore system on Android.

## Installation

### Prerequisites

First, make sure you have the main Dressipi SDK installed:

```bash
npm install mapp-fashion-react-native-sdk
```

### Install the Plugin

```bash
npm install mapp-fashion-react-native-sdk-expo
```

### Install Expo SecureStore

This plugin requires Expo SecureStore as a peer dependency:

```bash
npx expo install expo-secure-store
```

Install SecureStore in the app using `expo install` so Expo selects the version
compatible with your app's Expo SDK. Version 0.1.2 uses the app's SecureStore peer
dependency instead of installing its own native module. The peer range accepts
SecureStore 14.2.3 and later, including Expo SDK 57's 57.x releases.

When upgrading from 0.1.1, install version 0.1.2 or later and remove any
`expo-secure-store` override scoped to this package. Run
`npx expo install expo-secure-store` again and check `npm ls expo-secure-store` to confirm that the
plugin shares the app's copy.

## Usage

### Basic Setup

Import the `SecureStoreAdapter` and pass it to your `DressipiProvider`:

```typescript
import React from 'react';
import { DressipiProvider } from 'mapp-fashion-react-native-sdk';
import { SecureStoreAdapter } from 'mapp-fashion-react-native-sdk-expo';

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

- React Native 0.84.0 through 0.87.x (`>=0.84.0 <0.88.0`)
- React 19.2.3 or a compatible later React 19 release (`^19.2.3`)
- Node.js 22.13.0 or later, subject to your React Native and Expo SDK requirements
- Expo configured for your React Native version, with its compatible Expo SecureStore installed in the app
- iOS and Android versions supported by your app's React Native and Expo SDK versions

The development baseline is React Native 0.86.3, React 19.2.3, Expo SDK 57, and
Expo SecureStore 57.0.4. The React Native peer range permits 0.84–0.87; each app
must use a compatible Expo SDK and SecureStore version. See the
[Expo SDK reference](https://docs.expo.dev/versions/latest/) for SDK compatibility
and platform requirements.

## Troubleshooting

### Common Issues

**SecureStore not available**: Ensure you're running on a physical device or a simulator with keychain support. The iOS Simulator and Android Emulator support SecureStore.

**Authentication errors**: Make sure your `clientId` and `domain` are correctly configured in the `DressipiProvider`.

**Storage errors**: Check that your app has the necessary permissions and that SecureStore is properly installed.

## Support

For issues related to this storage adapter, please check the main Dressipi SDK documentation or contact support.

## License

This plugin follows the same license as the main Dressipi SDK.
