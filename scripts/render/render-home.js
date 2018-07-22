function homeTemplate () {
    return `
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

    <!-- urgent request -->
    <div class='container mt-3'>
        <div>
            <img src="./assets/Icons/Urgent-Request.png" alt="">
        </div>
    </div>
    <div class='container request mt-3 border border-light pt-4 text-wrap'>
        <div class='row'>
            <div class='col-1'>
                <img class="avatar" src="https://placekitten.com/100/100" alt="kitten">
            </div>
            <div class='col-11'>
                <div class='row'>
                    <div class='col-4 px-0'>
                        <h5>PAHOA, HAWAII - Volcano Eruption</h5>
                        <p>Amy Anderson</p>
                    </div>
                    <div class='col-5 px-0'>
                        <p>Patient has cardiovascular disease and asthma, currently has trouble breathing.</p>
                    </div>
                    <div class='col-3'>
                        <div class="d-flex flex-row">
                            <img class='buttons-acc' src="./assets/Buttons/Accept.png" alt="accept-button">
                            <img class='buttons-decline' src="./assets/Buttons/Decline.png" alt="decline-button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class='container request mt-3 border border-light pt-4 text-wrap'>
        <div class='row'>
            <div class='col-1'>
                <img class="avatar" src="https://placekitten.com/100/100" alt="kitten">
            </div>
            <div class='col-11'>
                <div class='row'>
                    <div class='col-4 px-0'>
                        <h5>PAHOA, HAWAII - Volcano Eruption</h5>
                        <p>Amy Anderson</p>
                    </div>
                    <div class='col-5 px-0'>
                        <p>Patient has cardiovascular disease and asthma, currently has trouble breathing.</p>
                    </div>
                    <div class='col-3'>
                        <div class="d-flex flex-row">
                            <img class='buttons-acc' src="./assets/Buttons/Accept.png" alt="accept-button">
                            <img class='buttons-decline' src="./assets/Buttons/Decline.png" alt="decline-button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class='container request mt-3 border border-light pt-4 text-wrap'>
        <div class='row'>
            <div class='col-1'>
                <img class="avatar" src="https://placekitten.com/100/100" alt="kitten">
            </div>
            <div class='col-11'>
                <div class='row'>
                    <div class='col-4 px-0'>
                        <h5>PAHOA, HAWAII - Volcano Eruption</h5>
                        <p>Amy Anderson</p>
                    </div>
                    <div class='col-5 px-0'>
                        <p>Patient has cardiovascular disease and asthma, currently has trouble breathing.</p>
                    </div>
                    <div class='col-3'>
                        <div class="d-flex flex-row">
                            <img class='buttons-acc' src="./assets/Buttons/Accept.png" alt="accept-button">
                            <img class='buttons-decline' src="./assets/Buttons/Decline.png" alt="decline-button">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class='container mt-4'>
        <div>
            <img src="./assets/Icons/Current-Events.png" alt="current-event-button">
        </div>
    </div>

    <!-- Emergency Event -->
    <div class="container mt-3 d-flex flex-row bd-highlight mb-5">
        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top events-pic" src="./assets/Volcano Photos/00a.jpg" alt="Card image cap">
                <div class="card-body">
                    <div class='d-flex row'>
                        <div class='col border-right'>
                            <p>115 incidents reported</p>
                        </div>
                        <div class='col'>
                            <p>41 doctors helping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top events-pic" src="./assets/Volcano Photos/turila.jpg" alt="volcano photo">
                <div class="card-body">
                    <div class='d-flex row events-text'>
                        <div class='col border-right'>
                            <p>120 incidents reported</p>
                        </div>
                        <div class='col'>
                            <p>25 doctors helping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="col">
            <div class="card" style="width: 18rem;">
                <img class="card-img-top events-pic" src="./assets/Volcano Photos/hqdefault.jpg" alt="volcano photo">
                <div class="card-body">
                    <div class='d-flex row'>
                        <div class='col border-right'>
                            <p>545 incidents reported</p>
                        </div>
                        <div class='col'>
                            <p>98 doctors helping</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
}

function renderHome () {
    document.querySelector('body').innerHTML = homeTemplate() 
}

module.exports = renderHome;