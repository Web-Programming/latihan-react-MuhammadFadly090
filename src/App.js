import "./App.css";
import Hello from "./Hello";
import Produk from "./Produk";
import Registrasi from "./Registrasi";



function App() {
    return (
        <div className="App">
            <header className="App-header">
            <Hello 
                nama="Muhammad fadly ukhrowi akhfir" 
                pesan="Semoga hari ini lebih baik dari sebelumnya"/>
                <Produk />
                <Registrasi />
            </header>
        </div>
    );
}

export default App;
