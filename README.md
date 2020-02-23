# AgileEngine Image Viewer

## Upgraded to 0.61.5
You can use ff13d38 as template.

PS.
I've changed background color of first screen
There are problem with tintColor for RefreshControl (haven't investigated this problem)


### Installation

**Step 1:** Install node modules and pods
```
yarn install
cd ios && pod install && cd ..
```

**Step 2a:** If iOS

```
react-native run-ios
```

**Step 2b:** If Android

```
react-native run-android
```

### DONE 
1. For simplification the app should support portrait mode only.
2. The app should load and display photos from our API endpoint http://195.39.233.28:8035
3. The app should fetch paginated photo feed in JSON format with the following REST API call (GET): GET /images Headers: Authorization: Bearer ce09287c97bf310284be3c97619158cfed026004 Following pages can be retrieved by appending ‘page=N’ parameter: GET /images?page=2 No redundant REST API calls should be triggered by the app.
4. The app should fetch more photo details (photographer name, better resolution) by the following REST API call (GET): GET /images/${id}
5. Grid View: 
    * Displays the 2-column grid with photos.
    * When a user taps on a grid cell open up the Photo View.
6. Photo view:
    * Displays a fullscreen photo.
    * Shows author name and camera model as an overlay.
    * Allows sharing a photo URL via a floating action button.
