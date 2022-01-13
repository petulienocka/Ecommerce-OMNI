import React from 'react';

const RebelModel = () => {
    return (
        <>
            <model-viewer
                id="iframe-viewer"
                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Rebel.glb"
                ios-src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/rebel.usdz"
                rel="ar"
                ar
                camera-controls
                ar-scale="auto"
                ar-modes="webxr scene-viewer quick-look fallback"
                quick-look-browsers="safari chrome"
                environment-image="neutral"
                ar-status="not-presenting"
                alt="3d model boheme package"
                shadow-intensity="1"
                camera-orbit="-125deg 75deg"
            ></model-viewer>
        </>
    );
};

export default RebelModel;
