import React from 'react'

const RefChildren = React.forwardRef((props,ref) => {
  return (
   <>
        <h1>Forwarding Ref</h1>
        <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text"  className="form-control" ref={ref}/>
        </div>
   </>
  )
})

export default RefChildren
