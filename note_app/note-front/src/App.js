import "./App.css";
import { NotesListPage } from "./pages/NotesListPage";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NotePage } from "./pages/NotePage";

function App() {
  return (
    <Router>
      <div className="container dark">
        <div className="app">
          <Header />
          <Routes>
            <Route path="/" exact Component={NotesListPage} />
            <Route path="note/:noteId" Component={NotePage} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
