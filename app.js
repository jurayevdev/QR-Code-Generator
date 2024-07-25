const qrCode = new QRCodeStyling({
    width: 300,
    height: 300,
    margin: 10,
    imageOptions: {
        crossOrigin: "anonymous",
        margin: 20
    },
    dotsOptions: {
        color: "#1e1e1e",
        type: "rounded"
    },
    backgroundOptions: {
        color: "#ffffff",
    },
    cornersSquareOptions: {
        color: "#1e1e1e",
        type: "extra-rounded"
    },
    cornersDotOptions: {
        color: "#1e1e1e",
        type: "dot"
    }
});

function generateQRCode() {
    var text = document.getElementById('text-input').value;
    
    if (text) {
        qrCode.update({
            data: text
        });
        qrCode.append(document.getElementById('qrcode'));
    } else {
        alert('Please enter the text!');
    }
}
