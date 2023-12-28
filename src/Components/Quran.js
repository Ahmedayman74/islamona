import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export const Quran = () => {
  const [quran, setQuran] = useState([]);
  const loading = (
    <div className="d-flex align-items-center justify-content-center h-100vh">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#343a40"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
  useEffect(() => {
    fetch(`https://api.alquran.cloud/v1/surah`)
      .then((response) => response.json())
      .then((data) => setQuran(data.data));
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-title home mb-4">
        <h1 className="text-center qr-surah-name">إِسْلَامُنَا</h1>
      </div>
      <div className="qr-container qr-font2">
        <div className="container pt-5">
          <div className="row">
            {quran.length !== 0
              ? quran.map((surah) => {
                  return (
                    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
                      <Link to={`/surah/${surah.number}`}>
                        <div className="surh-name-box">
                          <span className="surah-no">{surah.number}</span>
                          <span>{surah.name}</span>
                        </div>
                      </Link>
                    </div>
                  );
                })
              : loading}
          </div>
        </div>
      </div>
    </>
  );
};
