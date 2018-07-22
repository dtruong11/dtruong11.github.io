function renderVideo () {
    let videoTemplate = `
    <!-- nav bar -->
    <div class="topnav">
    <a class="float-left" href="#home">GEMS</a>
    <form class="float-left form-inline my-5 my-lg-0">
        <input class="form-control ml-5 mr-sm-2 mt-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    <a class="active float-right mr-2" href="#home">Events</a>
    <a class="float-right mr-2" href="#news">Device Sharing</a>
    <a class="float-right mr-2" href="#contact">Resource</a>
    <a class="float-right mr-2" href="#about">About</a>
</div>
<div id="video" style="margin:0 auto;">
    <div id="agora_local" style="float:right;width:210px;height:147px;display:inline-block;"></div>
</div>
<div id="div_device" class="panel panel-default">
    <div class="select">
        <label for="audioSource">Audio source: </label>
        <select id="audioSource"></select>
    </div>
    <div class="select">
        <label for="videoSource">Video source: </label>
        <select id="videoSource"></select>
    </div>
</div>
    `
    document.querySelector('body').innerHTML = videoTemplate
}

module.exports = renderVideo;
