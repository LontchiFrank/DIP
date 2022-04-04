import React from "react";
import { useLocation } from "react-router-dom";
import VideoPlayer from "react-video-js-player";
import vid from "./vid.mp4";
function Videoplayer() {
  const location = useLocation();
  const { videoURL } = location.state;
  const videoSrc = vid;
  console.log(videoURL);
  const poster =
    "https://www.google.com/search?q=image+of+play+video&sxsrf=APq-WBtg9Y_E6CcgmN57qt0kkw9zmEL2Zg:1647670728073&tbm=isch&source=iu&ictx=1&vet=1&fir=7Pa2S7dB4jsOxM%252CQklMuZyIbTv-QM%252C_%253BW52dMvEcJPASQM%252CSKMVD_a3xhJsCM%252C_%253BUjXQ_kBJdre1NM%252CBDXoz9fWzfL33M%252C_%253BdFL_aFt28nYjOM%252CQklMuZyIbTv-QM%252C_%253BNSrUFY1LDO5hmM%252ChXucHsF7QkubVM%252C_%253BcDu9uUVd25hSRM%252CQklMuZyIbTv-QM%252C_%253BRaAH3oDsD_3MbM%252CWd_cozc3-3BIOM%252C_%253Bb2pCF5vjtXoC5M%252CQklMuZyIbTv-QM%252C_%253BgpInD2KKZwqhHM%252CreMmyVp-YZmxzM%252C_%253BNyUMUHBEUvkYyM%252CvCCflVP5W84qgM%252C_%253BxGeVAKpvLxLVGM%252CS-gUdPrFoWYFPM%252C_%253BaTGDyo3fp3zBWM%252CWd_cozc3-3BIOM%252C_%253BuM7H-JLUw1EvsM%252CS-gUdPrFoWYFPM%252C_%253BVpzzsLtY9YLq9M%252ClCmPGZ0LIfamzM%252C_&usg=AI4_-kSFRG2Bl1srt2WcgnJ3ZzKTyOF49Q&sa=X&ved=2ahUKEwj0mNDjw9H2AhUPx4UKHZ-kCosQ9QF6BAgkEAE#imgrc=UjXQ_kBJdre1NM";

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <VideoPlayer
        src={videoURL}
        poster={poster}
        width="720"
        height="430"
        config={{
          file: {
            attributes: {
              controlsList: "nodownload",
            },
          },
        }}
      />
    </div>
  );
}

export default Videoplayer;
