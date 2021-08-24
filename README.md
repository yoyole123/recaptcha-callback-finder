# recaptcha-callback-finder
A JS script that can be used to find and call Google Recaptcha callback method the page that this script is being executed in.

## Usage:
Get your recaptcha token string...
```
const token = yourRecaptchaTokenReceiverMethod();
```

Then, use this function to find and call Google Recaptcha's callback method.
```
callCallbackMethod(token);
```
