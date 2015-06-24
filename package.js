Package.describe({
    summary: "Provides template to generate QR code in <img> tag.",
    version: "1.0.0",
    name: "khrondev:img-qr-code",
});

Package.onUse(function(api){
    api.use([
        'meteor-platform',
        'steeve:jquery-qrcode'
    ]);

    api.imply('templating');

    api.addFiles(['QrId.html', 'QrId.js'], 'client');
});