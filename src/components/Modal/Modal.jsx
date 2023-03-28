import React from 'react';

    const Modal = (props) => {
        console.log(props.singleData);

    const {image_link,description, integrations , features} =props.singleData;

    console.log(features);
    // console.log(object.values(features || {}));

    return (
        <div>
         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-5" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl">
            <div className="card card-side bg-base-100 ">
          
            <div className="card-body">
                <h2 className="card-title">{description ? description: "not found"}</h2>

            <div className='flex justify-around'>
                <div>
                    <h1 className='text-xl font-bold'>Features</h1>
                    {/* {features && 
                       object.values(features || {}).map((value) =>(<p>{value.feature_name ? value.feature_name : "Not Found"}</p>))
                    } */}
                    {/* {
                        features?.map((feature,index) =>(<p>{index + 1} .{feature}</p>))
                    } */}
                </div>
                <div>
                <h1 className='text-xl font-bold'>Integration</h1>
                {
                    integrations && 
                    integrations.map((int) =>(<p>{int ? int : "not found"}</p>))
                }
                </div>
            </div>

                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div>
            </div>
            <figure><img className='w-full h-64' src={image_link && image_link[0]} alt="Movie"/></figure>
            </div>
           </div>
           </div>
        </div>
    );
};

export default Modal;