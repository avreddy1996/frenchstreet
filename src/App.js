import './App.css';
import desktopVideo from './desktop.mp4';
import mobileVideo from './mobile.mp4';

function App() {
  const getVideoSrc = width => {
    if (width >= 720) return desktopVideo;
    return mobileVideo;
  };
  const src = getVideoSrc(window.innerWidth);
  return (
    <div className="App">
      <video autoPlay playsInline muted width={window.innerWidth} height={window.innerHeight}>
        <source src={src} type="video/mp4"></source>
      </video>
    </div>
  );
}

export default App;
