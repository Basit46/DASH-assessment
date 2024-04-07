import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import AllReviews from "./components/AllReviews";
import CreateReview from "./components/CreateReview";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  return (
    <div className="">
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-reviews" element={<AllReviews />} />
      </Routes>

      {/* Modals */}
      <CreateReview
        isModalOpen={isCreateModalOpen}
        setIsModalOpen={setIsCreateModalOpen}
      />
    </div>
  );
};

export default App;
