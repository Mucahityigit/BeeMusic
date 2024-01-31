import React, { useEffect, useState } from "react";
import MainArea from "../container/MainArea";
import LastListened from "../container/LastListened";
import { useLocation } from "react-router-dom";
import Loading from "../components/Loading";

const Home = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    // Simüle edilmiş bir asenkron işlem
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="flex w-full bg-red-300 bg-cover pb-16">
        <MainArea />
        {/* <LastListened /> */}
      </div>
    );
  }
};

export default Home;
