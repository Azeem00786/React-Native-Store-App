# if [ -z "$VERSION_NAME" ]
# then
#     echo "You need define the VERSION_NAME variable in App Center"
#     exit
# fi

# PROJECT_NAME=AwesomeProject
# ANDROID_MANIFEST_FILE=$APPCENTER_SOURCE_DIRECTORY/android/app/src/main/AndroidManifest.xml
# INFO_PLIST_FILE=$APPCENTER_SOURCE_DIRECTORY/ios/$PROJECT_NAME/Info.plist

# if [ -e "$ANDROID_MANIFEST_FILE" ]
# then
#     echo "Updating version name to $VERSION_NAME in AndroidManifest.xml"
#     sed -i '' 's/versionName="[0-9.]*"/versionName="'$VERSION_NAME'"/' $ANDROID_MANIFEST_FILE

#     echo "File content:"
#     cat $ANDROID_MANIFEST_FILE
# fi


# if [ -e "$INFO_PLIST_FILE" ]
# then
#     echo "Updating version name to $VERSION_NAME in Info.plist"
#     plutil -replace CFBundleShortVersionString -string $VERSION_NAME $INFO_PLIST_FILE

#     echo "File content:"
#     cat $INFO_PLIST_FILE
# fi

#!/usr/bin/env bash

echo "directory name azeem"

echo "app centre buildId ->> ${APPCENTER_BUILD_ID}"
echo "app centre branch ->> ${APPCENTER_BRANCH}"
echo "app centre APPCENTER_TRIGGER ->> ${APPCENTER_TRIGGER}"
echo "app centre APPCENTER_OUTPUT_DIRECTORY ->> ${APPCENTER_OUTPUT_DIRECTORY}"
echo "app centre APPCENTER_REACTNATIVE_PACKAGE ->> ${APPCENTER_REACTNATIVE_PACKAGE}"
echo "app centre APPCENTER_SOURCE_DIRECTORY ->> ${APPCENTER_SOURCE_DIRECTORY}"
sed -i "" "s/OnlinekakaCustomer/AwesomeProject/g" "${APPCENTER_SOURCE_DIRECTORY}/android/app/src/main/res/values/strings.xml"
echo "☛ App Name update"
# directory name azeem
# app centre buildId ->> 21
# app centre branch ->> dev
# app centre APPCENTER_TRIGGER ->> manual
# app centre APPCENTER_OUTPUT_DIRECTORY ->> /Users/runner/work/1/a/build
# app centre APPCENTER_REACTNATIVE_PACKAGE ->> package.json
# app centre APPCENTER_SOURCE_DIRECTORY ->> /Users/runner/work/1/s/android/app/src/main/res/values/strings.xml
