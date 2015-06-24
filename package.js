Package.describe({
    name: 'khrone:img-qrcode',
    version: '0.1.1',

    summary: "Provides template to generate QR code in <img> tag.",

    git: 'https://github.com/khronedev/img-qrcode',

    documentation: 'README.md'
});

Package.onUse(function(api){
    api.versionsFrom('1.1.0.2');

    api.use([
        'meteor-platform',
        'steeve:jquery-qrcode@0.2.2'
    ]);

    api.imply('templating');

    api.addFiles([
        'client/QrCode.html',
        'client/QrCode.js'
    ], 'client');
});