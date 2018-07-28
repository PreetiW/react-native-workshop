# react-native-workshop

The guide below explains the setup that needs to be done prior to the workshop. React native apps can require a large setup time and the idea behind this doc, is to minimise setup time during the workshop.

## 1. Install Github
This workshop requires you to have a github account, also its a good practice to start committing your own code to an online repository.
If you dont have a **Github** account you can create one [here](https://github.com/join). 

Once that is dont ensure you have git command line tools. Those can be found below.

A detailed installation is in [this](https://www.atlassian.com/git/tutorials/install-git) link

### Linux
```bash
apt-get update
sudo apt-get install git-core
```

### Mac 

```bash
brew install git
```

### Windows
Download and install the git installer from  [this](https://gitforwindows.org/) link. 
Open a `CMD` window and type the following
```bash
$ git config --global user.name "YourUsername"
$ git config --global user.email "youremail@gmail.com"
```

  Alternatively you can also try a bash window like [Gitbash](https://git-scm.com/downloads).

## 2. Install Node
Download the nodeJS package based on your operating system from [here](https://nodejs.org/en/download/)

To test if the installation has worked, open a terminal and type the following
```bash
which node
node --version

which npm
npm --version
```
If both the above commands give you outputs, implies your node and npm setup is complete.


## 3. Install Android Studio
Download and install the latest android studio from [here](https://developer.android.com/studio/).

Also ensure android tools and sdk is in your environment variables or in your path variables

You can read about that [Here For Windows](https://www.360logica.com/blog/how-to-set-path-environmental-variable-for-sdk-in-windows/) and [Here for Mac](https://stackoverflow.com/questions/17901692/set-up-adb-on-mac-os-x)

  1. Create a new Device in emulator [Read this link](https://developer.android.com/studio/run/managing-avds)

## 4. Add react native cli
The official doc suggests using [Create react native app](https://facebook.github.io/react-native/docs/getting-started.html). We will use the official React native cli so that there is no third party dependency.
```bash
npm install -g react-native-cli
```

## 5. Create your first App Scafold
We will create an app called `AppName`
```bash
  react-native init AppName

```
cd into AppName

## 6.Running in emulator
Ensure you have your emulator running, with developer mode on and usb debugging on. [You can read about that here](https://developer.android.com/studio/debug/dev-options)

Once you have your emulator running. cd into your folder
```
react-native run-android
```

## 7.Running in Device
Ensure you have your device  connected, with developer mode on and usb debugging on. [You can read about that here](https://developer.android.com/studio/debug/dev-options)

Once you have your emulator running. cd into your folder
```
react-native run-android
```

## 8. Install Xcode (Optional for IOS only)
Download and install from [here](https://developer.apple.com/xcode/).
To  run app on ios simulator run:
```bash
react-native run-ios
```

## Reader Doc
We have a nice article which will cover the above steps and a few more points [here](https://eng.wobe.io/react-native-the-beginning-92c6ea857b63).