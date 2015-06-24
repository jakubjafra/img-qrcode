img-qr-code
===========

Provides nice template for generating QR codes as ````<img>```` directly into HTML.

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

Optional parameters are:
* ````size```` - size of image