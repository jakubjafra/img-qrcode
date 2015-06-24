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

Parameters
----------
* ````text```` - text to be encoded
* ````size```` - (optional) size of image (for example ````128px`````)