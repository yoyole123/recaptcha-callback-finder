# recaptcha-callback-finder
A script that can be used to find and call Google Recaptcha callback method the page that this script is being executed in.
This contains 2 function declerations that can be called with a given Recaptha token.

## Usage:
Get your recaptcha token string...
```
const token = yourRecaptchaTokenReceiverMethod();
```

Then, use this function to find and call Google Recaptcha's callback method.
```
callCallbackMethod(token);
```
