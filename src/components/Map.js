import React, {useState, useEffect } from "react";
import L from "leaflet";

function Map({setJobOfInterest, mapHeightVar}) {
    const [allJobs, setAllJobs] = useState(null);
  
    useEffect(fetchJobs, []);
    useEffect(showMap, [allJobs, setJobOfInterest]);
  
    //Function will be hoisted
    function showMap(){
      //Handle leaflet issue with recreating DOM container
      let container = L.DomUtil.get("map");
  
      if (container != null) {
        container._leaflet_id = null;
      }
      //Focus on Nairobi, however this should be done in production using bounds
      let nairobiCenter = [-1.2920659, 36.8219461];
      let myMap = L.map("map").setView(nairobiCenter, 11);
  
      let baseMapLayer= L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      })
  
      baseMapLayer.addTo(myMap);
      //Display markers only if there is job data
      if(allJobs != null){
        allJobs.forEach(function (job) {
          let marker = L.marker([job.latitude, job.longitude],{"JobIndex": job.id})
          marker.on('click', (e) => {
            setJobOfInterest(allJobs[e.target.options.jobIndex]);
          });
          let popup = L.popup().setContent(`${job.job_status.category} job ID ${job.id} chosen`);
          marker.bindPopup(popup);
          marker.addTo(myMap);
      });
  
      }
  
  
    }
  
    function fetchJobs(){
      fetch('http://localhost:9292/jobs')
      .then((response) => response.json())
      .then((data) => setAllJobs(data));
    }
  
    return (<div id="map" class="container-fluid" style={{ width: "100%", height: mapHeightVar }}></div>);
  }

export default Map;