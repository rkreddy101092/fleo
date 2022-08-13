import React from "react";

function FeatureBox({ item }) {
    return (
        <div style={{ backgroundColor: '#FFFFFF', marginBottom: 100, boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.25)", padding: '100px 160px', display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: 100, paddingBottom: 100 }}>
            <img src={item.image} style={{ flex: 0.4, paddingLeft: 'calc((100vw - 1000px) / 6)', height: "auto", width: '100%', resize: 'contain', objectFit: 'contain' }} />
            <div style={{ flex: 0.2 }} />
            <div style={{ flex: 0.4, textAlign: 'left', paddingLeft: 45 }}>
                <div style={{ paddingLeft: 20, marginBottom: 30, borderLeft: "2px solid #56402A" }}>
                    <span className='feature_title'>{item.title}</span>
                </div>
                <p className='description_section_1'>{item.description}</p>
            </div>
        </div>
    )

}

export default FeatureBox;