import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import moment from "moment/moment";
import "moment/locale/ar-dz";
import { motion } from "framer-motion";

export const Azan = () => {
  const [timings, setTimings] = useState({
    Fajr: "",
    Dhuhr: "",
    Asr: "",
    Maghrib: "",
    Isha: "",
  });

  const [cities, setCities] = useState(["cairo", "القاهرة"]);
  const [nextPrayerName, setNextPrayerName] = useState("");
  const [nextPrayerTime, setNextPrayerTime] = useState("");

  let date = new Date();

  let city = localStorage.getItem("city");

  useEffect(() => {
    if (city !== null) {
      setCities(city.split(","));
    }
  }, []);

  useEffect(() => {
    fetch(
      `https://api.aladhan.com/v1/timingsByCity/${date.getDate()}-${
        date.getMonth() + 1
      }-${date.getFullYear()}?city=${cities[0]}&country=egypt`
    )
      .then((response) => response.json())
      .then((data) => setTimings(data.data.timings));
  }, [cities]);

  useEffect(() => {
    let interval = setInterval(() => {
      timerCounter();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  let timerCounter = () => {
    let nextPrayerName = null;
    let nextPrayerTime = null;
    if (
      moment().isAfter(moment(timings.Fajr, "hh:mm")) &&
      moment().isBefore(moment(timings.Dhuhr, "hh:mm"))
    ) {
      nextPrayerName = "الضهر";
      let diff = moment(timings.Dhuhr, "hh:mm").diff(moment());
      nextPrayerTime = `${moment.duration(diff).hours()} : ${moment
        .duration(diff)
        .minutes()} : ${moment.duration(diff).seconds()}`;
    } else if (
      moment().isAfter(moment(timings.Dhuhr, "hh:mm")) &&
      moment().isBefore(moment(timings.Asr, "hh:mm"))
    ) {
      nextPrayerName = "العصر";
      let diff = moment(timings.Asr, "hh:mm").diff(moment());
      nextPrayerTime = `${moment.duration(diff).hours()} : ${moment
        .duration(diff)
        .minutes()} : ${moment.duration(diff).seconds()}`;
    } else if (
      moment().isAfter(moment(timings.Asr, "hh:mm")) &&
      moment().isBefore(moment(timings.Maghrib, "hh:mm"))
    ) {
      nextPrayerName = "المغرب";
      let diff = moment(timings.Maghrib, "hh:mm").diff(moment());
      nextPrayerTime = `${moment.duration(diff).hours()} : ${moment
        .duration(diff)
        .minutes()} : ${moment.duration(diff).seconds()}`;
    } else if (
      moment().isAfter(moment(timings.Maghrib, "hh:mm")) &&
      moment().isBefore(moment(timings.Isha, "hh:mm"))
    ) {
      nextPrayerName = "العشاء";
      let diff = moment(timings.Isha, "hh:mm").diff(moment());
      nextPrayerTime = `${moment.duration(diff).hours()} : ${moment
        .duration(diff)
        .minutes()} : ${moment.duration(diff).seconds()}`;
    } else {
      nextPrayerName = "الفجر";
      let diff = moment(timings.Fajr, "hh:mm").diff(moment());
      nextPrayerTime = `${moment.duration(diff).hours()} : ${moment
        .duration(diff)
        .minutes()} : ${moment.duration(diff).seconds()}`;
    }

    setNextPrayerName(nextPrayerName);
    setNextPrayerTime(nextPrayerTime);
  };

  let governateArray = [
    { id: "1", governorate_name_ar: "القاهرة", governorate_name_en: "Cairo" },
    { id: "2", governorate_name_ar: "الجيزة", governorate_name_en: "Giza" },
    {
      id: "3",
      governorate_name_ar: "الأسكندرية",
      governorate_name_en: "Alexandria",
    },
    {
      id: "4",
      governorate_name_ar: "الدقهلية",
      governorate_name_en: "Dakahlia",
    },
    {
      id: "5",
      governorate_name_ar: "البحر الأحمر",
      governorate_name_en: "Red Sea",
    },
    { id: "6", governorate_name_ar: "البحيرة", governorate_name_en: "Beheira" },
    { id: "7", governorate_name_ar: "الفيوم", governorate_name_en: "Fayoum" },
    {
      id: "8",
      governorate_name_ar: "الغربية",
      governorate_name_en: "Gharbiya",
    },
    {
      id: "9",
      governorate_name_ar: "الإسماعلية",
      governorate_name_en: "Ismailia",
    },
    {
      id: "10",
      governorate_name_ar: "المنوفية",
      governorate_name_en: "Menofia",
    },
    { id: "11", governorate_name_ar: "المنيا", governorate_name_en: "Minya" },
    {
      id: "12",
      governorate_name_ar: "القليوبية",
      governorate_name_en: "Qaliubiya",
    },
    {
      id: "13",
      governorate_name_ar: "الوادي الجديد",
      governorate_name_en: "New Valley",
    },
    { id: "14", governorate_name_ar: "السويس", governorate_name_en: "Suez" },
    { id: "15", governorate_name_ar: "اسوان", governorate_name_en: "Aswan" },
    { id: "16", governorate_name_ar: "اسيوط", governorate_name_en: "Assiut" },
    {
      id: "17",
      governorate_name_ar: "بني سويف",
      governorate_name_en: "Beni Suef",
    },
    {
      id: "18",
      governorate_name_ar: "بورسعيد",
      governorate_name_en: "Port Said",
    },
    { id: "19", governorate_name_ar: "دمياط", governorate_name_en: "Damietta" },
    {
      id: "20",
      governorate_name_ar: "الشرقية",
      governorate_name_en: "Sharkia",
    },
    {
      id: "21",
      governorate_name_ar: "جنوب سيناء",
      governorate_name_en: "South Sinai",
    },
    {
      id: "22",
      governorate_name_ar: "كفر الشيخ",
      governorate_name_en: "Kafr Al sheikh",
    },
    { id: "23", governorate_name_ar: "مطروح", governorate_name_en: "Matrouh" },
    { id: "24", governorate_name_ar: "الأقصر", governorate_name_en: "Luxor" },
    { id: "25", governorate_name_ar: "قنا", governorate_name_en: "Qena" },
    {
      id: "26",
      governorate_name_ar: "شمال سيناء",
      governorate_name_en: "North Sinai",
    },
    { id: "27", governorate_name_ar: "سوهاج", governorate_name_en: "Sohag" },
  ];

  return (
    <>
      <Navbar />
      {timings !== "" && (
        <div
          className="overflow-hidden container pt-5 "
          // initial={{scale : 0}}
          // animate={{ scale : 1}}
          // transition={{duration : 0.5}}
        >
          <div className="azan-detalis d-flex justify-content-between mb-3">
            <div>
              <span className="d-inline-block mb-2">
                {moment().format("MMM Do YYYY | h:mm")}
              </span>
              {cities.length !== 0 && <h1 className="">{cities[1]}</h1>}
            </div>
            <div>
              <span className="d-inline-block mb-2">
                متبقي حتي صلاه {nextPrayerName}
              </span>
              <h2 style={{ direction: "ltr" }}>{nextPrayerTime}</h2>
            </div>
          </div>
          <div className="d-flex align-items-center flex-column">
            <div className="grid-lg align-items-center">
              <div>
                <div className="azan-box">
                  <img
                    className="w-100"
                    src={require("../imgs/Muslim-child-prays-inside-mosque.2e16d0ba.fill-768x432.jpg")}
                    alt="React Logo"
                  />
                  <div className="azan-box-timing">
                    <p className="pt-4 pb-4 fs-5 sec-c">الفجر</p>
                    <p className="azan-time text-center">{timings.Fajr}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="azan-box">
                  <img
                    className="w-100"
                    src={require("../imgs/Prayer_in_Cairo_1865.jpg")}
                    alt="React Logo"
                  />
                  <div className="azan-box-timing">
                    <p className="pt-4 pb-4 fs-5 sec-c">الضهر</p>
                    <p className="azan-time text-center">{timings.Dhuhr}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="azan-box">
                  <img
                    className="w-100"
                    src={require("../imgs/colors-in-islamic-architecture_1.jpg")}
                    alt="React Logo"
                  />
                  <div className="azan-box-timing">
                    <p className="pt-4 pb-4 fs-5 sec-c">العصر</p>
                    <p className="azan-time text-center">{timings.Asr}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="azan-box">
                  <img
                    className="w-100"
                    src={require("../imgs/Why-We-Need-Ulama-Islamic-Knowledge-in-a-Secular-Age_Rectangle_4000x2250-scaled.jpg")}
                    alt="React Logo"
                  />
                  <div className="azan-box-timing">
                    <p className="pt-4 pb-4 fs-5 sec-c">المغرب</p>
                    <p className="azan-time text-center">{timings.Maghrib}</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="azan-box">
                  <img
                    className="w-100"
                    src={require("../imgs/islamic-xptqk5xw6adpezzv.jpg")}
                    alt="React Logo"
                  />
                  <div className="azan-box-timing">
                    <p className="pt-4 pb-4 fs-5 sec-c">العشاء</p>
                    <p className="azan-time text-center">{timings.Isha}</p>
                  </div>
                </div>
              </div>
            </div>
            <select
              onChange={(e) => {
                setCities(e.target.value.split(","));
                localStorage.setItem("city", e.target.value.split(","));
              }}
              className="form-select mt-4"
              aria-label="Default select example">
              <option selected>{city ? city.split(",")[1] : cities[1]}</option>
              {governateArray.map((g) => {
                return (
                  <option
                    value={[g.governorate_name_en, g.governorate_name_ar]}>
                    {g.governorate_name_ar}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
      )}
    </>
  );
};
