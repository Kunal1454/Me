import "./App.css";
import Home from "./components/home";
import { motion } from "framer-motion";
import Header from "./components/header";

function App() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="App">
        <Header />
        <Home />
      </div>
    </motion.div>
  );
}

export default App;
