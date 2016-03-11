khrone:img-qrcode
=================

Provides nice template for generating QR codes as ````<img>```` directly into HTML. It uses the [jquery-qrcode](https://larsjung.de/jquery-qrcode/) to encode messages.

Usage
-----
The simplest:
````
{{> QrCode text="khrone:img-qr-code" }}
````
is generating code:
````
<div class="qr-code-container">
    <img class="qr-code" src="{ ... }" />
</div>
````
The img is 256x256 px size.

You can also add smart arguments on the text attribute like so:
````
{{> QrCode text=currentUserEmail }}
````
Where currentUserEmail is a data object returned by your helper or sent from the router:
````
Template.AdministrationPatientsList.helpers({
    currentUserEmail: function(){
        return 'example@gmail.com';
    }
});
````

Parameters
----------
* ````text```` - text to be encoded
* ````size```` - (optional) size of image (for example ````128px`````)
