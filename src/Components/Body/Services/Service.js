import React from "react";
import "./Service.css";
import winImg from "../images/windowAC.png";
import splitImg from "../images/Split-AC.png";
import vrvImg from "../images/vrv.png";
import ductImg from "../images/ductAC.png";
import casImg from "../images/casAC.png";
import pipeImg from "../images/pipe.png";

function Service() {
  return (
    <div>
      <div class="section">
        <h2 style={{ color: "#a43238" }}>
          Service And repair for all types of AC
        </h2>
        <div class="all-services-images">
          <ul>
            <li>
              <img src={winImg} />
              <div class="title_service">WINDOW AC</div>
              <div class="service_details">
                <ul>
                  <li>Deep Cleaning of AC for fresh air</li>
                  <li>Filter, coils etc. cleaned with water</li>
                  <li>Checks the elements property</li>
                  <li>Installation and gas charging</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="all-services-images">
          <ul>
            <li>
              <img src={splitImg} />
              <div class="title_service">SPLIT AC</div>
              <div class="service_details">
                <ul>
                  <li>Deep Cleaning of AC for fresh air</li>
                  <li>Filter, coils etc. cleaned with water</li>
                  <li>Checks the elements property</li>
                  <li>Installation and gas charging</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="all-services-images">
          <ul>
            <li>
              <img src={vrvImg} />
              <div class="title_service">VARIABLE REFRIGERANT VOLUME</div>
              <div class="service_details">
                <ul>
                  <li>Deep Cleaning of AC for fresh air</li>
                  <li>Filter, coils etc. cleaned with water</li>
                  <li>Checks the performance of the air conditioner</li>
                  <li>Installation and gas charging</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="all-services-images">
          <ul>
            <li>
              <img src={ductImg} />
              <div class="title_service">DUCTABLE AIR CONDITIONER</div>
              <div class="service_details">
                <ul>
                  <li>Deep Cleaning of AC for fresh air</li>
                  <li>Filter, coils etc. cleaned with water</li>
                  <li>Checks the performance of the air conditioner</li>
                  <li>Installation and gas charging</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="all-services-images">
          <ul>
            <li>
              <img src={casImg} />
              <div class="title_service">CASSETTE AIR CONDITIONER</div>
              <div class="service_details">
                <ul>
                  <li>Deep Cleaning of AC for fresh air</li>
                  <li>Filter, coils etc. cleaned with water</li>
                  <li>Checks the performance of the air conditioner</li>
                  <li>Installation and gas charging</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="all-services-images">
          <ul>
            <li>
              <img src={pipeImg} />
              <div class="title_service">UNDERGROUND PIPE FITTING</div>
              <div class="service_details">
                <ul>
                  <li>Proper installation of pipeline</li>
                  <li>Supply of gas properly</li>
                  <li>Wrapping of pipe properly</li>
                  <li>Proper testing of pipeline</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Service;
