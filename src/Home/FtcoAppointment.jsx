import React from 'react'

function FtcoAppointment() {
  return (
    <div>

<section className="ftco-appointment">
  <div className="overlay" />
  <div className="container-wrap">
    <div className="row no-gutters d-md-flex align-items-center">
      <div className="col-md-6 d-flex align-self-stretch">
        
        <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.30931316888!2d31.424039394916125!3d31.04137960553147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2z2KfZhNmF2YbYtdmI2LHYqdiMINin2YTZhdmG2LXZiNix2KkgKNmC2LPZhSAyKdiMINin2YTZhdmG2LXZiNix2KnYjCDZhdit2KfZgdi42Kkg2KfZhNiv2YLZh9mE2YrYqQ!5e0!3m2!1sar!2seg!4v1791668678009!5m2!1sar!2seg"
  width={500}
  height={450}
  style={{ border: 0 ,margin: 20,}}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"

/>


      </div>
      
      <div className="col-md-6 appointment ftco-animate">
        <h3 className="mb-3">Book a Table</h3>
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
                className="btn btn-primary py-3 px-4"
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

export default FtcoAppointment