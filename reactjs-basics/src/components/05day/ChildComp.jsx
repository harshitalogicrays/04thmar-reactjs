import React from 'react'

const ChildComp = ({increase,decrease}) => {
  return (
  <>
    <button type="button" class="btn btn-primary me-2" onClick={()=>increase(1)}>+1 </button>

     <button type="button" class="btn btn-primary me-2" onClick={()=>increase(5)}>
     +5 </button>
    
     <button type="button" class="btn btn-primary me-2" onClick={()=>decrease(1)}>-1 </button>

<button type="button" class="btn btn-primary" onClick={()=>decrease(5)}>
-5 </button>
  </>
  )
}

export default ChildComp
