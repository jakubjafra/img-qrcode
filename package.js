Package.describe({
    name: 'khrone:img-qr-code',
    version: '0.0.1',

    summary: "Provides template to generate QR code in <img> tag.",

    git: 'https://github.com/khronedev/img-qr-code',

    documentation: 'README.md'
});

Package.onUse(function(api){
    api.versionsFrom('1.1.0.2');

    api.use([
        'meteor-platform',
        'steeve:jquery-qrcode'
    ]);

    api.imply('templating');

    api.addFiles(['client/QrId.html', 'client/QrId.js'], 'client');
});