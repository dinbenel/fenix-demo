import {View, Text, ScrollView} from 'react-native';
import DeployText from './components/DeployText';

const DeployAndroid = () => {
  return (
    <ScrollView automaticallyAdjustContentInsets>
      <View className="p-2">
        <DeployText type="title">
          Deploying React Native App for Android
        </DeployText>
        <View className="space-y-2">
          <DeployText type="title">Prerequisites</DeployText>
          <View>
            <DeployText type="content">
              Android Studio - Make sure you have Android Studio installed.
            </DeployText>
            <DeployText type="content">
              Java Development Kit (JDK) - Ensure that the JDK is installed and
              properly configured.
            </DeployText>
            <DeployText type="content">
              Android SDK - Make sure you have the required Android SDK versions
              installed.
            </DeployText>
          </View>
          <DeployText type="title">Steps</DeployText>
          <View>
            <DeployText type="content">
              Set up Android Release Build Configuration - Open your React
              Native project in a text editor and navigate to
              android/app/build.gradle. Configure your release build type.
            </DeployText>
            <DeployText type="content">
              Generate a Signing Key Open a terminal and run the following
              command to generate a keystore file.
              <DeployText type="content">
                keytool -genkey -v -keystore my-release-key.keystore -alias
                my-key-alias -keyalg RSA -keysize 2048 -validity 10000
              </DeployText>
            </DeployText>
            <DeployText type="content">
              Archive the Project - Select a Generic iOS Device as the build
              target. Go to Product then Archive.
            </DeployText>
            <DeployText type="content">
              Set up Gradle Variables Create a gradle.properties file in the
              android directory of your project and add the following:
            </DeployText>
            <DeployText type="content">
              MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
              MYAPP_RELEASE_KEY_ALIAS=my-key-alias
              MYAPP_RELEASE_STORE_PASSWORD=your-store-password
              MYAPP_RELEASE_KEY_PASSWORD=your-key-password
            </DeployText>
            <DeployText type="content">
              Build the Release APK In the terminal, navigate to the android
              directory of your project and run -
            </DeployText>
            <DeployText type="content">
              ./gradlew assembleRelease - The APK will be generated in the
              android/app/build/outputs/apk/release/ directory.
            </DeployText>
            <DeployText type="content">
              Distribute Your App You can now upload the generated APK to the
              Google Play Store. Follow the Google Play Console instructions to
              create an app listing and distribute your app.
            </DeployText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeployAndroid;
