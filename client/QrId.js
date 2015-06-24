function convertCanvasToImage(canvas) {
    var image = new Image();
    image.src = canvas.toDataURL("image/png");
    return image;
}

Template.QrId.onRendered(function(){
    var instance = Template.instance();

    instance.$("div").qrcode({
        "render": 'canvas',
        "size": 50,
        "text": instance.data.text
    });

    var canvas = instance.$('div > canvas')[0];
    instance.$("div").append(convertCanvasToImage(canvas));
    instance.$("canvas").remove();

    var width = instance.data.width || "256px";
    var height = instance.data.height || "256px";
    instance.$("img").css({
        'width': width,
        'height': height
    }).addClass("qr-code");
});