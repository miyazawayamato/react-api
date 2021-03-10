import './App.css';
import Qualification from './quali.js';
import Contact from './contact.js';
// import Test from './test.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <h2>資格情報取得</h2>
      < Qualification />
      <h3>お問い合わせ</h3>
      <p>※実際に入力したアドレスに確認メールが届きます。</p>
      < Contact />
    </div>
  );
}

export default App;
