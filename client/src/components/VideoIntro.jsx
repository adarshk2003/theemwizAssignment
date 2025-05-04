// import React, { useEffect, useRef, useState } from "react";
// import styled from "styled-components";
// import Home from "./Home";

// const VideoContainer = styled.div`
//   position: fixed;
//   top: 0;
//   left: 0;
//   z-index: 9999;
//   width: 100%;
//   height: 100%;
//   background: black;
//   display: ${({ show }) => (show ? "flex" : "none")};
//   align-items: center;
//   justify-content: center;
//   transition: opacity 1s ease-in-out;

//   video {
//     width: 100%;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

// const VideoIntro = () => {
//   const [showVideo, setShowVideo] = useState(true);
//   const [isMobile, setIsMobile] = useState(null); // Start as null
//   const videoRef = useRef(null);

//   // Check screen size only on mount
//   useEffect(() => {
//     const mobile = window.innerWidth <= 768;
//     setIsMobile(mobile);
//   }, []);

//   // Handle video end
//   useEffect(() => {
//     const video = videoRef.current;
//     const handleEnd = () => {
//       setTimeout(() => setShowVideo(false), 300);
//     };

//     if (video) video.addEventListener("ended", handleEnd);
//     return () => {
//       if (video) video.removeEventListener("ended", handleEnd);
//     };
//   }, []);

//   // Wait until isMobile is known
//   if (isMobile === null) return null;

//   return (
//     <>
//       <VideoContainer show={showVideo}>
//         <video ref={videoRef} autoPlay muted playsInline>
//           <source
//             src={
//               isMobile
//                 ? "/agencyresponsive [5E5A1F2].mp4"
//                 : "/agency loding [4E81CBA].mp4"
//             }
//             type="video/mp4"
//           />
//           Your browser does not support the video tag.
//         </video>
//       </VideoContainer>

//       {!showVideo && <Home />}
//     </>
//   );
// };

// export default VideoIntro;
