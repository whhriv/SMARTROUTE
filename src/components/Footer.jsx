import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow
} from 'mdb-react-ui-kit';
import GoogleMapsLink from './Mapping/GoogleMapsLink'

export default function Footer() {

    let timeDuration = JSON.parse(sessionStorage.getItem("FooterTime"));
    let start = sessionStorage.getItem("startPoint");
    let waypoints = JSON.parse(sessionStorage.getItem("waypoints"));


    const waypointsWithSpaces = waypoints.map((waypoint, index) => (
        <span key={index}>
          {waypoint}
          {index !== waypoints.length - 1 && ', '}
        </span>
      ));

  return (
    <MDBFooter bgColor='light' className='text-start text-lg-left'>
      <MDBContainer className='footer'>
        <MDBRow>
            <MDBCol size='auto'>
           
              <GoogleMapsLink /> 
            </MDBCol>
            <MDBCol size='auto mt-2'>
              <span className="timeDuration ">Route Time: {timeDuration} seconds</span>
              <span className="ps-5"><b>Starting Location: </b>{start},</span><span> <b>Stops </b>{waypointsWithSpaces}</span>
   
   
      </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBFooter>
  );
}

//     <MDBFooter bgColor='light' className='text-start text-lg-left'>
//       <MDBContainer className='footer'>
//         <MDBRow>
//           {/* <MDBCol size='auto' className='mt-0 mb-4 mb-md-0'> */}
//            <div>
//               <GoogleMapsLink /> 
//               {/* </MDBCol>
//               <MDBCol> */}
                
//               <span className="timeDuration ">Route Time: {timeDuration}</span>
            
//           {/* </MDBCol> */}
//           {/* <MDBCol><p className="timeDuration ">Route Time: {timeDuration}</p></MDBCol> */}
//         </div>
//         </MDBRow>
//       </MDBContainer>
//     </MDBFooter>
//   );
// }