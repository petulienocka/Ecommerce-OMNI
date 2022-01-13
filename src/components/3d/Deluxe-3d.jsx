import React from 'react';

const DeluxeModel = () => {
    return (
        <>
            <model-viewer
                id="iframe-viewer"
                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Deluxe.glb"
                ios-src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/deluxe.usdz"
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
                camera-orbit="-115deg 75deg"
            ></model-viewer>
        </>
    );
};

export default DeluxeModel;
