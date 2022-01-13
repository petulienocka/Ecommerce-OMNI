import React from 'react';
import './style.scss';

const BohemeModel = () => {
    return (
        <>
            <model-viewer
                id="iframe-viewer"
                src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/Boheme.glb"
                ios-src="https://theomnified-media.s3.eu-north-1.amazonaws.com/3d-Models/boheme.usdz"
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
                camera-orbit="55deg 75deg 20m"
            ></model-viewer>
        </>
    );
};

export default BohemeModel;
