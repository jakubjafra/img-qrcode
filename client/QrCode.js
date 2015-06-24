function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}

Template.QrCode.onRendered(function(){
    var instance = Template.instance();

    instance.$("div").qrcode({
        "render": 'canvas',
        "size": 50,
        "text": instance.data.text
    });

    var canvas = instance.$('div > canvas')[0];
    instance.$("div").append(convertCanvasToImage(canvas));
    instance.$("canvas").remove();

    instance.$("img").addClass("qr-code");

    if(instance.data.size !== undefined) {
        instance.$("img").css({
            'width': instance.data.size,
            'height': instance.data.size
        });
    }
});