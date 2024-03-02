const ReactDOM = window.ReactDOM; 
    const React = window.React; 

    // const heading = React.createElement("h1",
    // // we give id class  attribute inside the array
    //  {id:"heading"},
    //   "Hello World From React!");
      
    // const root = ReactDOM.createRoot(document.getElementById("root")); 
    // root.render(heading);
    const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[React.createElement("h1",{},"Hello World From React!"),React.createElement("h1",{},"Hello World From React!")]
    ),React.createElement("div",{id:"child2"},React.createElement("h1",{},"Hello World")));
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
   
    