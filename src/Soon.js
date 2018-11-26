import React from 'react';

class Soon extends React.Component{
    render(){
        return(
            <div>
                <div className="overlay" />
                <video
                    playsInline="playsinline"
                    autoPlay="autoplay"
                    muted="muted"
                    loop="loop"
                >
                    <source src="mp4/bg.mp4" type="video/mp4" />
                </video>
                <div className="masthead">
                    <div className="masthead-bg" />
                    <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 my-auto">
                        <div className="masthead-content text-white py-5 py-md-0">
                            <h1 className="mb-3">Coming Soon!</h1>
                            <p className="mb-5">
                            We're working hard to finish the development of this
                            site. Our target launch date is
                            <strong> January 2019</strong>!
                            </p>
                            <div className="input-group input-group-newsletter" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

        )
    }
}

export default Soon;