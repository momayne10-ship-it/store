import React from 'react'

function FtcoCounter() {
  return (
    <div>

<section
  className="ftco-counter ftco-bg-dark img"
  id="section-counter"
  style={{ backgroundImage: "url(images/bg_2.jpg)" }}
  data-stellar-background-ratio="0.5"
>
  <div className="overlay" />
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-10">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center">
              <div className="text">
                <div className="icon">
                  <span className="flaticon-coffee-cup" />
                </div>
                <strong className="number" data-number={100}>
                  50
                </strong>
                <span>Coffee Branches</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center">
              <div className="text">
                <div className="icon">
                  <span className="flaticon-coffee-cup" />
                </div>
                <strong className="number" data-number={85}>
                  38
                </strong>
                <span>Number of Awards</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center">
              <div className="text">
                <div className="icon">
                  <span className="flaticon-coffee-cup" />
                </div>
                <strong className="number" data-number={10567}>
                  90
                </strong>
                <span>Happy Customer</span>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3 d-flex justify-content-center counter-wrap ftco-animate">
            <div className="block-18 text-center">
              <div className="text">
                <div className="icon">
                  <span className="flaticon-coffee-cup" />
                </div>
                <strong className="number" data-number={900}>
                  70
                </strong>
                <span>Staff</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default FtcoCounter