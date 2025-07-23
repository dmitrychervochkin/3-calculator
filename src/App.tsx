import "./App.scss";
import { Calculator, Decoration } from "./components";

function App() {
    return (
        <div className="app">
            <div className="decoration-container">
                <div className="decoration-container__top">
                    <Decoration
                        id="rectangle-1"
                        figure="rectangle"
                        size={200}
                    />
                    <Decoration id="mosaic-1" figure="mosaic" />
                    <Decoration
                        id="rectangle-2"
                        figure="rectangle"
                        size={300}
                    />
                </div>
                <div className="decoration-container__bottom">
                    <Decoration id="circle-1" figure="circle" size={400} />
                    <Decoration id="mosaic-2" figure="mosaic" />
                    <Decoration id="circle-2" figure="circle" size={200} />
                </div>
            </div>
            <Calculator />
        </div>
    );
}

export default App;
