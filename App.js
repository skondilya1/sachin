import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
    const [alert, setAlert] = useState('null');  // this is for the alert option

    const showAlert = (message, type) => {
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
         setAlert(null);
      }, 1500);
    }
    const toggleMode = () => {
      if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
   }
      else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
    }
  }
return (
<>
 <Navbar title = "TextUtils"  aboutText="About" mode={mode} toggleMode={toggleMode}/>
 <Alert alert={alert}/>
 <div className="container my-3">
 
     <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/> 
    
</div>
  
</>
);
}

export default App;
