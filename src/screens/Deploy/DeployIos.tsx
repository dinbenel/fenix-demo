import {ScrollView, View} from 'react-native';
import DeployText from './components/DeployText';

const DeployIos = () => {
  return (
    <ScrollView automaticallyAdjustContentInsets>
      <View className="p-4">
        <DeployText type="title">Deploying React Native App for iOS</DeployText>
        <View className="space-y-2">
          <DeployText type="title">Prerequisites</DeployText>
          <View>
            <DeployText type="content">
              Xcode - Make sure you have the latest version of Xcode installed.
            </DeployText>
            <DeployText type="content">
              Apple Developer Account - You need an active Apple Developer
              account to deploy apps to the App Store.
            </DeployText>
          </View>
          <DeployText type="title">Steps</DeployText>
          <View>
            <DeployText type="content">
              Set Up an iOS Release Build Configuration - Open your React Native
              project in Xcode. Select your project in the Project Navigator,
              then navigate to the Signing & Capabilities tab. Ensure you have
              selected your Team and a valid Provisioning Profile.
            </DeployText>
            <DeployText type="content">
              Update Info.plist - Update your Info.plist file to include any
              necessary configurations, such as permissions.
            </DeployText>
            <DeployText type="content">
              Archive the Project - Select a Generic iOS Device as the build
              target. Go to Product then Archive.
            </DeployText>
            <DeployText type="content">
              Upload to App Store Connect - Once the archive is completed, the
              Xcode Organizer window will open. Select the archive and click the
              Distribute App button. Follow the prompts to upload your app to
              App Store Connect.
            </DeployText>
            <DeployText type="content">
              Create an App Store Listing - Log in to App Store Connect, create
              a new app, and complete the required information, including app
              name, description, and screenshots.
            </DeployText>
            <DeployText type="content">
              Submit for Review - After uploading your build, go to the App
              Store Connect dashboard, select your app, and click on the Prepare
              for Submission button. Fill in all necessary metadata and then
              submit your app for review.
            </DeployText>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DeployIos;
