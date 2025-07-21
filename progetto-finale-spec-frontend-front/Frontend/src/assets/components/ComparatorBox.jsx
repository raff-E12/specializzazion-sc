import React from 'react'

export default function ComparatorBox() {
  return (<>
   <div className="comparator-box position-fixed bottom-0 end-0 m-4 p-3 bg-white shadow rounded">
      <h6>🔍 Comparatore</h6>
      <div className="d-flex gap-2" id="compareItems"></div>
      <a href="compare.html" className="btn btn-primary btn-sm mt-2 disabled" id="compareBtn">Confronta</a>
    </div>
  </>)
}
