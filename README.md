# NativeScript Hackathon: template #3 - Soundcloud API

## Inroduction
This template has been created for the [Angular Connect Hackathon](http://angularconnect.com/2016/extras/), hosted by Progress Software.

Be sure to check the announcement, rules and prices at [ac-nativescript-hackathon.devpost.com](http://ac-nativescript-hackathon.devpost.com/).

## Getting started

Once you go through the [quick setup](http://docs.nativescript.org/angular/start/quick-setup.html) of NativeScript, the template should get you started with a sample app using Soundcloud's API:

### Scaffolding

First launch the app generator, pointing to this template
```
tns create my-soundcloud-app --template https://github.com/Appverse/nativescript-template-clarifai
```
And then Launch the setup script (it will just move some files around)
```
cd my-soundcloud-app
node app/setup.js
```
### API setup
- [Signup](https://soundcloud.com/signin) to the awesome Soundcloud Service
- After registering, [create your app in the dashboard](http://soundcloud.com/you/apps) and you should now have a __Client Id__ available.
- Edit `secrets.json` and replace placeholders with that _Client Id_.
- Run ```tns emulate ios``` and/or ```tns emulate android``` to make sure everything is in place and working
- Start hacking!

### Helpers
You should check [Soundcloud's guide](https://developers.soundcloud.com/docs/api/reference) to learn more about the API.
