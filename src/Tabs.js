import { useState } from "react";
import "./App.css";
import Listbox from './Listbox';
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Menu Item Map
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Recipe Map
        </button>
        
          
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>Select a Menu Item to assign this Food Item Recipe</h2>
        
            <div className="dropdown">
            <button className="btn-sm btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                Select the Menu Item to assign
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Chicken Tikka</a></li>
            <li><a className="dropdown-item" href="#">Tandoori Chicken</a></li>
            <li><a className="dropdown-item" href="#">Yogurt</a></li>
            </ul>
            </div>
          
<br />

            <div class="card">
            <div class="card-body p-5 text-muted">
        Select one of the item from the list of Menu Items for the Provider
        <br />
        <br />
        <br />
        <br />
        <br />
            </div>
            </div>



        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <h2>Assign Ingrendients and Raw Ingrendients</h2>
          
        
  <div class="row gx-5">
    <div class="col">
     <div class="p-1 border bg-light">Prepared Ingrendients</div>
    </div>
    <div class="col">
      <div class="p-1 border bg-light">Assign Ingrendients</div>
    </div>
    <div class="col">
      <div class="p-1 border bg-light">Raw Ingrendients</div>
    </div>
  </div>

<br />
 


  <div class="row gx-5">
    <div class="col">
     <div class="p-3 border bg-light text-muted"><i>List of Prepared Ingrendients</i>
     <br /><br />

     <Listbox />

</div>
</div>
    
    <div class="col">
      <div class="p-2 border bg-light text-muted"><br/><br/><br/><br/><br/>Assigned Ingrendients<br/><br/><br/><br/><br/><br/></div>
    </div>
    <div class="col">
      <div class="p-2 border bg-light text-muted"><br/><br/><br/><br/><br/>List of Prepared Ingrendients<br/><br/><br/><br/><br/></div>
    </div>
    </div>
    </div>
    </div>
</div>
  );
}

export default Tabs;
