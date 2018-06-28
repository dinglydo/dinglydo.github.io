var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d"),
    height = canvas.height = window.innerHeight,
    width = canvas.width = window.innerWidth;

window.onload = function()
{
    var radius = 60,
        centerX = width / 2,
        centerY = height / 2;
    function getMousePos(evt)
    {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

    function Inside(evt)
    {
        ctx.clearRect(0, 0, width, height);
        ctx.font = "48px serif";
        // (x - h)^2 + (y - k)^2 < r^2
        var mousePos = getMousePos(evt);
        var ans = Math.pow(mousePos.x - centerX, 2) + Math.pow(mousePos.y - centerY, 2);
        if (ans < (radius * radius))
            ctx.fillText("Inside Circle", 0, canvas.height);
        else
            ctx.fillText("Outside Circle", 0, canvas.height);
        draw();
    }

    function draw()
    {
        ctx.beginPath();
        ctx.ellipse(centerX, centerY, radius, radius, 0, 0, Math.PI * 2, false);
        ctx.fill();
    }
    canvas.addEventListener("mousemove", Inside);
    draw();
}