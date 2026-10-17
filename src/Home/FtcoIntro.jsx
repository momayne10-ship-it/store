import React from 'react'

function FtcoIntro() {
  return (
    <div>

<section className="ftco-intro">
  <div className="container-wrap">
    <div className="wrap d-md-flex align-items-xl-end">
      <div className="info">
        <div className="row no-gutters">
          <div className="col-md-4 d-flex ftco-animate">
            <div className="icon">
              <span className="icon-phone" />
            </div>
            <div className="text">
              <h3 className='text-light'>000 (123) 456 7890</h3>
              <p>
                A small river named Duden flows by their place and supplies.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="icon">
              <span className="icon-my_location" />
            </div>
            <div className="text">
              <h3 className='text-light'>198 West 21th Street</h3>
              <p> 203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
          </div>
          <div className="col-md-4 d-flex ftco-animate">
            <div className="icon">
              <span className="icon-clock-o" />
            </div>
            <div className="text">
              <h3 className='text-light'>Open Monday-Friday</h3>
              <p>8:00am - 9:00pm</p>
            </div>
          </div>
        </div>
      </div>
      <div className="book p-4">
        <h3 className='text-light'>Book a Table</h3>
        <form action="#" className="appointment-form">
          <div className="d-md-flex">
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>
            <div className="form-group ml-md-4">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="d-md-flex">
            <div className="form-group">
              <div className="input-wrap">
                <div className="icon">
                  <span className="ion-md-calendar" />
                </div>
                <input
                  type="text"
                  className="form-control appointment_date"
                  placeholder="Date"
                />
              </div>
            </div>
            <div className="form-group ml-md-4">
              <div className="input-wrap">
                <div className="icon">
                  <span className="ion-ios-clock" />
                </div>
                <input
                  type="text"
                  className="form-control appointment_time"
                  placeholder="Time"
                />
              </div>
            </div>
            <div className="form-group ml-md-4">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </div>
          <div className="d-md-flex">
            <div className="form-group">
              <textarea
                name=""
                id=""
                cols={30}
                rows={2}
                className="form-control"
                placeholder="Message"
                defaultValue={""}
              />
            </div>
            <div className="form-group ml-md-4">
              <input
                type="submit"
                defaultValue="Appointment"
                className="btn btn-white py-3 px-4"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>



    </div>
  )
}

export default FtcoIntro