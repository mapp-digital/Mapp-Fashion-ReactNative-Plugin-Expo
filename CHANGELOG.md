# Changelog

All notable changes to `mapp-fashion-react-native-sdk-expo` are recorded here,
newest first.

Add future changes under **Unreleased**, grouped into **Added**, **Changed**,
**Deprecated**, **Removed**, **Fixed**, or **Security**, as appropriate. When
preparing a release, move those changes into a versioned entry. Replace
**Pending release** with the publication date in `YYYY-MM-DD` format once published.

## Unreleased

No changes recorded yet.

## 0.1.2 - Pending release

### Fixed

- Moved `expo-secure-store` from runtime dependencies to a required peer
  dependency (`>=14.2.3`). The plugin can now share the app's Expo-compatible
  SecureStore installation without pulling in a separate 14.x native module.
- Regenerated the lockfile with the correct package name and version.

### Changed

- Set the React Native peer range to `>=0.84.0 <0.88.0`, covering 0.84.0 through
  0.87.x.
- Updated the React peer requirement to `^19.2.3` and the minimum Node.js version
  to `22.13.0`.
- Updated the development baseline to React Native 0.86.3, React and React DOM
  19.2.3, Expo SDK 57, and Expo SecureStore 57.0.4, with React 19.2 type definitions.
- Updated installation instructions, compatibility requirements, and platform
  guidance in the README.

### Added

- This changelog, including an Unreleased section for future versions.

### Upgrading from 0.1.1

1. Ensure your app meets the updated React Native, React, and Node.js requirements
   and uses a compatible Expo SDK.
2. Install `mapp-fashion-react-native-sdk-expo@0.1.2` once published.
3. Remove any `expo-secure-store` override scoped to this package.
4. Run `npx expo install expo-secure-store` to select the version for your Expo SDK.
5. Run `npm ls expo-secure-store` to confirm that the app and plugin share one copy.
