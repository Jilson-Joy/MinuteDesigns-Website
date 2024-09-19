import React from "react";
import "./WebApplication.css";
import WebsiteIcon from "../../../assets/images/Website designer.gif";
import Card from "react-bootstrap/Card";
import { MoveRight } from "lucide-react";

function WebApplication() {
  return (
    <>
      {/* section 1 */}
      <div className="webAppTop">
        <div className="row">
          <div className="webapplication_header col-md-6 ">
            <div>
              <p className="webapplication_header_text1">
                Seamless web experiences designed to elevate user satisfaction.
              </p>
              {/* <p>
                Having designed dozens of products, we have the experience and
                know-how needed to create complex designs that are
                well-thought-out and highly efficient.
              </p> */}
            </div>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={WebsiteIcon}
              alt="Web app design"
              className="responsive-img"
            />
          </div>
        </div>
        <div className="webapplication_header_button row ">
          <button>
            Let's Talk <MoveRight />
          </button>
        </div>
      </div>

      <div className="container">
        <div className="webAppCards_heading">
          <p>
            Work with a team ready to rock your{" "}
            <span style={{ color: "#ee964b" }}>product</span>
          </p>
        </div>

        {/* section 2 */}

        {/* <div className="webAppServices">
          <div className="row mt-5 ">
            <div className="service_card_1 col-12 col-md-6 ">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h3>Web Apps</h3>
                    <p className="webApp_text">
                      We develop intuitive, secure, and scalable web
                      applications that drive growth & success for your
                      business. We make sure every app is fully tailored for
                      your unique requirements.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://i.pinimg.com/564x/c5/85/40/c58540b6ed16a8203d3f1f4f900e058c.jpg"
                      alt="Web Apps"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="service_card_1 col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h3>CRM</h3>
                    <p className="webApp_text">
                      CRM systems empower businesses to build & nurture strong
                      customer relationships. With data-driven insights and
                      intuitive interfaces, our CRM solutions streamline sales,
                      marketing, and customer service
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://i.pinimg.com/564x/c5/85/40/c58540b6ed16a8203d3f1f4f900e058c.jpg"
                      alt="Web Apps"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row  mb-5">
            <div className="service_card_1 col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h3>Admin Panel</h3>
                    <p className="webApp_text">
                      With robust features and customizable settings, our admin
                      panles provide you with complete control over user
                      management, content management, data analysis, and system
                      configuration.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://i.pinimg.com/564x/c5/85/40/c58540b6ed16a8203d3f1f4f900e058c.jpg"
                      alt="Web Apps"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="service_card_1 col-12 col-md-6">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <div className="d-flex flex-column justify-content-center align-items-center text-center">
                    <h3>Dashboard</h3>
                    <p className="webApp_text">
                      Dashboards provide a comprehensive and visual
                      representation of your business's key metrics and data.
                      With user-friendly interfaces and real-time analytics, we
                      create dashboards that enable you to make data-driven
                      decisions with ease.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-sm-6">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src="https://i.pinimg.com/564x/c5/85/40/c58540b6ed16a8203d3f1f4f900e058c.jpg"
                      alt="Web Apps"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="">
          <div className="webAppCards row mt-5">
            <div className="webAppCards_card col-md-6">
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/24/bd/46/24bd46f5e985ca76b7de56eb47569c3e.jpg"
              />
              <Card.Body className="webApp_card_body">
                <Card.Title>Web Apps</Card.Title>
                <Card.Text className="webApp_text">
                  We develop intuitive, secure, and scalable web applications
                  that drive growth & success for your business. We make sure
                  every app is fully tailored for your unique requirements.
                </Card.Text>
              </Card.Body>
            </div>

            <div className="webAppCards_card col-md-6">
              <Card.Body className="webApp_card_body">
                <Card.Title>CRM</Card.Title>
                <Card.Text className="webApp_text">
                  CRM systems empower businesses to build & nurture strong
                  customer relationships. With data-driven insights and
                  intuitive interfaces, our CRM solutions streamline sales,
                  marketing, and customer service
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/d0/38/43/d03843f15d986adb51d862cda2e8376a.jpg"
              />
            </div>
          </div>

          <div className="webAppCards row mt-5">
            <div className="webAppCards_card col-md-6">
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src="https://i.pinimg.com/564x/59/b8/df/59b8dfa2b099f33872402445830af6c5.jpg"
              />
              <Card.Body className="webApp_card_body">
                <Card.Title>Admin Panel</Card.Title>
                <Card.Text className="webApp_text">
                  With robust features and customizable settings, our admin
                  panles provide you with complete control over user management,
                  content management, data analysis, and system configuration.
                </Card.Text>
              </Card.Body>
            </div>

            <div className="webAppCards_card col-md-6">
              <Card.Body className="webApp_card_body">
                <Card.Title>Dashboard</Card.Title>
                <Card.Text className="webApp_text">
                  Dashboards provide a comprehensive and visual representation
                  of your business's key metrics and data. With user-friendly
                  interfaces and real-time analytics, we create dashboards that
                  enable you to make data-driven decisions with ease.
                </Card.Text>
              </Card.Body>
              <Card.Img
                style={{
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                variant="top"
                src="https://i.pinimg.com/736x/6a/00/e3/6a00e3a85e84aac71cb1a14ddd8011ce.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebApplication;
