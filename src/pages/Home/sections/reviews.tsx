import { useEffect, useRef } from "react";

const ReviewWidgets: React.FC = () => {
    const elfsightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
     
        // Load Trustmary Widget
        const trustmaryScript = document.createElement("script");
        trustmaryScript.src = "https://widget.trustmary.com/DM5wb2hpx";
        trustmaryScript.async = true;
        document.body.appendChild(trustmaryScript);

        // // Load Trustindex Widget
        // const trustindexScript = document.createElement("script");
        // trustindexScript.src = "https://cdn.trustindex.io/loader.js?c31e44841710990a8b16dcd4ddb";
        // trustindexScript.async = true;
        // trustindexScript.defer = true;
        // document.body.appendChild(trustindexScript);

        // // Load Elfsight Widget
        // const elfsightScript = document.createElement("script");
        // elfsightScript.src = "https://static.elfsight.com/platform/platform.js";
        // elfsightScript.async = true;
        // document.body.appendChild(elfsightScript);

        return () => {
            document.body.removeChild(trustmaryScript);
            // document.body.removeChild(trustindexScript);
            // document.body.removeChild(elfsightScript);
        };
    }, []);

    return (
        <div>
            <h1>Widget 1 (Trustmary)</h1>

            <h1>Widget 2 (Trustindex)</h1>

            <h1>Widget 3 (Elfsight Google Reviews)</h1>
            <div ref={elfsightRef} className="elfsight-app-74d4f7cd-e5a6-4233-b52a-6b6107438e42" data-elfsight-app-lazy></div>
        </div>
    );
};

export default ReviewWidgets;
